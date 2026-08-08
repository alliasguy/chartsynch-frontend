import React, { useState, useEffect } from 'react'
import './landpage.css'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BsArrowRight, BsLightningCharge, BsGraphUpArrow, BsShieldCheck } from 'react-icons/bs'
import { FiTrendingUp, FiUsers, FiDollarSign } from 'react-icons/fi'

const Landpage = () => {
  const navigate = useNavigate()
  const [copiers, setCopiers] = useState(14892);
  const [investment, setInvestment] = useState(5000);
  const [duration, setDuration] = useState(6);
  const [activeTrader, setActiveTrader] = useState('SarahTrades');

  // Simulated live counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCopiers(prev => prev + Math.floor(Math.random() * 2 + 1));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const traderProfiles = {
    'SarahTrades': { roi: 4.82, risk: 'Low', winRate: 94.2, strategy: 'Gold Scalper' },
    'AlexWalker_FX': { roi: 3.15, risk: 'Medium', winRate: 89.6, strategy: 'Swing Indices' },
    'CryptoKing_99': { roi: 12.4, risk: 'High', winRate: 86.4, strategy: 'Crypto Momentum' },
  };

  const currentProfile = traderProfiles[activeTrader];
  const calculatedReturn = Math.round(investment * Math.pow(1 + (currentProfile.roi * 0.15), duration / 3));
  const netProfit = calculatedReturn - investment;

  return (
    <main className='landpage'>
      {/* Dynamic Ambient Background Mesh */}
      <div className="ambient-background">
        <div className="aurora-orb orb-primary"></div>
        <div className="aurora-orb orb-secondary"></div>
        <div className="grid-pattern-overlay"></div>
      </div>

      <Header />

      {/* Hero Section */}
      <section className='landpage-hero-wrapper'>
        <motion.div
          className='hero-centered-content'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className='hero-headline'>
            Mirror World-Class <br />
            <span className='hero-headline-gradient'>Traders In Real-Time</span>
          </h1>

          <p className='hero-subheadline'>
            Automate your portfolio by synchronizing with verified master traders globally. <br />
            Zero technical setup required. High-precision execution in under 50ms.
          </p>

          <div className='hero-actions-container'>
            <button className='btn-hero-primary' onClick={() => navigate('/signup')}>
              <span>Start Copying Instantly</span>
              <BsArrowRight className="btn-icon" />
            </button>
            <button className='btn-hero-secondary' onClick={() => navigate('/traders')}>
              <FiTrendingUp className="btn-icon-left" />
              <span>Explore Master Traders</span>
            </button>
          </div>

          {/* Social Proof Avatars Badge */}
          <div className="hero-social-proof">
            <div className="avatar-stack">
              <img src="/elitesynchmock7.jpeg" alt="Trader" className="stack-avatar" />
              <div className="stack-avatar av-bg-1">ST</div>
              <div className="stack-avatar av-bg-2">AW</div>
              <div className="stack-avatar av-bg-3">+85</div>
            </div>
            <p className="social-proof-text">
              Trusted by <b>{copiers.toLocaleString()}</b> active copiers worldwide
            </p>
          </div>
        </motion.div>

        {/* Live Interactive ROI Calculator & Platform Preview Terminal */}
        <motion.div 
          className="hero-terminal-container glass-panel-luxury"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Terminal Window Header */}
          <div className="terminal-header">
            <div className="window-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="terminal-title">
              <BsLightningCharge className="title-icon" />
              <span>CHARTSYNCH REAL-TIME CALCULATOR & PERFORMANCE TERMINAL</span>
            </div>
            <div className="terminal-badge">LIVE DEMO</div>
          </div>

          <div className="terminal-body-grid">
            {/* Left: Interactive Projection Controls */}
            <div className="calculator-controls-col">
              <h3 className="calc-title">Project Your Returns</h3>

              {/* Master Trader Selection */}
              <div className="calc-field-group">
                <label className="field-label">Select Master Trader</label>
                <div className="trader-selector-pills">
                  {Object.keys(traderProfiles).map((traderKey) => (
                    <button
                      key={traderKey}
                      className={`selector-pill ${activeTrader === traderKey ? 'active' : ''}`}
                      onClick={() => setActiveTrader(traderKey)}
                    >
                      <span className="pill-name">{traderKey}</span>
                      <span className="pill-roi">+{traderProfiles[traderKey].roi * 100}%</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Investment Amount Slider */}
              <div className="calc-field-group">
                <div className="field-header">
                  <label className="field-label">Initial Investment</label>
                  <span className="field-value-display">${investment.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="calc-range-slider"
                />
                <div className="preset-buttons">
                  {[1000, 5000, 10000, 25000].map((preset) => (
                    <button
                      key={preset}
                      className={`preset-btn ${investment === preset ? 'active' : ''}`}
                      onClick={() => setInvestment(preset)}
                    >
                      ${preset.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration Buttons */}
              <div className="calc-field-group">
                <label className="field-label">Time Horizon</label>
                <div className="duration-pill-group">
                  {[3, 6, 12].map((m) => (
                    <button
                      key={m}
                      className={`duration-pill ${duration === m ? 'active' : ''}`}
                      onClick={() => setDuration(m)}
                    >
                      {m} Months
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Simulated Return Card & Live Visual Graph */}
            <div className="calculator-results-col">
              <div className="result-card-inner">
                <div className="result-header">
                  <span className="result-label">PROJECTED PORTFOLIO VALUE</span>
                  <div className="trader-strategy-tag">{currentProfile.strategy}</div>
                </div>

                <div className="result-amount-hero">
                  ${calculatedReturn.toLocaleString()}
                  <span className="profit-gain-pill">
                    +${netProfit.toLocaleString()} (+{Math.round((netProfit / investment) * 100)}%)
                  </span>
                </div>

                {/* SVG Live Performance Sparkline Curve */}
                <div className="sparkline-chart-wrapper">
                  <svg className="sparkline-svg" viewBox="0 0 400 120">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#30c18e" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#30c18e" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 100 Q 80 80 150 50 T 300 30 T 400 10 L 400 120 L 0 120 Z"
                      fill="url(#chartGradient)"
                    />
                    <path
                      d="M 0 100 Q 80 80 150 50 T 300 30 T 400 10"
                      fill="none"
                      stroke="#30c18e"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="400" cy="10" r="5" fill="#34d399" className="pulse-circle" />
                  </svg>
                </div>

                {/* Micro Stat Badges */}
                <div className="result-stats-row">
                  <div className="m-stat">
                    <span className="m-label">Win Rate</span>
                    <span className="m-val text-emerald">{currentProfile.winRate}%</span>
                  </div>
                  <div className="m-stat">
                    <span className="m-label">Risk Rating</span>
                    <span className="m-val">{currentProfile.risk}</span>
                  </div>
                  <div className="m-stat">
                    <span className="m-label">Sync Latency</span>
                    <span className="m-val text-cyan">0.08ms</span>
                  </div>
                </div>

                <button className="btn-terminal-action" onClick={() => navigate('/signup')}>
                  Copy {activeTrader} With ${investment.toLocaleString()}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Global Stat Highlights Ribbon */}
      <section className="stats-ribbon-section">
        <div className="ribbon-grid">
          <div className="ribbon-card">
            <div className="ribbon-icon-box"><BsGraphUpArrow /></div>
            <div className="ribbon-data">
              <span className="r-value">127.4%</span>
              <span className="r-label">Avg. Annual ROI</span>
            </div>
          </div>
          <div className="ribbon-card">
            <div className="ribbon-icon-box"><FiUsers /></div>
            <div className="ribbon-data">
              <span className="r-value">{copiers.toLocaleString()}</span>
              <span className="r-label">Active Copiers</span>
            </div>
          </div>
          <div className="ribbon-card">
            <div className="ribbon-icon-box"><FiDollarSign /></div>
            <div className="ribbon-data">
              <span className="r-value">$4.82M+</span>
              <span className="r-label">Copier Profit Paid</span>
            </div>
          </div>
          <div className="ribbon-card">
            <div className="ribbon-icon-box"><BsShieldCheck /></div>
            <div className="ribbon-data">
              <span className="r-value">100%</span>
              <span className="r-label">Transparent History</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Landpage
