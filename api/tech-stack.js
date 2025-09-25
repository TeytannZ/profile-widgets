
const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { icons = 'javascript,react,nodejs', theme = 'neon', style = 'floating' } = req.query;
  const iconList = icons.split(',');
  
  const iconMap = {
    javascript: { symbol: 'JS', color: '#f7df1e' },
    typescript: { symbol: 'TS', color: '#3178c6' },
    react: { symbol: '⚛️', color: '#61dafb' },
    nodejs: { symbol: 'Node', color: '#339933' },
    html5: { symbol: 'HTML', color: '#e34f26' },
    css3: { symbol: 'CSS', color: '#1572b6' },
    python: { symbol: '🐍', color: '#3776ab' },
    java: { symbol: '☕', color: '#ed8b00' },
    git: { symbol: 'Git', color: '#f05032' },
    github: { symbol: '🐙', color: '#181717' },
    vscode: { symbol: 'VS', color: '#007acc' },
    figma: { symbol: '🎨', color: '#f24e1e' },
    mongodb: { symbol: 'DB', color: '#47a248' },
    postgresql: { symbol: 'PG', color: '#336791' }
  };
  
  let content = '';
  const cols = Math.ceil(Math.sqrt(iconList.length));
  const spacing = 80;
  
  iconList.forEach((icon, index) => {
    const iconData = iconMap[icon.trim()] || { symbol: '?', color: '#666' };
    const row = Math.floor(index / cols);
    const col = index % cols;
    const x = 50 + (col * spacing);
    const y = 50 + (row * spacing);
    
    if (style === 'floating') {
      content += `
        <g>
          <circle cx="${x}" cy="${y}" r="25" fill="${iconData.color}" opacity="0.8">
            <animate attributeName="cy" values="${y};${y-5};${y}" dur="${2 + (index * 0.3)}s" repeatCount="indefinite"/>
          </circle>
          <text x="${x}" y="${y + 5}" text-anchor="middle" class="text-style" fill="white" font-size="12" font-weight="bold">
            ${iconData.symbol}
          </text>
        </g>
      `;
    }
  });
  
  const width = Math.max(400, (cols * spacing) + 100);
  const height = Math.max(200, (Math.ceil(iconList.length / cols) * spacing) + 100);
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(createSVG(width, height, content, theme));
};
