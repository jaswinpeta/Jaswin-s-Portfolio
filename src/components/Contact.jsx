import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  MessageSquare,
  Sparkles 
} from 'lucide-react';

export default function Contact({ showToast }) {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    showToast(`Copied ${fieldName} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-tertiary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let's Connect & <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="section-subtitle">
            Open for internship and entry-level software engineering roles. Feel free to reach out directly via email, phone, or LinkedIn!
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details List */}
          <div className="contact-info-list">
            {/* Email Card */}
            <div className="glass-card contact-card">
              <div className="contact-card-left">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-detail">
                  <span>Email</span>
                  <a href="mailto:jaswinpeta@gmail.com">jaswinpeta@gmail.com</a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard('jaswinpeta@gmail.com', 'Email')}
                className="copy-btn"
                title="Copy Email"
              >
                {copiedField === 'Email' ? <Check size={18} style={{ color: '#10B981' }} /> : <Copy size={18} />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card contact-card">
              <div className="contact-card-left">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-detail">
                  <span>Phone</span>
                  <a href="tel:9347179001">+91 9347179001</a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard('9347179001', 'Phone')}
                className="copy-btn"
                title="Copy Phone"
              >
                {copiedField === 'Phone' ? <Check size={18} style={{ color: '#10B981' }} /> : <Copy size={18} />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card contact-card">
              <div className="contact-card-left">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-detail">
                  <span>Location</span>
                  <strong>Nellore, Andhra Pradesh, India</strong>
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-card contact-card">
              <div className="contact-card-left">
                <div className="contact-icon">
                  <Linkedin size={20} />
                </div>
                <div className="contact-detail">
                  <span>LinkedIn</span>
                  <a href="https://in.linkedin.com/in/jaswinpeta" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/jaswinpeta
                  </a>
                </div>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="glass-card contact-card">
              <div className="contact-card-left">
                <div className="contact-icon">
                  <Github size={20} />
                </div>
                <div className="contact-detail">
                  <span>GitHub</span>
                  <a href="https://github.com/jasinwpeta" target="_blank" rel="noopener noreferrer">
                    github.com/jasinwpeta
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card contact-form-card">
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', color: 'var(--text-main)' }}>
              Send Me a Message
            </h3>

            {isSubmitted && (
              <div className="form-success-alert">
                <Check size={20} />
                <span>Message sent successfully! I will respond to your email promptly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="e.g. Rahul Sharma"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Your Email Address *</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="e.g. rahuls@example.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="e.g. Software Developer Opportunity"
                  className="form-input"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  required
                  placeholder="Hello Jaswin, I reviewed your portfolio and would like to discuss an opportunity..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <Send size={18} />
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
