import { useEffect, useRef, useState } from 'react'
import './Services.css'

import emergencyImg from '/services/emergency-repairs.png'
import drainImg from '/services/drain-cleaning.png'
import waterHeatersImg from '/services/water-heaters.png'
import leakDetectionImg from '/services/leak-detection.png'

const EmergencyIcon = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="100" rx="50" ry="15" fill="url(#waterGrad1)" opacity="0.6"/>
    <rect x="20" y="45" width="80" height="20" rx="10" fill="#78909C"/>
    <rect x="25" y="48" width="70" height="14" rx="7" fill="#90A4AE"/>
    <rect x="15" y="35" width="25" height="30" rx="5" fill="#607D8B"/>
    <rect x="80" y="35" width="25" height="30" rx="5" fill="#607D8B"/>
    <path d="M30 60 L30 85 Q30 95 40 95 L50 95" stroke="#78909C" strokeWidth="8" strokeLinecap="round"/>
    <circle cx="75" cy="40" r="18" fill="#EF5350"/>
    <path d="M75 30V50M65 40H85" stroke="white" strokeWidth="4" strokeLinecap="round"/>
    <defs>
      <radialGradient id="waterGrad1" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#4FC3F7"/>
        <stop offset="100%" stopColor="#4FC3F7" stopOpacity="0"/>
      </radialGradient>
    </defs>
  </svg>
)

const DrainIcon = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="105" rx="45" ry="10" fill="url(#waterGrad2)" opacity="0.6"/>
    <path d="M45 15 Q60 5 75 15 L75 35 L45 35 Z" fill="#78909C"/>
    <ellipse cx="60" cy="35" rx="18" ry="6" fill="#607D8B"/>
    <path d="M50 40 Q45 60 50 80 Q55 95 60 100" stroke="#4FC3F7" strokeWidth="6" strokeLinecap="round"/>
    <path d="M70 40 Q75 60 70 80 Q65 95 60 100" stroke="#4FC3F7" strokeWidth="6" strokeLinecap="round"/>
    <path d="M60 45 L60 95" stroke="#29B6F6" strokeWidth="5" strokeLinecap="round"/>
    <circle cx="52" cy="65" r="4" fill="#81D4FA"/>
    <circle cx="68" cy="75" r="3" fill="#81D4FA"/>
    <circle cx="60" cy="55" r="3" fill="#B3E5FC"/>
    <ellipse cx="60" cy="100" rx="25" ry="8" fill="#4FC3F7" opacity="0.3"/>
    <defs>
      <radialGradient id="waterGrad2" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#4FC3F7"/>
        <stop offset="100%" stopColor="#4FC3F7" stopOpacity="0"/>
      </radialGradient>
    </defs>
  </svg>
)

const WaterHeaterIcon = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="108" rx="40" ry="8" fill="url(#waterGrad3)" opacity="0.5"/>
    <rect x="30" y="15" width="60" height="85" rx="8" fill="#B0BEC5"/>
    <rect x="33" y="18" width="54" height="79" rx="6" fill="#CFD8DC"/>
    <circle cx="60" cy="30" r="8" fill="#EF5350"/>
    <circle cx="60" cy="30" r="5" fill="#F44336"/>
    <rect x="40" y="45" width="40" height="40" rx="4" fill="#90A4AE"/>
    <path d="M50 55V75M60 50V80M70 55V75" stroke="#78909C" strokeWidth="3" strokeLinecap="round"/>
    <rect x="25" y="95" width="15" height="12" rx="2" fill="#607D8B"/>
    <rect x="80" y="95" width="15" height="12" rx="2" fill="#607D8B"/>
    <defs>
      <radialGradient id="waterGrad3" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#4FC3F7"/>
        <stop offset="100%" stopColor="#4FC3F7" stopOpacity="0"/>
      </radialGradient>
    </defs>
  </svg>
)

const LeakDetectionIcon = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="105" rx="50" ry="12" fill="url(#waterGrad4)" opacity="0.6"/>
    <rect x="55" y="55" width="60" height="15" rx="7" fill="#78909C"/>
    <rect x="100" y="50" width="15" height="25" rx="4" fill="#607D8B"/>
    <path d="M25 75 L45 55 Q50 50 55 55 L70 70 Q75 75 70 80 L50 100 Q45 105 40 100 L20 80 Q15 75 20 70 Z" fill="#546E7A"/>
    <path d="M35 70 L55 90" stroke="#455A64" strokeWidth="6" strokeLinecap="round"/>
    <path d="M85 15 Q85 5 85 15 C70 30 70 45 85 45 C100 45 100 30 85 15Z" fill="#4FC3F7"/>
    <path d="M82 22 Q78 30 80 38" stroke="#81D4FA" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="95" cy="70" r="8" fill="#29B6F6" opacity="0.6"/>
    <circle cx="80" cy="85" r="5" fill="#4FC3F7" opacity="0.5"/>
    <circle cx="105" cy="90" r="6" fill="#4FC3F7" opacity="0.4"/>
    <defs>
      <radialGradient id="waterGrad4" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#4FC3F7"/>
        <stop offset="100%" stopColor="#4FC3F7" stopOpacity="0"/>
      </radialGradient>
    </defs>
  </svg>
)

const services = [
  {
    id: 1,
    title: 'Emergency Repairs',
    image: emergencyImg,
    icon: EmergencyIcon,
  },
  {
    id: 2,
    title: 'Drain Cleaning',
    image: drainImg,
    icon: DrainIcon,
  },
  {
    id: 3,
    title: 'Water Heaters',
    image: waterHeatersImg,
    icon: WaterHeaterIcon,
  },
  {
    id: 4,
    title: 'Leak Detection & More',
    image: leakDetectionImg,
    icon: LeakDetectionIcon,
  },
]

function ServiceImage({ service }) {
  const [imageError, setImageError] = useState(false)
  const IconComponent = service.icon

  if (imageError) {
    return (
      <div className="service-icon-fallback">
        <IconComponent />
      </div>
    )
  }

  return (
    <img
      src={service.image}
      alt={service.title}
      className="service-image"
      onError={() => setImageError(true)}
    />
  )
}

function Services() {
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          services.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index])
            }, index * 150)
          })
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="services" id="services" ref={sectionRef}>
      <div className="services-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${visibleCards.includes(index) ? 'visible' : ''}`}
            >
              <div className="service-image-wrapper">
                <div className="water-splash-bg"></div>
                <ServiceImage service={service} />
              </div>
              <div className="service-label">
                <span className="service-title">{service.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <a href="#contact" className="cta-button">
            <span className="cta-text">REQUEST SERVICE</span>
          </a>
          <a href="tel:123-455-7890" className="cta-phone">
            <svg className="phone-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span className="cta-phone-text">
              <span className="cta-label">CALL-NOW</span>
              <span className="cta-number">123-455-7890</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
