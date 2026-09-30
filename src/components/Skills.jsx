import React, { useState } from 'react';
import { 
  Code, 
  Globe, 
  Database, 
  Wrench, 
  Users, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: Code,
      skills: ['C', 'Java', 'Python']
    },
    {
      id: 'web',
      title: 'Web Development',
      icon: Globe,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'PHP']
    },
    {
      id: 'backend',
      title: 'Backend & Databases',
      icon: Database,
      skills: ['Node.js', 'Express.js', 'PHP', 'MySQL', 'MongoDB']
    },
    {
      id: 'tools',
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['Git / GitHub', 'VS Code', 'XAMPP']
    },
    {
      id: 'soft',
      title: 'Professional Attributes',
      icon: Users,
      skills: ['Team Collaboration', 'Problem Solving']
    }
  ];

  const filterButtons = [
    { id: 'all', label: 'All Skills' },
    { id: 'programming', label: 'Programming' },
    { id: 'web', label: 'Web Dev' },
    { id: 'backend', label: 'Backend & DB' },
    { id: 'tools', label: 'Tools' },
    { id: 'soft', label: 'Attributes' }
  ];

  const filteredCategories = activeFilter === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeFilter);

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-tertiary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Categorized technical capabilities and tools derived directly from hands-on academic and project experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="skills-controls">
          {filterButtons.map(btn => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id)}
              className={`filter-btn ${activeFilter === btn.id ? 'active' : ''}`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.id} className="glass-card skill-category-card">
                <h3 className="category-title">
                  <IconComponent className="category-icon" size={22} />
                  <span>{category.title}</span>
                </h3>

                <div className="skill-tags">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-tag">
                      <CheckCircle2 size={15} style={{ color: 'var(--primary)' }} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
