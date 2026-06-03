import React, { useState } from 'react';
// ----- COMPONENT LIBRARY (React Bootstrap) -----
// Layout: Container, Row, Col | UI: Card
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../pages.css';
import FeaturedProjects from './FeaturedProjects.jsx';
import Skills from './Skills.jsx';
import Experience from './Experience.jsx';

/**
 * Home – Main page: hero, FeaturedProjects, Skills, Education, Experience, contact block.
 */
function Home() {
  const [imageError, setImageError] = useState(false);

  return (
    // ----- COMPONENT LIBRARY: Container, Row, Col, Card (React Bootstrap) -----
    <Container className="mt-5 px-3 px-md-4" style={{ position: 'relative', zIndex: 1 }} fluid="lg">
      {/* Hero: photo + intro + GitHub link */}
      <Row className="mb-5 hero-section align-items-center g-4">
        <Col xs={12} lg={4} className="hero-photo-col">
          <div className="profile-image-wrapper">
            <img
              src="/naji-photo.jpg"
              alt="Naji Barakani"
              className="profile-image"
              onError={(e) => {
                if (!imageError) {
                  setImageError(true);
                  e.target.src = 'https://via.placeholder.com/300x400/1a1a1a/3b82f6?text=Naji';
                }
              }}
            />
          </div>
        </Col>
        <Col xs={12} lg={8} className="hero-content-col text-center text-lg-start d-flex flex-column justify-content-center">
          <h1 className="hero-title">Hi, I'm Naji</h1>
          <p className="hero-text mb-2" style={{ color: '#9ca3af', fontSize: '1rem' }}>
            Utrecht, Netherlands
          </p>
          <p className="hero-text">
            Motivated Software Development student at MBO Utrecht, seeking a{' '}
            <span className="hero-badge">Full Stack Developer</span>
            {' '}internship. I apply{' '}
            <span className="hero-badge">PHP</span>
            <span className="hero-badge">JavaScript</span>
            <span className="hero-badge">HTML/CSS</span>
            {' '}in team projects, learn quickly, and take responsibility in my work.
          </p>
          <div className="mt-4">
            <a
              href="https://github.com/Naji7fr"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                padding: '0.75rem 1.5rem',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                border: '1px solid rgba(59, 130, 246, 0.4)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '0.5rem' }}>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </Col>
      </Row>

      <FeaturedProjects />
      <Skills />

      {/* Education section: school / course cards */}
      <div id="education" className="section-header mt-5">
        <h2 className="section-title">Education</h2>
        <div className="section-divider"></div>
      </div>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="education-card shadow-sm">
            <Card.Body>
              <h5 className="education-title">Software Development</h5>
              <p className="education-details">MBO Utrecht</p>
              <span className="education-badge">2024 - 2027 (expected)</span>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="education-card shadow-sm">
            <Card.Body>
              <h5 className="education-title">High School Degree</h5>
              <p className="education-details">High School Diploma - Saudi Arabia</p>
              <span className="education-badge">Completed</span>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="education-card shadow-sm">
            <Card.Body>
              <h5 className="education-title">Assistant ICT Medewerker Support</h5>
              <p className="education-details">ICT Support Training</p>
              <span className="education-badge">2023 - 2024 · Completed</span>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Experience />

      <div id="languages" className="section-header mt-5">
        <h2 className="section-title">Languages</h2>
        <div className="section-divider"></div>
      </div>
      <Row className="mb-5 justify-content-center">
        <Col md={6} className="mb-3">
          <Card className="skill-card shadow-sm text-center">
            <Card.Body className="py-4">
              <h5 className="skill-card-title mb-0">Dutch</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-3">
          <Card className="skill-card shadow-sm text-center">
            <Card.Body className="py-4">
              <h5 className="skill-card-title mb-0">English</h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Contact block at bottom of home (same info as Contact page) */}
      <div id="contact" className="section-header mt-5">
        <h2 className="section-title">Get in Touch</h2>
        <div className="section-divider"></div>
      </div>
      <Row className="mb-5 justify-content-center">
        <Col md={8}>
          <Card className="contact-info-card">
            <div className="contact-info-header">
              <h4 className="contact-info-title">Contact Information</h4>
            </div>
            <Card.Body className="p-4">
              <div className="contact-info-section text-center">
                <div className="mb-4">
                  <h5 className="mb-3" style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.8rem' }}>Naji Barakani</h5>
                  <p className="contact-info-text mb-3" style={{ fontSize: '1.15rem', color: '#d1d5db' }}>
                    Software Development Student · Full Stack Developer (internship)
                  </p>
                  <p className="contact-info-text mb-0" style={{ color: '#a0a0a0' }}>Utrecht, Netherlands</p>
                </div>
                <div className="mb-4">
                  <h6 className="contact-section-title mb-3">Email</h6>
                  <p className="contact-info-text mb-0">
                    <a href="mailto:naji200217@gmail.com" className="contact-info-link" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
                      naji200217@gmail.com
                    </a>
                  </p>
                </div>
                <div className="mb-4">
                  <h6 className="contact-section-title mb-3">Phone</h6>
                  <p className="contact-info-text mb-0">
                    <a href="tel:+31623100944" className="contact-info-link" style={{ fontSize: '1.2rem', fontWeight: 600 }}>
                      06 23100944
                    </a>
                  </p>
                </div>
                <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <p className="contact-info-text mb-0" style={{ color: '#a0a0a0' }}>
                    I respond within 24-48 hours.
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
