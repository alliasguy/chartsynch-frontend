import React from 'react'
import './roadmap.css'
import { FaArrowRight } from "react-icons/fa";

const Roadmap = () => {
  return (
    <section className='roadmapSection'>
      <div className="rodmapWrapper">
        <div className="roadmap-header" data-aos="fade-up">
          <h2>Getting Started</h2>
          <h1>Start Trading in 3 Simple Steps</h1>
          <p>Launch your automated copytrading portfolio in under 3 minutes.</p>
        </div>

        <div className="roadmapContainer">
          <div className="roadmapCard" data-aos="fade-up">
            <div className="roadmapCounter">
              <h1>1</h1>
            </div>
            <div className="roadmapCardText">
              <h2>Register Account</h2>
              <p>Create your live account and access the master trader leaderboard instantly.</p>
            </div>
          </div>

          <div className="roadmapSvgContainer" data-aos="fade-up">
            <FaArrowRight />
          </div>

          <div className="roadmapCard" data-aos="fade-up" data-aos-delay="100">
            <div className="roadmapCounter">
              <h1>2</h1>
            </div>
            <div className="roadmapCardText">
              <h2>Fund Capital</h2>
              <p>Deposit funds securely using crypto, USDT, or bank transfer with zero fees.</p>
            </div>
          </div>

          <div className="roadmapSvgContainer" data-aos="fade-up">
            <FaArrowRight />
          </div>

          <div className="roadmapCard" data-aos="fade-up" data-aos-delay="200">
            <div className="roadmapCounter">
              <h1>3</h1>
            </div>
            <div className="roadmapCardText">
              <h2>Sync & Earn</h2>
              <p>Select top master traders and automatically mirror their live positions in real time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap