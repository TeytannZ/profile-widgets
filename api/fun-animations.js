module.exports = (req, res) => {
  const { theme = 'anime', type = 'coding' } = req.query;
  
  const colors = {
    anime: { bg: '#1a1a2e', primary: '#ff6b9d', secondary: '#a8e6cf', accent: '#ffd93d' },
    cyberpunk: { bg: '#0a0a0a', primary: '#00d9ff', secondary: '#ff6b6b', accent: '#39ff14' }
  };
  
  const themeColors = colors[theme] || colors.anime;
  
  const svg = `<svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sceneBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${themeColors.bg}" />
        <stop offset="50%" style="stop-color:${themeColors.primary}22" />
        <stop offset="100%" style="stop-color:${themeColors.bg}" />
      </linearGradient>
    </defs>
    
    <rect width="800" height="400" fill="url(#sceneBg)" rx="20"/>
    
    <text x="400" y="40" text-anchor="middle" fill="${themeColors.primary}" font-family="Arial Black" font-size="22" font-weight="bold">
      🎨 Coding in Progress... 🎨
    </text>
    
    <!-- Computer Screen -->
    <rect x="100" y="70" width="600" height="250" rx="20" fill="#1a1a1a" stroke="${themeColors.accent}" stroke-width="3" opacity="0.9"/>
    <rect x="120" y="90" width="560" height="180" rx="10" fill="#000000"/>
    
    <!-- Code Lines -->
    <text x="140" y="120" fill="${themeColors.accent}" font-family="monospace" font-size="14">const developer = {</text>
    <text x="160" y="140" fill="${themeColors.primary}" font-family="monospace" font-size="14">  name: "Teytann",</text>
    <text x="160" y="160" fill="${themeColors.secondary}" font-family="monospace" font-size="14">  skills: ["JS", "React", "Node"],</text>
    <text x="160" y="180" fill="${themeColors.accent}" font-family="monospace" font-size="14">  passion: "Infinite",</text>
    <text x="160" y="200" fill="${themeColors.primary}" font-family="monospace" font-size="14">  status: "Always Learning"</text>
    <text x="140" y="220" fill="${themeColors.accent}" font-family="monospace" font-size="14">};</text>
    <text x="140" y="250" fill="${themeColors.secondary}" font-family="monospace" font-size="14">// Building the future, one line at a time</text>
    
    <!-- Blinking cursor -->
    <rect x="420" y="235" width="2" height="16" fill="${themeColors.primary}">
      <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
    </rect>
    
    <!-- Floating code particles -->
    <text x="200" y="340" fill="${themeColors.accent}" font-family="monospace" font-size="18" opacity="0.6">
      &lt;/&gt;
      <animate attributeName="y" values="340;330;340" dur="3s" repeatCount="indefinite"/>
    </text>
    <text x="300" y="350" fill="${themeColors.primary}" font-family="monospace" font-size="16" opacity="0.7">
      {}
      <animate attributeName="y" values="350;345;350" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
    </text>
    <text x="400" y="340" fill="${themeColors.secondary}" font-family="monospace" font-size="14" opacity="0.5">
      []
      <animate attributeName="y" values="340;335;340" dur="4s" repeatCount="indefinite" begin="1s"/>
    </text>
    <text x="500" y="350" fill="${themeColors.accent}" font-family="monospace" font-size="20" opacity="0.6">
      ()
      <animate attributeName="y" values="350;340;350" dur="3.5s" repeatCount="indefinite" begin="1.5s"/>
    </text>
    
    <!-- Coffee cup -->
    <text x="600" y="340" font-size="28">☕
      <animate attributeName="opacity" values="0.8;1;0.8" dur="4s" repeatCount="indefinite"/>
    </text>
    <text x="590" y="370" fill="${themeColors.secondary}" font-family="Arial" font-size="12">Fuel</text>
    
    <!-- Laptop base -->
    <rect x="80" y="320" width="640" height="20" rx="10" fill="#2a2a2a" opacity="0.8"/>
  </svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(svg);
};
