module.exports = (req, res) => {
  const { icons = 'javascript,typescript,html5,css3,react,nodejs,git,github,vscode,mongodb,postgresql', theme = 'dark' } = req.query;
  
  const iconList = icons.split(',');
  
  // Ultra-realistic tech icons with exact brand colors and shapes
  const iconMap = {
    javascript: {
      svg: `<rect x="-18" y="-18" width="36" height="36" rx="4" fill="#f7df1e"/>
            <text x="0" y="7" text-anchor="middle" fill="#000" font-size="18" font-weight="bold" font-family="Arial">JS</text>`,
      name: 'JavaScript'
    },
    typescript: {
      svg: `<rect x="-18" y="-18" width="36" height="36" rx="4" fill="#3178c6"/>
            <text x="0" y="7" text-anchor="middle" fill="#fff" font-size="18" font-weight="bold" font-family="Arial">TS</text>`,
      name: 'TypeScript'
    },
    html5: {
      svg: `<path d="M-16,-18 L16,-18 L13,18 L0,22 L-13,18 Z" fill="#e34f26"/>
            <path d="M0,-14 L0,18 L10,15 L12,-14 Z" fill="#ef652a"/>
            <path d="M0,-10 L9,-10 L8.5,-5 L0,-5 Z" fill="#fff"/>
            <path d="M0,0 L8,0 L7.5,5 L0,7 Z" fill="#fff"/>
            <path d="M0,10 L6.5,10 L6,13 L0,15 Z" fill="#fff"/>`,
      name: 'HTML5'
    },
    css3: {
      svg: `<path d="M-16,-18 L16,-18 L13,18 L0,22 L-13,18 Z" fill="#1572b6"/>
            <path d="M0,-14 L0,18 L10,15 L12,-14 Z" fill="#33a9dc"/>
            <path d="M0,-8 L8,-8 L7.5,-5 L0,-5 Z" fill="#fff"/>
            <path d="M0,0 L7,0 L6.5,3 L0,5 Z" fill="#fff"/>
            <path d="M0,8 L6,8 L5.5,11 L0,13 Z" fill="#fff"/>`,
      name: 'CSS3'
    },
    react: {
      svg: `<g fill="#61dafb">
              <ellipse cx="0" cy="0" rx="25" ry="9" fill="none" stroke="#61dafb" stroke-width="3"/>
              <ellipse cx="0" cy="0" rx="25" ry="9" fill="none" stroke="#61dafb" stroke-width="3" transform="rotate(60)"/>
              <ellipse cx="0" cy="0" rx="25" ry="9" fill="none" stroke="#61dafb" stroke-width="3" transform="rotate(-60)"/>
              <circle cx="0" cy="0" r="5" fill="#61dafb"/>
            </g>`,
      name: 'React'
    },
    nodejs: {
      svg: `<path d="M0,-18 L15,-9 L15,9 L0,18 L-15,9 L-15,-9 Z" fill="#339933"/>
            <path d="M0,-15 L12,-7.5 L12,7.5 L0,15 L-12,7.5 L-12,-7.5 Z" fill="#66cc33"/>
            <path d="M-8,0 L8,0 M0,-6 L0,6" stroke="#fff" stroke-width="2"/>`,
      name: 'Node.js'
    },
    git: {
      svg: `<circle cx="0" cy="0" r="18" fill="#f05032"/>
            <path d="M-12,-4 L12,-4 L8,8 L-8,8 Z" fill="#fff"/>
            <circle cx="-4" cy="0" r="3" fill="#f05032"/>
            <circle cx="4" cy="0" r="3" fill="#f05032"/>
            <path d="M-4,3 L4,3" stroke="#f05032" stroke-width="2"/>`,
      name: 'Git'
    },
    github: {
      svg: `<circle cx="0" cy="0" r="18" fill="#181717"/>
            <path d="M0,-14 C-7.7,-14 -14,-7.7 -14,0 C-14,6 -9.7,10.9 -3.4,12.7 C-2.6,12.8 -2.3,12.3 -2.3,11.8 V9.4 C-6,10.3 -6.8,7.8 -6.8,7.8 C-7.5,6.1 -8.5,5.7 -8.5,5.7 C-10,4.6 -8.4,4.6 -8.4,4.6 C-6.8,4.7 -6,6.4 -6,6.4 C-4.4,9 -1.8,8.2 -2.3,7.8 C-2.1,6.8 -1.7,6.1 -1.2,5.8 C-4,5.5 -7.1,4.2 -7.1,-0.7 C-7.1,-2.4 -6.5,-3.8 -6,-4.8 C-6.2,-5.1 -6.7,-6.3 -5.8,-8 C-5.8,-8 -4.4,-8.4 -2.3,-6.6 C-1.2,-7 0,-7 0,-7 C0,-7 1.2,-7 2.3,-6.6 C4.4,-8.4 5.8,-8 5.8,-8 C6.7,-6.3 6.2,-5.1 6,-4.8 C6.5,-3.8 7.1,-2.4 7.1,-0.7 C7.1,4.2 4,5.5 1.2,5.8 C1.7,6.1 2.1,6.8 2.3,7.8 V11.8 C2.3,12.3 2.6,12.8 3.4,12.7 C9.7,10.9 14,6 14,0 C14,-7.7 7.7,-14 0,-14 Z" fill="#fff"/>`,
      name: 'GitHub'
    },
    vscode: {
      svg: `<rect x="-16" y="-16" width="32" height="32" rx="3" fill="#007acc"/>
            <path d="M-12,-12 L12,-12 L12,12 L-12,12 Z" fill="#fff"/>
            <rect x="-10" y="-8" width="20" height="3" fill="#007acc"/>
            <rect x="-10" y="-3" width="14" height="2" fill="#007acc"/>
            <rect x="-10" y="1" width="10" height="2" fill="#007acc"/>
            <rect x="-10" y="5" width="16" height="2" fill="#007acc"/>
            <rect x="-10" y="9" width="8" height="2" fill="#007acc"/>`,
      name: 'VS Code'
    },
    mongodb: {
      svg: `<path d="M0,-18 C-8,-14 -8,14 0,18 C8,14 8,-14 0,-18 Z" fill="#47a248"/>
            <path d="M0,-15 C-6,-12 -6,12 0,15 C6,12 6,-12 0,-15 Z" fill="#66cc33"/>
            <ellipse cx="0" cy="0" rx="4" ry="10" fill="#47a248"/>
            <path d="M-2,-8 L2,-8 L2,8 L-2,8 Z" fill="#fff"/>`,
      name: 'MongoDB'
    },
    postgresql: {
      svg: `<ellipse cx="0" cy="0" rx="18" ry="15" fill="#336791"/>
            <ellipse cx="0" cy="-4" rx="12" ry="8" fill="#fff"/>
            <path d="M-8,-8 L8,-8 C10,-8 10,-6 8,-6 L-8,-6 C-10,-6 -10,-8 -8,-8 Z" fill="#336791"/>
            <circle cx="-4" cy="-6" r="2" fill="#fff"/>
            <circle cx="4" cy="-6" r="2" fill="#fff"/>
            <path d="M-6,2 L6,2 L4,10 L-4,10 Z" fill="#fff"/>
            <text x="0" y="8" text-anchor="middle" fill="#336791" font-size="8" font-weight="bold">SQL</text>`,
      name: 'PostgreSQL'
    }
  };
  
  const cols = Math.ceil(Math.sqrt(iconList.length));
  const spacing = 120;
  const width = Math.max(750, cols * spacing + 100);
  const height = Math.max(400, Math.ceil(iconList.length / cols) * spacing + 220);
  
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
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1a1a2e;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#16213e;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="100%" height="100%" fill="url(#bgGrad)" rx="25"/>
      <rect width="${width - 4}" height="${height - 4}" x="2" y="2" fill="none" stroke="#e94560" stroke-width="3" rx="23"/>
      
      <!-- Title -->
      <text x="50%" y="60" text-anchor="middle" fill="#ecf0f1" font-family="'Segoe UI', sans-serif" font-size="32" font-weight="700" filter="url(#iconGlow)">
        Tech Stack
      </text>
      
      <text x="50%" y="90" text-anchor="middle" fill="#bdc3c7" font-family="'Segoe UI', sans-serif" font-size="16" opacity="0.8">
        Technologies I'm Learning
      </text>
      
      <!-- Tech Icons Grid -->
      ${iconList.map((icon, index) => {
        const iconData = iconMap[icon.trim()];
        if (!iconData) return '';
        
        const row = Math.floor(index / cols);
        const col = index % cols;
        const x = 100 + (col * spacing) + ((width - (cols * spacing)) / 2);
        const y = 150 + (row * spacing);
        
        return `
          <g transform="translate(${x}, ${y})">
            <!-- Hover circle -->
            <circle cx="0" cy="0" r="45" fill="rgba(236,240,241,0.05)" stroke="#34495e" stroke-width="2">
              <animate attributeName="cy" values="0;-8;0" dur="${3 + (index * 0.2)}s" repeatCount="indefinite"/>
              <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="${4 + (index * 0.3)}s" repeatCount="indefinite"/>
            </circle>
            
            <!-- Icon with glow -->
            <g filter="url(#iconGlow)">
              ${iconData.svg}
              <animateTransform attributeName="transform" type="scale" values="1;1.05;1" dur="${2.5 + (index * 0.1)}s" repeatCount="indefinite"/>
            </g>
            
            <!-- Name -->
            <text x="0" y="65" text-anchor="middle" fill="#ecf0f1" font-family="'Segoe UI', sans-serif" font-size="14" font-weight="600">
              ${iconData.name}
            </text>
            
            <!-- Skill progress -->
            <rect x="-25" y="75" width="50" height="6" rx="3" fill="rgba(52,73,94,0.5)"/>
            <rect x="-25" y="75" width="${20 + Math.random() * 25}" height="6" rx="3" fill="#e94560">
              <animate attributeName="width" values="5;${20 + Math.random() * 25};5" dur="${5 + index}s" repeatCount="indefinite"/>
            </rect>
          </g>
        `;
      }).join('')}
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  res.send(svg);
};
