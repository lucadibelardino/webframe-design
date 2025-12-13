import React, { useState, useEffect, useRef } from 'react';
import './Portfolio.css';

// --- MOCK CONTENT DATA ---
const projects = [
    {
        id: 1,
        title: 'La Trattoria',
        category: 'Restaurant',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
        description: 'Authentic Italian dining experience.',
        theme: { primary: '#9e2a2b', secondary: '#fdfcdc', font: '"Playfair Display", serif', bgPattern: 'bg-paper' },
        heroConfig: { type: 'ken-burns', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop' },
        pages: [
            { type: 'hero', headline: 'Taste the True Italy', sub: 'Handmade pasta, vintage wines, and family tradition.', cta: 'Book a Table' },
            { type: 'split', layout: 'img-right', anim: 'fade-left', title: 'Our Story', text: 'Founded in 1955, La Trattoria brings the flavors of Tuscany to your plate. Our chefs use only the freshest imported ingredients.', img: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop' },
            {
                type: 'menu', title: 'Signature Dishes', anim: 'fade-up', items: [
                    { name: 'Truffle Tagliatelle', price: '$24', desc: 'Fresh pasta with black truffle cream sauce.' },
                    { name: 'Osso Buco', price: '$32', desc: 'Slow-cooked veal shanks with polenta.' },
                    { name: 'Tiramisu', price: '$12', desc: 'Classic espresso-soaked ladyfingers.' }
                ]
            },
            { type: 'banner', text: 'Private Dining Available for Events', cta: 'Inquire Now' }
        ]
    },
    {
        id: 2,
        title: 'Grand Horizon',
        category: 'Hotel & Resort',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
        description: 'Luxury accommodation with ocean views.',
        theme: { primary: '#1d3557', secondary: '#f0f4f8', font: '"Montserrat", sans-serif', bgPattern: 'bg-gradient-soft' },
        heroConfig: { type: 'parallax', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop' },
        pages: [
            { type: 'hero', headline: 'Escape to Paradise', sub: 'Experience world-class service and breathtaking sunsets.', cta: 'Check Availability' },
            {
                type: 'grid', title: 'Accommodations', anim: 'stagger-fade', items: [
                    { title: 'Ocean Suite', desc: 'Panoramic views with private balcony.', img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop' },
                    { title: 'Garden Villa', desc: 'Secluded luxury amidst tropical gardens.', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop' },
                    { title: 'Penthouse', desc: 'The ultimate luxury experience.', img: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop' }
                ]
            },
            { type: 'features', title: 'Resort Amenities', anim: 'zoom-in', features: ['Infinity Pool', 'Private Beach', '5-Star Spa', 'Fine Dining'] }
        ]
    },
    {
        id: 3,
        title: 'FitPulse Gym',
        category: 'Fitness Center',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
        description: 'State-of-the-art equipment for your fitness journey.',
        theme: { primary: '#e5383b', secondary: '#0b090a', font: '"Oswald", sans-serif', dark: true, bgPattern: 'bg-noise' },
        heroConfig: { type: 'video-loop', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop' },
        pages: [
            { type: 'hero', headline: 'Crush Your Goals', sub: 'Join the community that sweats together. 24/7 Access.', cta: 'Start Free Trial' },
            { type: 'stats', anim: 'count-up', stats: [{ label: 'Members', val: '2000+' }, { label: 'Trainers', val: '50+' }, { label: 'Classes/Wk', val: '100+' }] },
            {
                type: 'grid', title: 'Classes', anim: 'fade-up', items: [
                    { title: 'HIIT', desc: 'High intensity interval training.', img: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1925&auto=format&fit=crop' },
                    { title: 'Yoga Flow', desc: 'Find your balance and focus.', img: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069&auto=format&fit=crop' },
                    { title: 'Powerlifting', desc: 'Build strength with pros.', img: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=2070&auto=format&fit=crop' }
                ]
            }
        ]
    },
    {
        id: 4,
        title: 'TechNova',
        category: 'Corporate',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
        description: 'Innovative software solutions.',
        theme: { primary: '#00b4d8', secondary: '#f0f8ff', font: '"Inter", sans-serif', bgPattern: 'bg-tech-dots' },
        heroConfig: { type: 'gradient-mesh', colors: ['#0077b6', '#00b4d8', '#90e0ef'] },
        pages: [
            { type: 'hero', headline: 'Building the Future', sub: 'Enterprise-grade software solutions for scaling businesses.', cta: 'Get a Demo' },
            { type: 'features', title: 'Why Choose Us', anim: 'fade-up', features: ['Cloud Native', 'AI Integration', 'Bank-Grade Security', '24/7 Support'] },
            { type: 'split', layout: 'img-left', anim: 'fade-right', title: 'Case Studies', text: 'We helped Global Corp increase efficiency by 300% using our proprietary automation tools.', img: 'https://images.unsplash.com/photo-1553877607-25091b0cdf50?q=80&w=1978&auto=format&fit=crop' }
        ]
    },
    {
        id: 5,
        title: 'Urban Vogue',
        category: 'Fashion Store',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
        description: 'Contemporary fashion.',
        theme: { primary: '#000000', secondary: '#ffffff', font: '"Didot", serif', bgPattern: 'bg-minimal' },
        heroConfig: { type: 'ken-burns', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop' },
        pages: [
            { type: 'hero', headline: 'Define Your Style', sub: 'Spring/Summer 2025 Collection is here.', cta: 'Shop Collection' },
            {
                type: 'grid', title: 'New Arrivals', anim: 'stagger-fade', items: [
                    { title: 'Silk Blouse', desc: '$120.00', img: 'https://images.unsplash.com/photo-1551163943-3f6a29e39426?q=80&w=1887&auto=format&fit=crop' },
                    { title: 'Leather Tote', desc: '$250.00', img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1938&auto=format&fit=crop' },
                    { title: 'Summer Dress', desc: '$180.00', img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1946&auto=format&fit=crop' }
                ]
            },
            { type: 'banner', text: 'Free Shipping on Orders Over $200', cta: 'Shop Now' }
        ]
    },
    {
        id: 6,
        title: 'GreenLeaf Café',
        category: 'Coffee Shop',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2144&auto=format&fit=crop',
        description: 'Organic coffee and fresh pastries.',
        theme: { primary: '#606c38', secondary: '#fefae0', font: '"Lato", sans-serif', bgPattern: 'bg-leaf' },
        heroConfig: { type: 'parallax', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2144&auto=format&fit=crop' },
        pages: [
            { type: 'hero', headline: 'Brewed with Love', sub: 'The perfect start to your morning. Ethically sourced.', cta: 'View Locations' },
            {
                type: 'menu', title: 'Morning Favorites', anim: 'fade-up', items: [
                    { name: 'Latte', price: '$4.50', desc: 'Espresso with steamed milk.' },
                    { name: 'Avocado Toast', price: '$8.00', desc: 'Sourdough, smashed avo, chili flakes.' },
                    { name: 'Cold Brew', price: '$4.00', desc: 'Steeped for 18 hours.' }
                ]
            },
            { type: 'split', layout: 'img-right', anim: 'fade-left', title: 'Our Roastery', text: 'We roast our beans in small batches right here in the city to ensure maximum freshness and flavor.', img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1887&auto=format&fit=crop' }
        ]
    }
];

// --- COMPONENTS ---

// Animated Hero
const MockHero = ({ config, children }) => {
    switch (config.type) {
        case 'ken-burns':
            return (
                <div className="mock-hero-container ken-burns">
                    <div className="bg-img" style={{ backgroundImage: `url(${config.img})` }}></div>
                    <div className="hero-content">{children}</div>
                </div>
            );
        case 'parallax':
            return (
                <div className="mock-hero-container parallax" style={{ backgroundImage: `url(${config.img})` }}>
                    <div className="hero-overlay"></div>
                    <div className="hero-content parallax-content">{children}</div>
                </div>
            );
        case 'gradient-mesh':
            return (
                <div className="mock-hero-container gradient-mesh" style={{
                    background: `linear-gradient(45deg, ${config.colors[0]}, ${config.colors[1]}, ${config.colors[2]})`
                }}>
                    <div className="mesh-overlay"></div>
                    <div className="hero-content">{children}</div>
                </div>
            );
        case 'video-loop':
            return (
                <div className="mock-hero-container video-loop">
                    <div className="bg-img" style={{ backgroundImage: `url(${config.img})`, filter: 'grayscale(100%) contrast(1.2)' }}></div>
                    <div className="scanline"></div>
                    <div className="hero-content">{children}</div>
                </div>
            );
        default:
            return <div className="mock-hero-container default">{children}</div>;
    }
};

// Section Renderer with Scroll Observer logic integration
const SectionRenderer = ({ section }) => {
    // Note: Scroll observation is handled by parent for simplicity in this mock
    const animClass = section.anim ? `reveal ${section.anim}` : '';

    switch (section.type) {
        case 'hero':
            // Hero content text is rendered inside MockHero children
            return (
                <div className="mock-section-hero-content">
                    <h1>{section.headline}</h1>
                    <p>{section.sub}</p>
                    <button className="primary-btn">{section.cta}</button>
                </div>
            );
        case 'split':
            return (
                <div className={`mock-section-split ${section.layout || ''} ${animClass}`}>
                    <div className="split-text">
                        <h3>{section.title}</h3>
                        <p>{section.text}</p>
                    </div>
                    <div className="split-img">
                        <img src={section.img} alt={section.title} />
                    </div>
                </div>
            );
        case 'grid':
            return (
                <div className={`mock-section-grid ${animClass}`}>
                    <h3>{section.title}</h3>
                    <div className="grid-container">
                        {section.items.map((item, i) => (
                            <div key={i} className="grid-card" style={{ animationDelay: `${i * 100}ms` }}>
                                <div className="card-img-wrap">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            );
        case 'menu':
            return (
                <div className={`mock-section-menu ${animClass}`}>
                    <h3>{section.title}</h3>
                    <div className="menu-list">
                        {section.items.map((item, i) => (
                            <div key={i} className="menu-item">
                                <span className="item-name">{item.name}</span>
                                <span className="item-dots"></span>
                                <span className="item-price">{item.price}</span>
                                <p className="item-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            );
        case 'features':
            return (
                <div className={`mock-section-features ${animClass}`}>
                    <h3>{section.title}</h3>
                    <div className="features-list">
                        {section.features.map((feat, i) => (
                            <div key={i} className="feature-pill">✓ {feat}</div>
                        ))}
                    </div>
                </div>
            );
        case 'stats':
            return (
                <div className={`mock-section-stats ${animClass}`}>
                    {section.stats.map((stat, i) => (
                        <div key={i} className="stat-item">
                            <strong>{stat.val}</strong>
                            <span>{stat.label}</span>
                        </div>
                    ))}
                </div>
            );
        case 'banner':
            return (
                <div className="mock-section-banner">
                    <h3>{section.text}</h3>
                    <button className="outline-btn">{section.cta}</button>
                </div>
            );
        default:
            return null;
    }
};

const ProjectModal = ({ project, onClose }) => {
    const scrollRef = useRef(null);
    if (!project) return null;
    const { theme, heroConfig } = project;

    const modalStyle = {
        '--p-primary': theme.primary,
        '--p-secondary': theme.secondary,
        '--p-font': theme.font,
    };

    // Scroll Observer for Animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            { threshold: 0.1 } // Removed root: scrollRef.current to use viewport as fallback for better reliability
        );

        const elements = scrollRef.current.querySelectorAll('.reveal');
        elements.forEach((el) => observer.observe(el));

        // Failsafe: Ensure everything becomes visible after 1 second if observer misses
        const timer = setTimeout(() => {
            elements.forEach(el => el.classList.add('active'));
        }, 1000);

        return () => {
            observer.disconnect();
            clearTimeout(timer);
        };
    }, [project]);

    return (
        <div className="portfolio-modal-overlay" onClick={onClose}>
            <div className={`portfolio-modal-content ${theme.dark ? 'dark-mode-mock' : ''}`} onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>

                <div className={`mock-browser ${theme.bgPattern || ''}`} style={modalStyle}>
                    <MockNav theme={theme} title={project.title} />

                    <div className="mock-body-scroll" ref={scrollRef}>
                        <MockHero config={heroConfig} theme={theme}>
                            {/* Pass First Section (Hero Text) as Children */}
                            {project.pages.filter(p => p.type === 'hero').map((section, idx) => (
                                <SectionRenderer key={idx} section={section} />
                            ))}
                        </MockHero>

                        {/* RENDER REST OF PAGES */}
                        {project.pages.filter(p => p.type !== 'hero').map((section, idx) => (
                            <div key={idx} className={`mock-section-wrapper section-${section.type}`}>
                                <SectionRenderer section={section} />
                            </div>
                        ))}

                        <footer className="mock-footer">
                            <p>&copy; 2025 {project.title}. Designed by WebFrame Agency.</p>
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
