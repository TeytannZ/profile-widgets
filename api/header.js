const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { title = 'Teytann - Developer Profile', subtitle = 'Learning to Code the Future', theme = 'cyberpunk', animated = 'false' } = req.query;
  
  const content = `
    <!-- Animated background particles -->
    <defs>
      <radialGradient id="particle1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style="stop-color:#00d9ff;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#00d9ff;stop-opacity:0" />
      </radialGradient>
      <radialGradient id="particle2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style="stop-color:#ff6b6b;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#ff6b6b;stop-opacity:0" />
      </radialGradient>
    </defs>
    
    <!-- Dynamic background effect -->
    <rect x="0" y="0" width="100%" height="100%" fill="url(#themeGradient)" opacity="0.1"/>
    
    <!-- Main title with enhanced styling -->
    <text x="50%" y="45" text-anchor="middle" class="theme-primary text-style" font-size="36" font-weight="bold" 
          style="filter: drop-shadow(0 0 15px currentColor);">
      ${title.replace(/%20/g, ' ')}
      ${animated === 'true' ? '<animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>' : ''}
    </text>
    
    <!-- Subtitle with glow effect -->
    <text x="50%" y="75" text-anchor="middle" class="theme-secondary text-style" font-size="18" opacity="0.9"
          style="filter: drop-shadow(0 0 8px currentColor);">
      ${subtitle.replace(/%20/g, ' ')}
    </text>
    
    <!-- Enhanced animated particles -->
    <circle cx="5%" cy="25%" r="3" fill="url(#particle1)">
      <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" begin="0s"/>
      <animate attributeName="cy" values="25%;20%;25%" dur="6s" repeatCount="indefinite"/>
    </circle>
    <circle cx="95%" cy="35%" r="2" fill="url(#particle2)">
      <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="1.5s"/>
      <animate attributeName="cx" values="95%;90%;95%" dur="5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="15%" cy="75%" r="1.5" class="theme-accent">
      <animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite" begin="3s"/>
    </circle>
    <circle cx="85%" cy="65%" r="2.5" class="theme-primary" opacity="0.7">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" begin="2s"/>
    </circle>
    
    <!-- Decorative elements -->
    <text x="10%" y="90%" class="theme-accent text-style" font-size="12" opacity="0.6">{ }</text>
    <text x="90%" y="20%" class="theme-secondary text-style" font-size="14" opacity="0.5">&lt;/&gt;</text>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(createSVG(800, 120, content, theme));
};