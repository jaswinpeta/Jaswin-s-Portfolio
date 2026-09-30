// Color Palette Combos Inspired by Igloo.io & Modern Creative Studios

export const COLOR_COMBOS = [
  {
    id: 'indigo',
    name: 'Obsidian Indigo',
    badge: 'Pitch Black',
    primary: '#6366f1',
    secondary: '#38bdf8',
    accent: '#2dd4bf',
    glow: 'rgba(99, 102, 241, 0.45)',
    bgMain: '#040406',
    bgCard: '#0c0d12',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #38bdf8 100%)',
    previewColors: ['#6366f1', '#38bdf8', '#040406']
  },
  {
    id: 'violet',
    name: 'Cyber Violet',
    badge: 'Obsidian Neon',
    primary: '#a855f7',
    secondary: '#ec4899',
    accent: '#f43f5e',
    glow: 'rgba(168, 85, 247, 0.45)',
    bgMain: '#05020a',
    bgCard: '#0f0817',
    gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f43f5e 100%)',
    previewColors: ['#a855f7', '#ec4899', '#05020a']
  },
  {
    id: 'emerald',
    name: 'Aurora Cyan',
    badge: 'Deep Matrix',
    primary: '#10b981',
    secondary: '#06b6d4',
    accent: '#34d399',
    glow: 'rgba(16, 185, 129, 0.45)',
    bgMain: '#020806',
    bgCard: '#071510',
    gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
    previewColors: ['#10b981', '#06b6d4', '#020806']
  },
  {
    id: 'sunset',
    name: 'Solar Amber',
    badge: 'Black Fire',
    primary: '#f97316',
    secondary: '#eab308',
    accent: '#ff4500',
    glow: 'rgba(249, 115, 22, 0.45)',
    bgMain: '#080402',
    bgCard: '#160c07',
    gradient: 'linear-gradient(135deg, #f97316 0%, #eab308 100%)',
    previewColors: ['#f97316', '#eab308', '#080402']
  },
  {
    id: 'matrix',
    name: 'Terminal Green',
    badge: 'Cyber Carbon',
    primary: '#22c55e',
    secondary: '#a3e635',
    accent: '#10b981',
    glow: 'rgba(34, 197, 94, 0.45)',
    bgMain: '#020603',
    bgCard: '#061409',
    gradient: 'linear-gradient(135deg, #22c55e 0%, #a3e635 100%)',
    previewColors: ['#22c55e', '#a3e635', '#020603']
  },
  {
    id: 'light-glass',
    name: 'Studio Light',
    badge: 'Clean Light',
    primary: '#4f46e5',
    secondary: '#0284c7',
    accent: '#0d9488',
    glow: 'rgba(79, 70, 229, 0.25)',
    bgMain: '#f8fafc',
    bgCard: '#ffffff',
    gradient: 'linear-gradient(135deg, #4f46e5 0%, #0284c7 100%)',
    previewColors: ['#4f46e5', '#0284c7', '#ffffff']
  }
];

export const applyColorCombo = (comboId) => {
  const combo = COLOR_COMBOS.find((c) => c.id === comboId) || COLOR_COMBOS[0];
  const root = document.documentElement;

  if (comboId === 'light-glass') {
    root.classList.remove('dark');
    root.classList.add('light');
  } else {
    root.classList.remove('light');
    root.classList.add('dark');
  }

  root.setAttribute('data-color-combo', combo.id);
  root.style.setProperty('--primary', combo.primary);
  root.style.setProperty('--secondary', combo.secondary);
  root.style.setProperty('--accent', combo.accent);
  root.style.setProperty('--shadow-glow', `0 0 35px ${combo.glow}`);
  root.style.setProperty('--gradient-primary', combo.gradient);
  root.style.setProperty('--bg-main', combo.bgMain);
  root.style.setProperty('--bg-card', combo.bgCard);

  localStorage.setItem('selectedColorCombo', combo.id);
};
