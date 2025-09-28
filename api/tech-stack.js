module.exports = (req, res) => {
  const { icons = 'javascript,typescript,html5,css3,react,nodejs,git,github,vscode,mongodb,postgresql' } = req.query;
  
  const iconList = icons.split(',');
  const cols = 4;
  const rows = Math.ceil(iconList.length / cols);
  const width = 650;
  const height = 220 + (rows * 90);
  
  const iconData = {
    javascript: { color: '#f7df1e', bg: '#323330', symbol: 'JS', name: 'JavaScript' },
    typescript: { color: '#3178c6', bg: '#ffffff', symbol: 'TS', name: 'TypeScript' },
    html5: { color: '#e34f26', bg: '#ffffff', symbol: '5', name: 'HTML5' },
    css3: { color: '#1572b6', bg: '#ffffff', symbol: '3', name: 'CSS3' },
    react: { color: '#61dafb', bg: '#20232a', symbol: '⚛', name: 'React' },
    nodejs: { color: '#339933', bg: '#ffffff', symbol: 'N', name: 'Node.js' },
    git: { color: '#f05032', bg: '#ffffff', symbol: 'Git', name: 'Git' },
    github: { color: '#ffffff', bg: '#24292f', symbol: 'Hub', name: 'GitHub' },
    vscode: { color: '#007acc', bg: '#ffffff', symbol: 'VS', name: 'VS Code' },
    mongodb: { color: '#47a248', bg: '#ffffff', symbol: 'M', name: 'MongoDB' },
    postgresql: { color: '#336791', bg: '#ffffff', symbol: 'PG', name: 'PostgreSQL' }
  };
  
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="iconGlow">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      
      <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0d1117"/>
        <stop offset="100%" stop-color="#161b22"/>
      </linearGradient>
      
      <pattern id="hexPattern" x="0" y="0" width="40" height="35" patternUnits="userSpaceOnUse">
        <polygon points="20,1 37,10 37,26 20,35 3,26 3,10" fill="none" stroke="#21262d" stroke-width="0.5" opacity="0.3"/>
      </pattern>
    </defs>
    
    <rect width="${width}" height="${height}" fill="url(#cardBg)" rx="25"/>
    <rect width="${width}" height="${height}" fill="url(#hexPattern)" rx="25"/>
    <rect width="${width - 4}" height="${height - 4}" x="2" y="2" fill="none" stroke="#58a6ff" stroke-width="2" rx="23">
      <animate attributeName="stroke-dasharray" values="0,1000;50,950;0,1000" dur="6s" repeatCount="indefinite"/>
    </rect>
    
    <!-- Enhanced title with floating effect -->
    <text x="325" y="50" text-anchor="middle" fill="#f0f6fc" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="800" filter="url(#iconGlow)">
      Tech Arsenal
      <animateTransform attributeName="transform" type="translate" values="0,0;0,-2;0,0" dur="4s" repeatCount="indefinite"/>
    </text>
    
    <text x="325" y="75" text-anchor="middle" fill="#7d8590" font-family="system-ui, -apple-system, sans-serif" font-size="16">
      Technologies I'm Mastering
      <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/>
    </text>
    
    <!-- Tech icons with enhanced animations -->
    ${iconList.map((icon, index) => {
      const data = iconData[icon.trim()] || { color: '#8b949e', bg: '#21262d', symbol: '?', name: 'Unknown' };
      const row = Math.floor(index / cols);
      const col = index % cols;
      const x = 80 + (col * 130) + ((width - (cols * 130)) / 2);
      const y = 140 + (row * 90);
      
      return `
        <g>
          <!-- Animated background glow -->
          <circle cx="${x}" cy="${y}" r="40" fill="${data.color}" opacity="0.05">
            <animate attributeName="r" values="35;45;35" dur="${3 + (index * 0.2)}s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.02;0.08;0.02" dur="${2 + (index * 0.3)}s" repeatCount="indefinite"/>
          </circle>
          
          <!-- Main icon circle with floating animation -->
          <circle cx="${x}" cy="${y}" r="30" fill="${data.bg}" stroke="${data.color}" stroke-width="3" filter="url(#iconGlow)">
            <animate attributeName="cy" values="${y};${y-6};${y}" dur="${2.5 + (index * 0.3)}s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="${2 + (index * 0.2)}s" repeatCount="indefinite"/>
            <animateTransform attributeName="transform" type="rotate" values="0 ${x} ${y};5 ${x} ${y};0 ${x} ${y}" dur="${4 + index}s" repeatCount="indefinite"/>
          </circle>
          
          <!-- Enhanced icon symbols -->
          <text x="${x}" y="${y + 6}" text-anchor="middle" fill="${data.color}" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="700" filter="url(#iconGlow)">
            ${data.symbol}
            <animate attributeName="opacity" values="0.8;1;0.8" dur="${3 + (index * 0.1)}s" repeatCount="indefinite"/>
          </text>
          
          <!-- Technology name with slide effect -->
          <text x="${x}" y="${y + 50}" text-anchor="middle" fill="#f0f6fc" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600">
            ${data.name}
            <animate attributeName="opacity" values="0.7;1;0.7" dur="${4 + (index * 0.2)}s" repeatCount="indefinite"/>
          </text>
          
          <!-- Skill progress with wave animation -->
          <rect x="${x - 25}" y="${y + 60}" width="50" height="6" rx="3" fill="#21262d"/>
          <rect x="${x - 25}" y="${y + 60}" width="${20 + Math.random() * 25}" height="6" rx="3" fill="${data.color}">
            <animate attributeName="width" values="10;${20 + Math.random() * 25};10" dur="${5 + index}s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;1;0.6" dur="${3 + (index * 0.4)}s" repeatCount="indefinite"/>
          </rect>
          
          <!-- Orbiting particles -->
          <circle cx="${x + 25}" cy="${y - 25}" r="2" fill="${data.color}" opacity="0.7">
            <animateTransform attributeName="transform" type="rotate" values="0 ${x} ${y};360 ${x} ${y}" dur="${6 + (index * 0.5)}s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
          </circle>
        </g>
      `;
    }).join('')}
    
    <!-- Floating code elements -->
    <text x="50" y="${height - 30}" fill="#58a6ff" font-family="monospace" font-size="14" opacity="0.6">
      &lt;/skills&gt;
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
      <animateTransform attributeName="transform" type="translate" values="0,0;10,0;0,0" dur="4s" repeatCount="indefinite"/>
    </text>
    
    <text x="${width - 120}" y="${height - 30}" fill="#ff7b72" font-family="monospace" font-size="14" opacity="0.6">
      { learning: true }
      <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite"/>
      <animateTransform attributeName="transform" type="translate" values="0,0;-8,0;0,0" dur="5s" repeatCount="indefinite"/>
    </text>
  </svg>`;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate=86400');
  res.send(svg);
};
