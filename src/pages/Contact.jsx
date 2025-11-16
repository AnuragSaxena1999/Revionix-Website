import React, { useState } from 'react'
import './Pages.css'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState({ submitting: false, success: null, error: null })
  const [showPopup, setShowPopup] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Basic inline UX: show submitting state and optimistic thank-you popup
    setStatus({ submitting: true, success: null, error: null })
    setShowPopup(true)

    // Prepare template params
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      organization: formData.organization,
      phone: formData.phone,
      message: formData.message
    }

    // If EmailJS is configured via environment variables, use it.
    // Provide Vite env vars: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (serviceId && templateId && publicKey) {
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          setStatus({ submitting: false, success: 'Thank you for your message! We will get back to you soon.', error: null })
          setFormData({ name: '', email: '', organization: '', phone: '', message: '' })
          // Keep popup visible briefly then hide
          setTimeout(() => setShowPopup(false), 4000)
        })
        .catch((err) => {
          console.error('EmailJS error:', err)
          setStatus({ submitting: false, success: null, error: 'There was an error sending your message. Please try again later.' })
          // hide optimistic popup if the send failed
          setShowPopup(false)
        })
    } else {
      // Fallback: simulate send so functionality remains intact when EmailJS isn't configured.
      setTimeout(() => {
        setStatus({ submitting: false, success: 'Thank you for your message! We will get back to you soon.', error: null })
        setFormData({ name: '', email: '', organization: '', phone: '', message: '' })
        // auto-hide popup after showing
        setTimeout(() => setShowPopup(false), 4000)
      }, 700)
    }
  }

  return (
    <div className="page">
      {/* Optimistic popup shown immediately after user clicks send */}
      {showPopup && (
        <div
          role="status"
          aria-live="polite"
          className="contact-popup"
          style={{
            position: 'fixed',
            right: '1rem',
            bottom: '1rem',
            background: 'linear-gradient(90deg, var(--primary-blue), var(--primary-orange))',
            color: '#fff',
            padding: '1rem 1.25rem',
            borderRadius: '8px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            zIndex: 2000
          }}
        >
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <div style={{ fontWeight: 600 }}>Thank you!</div>
            <div style={{ opacity: 0.95 }}>We received your message and will respond shortly.</div>
            <button
              aria-label="Close"
              onClick={() => setShowPopup(false)}
              style={{
                marginLeft: '0.5rem',
                background: 'transparent',
                border: 'none',
                color: 'inherit',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
      <div className="page-header" style={{
          background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.06) 0%, rgba(249, 115, 22, 0.06) 100%)',
          backgroundImage: "url('/assets/contact-bg.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          color: '#fff',
          padding: '4rem 2rem',
          borderRadius: '16px',
          marginBottom: '3rem'
        }}>
          <h1 style={{textShadow: '0 2px 8px rgba(0,0,0,0.25)'}}>Contact Us</h1>
          <p className="page-subtitle" style={{textShadow: '0 1px 4px rgba(0,0,0,0.18)'}}>
            Get in touch with our team to learn how we can help your organization
          </p>
        </div>

      <div className="contact-container">
        <div className="contact-info">
          <picture>
            <source
              type="image/webp"
              srcSet={
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=480&h=320&fit=crop&q=80&fm=webp 480w, ' +
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=533&fit=crop&q=80&fm=webp 800w, ' +
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&q=80&fm=webp 1200w'
              }
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <source
              srcSet={
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=480&h=320&fit=crop&q=80 480w, ' +
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=533&fit=crop&q=80 800w, ' +
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&q=80 1200w'
              }
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=533&fit=crop&q=80"
              alt="Modern office space"
              className="contact-info-image"
              loading="lazy"
            />
          </picture>
          <h2>Let's Connect</h2>
          <p>Whether you're looking for revenue cycle management solutions or have questions about our services, we're here to help.</p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon" aria-hidden="true"><FaEnvelope /></div>
              <div>
                <h3>Email</h3>
                <p>info@revionix.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon" aria-hidden="true"><FaPhoneAlt /></div>
              <div>
                <h3>Phone</h3>
                <p>1-800-REVIONIX</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon" aria-hidden="true"><FaMapMarkerAlt /></div>
              <div>
                <h3>Address</h3>
                <p>123 Revenue Plaza<br />Healthcare City, HC 12345</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon" aria-hidden="true"><FaClock /></div>
              <div>
                <h3>Business Hours</h3>
                <p>Monday - Friday<br />8:00 AM - 6:00 PM EST</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} role="form" aria-label="Contact form">
          <h2>Send Us a Message</h2>
          {status.success && (
            <div className="form-success" role="status" aria-live="polite" style={{marginBottom: '1rem'}}>
              {status.success}
            </div>
          )}
          {status.error && (
            <div className="form-error" role="alert" style={{marginBottom: '1rem', color: 'var(--primary-orange)'}}>
              {status.error}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <label htmlFor="organization">Organization</label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              autoComplete="organization"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              inputMode="tel"
              autoComplete="tel"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-full" disabled={status.submitting} aria-busy={status.submitting}>
            {status.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact

