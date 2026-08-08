import React from 'react'
import './about.css'


import { IoWallet } from "react-icons/io5";
import { BsBarChartFill } from "react-icons/bs";

const About = () => {

  return (

    <section className='about-section' id='about'>
      <div className='about-container'>
        <div className="about-image-wrapper" data-aos="fade-right">
          <div className="image-backdrop"></div>
          <img src="/elitesynchmockup4.png" alt="ChartSynch Platform" className="about-mockup" />
          <div className="experience-badge">
            <span className="years">Premium</span>
            <span className="label">Trading Ecosystem</span>
          </div>
        </div>

        <div className="about-content" data-aos="fade-left">
          <div className="section-header-left">
            <span className="subtitle-pill">Who We Are</span>
            <h2>Redefining <br /><span className="highlight-text">Global Trading</span></h2>
            <p>
              ChartSynch bridges the gap between institutional power and retail agility.
              We are not just a broker; we are a complete ecosystem designed to elevate your trading journey.
            </p>
          </div>

          <div className="about-features">
            <div className="about-feature-item">
              <div className="feature-icon-box">
                <IoWallet />
              </div>
              <div className="feature-text">
                <h3>Seamless Capital Management</h3>
                <p>Instant deposits and withdrawals with complete transparency and zero hidden fees.</p>
              </div>
            </div>

            <div className="about-feature-item">
              <div className="feature-icon-box">
                <BsBarChartFill />
              </div>
              <div className="feature-text">
                <h3>Institutional Execution</h3>
                <p>Trade with raw spreads and sub-millisecond latency on our state-of-the-art infrastructure.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default About