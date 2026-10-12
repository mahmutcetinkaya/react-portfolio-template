import React from "react";
import { portfolioData } from "../data/portfolio";

function Expertise() {
  return (
    <>
      <section id="about" className="section">
        <div className="section-inner reveal split-layout">
          <div>
            <p className="eyebrow">Profil</p>
            <h2>{portfolioData.about.title}</h2>
            <p className="section-description">{portfolioData.about.text}</p>
          </div>
          <ul className="highlight-list" aria-label="Öne çıkan bilgiler">
            {portfolioData.about.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="skills" className="section section-alt">
        <div className="section-inner reveal">
          <p className="eyebrow">Yetkinlikler</p>
          <h2>Yetenekler</h2>
          <div className="skills-grid">
            {portfolioData.skills.map((group) => (
              <article key={group.category} className="card skill-card">
                <h3>{group.category}</h3>
                <ul className="tag-list" aria-label={`${group.category} teknolojileri`}>
                  {group.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Expertise;
