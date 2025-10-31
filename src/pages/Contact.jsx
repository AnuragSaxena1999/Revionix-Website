import React, { useState } from 'react'
import './Pages.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      organization: '',
      phone: '',
      message: ''
    })
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p className="page-subtitle">
          Get in touch with our team to learn how we can help your organization
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>Whether you're looking for revenue cycle management solutions or have questions about our services, we're here to help.</p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>info@revionix.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h3>Phone</h3>
                <p>1-800-REVIONIX</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Address</h3>
                <p>123 Revenue Plaza<br />Healthcare City, HC 12345</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <div>
                <h3>Business Hours</h3>
                <p>Monday - Friday<br />8:00 AM - 6:00 PM EST</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
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
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact

