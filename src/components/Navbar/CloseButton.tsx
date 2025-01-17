type CloseBtnProps = {
  toggleSidebar: () => void;
};

export function CloseBtn({ toggleSidebar }: CloseBtnProps) {
  return (
    <button className="block h-20 w-full fill-black md:hidden active:fill-red-700 z-20" onClick={toggleSidebar}>
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
