module.exports = async (req, res) => {
  const { title = 'Developer', subtitle = 'Coding the Future', theme = 'cyberpunk' } = req.query;
  
  const themes = {
    cyberpunk: {
      bg: '#0a0a0a',
      primary: '#00d9ff',
      secondary: '#ff6b6b',
      accent: '#39ff14',
      gradient: 'linear-gradient(135deg, #00d9ff 0%, #ff6b6b 100%)'
    },
    neon: {
      bg: '#1a0033',
      primary: '#ff00ff',
      secondary: '#00ffff',
      accent: '#ffff00',
      gradient: 'linear-gradient(135deg, #ff00ff 0%, #00ffff 100%)'
    }
  };
  
  const colors = themes[theme] || themes.cyberpunk;
  
  const svg = `
    <svg width="800" height="120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors.bg};stop-opacity:1" />
          <stop offset="50%" style="stop-color:${colors.primary};stop-opacity:0.2" />
          <stop offset="100%" style="stop-color:${colors.bg};stop-opacity:1" />
        </linearGradient>
        <filter id="glow">
          <feMorphology operator="dilate" radius="2"/>
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <rect width="100%" height="100%" fill="url(#bg)" rx="15"/>
      <rect width="calc(100% - 4)" height="calc(100% - 4)" x="2" y="2" stroke="${colors.primary}" stroke-width="2" fill="none" rx="13" filter="url(#glow)"/>
      
      <text x="50%" y="45" text-anchor="middle" fill="${colors.primary}" font-family="Arial, sans-serif" font-size="32" font-weight="bold" filter="url(#glow)">
        ${title}
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
      </text>
      
      <text x="50%" y="80" text-anchor="middle" fill="${colors.secondary}" font-family="Arial, sans-serif" font-size="16">
        ${subtitle.replace(/\|/g, '|')}
      </text>
      
      <circle cx="10%" cy="30%" r="2" fill="${colors.accent}" opacity="0.8">
        <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="0s"/>
      </circle>
      <circle cx="90%" cy="40%" r="1.5" fill="${colors.primary}" opacity="0.7">
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="1s"/>
      </circle>
      <circle cx="20%" cy="70%" r="1" fill="${colors.secondary}" opacity="0.6">
        <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" begin="2s"/>
      </circle>
    </svg>
  `;
  
  // Convert SVG to base64 data URL (this works in GitHub!)
  const base64 = Buffer.from(svg).toString('base64');
  const dataURL = `data:image/svg+xml;base64,${base64}`;
  
  // Redirect to the data URL
  res.redirect(dataURL);
};
