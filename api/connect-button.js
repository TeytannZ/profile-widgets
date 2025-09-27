module.exports = (req, res) => {
  const { theme = 'neon', animated = 'true', github, email, discord, linkedin } = req.query;
  
  const connections = [
    { name: 'GitHub', icon: '🐙', color: '#333333', active: !!github },
    { name: 'Email', icon: '📧', color: '#ea4335', active: !!email },
    { name: 'Discord', icon: '💬', color: '#7289da', active: !!discord },
    { name: 'LinkedIn', icon: '💼', color: '#0077b5', active: !!linkedin }
  ].filter(conn => conn.active);
  
  const colors = {
    neon: { bg: '#1a0033', primary: '#ff00ff', secondary: '#00ffff', accent: '#ffff00' },
    cyberpunk: { bg: '#0a0a0a', primary: '#00d9ff', secondary: '#ff6b6b', accent: '#39ff14' }
  };
  
  const themeColors = colors[theme] || colors.neon;
  const width = Math.max(500, connections.length * 130 + 100);
  
  let buttonElements = '';
  connections.forEach((conn, index) => {
    const x = 80 + (index * 130);
    buttonElements += `
      <g>
        <rect x="${x}" y="60" width="100" height="70" rx="35" fill="${conn.color}" opacity="0.9">
          ${animated === 'true' ? `<animate attributeName="opacity" values="0.7;1;0.7" dur="${2.5 + index * 0.3}s" repeatCount="indefinite"/>` : ''}
        </rect>
        <rect x="${x}" y="60" width="100" height="70" rx="35" stroke="${themeColors.accent}" stroke-width="2" fill="none" opacity="0.8">
          <animate attributeName="stroke-width" values="2;3;2" dur="4s" repeatCount="indefinite"/>
        </rect>
        <text x="${x + 50}" y="85" text-anchor="middle" font-size="20">
          ${conn.icon}
        </text>
        <text x="${x + 50}" y="110" text-anchor="middle" fill="white" font-family="Arial" font-size="10" font-weight="bold">
          ${conn.name.toUpperCase()}
        </text>
      </g>
    `;
  });
  
  const svg = `<svg width="${width}" height="170" viewBox="0 0 ${width} 170" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="connectBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${themeColors.bg}" />
        <stop offset="50%" style="stop-color:${themeColors.primary}22" />
        <stop offset="100%" style="stop-color:${themeColors.bg}" />
      </linearGradient>
    </defs>
    
    <rect width="${width}" height="170" fill="url(#connectBg)" rx="15"/>
    
    <text x="${width/2}" y="35" text-anchor="middle" fill="${themeColors.primary}" font-family="Arial Black" font-size="20" font-weight="bold">
      🚀 Let's Connect! 🚀
    </text>
    
    ${buttonElements}
    
    <text x="${width/2}" y="160" text-anchor="middle" fill="${themeColors.secondary}" font-family="Arial" font-size="12" opacity="0.8">
      Click any button to connect with me!
    </text>
  </svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(svg);
};
