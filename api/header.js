
const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { title = 'Developer', subtitle = 'Coding the Future', theme = 'cyberpunk' } = req.query;
  
  const content = `
    <text x="50%" y="40" text-anchor="middle" class="theme-primary text-style" font-size="32" font-weight="bold">
      ${title}
      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
    </text>
    <text x="50%" y="80" text-anchor="middle" class="theme-secondary text-style" font-size="16">
      ${subtitle}
    </text>
    
    <!-- Animated particles -->
    <circle cx="10%" cy="20%" r="2" class="theme-accent">
      <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="0s"/>
    </circle>
    <circle cx="90%" cy="30%" r="1.5" class="theme-primary">
      <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="1s"/>
    </circle>
    <circle cx="20%" cy="70%" r="1" class="theme-secondary">
      <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" begin="2s"/>
    </circle>
  `;
  
  res.setHeader('Content-Type', 'image/png');
  res.send(createSVG(800, 120, content, theme));
};
