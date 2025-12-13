
import React from 'react';
import { Link } from 'react-router-dom';
import ColorBends from '../components/ColorBends';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section with ColorBends Background */}
            <section className="hero-section">
                <div className="hero-background">
                    <ColorBends />
                </div>
                <div className="hero-content container">
                    <h1 className="hero-title">
                        Digital Experiences <br />
                        <span className="text-gradient">That Matter.</span>
                    </h1>
                    <p className="hero-subtitle">
                        We blend aesthetics with performance to build websites that drive growth.
                        Your vision, our craft.
                    </p>
                    <div className="hero-cta">
                        <Link to="/portfolio" className="btn btn-primary">View Our Work</Link>
                        <Link to="/pricing" className="btn btn-outline">See Pricing</Link>
                    </div>
                </div>
            </section>

            {/* Services / Value Prop Section */}
            <section className="services-section container">
                <div className="section-header">
                    <h2>Why WebFrame?</h2>
                    <p>We don't just build websites. We build businesses.</p>
                </div>
                <div className="services-grid">
                    <div className="service-card">
                        <div className="icon">🚀</div>
                        <h3>High Performance</h3>
                        <p>Optimized for speed and conversion. We ensure your site loads fast and ranks high.</p>
                    </div>
                    <div className="service-card">
                        <div className="icon">🎨</div>
                        <h3>Premium Design</h3>
                        <p>Stand out with a unique, custom-crafted aesthetic that reflects your brand identity.</p>
                    </div>
                    <div className="service-card">
                        <div className="icon">📱</div>
                        <h3>Mobile First</h3>
                        <p>Flawless experience on every device. Your customers are everywhere, and so are we.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
