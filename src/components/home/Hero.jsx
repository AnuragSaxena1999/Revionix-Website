import React from 'react'
import { Link } from 'react-router-dom'
import { FaSmile, FaDollarSign, FaUsers } from 'react-icons/fa'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content" data-aos="fade-right" data-aos-duration="1000">
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
      <div className="hero-visual" data-aos="fade-left" data-aos-duration="1000">
        <picture className="hero-image-container">
          <source
            type="image/webp"
            srcSet={
              'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&q=80&fm=webp 400w, ' +
              'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80&fm=webp 800w, ' +
              'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=900&fit=crop&q=80&fm=webp 1200w'
            }
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <source
            srcSet={
              'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&q=80 400w, ' +
              'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80 800w, ' +
              'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=900&fit=crop&q=80 1200w'
            }
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80"
            alt="Healthcare professionals working with technology"
            className="hero-main-image"
            loading="eager"
          />
        </picture>
        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-icon" aria-hidden="true"><FaSmile /></div>
            <div className="stat-value">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" aria-hidden="true"><FaDollarSign /></div>
            <div className="stat-value">$2B+</div>
            <div className="stat-label">Revenue Recovered</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" aria-hidden="true"><FaUsers /></div>
            <div className="stat-value">500+</div>
            <div className="stat-label">Healthcare Partners</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero