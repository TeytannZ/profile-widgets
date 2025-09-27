module.exports = (req, res) => {
  const { title = 'Teytann - Developer Profile', subtitle = 'Learning to Code the Future', theme = 'cyberpunk', animated = 'false' } = req.query;
  
  // Theme colors
  const themes = {
    cyberpunk: { primary: '#00d9ff', secondary: '#ff6b6b', accent: '#39ff14', bg: '#0a0a0a', text: '#ffffff' },
    neon: { primary: '#ff00ff', secondary: '#00ffff', accent: '#ffff00', bg: '#1a0033', text: '#ffffff' },
    matrix: { primary: '#00ff00', secondary: '#008000', accent: '#00ff41', bg: '#000000', text: '#00ff00' }
  };
  
  const colors = themes[theme] || themes.cyberpunk;
  
  const svg = `
    <svg width="800" height="120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors.primary};stop-opacity:1" />
          <stop offset="50%" style="stop-color:${colors.secondary};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${colors.accent};stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <rect width="100%" height="100%" fill="${colors.bg}" rx="15"/>
      <rect width="796" height="116" x="2" y="2" fill="none" stroke="${colors.primary}" stroke-width="2" rx="13"/>
      
      <text x="50%" y="45" text-anchor="middle" fill="${colors.primary}" font-family="monospace" font-size="32" font-weight="bold">
        ${title.replace(/%20/g, ' ')}
        ${animated === 'true' ? '<animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>' : ''}
      </text>
      
      <text x="50%" y="75" text-anchor="middle" fill="${colors.secondary}" font-family="monospace" font-size="16">
        ${subtitle.replace(/%20/g, ' ')}
      </text>
      
      <circle cx="50" cy="30" r="3" fill="${colors.accent}">
        <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="750" cy="40" r="2" fill="${colors.primary}">
        <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="1s"/>
      </circle>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  res.send(svg);
};