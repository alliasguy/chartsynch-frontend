import React from 'react'
import './why.css'
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";

const Why = () => {
    return (
        <section className='comparison-section'>
            <div className="comparison-container">
                <div className="comparison-header" data-aos="fade-up">
                    <h2>Why Choose <span className="highlight-text">ChartSynch?</span></h2>
                    <p>Stop guessing. Start mirroring. See why manual trading is a thing of the past.</p>
                </div>

                <div className="comparison-table-wrapper" data-aos="fade-up">
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Manual Trading</th>
                                <th className="brand-header">
                                    ChartSynch
                                    <span className="brand-badge">Recommended</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="feature-cell">Time Required</td>
                                <td className="neutral-cell">4-8 Hours / Day</td>
                                <td className="positive-cell highlight-cell">5 Min / Week</td>
                            </tr>
                            <tr>
                                <td className="feature-cell">Knowledge Needed</td>
                                <td className="neutral-cell">Years of Study</td>
                                <td className="positive-cell highlight-cell">Zero Experience</td>
                            </tr>
                            <tr>
                                <td className="feature-cell">Stress Level</td>
                                <td className="negative-cell">High Stress <span className="icon-n"><BsXCircleFill /></span></td>
                                <td className="positive-cell">100% Passive <span className="icon-p"><BsCheckCircleFill /></span></td>
                            </tr>
                            <tr>
                                <td className="feature-cell">Success Rate</td>
                                <td className="neutral-cell">Statistically Low</td>
                                <td className="positive-cell highlight-cell">Verified High</td>
                            </tr>
                            <tr>
                                <td className="feature-cell">Emotional Control</td>
                                <td className="negative-cell">Difficult <span className="icon-n"><BsXCircleFill /></span></td>
                                <td className="positive-cell">Automated <span className="icon-p"><BsCheckCircleFill /></span></td>
                            </tr>
                            <tr>
                                <td className="feature-cell">Risk Management</td>
                                <td className="neutral-cell">Manual / Inconsistent</td>
                                <td className="positive-cell highlight-cell">AI Risk Guard™</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Why
