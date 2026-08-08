import './commodities.css'
import TradingViewWidget from '../../components/TradingViewWidget'
import MiniSymbolOverviewWidget from '../../components/MiniSymbolOverviewWidget'
import Header from '../../components/Header/Header'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'

import { useNavigate } from 'react-router-dom'

const Commodities = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='forex-page-section'>
                <Header />
                <div className="forex-page-wrapper">
                    <div className="videoframe-text-container" data-aos="fade-up">
                        <h1><span className="highlight">commodities </span></h1>
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
                                <h1>commodities <span className="highlight">trading</span> </h1>
                                <p>Invest in physical goods such as gold, oil, and agriculture. Commodities trading allows you to diversify your portfolio and hedge against inflation. Market prices are driven by supply and demand, offering opportunities for significant returns.</p>
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

                    {/* Commodities Type Cards */}
                    <section className='commodities-types-section' data-aos="fade-up">
                        <div className="commodities-types-header">
                            <h2>Trade <span className="highlight">Commodities</span></h2>
                            <p>Diversify with physical assets and natural resources</p>
                        </div>
                        <div className="commodities-cards-wrapper">
                            <div className="commodity-type-card commodity-gold" data-aos="flip-left" data-aos-delay="100">
                                <div className="commodity-card-bg"></div>
                                <div className="commodity-card-content">
                                    <div className="commodity-icon">💰</div>
                                    <h3>Precious Metals</h3>
                                    <p>Gold, Silver, Platinum</p>
                                    <ul>
                                        <li>Safe haven assets</li>
                                        <li>Inflation hedge</li>
                                        <li>Portfolio insurance</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="commodity-type-card commodity-energy" data-aos="flip-left" data-aos-delay="200">
                                <div className="commodity-card-bg"></div>
                                <div className="commodity-card-content">
                                    <div className="commodity-icon">⚡</div>
                                    <h3>Energy</h3>
                                    <p>Oil, Natural Gas, Coal</p>
                                    <ul>
                                        <li>Global demand driver</li>
                                        <li>Economic indicator</li>
                                        <li>High volatility</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="commodity-type-card commodity-agriculture" data-aos="flip-left" data-aos-delay="300">
                                <div className="commodity-card-bg"></div>
                                <div className="commodity-card-content">
                                    <div className="commodity-icon">🌾</div>
                                    <h3>Agriculture</h3>
                                    <p>Wheat, Corn, Soybeans</p>
                                    <ul>
                                        <li>Essential commodities</li>
                                        <li>Weather dependent</li>
                                        <li>Seasonal patterns</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="commodity-type-card commodity-industrial" data-aos="flip-left" data-aos-delay="400">
                                <div className="commodity-card-bg"></div>
                                <div className="commodity-card-content">
                                    <div className="commodity-icon">🏭</div>
                                    <h3>Industrial Metals</h3>
                                    <p>Copper, Aluminum, Zinc</p>
                                    <ul>
                                        <li>Manufacturing demand</li>
                                        <li>Economic growth proxy</li>
                                        <li>Infrastructure plays</li>
                                    </ul>
                                </div>
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

export default Commodities
