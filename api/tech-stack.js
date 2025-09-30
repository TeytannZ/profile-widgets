module.exports = (req, res) => {
  const { icons = 'html,css,javascript,typescript,react,nextjs,nodejs,tailwind,expressjs,mongodb,postgresql,vscode,git,github' } = req.query;
  
  const iconList = icons.split(',');
  const cols = 7;
  const rows = Math.ceil(iconList.length / cols);
  const width = 800;
  const height = 180 + (rows * 90);
  
  // Clean, descriptive icons
  const iconData = {
    html: { 
      color: '#e34f26',
      svg: `<rect x="-14" y="-14" width="28" height="28" rx="3" fill="#e34f26"/>
            <path d="M-8,-8 L-8,8 M-8,-8 L8,-8 M8,-8 L8,8 M8,8 L-8,8" stroke="#fff" stroke-width="2.5" fill="none"/>
            <text x="0" y="5" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">5</text>`,
      name: 'HTML5'
    },
    css: { 
      color: '#1572b6',
      svg: `<rect x="-14" y="-14" width="28" height="28" rx="3" fill="#1572b6"/>
            <path d="M-6,-8 L-6,8 M-6,-8 L6,-8 M-6,-2 L6,-2 M-6,4 L6,4" stroke="#fff" stroke-width="2.5" fill="none"/>
            <text x="0" y="14" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">3</text>`,
      name: 'CSS3'
    },
    javascript: { 
      color: '#f7df1e',
      svg: `<rect x="-14" y="-14" width="28" height="28" rx="3" fill="#f7df1e"/>
            <text x="0" y="6" text-anchor="middle" fill="#000" font-size="18" font-weight="bold">JS</text>`,
      name: 'JavaScript'
    },
    typescript: { 
      color: '#3178c6',
      svg: `<rect x="-14" y="-14" width="28" height="28" rx="3" fill="#3178c6"/>
            <text x="0" y="6" text-anchor="middle" fill="#fff" font-size="18" font-weight="bold">TS</text>`,
      name: 'TypeScript'
    },
    react: { 
      color: '#61dafb',
      svg: `<circle cx="0" cy="0" r="4" fill="#61dafb"/>
            <ellipse cx="0" cy="0" rx="14" ry="5" fill="none" stroke="#61dafb" stroke-width="2.5"/>
            <ellipse cx="0" cy="0" rx="14" ry="5" fill="none" stroke="#61dafb" stroke-width="2.5" transform="rotate(60)"/>
            <ellipse cx="0" cy="0" rx="14" ry="5" fill="none" stroke="#61dafb" stroke-width="2.5" transform="rotate(-60)"/>`,
      name: 'React'
    },
    nextjs: { 
      color: '#000000',
      svg: `<circle cx="0" cy="0" r="14" fill="#000"/>
            <path d="M-8,-8 L8,8 M-8,8 L8,-8" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="0" cy="0" r="14" fill="none" stroke="#fff" stroke-width="2"/>`,
      name: 'Next.js'
    },
    nodejs: { 
      color: '#339933',
      svg: `<path d="M0,-14 L12,-7 L12,7 L0,14 L-12,7 L-12,-7 Z" fill="#339933"/>
            <path d="M0,-10 L8,-5 L8,5 L0,10 L-8,5 L-8,-5 Z" fill="#66cc33"/>
            <text x="0" y="4" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">JS</text>`,
      name: 'Node.js'
    },
    tailwind: { 
      color: '#06b6d4',
      svg: `<rect x="-14" y="-14" width="28" height="28" rx="3" fill="#06b6d4"/>
            <path d="M-10,-4 Q-5,-8 0,-4 T10,-4" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M-10,4 Q-5,0 0,4 T10,4" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`,
      name: 'Tailwind'
    },
    expressjs: { 
      color: '#000000',
      svg: `<rect x="-14" y="-14" width="28" height="28" rx="3" fill="#000"/>
            <text x="0" y="6" text-anchor="middle" fill="#fff" font-size="18" font-weight="bold">E</text>
            <path d="M-8,10 L8,10" stroke="#fff" stroke-width="2"/>`,
      name: 'Express'
    },
    mongodb: { 
      color: '#47a248',
      svg: `<path d="M-10,-12 Q-12,0 -10,12 L10,12 Q12,0 10,-12 Z" fill="#47a248"/>
            <path d="M-6,-8 Q-7,0 -6,8 L6,8 Q7,0 6,-8 Z" fill="#4db33d"/>
            <ellipse cx="0" cy="0" rx="3" ry="8" fill="#5bd95b"/>`,
      name: 'MongoDB'
    },
    postgresql: { 
      color: '#4169e1',
      svg: `<circle cx="0" cy="-2" r="14" fill="#4169e1"/>
            <ellipse cx="0" cy="-2" rx="10" ry="8" fill="#336791"/>
            <path d="M-6,-6 L-6,2 Q-6,6 -2,6 L2,6 Q6,6 6,2 L6,-6" fill="#fff"/>
            <text x="0" y="0" text-anchor="middle" fill="#336791" font-size="9" font-weight="bold">SQL</text>`,
      name: 'PostgreSQL'
    },
    vscode: { 
      color: '#007acc',
      svg: `<rect x="-13" y="-13" width="26" height="26" rx="2" fill="#007acc"/>
            <path d="M8,-10 L-8,0 L8,10 Z" fill="#fff"/>
            <rect x="-10" y="-3" width="12" height="1.5" fill="#fff" opacity="0.7"/>
            <rect x="-10" y="0" width="10" height="1.5" fill="#fff" opacity="0.7"/>
            <rect x="-10" y="3" width="8" height="1.5" fill="#fff" opacity="0.7"/>`,
      name: 'VS Code'
    },
    git: { 
      color: '#f05032',
      svg: `<rect x="-14" y="-14" width="28" height="28" rx="3" fill="#f05032"/>
            <circle cx="-5" cy="-3" r="3.5" fill="#fff"/>
            <circle cx="5" cy="-3" r="3.5" fill="#fff"/>
            <circle cx="0" cy="5" r="3.5" fill="#fff"/>
            <path d="M-5,0 L-2,3 M5,0 L2,3" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`,
      name: 'Git'
    },
    github: { 
      color: '#181717',
      svg: `<circle cx="0" cy="0" r="14" fill="#181717"/>
            <path d="M0,-9 C-5,-9 -9,-5 -9,0 C-9,4 -6,7 -3,8 C-2.5,8.1 -2.5,7.7 -2.5,7.4 L-2.5,6 C-5,6.6 -5.5,4.5 -5.5,4.5 C-6,3.5 -6.7,3.2 -6.7,3.2 C-7.5,2.7 -6.6,2.7 -6.6,2.7 C-5.7,2.8 -5.2,3.6 -5.2,3.6 C-4.4,5 -3,4.6 -2.5,4.4 C-2.4,3.8 -2.1,3.4 -1.8,3.2 C-4,3 -6.2,2.1 -6.2,-0.5 C-6.2,-1.5 -5.8,-2.3 -5.2,-2.9 C-5.3,-3.1 -5.6,-4 -5.1,-5.2 C-5.1,-5.2 -4.3,-5.4 -2.5,-4 C-1.8,-4.2 -1,-4.3 -0.2,-4.3 C0.6,-4.3 1.4,-4.2 2.1,-4 C3.9,-5.4 4.7,-5.2 4.7,-5.2 C5.2,-4 4.9,-3.1 4.8,-2.9 C5.4,-2.3 5.8,-1.5 5.8,-0.5 C5.8,2.1 3.6,3 1.4,3.2 C1.8,3.5 2.1,4.1 2.1,5 L2.1,7.4 C2.1,7.7 2.1,8.1 2.6,8 C5.6,7 8.6,4 8.6,0 C9,-5 5,-9 0,-9" fill="#fff"/>`,
      name: 'GitHub'
    }
  };
  
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0d1117"/>
        <stop offset="50%" stop-color="#161b22"/>
        <stop offset="100%" stop-color="#21262d"/>
      </linearGradient>
      
      <linearGradient id="border" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#30363d"/>
        <stop offset="50%" stop-color="#484f58"/>
        <stop offset="100%" stop-color="#30363d"/>
      </linearGradient>
      
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      
      <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#30363d" stroke-width="0.5" opacity="0.3"/>
      </pattern>
    </defs>
    
    <rect width="${width}" height="${height}" fill="url(#bg)" rx="20"/>
    <rect width="${width}" height="${height}" fill="url(#grid)" rx="20"/>
    <rect width="${width - 6}" height="${height - 6}" x="3" y="3" fill="none" stroke="url(#border)" stroke-width="3" rx="17"/>
    
    <text x="${width/2}" y="50" text-anchor="middle" fill="#f0f6fc" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="800">
      My Tech Stack
    </text>
    
    <text x="${width/2}" y="78" text-anchor="middle" fill="#8b949e" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="500">
      Tools & Technologies I Use
    </text>
    
    ${iconList.map((icon, index) => {
      const data = iconData[icon.trim()] || { 
        color: '#8b949e', 
        svg: '<circle cx="0" cy="0" r="10" fill="#8b949e"/><text x="0" y="3" text-anchor="middle" fill="#fff" font-size="8">?</text>', 
        name: icon.trim() 
      };
      const row = Math.floor(index / cols);
      const col = index % cols;
      const x = 60 + (col * 105);
      const y = 130 + (row * 85);
      
      return `
        <g opacity="0">
          <animate attributeName="opacity" from="0" to="1" begin="${index * 0.1}s" dur="0.5s" fill="freeze"/>
          
          <circle cx="${x}" cy="${y}" r="32" fill="${data.color}" opacity="0.08"/>
          <circle cx="${x}" cy="${y}" r="28" fill="none" stroke="${data.color}" stroke-width="1.5" opacity="0.2"/>
          
          <g transform="translate(${x}, ${y})" filter="url(#glow)">
            ${data.svg}
          </g>
          
          <text x="${x}" y="${y + 46}" text-anchor="middle" fill="#c9d1d9" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600">
            ${data.name}
          </text>
        </g>
      `;
    }).join('')}
    
    <g opacity="0.6">
      <text x="40" y="${height - 22}" fill="#6e7681" font-family="'Courier New', monospace" font-size="11">
        &lt;/stack&gt;
      </text>
      <text x="${width - 140}" y="${height - 22}" fill="#6e7681" font-family="'Courier New', monospace" font-size="11">
        { version: "2024" }
      </text>
    </g>
  </svg>`;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  res.send(svg);
};
