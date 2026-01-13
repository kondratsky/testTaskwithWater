import { useState } from 'react'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <svg className="logo-icon" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0C20 0 0 20 0 32C0 44 9 50 20 50C31 50 40 44 40 32C40 20 20 0 20 0Z" fill="url(#dropGradient)"/>
            <path d="M20 8C20 8 8 22 8 30C8 38 13 42 20 42C27 42 32 38 32 30C32 22 20 8 20 8Z" fill="url(#innerGradient)"/>
            <defs>
              <linearGradient id="dropGradient" x1="20" y1="0" x2="20" y2="50" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4FC3F7"/>
                <stop offset="1" stopColor="#0288D1"/>
              </linearGradient>
              <linearGradient id="innerGradient" x1="20" y1="8" x2="20" y2="42" gradientUnits="userSpaceOnUse">
                <stop stopColor="#81D4FA"/>
                <stop offset="1" stopColor="#29B6F6"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="logo-text">
            <span className="logo-plumbing">PLUMBING</span>
            <span className="logo-services">SERVICES</span>
          </span>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" className="nav-link active">Home</a></li>
            <li><a href="#about" className="nav-link">About Us</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#pricing" className="nav-link">Pricing</a></li>
          </ul>
        </nav>

        <div className="header-contact">
          <div className="phone-info">
            <span className="phone-label">24/7 Emergency Call</span>
            <a href="tel:123-456-7890" className="phone-number">
              <svg className="phone-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              123-456-7890
            </a>
          </div>
          <a href="#quote" className="btn-quote">GET A QUOTE</a>
        </div>
      </div>
    </header>
  )
}

export default Header
