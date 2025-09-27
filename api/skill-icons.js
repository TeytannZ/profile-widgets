module.exports = (req, res) => {
  const { skills = 'javascript,react,nodejs,html5,css3,python', theme = 'neon-glow', animation = 'pulse' } = req.query;
  const skillList = skills.split(',').slice(0, 10);
  
  const skillData = {
    javascript: { emoji: '🟨', name: 'JavaScript', level: 95 },
    typescript: { emoji: '🔷', name: 'TypeScript', level: 88 },
    react: { emoji: '⚛️', name: 'React', level: 92 },
    nodejs: { emoji: '🟢', name: 'Node.js', level: 85 },
    html5: { emoji: '🟧', name: 'HTML5', level: 98 },
    css3: { emoji: '🟦', name: 'CSS3', level: 90 },
    python: { emoji: '🐍', name: 'Python', level: 80 },
    java: { emoji: '☕', name: 'Java', level: 75 },
    git: { emoji: '🌿', name: 'Git', level: 88 },
    github: { emoji: '🐙', name: 'GitHub', level: 92 },
    vscode: { emoji: '📝', name: 'VS Code', level: 95 },
    figma: { emoji: '🎨', name: 'Figma', level: 82 },
    mongodb: { emoji: '🍃', name: 'MongoDB', level: 78 },
    postgresql: { emoji: '🐘', name: 'PostgreSQL', level: 72 }
  };
  
  const colors = {
    'neon-glow': { bg: '#1a0033', primary: '#ff00ff', secondary: '#00ffff', accent: '#ffff00' },
    cyberpunk: { bg: '#0a0a0a', primary: '#00d9ff', secondary: '#ff6b6b', accent: '#39ff14' }
  };
  
  const themeColors = colors[theme] || colors['neon-glow'];
  const cols = Math.min(5, skillList.length);
  const rows = Math.ceil(skillList.length / cols);
  const width = cols * 140 + 60;
  const height = rows * 100 + 120;
  
  let skillElements = '';
  skillList.forEach((skill, index) => {
    const skillInfo = skillData[skill.trim()] || { emoji: '❓', name: skill, level: 50 };
    const row = Math.floor(index / cols);
    const col = index % cols;
    const x = 60 + (col * 140);
    const y = 80 + (row * 100);
    
    skillElements += `
      <g>
        <circle cx="${x}" cy="${y}" r="35" fill="${themeColors.primary}" opacity="0.2" stroke="${themeColors.accent}" stroke-width="2">
          ${animation === 'pulse' ? `<animate attributeName="opacity" values="0.2;0.4;0.2" dur="${2.5 + index * 0.2}s" repeatCount="indefinite"/>` : ''}
        </circle>
        <text x="${x}" y="${y + 8}" text-anchor="middle" font-size="28">
          ${skillInfo.emoji}
        </text>
        <text x="${x}" y="${y + 50}" text-anchor="middle" fill="${themeColors.secondary}" font-family="Arial" font-size="10" font-weight="bold">
          ${skillInfo.name.toUpperCase()}
        </text>
        <text x="${x}" y="${y + 65}" text-anchor="middle" fill="${themeColors.accent}" font-family="Arial" font-size="9">
          ${skillInfo.level}%
        </text>
      </g>
    `;
  });
  
  const svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="skillBg" cx="50%" cy="50%" r="70%">
        <stop offset="0%" style="stop-color:${themeColors.bg}" />
        <stop offset="100%" style="stop-color:${themeColors.primary}11" />
      </radialGradient>
    </defs>
    
    <rect width="${width}" height="${height}" fill="url(#skillBg)" rx="20"/>
    
    <text x="${width/2}" y="40" text-anchor="middle" fill="${themeColors.primary}" font-family="Arial Black" font-size="24" font-weight="bold">
      🔥 Skills & Expertise 🔥
    </text>
    
    ${skillElements}
  </svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(svg);
};
