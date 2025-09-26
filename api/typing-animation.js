module.exports = async (req, res) => {
  const { lines = 'Hello World!', theme = 'neon' } = req.query;
  const lineArray = lines.split(';');
  
  const themes = {
    neon: { bg: '#1a0033', primary: '#ff00ff', accent: '#ffff00' },
    cyberpunk: { bg: '#0a0a0a', primary: '#00d9ff', accent: '#39ff14' },
    matrix: { bg: '#000000', primary: '#00ff00', accent: '#00ff41' }
  };
  
  const colors = themes[theme] || themes.neon;
  const height = Math.max(100, lineArray.length * 35 + 40);
  
  let content = '';
  let yPos = 40;
  
  lineArray.forEach((line, index) => {
    const cleanLine = line.replace(/%26/g, '&').trim();
    content += `
      <text x="50%" y="${yPos}" text-anchor="middle" fill="${colors.primary}" font-family="monospace" font-size="18" font-weight="bold">
        ${cleanLine}
        <animate attributeName="opacity" values="0;1;1;0" dur="4s" begin="${index * 4}s" repeatCount="indefinite"/>
      </text>
    `;
    yPos += 30;
  });
  
  const svg = `
    <svg width="600" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <rect width="100%" height="100%" fill="${colors.bg}" rx="15"/>
      <rect width="calc(100% - 4)" height="calc(100% - 4)" x="2" y="2" stroke="${colors.primary}" stroke-width="2" fill="none" rx="13"/>
      
      ${content}
      
      <rect x="51%" y="25" width="2" height="20" fill="${colors.accent}" filter="url(#glow)">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
      </rect>
      
      <text x="30" y="${height - 20}" fill="${colors.accent}" font-family="monospace" font-size="14" opacity="0.7">&lt;/&gt;</text>
      <text x="570" y="${height - 20}" fill="${colors.accent}" font-family="monospace" font-size="14" opacity="0.7">{}</text>
    </svg>
  `;
  
  const base64 = Buffer.from(svg).toString('base64');
  const dataURL = `data:image/svg+xml;base64,${base64}`;
  
  res.redirect(dataURL);
};
