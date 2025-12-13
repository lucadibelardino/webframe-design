import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <Link to="/" className="logo">
                    WebFrame<span className="dot">.</span>
                </Link>

                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                </div>

                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
                    <Link to="/portfolio" className={isActive('/portfolio') ? 'active' : ''}>Portfolio</Link>
                    <Link to="/pricing" className={isActive('/pricing') ? 'active' : ''}>Pricing</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
