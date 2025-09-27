module.exports = (req, res) => {
  const { title = 'Teytann', subtitle = 'Self-learner | Solo Coder | Creative Mind', theme = 'cyberpunk' } = req.query;
  
  const themes = {
    cyberpunk: {
      bg: 'rgba(10,10,10,1)',
      primary: '#00d9ff',
      secondary: '#ff6b6b',
      accent: '#39ff14'
    },
    neon: {
      bg: 'rgba(26,0,51,1)',
      primary: '#ff00ff', 
      secondary: '#00ffff',
      accent: '#ffff00'
    }
  };
  
  const colors = themes[theme] || themes.cyberpunk;
  
  const svg = `<svg width="800" height="120" viewBox="0 0 800 120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${colors.bg}" />
        <stop offset="30%" style="stop-color:${colors.primary}33" />
        <stop offset="70%" style="stop-color:${colors.secondary}22" />
        <stop offset="100%" style="stop-color:${colors.bg}" />
      </linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feMorphology operator="dilate" radius="1"/>
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <rect width="800" height="120" fill="url(#bgGrad)" rx="15"/>
    <rect x="3" y="3" width="794" height="114" stroke="${colors.primary}" stroke-width="2" fill="none" rx="12" opacity="0.8"/>
    
    <text x="400" y="50" text-anchor="middle" fill="${colors.primary}" font-family="Arial Black, Arial" font-size="36" font-weight="900" filter="url(#glow)">
      ${title}
      <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
    </text>
    
    <text x="400" y="85" text-anchor="middle" fill="${colors.secondary}" font-family="Arial" font-size="16" font-weight="bold">
      ✨ ${subtitle.replace(/\|/g, '|')} ✨
    </text>
    
    <!-- Animated particles -->
    <circle cx="80" cy="30" r="3" fill="${colors.accent}" opacity="0.9">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="720" cy="35" r="2" fill="${colors.primary}" opacity="0.8">
      <animate attributeName="opacity" values="0.2;1;0.2" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
    </circle>
    <circle cx="150" cy="90" r="2.5" fill="${colors.secondary}" opacity="0.7">
      <animate attributeName="opacity" values="0.1;0.9;0.1" dur="3.5s" repeatCount="indefinite" begin="1s"/>
    </circle>
    <circle cx="650" cy="85" r="1.5" fill="${colors.accent}" opacity="0.6">
      <animate attributeName="opacity" values="0.4;1;0.4" dur="4s" repeatCount="indefinite" begin="1.5s"/>
    </circle>
  </svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(svg);
};
