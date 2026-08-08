import React from 'react'
import './promoSection.css'

const PromoSection = () => {
    return (
        <section className='promo-section'>
            <div className="section-container">

                {/* App Promo Banner */}
                <div className="app-promo-banner" data-aos="fade-up">
                    <div className="app-promo-content">
                        <h2>
                            Trade on the go with Atlas <br />
                            Markets Global mobile app
                        </h2>

                        <div className="app-features">
                            <div className="feature-item">
                                <span className="check-icon">✓</span>
                                <span>Easy monitoring</span>
                            </div>
                            <div className="feature-item">
                                <span className="check-icon">✓</span>
                                <span>24/7 Support</span>
                            </div>
                            <div className="feature-item">
                                <span className="check-icon">✓</span>
                                <span>Multiple payment methods</span>
                            </div>
                        </div>

                        <div className="store-buttons">
                            <button className="store-btn app-store">
                                <div className="store-icon">
                                    {/* Apple Icon SVG */}
                                    <svg viewBox="0 0 384 512" width="24" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 126.7 89.8 126.7 32.4 0 45.2-22.3 84.8-22.3 39.1 0 54.3 22.3 87.7 22.3 35.7 0 65.2-74.2 92-126.7 6.1-11.8 12.5-24.8 18.5-38.6-28.7-13.6-43.1-41.7-43.1-64.7zM224 55.4C241.6 30 236.4 12.2 232 4.6 208.6 6.8 183 23.9 174.6 44.5 165.7 65.5 174.7 90.7 224 55.4z" /></svg>
                                </div>
                                <div className="store-text">
                                    <span className="small-text">Download on the</span>
                                    <span className="large-text">App Store</span>
                                </div>
                            </button>

                            <button className="store-btn google-play">
                                <div className="store-icon">
                                    {/* Google Play SVG */}
                                    <svg viewBox="0 0 512 512" width="24" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.3L47 35.3 104.6 499z" /></svg>
                                </div>
                                <div className="store-text">
                                    <span className="small-text">GET IT ON</span>
                                    <span className="large-text">Google Play</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="app-promo-image">
                        {/* Placeholder for phone mockup. User can replace this image */}
                        <div className="phone-mockup-placeholder">
                            <img src="atlasmockup7.png" alt="Mobile App" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default PromoSection
