import React from 'react';
// ----- COMPONENT LIBRARY (React Bootstrap) -----
// Layout: Row, Col | UI: Card
import { Row, Col, Card } from 'react-bootstrap';
import '../pages.css';
import ProjectImage from './ProjectImage.jsx';
import ProjectGallery from './ProjectGallery.jsx';
import ProjectVideo from './ProjectVideo.jsx';

/**
 * FeaturedProjects – Section with project cards (image, title, description, tech badges).
 * Add screenshots to public/projects/ as {slug}.jpg (or .png / .webp).
 */
function FeaturedProjects() {
  const projects = [
    {
      slug: 'coin-collector',
      title: 'Coin Collector Game',
      description:
        '3D coin collection game: explore the desert, collect coins in time, and unlock doors to progress.',
      video: '/projects/coin-collector.mp4',
      badges: [
        { label: 'JavaScript', className: 'tech-badge tech-badge-primary' },
        { label: '3D / WebGL', className: 'tech-badge tech-badge-warning' },
        { label: 'Game Development', className: 'tech-badge' }
      ]
    },
    {
      slug: 'pokemon',
      title: 'Pokemon Team Manager',
      description:
        'Pokemon collection app with browse, search, detail views, favorites, and team management using the PokeAPI.',
      gallery: [
        '/projects/pokemon-1.png',
        '/projects/pokemon-2.png',
        '/projects/pokemon-3.png',
        '/projects/pokemon-4.png'
      ],
      badges: [
        { label: 'React', className: 'tech-badge tech-badge-primary' },
        { label: 'JavaScript', className: 'tech-badge tech-badge-primary' },
        { label: 'REST API', className: 'tech-badge' }
      ]
    },
    {
      slug: 'todo-app',
      title: 'Todo App',
      description:
        'Task manager with overview, filters, create/edit tasks, profile settings, and status tracking.',
      gallery: [
        '/projects/todo-1.png',
        '/projects/todo-2.png',
        '/projects/todo-3.png'
      ],
      galleryScrollIndexes: [2],
      badges: [
        { label: 'JavaScript', className: 'tech-badge tech-badge-primary' },
        { label: 'HTML/CSS', className: 'tech-badge' },
        { label: 'Front-end', className: 'tech-badge' }
      ]
    },
    {
      slug: 'bng',
      title: 'BNG – Travel Booking Platform',
      description:
        'Travel booking platform like Booking.com: hotels, apartments, login, admin dashboard, employees, accounts, and messaging.',
      gallery: [
        '/projects/bng-1.png',
        '/projects/bng-2.png',
        '/projects/bng-3.png',
        '/projects/bng-4.png',
        '/projects/bng-5.png'
      ],
      galleryFitAll: true,
      badges: [
        { label: 'PHP', className: 'tech-badge tech-badge-laravel' },
        { label: 'MySQL', className: 'tech-badge tech-badge-database' },
        { label: 'Responsive', className: 'tech-badge' }
      ]
    },
    {
      slug: 'magazijn',
      title: 'Voorraadbeheer – Magazijn & Leveranciers',
      description:
        'Inventory management system with customer overview, product stock, and warehouse workflows for suppliers.',
      gallery: [
        '/projects/magazijn-1.png',
        '/projects/magazijn-2.png',
        '/projects/magazijn-3.png',
        '/projects/magazijn-4.png'
      ],
      galleryFitAll: true,
      badges: [
        { label: 'PHP', className: 'tech-badge tech-badge-laravel' },
        { label: 'MySQL', className: 'tech-badge tech-badge-database' },
        { label: 'CRUD', className: 'tech-badge' }
      ]
    }
  ];

  return (
    <>
      <div id="projects" className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-divider"></div>
      </div>

      {/* ----- COMPONENT LIBRARY: Row, Col, Card (React Bootstrap) ----- */}
      <Row>
        {projects.map((project) => (
          <Col md={6} className="mb-4" key={project.slug}>
            <Card className="project-card shadow-sm h-100">
              {project.video ? (
                <ProjectVideo src={project.video} title={project.title} />
              ) : project.gallery ? (
                <ProjectGallery
                  images={project.gallery}
                  alt={project.title}
                  containIndexes={project.galleryContainIndexes}
                  scrollIndexes={project.galleryScrollIndexes}
                  fitAll={project.galleryFitAll}
                />
              ) : (
                <ProjectImage
                  slug={project.slug}
                  fallback={project.image}
                  alt={project.title}
                  title={project.title}
                />
              )}
              <Card.Body>
                <h5 className="project-title">{project.title}</h5>
                <p className="project-description">{project.description}</p>
                <div>
                  {project.badges.map((badge, i) => (
                    <span key={i} className={badge.className}>{badge.label}</span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default FeaturedProjects;
