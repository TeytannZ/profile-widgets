
const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { theme = 'hologram', animated = 'false' } = req.query;
  
  const content = `
    <text x="300" y="30" text-anchor="middle" class="theme-primary text-style" font-size="18" font-weight="bold">
      🌐 Social Network Graph
    </text>
    
    <!-- Central node (You) -->
    <circle cx="300" cy="100" r="20" class="theme-primary" opacity="0.8">
      ${animated === 'true' ? '<animate attributeName="r" values="20;25;20" dur="2s" repeatCount="indefinite"/>' : ''}
    </circle>
    <text x="300" y="105" text-anchor="middle" class="theme-bg text-style" font-size="12" font-weight="bold">YOU</text>
    
    <!-- Connected nodes -->
    <g>
      <line x1="300" y1="100" x2="200" y2="60" class="theme-secondary" stroke-width="2" opacity="0.6"/>
      <circle cx="200" cy="60" r="15" class="theme-secondary" opacity="0.7"/>
      <text x="200" y="65" text-anchor="middle" class="theme-bg text-style" font-size="8">GitHub</text>
    </g>
    
    <g>
      <line x1="300" y1="100" x2="400" y2="60" class="theme-accent" stroke-width="2" opacity="0.6"/>
      <circle cx="400" cy="60" r="15" class="theme-accent" opacity="0.7"/>
      <text x="400" y="65" text-anchor="middle" class="theme-bg text-style" font-size="8">LinkedIn</text>
    </g>
    
    <g>
      <line x1="300" y1="100" x2="250" y2="150" class="theme-primary" stroke-width="2" opacity="0.6"/>
      <circle cx="250" cy="150" r="15" class="theme-primary" opacity="0.7"/>
      <text x="250" y="155" text-anchor="middle" class="theme-bg text-style" font-size="8">Discord</text>
    </g>
    
    <g>
      <line x1="300" y1="100" x2="350" y2="150" class="theme-secondary" stroke-width="2" opacity="0.6"/>
      <circle cx="350" cy="150" r="15" class="theme-secondary" opacity="0.7"/>
      <text x="350" y="155" text-anchor="middle" class="theme-bg text-style" font-size="8">Email</text>
    </g>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(createSVG(600, 200, content, theme));
};
