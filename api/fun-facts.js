const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { 
    theme = 'holographic', 
    animated = 'false',
    facts = '🌱 Passionate learner;💡 Problem solver;🎨 Creative thinker;📚 Always studying;🚀 Future developer'
  } = req.query;
  
  const factList = facts.split(';');
  
  let content = `
    <rect x="5" y="5" width="590" height="${Math.max(200, factList.length * 30 + 80)}" rx="15" class="gradient-bg" opacity="0.2"/>
    
    <text x="300" y="35" text-anchor="middle" class="theme-primary text-style" font-size="20" font-weight="bold">
      🎯 About Me
    </text>
  `;
  
  factList.forEach((fact, index) => {
    const yPos = 70 + (index * 30);
    content += `
      <text x="30" y="${yPos}" class="theme-text text-style" font-size="16">
        ${fact.trim()}
        ${animated === 'true' ? `
          <animate attributeName="opacity" values="0;1" dur="0.8s" begin="${index * 0.3}s" fill="freeze"/>
          <animate attributeName="x" values="10;30" dur="0.8s" begin="${index * 0.3}s" fill="freeze"/>
        ` : ''}
      </text>
    `;
  });
  
  const height = Math.max(200, factList.length * 30 + 100);
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(createSVG(600, height, content, theme));
};