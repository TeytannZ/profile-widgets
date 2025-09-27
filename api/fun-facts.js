module.exports = (req, res) => {
  const { 
    theme = 'holographic', 
    animated = 'false',
    facts = '🌱 Passionate learner;💡 Problem solver;🎨 Creative thinker;📚 Always studying;🚀 Future developer'
  } = req.query;
  
  const themes = {
    holographic: { primary: '#f093fb', secondary: '#f5576c', accent: '#4facfe', bg: '#2d1b69', text: '#ffffff' }
  };
  
  const colors = themes[theme] || themes.holographic;
  const factList = facts.split(';');
  const height = Math.max(250, factList.length * 40 + 120);
  
  const svg = `
    <svg width="650" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="holoGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id="holoBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors.primary};stop-opacity:0.15"/>
          <stop offset="50%" style="stop-color:${colors.secondary};stop-opacity:0.1"/>
          <stop offset="100%" style="stop-color:${colors.accent};stop-opacity:0.15"/>
        </linearGradient>
      </defs>
      
      <rect width="100%" height="100%" fill="${colors.bg}" rx="20"/>
      <rect width="646" height="${height - 4}" x="2" y="2" fill="none" stroke="${colors.primary}" stroke-width="3" rx="18">
        <animate attributeName="stroke" values="${colors.primary};${colors.secondary};${colors.accent};${colors.primary}" dur="8s" repeatCount="indefinite"/>
      </rect>
      <rect width="100%" height="100%" fill="url(#holoBg)" rx="20"/>
      
      <!-- Enhanced title -->
      <text x="325" y="45" text-anchor="middle" fill="${colors.primary}" font-family="monospace" font-size="24" font-weight="bold" filter="url(#holoGlow)">
        🎯 ABOUT ME 🎯
        <animate attributeName="fill" values="${colors.primary};${colors.secondary};${colors.accent};${colors.primary}" dur="5s" repeatCount="indefinite"/>
      </text>
      
      <!-- Holographic scan lines -->
      ${Array.from({length: 8}, (_, i) => `
        <line x1="0" y1="${70 + (i * 20)}" x2="650" y2="${70 + (i * 20)}" stroke="${colors.accent}" stroke-width="0.5" opacity="0.2">
          <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3s" begin="${i * 0.5}s" repeatCount="indefinite"/>
        </line>
      `).join('')}
      
      ${factList.map((fact, index) => {
        const yPos = 90 + (index * 40);
        return `
          <g>
            <!-- Fact container -->
            <rect x="30" y="${yPos - 20}" width="590" height="35" rx="8" fill="none" stroke="${colors.secondary}" stroke-width="1" opacity="0.4"/>
            
            <!-- Fact text with enhanced styling -->
            <text x="50" y="${yPos}" fill="${colors.text}" font-family="monospace" font-size="18" filter="url(#holoGlow)">
              ${fact.trim()}
              ${animated === 'true' ? `
                <animate attributeName="opacity" values="0;1" dur="1s" begin="${index * 0.5}s" fill="freeze"/>
                <animate attributeName="x" values="30;50" dur="1s" begin="${index * 0.5}s" fill="freeze"/>
              ` : ''}
            </text>
            
            <!-- Progress indicator -->
            <rect x="580" y="${yPos - 15}" width="30" height="6" rx="3" fill="${colors.bg}" opacity="0.3"/>
            <rect x="580" y="${yPos - 15}" width="${15 + (index * 3)}" height="6" rx="3" fill="${colors.accent}">
              <animate attributeName="width" values="0;${15 + (index * 3)}" dur="2s" begin="${index * 0.5 + 1}s" fill="freeze"/>
            </rect>
          </g>
        `;
      }).join('')}
      
      <!-- Decorative elements -->
      <text x="50" y="${height - 25}" fill="${colors.accent}" font-family="monospace" font-size="14" opacity="0.7">◇ ◆ ◇</text>
      <text x="550" y="${height - 25}" fill="${colors.secondary}" font-family="monospace" font-size="14" opacity="0.7">◇ ◆ ◇</text>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  res.send(svg);
};
