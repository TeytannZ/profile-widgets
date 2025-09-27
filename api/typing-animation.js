module.exports = (req, res) => {
  const { lines = "console.log('Hello World!');const learning = true;while(learning) { code(); };", theme = 'matrix' } = req.query;
  
  const themes = {
    matrix: { primary: '#00ff00', bg: '#000000', text: '#00ff00', secondary: '#008000', accent: '#00ff41' },
    cyberpunk: { primary: '#00d9ff', bg: '#0a0a0a', text: '#ffffff', secondary: '#ff6b6b', accent: '#39ff14' }
  };
  
  const colors = themes[theme] || themes.matrix;
  const codeLines = lines.split(';').filter(line => line.length > 0);
  
  const svg = `
    <svg width="700" height="${Math.max(250, codeLines.length * 40 + 120)}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="screenGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:${colors.primary};stop-opacity:0.1"/>
          <stop offset="50%" style="stop-color:${colors.secondary};stop-opacity:0.05"/>
          <stop offset="100%" style="stop-color:${colors.accent};stop-opacity:0.1"/>
        </linearGradient>
      </defs>
      
      <rect width="100%" height="100%" fill="${colors.bg}" rx="20"/>
      <rect width="696" height="${Math.max(246, codeLines.length * 40 + 116)}" x="2" y="2" fill="none" stroke="${colors.primary}" stroke-width="2" rx="18"/>
      
      <!-- Enhanced terminal window -->
      <rect x="20" y="20" width="660" height="${Math.max(200, codeLines.length * 40 + 80)}" rx="15" fill="#0a0a0a" stroke="${colors.primary}" stroke-width="2"/>
      <rect x="20" y="20" width="660" height="35" rx="15" fill="#1a1a1a"/>
      <rect x="20" y="20" width="660" height="${Math.max(200, codeLines.length * 40 + 80)}" rx="15" fill="url(#screenGradient)"/>
      
      <!-- Terminal buttons with glow -->
      <circle cx="40" cy="37" r="6" fill="#ff5f56" filter="url(#screenGlow)"/>
      <circle cx="60" cy="37" r="6" fill="#ffbd2e" filter="url(#screenGlow)"/>
      <circle cx="80" cy="37" r="6" fill="#27ca3f" filter="url(#screenGlow)"/>
      
      <!-- Enhanced title -->
      <text x="350" y="42" text-anchor="middle" fill="${colors.text}" font-family="monospace" font-size="14" font-weight="bold" filter="url(#screenGlow)">
        LIVE TERMINAL - CODING SESSION
      </text>
      
      <!-- Prompt with enhanced styling -->
      <text x="35" y="75" fill="${colors.primary}" font-family="monospace" font-size="16" font-weight="bold" filter="url(#screenGlow)">
        teytann@dev:~$
      </text>
      
      <!-- Matrix-style falling characters in background -->
      <g opacity="0.2">
        ${Array.from({length: 8}, (_, i) => `
          <text x="${100 + (i * 70)}" y="80" fill="${colors.accent}" font-family="monospace" font-size="10">
            ${Math.random().toString(2).substr(2, 8)}
            <animate attributeName="y" values="60;${Math.max(200, codeLines.length * 40 + 80)};60" dur="${6 + i}s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0;0.3;0" dur="${6 + i}s" repeatCount="indefinite"/>
          </text>
        `).join('')}
      </g>
      
      <!-- Enhanced code lines with syntax highlighting simulation -->
      ${codeLines.map((line, i) => {
        const cleanLine = line.replace(/%20/g, ' ').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const yPos = 105 + (i * 30);
        
        // Simple syntax highlighting
        let coloredLine = cleanLine;
        if (cleanLine.includes('console.log')) {
          return `<text x="50" y="${yPos}" fill="${colors.secondary}" font-family="monospace" font-size="14" filter="url(#screenGlow)">
            console.<tspan fill="${colors.primary}">log</tspan>(<tspan fill="${colors.accent}">'${cleanLine.match(/'([^']*)'/)?.[1] || 'Hello World!'}'</tspan>);
            <animate attributeName="opacity" values="0;1" dur="0.5s" begin="${i * 0.8}s" fill="freeze"/>
          </text>`;
        } else if (cleanLine.includes('const') || cleanLine.includes('let') || cleanLine.includes('var')) {
          return `<text x="50" y="${yPos}" fill="${colors.primary}" font-family="monospace" font-size="14" filter="url(#screenGlow)">
            <tspan fill="${colors.accent}">const</tspan> ${cleanLine.replace('const ', '').replace(' = true', ' = ')}<tspan fill="${colors.secondary}">true</tspan>;
            <animate attributeName="opacity" values="0;1" dur="0.5s" begin="${i * 0.8}s" fill="freeze"/>
          </text>`;
        } else if (cleanLine.includes('while')) {
          return `<text x="50" y="${yPos}" fill="${colors.primary}" font-family="monospace" font-size="14" filter="url(#screenGlow)">
            <tspan fill="${colors.accent}">while</tspan>(learning) { <tspan fill="${colors.secondary}">code</tspan>(); }
            <animate attributeName="opacity" values="0;1" dur="0.5s" begin="${i * 0.8}s" fill="freeze"/>
          </text>`;
        } else {
          return `<text x="50" y="${yPos}" fill="${colors.primary}" font-family="monospace" font-size="14" filter="url(#screenGlow)">
            ${coloredLine}
            <animate attributeName="opacity" values="0;1" dur="0.5s" begin="${i * 0.8}s" fill="freeze"/>
          </text>`;
        }
      }).join('')}
      
      <!-- Enhanced cursor with multiple effects -->
      <rect x="${50 + (codeLines[codeLines.length - 1]?.length || 0) * 9}" y="${90 + (codeLines.length * 30)}" width="3" height="18" fill="${colors.primary}" filter="url(#screenGlow)">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
        <animate attributeName="fill" values="${colors.primary};${colors.accent};${colors.primary}" dur="2s" repeatCount="indefinite"/>
      </rect>
      
      <!-- Status indicators -->
      <text x="620" y="75" fill="${colors.accent}" font-family="monospace" font-size="10" opacity="0.8">ONLINE</text>
      <circle cx="605" cy="71" r="3" fill="${colors.accent}">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
      </circle>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  res.send(svg);
};
