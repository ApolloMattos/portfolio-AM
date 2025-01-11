import { useEffect, useState } from "react";
import "./navbar.css";
import { scrollToSection } from "../scrollIntoView";
import "../Sidebar/sidebar.css";

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
          window.scrollY >= ref.current.offsetTop - window.innerHeight/2 &&
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

  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);
  const sidebarClass = sidebar ? "open" : "";

  const switchSidebar = () => {
    if(window.innerWidth < 800){
      setNavbarClass("sidebar");
    } else{
      setNavbarClass("navbar")
    }
  };

  const [navbarClass, setNavbarClass] = useState("navbar");

  useEffect(() => {
    switchSidebar();
    window.addEventListener("resize", switchSidebar);

    return () => {
      window.removeEventListener("resize", switchSidebar)
    };
  }, []);


  return (
    <>
      {/* Hamburger button to open sidebar */}
      <button className="hamburger-button" onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#fff">
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </button>

      {/* Navigation bar */}
      <nav className={`${navbarClass} ${sidebarClass}`}>
        <ul className="list">

        {/*Button to close sidebar */}
        <button className="close-button" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
          </svg>
        </button>

          <li className="item">
            <button onClick={() => scrollToSection(refs.home)} className={`link ${activeSection === "home" ? "active" : ""}`}>
              Home
            </button>
          </li>

          <li className="item">
            <button onClick={() => scrollToSection(refs.about)} className={`link ${activeSection === "about" ? "active" : ""}`}>
              About
            </button>
          </li>

          <li className="item">
            <button onClick={() => scrollToSection(refs.projects)} className={`link ${activeSection === "projects" ? "active" : ""}`}>
              Projects
            </button>
          </li>
          
          <li className="item">
            <button onClick={() => scrollToSection(refs.contact)} className="link button--cta">
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
