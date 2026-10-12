import React from "react";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { portfolioData } from "../data/portfolio";

function Timeline() {
  return (
    <section id="timeline" className="section section-alt">
      <div className="section-inner reveal">
        <p className="eyebrow">Kariyer</p>
        <h2>Deneyim & Eğitim</h2>
        <ol className="timeline-list" aria-label="Deneyim ve eğitim zaman çizelgesi">
          {portfolioData.timeline.map((item) => (
            <li key={`${item.period}-${item.title}`} className="timeline-item">
              <span className="timeline-icon" aria-hidden="true">
                <WorkOutlineIcon />
              </span>
              <div>
                <p className="timeline-period">{item.period}</p>
                <h3>{item.title}</h3>
                <p className="timeline-organization">{item.organization}</p>
                <p>{item.details}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Timeline;
