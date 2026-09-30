import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  Layers, 
  CheckCircle2, 
  Bot, 
  Compass,
  ArrowRight,
  Maximize2
} from 'lucide-react';
import ProjectModal from './ProjectModal';
import { playClickSound, playHoverSound } from '../utils/sound';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 'ai-learning-platform',
      title: 'AI Learning Platform',
      category: 'MERN Stack & Full Stack',
      icon: Bot,
      shortDesc: 'A full-stack AI-powered educational platform featuring personalized learning, quizzes, an AI chatbot, and interactive progress tracking.',
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'MERN Stack', 'AI Integration'],
      highlights: [
        'Developed a full-stack AI-powered learning platform using MongoDB, Express.js, React.js, and Node.js with secure user authentication.',
        'Implemented AI-assisted learning features, including personalized learning content, quizzes, an AI chatbot, courses, and progress tracking.',
        'Designed a user dashboard with dedicated Roadmap and Schedule/Timetable features to help users plan and organize their learning journey.',
        'Built an admin panel with CRUD functionality for managing courses, learning content, users, and platform data.'
      ],
      githubUrl: 'https://github.com/jasinwpeta'
    },
    {
      id: 'tourism-management',
      title: 'Tourism Management Website',
      category: 'PHP & MySQL Web App',
      icon: Compass,
      shortDesc: 'A comprehensive web application enabling user registration, destination search, tour booking, and administrative CRUD operations.',
      techStack: ['PHP', 'JavaScript', 'HTML5', 'CSS3', 'MySQL'],
      highlights: [
        'Developed a tourism management web application that allows users to register, log in, explore tourist destinations, search for places, and book tours.',
        'Implemented an admin panel to manage tourist destinations, users, and bookings with complete CRUD functionality.',
        'Designed and integrated a MySQL database for storing user, destination, and booking information.',
        'Built interactive and user-friendly web pages using HTML and JavaScript with PHP for server-side functionality.'
      ],
      githubUrl: 'https://github.com/jasinwpeta'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag" onMouseEnter={playHoverSound}>
            <FolderGit2 size={14} />
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world web applications built during my academic journey, showcasing frontend craftsmanship and backend systems.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => {
            const IconComp = project.icon;
            return (
              <div 
                key={project.id} 
                className="glass-card project-card tilt-card"
                onMouseEnter={playHoverSound}
              >
                <div className="project-body">
                  <div className="project-badge-row">
                    <span className="project-category-badge">
                      {project.category}
                    </span>
                    <IconComp size={24} style={{ color: 'var(--primary)' }} />
                  </div>

                  <h3 className="project-title">{project.title}</h3>

                  <p className="project-description">
                    {project.shortDesc}
                  </p>

                  <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-light)', marginBottom: '0.75rem' }}>
                    Key Contributions & Features
                  </h4>

                  <ul className="project-features">
                    {project.highlights.map((bullet, bIdx) => (
                      <li key={bIdx}>
                        <CheckCircle2 size={16} className="feature-bullet" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="project-tech-stack">
                    {project.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-pill">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <button
                      onClick={() => {
                        playClickSound();
                        setSelectedProject(project);
                      }}
                      onMouseEnter={playHoverSound}
                      className="btn btn-primary btn-sm"
                    >
                      <Maximize2 size={16} />
                      <span>View Details</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      title="View GitHub Repository / Profile"
                      onClick={playClickSound}
                      onMouseEnter={playHoverSound}
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}
