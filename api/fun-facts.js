
const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { theme = 'anime', animated = 'false' } = req.query;
  
  const facts = [
    "🌅 Early bird programmer",
    "🥤 Hydration-powered coding",
    "🎨 Visual flair enthusiast",
    "🔥 Tech experiment lover",
    "💻 Solo coding adventures"
  ];
  
  let content = `
    <rect x="5" y="5" width="390" height="190" rx="15" class="gradient-bg" opacity="0.2"/>
    
    <text x="200" y="30" text-anchor="middle" class="theme-primary text-style" font-size="18" font-weight="bold">
      🎮 Fun Facts
    </text>
  `;
  
  facts.forEach((fact, index) => {
    const yPos = 60 + (index * 25);
    content += `
      <text x="20" y="${yPos}" class="theme-text text-style" font-size="14">
        ${fact}
        ${animated === 'true' ? `<animate attributeName="opacity" values="0.5;1;0.5" dur="${2 + index * 0.5}s" repeatCount="indefinite"/>` : ''}
      </text>
    `;
  });
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(createSVG(400, 200, content, theme));
};
