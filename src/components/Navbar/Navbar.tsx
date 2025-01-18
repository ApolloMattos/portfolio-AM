import "./navbar.css";
import { OpenButton } from "./sidebarButtons/OpenButton";
import { CloseBtn } from "./sidebarButtons/CloseButton";
import { useContext, useEffect, useRef, useState } from "react";
import { NavRefContext } from "./NavRefsContext";
import { Backdrop } from "../backdrop";
import { Navlist } from "./NavList";
import "./sidebar.css";

export function Navbar() {
  const navbarRef = useRef<HTMLElement>(null);
  const context = useContext(NavRefContext);

  if (!context) {
    throw new Error("NavRefContext não encontrado!");
  }

  const [sidebarOpen, setSidebar] = useState(false);
  const [navbarClass, setNavbarClass] = useState("navbar");
  const sidebarClass = sidebarOpen ? "open" : "";

  // Função para alternar o estado do sidebar
  const toggleSidebar = () => setSidebar((prev) => !prev);

  // Função para ajustar o layout baseado no tamanho da janela
  const switchSidebar = () => {
    if (window.innerWidth < 768) {
      setNavbarClass("sidebar");
    } else {
      setNavbarClass("navbar");
      if (sidebarOpen) toggleSidebar(); // Fechar sidebar se estiver aberta
    }
  };

  useEffect(() => {
    switchSidebar(); // Chama a função ao carregar a página
    window.addEventListener("resize", switchSidebar); // Adiciona evento para o resize

    // Cleanup ao remover o event listener
    return () => {
      window.removeEventListener("resize", switchSidebar);
    };
  }, [sidebarOpen]); // O efeito agora depende de sidebarOpen

  return (
    <>
      <Backdrop isVisible={sidebarOpen} toggleSidebar={toggleSidebar} />
      <OpenButton navRef={navbarRef}  toggleSidebar={toggleSidebar}/>

      <nav ref={navbarRef} className={`${navbarClass} ${sidebarClass} z-50`}>
        <CloseBtn navRef={navbarRef} toggleSidebar={toggleSidebar} />
        <Navlist navRef={navbarRef} toggleSidebar={toggleSidebar}/>
      </nav>
    </>
  );
}
