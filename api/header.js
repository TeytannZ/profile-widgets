module.exports = (req, res) => {
  const { title = 'Teytann', subtitle = 'Self-learner | Solo Coder | Creative Mind', theme = 'cyberpunk' } = req.query;
  
  // Extremely simple SVG - no complex features that could break
  const svg = `<svg width="800" height="120" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="120" fill="#0a0a0a"/>
    <rect x="5" y="5" width="790" height="110" stroke="#00d9ff" stroke-width="3" fill="none" rx="10"/>
    
    <text x="400" y="50" text-anchor="middle" fill="#00d9ff" font-family="Arial" font-size="32" font-weight="bold">
      ${title}
    </text>
    
    <text x="400" y="80" text-anchor="middle" fill="#ff6b6b" font-family="Arial" font-size="16">
      ✨ ${subtitle} ✨
    </text>
    
    <circle cx="100" cy="30" r="3" fill="#39ff14" opacity="0.8"/>
    <circle cx="700" cy="35" r="2" fill="#00d9ff" opacity="0.7"/>
    <circle cx="150" cy="90" r="2" fill="#ff6b6b" opacity="0.6"/>
    <circle cx="650" cy="85" r="2" fill="#39ff14" opacity="0.8"/>
  </svg>`;

  res.writeHead(200, {
    'Content-Type': 'image/svg+xml',
    'Cache-Control': 'public, max-age=86400'
  });
  res.end(svg);
};
