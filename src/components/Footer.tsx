import React from "react";
import { portfolioData } from "../data/portfolio";

function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} {portfolioData.hero.name}</p>
      <p>{portfolioData.footer.note}</p>
    </footer>
  );
}

export default Footer;
