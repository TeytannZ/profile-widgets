module.exports = (req, res) => {
  const { icons = 'html,css,javascript,typescript,react,nextjs,tailwind,nodejs,expressjs,mongodb,postgresql,vscode,git,github' } = req.query;
  
  const iconList = icons.split(',');
  const cols = 4;
  const rows = Math.ceil(iconList.length / cols);
  const width = 700;
  const height = 220 + (rows * 100);
  
  // Beautiful, expressive icons
  const iconData = {
    html: { 
      color: '#e34f26',
      svg: `<rect x="-12" y="-12" width="24" height="24" rx="2" fill="#e34f26"/>
            <path d="M-8,-8 L-8,8 M-8,-8 L8,-8 M8,-8 L8,8 M8,8 L-8,8" stroke="#fff" stroke-width="2" fill="none"/>
            <text x="0" y="4" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">5</text>`,
      name: 'HTML5'
    },
    css: { 
      color: '#1572b6',
      svg: `<rect x="-12" y="-12" width="24" height="24" rx="2" fill="#1572b6"/>
            <path d="M-6,-8 L-6,8 M-6,-8 L6,-8 M-6,-2 L6,-2 M-6,4 L6,4" stroke="#fff" stroke-width="2" fill="none"/>
            <text x="0" y="12" text-anchor="middle" fill="#fff" font-size="6" font-weight="bold">3</text>`,
      name: 'CSS3'
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
            <circle cx="0" cy="0" r="12" fill="none" stroke="#fff" stroke-width="1.5"/>`,
      name: 'Next.js'
    },
    tailwind: { 
      color: '#06b6d4',
      svg: `<rect x="-12" y="-12" width="24" height="24" rx="2" fill="#06b6d4"/>
            <path d="M-8,-4 Q-4,-8 0,-4 T8,-4" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
            <path d="M-8,4 Q-4,0 0,4 T8,4" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>`,
      name: 'Tailwind'
    },
    nodejs: { 
      color: '#339933',
      svg: `<polygon points="0,-12 10,-6 10,6 0,12 -10,6 -10,-6" fill="#339933"/>
            <polygon points="0,-8 6,-4 6,4 0,8 -6,4 -6,-4" fill="#66cc33"/>
            <text x="0" y="3" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">JS</text>`,
      name: 'Node.js'
    },
    expressjs: { 
      color: '#000000',
      svg: `<rect x="-12" y="-12" width="24" height="24" rx="2" fill="#000"/>
            <text x="0" y="4" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">E</text>
            <path d="M-6,8 L6,8" stroke="#fff" stroke-width="1.5"/>`,
      name: 'Express'
    },
    mongodb: { 
      color: '#47a248',
      svg: `<path d="M-8,-12 Q-10,0 -8,12 L8,12 Q10,0 8,-12 Z" fill="#47a248"/>
            <path d="M-5,-8 Q-6,0 -5,8 L5,8 Q6,0 5,-8 Z" fill="#4db33d"/>
            <ellipse cx="0" cy="0" rx="2.5" ry="6" fill="#5bd95b"/>`,
      name: 'MongoDB'
    },
    postgresql: { 
      color: '#4169e1',
      svg: `<circle cx="0" cy="-1" r="12" fill="#4169e1"/>
            <ellipse cx="0" cy="-1" rx="8" ry="7" fill="#336791"/>
            <path d="M-5,-5 L-5,3 Q-5,5 -2,5 L2,5 Q5,5 5,3 L5,-5" fill="#fff"/>
            <text x="0" y="1" text-anchor="middle" fill="#336791" font-size="7" font-weight="bold">SQL</text>`,
      name: 'PostgreSQL'
    },
    vscode: { 
      color: '#007acc',
      svg: `<rect x="-11" y="-11" width="22" height="22" rx="2" fill="#007acc"/>
            <path d="M6,-8 L-6,0 L6,8 Z" fill="#fff"/>
            <rect x="-8" y="-2" width="10" height="1" fill="#fff" opacity="0.7"/>
            <rect x="-8" y="0" width="8" height="1" fill="#fff" opacity="0.7"/>
            <rect x="-8" y="2" width="6" height="1" fill="#fff" opacity="0.7"/>`,
      name: 'VS Code'
    },
    git: { 
      color: '#f05032',
      svg: `<rect x="-12" y="-12" width="24" height="24" rx="2" fill="#f05032"/>
            <circle cx="-4" cy="-3" r="3" fill="#fff"/>
            <circle cx="4" cy="-3" r="3" fill="#fff"/>
            <circle cx="0" cy="5" r="3" fill="#fff"/>
            <path d="M-4,0 L-2,3 M4,0 L2,3" stroke="#fff" stroke-width="2" stroke-linecap="round"/>`,
      name: 'Git'
    },
    github: { 
      color: '#181717',
      svg: `<circle cx="0" cy="0" r="12" fill="#181717"/>
            <path d="M0,-8 C-4,-8 -8,-4 -8,0 C-8,3 -6,5.5 -3,6.5 C-2.5,6.6 -2.3,6.3 -2.3,6 V4.5 C-4,5 -4.5,3.5 -4.5,3.5 C-5,2.5 -5.5,2.3 -5.5,2.3 C-6.3,1.8 -5.4,1.8 -5.4,1.8 C-4.5,1.9 -4,2.7 -4,2.7 C-3.2,4 -2,3.7 -2.3,3.5 C-2.2,3 -2,2.7 -1.8,2.5 C-3.3,2.3 -4.9,1.7 -4.9,-0.3 C-4.9,-1 -4.6,-1.5 -4.2,-1.9 C-4.3,-2.1 -4.5,-2.7 -4.1,-3.4 C-4.1,-3.4 -3.5,-3.6 -2.3,-2.7 C-1.9,-2.8 -1.4,-2.9 -1,-2.9 C-0.6,-2.9 -0.1,-2.8 0.3,-2.7 C1.5,-3.6 2.1,-3.4 2.1,-3.4 C2.5,-2.7 2.3,-2.1 2.2,-1.9 C2.6,-1.5 2.9,-1 2.9,-0.3 C2.9,1.7 1.3,2.3 -0.2,2.5 C0,2.7 0.2,3 0.3,3.5 V6 C0.3,6.3 0.5,6.6 1,6.5 C4,5.5 6,3 6,0 C6,-4 2,-8 -2,-8" fill="#fff"/>`,
      name: 'GitHub'
    }
  };
  
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1a1a2e"/>
        <stop offset="50%" stop-color="#16213e"/>
        <stop offset="100%" stop-color="#0f3460"/>
      </linearGradient>
      
      <linearGradient id="titleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#e94560"/>
        <stop offset="50%" stop-color="#00d4ff"/>
        <stop offset="100%" stop-color="#533483"/>
      </linearGradient>
      
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <rect width="${width}" height="${height}" fill="url(#bg)" rx="20"/>
    
    <rect width="${width - 6}" height="${height - 6}" x="3" y="3" fill="none" stroke="#e94560" stroke-width="3" rx="17" opacity="0.5">
      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite"/>
    </rect>
    
    <text x="350" y="55" text-anchor="middle" fill="url(#titleGrad)" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="900" filter="url(#glow)">
      Tech Arsenal
    </text>
    
    <text x="350" y="85" text-anchor="middle" fill="#94a3b8" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="500">
      Powered by passion &amp; curiosity
    </text>
    
    ${iconList.map((icon, index) => {
      const data = iconData[icon.trim()] || { color: '#8b949e', svg: '<circle cx="0" cy="0" r="8" fill="#8b949e"/>', name: 'Unknown' };
      const row = Math.floor(index / cols);
      const col = index % cols;
      const x = 90 + (col * 140) + ((width - (cols * 140)) / 2);
      const y = 140 + (row * 90);
      
      return `
        <g>
          <circle cx="${x}" cy="${y}" r="35" fill="${data.color}" opacity="0.08">
            <animate attributeName="opacity" values="0.05;0.12;0.05" dur="3s" repeatCount="indefinite"/>
          </circle>
          
          <circle cx="${x}" cy="${y}" r="32" fill="none" stroke="${data.color}" stroke-width="2" opacity="0.3">
            <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite"/>
          </circle>
          
          <g transform="translate(${x}, ${y})" filter="url(#glow)">
            ${data.svg}
          </g>
          
          <text x="${x}" y="${y + 50}" text-anchor="middle" fill="#e2e8f0" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600">
            ${data.name}
          </text>
        </g>
      `;
    }).join('')}
    
    <line x1="50" y1="${height - 40}" x2="650" y2="${height - 40}" stroke="#334155" stroke-width="1" opacity="0.3"/>
    
    <text x="60" y="${height - 20}" fill="#64748b" font-family="monospace" font-size="11" font-weight="500">
      &lt;building&gt;
    </text>
    
    <text x="${width - 140}" y="${height - 20}" fill="#64748b" font-family="monospace" font-size="11" font-weight="500">
      { status: "learning" }
    </text>
  </svg>`;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate=86400');
  res.send(svg);
};
