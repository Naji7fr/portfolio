import React from 'react';
// ----- COMPONENT LIBRARY (React Bootstrap) -----
// Layout: Row, Col | UI: Card
import { Row, Col, Card } from 'react-bootstrap';
import '../pages.css';

/**
 * Skills – Section with three columns aligned with CV skills.
 */
function Skills() {
  return (
    <>
      <div id="skills" className="section-header mt-5">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="section-divider"></div>
      </div>

      {/* ----- COMPONENT LIBRARY: Row, Col, Card (React Bootstrap) ----- */}
      <Row className="mb-5">
        <Col md={4} className="mb-3">
          <Card className="skill-card shadow-sm text-center">
            <Card.Body>
              <h5 className="skill-card-title mb-3">Front-end</h5>
              <div>
                <span className="tech-badge tech-badge-primary">JavaScript</span>
                <span className="tech-badge">HTML / CSS</span>
                <span className="tech-badge">WordPress</span>
                <span className="tech-badge">Responsive Design</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className="skill-card shadow-sm text-center">
            <Card.Body>
              <h5 className="skill-card-title mb-3">Back-end</h5>
              <div>
                <span className="tech-badge tech-badge-laravel">PHP</span>
                <span className="tech-badge tech-badge-database">MySQL</span>
                <span className="tech-badge tech-badge-database">Databases</span>
                <span className="tech-badge">Back-end Development</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className="skill-card shadow-sm text-center">
            <Card.Body>
              <h5 className="skill-card-title mb-3">Tools & More</h5>
              <div>
                <span className="tech-badge tech-badge-success">Git</span>
                <span className="tech-badge tech-badge-success">GitHub</span>
                <span className="tech-badge">Full Stack</span>
                <span className="tech-badge">Teamwork</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Skills;
