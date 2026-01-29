import { useEffect, useState} from "react";
import "../CSS/backtotop.css"

function BackToTop(){
    const [show, setShow] = useState(false);

    useEffect(() => {
        const threshold = 140;

        const onScroll = () => {
            const y = window.scrollY || document.documentElement.scrollTop;
            setShow(y >= threshold);
        }

        window.addEventListener("scroll", onScroll, { passive : true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!show) return null;

    return (
        <button
            type="button"
            className="back-to-top"
            onClick={scrollToTop}
            title="Back to top"
        >
        </button>
    );
}

export default BackToTop