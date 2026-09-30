import React from 'react';
import { Briefcase, Building2, MapPin, Calendar, CheckCircle2, Cpu } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "TVS Sundram Fastners Limited",
      role: "CNC MACHINE OPERATOR",
      location: "Sri City, Andhra Pradesh",
      period: "11/2024 – 05/2025",
      responsibilities: [
        "Operated and maintained CNC machinery to produce precision components, ensuring adherence to strict quality standards and production schedules.",
        "Programmed and set up CNC machines, optimizing processes to maximize material yield and minimize waste."
      ]
    }
  ];

  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-tertiary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Industrial Exposure</span>
          </div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on technical experience in high-precision manufacturing operations and engineering processes.
          </p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {experiences.map((exp, idx) => (
            <div key={idx} className="glass-card experience-card">
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-company">
                    <Building2 size={18} />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="exp-meta">
                  <span className="exp-date">
                    <Calendar size={14} style={{ display: 'inline', marginRight: '4px' }} />
                    {exp.period}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                <MapPin size={15} style={{ color: 'var(--primary)' }} />
                <span>{exp.location}</span>
              </div>

              <ul className="exp-bullets">
                {exp.responsibilities.map((bullet, bIdx) => (
                  <li key={bIdx}>
                    <CheckCircle2 size={18} className="exp-bullet-icon" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
