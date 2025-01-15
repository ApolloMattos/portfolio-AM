import { scrollToSection } from "../scrollIntoView";
import "../Sidebar/sidebar.css";

type SidebarProps = {
    refs: {
      home: React.RefObject<HTMLDivElement>;
      about: React.RefObject<HTMLDivElement>;
      projects: React.RefObject<HTMLDivElement>;
      contact: React.RefObject<HTMLDivElement>;
    };
};





export function Sidebar({refs}: SidebarProps) {

    type SectionKey = keyof SidebarProps["refs"];
const navItems: { name: string; section: SectionKey; isCta?: boolean }[] = [
  { name: "Home", section: "home" },
  { name: "About", section: "about" },
  { name: "Projects", section: "projects" },
  { name: "Contact", section: "contact", isCta: true },
];


  return (
    <>
     
      <nav className="sidebar">
        <ul className="list">
        {navItems.map((item) => (
          <li key={item.section} className="item">
            <button
              onClick={() => scrollToSection(refs[item.section])}
              className={`link ${
                item.isCta ? "button--cta" : ""
              }`}
            >
              {item.name}
            </button>
          </li>
        ))}
        </ul>
      </nav>
    </>
  );
}
