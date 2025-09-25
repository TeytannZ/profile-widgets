
const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { theme = 'neon', animated = 'false', github, email, discord, linkedin } = req.query;
  
  const links = [
    { name: 'GitHub', url: `https://github.com/${github}`, icon: '🐙', color: '#333' },
    { name: 'Email', url: `mailto:${email}`, icon: '📧', color: '#ea4335' },
    { name: 'Discord', url: `https://discord.com/users/${discord}`, icon: '💬', color: '#7289da' },
    { name: 'LinkedIn', url: linkedin, icon: '💼', color: '#0077b5' }
  ].filter(link => link.url && link.url !== 'undefined' && link.url !== 'mailto:undefined');
  
  let content = `
    <text x="400" y="30" text-anchor="middle" class="theme-primary text-style" font-size="20" font-weight="bold">
      🚀 Let's Connect! 🚀
    </text>
  `;
  
  links.forEach((link, index) => {
    const x = 100 + (index * 150);
    content += `
      <g>
        <rect x="${x}" y="50" width="120" height="60" rx="30" fill="${link.color}" opacity="0.8">
          ${animated === 'true' ? '<animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>' : ''}
        </rect>
        <text x="${x + 60}" y="70" text-anchor="middle" class="text-style" fill="white" font-size="16">${link.icon}</text>
        <text x="${x + 60}" y="90" text-anchor="middle" class="text-style" fill="white" font-size="10" font-weight="bold">${link.name}</text>
        <animate attributeName="transform" values="scale(1);scale(1.1);scale(1)" dur="3s" begin="${index * 0.5}s" repeatCount="indefinite"/>
      </g>
    `;
  });
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(createSVG(800, 140, content, theme));
};
