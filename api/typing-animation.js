module.exports = (req, res) => {
  const { lines = 'Computer Science Student;Frontend Developer;Always Learning', theme = 'neon' } = req.query;
  const lineArray = lines.split(';').slice(0, 5); // Max 5 lines
  
  const themes = {
    neon: { bg: '#1a0033', primary: '#ff00ff', secondary: '#00ffff', accent: '#ffff00' },
    cyberpunk: { bg: '#0a0a0a', primary: '#00d9ff', secondary: '#ff6b6b', accent: '#39ff14' },
    matrix: { bg: '#000014', primary: '#00ff00', secondary: '#00cc00', accent: '#00ff41' }
  };
  
  const colors = themes[theme] || themes.neon;
  const height = Math.max(120, lineArray.length * 35 + 50);
  
  let textElements = '';
  lineArray.forEach((line, index) => {
    const cleanLine = line.replace(/%26/g, '&').replace(/[<>]/g, '').trim();
    const yPos = 45 + (index * 30);
    textElements += `
      <text x="300" y="${yPos}" text-anchor="middle" fill="${colors.primary}" font-family="Courier New, monospace" font-size="18" font-weight="bold">
        ${cleanLine}
        <animate attributeName="opacity" values="0;1;1;0.7" dur="6s" begin="${index * 1.2}s" repeatCount="indefinite"/>
      </text>
    `;
  });
  
  const svg = `<svg width="600" height="${height}" viewBox="0 0 600 ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${colors.bg}" />
        <stop offset="50%" style="stop-color:${colors.primary}11" />
        <stop offset="100%" style="stop-color:${colors.bg}" />
      </linearGradient>
      <filter id="textGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <rect width="600" height="${height}" fill="url(#bgGrad)" rx="12"/>
    <rect x="2" y="2" width="596" height="${height-4}" stroke="${colors.primary}" stroke-width="1.5" fill="none" rx="10" opacity="0.7"/>
    
    ${textElements}
    
    <!-- Blinking cursor -->
    <rect x="310" y="${35 + (lineArray.length-1) * 30}" width="2" height="18" fill="${colors.accent}" opacity="1">
      <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
    </rect>
    
    <!-- Corner decorations -->
    <text x="25" y="${height-15}" fill="${colors.accent}" font-family="monospace" font-size="12" opacity="0.6">&lt;/&gt;</text>
    <text x="575" y="${height-15}" fill="${colors.secondary}" font-family="monospace" font-size="12" opacity="0.6">{}</text>
  </svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(svg);
};
