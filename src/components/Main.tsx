import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { portfolioData, SocialLink } from "../data/portfolio";

const iconByPlatform: Record<SocialLink["platform"], JSX.Element> = {
  github: <GitHubIcon aria-hidden="true" />,
  linkedin: <LinkedInIcon aria-hidden="true" />,
  email: <AlternateEmailIcon aria-hidden="true" />,
};

function Main() {
  const { hero } = portfolioData;

  return (
    <section id="hero" className="section hero-section">
      <div className="section-inner reveal">
        <p className="eyebrow">{hero.greeting}</p>
        <h1>{hero.name}</h1>
        <p className="hero-title">{hero.title}</p>
        <p className="hero-description">{hero.description}</p>

        <div className="hero-actions">
          <a className="button-primary" href={`#${hero.primaryCta.targetId}`}>
            {hero.primaryCta.label}
          </a>
          <a className="button-secondary" href={`#${hero.secondaryCta.targetId}`}>
            {hero.secondaryCta.label}
          </a>
        </div>

        <ul className="social-list" aria-label="Sosyal bağlantılar">
          {hero.socialLinks.map((link) => (
            <li key={link.platform}>
              <a href={link.url} target="_blank" rel="noreferrer" aria-label={link.label}>
                {iconByPlatform[link.platform]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Main;
