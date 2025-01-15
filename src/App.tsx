import "./styles/global.css"
import "./styles/reset.css"
import "./styles/variables.css"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { Home } from "./pages/home/Home"
import { About } from "./pages/about/About"
import { Projects } from "./pages/projects/Projects"
import { Contact } from "./pages/contact/Contact"
import { useRef } from "react"

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header 
        refs={{
          home: homeRef,
          about: aboutRef,
          projects: projectsRef,
          contact: contactRef,
        }}
      />        

      <main>
        <div className="sas" ref={homeRef}> <Home /> </div>
        <div ref={aboutRef}> <About /></div>
        <div ref={projectsRef}> <Projects /> </div>
        <div ref={contactRef}> <Contact /> </div>
      </main>
      <Footer />
    </>
  );
}


export default App
