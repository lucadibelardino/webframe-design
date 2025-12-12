import React from 'react';
import './Portfolio.css';

const projects = [
    {
        id: 1,
        title: 'Neon Financial',
        category: 'Fintech',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: 2,
        title: 'Aura Spices',
        category: 'E-commerce',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop',
    },
    {
        id: 3,
        title: 'Echo Architecture',
        category: 'Portfolio',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: 4,
        title: 'Velvet Lounge',
        category: 'Hospitality',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: 5,
        title: 'Cyber Security Ops',
        category: 'SaaS',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: 6,
        title: 'Modern Living',
        category: 'Real Estate',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    }
];

const Portfolio = () => {
    return (
        <div className="page-container container">
            <div className="pricing-header">
                <h1>Selected Works</h1>
                <p>A showcase of our finest digital creations.</p>
            </div>

            <div className="portfolio-grid">
                {projects.map((project) => (
                    <div key={project.id} className="portfolio-item">
                        <div className="portfolio-image">
                            <img src={project.image} alt={project.title} />
                            <div className="overlay">
                                <h3>{project.title}</h3>
                                <span>{project.category}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
