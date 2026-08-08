import React from 'react'
import './cardcontainer.css'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { MdSecurity, MdVerifiedUser } from 'react-icons/md'
import { BiBarChartAlt2 } from 'react-icons/bi'
import { BsLightningFill } from 'react-icons/bs'
import { FaUserFriends, FaMobileAlt } from 'react-icons/fa'


const cardsData = [
  {
    icon: <BsLightningFill />,
    title: "Instant Mirroring",
    desc: "Experience ultra-low latency replication. Trades from masters are copied to your account in milliseconds."
  },
  {
    icon: <MdSecurity />,
    title: "Risk Guard™ Protection",
    desc: "Set your own equity protection levels. Automatically disconnect if a strategy hits your drawdown limit."
  },
  {
    icon: <MdVerifiedUser />,
    title: "Verified Master Traders",
    desc: "We rigorously audit every Master Trader. Only proven, consistent strategies make it to the leaderboard."
  },
  {
    icon: <BiBarChartAlt2 />,
    title: "Deep Performance Analytics",
    desc: "Analyze win rates, drawdowns, and profit factors with professional-grade transparency before you copy."
  },
  {
    icon: <FaMobileAlt />,
    title: "Live Account Monitoring",
    desc: "Track your portfolio's performance in real-time with our advanced dashboard and mobile app."
  },
  {
    icon: <FaUserFriends />,
    title: "Community Insights",
    desc: "Join thousands of copiers. Discuss strategies, share results, and grow together in our active community."
  }
];

const CardContainer = () => {
  const navigate = useNavigate()
  return (
    <>
      {/* Power of Sync Section */}
      <section className="strength-section">
        <div className="strength-container">
          <div className="strength-content-col">
            <h2 className="strength-headline">The Power of <br />Synchronized Trading</h2>
            <p className="strength-desc">
              ChartSynch connects your capital to the world's best trading minds.
              Scale your wealth without the learning curve.
            </p>
            <div className="strength-actions">
              <button className="btn-primary-green" onClick={() => navigate('/signup')}>Start Copying Now</button>
              <button className="btn-secondary-outline" onClick={() => navigate('/signup')}>View Top Traders</button>
            </div>
          </div>
          <div className="strength-stats-col">
            <div className="strength-stat">
              <span className="s-val">32,000+</span>
              <span className="s-sub">ACTIVE COPIERS</span>
            </div>
            <div className="strength-stat">
              <span className="s-val">$150M+</span>
              <span className="s-sub">COPIED VOLUME</span>
            </div>
            <div className="strength-stat">
              <span className="s-val">92%</span>
              <span className="s-sub">PROFITABLE WEEKS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trustpilot Strip */}
      <div className="trustpilot-strip">
        <div className="trustpilot-left">
          <span className="excellent-text">Excellent</span>
          <div className="trustpilot-stars">
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
          </div>
          <span className="trustpilot-brand"><span className="tp-star">★</span> Trustpilot</span>
        </div>
        <div className="trustpilot-right">
          <span className="trust-stat">Based on <b>1,200+</b> reviews</span>
          <button className="btn-strip-green" onClick={() => navigate('/signup')}>Join the Winners</button>
        </div>
      </div>

      <section className='cardSection'>
        <div className="cardSectionWrapper" data-aos="fade-up">
          {cardsData.map((card, index) => {
            return (
              <div className="cardSectionCard theme-dark" key={index} data-aos="fade-up">
                <span className="cardSectionCardSvg">
                  {card.icon}
                </span>
                <div className="cardSectionCardSvgText">
                  <h2>{card.title}</h2>
                  <span className="distorted-line"></span>
                  <p>{card.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default CardContainer
