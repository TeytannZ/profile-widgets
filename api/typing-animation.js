module.exports = (req, res) => {
  const { lines = "console.log('Hello World!');const learning = true;while(learning) { code(); };", theme = 'matrix' } = req.query;
  
  const themes = {
    matrix: { primary: '#00ff00', bg: '#000000', text: '#00ff00' },
    cyberpunk: { primary: '#00d9ff', bg: '#0a0a0a', text: '#ffffff' }
  };
  
  const colors = themes[theme] || themes.matrix;
  const codeLines = lines.split(';').filter(line => line.length > 0);
  
  const svg = `
    <svg width="700" height="${Math.max(200, codeLines.length * 40 + 80)}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${colors.bg}" rx="15"/>
      <rect width="696" height="${Math.max(196, codeLines.length * 40 + 76)}" x="2" y="2" fill="none" stroke="${colors.primary}" stroke-width="2" rx="13"/>
      
      <!-- Terminal window -->
      <rect x="20" y="20" width="660" height="${Math.max(160, codeLines.length * 40 + 40)}" rx="10" fill="#0a0a0a" stroke="${colors.primary}" stroke-width="1"/>
      <rect x="20" y="20" width="660" height="25" rx="10" fill="#1a1a1a"/>
      
      <!-- Terminal buttons -->
      <circle cx="35" cy="32" r="5" fill="#ff5f56"/>
      <circle cx="50" cy="32" r="5" fill="#ffbd2e"/>
      <circle cx="65" cy="32" r="5" fill="#27ca3f"/>
      
      <text x="350" y="37" text-anchor="middle" fill="${colors.text}" font-family="monospace" font-size="12">Live Terminal</text>
      
      <!-- Code lines -->
      <text x="35" y="65" fill="${colors.primary}" font-family="monospace" font-size="14">$</text>
      
      ${codeLines.map((line, i) => `
        <text x="50" y="${85 + (i * 25)}" fill="${colors.primary}" font-family="monospace" font-size="13">
          ${line.replace(/%20/g, ' ').replace(/</g, '&lt;').replace(/>/g, '&gt;')}
        </text>
      `).join('')}
      
      <!-- Cursor -->
      <rect x="${50 + (codeLines[codeLines.length - 1]?.length || 0) * 8}" y="${70 + (codeLines.length * 25)}" width="2" height="15" fill="${colors.primary}">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
      </rect>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  res.send(svg);
};