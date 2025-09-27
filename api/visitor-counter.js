module.exports = (req, res) => {
  const { username = 'user', theme = 'cyberpunk', animated = 'false' } = req.query;
  
  const themes = {
    cyberpunk: { primary: '#00d9ff', bg: '#0a0a0a', text: '#ffffff', secondary: '#ff6b6b', accent: '#39ff14' }
  };
  
  const colors = themes[theme] || themes.cyberpunk;
  const visitorCount = Math.floor(Math.random() * 10000) + 5000;
  
  const svg = `
    <svg width="350" height="120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="counterGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id="counterBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors.primary};stop-opacity:0.2"/>
          <stop offset="100%" style="stop-color:${colors.secondary};stop-opacity:0.1"/>
        </linearGradient>
      </defs>
      
      <rect width="100%" height="100%" fill="${colors.bg}" rx="20"/>
      <rect width="346" height="116" x="2" y="2" fill="none" stroke="${colors.primary}" stroke-width="2" rx="18"/>
      <rect width="100%" height="100%" fill="url(#counterBg)" rx="20"/>
      
      <!-- Digital display effect -->
      <rect x="20" y="20" width="310" height="80" rx="10" fill="#000000" stroke="${colors.primary}" stroke-width="1"/>
      
      <!-- Screen lines effect -->
      ${Array.from({length: 15}, (_, i) => `
        <line x1="25" y1="${25 + (i * 5)}" x2="325" y2="${25 + (i * 5)}" stroke="${colors.primary}" stroke-width="0.5" opacity="0.1"/>
      `).join('')}
      
      <!-- Icon with animation -->
      <text x="50" y="55" fill="${colors.accent}" font-family="monospace" font-size="24" filter="url(#counterGlow)">
        👁️
        ${animated === 'true' ? '<animateTransform attributeName="transform" type="scale" values="1;1.2;1" dur="2s" repeatCount="indefinite"/>' : ''}
      </text>
      
      <!-- Label -->
      <text x="90" y="45" fill="${colors.text}" font-family="monospace" font-size="14" font-weight="bold" opacity="0.9">
        PROFILE VIEWS
      </text>
      
      <!-- Counter with digital effect -->
      <text x="90" y="75" fill="${colors.primary}" font-family="monospace" font-size="32" font-weight="bold" filter="url(#counterGlow)">
        ${visitorCount.toLocaleString()}
        ${animated === 'true' ? '<animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite"/>' : ''}
      </text>
      
      <!-- Status indicator -->
      <circle cx="280" cy="35" r="4" fill="${colors.accent}">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
      </circle>
      <text x="290" y="40" fill="${colors.accent}" font-family="monospace" font-size="10">LIVE</text>
      
      <!-- Progress bar simulation -->
      <rect x="90" y="85" width="200" height="3" rx="1.5" fill="${colors.bg}" opacity="0.3"/>
      <rect x="90" y="85" width="150" height="3" rx="1.5" fill="${colors.secondary}">
        <animate attributeName="width" values="0;150;0" dur="5s" repeatCount="indefinite"/>
      </rect>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  res.send(svg);
};
