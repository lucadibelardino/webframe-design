import React from 'react';
import { Link } from 'react-router-dom';
import ColorBends from '../components/ColorBends';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <section className="hero">
                <div className="hero-background">
                    <ColorBends
                        colors={["#ff3366", "#6633ff", "#00ffcc"]}
                        rotation={30}
                        speed={0.3}
                        scale={1.2}
                        frequency={1.4}
                        warpStrength={1.2}
                        mouseInfluence={0.8}
                        parallax={0.6}
                        noise={0.08}
                        transparent={true}
                        brightness={3}
                    />
                </div>
                <div className="hero-content container">
                    <h1>
                        We Craft <span className="gradient-text">Digital Perfection</span>
                    </h1>
                    <p className="hero-subtitle">
                        Premium web design for forward-thinking brands. We blend aesthetics with functionality to create immersive experiences.
                    </p>
                    <div className="hero-cta">
                        <Link to="/portfolio" className="btn btn-primary">View Our Work</Link>
                        <Link to="/price" className="btn btn-outline">Start a Project</Link>
                    </div>
                </div>
            </section>

            <section className="section container about-preview">
                <h2>Design that <span className="highlight">Speaks</span></h2>
                <p>
                    Your website is your silent ambassador. We make sure it speaks the right language.
                    From fluid animations to pixel-perfect layouts, we obsess over every detail.
                </p>
            </section>
        </div>
    );
};

export default Home;
