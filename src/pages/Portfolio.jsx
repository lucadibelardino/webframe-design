import React, { useState } from 'react';
import './Portfolio.css';

const projects = [
    {
        id: 1,
        title: 'La Trattoria',
        category: 'Restaurant',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
        description: 'Authentic Italian dining experience with a modern twist.',
        content: {
            hero: 'Taste of Tuscany',
            sub: 'Reservations available for private events.',
            sections: ['Our Menu', 'Chef\'s Specials', 'Book a Table']
        }
    },
    {
        id: 2,
        title: 'Grand Horizon',
        category: 'Hotel & Resort',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
        description: 'Luxury accommodation with breathtaking ocean views.',
        content: {
            hero: 'Escape to Paradise',
            sub: 'Experience world-class service and comfort.',
            sections: ['Suites', 'Spa & Wellness', 'Concierge']
        }
    },
    {
        id: 3,
        title: 'FitPulse Gym',
        category: 'Fitness Center',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
        description: 'State-of-the-art equipment for your fitness journey.',
        content: {
            hero: 'Crush Your Goals',
            sub: 'Join the community that sweats together.',
            sections: ['Classes', 'Trainers', 'Membership']
        }
    },
    {
        id: 4,
        title: 'TechNova',
        category: 'Corporate',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
        description: 'Innovative software solutions for enterprise scaling.',
        content: {
            hero: 'Building the Future',
            sub: 'Scalable tech for modern businesses.',
            sections: ['Solutions', 'Case Studies', 'Contact Us']
        }
    },
    {
        id: 5,
        title: 'Urban Vogue',
        category: 'Fashion Store',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
        description: 'Contemporary fashion for the urban explorer.',
        content: {
            hero: 'Define Your Style',
            sub: 'New Collection Spring/Summer 2025.',
            sections: ['Shop Women', 'Shop Men', 'Accessories']
        }
    },
    {
        id: 6,
        title: 'GreenLeaf Café',
        category: 'Coffee Shop',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2144&auto=format&fit=crop',
        description: 'Organic coffee and fresh pastries daily.',
        content: {
            hero: 'Brewed with Love',
            sub: 'The perfect start to your morning.',
            sections: ['Coffee Menu', 'Pastries', 'Locations']
        }
    }
];

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="portfolio-modal-overlay" onClick={onClose}>
            <div className="portfolio-modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>

                {/* Mock Website Preview */}
                <div className="mock-browser">
                    <div className="mock-nav">
                        <span className="mock-logo">{project.title}</span>
                        <div className="mock-links">
                            <span>Home</span>
                            <span>About</span>
                            <span>Contact</span>
                        </div>
                    </div>

                    <div className="mock-hero" style={{ backgroundImage: `url(${project.image})` }}>
                        <div className="mock-hero-text">
                            <h2>{project.content.hero}</h2>
                            <p>{project.content.sub}</p>
                            <button className="mock-btn">Learn More</button>
                        </div>
                    </div>

                    <div className="mock-body">
                        {project.content.sections.map((sec, i) => (
                            <section key={i} className="mock-section">
                                <h3>{sec}</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                                <div className="mock-grid">
                                    <div className="mock-card"></div>
                                    <div className="mock-card"></div>
                                    <div className="mock-card"></div>
                                </div>
                            </section>
                        ))}

                        <footer className="mock-footer">
                            <p>&copy; 2025 {project.title}. All rights reserved.</p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="page-container container">
            <div className="pricing-header">
                <h1>Our Portfolio</h1>
                <p>Click on any project to view the interactive website preview.</p>
            </div>

            <div className="portfolio-grid">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="portfolio-item"
                        onClick={() => setSelectedProject(project)}
                    >
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

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
};

export default Portfolio;
