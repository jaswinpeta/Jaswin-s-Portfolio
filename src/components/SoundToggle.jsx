import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { setSoundEnabled, getSoundEnabled, playClickSound, playHoverSound } from '../utils/sound';

export default function SoundToggle() {
  const [enabled, setEnabled] = useState(() => getSoundEnabled());

  const toggle = () => {
    const nextState = !enabled;
    setEnabled(nextState);
    setSoundEnabled(nextState);
    if (nextState) {
      playClickSound();
    }
  };

  return (
    <button
      onClick={toggle}
      onMouseEnter={playHoverSound}
      className="sound-toggle-btn"
      aria-label="Toggle Sound Effects"
      title={enabled ? 'Sound Effects: ON (Click to mute)' : 'Sound Effects: OFF (Click to unmute)'}
    >
      {enabled ? <Volume2 size={18} className="sound-on-icon" /> : <VolumeX size={18} className="sound-off-icon" />}
    </button>
  );
}
