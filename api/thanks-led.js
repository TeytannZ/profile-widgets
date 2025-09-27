module.exports = (req, res) => {
  const { message = 'Thanks for visiting!', theme = 'neon', animated = 'true' } = req.query;
  
  const colors = {
    neon: { bg: '#1a1a1a', primary: '#ff00ff', secondary: '#00ffff', accent: '#ffff00', border: '#ff0080' },
    cyberpunk: { bg: '#0a0a0a', primary: '#00d9ff', secondary: '#ff6b6b', accent: '#39ff14', border: '#00d9ff' }
  };
  
  const themeColors = colors[theme] || colors.neon;
  
  // LED bulb positions
  let topBulbs = '';
  let bottomBulbs = '';
  for (let i = 0; i < 25; i++) {
    const x = 40 + (i * 20);
    topBulbs += `
      <circle cx="${x}" cy="30" r="3" fill="${themeColors.accent}" opacity="0.8">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="${i * 0.08}s" repeatCount="indefinite"/>
      </circle>
    `;
    bottomBulbs += `
      <circle cx="${x}" cy="110" r="3" fill="${themeColors.accent}" opacity="0.8">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="${i * 0.08 + 1}s" repeatCount="indefinite"/>
      </circle>
    `;
  }
  
  const svg = `<svg width="600" height="140" viewBox="0 0 600 140" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feMorphology operator="dilate" radius="1"/>
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <!-- Main LED Sign -->
    <rect x="20" y="20" width="560" height="100" rx="20" fill="${themeColors.bg}" stroke="${themeColors.border}" stroke-width="4"/>
    <rect x="30" y="30" width="540" height="80" rx="15" fill="#050505"/>
    
    <!-- LED Border Bulbs -->
    ${topBulbs}
    ${bottomBulbs}
    
    <!-- Main Text -->
    <text x="300" y="75" text-anchor="middle" fill="${themeColors.primary}" font-family="Arial Black" font-size="24" font-weight="bold" filter="url(#neonGlow)">
      ${message}
      ${animated === 'true' ? `
        <animate attributeName="opacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="fill" values="${themeColors.primary};${themeColors.secondary};${themeColors.accent};${themeColors.primary}" dur="4s" repeatCount="indefinite"/>
      ` : ''}
    </text>
    
    <!-- Sparkle Effects -->
    <text x="100" y="55" fill="${themeColors.accent}" font-size="16" opacity="0.7">✨</text>
    <text x="500" y="55" fill="${themeColors.accent}" font-size="16" opacity="0.7">✨</text>
    <text x="150" y="85" fill="${themeColors.secondary}" font-size="12" opacity="0.6">⭐</text>
    <text x="450" y="85" fill="${themeColors.secondary}" font-size="12" opacity="0.6">⭐</text>
  </svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(svg);
};
