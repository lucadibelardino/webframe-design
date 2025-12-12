import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-left">
                    <div className="logo">WebFrame<span className="dot">.</span></div>
                    <p>Elevating digital experiences.</p>
                </div>
                <div className="footer-right">
                    <p>&copy; {new Date().getFullYear()} WebFrame Design. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
