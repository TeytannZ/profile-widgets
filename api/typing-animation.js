module.exports = (req, res) => {
  const { lines = "console.log('Hello World!');const learning = true;while(learning) { code(); };" } = req.query;
  
  const codeLines = lines.split(';').filter(line => line.length > 0);
  const height = Math.max(240, codeLines.length * 35 + 140);
  
  // Calculate total characters for proper cursor timing
  let totalChars = 0;
  const lineData = codeLines.map(line => {
    const clean = line.replace(/%20/g, ' ').trim();
    const start = totalChars;
    totalChars += clean.length;
    return { text: clean, start, length: clean.length };
  });
  
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
    
    <rect x="15" y="15" width="670" height="${height - 30}" rx="15" fill="#0d1117" stroke="#21262d" stroke-width="1"/>
    <rect x="15" y="15" width="670" height="${height - 30}" rx="15" fill="url(#scanlines)"/>
    
    <!-- Terminal header -->
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
    
    <text x="350" y="40" text-anchor="middle" fill="#f0f6fc" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600">
      Live Terminal Session
    </text>
    
    <text x="600" y="40" fill="#3fb950" font-family="monospace" font-size="10" font-weight="600">LIVE</text>
    <circle cx="620" cy="35" r="4" fill="#3fb950">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite"/>
    </circle>
    
    <text x="35" y="80" fill="#58a6ff" font-family="monospace" font-size="16" font-weight="600" filter="url(#termGlow)">
      teytann@dev:~$
    </text>
    
    <!-- Real character-by-character typing animation -->
    ${lineData.map((line, lineIndex) => {
      const yPos = 115 + (lineIndex * 35);
      let content = '';
      
      // Create each character with individual timing
      for (let i = 0; i < line.text.length; i++) {
        const char = line.text[i];
        const delay = (line.start + i) * 0.08; // 80ms per character
        
        // Enhanced color coding for syntax highlighting
        let fill = '#f0f6fc'; // Default bright white
        const lowerText = line.text.toLowerCase();
        
        if (lowerText.includes('console.log')) {
          const consoleStart = lowerText.indexOf('console');
          const logStart = lowerText.indexOf('log');
          const firstQuote = line.text.indexOf("'");
          const lastQuote = line.text.lastIndexOf("'");
          
          if (i >= consoleStart && i < consoleStart + 7) fill = '#ff7b72'; // console - red
          else if (i >= logStart && i < logStart + 3) fill = '#d2a8ff'; // log - purple
          else if (firstQuote !== -1 && i >= firstQuote && i <= lastQuote) fill = '#a5d6ff'; // string - cyan
        } else if (lowerText.includes('const')) {
          const constStart = lowerText.indexOf('const');
          if (i >= constStart && i < constStart + 5) fill = '#ff7b72'; // const - red
          if (lowerText.includes('true') || lowerText.includes('false')) {
            const trueStart = lowerText.indexOf('true');
            const falseStart = lowerText.indexOf('false');
            if ((trueStart !== -1 && i >= trueStart && i < trueStart + 4) ||
                (falseStart !== -1 && i >= falseStart && i < falseStart + 5)) {
              fill = '#79c0ff'; // boolean - blue
            }
          }
        } else if (lowerText.includes('while')) {
          const whileStart = lowerText.indexOf('while');
          const codeStart = lowerText.indexOf('code');
          if (i >= whileStart && i < whileStart + 5) fill = '#ff7b72'; // while - red
          if (codeStart !== -1 && i >= codeStart && i < codeStart + 4) fill = '#d2a8ff'; // function - purple
        }
        
        content += `
          <text x="${50 + (i * 9)}" y="${yPos}" fill="${fill}" font-family="monospace" font-size="15" opacity="0">
            ${char === '<' ? '&lt;' : char === '>' ? '&gt;' : char === '&' ? '&amp;' : char}
            <animate attributeName="opacity" values="0;1" dur="0.05s" begin="${delay}s" fill="freeze"/>
          </text>
        `;
      }
      return content;
    }).join('')}
    
    <!-- Cursor positioned correctly after the last character of the last line -->
    <rect x="${50 + (lineData[lineData.length - 1]?.length || 0) * 9}" y="${100 + (lineData.length * 35)}" width="2" height="18" fill="#3fb950" filter="url(#termGlow)">
      <animate attributeName="opacity" values="0;0;1;0;1" dur="1s" begin="${totalChars * 0.08}s" repeatCount="indefinite"/>
    </rect>
    
    <text x="35" y="${height - 25}" fill="#7d8590" font-family="monospace" font-size="12" opacity="0">
      Process completed successfully
      <animate attributeName="opacity" values="0;0.8" dur="1s" begin="${totalChars * 0.08 + 1.5}s" fill="freeze"/>
    </text>
  </svg>`;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate=86400');
  res.send(svg);
};
