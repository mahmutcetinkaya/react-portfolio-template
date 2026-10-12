import React, { useEffect, useMemo, useState } from 'react';
import { portfolioData } from './data/portfolioData';
import './index.scss';

type SectionId = 'hero' | 'about' | 'skills' | 'projects' | 'timeline' | 'contact';

const sectionNav: { id: SectionId; label: string }[] = [
  { id: 'hero', label: 'Ana Sayfa' },
  { id: 'about', label: 'Hakkımda' },
  { id: 'skills', label: 'Yetenekler' },
  { id: 'projects', label: 'Projeler' },
  { id: 'timeline', label: 'Deneyim / Eğitim' },
  { id: 'contact', label: 'İletişim' }
];

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return false;
    }

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[data-section]');

    if (typeof IntersectionObserver === 'undefined') {
      sections.forEach((section) => section.classList.add('is-visible'));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');

          if (prefersReducedMotion) {
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -60px 0px' }
    );

    sections.forEach((section) => revealObserver.observe(section));

    return () => revealObserver.disconnect();
  }, [prefersReducedMotion]);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[data-section]');

    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const sectionId = entry.target.getAttribute('data-section') as SectionId | null;
          if (sectionId) {
            setActiveSection(sectionId);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0.05 }
    );

    sections.forEach((section) => activeObserver.observe(section));

    return () => activeObserver.disconnect();
  }, []);

  const { profile, socialLinks, skills, projects, timeline, contact } = portfolioData;

  return (
    <div className="app-shell" data-reduced-motion={prefersReducedMotion}>
      <div className="ambient-layer" aria-hidden="true">
        <span className="ambient-orb ambient-orb-primary" />
        <span className="ambient-orb ambient-orb-secondary" />
      </div>

      <header className="site-header" id="top">
        <a href="#hero" className="brand" aria-label="Ana sayfaya git">
          {profile.name}
        </a>

        <nav aria-label="Bölüm navigasyonu">
          <ul>
            {sectionNav.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={activeSection === section.id ? 'is-active' : ''}
                  aria-current={activeSection === section.id ? 'page' : undefined}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" data-section="hero" className="section hero-section reveal-on-scroll is-visible">
          <p className="eyebrow">Kişisel Portföy</p>
          <h1>{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-description">{profile.heroDescription}</p>
          <div className="cta-row">
            <a href="#projects" className="btn btn-primary" aria-label="Projeler bölümüne git">
              Projeleri İncele
            </a>
            <a href={profile.cvUrl} className="btn btn-secondary" aria-label="CV dosyasını görüntüle">
              CV Görüntüle
            </a>
          </div>
        </section>

        <section id="about" data-section="about" className="section reveal-on-scroll">
          <h2>Hakkımda</h2>
          <p>{profile.about}</p>
          <ul className="meta-list">
            <li>
              <span>Konum</span>
              <strong>{profile.location}</strong>
            </li>
            <li>
              <span>E-posta</span>
              <strong>{profile.email}</strong>
            </li>
          </ul>
        </section>

        <section id="skills" data-section="skills" className="section reveal-on-scroll">
          <h2>Yetenekler</h2>
          <div className="chip-grid">
            {skills.map((skill) => (
              <span className="chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" data-section="projects" className="section reveal-on-scroll">
          <h2>Projeler</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tag-list" aria-label={`${project.title} teknolojileri`}>
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} kaynak kodu`}>
                    Kaynak Kod
                  </a>
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} canlı önizleme`}>
                    Canlı Demo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="timeline" data-section="timeline" className="section reveal-on-scroll">
          <h2>Deneyim / Eğitim</h2>
          <ol className="timeline-list">
            {timeline.map((item) => (
              <li key={`${item.period}-${item.title}`}>
                <p className="timeline-period">{item.period}</p>
                <h3>{item.title}</h3>
                <p className="timeline-subtitle">{item.subtitle}</p>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" data-section="contact" className="section reveal-on-scroll">
          <h2>{contact.heading}</h2>
          <p>{contact.description}</p>
          <a
            href={`mailto:${contact.email}`}
            className="btn btn-primary"
            aria-label={`${contact.email} adresine e-posta gönder`}
          >
            {contact.ctaLabel}
          </a>
          <ul className="social-list" aria-label="Sosyal medya bağlantıları">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer" aria-label={`${social.label} profilini aç`}>
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} {profile.name} · Tüm hakları saklıdır.
        </p>
        <a href="#top" aria-label="Sayfanın başına dön">
          Yukarı Dön
        </a>
      </footer>
    </div>
  );
}

export default App;
