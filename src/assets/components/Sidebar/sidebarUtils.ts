// Função para verificar a seção ativa no scroll
export const getActiveSection = (refs: any) => {
    const sections = [
      { name: "home", ref: refs.home },
      { name: "about", ref: refs.about },
      { name: "projects", ref: refs.projects },
      { name: "contact", ref: refs.contact },
    ];
  
    let currentSection = "home";
  
    sections.forEach(({ name, ref }) => {
      if (
        ref.current &&
        window.scrollY >= ref.current.offsetTop - 100 && // Ajuste de ativação
        window.scrollY < ref.current.offsetTop + ref.current.offsetHeight
      ) {
        currentSection = name;
      }
    });
  
    return currentSection;
  };
  
  // Função para gerenciar o toggle do sidebar
  export const toggleSidebarClass = (sidebarRef: any, isOpen: boolean) => {
    const sidebarElement = sidebarRef.current;
  
    if (sidebarElement) {
      if (isOpen) {
        sidebarElement.classList.add("open");
      } else {
        sidebarElement.classList.remove("open");
      }
    }
  };
  