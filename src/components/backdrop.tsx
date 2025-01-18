import "./backdrop.css"

type BackdropProps = {
    isVisible: boolean;
    toggleSidebar: () => void;
};

export const Backdrop: React.FC<BackdropProps> = ({ isVisible, toggleSidebar }) => {

    return (
        
        isVisible && (
        <div className="backdrop" onClick={toggleSidebar}></div>
    )
);
};