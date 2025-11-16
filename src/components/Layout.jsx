import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  FaBars, 
  FaTimes, 
  FaFacebook, 
  FaInstagram, 
  FaWhatsapp, 
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa'
import './Layout.css'

function Layout({ children }) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  // Close menu when clicking outside the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If menuOpen is false, don't run this logic
      if (!menuOpen) return

      // Check if click is outside the header
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      // Add small delay to avoid immediate close on click that opened the menu
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside)
      }, 100)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [menuOpen])

  // Close menu when any link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <div className="layout">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="header" ref={navRef}>
        <nav className="nav-container">
          <div className="left-section">
            <Link to="/" className="logo">
              <img 
                src="/logo.png" 
                alt="Revionix Logo" 
                className="logo-img"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = '/assets/logo-fallback.png';
                }} 
              />
              <span className="logo-text">Revionix</span>
            </Link>
          </div>
          <div className="right-section">
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`} role="navigation" aria-label="Main navigation">
              <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={handleLinkClick}>Home</Link></li>
                <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''} onClick={handleLinkClick}>Services</Link></li>
                <li><Link to="/specialities" className={location.pathname === '/specialities' ? 'active' : ''} onClick={handleLinkClick}>Specialities</Link></li>
                <li><Link to="/vision" className={location.pathname === '/vision' ? 'active' : ''} onClick={handleLinkClick}>Vision</Link></li>
              <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={handleLinkClick}>Contact</Link></li>
            </ul>
            <button
              className="nav-toggle"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Duplicate nav block commented out. Navigation is provided in the right-section above. */}
        </nav>
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p><FaMapMarkerAlt /> 123 Healthcare Avenue, Medical District</p>
            <p><FaPhone /> +1 (555) 123-4567</p>
            <p><FaEnvelope /> contact@revionix.com</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/specialities">Specialities</Link></li>
              <li><Link to="/vision">Our Vision</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="https://facebook.com/revionix" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com/revionix" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://linkedin.com/company/revionix" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Office Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Revionix. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

