import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";
import { portfolioData } from "../data/portfolio";

function Project() {
  return (
    <section id="projects" className="section">
      <div className="section-inner reveal">
        <p className="eyebrow">Seçili çalışmalar</p>
        <h2>Projeler</h2>
        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <article key={project.title} className="card project-card">
              <img src={project.image} alt={`${project.title} proje görseli`} loading="lazy" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tag-list" aria-label={`${project.title} teknolojileri`}>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} canlı demosunu aç`}>
                    <LaunchIcon aria-hidden="true" />
                    Demo
                  </a>
                  <a href={project.sourceUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} kaynak kodunu aç`}>
                    <CodeIcon aria-hidden="true" />
                    Kaynak Kod
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
