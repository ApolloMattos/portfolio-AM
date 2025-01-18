import { setAttributes } from "../sidebarUtils";

type openButtonProps = {
  navRef: React.RefObject<HTMLElement>;
  toggleSidebar: () => void;
};

export function OpenButton({ toggleSidebar, navRef }: openButtonProps) {
  const handleClick = () => {
    toggleSidebar();
    if (navRef.current) {
      setAttributes(navRef.current, true);
    }
  };

  return (
    <button
      className="hamburger-button fill-white hidden"
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        height="30px"
        width="30px"
      >
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
    </button>
  );
}
