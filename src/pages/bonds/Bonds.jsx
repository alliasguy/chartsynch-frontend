import './bonds.css'
import TradingViewWidget from '../../components/TradingViewWidget'
import MiniSymbolOverviewWidget from '../../components/MiniSymbolOverviewWidget'
import Header from '../../components/Header/Header'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'

import { useNavigate } from 'react-router-dom'

const Bonds = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='forex-page-section'>
                <Header />
                <div className="forex-page-wrapper">
                    <div className="videoframe-text-container" data-aos="fade-up">
                        <h1><span className="highlight">bonds </span></h1>
                    </div>
                    <div className="forex-hero-section">
                        <video src="/chart-big.hvc1.6af4110d38611a03c3a4.mp4" className="forex-page-video" autoPlay='true' loop='true'></video>
                        <div className="floating-widget-right" data-aos="fade-up">
                            <MiniSymbolOverviewWidget />
                        </div>
                        <div className="floating-widget-left" data-aos="fade-up">
                            <TradingViewWidget />
                        </div>
                    </div>
                    <div className='about-section forex-copy-trade-section'>
                        <div className="about-wrapper copy-trade-wrapper about-copy-trade-section forex-copy-trade-section">

                            <div className="tesla-widget-text-container" data-aos="fade-up">
                                <h1>bonds <span className="highlight">trading</span> </h1>
                                <p>Invest in government and corporate bonds. Bonds provide a steady income stream and are considered a lower-risk investment compared to stocks. Understand yield, maturity, and credit ratings to build a stable portfolio.</p>
                                <div className="tesla-widget-btn-container">
                                    <button className='launch-btn'
                                        initial={{ y: 45, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.65, delay: 0.6 }}
                                        onClick={() => {
                                            navigate('/signup')
                                        }}
                                    >
                                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
                                        <span>start trading</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bonds Feature Cards */}
                    <section className='bonds-features-section' data-aos="fade-up">
                        <div className="bonds-features-header">
                            <h2>Why Trade <span className="highlight">Bonds</span>?</h2>
                            <p>Stable income and portfolio diversification</p>
                        </div>
                        <div className="bonds-cards-grid">
                            <div className="bonds-feature-card" data-aos="fade-up" data-aos-delay="100">
                                <div className="bonds-card-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <h3>Fixed Income</h3>
                                <p>Receive predictable interest payments at regular intervals, providing steady cash flow for your portfolio.</p>
                            </div>

                            <div className="bonds-feature-card" data-aos="fade-up" data-aos-delay="200">
                                <div className="bonds-card-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                                    </svg>
                                </div>
                                <h3>Lower Risk</h3>
                                <p>Bonds are generally considered safer than stocks, offering capital preservation with moderate returns.</p>
                            </div>

                            <div className="bonds-feature-card" data-aos="fade-up" data-aos-delay="300">
                                <div className="bonds-card-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                                    </svg>
                                </div>
                                <h3>Diversification</h3>
                                <p>Balance your portfolio with bonds to reduce overall risk and smooth out market volatility.</p>
                            </div>

                            <div className="bonds-feature-card" data-aos="fade-up" data-aos-delay="400">
                                <div className="bonds-card-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                    </svg>
                                </div>
                                <h3>Credit Ratings</h3>
                                <p>Choose from AAA to junk bonds based on your risk tolerance and investment goals.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Contact />
            <Footer />
        </>
    )
}

export default Bonds
