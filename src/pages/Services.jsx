import React from 'react'
import './Pages.css'
import { Link } from 'react-router-dom'

function Services() {
  const services = [
    {
      number: '01',
      title: 'Verification of Benefits',
      icon: '🔍',
      description: 'Accurate verification is the foundation of successful claim processing.',
      highlights: [
        'Real-time eligibility checks',
        'Detailed benefit summaries',
        'Prevent coverage issues'
      ]
    },
    {
      number: '02',
      title: 'Prior Authorization',
      icon: '✍️',
      description: 'Complete authorization management to ensure services are approved before treatment.',
      highlights: [
        'Complete documentation',
        'Regular follow-ups',
        'Reduce denials'
      ]
    },
    {
      number: '03',
      title: 'Scheduling Support',
      icon: '📅',
      description: 'Seamless appointment coordination for patients and providers.',
      highlights: [
        'Insurance verification',
        'Reduce no-shows',
        'Improved satisfaction'
      ]
    },
    {
      number: '04',
      title: 'Claim Submission',
      icon: '📋',
      description: 'Clean and compliant claims for faster payments.',
      highlights: [
        'Electronic submissions',
        'CMS compliance',
        'Pre-submission audits'
      ]
    },
    {
      number: '05',
      title: 'A/R Follow-Up',
      icon: '💼',
      description: 'Timely follow-ups for outstanding claim recovery.',
      highlights: [
        'Continuous tracking',
        'Carrier communication',
        'Aging reports'
      ]
    },
    {
      number: '06',
      title: 'Denial Management',
      icon: '🔄',
      description: 'Efficient handling of denials to maximize recoveries.',
      highlights: [
        'Root-cause analysis',
        'Appeal preparation',
        'Prevent recurring denials'
      ]
    },
    {
      number: '07',
      title: 'Payment Posting',
      icon: '💰',
      description: 'Accurate posting and reconciliation for clean records.',
      highlights: [
        'ERA posting',
        'Daily reconciliation',
        'Discrepancy identification'
      ]
    },
    {
      number: '08',
      title: 'Reporting & Analytics',
      icon: '📊',
      description: 'Visibility into revenue performance with actionable insights.',
      highlights: [
        'Custom reports',
        'Performance summaries',
        'Profitability insights'
      ]
    }
  ]

  return (
    <div className="page">
      <div className="page-header">
        <h1>Our Core RCM Services</h1>
        <p className="page-subtitle">
          Comprehensive Revenue Cycle Management services designed to enhance financial performance 
          and operational efficiency for healthcare providers
        </p>
      </div>

      <div className="services-cards-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card-modern">
            <div className="card-header-modern">
              <div className="service-icon-large">{service.icon}</div>
              <div className="service-number-badge">{service.number}</div>
            </div>
            <h3 className="service-title-card">{service.title}</h3>
            <p className="service-description-card">{service.description}</p>
            <div className="service-highlights-modern">
              {service.highlights.map((highlight, idx) => (
                <div key={idx} className="highlight-item">
                  <span className="highlight-check">✓</span>
                  <span className="highlight-text">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="services-cta">
        <h2>Ready to Transform Your Revenue Cycle?</h2>
        <p>Contact our team to learn how our comprehensive RCM services can benefit your healthcare organization.</p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn-primary">Schedule a Consultation</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Us Today</Link>
        </div>
      </section>
    </div>
  )
}

export default Services

