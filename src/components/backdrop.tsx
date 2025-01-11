import "./backdrop.css"

type BackdropProps = {
    isVisible: boolean;
};

export const Backdrop: React.FC<BackdropProps> = ({ isVisible }) => {

    return (
        
        isVisible && (
        <div className="backdrop"></div>
    )
);
};