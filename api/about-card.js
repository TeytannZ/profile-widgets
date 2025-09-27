module.exports = (req, res) => {
  const { theme = 'dark', glow = 'true' } = req.query;
  
  const colors = {
    dark: { bg: '#1a1a2e', primary: '#00d9ff', secondary: '#ff6b9d', text: '#e0e0e0', accent: '#ffd700' },
    cyberpunk: { bg: '#0a0a0a', primary: '#00d9ff', secondary: '#ff6b6b', text: '#ffffff', accent: '#39ff14' }
  };
  
  const themeColors = colors[theme] || colors.dark;
  
  const svg = `<svg width="400" height="280" viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${themeColors.bg}" />
        <stop offset="50%" style="stop-color:${themeColors.primary}22" />
        <stop offset="100%" style="stop-color:${themeColors.bg}" />
      </linearGradient>
      <filter id="cardGlow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <rect width="400" height="280" fill="url(#cardBg)" rx="20"/>
    <rect x="5" y="5" width="390" height="270" stroke="${themeColors.primary}" stroke-width="${glow === 'true' ? '2' : '1'}" fill="none" rx="15" opacity="0.8" ${glow === 'true' ? 'filter="url(#cardGlow)"' : ''}/>
    
    <text x="30" y="45" fill="${themeColors.primary}" font-family="Arial Black" font-size="20" font-weight="bold" filter="url(#cardGlow)">
      💫 Quick Facts
    </text>
    
    <text x="30" y="75" fill="${themeColors.text}" font-family="Arial" font-size="14">🎓 Computer Science Student</text>
    <text x="30" y="100" fill="${themeColors.text}" font-family="Arial" font-size="14">💻 Frontend Developer</text>
    <text x="30" y="125" fill="${themeColors.text}" font-family="Arial" font-size="14">🌱 Always Learning</text>
    <text x="30" y="150" fill="${themeColors.text}" font-family="Arial" font-size="14">🎨 Creative Coder</text>
    <text x="30" y="175" fill="${themeColors.text}" font-family="Arial" font-size="14">🚀 Building the Future</text>
    
    <text x="30" y="220" fill="${themeColors.secondary}" font-family="Arial" font-size="12" font-style="italic" opacity="0.9">
      "Code is poetry written in logic"
    </text>
    
    <!-- Tech symbols with animation -->
    <text x="320" y="80" fill="${themeColors.accent}" font-family="monospace" font-size="18" opacity="0.8">
      &lt;/&gt;
      <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
    </text>
    <text x="340" y="120" fill="${themeColors.primary}" font-family="monospace" font-size="16" opacity="0.7">
      {}
      <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
    </text>
    <text x="360" y="160" fill="${themeColors.secondary}" font-family="monospace" font-size="14" opacity="0.6">
      []
      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" begin="1s"/>
    </text>
  </svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(svg);
};
