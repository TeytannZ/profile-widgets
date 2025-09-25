
const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { username = 'user', theme = 'holographic' } = req.query;
  
  const achievements = [
    { icon: '🎯', title: 'Code Warrior', desc: 'Commits daily' },
    { icon: '🚀', title: 'Innovation Master', desc: 'Creative solutions' },
    { icon: '🌟', title: 'Learning Machine', desc: 'Never stops growing' },
    { icon: '⚡', title: 'Speed Demon', desc: 'Lightning fast coding' }
  ];
  
  let content = `
    <text x="400" y="30" text-anchor="middle" class="theme-primary text-style" font-size="22" font-weight="bold">
      🏆 Achievement Unlocked 🏆
    </text>
  `;
  
  achievements.forEach((achievement, index) => {
    const x = 50 + (index * 180);
    content += `
      <g>
        <rect x="${x}" y="50" width="160" height="100" rx="10" class="gradient-bg" opacity="0.2"/>
        <text x="${x + 80}" y="80" text-anchor="middle" class="theme-text text-style" font-size="30">${achievement.icon}</text>
        <text x="${x + 80}" y="105" text-anchor="middle" class="theme-primary text-style" font-size="12" font-weight="bold">${achievement.title}</text>
        <text x="${x + 80}" y="125" text-anchor="middle" class="theme-secondary text-style" font-size="10">${achievement.desc}</text>
        <animate attributeName="transform" attributeType="XML" values="scale(1);scale(1.05);scale(1)" dur="3s" begin="${index * 0.5}s" repeatCount="indefinite"/>
      </g>
    `;
  });
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(createSVG(800, 180, content, theme));
};
