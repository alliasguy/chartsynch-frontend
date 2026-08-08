import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-content">
                <div className="footer-brand">
                    <h2>Chart<span className="highlight-text">Synch</span></h2>
                    <p className="footer-text">
                        The premier copytrading ecosystem connecting you with verified master traders worldwide.
                        Scale your wealth with precision and automate your growth with confidence.
                    </p>
                </div>

                <div className="footer-col">
                    <h3>Platform</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/roadmap">Roadmap</Link></li>
                        <li><Link to="/faq">FAQs</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Markets</h3>
                    <ul>
                        <li><Link to="/forex">Forex</Link></li>
                        <li><Link to="/indices">Indices</Link></li>
                        <li><Link to="/crypto">Crypto</Link></li>
                        <li><Link to="/stocks">Stocks</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Legal</h3>
                    <ul>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms of Service</Link></li>
                        <li><Link to="/risk">Risk Disclosure</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} ChartSynch. All rights reserved.</p>
                <div className="footer-bottom-links">
                    <Link to="/privacy">Privacy</Link>
                    <Link to="/terms">Terms</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
