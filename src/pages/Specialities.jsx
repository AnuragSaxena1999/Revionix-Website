import React from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

function Specialities() {
  const specialties = [
    {
      title: 'Radiology Centers',
      icon: '🩻',
      description: 'Radiology billing requires precision in capturing procedures, interpreting reports, and applying correct modifiers.',
      details: 'We ensure accurate charge entry, correct CPT usage, and timely claim submissions to reduce denials and improve turnaround time. Our specialized team handles high claim volumes efficiently, helping radiology centers maintain a consistent cash flow.'
    },
    {
      title: 'Surgery Centers',
      icon: '⚕️',
      description: 'Ambulatory Surgery Centers (ASCs) deal with complex billing involving multiple procedures, payers, and documentation layers.',
      details: 'Our experts manage pre-authorizations, operative note reviews, coding, and claims submission, ensuring compliance with payer-specific rules and maximizing reimbursement accuracy for surgical cases.'
    },
    {
      title: 'Orthopedic Clinics',
      icon: '🦴',
      description: 'Orthopedic practices often face challenges with diverse procedure types — from joint injections and therapy to surgical billing.',
      details: 'We specialize in handling implant billing, modifiers, and multi-payer submissions, ensuring quick authorizations, proper documentation, and faster payment cycles.'
    },
    {
      title: 'Anesthesiology Services',
      icon: '💉',
      description: 'Anesthesia billing is time-based and requires meticulous attention to documentation and concurrency rules.',
      details: 'Our team ensures precise coding of anesthesia start and stop times, correct modifier usage, and compliance with payer regulations, minimizing errors and maximizing revenue for each case.'
    },
    {
      title: 'Hospital Services',
      icon: '🏥',
      description: 'Hospitals require detailed oversight of both inpatient and outpatient billing.',
      details: 'We provide comprehensive support — including charge capture, claim submission, denial management, and payment posting — ensuring full compliance with Medicare, Medicaid, and commercial payers while maintaining real-time reporting and visibility across departments.'
    },
    {
      title: 'Physician Groups',
      icon: '👥',
      description: 'Managing billing for multi-provider or multi-specialty groups demands coordination and consistency.',
      details: 'We streamline the entire billing cycle — from eligibility checks and charge entry to AR follow-up and reporting — providing centralized control, improved cash flow, and clear performance analytics for all providers under your network.'
    }
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Dedicated Process Expert Assignment',
      description: 'Once you decide to partner with us, we assign a dedicated Process Expert who will be your primary point of contact.',
      details: 'This expert thoroughly studies your current RCM setup — including software platforms, payer mix, documentation flow, and internal preferences — to build a clear understanding of your operations.'
    },
    {
      number: '02',
      title: 'Customized Workflow Development',
      description: 'After understanding your practice\'s process, our expert creates a customized workflow strategy tailored to your clinic\'s needs.',
      details: 'This ensures that our RCM team integrates smoothly with your existing system while maintaining accuracy, compliance, and turnaround time standards.'
    },
    {
      number: '03',
      title: 'Team Formation & Leadership',
      description: 'Once the process is finalized, your assigned Process Expert will form and lead a specialized RCM team dedicated exclusively to your account.',
      details: 'This team works under their supervision to handle eligibility, authorizations, billing, and follow-ups — ensuring accountability, consistency, and timely updates.'
    },
    {
      number: '04',
      title: 'Continuous Monitoring & Communication',
      description: 'We maintain regular communication and performance reviews through weekly or monthly reports, review calls, and feedback sessions.',
      details: 'Our management model focuses on transparency, measurable results, and ongoing optimization of your revenue cycle.'
    }
  ]

  return (
    <div className="page">
      <div className="page-header">
        <h1>Our Approach</h1>
        <p className="page-subtitle">
          Precision-driven revenue cycle management tailored to your practice
        </p>
      </div>

      {/* Our Assurance Section */}
      <section className="assurance-section">
        <div className="assurance-card">
          <h2>Our Assurance</h2>
          <div className="assurance-grid">
            <div className="assurance-item">
              <div className="assurance-icon">✓</div>
              <h3>Accuracy</h3>
            </div>
            <div className="assurance-item">
              <div className="assurance-icon">🔒</div>
              <h3>Compliance</h3>
            </div>
            <div className="assurance-item">
              <div className="assurance-icon">📊</div>
              <h3>Accountability</h3>
            </div>
          </div>
          <p className="assurance-text">
            We adapt to your existing workflows and systems, ensuring smooth coordination and measurable results.
          </p>
        </div>
      </section>

      {/* How We Manage Your Process */}
      <section className="process-section">
        <h2 className="section-title">How We Manage Your Process</h2>
        <p className="section-intro">
          Every healthcare practice operates differently — with its own systems, workflows, and payer requirements. 
          At Revionix, we understand that one-size-fits-all solutions simply don't work in medical billing.
        </p>
        <p className="section-subtitle-center">
          That's why our onboarding and management process is designed to align completely with your clinic's unique workflow.
        </p>

        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <p className="step-details">{step.details}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="process-conclusion">
          <p><strong>Your Process. Our Expertise. Managed with Precision.</strong></p>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="specialties-section">
        <div className="page-header">
          <h1>Specialties We Serve</h1>
          <p className="page-subtitle">
            Expert RCM solutions tailored to your specialty's unique billing requirements
          </p>
        </div>

        <div className="specialties-cards-grid">
          {specialties.map((specialty, index) => (
            <div key={index} className="specialty-modern-card">
              <div className="specialty-icon-large">{specialty.icon}</div>
              <h3 className="specialty-title-card">{specialty.title}</h3>
              <p className="specialty-description-card">{specialty.description}</p>
              <p className="specialty-details-card">{specialty.details}</p>
            </div>
          ))}
        </div>

        <div className="specialties-footer">
          <p>
            <strong>Revionix serves every specialty with precision, reliability, and a commitment to results</strong> — 
            ensuring your focus stays on patient care while we manage your revenue.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Specialities

