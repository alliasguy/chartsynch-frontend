import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'

const Risk = () => {
    return (
        <>
            <main className='policy-landpage'>
                <Header />
                <div className="policy-container">
                    <div className="policy-text-container">
                        <h2>Risk Disclosure</h2>
                        <p>
                            Trading financial instruments and cryptocurrencies involves a high degree of risk and may not be suitable for all investors. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite.
                        </p>

                        <h3>1. General Risk Warning</h3>
                        <p>
                            The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with trading and seek advice from an independent financial advisor if you have any doubts.
                        </p>

                        <h3>2. Copytrading Risks</h3>
                        <p>
                            ChartSynch provides copytrading features that allow you to replicate the trading activity of other users. However, "Master Traders" or "Strategy Providers" may have different financial goals and risk profiles than you. Past performance is not a guarantee of future returns.
                        </p>
                        <p>
                            There is no guarantee that the performance of a followed trader will be replicated precisely. Delays in execution, slippage, and market volatility can affects results.
                        </p>

                        <h3>3. Market Volatility</h3>
                        <p>
                            Cryptocurrency and Forex markets can be highly volatile. Prices can fluctuate rapidly due to news events, economic data, or market sentiment. ChartSynch is not responsible for losses caused by market conditions.
                        </p>

                        <h3>4. No Financial Advice</h3>
                        <p>
                            Information provided on ChartSynch is for educational and informational purposes only and should not be considered financial advice. You are responsible for your own investment decisions.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Risk
