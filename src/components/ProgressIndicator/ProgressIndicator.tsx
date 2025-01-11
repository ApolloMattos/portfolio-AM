import { useEffect, useState } from "react";
import "./progress-indicator.css";

export function ProgressIndicator() {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const updateScrollPercentage = () => {
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const percentageScrolled = (scrolled / documentHeight) * 100;
            setScrollPercentage(percentageScrolled);
        };

        window.addEventListener("scroll", updateScrollPercentage);

        return () => {
            window.removeEventListener("scroll", updateScrollPercentage);
        };
    }, []);

    return (
        <progress className="indicator" value={scrollPercentage} max={100}></progress>
    );
}
