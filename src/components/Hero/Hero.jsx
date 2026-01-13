import { useEffect, useState } from 'react'
import './Hero.css'
import backgroundImg from '/background.png'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-bg-gradient"></div>
        <div
          className="water-decoration"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        ></div>
      </div>

      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">Reliable Plumbing</span>
            <span className="title-line">Services</span>
          </h1>
          <p className="hero-subtitle">Your Trusted Local Plumber</p>

          <div className="hero-buttons">
            <a href="#services" className="btn-primary">
              REQUEST SERVICE
            </a>
            <a href="tel:123-456-7890" className="btn-secondary">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span className="btn-text">
                <span className="btn-label">CALL NOW</span>
                <span className="btn-number">123-456-7890</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,80 C200,120 400,40 600,80 C800,120 1000,40 1200,80 C1350,110 1400,90 1440,80 L1440,120 L0,120 Z" fill="#ffffff"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
