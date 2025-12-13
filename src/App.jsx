
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <div className="content-wrap">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/pricing" element={<Pricing />} />
                    {/* Fallback route */}
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
