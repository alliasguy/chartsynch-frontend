import './options.css'
import TradingViewWidget from '../../components/TradingViewWidget'
import MiniSymbolOverviewWidget from '../../components/MiniSymbolOverviewWidget'
import Header from '../../components/Header/Header'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'
import { useNavigate } from 'react-router-dom'

const Options = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='forex-page-section'>
                <Header />
                <div className="forex-page-wrapper">
                    <div className="videoframe-text-container" data-aos="fade-up">
                        <h1><span className="highlight">options </span></h1>
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
                                <h1>options <span className="highlight">trading</span> </h1>
                                <p>Options contracts give you the right, but not the obligation, to buy or sell an underlying asset at a set price. They are versatile instruments used for hedging, income generation, and speculation on price movements.</p>
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

                    {/* Options Strategy Cards */}
                    <section className='options-strategies-section' data-aos="fade-up">
                        <div className="options-strategies-header">
                            <h2>Popular <span className="highlight">Options</span> Strategies</h2>
                            <p>Leverage, hedge, and profit from market movements</p>
                        </div>
                        <div className="options-cards-container">
                            <div className="options-strategy-card options-card-1" data-aos="zoom-in" data-aos-delay="100">
                                <div className="options-card-header">
                                    <div className="options-card-number">01</div>
                                    <h3>Call Options</h3>
                                </div>
                                <p>Profit from rising prices with the right to buy at a predetermined price. Limited risk, unlimited potential.</p>
                                <div className="options-card-badge">BULLISH</div>
                            </div>

                            <div className="options-strategy-card options-card-2" data-aos="zoom-in" data-aos-delay="200">
                                <div className="options-card-header">
                                    <div className="options-card-number">02</div>
                                    <h3>Put Options</h3>
                                </div>
                                <p>Protect your portfolio or profit from declining markets. Hedge against downside risk effectively.</p>
                                <div className="options-card-badge">BEARISH</div>
                            </div>

                            <div className="options-strategy-card options-card-3" data-aos="zoom-in" data-aos-delay="300">
                                <div className="options-card-header">
                                    <div className="options-card-number">03</div>
                                    <h3>Covered Calls</h3>
                                </div>
                                <p>Generate income from your existing stock holdings by selling call options. Conservative strategy.</p>
                                <div className="options-card-badge">INCOME</div>
                            </div>

                            <div className="options-strategy-card options-card-4" data-aos="zoom-in" data-aos-delay="400">
                                <div className="options-card-header">
                                    <div className="options-card-number">04</div>
                                    <h3>Spreads</h3>
                                </div>
                                <p>Combine multiple options to limit risk and define profit potential. Advanced trading technique.</p>
                                <div className="options-card-badge">ADVANCED</div>
                            </div>

                            <div className="options-strategy-card options-card-5" data-aos="zoom-in" data-aos-delay="500">
                                <div className="options-card-header">
                                    <div className="options-card-number">05</div>
                                    <h3>Straddles</h3>
                                </div>
                                <p>Buy a call and put at the same strike price to profit from large moves in either direction.</p>
                                <div className="options-card-badge">VOLATILITY</div>
                            </div>

                            <div className="options-strategy-card options-card-6" data-aos="zoom-in" data-aos-delay="600">
                                <div className="options-card-header">
                                    <div className="options-card-number">06</div>
                                    <h3>Strangles</h3>
                                </div>
                                <p>Buy a call and put at different strike prices to profit from significant price swings at a lower cost.</p>
                                <div className="options-card-badge">VOLATILITY</div>
                            </div>

                            <div className="options-strategy-card options-card-7" data-aos="zoom-in" data-aos-delay="700">
                                <div className="options-card-header">
                                    <div className="options-card-number">07</div>
                                    <h3>Iron Condor</h3>
                                </div>
                                <p>Sell an out-of-the-money call and put while buying further out-of-the-money options for limited risk income.</p>
                                <div className="options-card-badge">INCOME</div>
                            </div>

                            <div className="options-strategy-card options-card-8" data-aos="zoom-in" data-aos-delay="800">
                                <div className="options-card-header">
                                    <div className="options-card-number">08</div>
                                    <h3>Iron Butterfly</h3>
                                </div>
                                <p>Combine a bull put spread and bear call spread sharing the same strike for defined-risk income generation.</p>
                                <div className="options-card-badge">INCOME</div>
                            </div>

                            <div className="options-strategy-card options-card-9" data-aos="zoom-in" data-aos-delay="900">
                                <div className="options-card-header">
                                    <div className="options-card-number">09</div>
                                    <h3>Bull Call Spread</h3>
                                </div>
                                <p>Buy a call while selling a higher strike call to reduce cost and define your maximum profit on a bullish move.</p>
                                <div className="options-card-badge">BULLISH</div>
                            </div>

                            <div className="options-strategy-card options-card-10" data-aos="zoom-in" data-aos-delay="100">
                                <div className="options-card-header">
                                    <div className="options-card-number">10</div>
                                    <h3>Bear Put Spread</h3>
                                </div>
                                <p>Buy a put while selling a lower strike put to reduce cost and define your maximum profit on a bearish move.</p>
                                <div className="options-card-badge">BEARISH</div>
                            </div>

                            <div className="options-strategy-card options-card-11" data-aos="zoom-in" data-aos-delay="200">
                                <div className="options-card-header">
                                    <div className="options-card-number">11</div>
                                    <h3>Bull Put Spread</h3>
                                </div>
                                <p>Sell a put while buying a lower strike put to generate income with defined risk in a rising market.</p>
                                <div className="options-card-badge">BULLISH</div>
                            </div>

                            <div className="options-strategy-card options-card-12" data-aos="zoom-in" data-aos-delay="300">
                                <div className="options-card-header">
                                    <div className="options-card-number">12</div>
                                    <h3>Bear Call Spread</h3>
                                </div>
                                <p>Sell a call while buying a higher strike call to generate income with defined risk in a falling market.</p>
                                <div className="options-card-badge">BEARISH</div>
                            </div>

                            <div className="options-strategy-card options-card-13" data-aos="zoom-in" data-aos-delay="400">
                                <div className="options-card-header">
                                    <div className="options-card-number">13</div>
                                    <h3>Protective Put</h3>
                                </div>
                                <p>Hold a put option alongside your stock position to hedge against downside risk while retaining upside.</p>
                                <div className="options-card-badge">HEDGE</div>
                            </div>

                            <div className="options-strategy-card options-card-14" data-aos="zoom-in" data-aos-delay="500">
                                <div className="options-card-header">
                                    <div className="options-card-number">14</div>
                                    <h3>Collar</h3>
                                </div>
                                <p>Combine a protective put with a covered call to lock in a price range and limit both gains and losses.</p>
                                <div className="options-card-badge">HEDGE</div>
                            </div>

                            <div className="options-strategy-card options-card-15" data-aos="zoom-in" data-aos-delay="600">
                                <div className="options-card-header">
                                    <div className="options-card-number">15</div>
                                    <h3>Calendar Spread</h3>
                                </div>
                                <p>Sell a near-term option and buy a longer-term option at the same strike to profit from time decay.</p>
                                <div className="options-card-badge">ADVANCED</div>
                            </div>

                            <div className="options-strategy-card options-card-16" data-aos="zoom-in" data-aos-delay="700">
                                <div className="options-card-header">
                                    <div className="options-card-number">16</div>
                                    <h3>Diagonal Spread</h3>
                                </div>
                                <p>Combine different strikes and expirations to build a flexible position that profits from time and price movement.</p>
                                <div className="options-card-badge">ADVANCED</div>
                            </div>

                            <div className="options-strategy-card options-card-17" data-aos="zoom-in" data-aos-delay="800">
                                <div className="options-card-header">
                                    <div className="options-card-number">17</div>
                                    <h3>Butterfly Spread</h3>
                                </div>
                                <p>Combine three strike prices to profit from minimal price movement with low cost and limited risk.</p>
                                <div className="options-card-badge">ADVANCED</div>
                            </div>

                            <div className="options-strategy-card options-card-18" data-aos="zoom-in" data-aos-delay="900">
                                <div className="options-card-header">
                                    <div className="options-card-number">18</div>
                                    <h3>Long Call</h3>
                                </div>
                                <p>Buy a call option outright for leveraged upside exposure with risk limited to the premium paid.</p>
                                <div className="options-card-badge">BULLISH</div>
                            </div>

                            <div className="options-strategy-card options-card-19" data-aos="zoom-in" data-aos-delay="100">
                                <div className="options-card-header">
                                    <div className="options-card-number">19</div>
                                    <h3>Long Put</h3>
                                </div>
                                <p>Buy a put option outright for leveraged downside exposure with risk limited to the premium paid.</p>
                                <div className="options-card-badge">BEARISH</div>
                            </div>

                            <div className="options-strategy-card options-card-20" data-aos="zoom-in" data-aos-delay="200">
                                <div className="options-card-header">
                                    <div className="options-card-number">20</div>
                                    <h3>Naked Call</h3>
                                </div>
                                <p>Sell a call option without owning the underlying asset to collect premium income with elevated risk.</p>
                                <div className="options-card-badge">AGGRESSIVE</div>
                            </div>

                            <div className="options-strategy-card options-card-21" data-aos="zoom-in" data-aos-delay="300">
                                <div className="options-card-header">
                                    <div className="options-card-number">21</div>
                                    <h3>Naked Put</h3>
                                </div>
                                <p>Sell a put option without a hedge to collect premium income, accepting the obligation to buy if assigned.</p>
                                <div className="options-card-badge">AGGRESSIVE</div>
                            </div>

                            <div className="options-strategy-card options-card-22" data-aos="zoom-in" data-aos-delay="400">
                                <div className="options-card-header">
                                    <div className="options-card-number">22</div>
                                    <h3>Ratio Spread</h3>
                                </div>
                                <p>Buy and sell an unequal number of options at different strikes to fine-tune risk and reward.</p>
                                <div className="options-card-badge">ADVANCED</div>
                            </div>

                            <div className="options-strategy-card options-card-23" data-aos="zoom-in" data-aos-delay="500">
                                <div className="options-card-header">
                                    <div className="options-card-number">23</div>
                                    <h3>Box Spread</h3>
                                </div>
                                <p>Combine a bull call spread and bear put spread at the same strikes to create a near risk-free arbitrage position.</p>
                                <div className="options-card-badge">ARBITRAGE</div>
                            </div>

                            <div className="options-strategy-card options-card-24" data-aos="zoom-in" data-aos-delay="600">
                                <div className="options-card-header">
                                    <div className="options-card-number">24</div>
                                    <h3>Synthetic Long Stock</h3>
                                </div>
                                <p>Combine a long call and short put at the same strike to mimic stock ownership with less capital outlay.</p>
                                <div className="options-card-badge">SYNTHETIC</div>
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

export default Options
