import "./styles/global.css";
import "./styles/reset.css";
import "./styles/variables.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Projects } from "./pages/projects/Projects";
import { Contact } from "./pages/contact/Contact";
import { useRef } from "react";
import { NavRefContext, NavRefType } from "./components/Navbar/NavRefsContext";

function App() {
  const navRefs: NavRefType = {
    refs: {
      homeRef: useRef<HTMLDivElement>(null),
      aboutRef: useRef<HTMLDivElement>(null),
      projectsRef: useRef<HTMLDivElement>(null),
      contactRef: useRef<HTMLDivElement>(null),
    },

    navItems: [
      { name: "Home", section: "home" },
      { name: "About", section: "about" },
      { name: "Projects", section: "projects" },
      { name: "Contact", section: "contact", isCta: true },
    ],
  };

  return (
    <>
      <NavRefContext.Provider value={navRefs}>
        <Header />
      </NavRefContext.Provider>

      <main>
        <div ref={navRefs.refs.homeRef}>
          <Home />
        </div>
        <div ref={navRefs.refs.aboutRef}>
          <About />
        </div>
        <div ref={navRefs.refs.projectsRef}>
          <Projects />
        </div>
        <div ref={navRefs.refs.contactRef}>
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
