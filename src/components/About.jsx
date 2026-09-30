import React from 'react';
import { User, GraduationCap, Code2, Target, Award, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-tertiary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Passionate CSE Undergrad & <span className="gradient-text">Web Developer</span>
          </h2>
          <p className="section-subtitle">
            Focused on building efficient, user-centric software applications with solid engineering fundamentals.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Biography Card */}
          <div className="glass-card about-card">
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
              Professional Background
            </h3>

            <p className="about-text">
              I am a <strong>Computer Science Engineering student currently pursuing my B.Tech in CSE (3rd Year)</strong> at NBKR Institute of Science and Technology, Tirupathi. Prior to my B.Tech degree, I completed my <strong>Diploma in Computer Science & Engineering</strong> at Geethanjali Institute of Science and Technology, Nellore.
            </p>

            <p className="about-text">
              My core technical passion lies in <strong>Full Stack Web Development</strong>. I possess hands-on skills in HTML, CSS, JavaScript, React.js, Node.js, Express.js, PHP, MySQL, Java, and C. I take pride in building clean, responsive, and intuitive web platforms that solve real-world problems.
            </p>

            <p className="about-text">
              Alongside my web development projects, I gained practical industrial exposure working as a <strong>CNC Machine Operator at TVS Sundram Fastners Limited</strong>, where I developed strong technical precision, process optimization skills, and adherence to quality standards.
            </p>

            <div className="about-highlights">
              <div className="highlight-box">
                <Code2 className="highlight-icon" size={24} />
                <h4>Full Stack Engineering</h4>
                <p>Building responsive frontends and reliable database-driven backends.</p>
              </div>

              <div className="highlight-box">
                <Target className="highlight-icon" size={24} />
                <h4>Problem Solving</h4>
                <p>Applying algorithmic logic and structured code patterns to solve technical tasks.</p>
              </div>

              <div className="highlight-box">
                <GraduationCap className="highlight-icon" size={24} />
                <h4>Continuous Learning</h4>
                <p>Constantly enhancing technical skills and adopting modern web tools.</p>
              </div>

              <div className="highlight-box">
                <Cpu className="highlight-icon" size={24} />
                <h4>Engineering Precision</h4>
                <p>Applying rigorous process discipline and attention to detail from industry exposure.</p>
              </div>
            </div>
          </div>

          {/* Quick Facts Sidebar */}
          <div className="about-quick-facts">
            <div className="fact-item">
              <div className="fact-icon">
                <GraduationCap size={20} />
              </div>
              <div className="fact-info">
                <span>Current Education</span>
                <strong>B.Tech CSE (3rd Year)</strong>
              </div>
            </div>

            <div className="fact-item">
              <div className="fact-icon">
                <Code2 size={20} />
              </div>
              <div className="fact-info">
                <span>Primary Interest</span>
                <strong>Full Stack Web Development</strong>
              </div>
            </div>

            <div className="fact-item">
              <div className="fact-icon">
                <Award size={20} />
              </div>
              <div className="fact-info">
                <span>Key Projects</span>
                <strong>AI Learning Platform & Tourism Web App</strong>
              </div>
            </div>

            <div className="fact-item">
              <div className="fact-icon">
                <User size={20} />
              </div>
              <div className="fact-info">
                <span>Career Objective</span>
                <strong>Seeking Entry-Level & Internship Roles</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
