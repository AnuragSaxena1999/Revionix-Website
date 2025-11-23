import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import './Pages.css'

import {
  FaStethoscope,
  FaHospital,
  FaUserMd,
  FaHeartbeat,
  FaBrain,
  FaBone,
} from 'react-icons/fa'

const specialties = [
  {
    icon: <FaStethoscope />,
    title: 'Family Medicine',
    description: 'Comprehensive care for all ages, focusing on long-term patient relationships.',
    details: 'We handle everything from routine check-ups and preventive care to managing chronic conditions, ensuring seamless billing and coding for family practices.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop&q=80',
  },
  {
    icon: <FaHeartbeat />,
    title: 'Cardiology',
    description: 'Specialized RCM for complex cardiovascular procedures and diagnostics.',
    details: 'Our expertise in cardiology billing ensures accurate coding for interventions, imaging, and consultations, maximizing reimbursements.',
    image: 'https://images.unsplash.com/photo-1530026405182-2823739d5914?w=500&h=300&fit=crop&q=80',
  },
  {
    icon: <FaBone />,
    title: 'Orthopedics',
    description: 'Expert billing for surgical procedures, physical therapy, and durable medical equipment.',
    details: 'We navigate the complexities of orthopedic coding, from joint replacements to sports medicine, to ensure you are paid correctly and promptly.',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=300&fit=crop&q=80',
  },
  {
    icon: <FaBrain />,
    title: 'Neurology',
    description: 'Dedicated revenue cycle support for neurological testing and treatments.',
    details: 'Our team understands the nuances of billing for EEGs, EMGs, and specialized neurological consultations, reducing denials and improving cash flow.',
    image: 'https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?w=500&h=300&fit=crop&q=80',
  },
  {
    icon: <FaUserMd />,
    title: 'Dermatology',
    description: 'Efficient coding for medical, surgical, and cosmetic dermatology services.',
    details: 'We manage the billing for a high volume of procedures, ensuring each claim is coded accurately for optimal reimbursement.',
    image: 'https://images.unsplash.com/photo-1580502241973-424c383a54e0?w=500&h=300&fit=crop&q=80',
  },
  {
    icon: <FaHospital />,
    title: 'Multi-Specialty Clinics',
    description: 'Integrated RCM solutions for practices with diverse medical specialties.',
    details: 'We provide a unified billing platform that handles the unique requirements of various specialties under one roof, simplifying your operations.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=500&h=300&fit=crop&q=80',
  },
]

export default function Specialties() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // This ensures animations trigger on scroll up and down
    })
  }, [])

  return (
    <div className="page">
      <div className="page-header" data-aos="fade-down">
        <h1>Our Medical Specialties</h1>
        <p className="page-subtitle">
          We provide expert Revenue Cycle Management across a wide range of medical fields, ensuring financial health for every type of practice.
        </p>
      </div>

      <section className="specialties-section">
        <div className="specialties-cards-grid">
          {specialties.map((spec, index) => (
            <div key={index} className="specialty-modern-card" data-aos="fade-up" data-aos-delay={index * 50}>
              <img src={spec.image} alt={spec.title} className="specialty-card-image" loading="lazy" />
              <div className="specialty-icon-large">{spec.icon}</div>
              <h3 className="specialty-title-card">{spec.title}</h3>
              <p className="specialty-description-card">{spec.description}</p>
              <p className="specialty-details-card">{spec.details}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="specialties-footer" data-aos="zoom-in">
        <p>
          Don't see your specialty? Our flexible systems and experienced team can adapt to any medical field.
          <br />
          <Link to="/contact" style={{ color: 'var(--primary-orange)', fontWeight: '600', marginTop: '0.5rem', display: 'inline-block' }}>
            Contact us to learn more.
          </Link>
        </p>
      </footer>
    </div>
  )
}