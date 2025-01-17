import { smoothScrollTo } from "./smoothScroll";

export const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
  if (ref.current) {
    const targetY = ref.current.offsetTop; 
    smoothScrollTo(targetY); 
  }
};
