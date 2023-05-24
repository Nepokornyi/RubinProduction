
import { useEffect, useState } from "react";

export function useWindowDimension() {
    const [dimension, setDimension] = useState({ height: window.innerWidth * 9 / 16 })

    useEffect(() => {
        const handleResize = () => {
            setDimension({ height:window.innerWidth * 9 / 16});
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize)
    }, []);


    return dimension

}