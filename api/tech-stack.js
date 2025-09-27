// api/tech-stack.js - FIXED WITH REAL ICONS
module.exports = (req, res) => {
  const { icons = 'javascript,typescript,html5,css3,react,nodejs,git,github,vscode,mongodb,postgresql', theme = 'neon' } = req.query;
  
  const themes = {
    neon: { primary: '#ff00ff', secondary: '#00ffff', accent: '#ffff00', bg: '#1a0033', text: '#ffffff' }
  };
  
  const colors = themes[theme] || themes.neon;
  const iconList = icons.split(',');
  
  // Real tech icons with proper SVG paths and colors
  const iconMap = {
    javascript: {
      svg: `<rect x="-15" y="-15" width="30" height="30" rx="3" fill="#f7df1e"/>
            <text x="0" y="6" text-anchor="middle" fill="#000000" font-size="12" font-weight="bold" font-family="monospace">JS</text>`,
      name: 'JavaScript'
    },
    typescript: {
      svg: `<rect x="-15" y="-15" width="30" height="30" rx="3" fill="#3178c6"/>
            <text x="0" y="6" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold" font-family="monospace">TS</text>`,
      name: 'TypeScript'
    },
    html5: {
      svg: `<polygon points="-12,-15 12,-15 9,15 -9,15" fill="#e34f26"/>
            <polygon points="-6,-6 6,-6 4,6 -4,6" fill="#ffffff"/>
            <text x="0" y="0" text-anchor="middle" fill="#e34f26" font-size="7" font-weight="bold">5</text>`,
      name: 'HTML5'
    },
    css3: {
      svg: `<polygon points="-12,-15 12,-15 9,15 -9,15" fill="#1572b6"/>
            <polygon points="-6,-6 6,-6 4,6 -4,6" fill="#ffffff"/>
            <text x="0" y="0" text-anchor="middle" fill="#1572b6" font-size="7" font-weight="bold">3</text>`,
      name: 'CSS3'
    },
    react: {
      svg: `<ellipse cx="0" cy="0" rx="20" ry="7" fill="none" stroke="#61dafb" stroke-width="2"/>
            <ellipse cx="0" cy="0" rx="20" ry="7" fill="none" stroke="#61dafb" stroke-width="2" transform="rotate(60)"/>
            <ellipse cx="0" cy="0" rx="20" ry="7" fill="none" stroke="#61dafb" stroke-width="2" transform="rotate(-60)"/>
            <circle cx="0" cy="0" r="4" fill="#61dafb"/>`,
      name: 'React'
    },
    nodejs: {
      svg: `<path d="M-12,-8 L0,-15 L12,-8 L12,8 L0,15 L-12,8 Z" fill="#339933"/>
            <path d="M-6,-4 L0,-8 L6,-4 L6,4 L0,8 L-6,4 Z" fill="#ffffff"/>
            <circle cx="0" cy="0" r="2" fill="#339933"/>`,
      name: 'Node.js'
    },
    git: {
      svg: `<circle cx="0" cy="0" r="15" fill="#f05032"/>
            <path d="M-8,-2 L8,-2 L6,6 L-6,6 Z" fill="#ffffff"/>
            <path d="M-4,0 L4,0 L2,4 L-2,4 Z" fill="#f05032"/>`,
      name: 'Git'
    },
    github: {
      svg: `<circle cx="0" cy="0" r="15" fill="#181717"/>
            <path d="M0,-10 C-5.5,-10 -10,-5.5 -10,0 C-10,4.3 -6.9,7.9 -2.4,9.1 C-1.8,9.2 -1.5,8.8 -1.5,8.4 V6.7 C-4.3,7.4 -4.9,5.6 -4.9,5.6 C-5.4,4.4 -6.1,4 -6.1,4 C-7.2,3.3 -6,3.3 -6,3.3 C-4.7,3.4 -4.1,4.6 -4.1,4.6 C-3.1,6.4 -1.6,5.9 -1.5,5.6 C-1.4,4.9 -1.1,4.4 -0.8,4.1 C-2.9,3.8 -5.1,2.9 -5.1,0.1 C-5.1,-0.9 -4.7,-1.7 -4.1,-2.3 C-4.2,-2.6 -4.6,-3.6 -4,-4.7 C-4,-4.7 -3.1,-5 -1.5,-3.7 C-0.9,-3.9 -0.4,-4 0,-4 C0.4,-4 0.9,-3.9 1.5,-3.7 C3.1,-5 4,-4.7 4,-4.7 C4.6,-3.6 4.2,-2.6 4.1,-2.3 C4.7,-1.7 5.1,-0.9 5.1,0.1 C5.1,2.9 2.9,3.8 0.8,4.1 C1.1,4.4 1.4,4.9 1.5,5.6 V8.4 C1.5,8.8 1.8,9.2 2.4,9.1 C6.9,7.9 10,4.3 10,0 C10,-5.5 5.5,-10 0,-10" fill="#ffffff"/>`,
      name: 'GitHub'
    },
    vscode: {
      svg: `<rect x="-12" y="-12" width="24" height="24" rx="2" fill="#007acc"/>
            <path d="M-8,-8 L8,-8 L8,8 L-8,8 Z" fill="#ffffff"/>
            <rect x="-6" y="-6" width="12" height="2" fill="#007acc"/>
            <rect x="-6" y="-2" width="8" height="2" fill="#007acc"/>
            <rect x="-6" y="2" width="4" height="2" fill="#007acc"/>`,
      name: 'VS Code'
    },
    mongodb: {
      svg: `<ellipse cx="0" cy="0" rx="12" ry="15" fill="#47a248"/>
            <path d="M0,-12 C-4,-9 -4,9 0,12 C4,9 4,-9 0,-12 Z" fill="#ffffff"/>
            <ellipse cx="0" cy="0" rx="6" ry="8" fill="#47a248"/>`,
      name: 'MongoDB'
    },
    postgresql: {
      svg: `<ellipse cx="0" cy="0" rx="15" ry="12" fill="#336791"/>
            <ellipse cx="0" cy="-3" rx="8" ry="6" fill="#ffffff"/>
            <path d="M-5,-6 L5,-6 C6,-6 6,-4 5,-4 L-5,-4 C-6,-4 -6,-6 -5,-6 Z" fill="#336791"/>
            <rect x="-10" y="4" width="20" height="6" rx="3" fill="#ffffff"/>
            <text x="0" y="8" text-anchor="middle" fill="#336791" font-size="6" font-weight="bold">SQL</text>`,
      name: 'PostgreSQL'
    }
  };
  
  const cols = Math.ceil(Math.sqrt(iconList.length));
  const spacing = 100;
  const width = Math.max(700, cols * spacing + 100);
  const height = Math.max(350, Math.ceil(iconList.length / cols) * spacing + 200);
  
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="iconGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors.primary};stop-opacity:0.1"/>
          <stop offset="50%" style="stop-color:${colors.secondary};stop-opacity:0.08"/>
          <stop offset="100%" style="stop-color:${colors.accent};stop-opacity:0.1"/>
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="100%" height="100%" fill="${colors.bg}" rx="20"/>
      <rect width="100%" height="100%" fill="url(#bgGradient)" rx="20"/>
      <rect width="${width - 4}" height="${height - 4}" x="2" y="2" fill="none" stroke="${colors.primary}" stroke-width="3" rx="18"/>
      
      <!-- Title -->
      <text x="50%" y="50" text-anchor="middle" fill="${colors.primary}" font-family="monospace" font-size="26" font-weight="bold" filter="url(#iconGlow)">
        🛠 TECH ARSENAL
      </text>
      
      <text x="50%" y="80" text-anchor="middle" fill="${colors.text}" font-family="monospace" font-size="14" opacity="0.8">
        Technologies I'm Learning
      </text>
      
      <!-- Tech Icons -->
      ${iconList.map((icon, index) => {
        const iconData = iconMap[icon.trim()];
        if (!iconData) return '';
        
        const row = Math.floor(index / cols);
        const col = index % cols;
        const x = 100 + (col * spacing) + ((width - (cols * spacing)) / 2);
        const y = 140 + (row * spacing);
        
        return `
          <g transform="translate(${x}, ${y})">
            <!-- Background circle -->
            <circle cx="0" cy="0" r="35" fill="rgba(255,255,255,0.1)" stroke="${colors.secondary}" stroke-width="2" opacity="0.5">
              <animate attributeName="cy" values="0;-5;0" dur="${2.5 + (index * 0.3)}s" repeatCount="indefinite"/>
            </circle>
            
            <!-- Icon -->
            <g filter="url(#iconGlow)">
              ${iconData.svg}
            </g>
            
            <!-- Name -->
            <text x="0" y="50" text-anchor="middle" fill="${colors.text}" font-family="monospace" font-size="12" font-weight="bold">
              ${iconData.name}
            </text>
            
            <!-- Learning progress bar -->
            <rect x="-20" y="60" width="40" height="4" rx="2" fill="rgba(255,255,255,0.2)"/>
            <rect x="-20" y="60" width="${15 + Math.random() * 20}" height="4" rx="2" fill="${colors.accent}">
              <animate attributeName="width" values="5;${15 + Math.random() * 20};5" dur="${4 + index}s" repeatCount="indefinite"/>
            </rect>
          </g>
        `;
      }).join('')}
      
      <!-- Footer -->
      <text x="50" y="${height - 30}" fill="${colors.accent}" font-family="monospace" font-size="14" opacity="0.7">&lt;/dev&gt;</text>
      <text x="${width - 100}" y="${height - 30}" fill="${colors.secondary}" font-family="monospace" font-size="14" opacity="0.7">{ code }</text>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  res.send(svg);
};
