module.exports = (req, res) => {
  const { 
    message = 'Thanks for stopping by!', 
    theme = 'cyberpunk', 
    animated = 'true'
  } = req.query;
  
  const themes = {
    cyberpunk: { primary: '#00d9ff', secondary: '#ff6b6b', accent: '#39ff14', bg: '#0a0a0a', text: '#ffffff' }
  };
  
  const colors = themes[theme] || themes.cyberpunk;
  
  const svg = `
    <svg width="800" height="160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="ledGlow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id="ledBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors.primary};stop-opacity:0.1"/>
          <stop offset="50%" style="stop-color:${colors.secondary};stop-opacity:0.15"/>
          <stop offset="100%" style="stop-color:${colors.accent};stop-opacity:0.1"/>
        </linearGradient>
      </defs>
      
      <rect width="100%" height="100%" fill="${colors.bg}" rx="25"/>
      <rect width="796" height="156" x="2" y="2" fill="none" stroke="${colors.primary}" stroke-width="3" rx="23">
        <animate attributeName="stroke-width" values="2;4;2" dur="4s" repeatCount="indefinite"/>
      </rect>
      
      <!-- LED sign background with multiple layers -->
      <rect x="25" y="25" width="750" height="110" rx="20" fill="#000000" stroke="${colors.primary}" stroke-width="3"/>
      <rect x="30" y="30" width="740" height="100" rx="15" fill="#0a0a0a" stroke="${colors.secondary}" stroke-width="2" opacity="0.8"/>
      <rect x="35" y="35" width="730" height="90" rx="10" fill="url(#ledBg)"/>
      
      <!-- Enhanced LED border with multiple colors -->
      ${Array.from({length: 30}, (_, i) => {
        const x = 50 + (i * 23);
        const colors_cycle = [colors.primary, colors.secondary, colors.accent];
        const color = colors_cycle[i % 3];
        return `
          <circle cx="${x}" cy="45" r="3" fill="${color}" filter="url(#ledGlow)">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="${i * 0.1}s" repeatCount="indefinite"/>
            <animate attributeName="r" values="2;4;2" dur="3s" begin="${i * 0.1}s" repeatCount="indefinite"/>
          </circle>
          <circle cx="${x}" cy="115" r="3" fill="${color}" filter="url(#ledGlow)">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="${i * 0.1 + 1}s" repeatCount="indefinite"/>
            <animate attributeName="r" values="2;4;2" dur="3s" begin="${i * 0.1 + 1}s" repeatCount="indefinite"/>
          </circle>
        `;
      }).join('')}
      
      <!-- Side LED strips -->
      ${Array.from({length: 10}, (_, i) => {
        const y = 50 + (i * 6);
        return `
          <circle cx="55" cy="${y}" r="2" fill="${colors.accent}" opacity="0.8" filter="url(#ledGlow)">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" begin="${i * 0.2}s" repeatCount="indefinite"/>
          </circle>
          <circle cx="745" cy="${y}" r="2" fill="${colors.accent}" opacity="0.8" filter="url(#ledGlow)">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" begin="${i * 0.2 + 0.9}s" repeatCount="indefinite"/>
          </circle>
        `;
      }).join('')}
      
      <!-- Main message with premium effects -->
      <text x="400" y="85" text-anchor="middle" fill="${colors.primary}" font-family="monospace" font-size="28" font-weight="bold" filter="url(#ledGlow)">
        ${message.replace(/%20/g, ' ')}
        ${animated === 'true' ? `
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="${colors.primary};${colors.secondary};${colors.accent};${colors.primary}" dur="6s" repeatCount="indefinite"/>
        ` : ''}
      </text>
      
      <!-- Enhanced sparkle effects -->
      <g opacity="0.9">
        <text x="150" y="65" fill="${colors.accent}" font-family="monospace" font-size="18" filter="url(#ledGlow)">✨
          <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="1s"/>
          <animateTransform attributeName="transform" type="rotate" values="0 150 65;360 150 65" dur="4s" repeatCount="indefinite"/>
        </text>
        <text x="650" y="70" fill="${colors.secondary}" font-family="monospace" font-size="16" filter="url(#ledGlow)">⭐
          <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="2s"/>
          <animateTransform attributeName="transform" type="scale" values="1;1.5;1" dur="3s" repeatCount="indefinite"/>
        </text>
        <text x="200" y="105" fill="${colors.primary}" font-family="monospace" font-size="14" filter="url(#ledGlow)">💫
          <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" begin="0.5s"/>
        </text>
        <text x="600" y="100" fill="${colors.accent}" font-family="monospace" font-size="20" filter="url(#ledGlow)">🌟
          <animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite" begin="1.5s"/>
        </text>
      </g>
      
      <!-- Scrolling message effect -->
      ${animated === 'true' ? `
        <rect x="25" y="75" width="750" height="2" fill="${colors.primary}" opacity="0.6">
          <animate attributeName="opacity" values="0;0.8;0" dur="4s" repeatCount="indefinite"/>
          <animate attributeName="x" values="25;775;25" dur="4s" repeatCount="indefinite"/>
        </rect>
      ` : ''}
      
      <!-- Corner power indicators -->
      <circle cx="70" cy="50" r="4" fill="${colors.accent}" filter="url(#ledGlow)">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="730" cy="50" r="4" fill="${colors.secondary}" filter="url(#ledGlow)">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="1s"/>
      </circle>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  res.send(svg);
};
