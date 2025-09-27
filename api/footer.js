module.exports = (req, res) => {
  const { theme = 'cyberpunk', animated = 'true' } = req.query;
  
  const colors = {
    cyberpunk: { bg: '#0a0a0a', primary: '#00d9ff', secondary: '#ff6b6b', accent: '#39ff14' },
    neon: { bg: '#1a0033', primary: '#ff00ff', secondary: '#00ffff', accent: '#ffff00' }
  };
  
  const themeColors = colors[theme] || colors.cyberpunk;
  
  const svg = `<svg width="800" height="120" viewBox="0 0 800 120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="footerBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${themeColors.bg}" />
        <stop offset="50%" style="stop-color:${themeColors.primary}22" />
        <stop offset="100%" style="stop-color:${themeColors.bg}" />
      </linearGradient>
    </defs>
    
    <!-- Animated Wave -->
    <path d="M0,60 Q200,20 400,60 T800,60 L800,120 L0,120 Z" fill="${themeColors.primary}" opacity="0.3">
      ${animated === 'true' ? '<animateTransform attributeName="transform" type="translate" values="0,0;-100,0;0,0" dur="8s" repeatCount="indefinite"/>' : ''}
    </path>
    
    <path d="M0,80 Q200,40 400,80 T800,80 L800,120 L0,120 Z" fill="${themeColors.secondary}" opacity="0.2">
      ${animated === 'true' ? '<animateTransform attributeName="transform" type="translate" values="0,0;100,0;0,0" dur="6s" repeatCount="indefinite"/>' : ''}
    </path>
    
    <rect width="800" height="120" fill="url(#footerBg)" opacity="0.7"/>
    
    <!-- Footer Text -->
    <text x="400" y="40" text-anchor="middle" fill="${themeColors.primary}" font-family="Arial" font-size="16" font-weight="bold">
      Made with ❤️ and lots of ☕
    </text>
    
    <text x="400" y="65" text-anchor="middle" fill="${themeColors.secondary}" font-family="Arial" font-size="14">
      "Keep coding, keep growing, keep being awesome!"
    </text>
    
    <!-- Floating elements -->
    <text x="100" y="30" fill="${themeColors.accent}" font-size="14" opacity="0.8">💖
      <animate attributeName="y" values="30;25;30" dur="3s" repeatCount="indefinite"/>
    </text>
    <text x="700" y="25" fill="${themeColors.accent}" font-size="16" opacity="0.7">💫
      <animate attributeName="y" values="25;20;25" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
    </text>
    <text x="200" y="20" fill="${themeColors.primary}" font-size="12" opacity="0.6">⚡
      <animate attributeName="y" values="20;15;20" dur="4s" repeatCount="indefinite" begin="1s"/>
    </text>
    <text x="600" y="35" fill="${themeColors.secondary}" font-size="13" opacity="0.9">🚀
      <animate attributeName="y" values="35;30;35" dur="3.5s" repeatCount="indefinite" begin="1.5s"/>
    </text>
    
    <text x="400" y="95" text-anchor="middle" fill="${themeColors.accent}" font-family="Arial" font-size="12" opacity="0.8">
      Built with Vercel ⚡ Powered by Creativity 🎨
    </text>
  </svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(svg);
};
