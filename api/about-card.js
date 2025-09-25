
const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { theme = 'dark', glow = 'false' } = req.query;
  
  const content = `
    <rect x="10" y="10" width="380" height="280" rx="20" class="gradient-bg" opacity="0.1"/>
    
    <text x="30" y="220" class="theme-secondary text-style" font-size="12" opacity="0.8">
      "Code is poetry written in logic"
    </text>
    
    <!-- Animated coding symbols -->
    <text x="320" y="80" class="theme-accent text-style" font-size="16">&lt;/&gt;</text>
    <text x="340" y="120" class="theme-primary text-style" font-size="14">{}</text>
    <text x="360" y="160" class="theme-secondary text-style" font-size="12">[]</text>
    
    ${glow === 'true' ? '<animate attributeName="filter" values="drop-shadow(0 0 5px currentColor);drop-shadow(0 0 15px currentColor);drop-shadow(0 0 5px currentColor)" dur="3s" repeatCount="indefinite"/>' : ''}
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(createSVG(400, 300, content, theme));
};
