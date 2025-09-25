
const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { theme = 'futuristic', status = 'coming-soon' } = req.query;
  
  const content = `
    <rect x="20" y="20" width="760" height="160" rx="20" class="gradient-bg" opacity="0.1"/>
    
    <text x="400" y="60" text-anchor="middle" class="theme-primary text-style" font-size="28" font-weight="bold">
      🚧 Amazing Projects Coming Soon! 🚧
    </text>
    
    <text x="400" y="90" text-anchor="middle" class="theme-text text-style" font-size="16">
      Currently crafting mind-blowing web experiences...
    </text>
    
    <text x="400" y="130" text-anchor="middle" class="theme-secondary text-style" font-size="14">
      ⚡ Stay tuned for revolutionary code! ⚡
    </text>
    
    <!-- Animated dots -->
    <circle cx="350" cy="140" r="3" class="theme-accent">
      <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" begin="0s"/>
    </circle>
    <circle cx="370" cy="140" r="3" class="theme-accent">
      <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" begin="0.3s"/>
    </circle>
    <circle cx="390" cy="140" r="3" class="theme-accent">
      <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" begin="0.6s"/>
    </circle>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(createSVG(800, 200, content, theme));
};
