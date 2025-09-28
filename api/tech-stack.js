module.exports = (req, res) => {
  const { icons = 'html5,css3,javascript,typescript,react,nextjs,tailwind,nodejs,expressjs,mongodb,postgresql,vscode,git,github' } = req.query;
  
  const iconList = icons.split(',');
  const cols = 4;
  const rows = Math.ceil(iconList.length / cols);
  const width = 700;
  const height = 200 + (rows * 100);
  
  // Accurate brand colors and realistic representations
  const iconData = {
    html5: { 
      color: '#e34f26',
      svg: `<path d="M-12,-15 L12,-15 L9,15 L0,18 L-9,15 Z" fill="#e34f26"/>
            <path d="M0,-12 L0,15 L7,12.5 L9,-12 Z" fill="#f16529"/>
            <path d="M0,-8 L7,-8 L6.5,-4 L0,-4 Z" fill="#fff"/>
            <path d="M0,0 L6,0 L5.5,4 L0,6 Z" fill="#fff"/>`,
      name: 'HTML5'
    },
    css3: { 
      color: '#1572b6',
      svg: `<path d="M-12,-15 L12,-15 L9,15 L0,18 L-9,15 Z" fill="#1572b6"/>
            <path d="M0,-12 L0,15 L7,12.5 L9,-12 Z" fill="#33a9dc"/>
            <path d="M0,-6 L6,-6 L5.5,-3 L0,-3 Z" fill="#fff"/>
            <path d="M0,2 L5,2 L4.5,5 L0,7 Z" fill="#fff"/>`,
      name: 'CSS3'
    },
    javascript: { 
      color: '#f7df1e',
      svg: `<rect x="-15" y="-15" width="30" height="30" rx="3" fill="#f7df1e"/>
            <text x="0" y="5" text-anchor="middle" fill="#000" font-size="14" font-weight="bold">JS</text>`,
      name: 'JavaScript'
    },
    typescript: { 
      color: '#3178c6',
      svg: `<rect x="-15" y="-15" width="30" height="30" rx="3" fill="#3178c6"/>
            <text x="0" y="5" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">TS</text>`,
      name: 'TypeScript'
    },
    react: { 
      color: '#61dafb',
      svg: `<ellipse cx="0" cy="0" rx="20" ry="7" fill="none" stroke="#61dafb" stroke-width="2.5"/>
            <ellipse cx="0" cy="0" rx="20" ry="7" fill="none" stroke="#61dafb" stroke-width="2.5" transform="rotate(60)"/>
            <ellipse cx="0" cy="0" rx="20" ry="7" fill="none" stroke="#61dafb" stroke-width="2.5" transform="rotate(-60)"/>
            <circle cx="0" cy="0" r="4" fill="#61dafb"/>`,
      name: 'React'
    },
    nextjs: { 
      color: '#ffffff',
      svg: `<circle cx="0" cy="0" r="15" fill="#000"/>
            <path d="M-8,-8 L8,8 M8,-8 L-8,8" stroke="#fff" stroke-width="2"/>
            <text x="0" y="3" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">Next</text>`,
      name: 'Next.js'
    },
    tailwind: { 
      color: '#06b6d4',
      svg: `<path d="M-15,-8 Q-5,-12 5,-8 Q15,-4 15,4 Q5,8 -5,4 Q-15,0 -15,-8 Z" fill="#06b6d4"/>
            <path d="M-8,-4 Q-3,-6 2,-4 Q7,-2 7,2 Q2,4 -3,2 Q-8,0 -8,-4 Z" fill="#38bdf8"/>`,
      name: 'Tailwind'
    },
    nodejs: { 
      color: '#339933',
      svg: `<path d="M0,-15 L13,-7.5 L13,7.5 L0,15 L-13,7.5 L-13,-7.5 Z" fill="#339933"/>
            <path d="M0,-12 L10,-6 L10,6 L0,12 L-10,6 L-10,-6 Z" fill="#66cc33"/>
            <path d="M-6,0 L6,0 M0,-4 L0,4" stroke="#fff" stroke-width="1.5"/>`,
      name: 'Node.js'
    },
    expressjs: { 
      color: '#ffffff',
      svg: `<rect x="-15" y="-15" width="30" height="30" rx="3" fill="#000"/>
            <text x="0" y="-2" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">E</text>
            <text x="0" y="10" text-anchor="middle" fill="#fff" font-size="8">xpress</text>`,
      name: 'Express.js'
    },
    mongodb: { 
      color: '#47a248',
      svg: `<path d="M0,-15 C-6,-12 -6,12 0,15 C6,12 6,-12 0,-15 Z" fill="#47a248"/>
            <path d="M0,-12 C-4,-10 -4,10 0,12 C4,10 4,-10 0,-12 Z" fill="#66cc33"/>
            <ellipse cx="0" cy="0" rx="3" ry="8" fill="#47a248"/>`,
      name: 'MongoDB'
    },
    postgresql: { 
      color: '#336791',
      svg: `<ellipse cx="0" cy="0" rx="15" ry="12" fill="#336791"/>
            <ellipse cx="0" cy="-3" rx="8" ry="6" fill="#fff"/>
            <circle cx="-3" cy="-5" r="2" fill="#336791"/>
            <circle cx="3" cy="-5" r="2" fill="#336791"/>
            <path d="M-6,3 L6,3 L4,9 L-4,9 Z" fill="#fff"/>`,
      name: 'PostgreSQL'
    },
    vscode: { 
      color: '#007acc',
      svg: `<rect x="-12" y="-12" width="24" height="24" rx="2" fill="#007acc"/>
            <path d="M-8,-8 L8,-8 L8,8 L-8,8 Z" fill="#fff"/>
            <rect x="-6" y="-6" width="12" height="2" fill="#007acc"/>
            <rect x="-6" y="-2" width="8" height="1.5" fill="#007acc"/>
            <rect x="-6" y="1" width="6" height="1.5" fill="#007acc"/>
            <rect x="-6" y="4" width="10" height="1.5" fill="#007acc"/>`,
      name: 'VS Code'
    },
    git: { 
      color: '#f05032',
      svg: `<circle cx="0" cy="0" r="15" fill="#f05032"/>
            <path d="M-8,-3 L8,-3 L6,6 L-6,6 Z" fill="#fff"/>
            <circle cx="-3" cy="0" r="2.5" fill="#f05032"/>
            <circle cx="3" cy="0" r="2.5" fill="#f05032"/>
            <path d="M-3,2.5 L3,2.5" stroke="#f05032" stroke-width="1.5"/>`,
      name: 'Git'
    },
    github: { 
      color: '#ffffff',
      svg: `<circle cx="0" cy="0" r="15" fill="#24292f"/>
            <path d="M0,-12 C-6.6,-12 -12,-6.6 -12,0 C-12,5.2 -8.4,9.4 -3.6,10.7 C-3,10.8 -2.8,10.4 -2.8,10.1 V8.1 C-5.4,8.7 -6,7 -6,7 C-6.5,5.6 -7.2,5.3 -7.2,5.3 C-8.2,4.7 -7.1,4.7 -7.1,4.7 C-6,4.8 -5.5,5.9 -5.5,5.9 C-4.5,7.6 -2.9,7.1 -2.8,6.9 C-2.7,6.2 -2.4,5.7 -2.1,5.4 C-4.1,5.1 -6.2,4.3 -6.2,0.5 C-6.2,-0.6 -5.8,-1.5 -5.5,-2.1 C-5.6,-2.4 -5.9,-3.2 -5.4,-4.2 C-5.4,-4.2 -4.6,-4.5 -2.8,-3.4 C-2.1,-3.6 -1.4,-3.7 -0.7,-3.7 C0,-3.7 0.7,-3.6 1.4,-3.4 C3.2,-4.5 4,-4.2 4,-4.2 C4.5,-3.2 4.2,-2.4 4.1,-2.1 C4.4,-1.5 4.8,-0.6 4.8,0.5 C4.8,4.3 2.7,5.1 0.7,5.4 C1,5.7 1.4,6.2 1.4,6.9 V10.1 C1.4,10.4 1.6,10.8 2.2,10.7 C7,9.4 10.6,5.2 10.6,0 C10.6,-6.6 5,-12 -1.4,-12" fill="#fff"/>`,
      name: 'GitHub'
    }
  };
  
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="iconGlow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      
      <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0d1117"/>
        <stop offset="100%" stop-color="#161b22"/>
      </linearGradient>
    </defs>
    
    <rect width="${width}" height="${height}" fill="url(#cardBg)" rx="25"/>
    <rect width="${width - 4}" height="${height - 4}" x="2" y="2" fill="none" stroke="#58a6ff" stroke-width="2" rx="23"/>
    
    <!-- Honest title -->
    <text x="350" y="50" text-anchor="middle" fill="#f0f6fc" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="800" filter="url(#iconGlow)">
      Tech Stack
    </text>
    
    <text x="350" y="75" text-anchor="middle" fill="#7d8590" font-family="system-ui, -apple-system, sans-serif" font-size="16">
      Technologies I'm Learning
    </text>
    
    <!-- Realistic tech icons without progress bars -->
    ${iconList.map((icon, index) => {
      const data = iconData[icon.trim()] || { color: '#8b949e', svg: '<circle cx="0" cy="0" r="10" fill="#8b949e"/>', name: 'Unknown' };
      const row = Math.floor(index / cols);
      const col = index % cols;
      const x = 90 + (col * 140) + ((width - (cols * 140)) / 2);
      const y = 140 + (row * 90);
      
      return `
        <g>
          <!-- Subtle glow background -->
          <circle cx="${x}" cy="${y}" r="35" fill="${data.color}" opacity="0.05">
            <animate attributeName="opacity" values="0.02;0.08;0.02" dur="${3 + (index * 0.2)}s" repeatCount="indefinite"/>
          </circle>
          
          <!-- Icon with floating animation -->
          <g transform="translate(${x}, ${y})" filter="url(#iconGlow)">
            ${data.svg}
            <animate attributeName="transform" values="translate(${x}, ${y});translate(${x}, ${y-4});translate(${x}, ${y})" dur="${3 + (index * 0.3)}s" repeatCount="indefinite"/>
          </g>
          
          <!-- Technology name -->
          <text x="${x}" y="${y + 50}" text-anchor="middle" fill="#f0f6fc" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600">
            ${data.name}
          </text>
        </g>
      `;
    }).join('')}
  </svg>`;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate=86400');
  res.send(svg);
};
