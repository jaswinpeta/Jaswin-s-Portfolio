import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Sparkles, Terminal } from 'lucide-react';
import { playClickSound } from '../utils/sound';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const IconComp = project.icon;

  return (
    <div className="modal-backdrop" onClick={() => { playClickSound(); onClose(); }}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-row">
            <div className="project-modal-icon">
              <IconComp size={22} style={{ color: 'var(--primary)' }} />
            </div>
            <div>
              <span className="modal-category">{project.category}</span>
              <h3 className="modal-title">{project.title}</h3>
            </div>
          </div>
          <button
            onClick={() => { playClickSound(); onClose(); }}
            className="modal-close-btn"
            aria-label="Close Project Modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <p className="modal-description">{project.shortDesc}</p>

          <div className="modal-section-box">
            <div className="modal-section-title">
              <Sparkles size={16} className="gradient-text-icon" />
              <span>Architecture & Key Features</span>
            </div>
            <ul className="modal-feature-list">
              {project.highlights.map((item, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} className="feature-bullet" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-section-box">
            <div className="modal-section-title">
              <Cpu size={16} style={{ color: 'var(--primary)' }} />
              <span>Tech Stack & System Architecture</span>
            </div>
            <div className="project-tech-stack">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tech-pill active-tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            onClick={playClickSound}
          >
            <Github size={18} />
            <span>Explore Code on GitHub</span>
          </a>
          <button
            onClick={() => { playClickSound(); onClose(); }}
            className="btn btn-secondary"
          >
            <span>Close Window</span>
          </button>
        </div>
      </div>
    </div>
  );
}
