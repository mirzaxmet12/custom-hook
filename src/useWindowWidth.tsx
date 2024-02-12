import { useState } from 'react';

export function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    
    return windowWidth
}


