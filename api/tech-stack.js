module.exports = (req, res) => {
  const { icons = 'javascript,react,nodejs,html5,css3,python', theme = 'neon', style = 'floating' } = req.query;
  const iconList = icons.split(',').slice(0, 12); // Max 12 icons
  
  const iconEmojis = {
    javascript: '🟨', typescript: '🔷', html5: '🟧', css3: '🟦', react: '⚛️', nodejs: '🟢',
    python: '🐍', java: '☕', git: '🌿', github: '🐙', vscode: '📝', figma: '🎨',
    mongodb: '🍃', postgresql: '🐘'
  };
  
  const colors = {
    neon: { bg: '#1a0033', primary: '#ff00ff', secondary: '#00ffff', accent: '#ffff00' },
    cyberpunk: { bg: '#0a0a0a', primary: '#00d9ff', secondary: '#ff6b6b', accent: '#39ff14' }
  };
  
  const themeColors = colors[theme] || colors.neon;
  const cols = Math.min(6, Math.ceil(iconList.length / 2));
  const width = Math.max(600, cols * 90 + 100);
  const height = Math.max(200, Math.ceil(iconList.length / cols) * 80 + 100);
  
  let iconElements = '';
  iconList.forEach((icon, index) => {
    const emoji = iconEmojis[icon.trim()] || '❓';
    const row = Math.floor(index / cols);
    const col = index % cols;
    const x = 80 + (col * 90);
    const y = 70 + (row * 80);
    
    iconElements += `
      <g>
        <circle cx="${x}" cy="${y}" r="30" fill="${themeColors.primary}" opacity="0.2" stroke="${themeColors.accent}" stroke-width="2">
          <animate attributeName="r" values="28;32;28" dur="${3 + index * 0.3}s" repeatCount="indefinite"/>
        </circle>
        <text x="${x}" y="${y + 8}" text-anchor="middle" font-size="24" opacity="0.9">
          ${emoji}
          <animate attributeName="opacity" values="0.7;1;0.7" dur="${2.5 + index * 0.2}s" repeatCount="indefinite"/>
        </text>
        <text x="${x}" y="${y + 45}" text-anchor="middle" fill="${themeColors.secondary}" font-family="Arial" font-size="10" font-weight="bold">
          ${icon.toUpperCase()}
        </text>
      </g>
    `;
  });
  
  const svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="techBg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style="stop-color:${themeColors.bg}" />
        <stop offset="70%" style="stop-color:${themeColors.primary}11" />
        <stop offset="100%" style="stop-color:${themeColors.bg}" />
      </radialGradient>
    </defs>
    
    <rect width="${width}" height="${height}" fill="url(#techBg)" rx="15"/>
    
    <text x="${width/2}" y="35" text-anchor="middle" fill="${themeColors.primary}" font-family="Arial Black" font-size="22" font-weight="bold">
      💻 Tech Arsenal 💻
    </text>
    
    ${iconElements}
  </svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(svg);
};
