
import React from 'react';

export const MockNav = ({ theme, title }) => (
    <div className="mock-nav" style={{
        fontFamily: theme.font,
        borderBottom: `1px solid ${theme.primary}20`
    }}>
        <div className="mock-params">
            <span style={{ color: theme.primary }}>https://www.{title.toLowerCase().replace(/\s/g, '')}.com</span>
        </div>
        <div className="mock-nav-content">
            <span className="mock-logo" style={{ color: theme.primary }}>{title}</span>
            <div className="mock-links">
                {['Home', 'Services', 'Gallery', 'Contact'].map(link => (
                    <span key={link} style={{ color: theme.primary }}>{link}</span>
                ))}
            </div>
        </div>
    </div>
);

export const MockHero = ({ config, theme, children }) => {
    // Enhanced Hero with specialized layouts
    const heroStyle = {
        fontFamily: theme.font,
        color: config.textColor || 'white' // Allow override
    };

    return (
        <div className={`mock-hero-modern ${config.type}`} style={heroStyle}>
            {/* Background Layers */}
            {config.type === 'video-loop' && <div className="video-overlay" />}
            {config.img && (
                <div className="hero-bg-image" style={{ backgroundImage: `url(${config.img})` }} />
            )}

            {/* Content Content */}
            <div className="hero-content-modern relative z-10">
                {children}
            </div>
        </div>
    );
};
