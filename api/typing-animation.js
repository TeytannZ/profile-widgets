module.exports = (req, res) => {
  const { lines = "console.log('Hello World!');const learning = true;while(learning) { code(); };" } = req.query;
  
  const codeLines = lines.split(';').filter(line => line.length > 0);
  const height = Math.max(240, codeLines.length * 35 + 140);
  
  const svg = `<svg width="700" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="termBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0d1117"/>
        <stop offset="100%" stop-color="#161b22"/>
      </linearGradient>
      
      <filter id="termGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      
      <pattern id="scanlines" x="0" y="0" width="100%" height="4" patternUnits="userSpaceOnUse">
        <rect width="100%" height="2" fill="none"/>
        <rect width="100%" height="1" y="2" fill="#58a6ff" opacity="0.03"/>
      </pattern>
    </defs>
    
    <rect width="700" height="${height}" fill="url(#termBg)" rx="20"/>
    <rect width="696" height="${height - 4}" x="2" y="2" fill="none" stroke="#58a6ff" stroke-width="2" rx="18">
      <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite"/>
    </rect>
    
    <!-- Terminal window with enhanced styling -->
    <rect x="15" y="15" width="670" height="${height - 30}" rx="15" fill="#0d1117" stroke="#21262d" stroke-width="1"/>
    <rect x="15" y="15" width="670" height="${height - 30}" rx="15" fill="url(#scanlines)"/>
    
    <!-- Terminal header with animations -->
    <rect x="15" y="15" width="670" height="40" rx="15" fill="#161b22"/>
    
    <circle cx="35" cy="35" r="6" fill="#ff5f56">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="55" cy="35" r="6" fill="#ffbd2e">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="0.5s"/>
    </circle>
    <circle cx="75" cy="35" r="6" fill="#27ca3f">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" begin="1s"/>
    </circle>
    
    <text x="350" y="40" text-anchor="middle" fill="#f0f6fc" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600" filter="url(#termGlow)">
      Terminal - Live Coding Session
    </text>
    
    <!-- Status indicators -->
    <circle cx="640" cy="35" r="4" fill="#3fb950">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite"/>
      <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
    </circle>
    <text x="620" y="40" fill="#3fb950" font-family="monospace" font-size="10">LIVE</text>
    
    <!-- Enhanced prompt -->
    <text x="35" y="80" fill="#58a6ff" font-family="monospace" font-size="16" font-weight="600" filter="url(#termGlow)">
      teytann@dev:~$
      <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
    </text>
    
    <!-- Matrix-style background code -->
    <g opacity="0.1">
      ${Array.from({length: 12}, (_, i) => `
        <text x="${100 + (i * 50)}" y="90" fill="#3fb950" font-family="monospace" font-size="10">
          ${Math.random().toString(2).substr(2, 8)}
          <animate attributeName="y" values="70;${height};70" dur="${8 + i}s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;0.3;0" dur="${8 + i}s" repeatCount="indefinite"/>
        </text>
      `).join('')}
    </g>
    
    <!-- Enhanced code lines with advanced syntax highlighting -->
    ${codeLines.map((line, i) => {
      const yPos = 115 + (i * 35);
      const cleanLine = line.replace(/%20/g, ' ').replace(/</g, '&lt;').replace(/>/g, '&gt;').trim();
      
      if (cleanLine.includes('console.log')) {
        return `
          <text x="50" y="${yPos}" font-family="monospace" font-size="15" filter="url(#termGlow)">
            <tspan fill="#d73a49">console</tspan><tspan fill="#f0f6fc">.</tspan><tspan fill="#6f42c1">log</tspan><tspan fill="#f0f6fc">(</tspan><tspan fill="#032f62">'Hello World!'</tspan><tspan fill="#f0f6fc">);</tspan>
            <animate attributeName="opacity" values="0;1" dur="0.8s" begin="${i * 1.2}s" fill="freeze"/>
            <animateTransform attributeName="transform" type="translate" values="-10,0;0,0" dur="0.8s" begin="${i * 1.2}s" fill="freeze"/>
          </text>
        `;
      } else if (cleanLine.includes('const')) {
        return `
          <text x="50" y="${yPos}" font-family="monospace" font-size="15" filter="url(#termGlow)">
            <tspan fill="#d73a49">const</tspan><tspan fill="#f0f6fc"> learning = </tspan><tspan fill="#005cc5">true</tspan><tspan fill="#f0f6fc">;</tspan>
            <animate attributeName="opacity" values="0;1" dur="0.8s" begin="${i * 1.2}s" fill="freeze"/>
            <animateTransform attributeName="transform" type="translate" values="-10,0;0,0" dur="0.8s" begin="${i * 1.2}s" fill="freeze"/>
          </text>
        `;
      } else if (cleanLine.includes('while')) {
        return `
          <text x="50" y="${yPos}" font-family="monospace" font-size="15" filter="url(#termGlow)">
            <tspan fill="#d73a49">while</tspan><tspan fill="#f0f6fc">(</tspan><tspan fill="#005cc5">learning</tspan><tspan fill="#f0f6fc">) { </tspan><tspan fill="#6f42c1">code</tspan><tspan fill="#f0f6fc">(); }</tspan>
            <animate attributeName="opacity" values="0;1" dur="0.8s" begin="${i * 1.2}s" fill="freeze"/>
            <animateTransform attributeName="transform" type="translate" values="-10,0;0,0" dur="0.8s" begin="${i * 1.2}s" fill="freeze"/>
          </text>
        `;
      } else {
        return `
          <text x="50" y="${yPos}" fill="#f0f6fc" font-family="monospace" font-size="15" filter="url(#termGlow)">
            ${cleanLine}
            <animate attributeName="opacity" values="0;1" dur="0.8s" begin="${i * 1.2}s" fill="freeze"/>
            <animateTransform attributeName="transform" type="translate" values="-10,0;0,0" dur="0.8s" begin="${i * 1.2}s" fill="freeze"/>
          </text>
        `;
      }
    }).join('')}
    
    <!-- Enhanced cursor with multiple effects -->
    <rect x="${60 + (codeLines[codeLines.length - 1]?.length || 0) * 9}" y="${105 + (codeLines.length * 35)}" width="3" height="20" fill="#3fb950" filter="url(#termGlow)">
      <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
      <animate attributeName="fill" values="#3fb950;#58a6ff;#3fb950" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="width" values="2;4;2" dur="2s" repeatCount="indefinite"/>
    </rect>
    
    <!-- Process indicator -->
    <text x="35" y="${height - 25}" fill="#7d8590" font-family="monospace" font-size="12">
      Process finished with exit code 0
      <animate attributeName="opacity" values="0;0.8" dur="1s" begin="${codeLines.length * 1.2 + 2}s" fill="freeze"/>
    </text>
  </svg>`;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate=86400');
  res.send(svg);
};
