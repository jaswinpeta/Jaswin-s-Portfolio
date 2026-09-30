import React, { useState } from 'react';
import { FileText, Download, Eye, CheckCircle2, Sparkles, X } from 'lucide-react';

export default function ResumeSection({ showToast }) {
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const handleDownload = () => {
    showToast('Downloading Jaswin_Peta_Resume.pdf...');
  };

  return (
    <section id="resume" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FileText size={14} />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="section-title">
            Download My <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle">
            Get a complete single-page overview of my qualifications, education, skills, and project history.
          </p>
        </div>

        <div className="glass-card resume-section-card">
          <div className="resume-icon-wrapper">
            <FileText size={36} />
          </div>

          <h3 className="resume-title">Jaswin Peta — Software Developer Resume</h3>

          <p className="resume-desc">
            Verified resume detailing B.Tech CSE education, Web Development projects (MERN Stack, PHP/MySQL), technical skills, and industrial CNC operator experience.
          </p>

          <div className="resume-actions">
            <a
              href="/Jaswin_Peta_Resume.pdf"
              download="Jaswin_Peta_Resume.pdf"
              onClick={handleDownload}
              className="btn btn-primary"
            >
              <Download size={18} />
              <span>Download PDF Resume</span>
            </a>

            <button
              onClick={() => setShowPreviewModal(true)}
              className="btn btn-secondary"
            >
              <Eye size={18} />
              <span>Preview PDF Online</span>
            </button>
          </div>
        </div>

        {/* PDF Preview Modal */}
        {showPreviewModal && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(8px)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyConstraint: 'center',
              padding: '1.5rem'
            }}
          >
            <div 
              style={{
                width: '100%',
                maxWidth: '900px',
                height: '85vh',
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-highlight)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              {/* Modal Header */}
              <div 
                style={{
                  display: 'flex',
                  justifySpaceBetween: 'space-between',
                  alignItems: 'center',
                  padding: '1rem 1.5rem',
                  borderBottom: '1px solid var(--border-color)',
                  background: 'var(--bg-main)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <FileText size={20} style={{ color: 'var(--primary)' }} />
                  <h4 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-main)' }}>
                    Jaswin_Peta_Resume.pdf
                  </h4>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginLeft: 'auto' }}>
                  <a
                    href="/Jaswin_Peta_Resume.pdf"
                    download="Jaswin_Peta_Resume.pdf"
                    onClick={handleDownload}
                    className="btn btn-primary btn-sm"
                  >
                    <Download size={14} />
                    <span>Download</span>
                  </a>
                  <button
                    onClick={() => setShowPreviewModal(false)}
                    style={{
                      padding: '0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-muted)',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    aria-label="Close modal"
                  >
                    <X size={22} />
                  </button>
                </div>
              </div>

              {/* Modal Body / PDF Object */}
              <div style={{ flexGrow: 1, width: '100%', height: '100%', background: '#525659' }}>
                <object
                  data="/Jaswin_Peta_Resume.pdf#toolbar=0"
                  type="application/pdf"
                  width="100%"
                  height="100%"
                >
                  <div style={{ padding: '2rem', textAlign: 'center', color: '#fff' }}>
                    <p>Your browser does not support embedded PDF viewing.</p>
                    <a
                      href="/Jaswin_Peta_Resume.pdf"
                      download
                      className="btn btn-primary"
                      style={{ marginTop: '1rem' }}
                    >
                      <Download size={16} /> Click here to Download PDF
                    </a>
                  </div>
                </object>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
