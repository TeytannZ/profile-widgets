const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { 
    icons = 'javascript,typescript,html5,css3,react,nodejs,git,github,vscode,mongodb,postgresql', 
    theme = 'neon', 
    style = 'floating',
    animated = 'false'
  } = req.query;
  
  const iconList = icons.split(',');
  
  const iconMap = {
    javascript: { 
      svg: `<rect x="-12" y="-12" width="24" height="24" rx="4" fill="#f7df1e"/>
            <text x="0" y="4" text-anchor="middle" fill="#000000" font-size="10" font-weight="bold">JS</text>`,
      name: 'JavaScript'
    },
    typescript: { 
      svg: `<rect x="-12" y="-12" width="24" height="24" rx="4" fill="#3178c6"/>
            <text x="0" y="4" text-anchor="middle" fill="#ffffff" font-size="10" font-weight="bold">TS</text>`,
      name: 'TypeScript'
    },
    html5: { 
      svg: `<polygon points="-10,-12 10,-12 8,12 -8,12" fill="#e34f26"/>
            <polygon points="-6,-6 6,-6 4,6 -4,6" fill="#ffffff"/>
            <text x="0" y="2" text-anchor="middle" fill="#e34f26" font-size="6" font-weight="bold">HTML</text>`,
      name: 'HTML5'
    },
    css3: { 
      svg: `<polygon points="-10,-12 10,-12 8,12 -8,12" fill="#1572b6"/>
            <polygon points="-6,-6 6,-6 4,6 -4,6" fill="#ffffff"/>
            <text x="0" y="2" text-anchor="middle" fill="#1572b6" font-size="7" font-weight="bold">CSS</text>`,
      name: 'CSS3'
    },
    react: { 
      svg: `<circle cx="0" cy="0" r="12" fill="none" stroke="#61dafb" stroke-width="2"/>
            <ellipse cx="0" cy="0" rx="18" ry="7" fill="none" stroke="#61dafb" stroke-width="2"/>
            <ellipse cx="0" cy="0" rx="18" ry="7" fill="none" stroke="#61dafb" stroke-width="2" transform="rotate(60)"/>
            <ellipse cx="0" cy="0" rx="18" ry="7" fill="none" stroke="#61dafb" stroke-width="2" transform="rotate(-60)"/>
            <circle cx="0" cy="0" r="3" fill="#61dafb"/>`,
      name: 'React'
    },
    nodejs: { 
      svg: `<path d="M-8,-10 L8,-10 L12,0 L8,10 L-8,10 L-12,0 Z" fill="#339933"/>
            <text x="0" y="3" text-anchor="middle" fill="#ffffff" font-size="6" font-weight="bold">Node</text>`,
      name: 'Node.js'
    },
    git: { 
      svg: `<circle cx="0" cy="0" r="12" fill="#f05032"/>
            <path d="M-6,-6 L6,-6 L6,6 L-6,6 Z" fill="#ffffff"/>
            <path d="M-4,-4 L4,-4 L0,4 Z" fill="#f05032"/>`,
      name: 'Git'
    },
    github: { 
      svg: `<circle cx="0" cy="0" r="12" fill="#181717"/>
            <path d="M0,-8 C-4.4,-8 -8,-4.4 -8,0 C-8,3.5 -5.4,6.4 -1.9,7.3 C-1.4,7.4 -1.2,7.1 -1.2,6.8 V5.9 C-3.4,6.5 -3.9,5.2 -3.9,5.2 C-4.3,4.4 -4.9,4.1 -4.9,4.1 C-5.8,3.5 -4.8,3.5 -4.8,3.5 C-3.8,3.6 -3.3,4.5 -3.3,4.5 C-2.5,5.9 -1.3,5.5 -1.2,5.2 C-1.1,4.6 -0.9,4.2 -0.6,4 C-2.3,3.8 -4.1,3 -4.1,0.5 C-4.1,-0.3 -3.8,-1 -3.3,-1.5 C-3.4,-1.7 -3.7,-2.4 -3.2,-3.3 C-3.2,-3.3 -2.5,-3.5 -1.2,-2.6 C-0.7,-2.8 -0.3,-2.8 0,-2.8 C0.3,-2.8 0.7,-2.8 1.2,-2.6 C2.5,-3.5 3.2,-3.3 3.2,-3.3 C3.7,-2.4 3.4,-1.7 3.3,-1.5 C3.8,-1 4.1,-0.3 4.1,0.5 C4.1,3 2.3,3.8 0.6,4 C0.9,4.2 1.1,4.6 1.2,5.2 V6.8 C1.2,7.1 1.4,7.4 1.9,7.3 C5.4,6.4 8,3.5 8,0 C8,-4.4 4.4,-8 0,-8" fill="#ffffff"/>`,
      name: 'GitHub'
    },
    vscode: { 
      svg: `<rect x="-10" y="-10" width="20" height="20" rx="2" fill="#007acc"/>
            <path d="M-6,-6 L6,-6 L6,6 L-6,6 Z" fill="#ffffff"/>
            <path d="M-4,-4 L4,-4 L4,4 L-4,4 Z" fill="#007acc"/>
            <rect x="-3" y="-2" width="6" height="1" fill="#ffffff"/>
            <rect x="-3" y="0" width="4" height="1" fill="#ffffff"/>
            <rect x="-3" y="2" width="2" height="1" fill="#ffffff"/>`,
      name: 'VS Code'
    },
    mongodb: { 
      svg: `<ellipse cx="0" cy="0" rx="10" ry="12" fill="#47a248"/>
            <path d="M0,-8 C-3,-6 -3,6 0,8 C3,6 3,-6 0,-8 Z" fill="#ffffff"/>
            <text x="0" y="2" text-anchor="middle" fill="#47a248" font-size="6" font-weight="bold">M</text>`,
      name: 'MongoDB'
    },
    postgresql: { 
      svg: `<ellipse cx="0" cy="0" rx="12" ry="10" fill="#336791"/>
            <circle cx="0" cy="-3" r="4" fill="#ffffff"/>
            <text x="0" y="-1" text-anchor="middle" fill="#336791" font-size="6" font-weight="bold">P</text>
            <rect x="-8" y="3" width="16" height="4" rx="2" fill="#ffffff"/>`,
      name: 'PostgreSQL'
    }
  };
  
  let content = `
    <text x="50%" y="30" text-anchor="middle" class="theme-primary text-style" font-size="22" font-weight="bold">
      🛠️ Tech Arsenal
    </text>
  `;
  
  const cols = Math.ceil(Math.sqrt(iconList.length));
  const spacing = 80;
  const startX = 50;
  const startY = 70;
  
  iconList.forEach((icon, index) => {
    const iconData = iconMap[icon.trim()];
    if (!iconData) return;
    
    const row = Math.floor(index / cols);
    const col = index % cols;
    const x = startX + (col * spacing) + ((cols * spacing - iconList.length % cols * spacing) / 2) * (row === Math.floor(iconList.length / cols) ? 1 : 0);
    const y = startY + (row * spacing);
    
    content += `
      <g transform="translate(${x}, ${y})">
        <!-- Glow effect background -->
        <circle cx="0" cy="0" r="25" class="gradient-bg" opacity="0.3"/>
        
        <!-- Icon -->
        <g>
          ${iconData.svg}
          ${animated === 'true' ? `
            <animateTransform attributeName="transform" type="translate" 
                            values="0,0;0,-3;0,0" dur="${2 + (index * 0.2)}s" repeatCount="indefinite"/>
          ` : ''}
        </g>
        
        <!-- Label -->
        <text x="0" y="35" text-anchor="middle" class="theme-text text-style" font-size="10" font-weight="bold">
          ${iconData.name}
        </text>
        
        <!-- Hover glow effect -->
        ${style === 'floating' ? `
          <circle cx="0" cy="0" r="30" fill="none" stroke="currentColor" stroke-width="1" opacity="0.2">
            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite"/>
          </circle>
        ` : ''}
      </g>
    `;
  });
  
  const width = Math.max(400, (cols * spacing) + 100);
  const height = Math.max(250, (Math.ceil(iconList.length / cols) * spacing) + 150);
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(createSVG(width, height, content, theme));
};