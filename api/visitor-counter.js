
const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { username = 'user', theme = 'cyberpunk', animated = 'false' } = req.query;
  
  // In a real implementation, you'd fetch actual visitor count from a database
  const visitorCount = Math.floor(Math.random() * 10000) + 1000;
  
  const content = `
    <rect x="10" y="10" width="280" height="80" rx="40" class="gradient-bg" opacity="0.3"/>
    
    <text x="50" y="35" class="theme-text text-style" font-size="12">Visitors</text>
    <text x="50" y="65" class="theme-primary text-style" font-size="24" font-weight="bold">
      ${visitorCount.toLocaleString()}
      ${animated === 'true' ? '<animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>' : ''}
    </text>
    
    <text x="200" y="50" class="theme-accent text-style" font-size="30">👁️</text>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(createSVG(300, 100, content, theme));
};
