import React from 'react'
import './review.css'
import { ImQuotesLeft } from 'react-icons/im'
import { AiFillStar } from 'react-icons/ai'

const Review = () => {

  return (
    <section className='review-section'>
      <div className="section-container">
        <div className="section-header center-header" data-aos="fade-up">
          <h2>Client <span className="highlight-text">Reviews</span></h2>
          <p>See what our most profitable copytraders say about their experience.</p>
        </div>

        <div className="review-grid">
          <div className="review-glass-card" data-aos="fade-up">
            <div className="quote-icon">
              <ImQuotesLeft />
            </div>
            <p className="review-text">
              "I've relied on ChartSynch for more than a year now, and the outcome has been remarkable.
              This platform links me to expert traders whose moves I can mirror automatically. It removes uncertainty from trading."
            </p>
            <div className="reviewer-info">
              <img src="/24.jpg" alt="James" className="reviewer-img" />
              <div>
                <h4>James Donald</h4>
                <div className="stars">
                  <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                </div>
              </div>
            </div>
          </div>

          <div className="review-glass-card" data-aos="fade-up" data-aos-delay="100">
            <div className="quote-icon">
              <ImQuotesLeft />
            </div>
            <p className="review-text">
              "ChartSynch has totally transformed how I navigate the markets. I wanted to begin trading but wasn’t sure how to proceed.
              Their copytrading system, guided by pros, let me tap into the skills of experienced traders."
            </p>
            <div className="reviewer-info">
              <img src="/83.jpg" alt="Paul" className="reviewer-img" />
              <div>
                <h4>Paul Mossad</h4>
                <div className="stars">
                  <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                </div>
              </div>
            </div>
          </div>

          <div className="review-glass-card" data-aos="fade-up" data-aos-delay="200">
            <div className="quote-icon">
              <ImQuotesLeft />
            </div>
            <p className="review-text">
              "Going with ChartSynch has truly been one of my smartest financial choices.
              Its real-time trade mirroring, paired with a clean interface and transparent analytics, makes it easy to track my account activity."
            </p>
            <div className="reviewer-info">
              <img src="/92.jpg" alt="Michael" className="reviewer-img" />
              <div>
                <h4>Michael H.</h4>
                <div className="stars">
                  <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Review