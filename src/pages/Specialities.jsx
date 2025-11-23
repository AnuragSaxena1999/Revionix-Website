import React from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'
import { 
  FaXRay, 
  FaHospital, 
  FaBone, 
  FaSyringe,
  FaHospitalAlt,
  FaUserMd,
  FaBullseye,
  FaShieldAlt,
  FaClipboardCheck
} from 'react-icons/fa'
import DevelopmentProcess1 from '../components/home/DevelopmentProcess1.jsx'

function Specialities() {
  const specialties = [
    {
      title: 'Radiology Centers',
      icon: <FaXRay />,
      description: 'Radiology billing requires precision in capturing procedures, interpreting reports, and applying correct modifiers.',
      details: 'We ensure accurate charge entry, correct CPT usage, and timely claim submissions to reduce denials and improve turnaround time. Our specialized team handles high claim volumes efficiently, helping radiology centers maintain a consistent cash flow.'
    },
    {
      title: 'Surgery Centers',
      icon: <FaHospital />,
      description: 'Ambulatory Surgery Centers (ASCs) deal with complex billing involving multiple procedures, payers, and documentation layers.',
      details: 'Our experts manage pre-authorizations, operative note reviews, coding, and claims submission, ensuring compliance with payer-specific rules and maximizing reimbursement accuracy for surgical cases.'
    },
    {
      title: 'Orthopedic Clinics',
      icon: <FaBone />,
      description: 'Orthopedic practices often face challenges with diverse procedure types — from joint injections and therapy to surgical billing.',
      details: 'We specialize in handling implant billing, modifiers, and multi-payer submissions, ensuring quick authorizations, proper documentation, and faster payment cycles.'
    },
    {
      title: 'Anesthesiology Services',
      icon: <FaSyringe />,
      description: 'Anesthesia billing is time-based and requires meticulous attention to documentation and concurrency rules.',
      details: 'Our team ensures precise coding of anesthesia start and stop times, correct modifier usage, and compliance with payer regulations, minimizing errors and maximizing revenue for each case.'
    },
    {
      title: 'Hospital Services',
      icon: <FaHospitalAlt />,
      description: 'Hospitals require detailed oversight of both inpatient and outpatient billing.',
      details: 'We provide comprehensive support — including charge capture, claim submission, denial management, and payment posting — ensuring full compliance with Medicare, Medicaid, and commercial payers while maintaining real-time reporting and visibility across departments.'
    },
    {
      title: 'Physician Groups',
      icon: <FaUserMd />,
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
    <div className="page" data-aos="fade-in">
      <div data-aos="fade-up" className="page-header" style={{
          backgroundImage: "linear-gradient(135deg, rgba(30, 58, 138, 0.7) 0%, rgba(25, 36, 70, 0.8) 100%), url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?fit=crop&w=1200&q=80')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Creates a parallax-like effect
          color: '#fff',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          padding: '4rem 2rem',
          borderRadius: '16px',
          marginBottom: '1rem'
        }}>
          <h1 data-aos="fade-up" data-aos-delay="100" style={{textShadow: '0 2px 8px rgba(0,0,0,0.3)' , color:'#fff'}}>Our Approach</h1>
          <p data-aos="fade-up" data-aos-delay="200" className="page-subtitle" style={{color: 'rgba(255, 255, 255, 0.9)', textShadow: '0 1px 4px rgba(0,0,0,0.2)'}}>
            Precision-driven revenue cycle management tailored to your practice
          </p>
        </div>

      {/* Our Assurance Section */}
      <section className="assurance-section" data-aos="fade-up">
        <h2 className="section-title">Our Assurance: Your Success is Our Priority</h2>
        <p className="section-intro" style={{ maxWidth: '800px', margin: '0 auto 2.5rem auto' }}>
          We build our partnerships on a foundation of trust and transparency. Our assurance is a promise to manage your revenue cycle with the highest standards of precision and integrity, allowing you to focus on what matters most: patient care.
        </p>
        <div className="assurance-grid">
          <div className="assurance-item" data-aos="fade-up" data-aos-delay="100">
            <div className="assurance-icon"><FaBullseye /></div>
            <h3>Unyielding Accuracy</h3>
            <p>
              We guarantee meticulous attention to detail in every claim. Our certified coders and billing experts minimize errors, reduce denials, and ensure every charge is captured correctly, maximizing your reimbursement from the start.
            </p>
          </div>
          <div className="assurance-item" data-aos="fade-up" data-aos-delay="200">
            <div className="assurance-icon"><FaShieldAlt /></div>
            <h3>Ironclad Compliance</h3>
            <p>
              Navigating the complexities of healthcare regulations is our expertise. We ensure your billing practices are always up-to-date with the latest payer policies, HIPAA regulations, and industry mandates, protecting your practice from compliance risks.
            </p>
          </div>
          <div className="assurance-item" data-aos="fade-up" data-aos-delay="300">
            <div className="assurance-icon"><FaClipboardCheck /></div>
            <h3>Complete Accountability</h3>
            <p>
              Your dedicated Process Expert provides clear, consistent communication and detailed performance reports. We offer full transparency into your financial performance, holding ourselves accountable for the results we deliver.
            </p>
          </div>
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

        {/* <div className="process-steps">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="process-step-card"
                data-aos="fade-up"
                data-aos-delay={index * 150}
                data-aos-duration="800"
              >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  <p className="step-details">{step.details}</p>
                </div>
              </div>
            ))}
        </div> */}
        <div>
          <DevelopmentProcess1  />
        </div>

        <div className="process-conclusion">
          <p><strong>Your Process. Our Expertise. Managed with Precision.</strong></p>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="specialties-section" data-aos="fade-up">
        <div className="page-header" data-aos="fade-up">
          <h1 data-aos="fade-up">Specialties We Serve</h1>
          <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
            Expert RCM solutions tailored to your specialty's unique billing requirements
          </p>
        </div>

        <div className="specialties-cards-grid">
          {specialties.map((specialty, index) => {
            const specialtyImages = [
              'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=400&h=250&fit=crop&q=80',
              'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=250&fit=crop&q=80',
              'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop&q=80',
              'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&q=80',
              'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=400&h=250&fit=crop&q=80',
              'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=250&fit=crop&q=80'
            ]
            const animationType = index % 2 === 0 ? 'zoom-in-right' : 'zoom-in-left';
            return (
              <div 
                key={index} 
                className="specialty-modern-card"
                data-aos={animationType}
                data-aos-delay={index * 100}
              >
                <img 
                  src={specialtyImages[index]} 
                  alt={specialty.title}
                  className="specialty-card-image"
                />
                <div className="specialty-icon-large">{specialty.icon}</div>
                <h3 className="specialty-title-card">{specialty.title}</h3>
                <p className="specialty-description-card">{specialty.description}</p>
                <p className="specialty-details-card">{specialty.details}</p>
              </div>
            )
          })}
        </div>

        <div className="specialties-footer" data-aos="fade-up">
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
