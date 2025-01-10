import { useEffect, useRef, useState } from "react";
import { scrollToSection } from "../scrollIntoView";
import { getActiveSection, toggleSidebarClass } from "./sidebarUtils"; // Importe as funções

import "./sidebar.css";

type sidebarProps = {
  refs: {
    home: React.RefObject<HTMLDivElement>;
    about: React.RefObject<HTMLDivElement>;
    projects: React.RefObject<HTMLDivElement>;
    contact: React.RefObject<HTMLDivElement>;
  };
};

export function Sidebar({ refs }: sidebarProps) {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Utilizando a função importada para gerenciar a classe 'open'
    toggleSidebarClass(sidebarRef, isOpen);
  }, [isOpen]);

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Usando a função importada para verificar a seção ativa
      const currentSection = getActiveSection(refs);
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refs]);

  return (
    <nav className="sidebar" ref={sidebarRef}>
      <button onClick={toggleSidebar} className="sidebar__toggle-btn">
        {isOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <button
            onClick={() => scrollToSection(refs.home)}
            className={`sidebar__link ${activeSection === "home" ? "active" : ""}`}
          >
            Home
          </button>
        </li>
        <li className="sidebar__item">
          <button
            onClick={() => scrollToSection(refs.about)}
            className={`sidebar__link ${activeSection === "about" ? "active" : ""}`}
          >
            About
          </button>
        </li>
        <li className="sidebar__item">
          <button
            onClick={() => scrollToSection(refs.projects)}
            className={`sidebar__link ${activeSection === "projects" ? "active" : ""}`}
          >
            Projects
          </button>
        </li>
        <li className="sidebar__item">
          <button
            onClick={() => scrollToSection(refs.contact)}
            className={`sidebar__link ${activeSection === "contact" ? "active" : ""}`}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
