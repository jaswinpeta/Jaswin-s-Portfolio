import React from 'react';
import { Linkedin, Github, Mail, Phone, Heart } from 'lucide-react';

export default function Footer({ scrollToSection, navItems }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <h3>Jaswin Peta</h3>
            <p>Computer Science Engineering Student & Full Stack Web Developer</p>
          </div>

          <div className="footer-socials">
            <a
              href="https://in.linkedin.com/in/jaswinpeta"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://github.com/jasinwpeta"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href="mailto:jaswinpeta@gmail.com"
              className="social-icon-btn"
              title="Email"
            >
              <Mail size={18} />
            </a>

            <a
              href="tel:9347179001"
              className="social-icon-btn"
              title="Phone"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Jaswin Peta. Built for entry-level & internship developer opportunities.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            Designed & Developed with React.js
          </p>
        </div>
      </div>
    </footer>
  );
}
