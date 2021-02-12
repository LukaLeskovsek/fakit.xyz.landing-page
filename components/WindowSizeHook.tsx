import { useState, useEffect } from 'react';

export enum WindowSize {
    Desktop = 1024,
}

const getWindowSize = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const useWindowSize = () => {
    const [windowDimensions, setWindowDimensions] = useState({width:220, height:220});

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default useWindowSize;
