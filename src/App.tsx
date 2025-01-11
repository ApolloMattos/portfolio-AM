import { BrowserRouter} from "react-router-dom"
import { Header } from "./assets/components/Header/Header"
import "./index.css"
import { Footer } from "./assets/components/Footer/Footer"
import { Home } from "./pages/home/Home"
import { About } from "./pages/about/About"
import { Projects } from "./pages/projects/Projects"
import { Contact } from "./pages/contact/Contact"
import { useRef } from "react"
// import { Sidebar } from "./assets/components/Sidebar/sidebar"
function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <BrowserRouter>
      {/* <Sidebar refs={{
          home: homeRef,
          about: aboutRef,
          projects: projectsRef,
          contact: contactRef,
        }}/> */}

      <Header 
        refs={{
          home: homeRef,
          about: aboutRef,
          projects: projectsRef,
          contact: contactRef,
        }}
      />        

      <main>
        <div ref={homeRef}> <Home /> </div>
        <div ref={aboutRef}> <About /></div>
        <div ref={projectsRef}> <Projects /> </div>
        <div ref={contactRef}> <Contact /> </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
const mediaQuery = window.matchMedia("(min-width: 768px)");

const element = document.querySelector(".navbar__list");

const handleMediaQueryChange = (event: MediaQueryListEvent | MediaQueryList) => {
  if (element) {
    if (event.matches) {
      element.classList.remove("sidebar")
      console.log("no-sidebar")
    } else {
      element.classList.add("sidebar")
      console.log("sidebar")
    }
  }
};

handleMediaQueryChange(mediaQuery);

// Listen for changes in the media query
mediaQuery.addEventListener("change", handleMediaQueryChange);

export default App
