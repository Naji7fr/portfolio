import React from 'react';
// ----- COMPONENT LIBRARY (React Bootstrap) -----
// Layout: Container, Row, Col | UI: Card
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../pages.css';

/**
 * Contact – Dedicated contact page: intro text + contact card (email, response time).
 */
function Contact() {
  return (
    // ----- COMPONENT LIBRARY: Container, Row, Col, Card (React Bootstrap) -----
    <Container className="mt-5 px-3 px-md-4" style={{ position: 'relative', zIndex: 1 }} fluid="lg">
      {/* Intro before contact card */}
      <Row className="mb-5 contact-hero">
        <Col>
          <h1 className="contact-title">Get in touch</h1>
          <p className="contact-subtitle">
            Looking for a Full Stack Developer internship? I would be happy to hear from you.
          </p>
        </Col>
      </Row>

      {/* Centered contact card: name, role, email (mailto), response time */}
      <Row className="justify-content-center">
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

export default Contact;
