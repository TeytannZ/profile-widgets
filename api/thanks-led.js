
const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { message = 'Thanks for visiting!', theme = 'neon', animated = 'true' } = req.query;
  
  const content = `
    <!-- LED Sign Background -->
    <rect x="20" y="20" width="560" height="120" rx="20" fill="#1a1a1a" stroke="${themes[theme]?.primary || '#00d9ff'}" stroke-width="3"/>
    <rect x="30" y="30" width="540" height="100" rx="15" fill="#0a0a0a"/>
    
    <!-- LED Bulbs Border -->
    ${Array.from({length: 25}, (_, i) => {
      const x = 40 + (i * 20);
      return `<circle cx="${x}" cy="45" r="3" fill="${themes[theme]?.accent || '#39ff14'}" opacity="0.8">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="${i * 0.1}s" repeatCount="indefinite"/>
      </circle>`;
    }).join('')}
    
    ${Array.from({length: 25}, (_, i) => {
      const x = 40 + (i * 20);
      return `<circle cx="${x}" cy="115" r="3" fill="${themes[theme]?.accent || '#39ff14'}" opacity="0.8">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="${i * 0.1 + 1}s" repeatCount="indefinite"/>
      </circle>`;
    }).join('')}
    
    <!-- Main Text -->
    <text x="300" y="85" text-anchor="middle" class="theme-primary text-style" font-size="24" font-weight="bold" style="text-shadow: 0 0 10px currentColor;">
      ${message}
      ${animated === 'true' ? `
        <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="fill" values="${themes[theme]?.primary};${themes[theme]?.secondary};${themes[theme]?.accent};${themes[theme]?.primary}" dur="4s" repeatCount="indefinite"/>
      ` : ''}
    </text>
    
    <!-- Sparkle Effects -->
    <text x="100" y="70" class="theme-accent text-style" font-size="16" opacity="0.7">✨</text>
    <text x="500" y="70" class="theme-accent text-style" font-size="16" opacity="0.7">✨</text>
    <text x="150" y="100" class="theme-secondary text-style" font-size="12" opacity="0.6">⭐</text>
    <text x="450" y="100" class="theme-secondary text-style" font-size="12" opacity="0.6">⭐</text>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(createSVG(600, 160, content, theme));
};
