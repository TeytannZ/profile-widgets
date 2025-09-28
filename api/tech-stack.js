module.exports = (req, res) => {
  const { icons = 'html,css,javascript,typescript,react,nextjs,tailwind,nodejs,expressjs,mongodb,postgresql,vscode,git,github' } = req.query;
  
  const iconList = icons.split(',');
  const cols = 4;
  const rows = Math.ceil(iconList.length / cols);
  const width = 700;
  const height = 220 + (rows * 100);
  
  // Beautiful, expressive icons (not exact brand replicas)
  const iconData = {
    html: { 
      color: '#e34f26',
      svg: `<rect x="-12" y="-12" width="24" height="24" rx="2" fill="#e34f26"/>
            <text x="0" y="0" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">&lt;/&gt;</text>
            <text x="0" y="8" text-anchor="middle" fill="#fff" font-size="6">HTML</text>`,
      name: 'HTML'
    },
    css: { 
      color: '#1572b6',
      svg: `<rect x="-12" y="-12" width="24" height="24" rx="2" fill="#1572b6"/>
            <rect x="-8" y="-8" width="16" height="12" rx="1" fill="#fff"/>
            <rect x="-6" y="-6" width="12" height="2" fill="#1572b6"/>
            <rect x="-6" y="-2" width="8" height="1.5" fill="#1572b6"/>
            <rect x="-6" y="1" width="10" height="1.5" fill="#1572b6"/>`,
      name: 'CSS'
    },
    javascript: { 
      color: '#f7df1e',
      svg: `<rect x="-12" y="-12" width="24" height="24" rx="3" fill="#f7df1e"/>
            <text x="0" y="4" text-anchor="middle" fill="#000" font-size="12" font-weight="bold">JS</text>`,
      name: 'JavaScript'
    },
    typescript: { 
      color: '#3178c6',
      svg: `<rect x="-12" y="-12" width="24" height="24" rx="3" fill="#3178c6"/>
            <text x="0" y="4" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">TS</text>`,
      name: 'TypeScript'
    },
    react: { 
      color: '#61dafb',
      svg: `<circle cx="0" cy="0" r="3" fill="#61dafb"/>
            <ellipse cx="0" cy="0" rx="12" ry="4" fill="none" stroke="#61dafb" stroke-width="2"/>
            <ellipse cx="0" cy="0" rx="12" ry="4" fill="none" stroke="#61dafb" stroke-width="2" transform="rotate(60)"/>
            <ellipse cx="0" cy="0" rx="12" ry="4" fill="none" stroke="#61dafb" stroke-width="2" transform="rotate(-60)"/>`,
      name: 'React'
    },
    nextjs: { 
      color: '#000000',
      svg: `<circle cx="0" cy="0" r="12" fill="#000"/>
            <path d="M-6,-6 L6,6 M6,-6 L-6,6" stroke="#fff" stroke-width="2"/>
            <text x="0" y="2" text-anchor="middle" fill="#fff" font-size="6">Next</text>`,
      name: 'Next.js'
    },
    tailwind: { 
      color: '#06b6d4',
      svg: `<path d="M-10,-6 Q0,-10 10,-6 Q0,-2 -10,-6 Z" fill="#06b6d4"/>
            <path d="M-10,2 Q0,-2 10,2 Q0,6 -10,2 Z" fill="#0ea5e9"/>`,
      name: 'Tailwind'
    },
    nodejs: { 
      color: '#339933',
      svg: `<polygon points="0,-12 10,-6 10,6 0,12 -10,6 -10,-6" fill="#339933"/>
            <text x="0" y="2" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">N</text>`,
      name: 'Node.js'
    },
    expressjs: { 
      color: '#ffffff',
      svg: `<rect x="-12" y="-12" width="24" height="24" rx="2" fill="#000"/>
            <text x="0" y="-2" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">E</text>
            <text x="0" y="8" text-anchor="middle" fill="#fff" font-size="6">xpress</text>`,
      name: 'Express'
    },
    mongodb: { 
      color: '#47a248',
      svg: `<ellipse cx="0" cy="0" rx="8" ry="12" fill="#47a248"/>
            <ellipse cx="0" cy="0" rx="4" ry="8" fill="#66cc33"/>
            <text x="0" y="2" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">M</text>`,
      name: 'MongoDB'
    },
    postgresql: { 
      color: '#336791',
      svg: `<circle cx="0" cy="0" r="12" fill="#336791"/>
            <circle cx="0" cy="-2" r="6" fill="#fff"/>
            <text x="0" y="0" text-anchor="middle" fill="#336791" font-size="8" font-weight="bold">PG</text>
            <rect x="-8" y="6" width="16" height="4" rx="2" fill="#fff"/>`,
      name: 'PostgreSQL'
    },
    vscode: { 
      color: '#007acc',
      svg: `<rect x="-10" y="-10" width="20" height="20" rx="2" fill="#007acc"/>
            <rect x="-6" y="-6" width="12" height="12" rx="1" fill="#fff"/>
            <rect x="-4" y="-4" width="8" height="1.5" fill="#007acc"/>
            <rect x="-4" y="-1" width="6" height="1" fill="#007acc"/>
            <rect x="-4" y="1" width="4" height="1" fill="#007acc"/>
            <rect x="-4" y="3" width="7" height="1" fill="#007acc"/>`,
      name: 'VS Code'
    },
    git: { 
      color: '#f05032',
      svg: `<circle cx="0" cy="0" r="12" fill="#f05032"/>
            <circle cx="-4" cy="-2" r="3" fill="#fff"/>
            <circle cx="4" cy="-2" r="3" fill="#fff"/>
            <circle cx="0" cy="4" r="3" fill="#fff"/>
            <path d="M-4,1 L4,1" stroke="#fff" stroke-width="2"/>`,
      name: 'Git'
    },
    github: { 
      color: '#24292f',
      svg: `<circle cx="0" cy="0" r="12" fill="#24292f"/>
            <path d="M0,-8 C-4,-8 -8,-4 -8,0 C-8,3 -6,5.5 -3,6.5 C-2.5,6.6 -2.3,6.3 -2.3,6 V4.5 C-4,5 -4.5,3.5 -4.5,3.5 C-5,2.5 -5.5,2.3 -5.5,2.3 C-6.3,1.8 -5.4,1.8 -5.4,1.8 C-4.5,1.9 -4,2.7 -4,2.7 C-3.2,4 -2,3.7 -2.3,3.5 C-2.2,3 -2,2.7 -1.8,2.5 C-3.3,2.3 -4.9,1.7 -4.9,-0.3 C-4.9,-1 -4.6,-1.5 -4.2,-1.9 C-4.3,-2.1 -4.5,-2.7 -4.1,-3.4 C-4.1,-3.4 -3.5,-3.6 -2.3,-2.7 C-1.9,-2.8 -1.4,-2.9 -1,-2.9 C-0.6,-2.9 -0.1,-2.8 0.3,-2.7 C1.5,-3.6 2.1,-3.4 2.1,-3.4 C2.5,-2.7 2.3,-2.1 2.2,-1.9 C2.6,-1.5 2.9,-1 2.9,-0.3 C2.9,1.7 1.3,2.3 -0.2,2.5 C0,2.7 0.2,3 0.3,3.5 V6 C0.3,6.3 0.5,6.6 1,6.5 C4,5.5 6,3 6,0 C6,-4 2,-8 -2,-8" fill="#fff"/>`,
      name: 'GitHub'
    }
  };
  
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0d1117">
          <animate attributeName="stop-color" values="#0d1117;#161b22;#0d1117" dur="8s" repeatCount="indefinite"/>
        </stop>
        <stop offset="50%" stop-color="#161b22"/>
        <stop offset="100%" stop-color="#21262d">
          <animate attributeName="stop-color" values="#21262d;#30363d;#21262d" dur="6s" repeatCount="indefinite"/>
        </stop>
      </linearGradient>
      
      <linearGradient id="text" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#58a6ff"/>
        <stop offset="50%" stop-color="#ff7b72"/>
        <stop offset="100%" stop-color="#a5f3fc"/>
      </linearGradient>
      
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      
      <pattern id="dots" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
        <circle cx="25" cy="25" r="1" fill="#58a6ff" opacity="0.1">
          <animate attributeName="opacity" values="0.05;0.2;0.05" dur="4s" repeatCount="indefinite"/>
        </circle>
      </pattern>
    </defs>
    
    <rect width="${width}" height="${height}" fill="url(#bg)" rx="25"/>
    <rect width="${width}" height="${height}" fill="url(#dots)" rx="25"/>
    <rect width="${width - 4}" height="${height - 4}" x="2" y="2" fill="none" stroke="url(#text)" stroke-width="2" rx="23" stroke-dasharray="8,4">
      <animate attributeName="stroke-dashoffset" values="0;-24;0" dur="4s" repeatCount="indefinite"/>
    </rect>
    
    <text x="350" y="50" text-anchor="middle" fill="url(#text)" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="800" filter="url(#glow)">
      Tech Stack
      <animateTransform attributeName="transform" type="scale" values="1;1.01;1" dur="4s" repeatCount="indefinite"/>
    </text>
    
    <text x="350" y="80" text-anchor="middle" fill="#8b949e" font-family="system-ui, -apple-system, sans-serif" font-size="16">
      Technologies I'm Learning
    </text>
    
    ${iconList.map((icon, index) => {
      const data = iconData[icon.trim()] || { color: '#8b949e', svg: '<circle cx="0" cy="0" r="8" fill="#8b949e"/>', name: 'Unknown' };
      const row = Math.floor(index / cols);
      const col = index % cols;
      const x = 90 + (col * 140) + ((width - (cols * 140)) / 2);
      const y = 130 + (row * 90);
      
      return `
        <g>
          <circle cx="${x}" cy="${y}" r="30" fill="${data.color}" opacity="0.05">
            <animate attributeName="opacity" values="0.02;0.1;0.02" dur="${3 + (index * 0.2)}s" repeatCount="indefinite"/>
          </circle>
          
          <g transform="translate(${x}, ${y})" filter="url(#glow)">
            ${data.svg}
            <animate attributeName="transform" values="translate(${x}, ${y});translate(${x}, ${y-3});translate(${x}, ${y})" dur="${3 + (index * 0.3)}s" repeatCount="indefinite"/>
          </g>
          
          <text x="${x}" y="${y + 45}" text-anchor="middle" fill="#f0f6fc" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600">
            ${data.name}
          </text>
        </g>
      `;
    }).join('')}
    
    <text x="60" y="${height - 25}" fill="#7d8590" font-family="monospace" font-size="12" opacity="0.7">
      &lt;/skills&gt;
      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite"/>
    </text>
    <text x="${width - 120}" y="${height - 25}" fill="#7d8590" font-family="monospace" font-size="12" opacity="0.6">
      { learning: true }
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite"/>
    </text>
  </svg>`;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate=86400');
  res.send(svg);
