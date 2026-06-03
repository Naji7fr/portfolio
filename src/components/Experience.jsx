import React from 'react';
// ----- COMPONENT LIBRARY (React Bootstrap) -----
// Layout: Row, Col | UI: Card
import { Row, Col, Card } from 'react-bootstrap';
import '../pages.css';

/**
 * Experience – Section with a single work experience card (role, company, period, description).
 */
function Experience() {
  return (
    <>
      <div id="experience" className="section-header mt-5">
        <h2 className="section-title">Experience</h2>
        <div className="section-divider"></div>
      </div>

      {/* ----- COMPONENT LIBRARY: Row, Col, Card (React Bootstrap) ----- */}
      <Row className="mb-5">
        <Col>
          <Card className="work-card shadow-sm">
            <Card.Body>
              <h5 className="work-title">Shift Manager</h5>
              <div className="work-company">
                <span className="work-company-badge">SSP (Burger King)</span>
                <span>2024 - Present</span>
              </div>
              <ul className="work-description mb-0 ps-3">
                <li>Leading and coordinating team members</li>
                <li>Responsible for daily operations</li>
                <li>Customer-focused work and problem solving</li>
                <li>Working under pressure and planning tasks</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Experience;
