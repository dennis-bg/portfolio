import React, { useState, useEffect } from "react";

export const useWindowWidth = () => {
    const [screenWidth, setWidth] = useState(window.innerWidth);

    
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return screenWidth;
}