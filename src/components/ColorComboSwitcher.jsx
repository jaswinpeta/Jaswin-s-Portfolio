import React, { useState } from 'react';
import { Palette, X, Sparkles, Check } from 'lucide-react';
import { COLOR_COMBOS, applyColorCombo } from '../utils/themePresets';
import { playClickSound, playHoverSound } from '../utils/sound';

export default function ColorComboSwitcher({ activeCombo, setActiveCombo }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (id) => {
    playClickSound();
    setActiveCombo(id);
    applyColorCombo(id);
  };

  return (
    <div className="color-combo-wrapper">
      {/* Floating Launcher Trigger */}
      <button
        onClick={() => {
          playClickSound();
          setIsOpen(!isOpen);
        }}
        onMouseEnter={playHoverSound}
        className="color-combo-trigger"
        aria-label="Customize Color Scheme"
        title="Change Color Combo Theme"
      >
        <Palette size={18} className="spin-on-hover" />
        <span className="combo-trigger-text">Color Combos</span>
        <span className="active-dot" style={{ backgroundColor: COLOR_COMBOS.find(c => c.id === activeCombo)?.primary }}></span>
      </button>

      {/* Modal / Popover Drawer */}
      {isOpen && (
        <div className="color-combo-dropdown">
          <div className="combo-header">
            <div className="combo-header-title">
              <Sparkles size={16} className="gradient-text-icon" />
              <span>Igloo Color Combos</span>
            </div>
            <button
              onClick={() => {
                playClickSound();
                setIsOpen(false);
              }}
              className="combo-close-btn"
            >
              <X size={16} />
            </button>
          </div>

          <p className="combo-subtitle">
            Pick a vibrant color theme combo to customize the visual aesthetic live:
          </p>

          <div className="combo-grid">
            {COLOR_COMBOS.map((combo) => {
              const isSelected = activeCombo === combo.id;
              return (
                <button
                  key={combo.id}
                  onClick={() => handleSelect(combo.id)}
                  onMouseEnter={playHoverSound}
                  className={`combo-option-card ${isSelected ? 'active' : ''}`}
                >
                  <div className="combo-swatches">
                    {combo.previewColors.map((color, idx) => (
                      <span
                        key={idx}
                        className="swatch"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div className="combo-info">
                    <span className="combo-name">{combo.name}</span>
                    <span className="combo-badge">{combo.badge}</span>
                  </div>
                  {isSelected && <Check size={16} className="combo-check-icon" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
