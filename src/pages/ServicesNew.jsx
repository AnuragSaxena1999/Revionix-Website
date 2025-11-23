import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import './ServicesNew.css'
import { 
  FaUserCheck,
  FaFileInvoiceDollar,
  FaClock,
  FaCheckCircle,
  FaChartPie,
  FaShieldAlt,
  FaMoneyBillWave,
  FaChartBar,
  FaBullseye,
  FaHandsHelping,
  FaCertificate,
  FaChartLine,
  FaRegSmile,
  FaQuoteLeft
} from 'react-icons/fa'

const kpis = [
  { icon: <FaChartLine />, label: 'Clean Claim Rate', value: '99%' },
  { icon: <FaChartPie />, label: 'AR Reduction', value: '30% avg.' },
  { icon: <FaRegSmile />, label: 'Client Satisfaction', value: '98%' }
]

const testimonials = [
  { quote: 'Revionix improved our collections and reduced denials dramatically. Their team integrates with our clinicians seamlessly.', name: 'Dr. Sarah Lee, CEO' },
  { quote: 'We saw faster reimbursements and cleaner claims within 90 days of engagement.', name: 'Michael R., Practice Manager' }
]

const services = [
  { title: 'Verification of Benefits', icon: <FaUserCheck />, description: 'Real-time eligibility checks and benefit validation to avoid surprises at the point of care.' },
  { title: 'Prior Authorization', icon: <FaFileInvoiceDollar />, description: 'Complete prior auth management to reduce denials and prevent delays.' },
  { title: 'Scheduling & Authorizations', icon: <FaClock />, description: 'Coordinated scheduling and payer checks to reduce no-shows and rework.' },
  { title: 'Claims Submission', icon: <FaCheckCircle />, description: 'Clean, compliant claims submitted electronically with pre-audits.' },
  { title: 'A/R Follow-Up', icon: <FaChartPie />, description: 'Proactive collections using analytics-driven workflows.' },
  { title: 'Denial Management', icon: <FaShieldAlt />, description: 'Root-cause denial analysis and appeals to recover revenue.' },
  { title: 'Payment Posting', icon: <FaMoneyBillWave />, description: 'Accurate ERA posting and reconciliation for clean ledgers.' },
  { title: 'Reporting & Analytics', icon: <FaChartBar />, description: 'Actionable dashboards to prioritize backlog and improve cash flow.' }
]

const serviceImages = [
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&q=80',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&q=80',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&q=80',
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=250&fit=crop&q=80',
  'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400&h=250&fit=crop&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&q=80'
]

export default function ServicesNew() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // This ensures animations trigger on scroll up and down
    });
  }, []);

  return (
    <div className="page services-new-page">
      <header className="services-hero">
        <div className="services-hero-inner">
          <h1 data-aos="fade-down">Comprehensive Revenue Cycle Management — Measurable Results</h1>
          <p className="services-hero-sub" data-aos="fade-down" data-aos-delay="100">
            Partner with a team that blends healthcare domain expertise, proven workflows and analytics to protect your revenue and improve operational efficiency.
          </p>
          <div className="services-hero-actions" data-aos="fade-up" data-aos-delay="200">
            <Link to="/contact" className="btn btn-primary">Request a Consultation</Link>
            <Link to="/contact" className="btn btn-secondary">Get Pricing</Link>
          </div>
        </div>
      </header>

      <section className="kpi-row">
        <div className="kpi-inner">
          {kpis.map((k, i) => (
            <div key={i} className="kpi-card" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="kpi-icon">{k.icon}</div>
              <div className="kpi-value">{k.value}</div>
              <div className="kpi-label">{k.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-intro">
        <div className="lead" data-aos="fade-up">
          We manage the full revenue lifecycle — eligibility, authorizations, coding, claims, denials and AR recovery — using KPI-driven processes and a dedicated team assigned to your account.
        </div>

        <div className="services-pillars">
          <div className="pillar-card" data-aos="fade-up" data-aos-delay="100">
            <div className="pillar-icon"><FaBullseye /></div>
            <h4>Accuracy</h4>
            <p>Clinical and coding review to ensure claim integrity and higher clean-claim rates.</p>
          </div>

          <div className="pillar-card" data-aos="fade-up" data-aos-delay="200">
            <div className="pillar-icon"><FaHandsHelping /></div>
            <h4>Partnership</h4>
            <p>Dedicated account teams integrate with your staff and systems for seamless operations.</p>
          </div>

          <div className="pillar-card" data-aos="fade-up" data-aos-delay="300">
            <div className="pillar-icon"><FaCertificate /></div>
            <h4>Compliance</h4>
            <p>HIPAA-forward processes and payer-compliant workflows to minimize risk.</p>
          </div>
        </div>
      </section>

      <section className="services-grid-section">
        <h2 className="section-title" data-aos="fade-up">Our Services</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">End-to-end RCM services designed to improve cash flow and operational efficiency.</p>

        <div className="services-cards-grid">
          {services.map((s, idx) => (
            <article key={idx} className="service-card-modern" data-aos="zoom-in" data-aos-delay={(idx % 4) * 100}>
              <img src={serviceImages[idx]} alt={s.title} className="service-card-image" loading="lazy" />
              <div className="service-card-top">
                <div className="service-icon-large">{s.icon}</div>
              </div>
              <h3 className="service-title-card">{s.title}</h3>
              <p className="service-description-card">{s.description}</p>
              
            </article>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <h3 data-aos="fade-up">What our clients say</h3>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="testimonial-card" data-aos="fade-up" data-aos-delay={i * 150}>
              <div className="testimonial-quote-icon"><FaQuoteLeft /></div>
              <p>“{t.quote}”</p>
              <footer>- {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="services-cta" data-aos="zoom-in">
        <div className="cta-inner">
          <h2>Ready to improve your revenue cycle?</h2>
          <p>Schedule a brief discovery call and we’ll show you a prioritized plan to recover revenue and reduce A/R days. </p>
          <Link to="/contact" className="btn btn-primary btn-large">Schedule a Discovery Call</Link>
        </div>
      </section>
    </div>
  )
}
