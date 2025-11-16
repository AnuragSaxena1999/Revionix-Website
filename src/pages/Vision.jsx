import React from 'react'
import './Vision.css'
import { Link } from 'react-router-dom'
import { FaCogs, FaRocket, FaUsers, FaBrain, FaChartLine, FaShieldAlt } from 'react-icons/fa'

export default function Vision() {
  return (
    <div className="page vision-page">
      <header className="vision-hero split">
        <div className="vision-hero-left">
          <h1>Our Vision</h1>
          <p className="vision-sub">Shaping the future of healthcare revenue management with intelligence, transparency and scale.</p>
          <p className="lead">We are building an AI-integrated automation module that brings intelligence into every RCM process — from eligibility checks to claims, denials, and reimbursements — enabling providers to work smarter and focus on patient care.</p>
          <div className="vision-actions">
            <Link to="/contact" className="btn btn-primary">Contact Our Team</Link>
            <Link to="/services" className="btn btn-secondary">Explore Services</Link>
          </div>
        </div>
        <div className="vision-hero-right">
          <div className="vision-highlights">
            <div className="highlight">
              <div className="icon"><FaCogs /></div>
              <h4>Smart Automation</h4>
              <p>Automate repetitive tasks with precision and auditability.</p>
            </div>
            <div className="highlight">
              <div className="icon"><FaBrain /></div>
              <h4>AI-Driven Insights</h4>
              <p>Predict denials and surface actions before they impact revenue.</p>
            </div>
            <div className="highlight">
              <div className="icon"><FaUsers /></div>
              <h4>Human + Machine</h4>
              <p>Enhance staff productivity — not replace experts.</p>
            </div>
          </div>
        </div>
      </header>

      <section className="vision-features">
        <div className="features-inner">
          <h2>Our Long-Term Commitments</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><FaRocket /></div>
              <h3>Transforming Operations</h3>
              <p>Making automation accessible to every healthcare organization through scalable and adaptable solutions.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><FaChartLine /></div>
              <h3>Driving Value</h3>
              <p>Ensuring our automations deliver measurable improvements in revenue, efficiency, and compliance.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><FaUsers /></div>
              <h3>Human + Machine Synergy</h3>
              <p>Combining intelligent automation with skilled teams to create better outcomes.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><FaShieldAlt /></div>
              <h3>Continuous Innovation</h3>
              <p>Iterating on models and workflows to stay ahead of industry needs.</p>
            </div>
          </div>

          <div className="ai-callout">
            <div className="callout-left">
              <h3>AI-Integrated Automation</h3>
              <p>Our next-generation RCM module will connect workflows across the revenue cycle, anticipate issues, and accelerate reimbursements — all while preserving auditability and compliance.</p>
              <ul>
                <li>Eligibility & benefits verification</li>
                <li>Prior authorization automation</li>
                <li>Claims processing with intelligent routing</li>
                <li>Denial prediction and automated appeals</li>
              </ul>
            </div>
            <div className="callout-right">
              <div className="stat">+30%</div>
              <div className="stat-label">faster claim resolution (target)</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
