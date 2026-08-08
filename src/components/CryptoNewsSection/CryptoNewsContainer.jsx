import React from 'react'
import CryptoNewsWidget from '../CryptoNewsWidget'
import { useNavigate } from 'react-router-dom'
import './cryptonewscontainer.css'
import { BsArrowRight } from "react-icons/bs";

const CryptoNewsContainer = () => {
  const navigate = useNavigate()
  return (
    <section className='crypto-news-section'>
      <div className="section-container">
        <div className="section-header center-header" data-aos="fade-up">
          <h2>Market <span className="highlight-text">News</span></h2>
          <p>Grab an overview of global markets including price changes, open, high, low, and close values.</p>
        </div>

        <div className="crypto-news-wrapper glass-panel" data-aos="fade-up">
          <div className="news-widget-area">
            <CryptoNewsWidget />
          </div>
          <div className="news-content-area">
            <span className="feature-label">Real-Time Updates</span>
            <h2>Top Stories</h2>
            <p>Help your audience keep track of what's happening in the crypto and stock markets with our daily symbol snapshots – designed to be read in 20 seconds or less.</p>

            <button className="primary-btn" onClick={() => navigate('/signup')}>
              Start Trading Now <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CryptoNewsContainer