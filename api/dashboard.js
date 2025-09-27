module.exports = (req, res) => {
  const { username = 'user', theme = 'cyberpunk' } = req.query;
  
  const colors = {
    cyberpunk: { bg: '#0a0a0a', primary: '#00d9ff', secondary: '#ff6b6b', accent: '#39ff14', text: '#ffffff' },
    neon: { bg: '#1a0033', primary: '#ff00ff', secondary: '#00ffff', accent: '#ffff00', text: '#ffffff' }
  };
  
  const themeColors = colors[theme] || colors.cyberpunk;
  
  // Generate realistic stats
  const seed = username.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  const stats = {
    repos: 20 + (seed * 7) % 30,
    stars: 50 + (seed * 11) % 200,
    commits: 800 + (seed * 13) % 1000,
    prs: 15 + (seed * 5) % 25,
    issues: 8 + (seed * 3) % 15,
    streak: 5 + (seed * 2) % 20
  };
  
  const svg = `<svg width="800" height="200" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="dashBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${themeColors.bg}" />
        <stop offset="50%" style="stop-color:${themeColors.primary}11" />
        <stop offset="100%" style="stop-color:${themeColors.bg}" />
      </linearGradient>
    </defs>
    
    <rect width="800" height="200" fill="url(#dashBg)" rx="15"/>
    
    <text x="400" y="30" text-anchor="middle" fill="${themeColors.primary}" font-family="Arial Black" font-size="20" font-weight="bold">
      📊 Developer Dashboard
    </text>
    
    <!-- Stats Panels -->
    <rect x="20" y="50" width="180" height="120" rx="10" fill="${themeColors.primary}" opacity="0.1" stroke="${themeColors.accent}" stroke-width="1"/>
    <text x="110" y="75" text-anchor="middle" fill="${themeColors.secondary}" font-family="Arial" font-size="14" font-weight="bold">GitHub Stats</text>
    <text x="30" y="95" fill="${themeColors.text}" font-family="Arial" font-size="12">📚 Repos: ${stats.repos}</text>
    <text x="30" y="110" fill="${themeColors.text}" font-family="Arial" font-size="12">⭐ Stars: ${stats.stars}</text>
    <text x="30" y="125" fill="${themeColors.text}" font-family="Arial" font-size="12">🔥 Commits: ${stats.commits}</text>
    <text x="30" y="140" fill="${themeColors.text}" font-family="Arial" font-size="12">✅ PRs: ${stats.prs}</text>
    <text x="30" y="155" fill="${themeColors.text}" font-family="Arial" font-size="12">🐛 Issues: ${stats.issues}</text>
    
    <rect x="220" y="50" width="180" height="120" rx="10" fill="${themeColors.secondary}" opacity="0.1" stroke="${themeColors.accent}" stroke-width="1"/>
    <text x="310" y="75" text-anchor="middle" fill="${themeColors.secondary}" font-family="Arial" font-size="14" font-weight="bold">Activity</text>
    <text x="230" y="95" fill="${themeColors.text}" font-family="Arial" font-size="12">🎯 Today: 8 commits</text>
    <text x="230" y="110" fill="${themeColors.text}" font-family="Arial" font-size="12">🔥 Streak: ${stats.streak} days</text>
    <text x="230" y="125" fill="${themeColors.text}" font-family="Arial" font-size="12">🌐 Languages: 6</text>
    <text x="230" y="140" fill="${themeColors.text}" font-family="Arial" font-size="12">⏰ Hours: 42h</text>
    <text x="230" y="155" fill="${themeColors.text}" font-family="Arial" font-size="12">📈 Productivity: High</text>
    
    <rect x="420" y="50" width="180" height="120" rx="10" fill="${themeColors.accent}" opacity="0.1" stroke="${themeColors.accent}" stroke-width="1"/>
    <text x="510" y="75" text-anchor="middle" fill="${themeColors.secondary}" font-family="Arial" font-size="14" font-weight="bold">Top Skills</text>
    <text x="430" y="95" fill="${themeColors.text}" font-family="Arial" font-size="12">🟨 JavaScript 95%</text>
    <text x="430" y="110" fill="${themeColors.text}" font-family="Arial" font-size="12">⚛️ React 88%</text>
    <text x="430" y="125" fill="${themeColors.text}" font-family="Arial" font-size="12">🟢 Node.js 82%</text>
    <text x="430" y="140" fill="${themeColors.text}" font-family="Arial" font-size="12">🔷 TypeScript 75%</text>
    <text x="430" y="155" fill="${themeColors.text}" font-family="Arial" font-size="12">🐍 Python 70%</text>
    
    <!-- Performance Chart -->
    <rect x="620" y="50" width="160" height="120" rx="10" fill="${themeColors.primary}" opacity="0.1" stroke="${themeColors.accent}" stroke-width="1"/>
    <text x="700" y="75" text-anchor="middle" fill="${themeColors.secondary}" font-family="Arial" font-size="14" font-weight="bold">Performance</text>
    
    <!-- Mini bar chart -->
    <rect x="630" y="140" width="15" height="20" fill="${themeColors.primary}" opacity="0.8"/>
    <rect x="650" y="130" width="15" height="30" fill="${themeColors.accent}" opacity="0.8"/>
    <rect x="670" y="120" width="15" height="40" fill="${themeColors.secondary}" opacity="0.8"/>
    <rect x="690" y="110" width="15" height="50" fill="${themeColors.primary}" opacity="0.8"/>
    <rect x="710" y="100" width="15" height="60" fill="${themeColors.accent}" opacity="0.8"/>
    <rect x="730" y="90" width="15" height="70" fill="${themeColors.secondary}" opacity="0.8"/>
    <rect x="750" y="85" width="15" height="75" fill="${themeColors.primary}" opacity="0.8">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
    </rect>
  </svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(svg);
};
