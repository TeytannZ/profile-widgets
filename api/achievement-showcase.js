module.exports = (req, res) => {
  const { username = 'user', theme = 'holographic' } = req.query;
  
  const achievements = [
    { icon: '🎯', title: 'Code Warrior', desc: 'Daily commits' },
    { icon: '🚀', title: 'Innovation Master', desc: 'Creative solutions' },
    { icon: '🌟', title: 'Learning Machine', desc: 'Never stops growing' },
    { icon: '⚡', title: 'Speed Demon', desc: 'Lightning fast coding' }
  ];
  
  const colors = {
    holographic: { bg: '#2d1b69', primary: '#f093fb', secondary: '#f5576c', accent: '#4facfe' },
    cyberpunk: { bg: '#0a0a0a', primary: '#00d9ff', secondary: '#ff6b6b', accent: '#39ff14' }
  };
  
  const themeColors = colors[theme] || colors.holographic;
  
  let achievementElements = '';
  achievements.forEach((achievement, index) => {
    const x = 50 + (index * 170);
    achievementElements += `
      <g>
        <rect x="${x}" y="50" width="140" height="90" rx="10" fill="${themeColors.primary}" opacity="0.2" stroke="${themeColors.accent}" stroke-width="1">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="${4 + index * 0.5}s" repeatCount="indefinite"/>
        </rect>
        <text x="${x + 70}" y="80" text-anchor="middle" font-size="24">
          ${achievement.icon}
          <animate attributeName="transform" values="scale(1);scale(1.1);scale(1)" dur="${3 + index * 0.3}s" repeatCount="indefinite"/>
        </text>
        <text x="${x + 70}" y="105" text-anchor="middle" fill="${themeColors.primary}" font-family="Arial" font-size="11" font-weight="bold">
          ${achievement.title}
        </text>
        <text x="${x + 70}" y="120" text-anchor="middle" fill="${themeColors.secondary}" font-family="Arial" font-size="9">
          ${achievement.desc}
        </text>
      </g>
    `;
  });
  
  const svg = `<svg width="730" height="170" viewBox="0 0 730 170" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="achieveBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${themeColors.bg}" />
        <stop offset="50%" style="stop-color:${themeColors.primary}22" />
        <stop offset="100%" style="stop-color:${themeColors.bg}" />
      </linearGradient>
    </defs>
    
    <rect width="730" height="170" fill="url(#achieveBg)" rx="15"/>
    
    <text x="365" y="30" text-anchor="middle" fill="${themeColors.primary}" font-family="Arial Black" font-size="20" font-weight="bold">
      🏆 Achievement Unlocked 🏆
    </text>
    
    ${achievementElements}
  </svg>`;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(svg);
};
