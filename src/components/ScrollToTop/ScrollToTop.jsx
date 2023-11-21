import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Resetea la posición de desplazamiento a la parte superior
    }, [pathname]);

    return null;
};

export default ScrollToTop;
