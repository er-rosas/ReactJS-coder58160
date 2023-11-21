import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    // Define your exceptions here
    const exceptions = ['category', 'anotherexception']; // Add as many exceptions as needed

    const isHomePage = location.pathname === '/';

    if (isHomePage) {
        return null; // Do not render Breadcrumb component if on the home page
    }

    return (
        <div>
        {pathnames.length > 0 && (
            <Link to="/">Home</Link>
        )}
        {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;

            if (exceptions.includes(name.toLowerCase()) && !isLast) {
            return (
                <span key={name}>
                <span> / </span>
                <Link to="/">{name}</Link>
                </span>
            );
            }

            return (
            <span key={name}>
                <span> / </span>
                {isLast ? (
                <span>{name}</span>
                ) : (
                <Link to={routeTo}>{name}</Link>
                )}
            </span>
            );
        })}
        </div>
    );
};

export default Breadcrumb;
