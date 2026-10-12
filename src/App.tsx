import React, { useEffect, useState } from 'react';
import './index.scss';

type Project = {
  title: string;
  description: string;
  tags: string[];
  accent: string;
  href: string;
};

const profile = {
  name: 'Sefa Zozik',
  role: 'Mücevher tasarımı ve dijital marka deneyimleri',
  intro: 'Zamansız tasarım anlayışını, güçlü marka hikâyeleri ve etkileyici dijital deneyimlerle buluşturuyorum.',
  email: 'info@zozijewellery.com',
  github: 'https://github.com/',
  linkedin: 'https://tr.linkedin.com/company/zozi-jewellery',
};

const skills = ['Mücevher Tasarımı', 'Marka Deneyimi', 'Ürün Geliştirme', 'UI/UX', 'E-ticaret', 'Cloudflare', 'Dijital Pazarlama', 'Responsive Design'];

const projects: Project[] = [
  {
    title: 'Zozi Jewellery',
    description: 'Zamansız mücevher tasarımını güçlü bir marka dili ve modern dijital deneyimle buluşturan marka çalışması.',
    tags: ['Jewellery', 'Branding', 'E-commerce'],
    accent: 'violet',
    href: profile.linkedin,
  },
  {
    title: 'Yeni Koleksiyon',
    description: 'Özgün tasarım yaklaşımını günlük yaşamla buluşturan yeni koleksiyon ve ürün deneyimi üzerinde çalışıyorum.',
    tags: ['Product', 'Design', 'Craft'],
    accent: 'cyan',
    href: `mailto:${profile.email}`,
  },
  {
    title: 'Dijital Marka Deneyimi',
    description: 'Marka hikâyesini, ürünleri ve iletişim kanallarını tek bir akıcı dijital deneyimde bir araya getiren çalışmalar.',
    tags: ['Digital', 'UI/UX', 'Web'],
    accent: 'orange',
    href: profile.linkedin,
  },
];

const ArrowUpRight = () => <span className="arrow" aria-hidden="true">↗</span>;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-35% 0px -55% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="noise" aria-hidden="true" />
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Ana sayfaya git">
          <span className="brand-mark">S</span><span>sefa<span className="muted">.zozik</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Menüyü aç/kapat">
          <span /><span />
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Ana navigasyon">
          {['home', 'about', 'work', 'contact'].map((item) => (
            <a key={item} className={activeSection === item ? 'active' : ''} href={`#${item}`} onClick={closeMenu}>
              <span>0{['home', 'about', 'work', 'contact'].indexOf(item) + 1}</span>{item === 'home' ? 'Ana Sayfa' : item === 'about' ? 'Hakkımda' : item === 'work' ? 'Çalışmalar' : 'İletişim'}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href={`mailto:${profile.email}`}>Birlikte çalışalım <ArrowUpRight /></a>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-grid" aria-hidden="true"><span /><span /><span /><span /><span /><span /></div>
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="status-dot" /> Müsaitim · Yeni projelere açığım</p>
            <h1>Merhaba, ben<br /><em>Sefa.</em></h1>
            <p className="hero-text">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Çalışmalarımı keşfet <ArrowUpRight /></a>
              <a className="button button-ghost" href={`mailto:${profile.email}`}>İletişime geç</a>
            </div>
          </div>
          <div className="hero-orbit reveal" aria-hidden="true">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="orbit-core"><span>SZ</span></div>
            <span className="floating-chip chip-react">◈ Jewellery</span><span className="floating-chip chip-design">✦ Design</span><span className="floating-chip chip-code">✧ Zozi</span>
          </div>
          <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><i /></div>
        </section>

        <section id="about" className="section-pad about-section">
          <div className="section-heading reveal"><span className="section-number">01 /</span><h2>Biraz <em>benim</em> hakkımda.</h2></div>
          <div className="about-grid">
            <div className="about-lead reveal"><p className="large-copy">Tasarım, zanaat ve detaylara olan ilgimi bir araya getirerek <strong>anlamlı marka deneyimleri</strong> üretiyorum.</p><p>Benim için iyi bir çalışma yalnızca güzel görünmekle kalmaz; bir hikâye anlatır, güven verir ve insanlarda iz bırakır. Her koleksiyonda bu dengeyi arıyorum.</p><a className="text-link" href={`mailto:${profile.email}`}>Hikâyemi konuşalım <ArrowUpRight /></a></div>
            <div className="stats reveal"><div><strong>10+</strong><span>Yıl deneyim</span></div><div><strong>20+</strong><span>Tamamlanan çalışma</span></div><div><strong>∞</strong><span>Yeni fikir</span></div></div>
          </div>
        </section>

        <section id="work" className="section-pad work-section">
          <div className="section-heading reveal"><span className="section-number">02 /</span><h2>Seçilmiş <em>çalışmalar.</em></h2><a className="text-link all-projects" href={profile.linkedin} target="_blank" rel="noreferrer">Zozi Jewellery'i keşfet <ArrowUpRight /></a></div>
          <div className="project-grid">{projects.map((project, index) => <article className={`project-card ${project.accent} reveal`} key={project.title} style={{ transitionDelay: `${index * 80}ms` }}><div className="project-visual"><span className="visual-index">0{index + 1}</span><span className="visual-symbol">{index === 0 ? '✦' : index === 1 ? '◌' : '⌁'}</span><span className="visual-label">CASE STUDY</span></div><div className="project-info"><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={project.href} className="card-link" target={project.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">Projeyi incele <ArrowUpRight /></a></div></article>)}</div>
        </section>

        <section className="section-pad skills-section"><div className="skills-wrap"><div className="section-heading reveal"><span className="section-number">03 /</span><h2>Çalıştığım <em>alanlar.</em></h2></div><div className="skill-list reveal">{skills.map((skill, index) => <span key={skill}><b>0{index + 1}</b>{skill}</span>)}</div></div></section>

        <section id="contact" className="section-pad contact-section"><div className="contact-card reveal"><p className="eyebrow">BİR FİKRİN Mİ VAR?</p><h2>Birlikte bir şeyler<br /><em>üretelim.</em></h2><p>Yeni bir koleksiyon, marka iş birliği veya sadece merhaba demek için bir mesajın varsa bana ulaş.</p><a className="button button-primary" href={`mailto:${profile.email}`}>E-posta gönder <ArrowUpRight /></a><div className="contact-decoration" aria-hidden="true">✦</div></div></section>
      </main>

      <footer className="footer"><span>© 2026 {profile.name}</span><span>Merakla, özenle ve biraz da <em>ilhamla.</em></span><div className="socials"><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">IN</a><a href={`mailto:${profile.email}`} aria-label="E-posta">@</a></div></footer>
    </div>
  );
}

export default App;
