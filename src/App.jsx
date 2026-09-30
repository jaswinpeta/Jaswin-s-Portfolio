import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AmbientBackground from './components/AmbientBackground';
import { playClickSound, playHoverSound, playSuccessSound } from './utils/sound';
import { ChevronUp, CheckCircle } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '' });

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  // Theme Toggle Effect
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Scroll Tracking for Active Nav & Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      setShowBackToTop(window.scrollY > 400);

      const sectionElements = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el.offsetTop <= scrollPosition) {
          setActiveSection(el.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showToast = (message) => {
    playSuccessSound();
    setToast({ visible: true, message });
    setTimeout(() => {
      setToast({ visible: false, message: '' });
    }, 3200);
  };

  return (
    <div className="app-container">
      {/* Dynamic Ambient Background Canvas */}
      <AmbientBackground />

      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      {/* Sticky Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        navItems={navItems}
      />

      {/* Page Sections */}
      <main>
        <Hero scrollToSection={scrollToSection} showToast={showToast} />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <ResumeSection showToast={showToast} />
        <Contact showToast={showToast} />
      </main>

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} navItems={navItems} />

      {/* Back to Top Floating Button */}
      <button
        onClick={() => { playClickSound(); scrollToSection('hero'); }}
        onMouseEnter={playHoverSound}
        className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`}
        aria-label="Back to top"
        title="Back to Top"
      >
        <ChevronUp size={22} />
      </button>

      {/* Global Toast Notification */}
      <div className={`toast-notification ${toast.visible ? 'active' : ''}`}>
        <CheckCircle size={18} className="toast-icon" />
        <span>{toast.message}</span>
      </div>
    </div>
  );
}
