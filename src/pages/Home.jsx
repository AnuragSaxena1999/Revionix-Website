import React from 'react'
import './Pages.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <div className="moto">
            <h2 className="moto-text">Redefining Healthcare Revenue</h2>
          </div>
          <h1 className="hero-title">
            Comprehensive <span className="gradient-text">Revenue Cycle Management</span> Services
          </h1>
          <p className="hero-description">
            Comprehensive Revenue Cycle Management (RCM) services designed to enhance financial performance 
            and operational efficiency for healthcare providers.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Schedule a Consultation</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us Today</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-value">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">$2B+</div>
              <div className="stat-label">Revenue Recovered</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">500+</div>
              <div className="stat-label">Healthcare Partners</div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-compact">
        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>Simplify revenue operations and help medical practices achieve faster reimbursements, cleaner claims, and consistent cash flow.</p>
          </div>
          <div className="about-card">
            <div className="about-icon">🏥</div>
            <h3>Expertise</h3>
            <p>Deep domain knowledge across Orthopedics, Neurology, Spine, and Primary Care with process precision for every client.</p>
          </div>
          <div className="about-card">
            <div className="about-icon">⚡</div>
            <h3>Why Us</h3>
            <p>Minimize claim errors, reduce administrative workloads, and maintain full compliance with payer and HIPAA guidelines.</p>
          </div>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">Our Core RCM Services</h2>
        <p className="section-subtitle">
          Comprehensive solutions to optimize your revenue cycle from start to finish
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <h3>Verification of Benefits</h3>
            <p>Real-time eligibility checks and detailed benefit summaries to reduce rejections and prevent billing errors.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <h3>Prior Authorization</h3>
            <p>Complete authorization management with timely approvals and supporting documentation to reduce denials.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <h3>Scheduling Support</h3>
            <p>Seamless appointment coordination with insurance verification to reduce no-shows and improve satisfaction.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <h3>Claim Submission</h3>
            <p>Clean, compliant claims submitted electronically within payer timelines with pre-submission audits.</p>
          </div>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <h3>A/R Follow-Up</h3>
            <p>Continuous tracking and follow-up of unpaid claims with clear communication for timely recovery.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <h3>Denial Management</h3>
            <p>Root-cause analysis, comprehensive appeals, and data-driven insights to maximize recoveries.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <h3>Payment Posting</h3>
            <p>Accurate ERA and manual posting with daily reconciliation and discrepancy identification.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <h3>Reporting & Analytics</h3>
            <p>Detailed dashboards tracking collections, denials, turnaround time, and payer trends for actionable insights.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Revenue Cycle?</h2>
          <p>Join hundreds of healthcare organizations already benefiting from our solutions.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary btn-large">Schedule a Consultation</Link>
            <Link to="/contact" className="btn btn-secondary btn-large">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

