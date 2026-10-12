import React, { useEffect } from "react";
import { Main, Timeline, Expertise, Project, Contact, Navigation, Footer } from "./components";
import "./index.scss";

function App() {
  useEffect(() => {
    const reducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );

    if (reducedMotion || typeof IntersectionObserver === "undefined") {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="main-container">
      <Navigation />
      <main>
        <Main />
        <Expertise />
        <Project />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
