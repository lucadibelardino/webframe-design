import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <Link to="/" className="logo">
                    WebFrame<span className="dot">.</span>
                </Link>
                <div className="nav-links">
                    <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
                    <Link to="/portfolio" className={isActive('/portfolio') ? 'active' : ''}>Portfolio</Link>
                    <Link to="/price" className={isActive('/price') ? 'active' : ''}>Pricing</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
