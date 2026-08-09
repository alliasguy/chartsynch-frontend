import React, { useState, useEffect } from 'react'
import './landpage.css'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BsArrowRight, BsGraphUpArrow, BsShieldCheck } from 'react-icons/bs'
import { FiTrendingUp, FiUsers, FiDollarSign } from 'react-icons/fi'

const Landpage = () => {
  const navigate = useNavigate()
  const [copiers, setCopiers] = useState(14892);

  // Simulated live counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCopiers(prev => prev + Math.floor(Math.random() * 2 + 1));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

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
