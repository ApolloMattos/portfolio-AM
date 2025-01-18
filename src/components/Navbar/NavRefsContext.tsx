import { createContext } from "react";

export type NavRefType = {
  refs: {
    homeRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  };

  navItems: Array<{ name: string; section: string; isCta?: Boolean }>;
};

export const NavRefContext = createContext<NavRefType | null>(null);
