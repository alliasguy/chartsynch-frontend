import React from 'react'
import { useNavigate } from 'react-router-dom'
import TeslaWidget from '../TeslaWidget'
import './teslawidget.css'
import { BsArrowRight } from "react-icons/bs";

const TeslaWidgetContainer = () => {
    const navigate = useNavigate()
    return (
        <section className='tesla-data-section'>
            <div className="section-container">
                <div className="section-header center-header" data-aos="fade-up">
                    <h2>Market <span className="highlight-text">Data</span></h2>
                    <p>Identify trading opportunities with advanced charting and real-time quotes.</p>
                </div>

                <div className="tesla-wrapper glass-panel" data-aos="fade-up">
                    <div className="tesla-content-area">
                        <span className="feature-label">Live Quotes</span>
                        <h2>Symbol Overview</h2>
                        <p>Embed the latest quotes, plus a simple chart of a single symbol of your choice. A great option for any web or mobile-geared pages.</p>

                        <button className="primary-btn" onClick={() => navigate('/signup')}>
                            Start Trading Now <BsArrowRight />
                        </button>
                    </div>
                    <div className="tesla-widget-area">
                        <TeslaWidget />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeslaWidgetContainer