module.exports = (req, res) => {
  const { icons = 'javascript,typescript,html5,css3,react,nodejs,git,github,vscode,mongodb,postgresql', theme = 'neon' } = req.query;
  
  const themes = {
    neon: { primary: '#ff00ff', secondary: '#00ffff', accent: '#ffff00', bg: '#1a0033', text: '#ffffff' }
  };
  
  const colors = themes[theme] || themes.neon;
  const iconList = icons.split(',');
  
  // Enhanced icon representations with better graphics
  const iconMap = {
    javascript: { color: '#f7df1e', text: 'JS', bgColor: '#323330' },
    typescript: { color: '#3178c6', text: 'TS', bgColor: '#ffffff' },
    html5: { color: '#e34f26', text: 'HTML', bgColor: '#ffffff' },
    css3: { color: '#1572b6', text: 'CSS', bgColor: '#ffffff' },
    react: { color: '#61dafb', text: '⚛', bgColor: '#20232a' },
    nodejs: { color: '#339933', text: 'Node', bgColor: '#ffffff' },
    git: { color: '#f05032', text: 'Git', bgColor: '#ffffff' },
    github: { color: '#181717', text: 'Hub', bgColor: '#ffffff' },
    vscode: { color: '#007acc', text: 'Code', bgColor: '#ffffff' },
    mongodb: { color: '#47a248', text: 'Mongo', bgColor: '#ffffff' },
    postgresql: { color: '#336791', text: 'PG', bgColor: '#ffffff' }
  };
  
  const cols = Math.ceil(Math.sqrt(iconList.length));
  const width = Math.max(700, cols * 120 + 100);
  const height = Math.max(350, Math.ceil(iconList.length / cols) * 120 + 180);
  
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="iconGlow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id="bgPattern" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors.primary};stop-opacity:0.1"/>
          <stop offset="50%" style="stop-color:${colors.secondary};stop-opacity:0.05"/>
          <stop offset="100%" style="stop-color:${colors.accent};stop-opacity:0.1"/>
        </linearGradient>
      </defs>
      
      <rect width="100%" height="100%" fill="${colors.bg}" rx="20"/>
      <rect width="100%" height="100%" fill="url(#bgPattern)" rx="20"/>
      <rect width="${width - 4}" height="${height - 4}" x="2" y="2" fill="none" stroke="${colors.primary}" stroke-width="3" rx="18">
        <animate attributeName="stroke" values="${colors.primary};${colors.secondary};${colors.accent};${colors.primary}" dur="6s" repeatCount="indefinite"/>
      </rect>
      
      <!-- Enhanced title with effects -->
      <text x="50%" y="50" text-anchor="middle" fill="${colors.primary}" font-family="monospace" font-size="28" font-weight="bold" filter="url(#iconGlow)">
        🛠 TECH ARSENAL 🛠
        <animate attributeName="fill" values="${colors.primary};${colors.secondary};${colors.accent};${colors.primary}" dur="4s" repeatCount="indefinite"/>
      </text>
      
      <!-- Subtitle -->
      <text x="50%" y="80" text-anchor="middle" fill="${colors.text}" font-family="monospace" font-size="14" opacity="0.8">
        Technologies & Tools I'm Learning
      </text>
      
      ${iconList.map((icon, index) => {
        const iconData = iconMap[icon.trim()] || { color: '#666', text: '?', bgColor: '#333' };
        const row = Math.floor(index / cols);
        const col = index % cols;
        const x = 80 + (col * 120) + ((width - (cols * 120)) / 2);
        const y = 140 + (row * 120);
        
        return `
          <g>
            <!-- Outer glow circle -->
            <circle cx="${x}" cy="${y}" r="45" fill="${iconData.color}" opacity="0.2" filter="url(#iconGlow)">
              <animate attributeName="r" values="45;50;45" dur="${3 + (index * 0.2)}s" repeatCount="indefinite"/>
            </circle>
            
            <!-- Main icon circle -->
            <circle cx="${x}" cy="${y}" r="35" fill="${iconData.bgColor}" stroke="${iconData.color}" stroke-width="3" filter="url(#iconGlow)">
              <animate attributeName="cy" values="${y};${y-8};${y}" dur="${2.5 + (index * 0.3)}s" repeatCount="indefinite"/>
            </circle>
            
            <!-- Icon text/symbol -->
            <text x="${x}" y="${y + 6}" text-anchor="middle" fill="${iconData.color}" font-family="monospace" font-size="16" font-weight="bold">
              ${iconData.text}
            </text>
            
            <!-- Technology name -->
            <text x="${x}" y="${y + 60}" text-anchor="middle" fill="${colors.text}" font-family="monospace" font-size="12" font-weight="bold">
              ${icon.charAt(0).toUpperCase() + icon.slice(1)}
            </text>
            
            <!-- Skill level indicator -->
            <rect x="${x - 20}" y="${y + 70}" width="40" height="4" rx="2" fill="${colors.bg}" opacity="0.5"/>
            <rect x="${x - 20}" y="${y + 70}" width="${Math.random() * 30 + 10}" height="4" rx="2" fill="${colors.accent}">
              <animate attributeName="width" values="10;${Math.random() * 30 + 10};10" dur="${4 + index}s" repeatCount="indefinite"/>
            </rect>
            
            <!-- Hover effect simulation -->
            <circle cx="${x}" cy="${y}" r="38" fill="none" stroke="${colors.primary}" stroke-width="1" opacity="0.3">
              <animate attributeName="opacity" values="0.1;0.5;0.1" dur="${3.5 + (index * 0.4)}s" repeatCount="indefinite"/>
            </circle>
          </g>
        `;
      }).join('')}
      
      <!-- Decorative elements -->
      <text x="50" y="${height - 30}" fill="${colors.accent}" font-family="monospace" font-size="12" opacity="0.6">&lt;dev/&gt;</text>
      <text x="${width - 100}" y="${height - 30}" fill="${colors.secondary}" font-family="monospace" font-size="12" opacity="0.6">{ skills }</text>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  res.send(svg);
};
