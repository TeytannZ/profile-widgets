
const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { theme = 'cyberpunk', animated = 'false' } = req.query;
  
  const content = `
    <rect x="20" y="20" width="360" height="160" rx="20" class="gradient-bg" opacity="0.2"/>
    
    <text x="200" y="50" text-anchor="middle" class="theme-primary text-style" font-size="18" font-weight="bold">
      ⏰ Coding Time Tracker
    </text>
    
    <text x="50" y="80" class="theme-text text-style" font-size="14">Today:</text>
    <text x="300" y="80" text-anchor="end" class="theme-accent text-style" font-size="14" font-weight="bold">8h 42m</text>
    
    <text x="50" y="105" class="theme-text text-style" font-size="14">This Week:</text>
    <text x="300" y="105" text-anchor="end" class="theme-accent text-style" font-size="14" font-weight="bold">52h 15m</text>
    
    <text x="50" y="130" class="theme-text text-style" font-size="14">Best Language:</text>
    <text x="300" y="130" text-anchor="end" class="theme-secondary text-style" font-size="14" font-weight="bold">JavaScript</text>
    
    <text x="200" y="160" text-anchor="middle" class="theme-primary text-style" font-size="12">
      🔥 On Fire! 🔥
      ${animated === 'true' ? '<animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite"/>' : ''}
    </text>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(createSVG(400, 200, content, theme));
};
