import React from 'react'
import './tradeInfo.css'
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TbClockStar } from "react-icons/tb";
import { GrDocumentPerformance } from "react-icons/gr";
const TradeInfo = () => {
  return (
    <section className='tradeInfo-section'>
      <div className="tradeInfo-wrapper">
        <div className="forex-card" data-aos="fade-up">
          <div className="img">
            <GrDocumentPerformance />
          </div>
          <div className="textBox">
            <div className="textContent">
              <p className="h1">Short-Term Contracts</p>
            </div>
            <p className="p">Trading intra-day, daily or weekly provides unique opportunities.</p>
            <div>
            </div></div></div>
        <div className="forex-card" data-aos="fade-up">
          <div className="img">
            <TbClockStar />
          </div>
          <div className="textBox">
            <div className="textContent">
              <p className="h1">Trading Around the Clock</p>
            </div>
            <p className="p">24 hours a day, Monday-Saturday only, using mt4 and mt5.</p>
            <div>
            </div></div></div>
        <div className="forex-card" data-aos="fade-up">
          <div className="img">
            <IoCalendarNumberOutline />
          </div>
          <div className="textBox">
            <div className="textContent">
              <p className="h1">Active Markets</p>
            </div>
            <p className="p">23 hours a day, Monday-Saturday using mt4 and mt5.</p>
            <div>
            </div></div></div>
      </div>
    </section>
  )
}

export default TradeInfo