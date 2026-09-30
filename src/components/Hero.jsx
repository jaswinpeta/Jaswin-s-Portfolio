import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Send, 
  FolderGit2, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles,
  CheckCircle2,
  Code,
  Clock
} from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/sound';

export default function Hero({ scrollToSection, showToast }) {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      setTimeStr(new Intl.DateTimeFormat([], options).format(now) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    playClickSound();
    navigator.clipboard.writeText('jaswinpeta@gmail.com');
    showToast('Email address copied to clipboard!');
  };

  return (
    <section id="hero" className="section hero-section" style={{ paddingTop: '5.5rem' }}>
      <div className="container">
        <div className="hero-grid">
          {/* Hero Left Content */}
          <div className="hero-content">
            <div className="hero-badge-row">
              <div className="hero-badge" onMouseEnter={playHoverSound}>
                <span className="live-pulse"></span>
                <Sparkles size={15} />
                <span>Available for Internship & Roles</span>
              </div>
              <div className="hero-time-badge" title="Local Time in Nellore, India">
                <Clock size={14} className="gradient-text-icon" />
                <span>{timeStr || 'Nellore, IN'}</span>
              </div>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Jaswin Peta</span>
            </h1>

            <p className="hero-headline">
              Computer Science Engineering Student & Full Stack Web Developer
            </p>

            <p className="hero-intro">
              Passionate about creating modern, interactive web applications, solving complex algorithmic logic, and developing full-stack web solutions with React.js, the MERN Stack, PHP, and MySQL.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta">
              <button 
                onClick={() => { playClickSound(); scrollToSection('projects'); }} 
                onMouseEnter={playHoverSound}
                className="btn btn-primary"
              >
                <FolderGit2 size={18} />
                <span>View Projects</span>
              </button>

              <button 
                onClick={() => { playClickSound(); scrollToSection('resume'); }} 
                onMouseEnter={playHoverSound}
                className="btn btn-secondary"
              >
                <FileText size={18} />
                <span>View Resume</span>
              </button>

              <button 
                onClick={() => { playClickSound(); scrollToSection('contact'); }} 
                onMouseEnter={playHoverSound}
                className="btn btn-outline"
              >
                <Send size={18} />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Icons & Quick Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="hero-socials">
                <a 
                  href="https://in.linkedin.com/in/jaswinpeta" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-btn"
                  title="LinkedIn Profile"
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                >
                  <Linkedin size={20} />
                </a>

                <a 
                  href="https://github.com/jasinwpeta" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-btn"
                  title="GitHub Profile"
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                >
                  <Github size={20} />
                </a>

                <button 
                  onClick={copyEmail}
                  onMouseEnter={playHoverSound}
                  className="social-icon-btn"
                  title="Copy Email Address"
                >
                  <Mail size={20} />
                </button>

                <a 
                  href="tel:9347179001" 
                  className="social-icon-btn"
                  title="Call Phone"
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                >
                  <Phone size={20} />
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', color: 'var(--text-muted)', fontSize: '0.875rem', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={16} style={{ color: 'var(--primary)' }} /> Nellore, Andhra Pradesh
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#10B981' }} /> B.Tech CSE (3rd Year)
                </span>
              </div>
            </div>
          </div>

          {/* Hero Right Image Frame */}
          <div className="hero-image-wrapper">
            <div className="hero-image-frame tilt-card">
              <img 
                src="/img.jpeg" 
                alt="Jaswin Peta" 
                className="hero-photo"
              />
            </div>

            <div className="hero-floating-card">
              <div className="hero-floating-icon">
                <Code size={22} />
              </div>
              <div className="hero-floating-text">
                <h4>Full Stack Focus</h4>
                <p>React.js | MERN | PHP & MySQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
