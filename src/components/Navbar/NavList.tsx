import { useContext, useEffect, useState } from "react";
import { NavRefContext } from "./NavRefsContext";
import { scrollToSection } from "../scrollToSection";

export function Navlist() {
  const context = useContext(NavRefContext);
  if (!context) {
    throw new Error("NavRefContext não encontrado!");
  }

  const navItems = context.navItems;
  const refs = context.refs;
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(refs) as Array<keyof typeof refs>;

      let currentSection = "home"; // Seção padrão

      sections.forEach((key) => {
        const ref = refs[key]; // Acessa a ref correspondente à chave
        const name = key.replace("Ref", "").toLowerCase(); // Deriva o nome da seção

        if (
          ref.current &&
          window.scrollY >= ref.current.offsetTop - window.innerHeight / 2 &&
          window.scrollY < ref.current.offsetTop + ref.current.offsetHeight
        ) {
          currentSection = name; // Atualiza a seção ativa
        }
      });

      setActiveSection(currentSection); // Atualiza o estado da seção ativa
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ul className="list">
      {navItems.map((item) => {
        const refKey = `${item.section}Ref` as keyof typeof refs;

        return (
          <li className="item" key={item.section}>
            <a
              onClick={() => scrollToSection(refs[refKey])}
              className={`link ${activeSection === item.section ? "active" : ""} ${item.isCta ? "button--cta" : ""}`}
            >
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
