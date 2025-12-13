
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content container">
                <div className="footer-col">
                    <h3>WebFrame.</h3>
                    <p>Creating digital experiences that matter. We build websites that drive growth and engagement.</p>
                </div>
                <div className="footer-col">
                    <h4>Links</h4>
                    <Link to="/">Home</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/pricing">Pricing</Link>
                </div>
                <div className="footer-col">
                    <h4>Connect</h4>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 WebFrame Agency. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
