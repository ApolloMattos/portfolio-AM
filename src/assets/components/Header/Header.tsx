import "./header.css"
import { Navbar } from '../Navbar/Navbar';
import { ProgressIndicator } from "../ProgressIndicator/ProgressIndicator";
import { useEffect, useState } from "react";

type HeaderProps = {
  refs: {
    home: React.RefObject<HTMLDivElement>;
    about: React.RefObject<HTMLDivElement>;
    projects: React.RefObject<HTMLDivElement>;
    contact: React.RefObject<HTMLDivElement>;
  };
};

export function Header({ refs }: HeaderProps) {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    
    <header className={`site-header ${isAtTop ? "at-top" : ""}`}>
      <div className="header__container">
        <a className="logo" href="">Apollo Mattos</a>

        <Navbar refs={refs}/>
      </div>
      <div className="indicator__container">
        <ProgressIndicator/>
      </div>
    </header>
  );
}
