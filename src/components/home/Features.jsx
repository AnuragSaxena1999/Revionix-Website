import React from 'react'
import { 
  FaClipboardCheck, FaFileAlt, FaCalendarAlt, FaPaperPlane,
  FaChartLine, FaShieldAlt, FaMoneyBillWave, FaChartBar
} from 'react-icons/fa'
import './Features.css'

function Features() {
  const featuresList = [
    {
      icon: FaClipboardCheck,
      title: 'Verification of Benefits',
      description: 'Real-time eligibility checks and detailed benefit summaries to reduce rejections and prevent billing errors.'
    },
    {
      icon: FaFileAlt,
      title: 'Prior Authorization',
      description: 'Complete authorization management with timely approvals and supporting documentation to reduce denials.'
    },
    {
      icon: FaCalendarAlt,
      title: 'Scheduling Support',
      description: 'Seamless appointment coordination with insurance verification to reduce no-shows and improve satisfaction.'
    },
    {
      icon: FaPaperPlane,
      title: 'Claim Submission',
      description: 'Clean, compliant claims submitted electronically within payer timelines with pre-submission audits.'
    },
    {
      icon: FaChartLine,
      title: 'A/R Follow-Up',
      description: 'Continuous tracking and follow-up of unpaid claims with clear communication for timely recovery.'
    },
    {
      icon: FaShieldAlt,
      title: 'Denial Management',
      description: 'Root-cause analysis, comprehensive appeals, and data-driven insights to maximize recoveries.'
    },
    {
      icon: FaMoneyBillWave,
      title: 'Payment Posting',
      description: 'Accurate ERA and manual posting with daily reconciliation and discrepancy identification.'
    },
    {
      icon: FaChartBar,
      title: 'Reporting & Analytics',
      description: 'Detailed dashboards tracking collections, denials, turnaround time, and payer trends for actionable insights.'
    }
  ]

  return (
    <section className="features">
      <h2 className="section-title" data-aos="fade-up">Our Core RCM Services</h2>
      <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        Comprehensive solutions to optimize your revenue cycle from start to finish
      </p>
      <div className="features-grid">
        {featuresList.map((feature, index) => (
          <div 
            className="feature-card" 
            key={index} 
            data-aos="zoom-in" 
            data-aos-delay={index * 50}>
            <div className="feature-icon" aria-hidden="true">
              <feature.icon />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features