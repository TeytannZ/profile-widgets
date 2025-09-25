
const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { theme = 'cyberpunk', animated = 'true' } = req.query;
  
  const content = `
    <!-- Wave Animation -->
    <path d="M0,60 Q200,20 400,60 T800,60 V100 H0 Z" class="gradient-bg" opacity="0.6">
      ${animated === 'true' ? '<animateTransform attributeName="transform" type="translate" values="0,0;-400,0;0,0" dur="8s" repeatCount="indefinite"/>' : ''}
    </path>
    
    <path d="M0,80 Q200,40 400,80 T800,80 V100 H0 Z" class="theme-primary" opacity="0.4">
      ${animated === 'true' ? '<animateTransform attributeName="transform" type="translate" values="0,0;400,0;0,0" dur="6s" repeatCount="indefinite"/>' : ''}
    </path>
    
    <!-- Footer Text -->
    <text x="400" y="40" text-anchor="middle" class="theme-primary text-style" font-size="16" font-weight="bold">
      Made with ❤️ and lots of ☕
    </text>
    
    <text x="400" y="70" text-anchor="middle" class="theme-secondary text-style" font-size="12">
      "Keep coding, keep growing, keep being awesome!"
    </text>
    
    <!-- Floating hearts -->
    <text x="100" y="30" class="theme-accent text-style" font-size="12" opacity="0.8">💖</text>
    <text x="700" y="25" class="theme-accent text-style" font-size="14" opacity="0.7">💫</text>
    <text x="200" y="20" class="theme-primary text-style" font-size="10" opacity="0.6">⚡</text>
    <text x="600" y="35" class="theme-secondary text-style" font-size="11" opacity="0.9">🚀</text>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(createSVG(800, 100, content, theme));
};
