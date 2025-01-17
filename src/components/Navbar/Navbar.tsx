import "./navbar.css";
import { HamburgerBtn } from "./HamburgerButton";
import { CloseBtn } from "./CloseButton";
import { useContext, useEffect, useState } from "react";
import { NavRefContext } from "./NavRefsContext";
import { Backdrop } from "../backdrop";
import { Navlist } from "./NavList";
import "./navbar.css"
import "./sidebar.css"

export function Navbar() {
  const context = useContext(NavRefContext);
  if (!context) {
    throw new Error("NavRefContext não encontrado!");
  }

  const toggleSidebar = () => setSidebar(!sidebar);
  const [sidebar, setSidebar] = useState(false);
  const [navbarClass, setNavbarClass] = useState("navbar");
  const sidebarClass = sidebar ? "open" : "";

  const switchSidebar = () => {
    if (window.innerWidth < 800) {
      setNavbarClass("sidebar");
    } else {
      setNavbarClass("navbar");
      if (sidebar) toggleSidebar(); 
    }
  };

  useEffect(() => {
    switchSidebar();
    window.addEventListener("resize", switchSidebar);

    return () => {
      window.removeEventListener("resize", switchSidebar)
    };
  }, []);


  return (
    <>
      <Backdrop isVisible={sidebar}></Backdrop>
      <HamburgerBtn toggleSidebar={toggleSidebar} />

      <nav className={`${navbarClass} ${sidebarClass}`}>
        <CloseBtn toggleSidebar={toggleSidebar} />
        <Navlist />
      </nav>
    </>
  );
}
