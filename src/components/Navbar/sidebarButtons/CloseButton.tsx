import { setAttributes } from "../sidebarUtils";

type closeButtonProps = {
  navRef: React.RefObject<HTMLElement>;
  toggleSidebar: () => void;
};

export function CloseBtn({ toggleSidebar, navRef }: closeButtonProps) {
  const handleClick = () => {
    toggleSidebar();
    if (navRef.current) {
      setAttributes(navRef.current, false);
    }
  };
  return (
    <button
      onClick={handleClick}
      className="block bg-black bg-opacity-60  h-20 w-full fill-black md:hidden active:fill-red-700 z-20 "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        height="30px"
        width="30px"
        className="mr-3 ml-auto fill-white active:fill-red-700"
      >
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    </button>
  );
}
