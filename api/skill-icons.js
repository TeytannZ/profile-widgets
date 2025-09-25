
const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { skills = 'javascript,react', theme = 'neon-glow', animation = 'pulse' } = req.query;
  const skillList = skills.split(',');
  
  let content = `
    <text x="400" y="30" text-anchor="middle" class="theme-primary text-style" font-size="20" font-weight="bold">
      💻 Tech Arsenal 💻
    </text>
  `;
  
  const skillIcons = {
    javascript: '🟨',
    typescript: '🔷',
    html5: '🟧',
    css3: '🟦',
    react: '⚛️',
    nodejs: '🟢',
    python: '🐍',
    java: '☕',
    git: '🌿',
    github: '🐙',
    vscode: '📝',
    figma: '🎨',
    mongodb: '🍃',
    postgresql: '🐘'
  };
  
  const cols = Math.ceil(skillList.length / 2);
  skillList.forEach((skill, index) => {
    const row = Math.floor(index / cols);
    const col = index % cols;
    const x = 100 + (col * 100);
    const y = 80 + (row * 60);
    
    const icon = skillIcons[skill.trim()] || '❓';
    
    content += `
      <g>
        <circle cx="${x}" cy="${y}" r="30" class="gradient-bg" opacity="0.3"/>
        <text x="${x}" y="${y + 8}" text-anchor="middle" class="theme-text text-style" font-size="24">${icon}</text>
        <text x="${x}" y="${y + 45}" text-anchor="middle" class="theme-secondary text-style" font-size="10">${skill.toUpperCase()}</text>
        ${animation === 'pulse' ? '<animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>' : ''}
      </g>
    `;
  });
  
  const width = Math.max(800, (cols * 100) + 200);
  const height = Math.max(200, (Math.ceil(skillList.length / cols) * 60) + 150);
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(createSVG(width, height, content, theme));
};
