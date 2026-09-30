import React, { useState } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Play } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/sound';

export default function InteractiveTerminal({ scrollToSection, showToast }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'sys', text: 'Jaswin Peta OS v1.0.0 (Igloo.io Edition)' },
    { type: 'sys', text: 'Type "help", "skills", "projects", or "contact"' }
  ]);

  const handleCommand = (cmdStr) => {
    const rawCmd = (cmdStr || inputVal).trim().toLowerCase();
    if (!rawCmd) return;

    playClickSound();

    const newLogs = [...history, { type: 'user', text: `$ ${rawCmd}` }];

    switch (rawCmd) {
      case 'help':
        newLogs.push({
          type: 'response',
          text: 'Available Commands: help, skills, projects, resume, contact, clear, status'
        });
        break;
      case 'skills':
        newLogs.push({
          type: 'response',
          text: 'Frontend: React.js, JavaScript (ES6+), HTML5, CSS3 | Backend: Node.js, Express.js, PHP, MySQL, MongoDB'
        });
        break;
      case 'projects':
        newLogs.push({
          type: 'response',
          text: '1. AI Learning Platform (MERN) | 2. Tourism Management System (PHP/MySQL)'
        });
        scrollToSection('projects');
        break;
      case 'contact':
        newLogs.push({
          type: 'response',
          text: 'Email: jaswinpeta@gmail.com | Phone: +91 9347179001 | Location: Nellore, AP'
        });
        scrollToSection('contact');
        break;
      case 'resume':
        newLogs.push({ type: 'response', text: 'Navigating to Resume Section...' });
        scrollToSection('resume');
        break;
      case 'status':
        newLogs.push({
          type: 'response',
          text: '⚡ Available for Internship & Entry-Level Roles (Nellore, AP)'
        });
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        newLogs.push({
          type: 'response',
          text: `Command not recognized: "${rawCmd}". Type "help" for a list of available commands.`
        });
        break;
    }

    setHistory(newLogs);
    setInputVal('');
  };

  return (
    <div className="interactive-terminal glass-card">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="terminal-title">
          <TerminalIcon size={14} className="terminal-icon" />
          <span>jaswin@studio:~$</span>
        </div>
        <div className="terminal-badge">LIVE</div>
      </div>

      <div className="terminal-body">
        {history.map((line, idx) => (
          <div key={idx} className={`terminal-line line-${line.type}`}>
            {line.text}
          </div>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCommand();
        }}
        className="terminal-input-row"
      >
        <span className="terminal-prompt">$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type 'help' or click buttons below..."
          className="terminal-input"
        />
        <button type="submit" className="terminal-submit-btn" aria-label="Run command">
          <CornerDownLeft size={16} />
        </button>
      </form>

      <div className="terminal-quick-actions">
        <button
          onClick={() => handleCommand('skills')}
          onMouseEnter={playHoverSound}
          className="terminal-chip"
        >
          $ skills
        </button>
        <button
          onClick={() => handleCommand('projects')}
          onMouseEnter={playHoverSound}
          className="terminal-chip"
        >
          $ projects
        </button>
        <button
          onClick={() => handleCommand('contact')}
          onMouseEnter={playHoverSound}
          className="terminal-chip"
        >
          $ contact
        </button>
        <button
          onClick={() => handleCommand('clear')}
          onMouseEnter={playHoverSound}
          className="terminal-chip chip-clear"
        >
          $ clear
        </button>
      </div>
    </div>
  );
}
