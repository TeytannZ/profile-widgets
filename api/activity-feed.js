
const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { username = 'user', theme = 'matrix', limit = '5' } = req.query;
  
  const activities = [
    '🔄 Pushed to main branch in awesome-project',
    '⭐ Starred javascript/optimization-tips',
    '🐛 Fixed critical bug in user-auth module',
    '📝 Updated README.md with new features',
    '🚀 Deployed v2.1.0 to production'
  ].slice(0, parseInt(limit));
  
  let content = `
    <text x="400" y="30" text-anchor="middle" class="theme-primary text-style" font-size="20" font-weight="bold">
      📡 Live Activity Feed
    </text>
  `;
  
  activities.forEach((activity, index) => {
    const yPos = 60 + (index * 30);
    content += `
      <rect x="20" y="${yPos - 15}" width="760" height="25" rx="5" class="gradient-bg" opacity="0.1"/>
      <text x="30" y="${yPos}" class="theme-text text-style" font-size="12">
        ${activity}
        <animate attributeName="opacity" values="0;1" dur="0.5s" begin="${index * 0.2}s" fill="freeze"/>
      </text>
      <text x="750" y="${yPos}" class="theme-secondary text-style" font-size="10">
        ${index + 1}h ago
      </text>
    `;
  });
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(createSVG(800, 60 + (activities.length * 30), content, theme));
};
