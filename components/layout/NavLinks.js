import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import ThemeToggle from '../elements/ThemeToggler';

// Extracted navLinks data to a separate constant
const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/page-service-details', label: 'Solutions' },
    {
        path: '/page-project-details', label: 'Projects', subLinks: [
            { subPath: '/page-services', subLabel: 'Services Grid' },
            { subPath: '/page-service-details', subLabel: 'Service Details' }
        ]
    },
    {
        path: '/page-about', label: 'About', subLinks: [
            { subPath: '/news-grid', subLabel: 'News Grid' },
            { subPath: '/news-details', subLabel: 'News Details' }
        ]
    },
    { path: '/page-contact', label: 'Contact' }
];

const NavLinks = React.memo(({ extraClassName }) => {
    const router = useRouter();
    const [activeLink, setActiveLink] = useState('/');

    useEffect(() => {
        setActiveLink(router.pathname);
    }, [router.pathname]);

    const handleClick = useCallback((url) => {
        if (activeLink !== url) {
            setActiveLink(url);
        }
    }, [activeLink]);

    const renderLinks = useMemo(() => (
        navLinks.map(({ path, label, subLinks }) => (
            <li key={path} className={activeLink === path ? 'current' : ''}>
                <Link href={path} onClick={() => handleClick(path)}>
                    {label}
                </Link>
                {subLinks && (
                    <ul>
                        {subLinks.map(({ subPath, subLabel }) => (
                            <li key={subPath} className={activeLink === subPath ? 'current' : ''}>
                                <Link href={subPath} onClick={() => handleClick(subPath)}>
                                    {subLabel}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        ))
    ), [activeLink, handleClick]);

    return (
        <ul className={`navigation ${extraClassName}`}>
            {renderLinks}
            {/* <ThemeToggle /> */}
        </ul>
    );
});

export default NavLinks;
