import React, { useState } from 'react'
import './plan.css'
import { useNavigate } from 'react-router-dom'

const Plan = () => {
  const navigate = useNavigate()
  const [plans] = useState([
    {
      id: 1,
      min: '1,000',
      max: '4,999',
      type: 'Starter Plan',
      popular: false,
      minimumOrder: '0.1',
      maximumOrder: '10',
      leverage: '1:20',
      badge: 'Essential',
      accent: 'emerald'
    },
    {
      id: 2,
      min: '5,000',
      max: '19,999',
      type: 'Medium Plan',
      popular: true,
      minimumOrder: '0.1',
      maximumOrder: '15',
      leverage: '1:50',
      badge: 'Most Popular',
      accent: 'cyan'
    },
    {
      id: 3,
      min: '20,000',
      max: '49,999',
      type: 'Classic Plan',
      popular: false,
      minimumOrder: '0.1',
      maximumOrder: '20',
      leverage: '1:80',
      badge: 'Advanced',
      accent: 'emerald'
    },
    {
      id: 4,
      min: '50,000',
      max: '99,000',
      type: 'Diamond VIP',
      popular: false,
      minimumOrder: '0.1',
      maximumOrder: '25',
      leverage: '1:100',
      badge: 'Institutional',
      accent: 'gold'
    },
  ])

  return (
    <section className='plan-section'>
      <div className="plan-header-container" data-aos="fade-up">
        <h2 className="plan-title">
          <span className="highlight">CopyTrade </span> Investment Plans
        </h2>
        <p className="plan-subtitle">
          Curated institutional-grade trading tier plans engineered for maximum capital growth and risk mitigation.
        </p>
      </div>

      <div className="plan-card-container">
        {plans.map((plan) => (
          <div 
            className={`pack-container ${plan.popular ? 'pack-featured' : ''} accent-${plan.accent}`} 
            key={plan.id} 
            data-aos="fade-up"
          >
            {plan.popular && <div className="featured-ribbon">Most Popular</div>}
            
            <div className="pack-header">
              <div className="pack-type-wrapper">
                <h3 className="pack-type-title">{plan.type}</h3>
                <span className={`pack-chip chip-${plan.accent}`}>{plan.badge}</span>
              </div>
              <div className="pack-price-box">
                <span className="price-currency">$</span>
                <span className="price-value">{plan.min}</span>
                <span className="price-suffix">min</span>
              </div>
            </div>

            <div className='lot-wrapper'>
              <div className="lot-container">
                <span className="lot-bullet"></span>
                <p>Range: <strong>${plan.min} - ${plan.max}</strong></p>
              </div>
              <div className="lot-container">
                <span className="lot-bullet"></span>
                <p>Minimum Order: <strong>{plan.minimumOrder} lots</strong></p>
              </div>
              <div className="lot-container">
                <span className="lot-bullet"></span>
                <p>Maximum Order: <strong>{plan.maximumOrder} lots</strong></p>
              </div>
              <div className="lot-container">
                <span className="lot-bullet"></span>
                <p>Leverage: <strong>Up to {plan.leverage}</strong></p>
              </div>
              <div className="lot-container">
                <span className="lot-bullet"></span>
                <p>Execution Speed: <strong>Instant (&lt;10ms)</strong></p>
              </div>
            </div>

            <button className='plan-cta-btn' onClick={() => navigate('/signup')}>
              <span>Start Trading</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Plan