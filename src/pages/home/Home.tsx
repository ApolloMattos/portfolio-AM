import { BackgroundNoise } from "./BackgroundNoise";
import { Hero } from "./Hero";
// import { SkillSet } from "./SkillSet";
import "./home.css";

// const skillList = [
//   { name: "React" },
//   { name: "Vite" },
//   { name: "Tailwind" },
//   { name: "TypeScript" },
//   { name: "JavaScript" },
//   { name: "HTML" },
//   { name: "CSS" },
// ];

export function Home() {
  return (
    <section
      className="home items-center flex relative overflow-hidden z-0 "
      id="home"
    >
      <BackgroundNoise />

      <Hero />
      {/* <SkillSet skillList={skillList} /> */}
    </section>
  );
}
