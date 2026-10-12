import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { portfolioData } from "../data/portfolio";

function Contact() {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="section">
      <div className="section-inner reveal contact-layout">
        <div>
          <p className="eyebrow">İletişim</p>
          <h2>{contact.title}</h2>
          <p className="section-description">{contact.description}</p>
          <a className="button-primary" href={`mailto:${contact.email}`}>
            Mesaj Gönder
          </a>
        </div>
        <address className="card contact-card">
          <p>
            <EmailIcon aria-hidden="true" />
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p>
            <PhoneIcon aria-hidden="true" />
            <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>{contact.phone}</a>
          </p>
          <p>
            <LocationOnIcon aria-hidden="true" />
            <span>{contact.location}</span>
          </p>
        </address>
      </div>
    </section>
  );
}

export default Contact;
