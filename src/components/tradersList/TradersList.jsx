import React, { useState } from 'react'
import './traderslist.css'
import { useNavigate } from 'react-router-dom'

const TradersList = () => {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('High ROI')
  const [copiedId, setCopiedId] = useState(null)

  const traders = [
    {
      id: 1,
      rank: 1,
      name: 'CryptoKing_99',
      style: 'Scalper • High ROI',
      winRate: '98.4%',
      returnRate: '+1,240%',
      copiers: '3,842',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      sparkline: 'M0,25 Q15,18 30,22 T60,10 T90,5 T120,2'
    },
    {
      id: 2,
      rank: 2,
      name: 'SafeGrowth_FX',
      style: 'Swing • Low Risk',
      winRate: '96.1%',
      returnRate: '+850%',
      copiers: '5,120',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      sparkline: 'M0,28 Q15,22 30,18 T60,12 T90,8 T120,4'
    },
    {
      id: 3,
      rank: 3,
      name: 'GlobalMacro',
      style: 'Day Trade • Med Risk',
      winRate: '93.7%',
      returnRate: '+612%',
      copiers: '2,940',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      sparkline: 'M0,30 Q15,25 30,15 T60,20 T90,10 T120,6'
    },
    {
      id: 4,
      rank: 4,
      name: 'GoldRush_X',
      style: 'Commodities • Scalp',
      winRate: '91.8%',
      returnRate: '+456%',
      copiers: '1,890',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      sparkline: 'M0,26 Q15,20 30,24 T60,14 T90,12 T120,8'
    }
  ]

  const handleCopyClick = (id) => {
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <section className='feature-stats-section'>
      <div className="spreads-promo-container">
        <div className="spreads-card">
          
          {/* Left Column: Text & Features */}
          <div className="spreads-text-col">
            <h2 className="spreads-headline">
              Curated Strategies.<br />
              <span className="highlight-text">Proven Institutional Results.</span>
            </h2>

            <ul className="spreads-list">
              <li>
                <div className="check-icon-box">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <strong>Audited Track Records</strong> — Fully transparent, real-time performance analytics.
                </div>
              </li>
              <li>
                <div className="check-icon-box">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <strong>Sub-Millisecond Execution</strong> — Instant automated trade replication with zero slippage.
                </div>
              </li>
              <li>
                <div className="check-icon-box">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <strong>Adaptive Risk Management</strong> — Customized stop-loss ratios & allocation multipliers.
                </div>
              </li>
            </ul>

            <button className="btn-pricing" onClick={() => navigate('/signup')}>
              <span>View All Master Traders</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

          {/* Right Column: Next-Gen Adaptive Phone Mockup */}
          <div className="spreads-visual-col">
            <div className="phone-wrapper-adaptive">
              
              {/* Phone Frame */}
              <div className="phone-titanium-frame">
                
                {/* Physical Phone Side Controls */}
                <div className="phone-side-button vol-up"></div>
                <div className="phone-side-button vol-down"></div>
                <div className="phone-side-button power"></div>

                {/* Inner Screen */}
                <div className="phone-screen-container">
                  
                  {/* Dynamic Island Notch */}
                  <div className="dynamic-island">
                    <span className="camera-lens"></span>
                    <span className="sensor-lens"></span>
                  </div>

                  {/* Status Bar */}
                  <div className="phone-status-bar">
                    <span className="time-display">09:41</span>
                    <div className="status-icons">
                      <svg width="14" height="10" viewBox="0 0 16 12" fill="currentColor">
                        <rect x="0" y="8" width="3" height="4" rx="0.5"/>
                        <rect x="4" y="5" width="3" height="7" rx="0.5"/>
                        <rect x="8" y="2" width="3" height="10" rx="0.5"/>
                        <rect x="12" y="0" width="3" height="12" rx="0.5"/>
                      </svg>
                      <svg width="14" height="10" viewBox="0 0 16 12" fill="currentColor">
                        <path d="M8 11.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-3.5-3.5a5 5 0 0 1 7 0l-1.4 1.4a3 3 0 0 0 -4.2 0L4.5 8zm-3.5-3.5a10 10 0 0 1 14 0l-1.4 1.4a8 8 0 0 0 -11.2 0L1 4.5z"/>
                      </svg>
                      <div className="battery-icon">
                        <div className="battery-level"></div>
                      </div>
                    </div>
                  </div>

                  {/* App Navigation Header */}
                  <div className="app-header-nav">
                    <div className="app-title-group">
                      <span className="app-brand-chip">ChartSynch</span>
                      <span className="app-page-title">CopyTrade</span>
                    </div>
                    <div className="app-actions">
                      <div className="search-pill">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="11" cy="11" r="8"/>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Performance Summary Banner */}
                  <div className="phone-summary-card">
                    <div className="summary-left">
                      <span className="summary-label">Average Monthly ROI</span>
                      <span className="summary-val">+34.8%</span>
                    </div>
                    <div className="summary-chart">
                      <svg width="70" height="30" viewBox="0 0 120 30" fill="none">
                        <path d="M0,25 Q20,18 40,22 T80,8 T120,3" stroke="#34d399" strokeWidth="3.5" strokeLinecap="round"/>
                        <path d="M0,25 Q20,18 40,22 T80,8 T120,3 V30 H0 Z" fill="url(#sparklineGrad)" opacity="0.3"/>
                        <defs>
                          <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#34d399"/>
                            <stop offset="100%" stopColor="transparent"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Filter Pills */}
                  <div className="phone-filter-bar">
                    {['High ROI', 'Low Risk', 'Verified'].map((filter) => (
                      <button
                        key={filter}
                        className={`filter-chip ${activeFilter === filter ? 'active' : ''}`}
                        onClick={() => setActiveFilter(filter)}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>

                  {/* Trader Rows List */}
                  <div className="phone-traders-list">
                    {traders.map((t) => (
                      <div key={t.id} className="mini-trader-row">
                        <span className={`rank-badge rank-${t.rank}`}>#{t.rank}</span>
                        <div className="mini-avatar-wrap">
                          <img src={t.avatar} alt={t.name} className="mini-avatar-img" />
                        </div>
                        <div className="mini-trader-info">
                          <div className="mini-trader-name">{t.name}</div>
                          <div className="mini-trader-sub">{t.style}</div>
                        </div>
                        <div className="mini-trader-meta">
                          <span className="mini-return">{t.returnRate}</span>
                          <button
                            className={`mini-copy-btn ${copiedId === t.id ? 'copied' : ''}`}
                            onClick={() => handleCopyClick(t.id)}
                          >
                            {copiedId === t.id ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Navigation Bar */}
                  <div className="phone-bottom-nav">
                    <div className="nav-item active">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                      </svg>
                    </div>
                    <div className="nav-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="20" x2="18" y2="10"/>
                        <line x1="12" y1="20" x2="12" y2="4"/>
                        <line x1="6" y1="20" x2="6" y2="14"/>
                      </svg>
                    </div>
                    <div className="nav-item center-act">
                      <div className="center-act-glow">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#07090e" strokeWidth="3">
                          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                          <polyline points="17 6 23 6 23 12"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="nav-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="5" width="20" height="14" rx="2"/>
                        <line x1="2" y1="10" x2="22" y2="10"/>
                      </svg>
                    </div>
                    <div className="nav-item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default TradersList