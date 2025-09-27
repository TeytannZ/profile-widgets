module.exports = (req, res) => {
  const { username = 'user', theme = 'cyberpunk', animated = 'true' } = req.query;
  
  // Generate a realistic visitor count (you can connect to a real DB later)
  const seed = username.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  const baseCount = 1000 + (seed * 13) % 9000;
  const dailyVariation = new Date().getDate() * 7;
  const visitorCount = baseCount + dailyVariation;
  
  const colors = {
    cyberpunk: { bg: '#0a0a0a', primary: '#00d9ff', secondary: '#ff6b6b', accent: '#39ff14' },
    neon: { bg: '#1a0033', primary: '#ff00ff', secondary: '#00ffff', accent: '#ffff00' }
  };
  
  const themeColors = colors[theme] || colors.cyberpunk;
  
  const svg = `<svg width="300" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="counterBg" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:${themeColors.bg}" />
        <stop offset="50%" style="stop-color:${themeColors.primary}33" />
        <stop offset="100%" style="stop-color:${themeColors.bg}" />
      </linearGradient>
    </defs>
    
    <rect width="300" height="100" fill="url(#counterBg)" rx="50"/>
    <rect x="2" y="2" width="296" height="96" stroke="${themeColors.accent}" stroke-width="2" fill="none" rx="48" opacity="0.8"/>
    
    <text x="60" y="35" fill="${themeColors.secondary}" font-family="Arial" font-size="14" font-weight="bold">Visitors</text>
    <text x="60" y="65" fill="${themeColors.primary}" font-family="Arial Black" font-size="24" font-weight="bold">
      ${visitorCount.toLocaleString()}
      ${animated === 'true' ? '<animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>' : ''}
    </text>
    
    <text x="220" y="55" font-size="32" opacity="0.8">👁️
      <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
    </text>
  </svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=300'); // Shorter cache for visitor count
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(svg);
};
