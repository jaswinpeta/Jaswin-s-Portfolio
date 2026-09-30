import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "NBKR Institute Of Science And Technology",
      location: "Tirupathi, Andhra Pradesh",
      period: "Present",
      status: "Currently in 3rd Year",
      description: "Focusing on advanced computer science principles, data structures, full-stack software development, database management systems, and web technologies."
    },
    {
      degree: "Diploma",
      field: "Computer Science & Engineering",
      institution: "Geethanjali Institute Of Science And Technology",
      location: "Nellore, Andhra Pradesh",
      period: "2022 – 2025",
      status: "Completed",
      description: "Built foundational knowledge in core programming, computer systems, web fundamentals, HTML/CSS/JavaScript, database concepts, and practical lab work."
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Journey</span>
          </div>
          <h2 className="section-title">
            Educational <span className="gradient-text">Background</span>
          </h2>
          <p className="section-subtitle">
            Formal technical education in Computer Science & Engineering.
          </p>
        </div>

        <div className="timeline">
          {educationData.map((edu, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="glass-card timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="degree-title">
                      {edu.degree} in {edu.field}
                    </h3>
                    <div className="institution-name">
                      <BookOpen size={16} />
                      <span>{edu.institution}</span>
                    </div>
                  </div>
                  <span className="timeline-date">{edu.period}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <MapPin size={15} style={{ color: 'var(--primary)' }} /> {edu.location}
                  </span>
                  <span style={{ fontWeight: 600, color: 'var(--secondary)' }}>
                    • {edu.status}
                  </span>
                </div>

                <p className="timeline-details">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
