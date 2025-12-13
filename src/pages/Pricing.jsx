
import React from 'react';
import { Link } from 'react-router-dom';
import Hyperspeed, { hyperspeedPresets } from '../components/Hyperspeed';
import './Pricing.css';

const pricingPackages = [
    {
        id: 'base',
        title: 'Pacchetto Base',
        subtitle: 'Sito Vetrina',
        price: '€300 – €500',
        features: [
            '1–3 pagine (Home, Chi siamo, Contatti)',
            'Tema standard con personalizzazione minima',
            'Mobile responsive',
            'Form contatti semplice'
        ],
        backend: 'Nessuno (Sito Statico)',
        extra: 'Logo, Copywriting',
        recommended: false
    },
    {
        id: 'standard',
        title: 'Pacchetto Standard',
        subtitle: 'Sito Professionale',
        price: '€600 – €900',
        features: [
            '4–7 pagine',
            'Design personalizzato semplice',
            'Form avanzati e galleria foto',
            'SEO base',
            'Backup manuale semplice'
        ],
        backend: 'Semplice CMS (gestione testi/foto)',
        extra: 'Blog, Multilingua',
        recommended: true
    },
    {
        id: 'business',
        title: 'Pacchetto Business',
        subtitle: 'Lead Base',
        price: '€1.000 – €1.500',
        features: [
            'Tutto incluso in Standard',
            'Moduli contatti/lead avanzati',
            'Google Analytics base',
            'Contenuti testo inclusi (Home + Servizi)'
        ],
        backend: 'Gestione contatti/lead, pannello admin base',
        extra: null,
        recommended: false
    },
    {
        id: 'ecommerce',
        title: 'E-commerce Light',
        subtitle: 'Vendita Online Base',
        price: '€1.500 – €2.500',
        features: [
            'Catalogo fino a 30 prodotti',
            'Carrello e pagamenti base',
            'Account cliente semplice',
            'Form supporto ordini'
        ],
        backend: 'Gestione prodotti, ordini e clienti (CRUD)',
        extra: 'Funzionalità avanzate su richiesta',
        recommended: false
    },
    {
        id: 'full',
        title: 'Pacchetto Full Light',
        subtitle: 'Sito + Branding',
        price: '€2.500 – €3.500',
        features: [
            'Sito completo (vetrina o e-commerce light)',
            'Branding base (logo, colori)',
            'SEO base + Analytics',
            'Contenuti principali inclusi',
            '1-2 mesi di supporto'
        ],
        backend: 'Dashboard completa (contenuti, report, lead)',
        extra: null,
        recommended: false
    }
];

const Pricing = () => {
    return (
        <div className="pricing-page container">
            <div className="hyperspeed-background">
                <Hyperspeed effectOptions={hyperspeedPresets.two} />
            </div>
            <div className="pricing-content">
                <div className="pricing-header">
                    <h1>I Nostri Pacchetti</h1>
                    <p>Soluzioni trasparenti e scalabili per ogni esigenza digitale.</p>
                </div>

                <div className="pricing-grid">
                    {pricingPackages.map((pkg) => (
                        <div key={pkg.id} className={`pricing-card ${pkg.recommended ? 'recommended' : ''}`}>
                            {pkg.recommended && <div className="badge">Consigliato</div>}
                            <div className="card-header">
                                <h3>{pkg.title}</h3>
                                <span className="subtitle">{pkg.subtitle}</span>
                                <div className="price">{pkg.price}</div>
                            </div>

                            <div className="card-body">
                                <ul className="features-list">
                                    {pkg.features.map((feat, i) => (
                                        <li key={i}>✓ {feat}</li>
                                    ))}
                                </ul>

                                <div className="backend-info">
                                    <strong>Backend:</strong> {pkg.backend}
                                </div>

                                {pkg.extra && (
                                    <div className="extra-info">
                                        <em>Extra: {pkg.extra}</em>
                                    </div>
                                )}
                            </div>

                            <div className="card-footer">
                                <Link to="/contact" className={`btn ${pkg.recommended ? 'btn-primary' : 'btn-outline'}`}>
                                    Richiedi Preventivo
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
