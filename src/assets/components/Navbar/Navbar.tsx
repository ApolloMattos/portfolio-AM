import { useEffect, useState } from "react";
import "./navbar.css"
import {scrollToSection} from "../scrollIntoView" 
type NavbarProps = {
    refs: {
      home: React.RefObject<HTMLDivElement>;
      about: React.RefObject<HTMLDivElement>;
      projects: React.RefObject<HTMLDivElement>;
      contact: React.RefObject<HTMLDivElement>;
    };
  };
  

export function Navbar({ refs }: NavbarProps) {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { name: "home", ref: refs.home },
        { name: "about", ref: refs.about },
        { name: "projects", ref: refs.projects },
        { name: "contact", ref: refs.contact },
      ];

      let currentSection = "home";

      sections.forEach(({ name, ref }) => {
        if (
          ref.current &&
          window.scrollY >= ref.current.offsetTop - 100 && // Ajuste de ativação
          window.scrollY < ref.current.offsetTop + ref.current.offsetHeight
        ) {
          currentSection = name;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refs]);
    return (
    <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__item">
            <button  onClick={() => scrollToSection(refs.home)}
            className={`navbar__link ${activeSection === "home" ? "active" : ""}`}>Home</button>
          </li>
          <li className="navbar__item">
            <button  onClick={() => scrollToSection(refs.about)}
            className={`navbar__link ${activeSection === "about" ? "active" : ""}`}>About</button>
          </li>
          <li className="navbar__item">
            <button  onClick={() => scrollToSection(refs.projects)}
            className={`navbar__link ${activeSection === "projects" ? "active" : ""}`}>Projects</button>
          </li>
          <li className="navbar__item">
            <button  onClick={() => scrollToSection(refs.contact)} className="navbar__link navbar__button--cta">Contact</button>
          </li>
        </ul>
    </nav>
    );
  }