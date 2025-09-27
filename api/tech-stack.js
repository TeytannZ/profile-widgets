module.exports = (req, res) => {
  const { icons = 'javascript,typescript,html5,css3,react,nodejs,git,github,vscode,mongodb,postgresql', theme = 'neon' } = req.query;
  
  const themes = {
    neon: { primary: '#ff00ff', secondary: '#00ffff', accent: '#ffff00', bg: '#1a0033' }
  };
  
  const colors = themes[theme] || themes.neon;
  const iconList = icons.split(',');
  
  // Simple icon representations
  const iconMap = {
    javascript: { color: '#f7df1e', text: 'JS' },
    typescript: { color: '#3178c6', text: 'TS' },
    html5: { color: '#e34f26', text: 'HTML' },
    css3: { color: '#1572b6', text: 'CSS' },
    react: { color: '#61dafb', text: 'React' },
    nodejs: { color: '#339933', text: 'Node' },
    git: { color: '#f05032', text: 'Git' },
    github: { color: '#181717', text: 'GitHub' },
    vscode: { color: '#007acc', text: 'Code' },
    mongodb: { color: '#47a248', text: 'Mongo' },
    postgresql: { color: '#336791', text: 'PG' }
  };
  
  const cols = Math.ceil(Math.sqrt(iconList.length));
  const width = Math.max(600, cols * 100 + 100);
  const height = Math.max(300, Math.ceil(iconList.length / cols) * 100 + 150);
  
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${colors.bg}" rx="15"/>
      <rect width="${width - 4}" height="${height - 4}" x="2" y="2" fill="none" stroke="${colors.primary}" stroke-width="2" rx="13"/>
      
      <text x="50%" y="40" text-anchor="middle" fill="${colors.primary}" font-family="monospace" font-size="24" font-weight="bold">
        Tech Arsenal
      </text>
      
      ${iconList.map((icon, index) => {
        const iconData = iconMap[icon.trim()] || { color: '#666', text: '?' };
        const row = Math.floor(index / cols);
        const col = index % cols;
        const x = 80 + (col * 100);
        const y = 100 + (row * 100);
        
        return `
          <g>
            <circle cx="${x}" cy="${y}" r="30" fill="${iconData.color}" opacity="0.8">
              <animate attributeName="cy" values="${y};${y-5};${y}" dur="${2 + (index * 0.3)}s" repeatCount="indefinite"/>
            </circle>
            <text x="${x}" y="${y + 5}" text-anchor="middle" fill="white" font-family="monospace" font-size="12" font-weight="bold">
              ${iconData.text}
            </text>
            <text x="${x}" y="${y + 50}" text-anchor="middle" fill="${colors.secondary}" font-family="monospace" font-size="10">
              ${icon.charAt(0).toUpperCase() + icon.slice(1)}
            </text>
          </g>
        `;
      }).join('')}
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  res.send(svg);
};