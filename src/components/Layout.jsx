import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

function Layout({ children }) {
  const location = useLocation()

  return (
    <div className="layout">
      <header className="header">
        <nav className="nav-container">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Revionix Logo" className="logo-img" />
            <span className="logo-text">Revionix</span>
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/specialities" className={location.pathname === '/specialities' ? 'active' : ''}>
                Specialities
              </Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">{children}</main>
      <footer className="footer">
        <p>&copy; 2024 Revionix. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout

