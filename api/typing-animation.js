module.exports = (req, res) => {
  const { lines = "console.log('Hello World!');const learning = true;while(learning) { code(); };", theme = 'dark' } = req.query;
  
  const codeLines = lines.split(';').filter(line => line.length > 0);
  const height = Math.max(280, codeLines.length * 35 + 140);
  
  const svg = `
    <svg width="720" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="terminalBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2c3e50;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#34495e;stop-opacity:1" />
        </linearGradient>
        <filter id="terminalGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <!-- Main background -->
      <rect width="100%" height="100%" fill="#1a1a2e" rx="20"/>
      <rect width="716" height="${height - 4}" x="2" y="2" fill="none" stroke="#e94560" stroke-width="2" rx="18"/>
      
      <!-- Terminal window -->
      <rect x="20" y="20" width="680" height="${height - 40}" rx="15" fill="url(#terminalBg)"/>
      
      <!-- Terminal header -->
      <rect x="20" y="20" width="680" height="40" rx="15" fill="#34495e"/>
      <circle cx="45" cy="40" r="6" fill="#e74c3c"/>
      <circle cx="65" cy="40" r="6" fill="#f39c12"/>
      <circle cx="85" cy="40" r="6" fill="#2ecc71"/>
      
      <text x="360" y="45" text-anchor="middle" fill="#ecf0f1" font-family="'SF Pro Display', sans-serif" font-size="14" font-weight="600">
        Terminal - Live Coding Session
      </text>
      
      <!-- Status indicator -->
      <circle cx="650" cy="40" r="4" fill="#2ecc71">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
      </circle>
      <text x="630" y="45" fill="#2ecc71" font-family="'SF Pro Display', sans-serif" font-size="11">LIVE</text>
      
      <!-- Command prompt -->
      <text x="40" y="85" fill="#3498db" font-family="'Fira Code', monospace" font-size="16" font-weight="500" filter="url(#terminalGlow)">
        teytann@dev:~$
      </text>
      
      <!-- Code lines with syntax highlighting -->
      ${codeLines.map((line, i) => {
        const cleanLine = line.replace(/%20/g, ' ').replace(/</g, '&lt;').replace(/>/g, '&gt;').trim();
        const yPos = 115 + (i * 35);
        
        if (cleanLine.includes('console.log')) {
          return `
            <text x="60" y="${yPos}" font-family="'Fira Code', monospace" font-size="15" filter="url(#terminalGlow)">
              <tspan fill="#9b59b6">console</tspan><tspan fill="#ecf0f1">.</tspan><tspan fill="#e74c3c">log</tspan><tspan fill="#ecf0f1">(</tspan><tspan fill="#2ecc71">'Hello World!'</tspan><tspan fill="#ecf0f1">);</tspan>
              <animate attributeName="opacity" values="0;1" dur="0.8s" begin="${i * 1.2}s" fill="freeze"/>
            </text>
          `;
        } else if (cleanLine.includes('const')) {
          return `
            <text x="60" y="${yPos}" font-family="'Fira Code', monospace" font-size="15" filter="url(#terminalGlow)">
              <tspan fill="#e74c3c">const</tspan><tspan fill="#ecf0f1"> learning = </tspan><tspan fill="#f39c12">true</tspan><tspan fill="#ecf0f1">;</tspan>
              <animate attributeName="opacity" values="0;1" dur="0.8s" begin="${i * 1.2}s" fill="freeze"/>
            </text>
          `;
        } else if (cleanLine.includes('while')) {
          return `
            <text x="60" y="${yPos}" font-family="'Fira Code', monospace" font-size="15" filter="url(#terminalGlow)">
              <tspan fill="#e74c3c">while</tspan><tspan fill="#ecf0f1">(</tspan><tspan fill="#3498db">learning</tspan><tspan fill="#ecf0f1">) { </tspan><tspan fill="#9b59b6">code</tspan><tspan fill="#ecf0f1">(); }</tspan>
              <animate attributeName="opacity" values="0;1" dur="0.8s" begin="${i * 1.2}s" fill="freeze"/>
            </text>
          `;
        } else {
          return `
            <text x="60" y="${yPos}" fill="#ecf0f1" font-family="'Fira Code', monospace" font-size="15" filter="url(#terminalGlow)">
              ${cleanLine}
              <animate attributeName="opacity" values="0;1" dur="0.8s" begin="${i * 1.2}s" fill="freeze"/>
            </text>
          `;
        }
      }).join('')}
      
      <!-- Enhanced cursor -->
      <rect x="${70 + (codeLines[codeLines.length - 1]?.length || 0) * 9}" y="${105 + (codeLines.length * 35)}" width="3" height="20" fill="#2ecc71" filter="url(#terminalGlow)">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
        <animate attributeName="fill" values="#2ecc71;#3498db;#2ecc71" dur="3s" repeatCount="indefinite"/>
      </rect>
      
      <!-- Code execution indicator -->
      <text x="40" y="${height - 30}" fill="#95a5a6" font-family="'Fira Code', monospace" font-size="12" opacity="0.7">
        Process finished with exit code 0
        <animate attributeName="opacity" values="0;0.7" dur="1s" begin="${codeLines.length * 1.2 + 2}s" fill="freeze"/>
      </text>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  res.se
