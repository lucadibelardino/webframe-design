import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <div className="page-container container">
            <div className="pricing-header">
                <h1>Investment Plans</h1>
                <p>Transparent pricing for premium results.</p>
            </div>

            <div className="pricing-grid">
                <div className="pricing-card">
                    <h3>Landing Page</h3>
                    <div className="price">€1,200</div>
                    <ul>
                        <li>One Page Scroll</li>
                        <li>Custom Design</li>
                        <li>Mobile Responsive</li>
                        <li>Contact Form</li>
                        <li>1 Week Delivery</li>
                    </ul>
                    <button className="btn btn-outline full-width">Select</button>
                </div>

                <div className="pricing-card popular">
                    <div className="badge">Best Value</div>
                    <h3>Corporate Site</h3>
                    <div className="price">€2,800</div>
                    <ul>
                        <li>Up to 5 Pages</li>
                        <li>CMS Integration</li>
                        <li>SEO Optimization</li>
                        <li>Premium Animations</li>
                        <li>2 Weeks Delivery</li>
                    </ul>
                    <button className="btn btn-primary full-width">Select</button>
                </div>

                <div className="pricing-card">
                    <h3>E-Commerce</h3>
                    <div className="price">€4,500+</div>
                    <ul>
                        <li>Full Shop Functionality</li>
                        <li>Payment Gateway</li>
                        <li>Product Management</li>
                        <li>User Accounts</li>
                        <li>4 Weeks Delivery</li>
                    </ul>
                    <button className="btn btn-outline full-width">Select</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
