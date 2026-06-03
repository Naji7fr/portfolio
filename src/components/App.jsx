import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
// ----- COMPONENT LIBRARY (React Bootstrap) -----
// Layout: Container | Nav: Navbar, Nav, Navbar.Brand, Navbar.Toggle, Navbar.Collapse, Nav.Link
import { Container, Nav, Navbar } from 'react-bootstrap';
// LinkContainer: React Router + Bootstrap Nav (react-router-bootstrap)
import { LinkContainer } from 'react-router-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.scss';

/**
 * App – Root layout: navbar (with burger on mobile), <Outlet /> for route content, footer.
 * Navbar uses controlled expand state so the burger menu closes when a link is clicked.
 */
function App() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  /** Smooth-scroll to section on home, or navigate to home with hash. Closes burger menu. */
  const scrollToSection = (e, id) => {
    e.preventDefault();
    setExpanded(false);
    if (location.pathname === '/') {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const closeMenu = () => setExpanded(false);

  return (
    <>
      {/* ----- COMPONENT LIBRARY: Navbar, Container, Nav (React Bootstrap) ----- */}
      <Navbar
        bg="light"
        expand="lg"
        expanded={expanded}
        onToggle={() => setExpanded((prev) => !prev)}
        className="shadow-sm mb-4 navbar-custom"
      >
        <Container fluid className="px-3 px-lg-4">
          <LinkContainer to="/" onClick={closeMenu}>
            <Navbar.Brand>
              <span className="fw-bold">Naji Barakani</span>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle menu" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/" onClick={closeMenu}>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <Nav.Link href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</Nav.Link>
              <Nav.Link href="#education" onClick={(e) => scrollToSection(e, 'education')}>Education</Nav.Link>
              <Nav.Link href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</Nav.Link>
              <LinkContainer to="/contact" onClick={closeMenu}>
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />

      {/* ----- COMPONENT LIBRARY: Container (React Bootstrap) ----- */}
      <footer className="mt-5 py-4 bg-light text-center">
        <Container>
          <p className="mb-0 text-muted">© 2026 Naji Barakani | All rights reserved.</p>
        </Container>
      </footer>

      <ToastContainer />
    </>
  );
}

export default App;
