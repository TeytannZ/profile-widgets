module.exports = (req, res) => {
  const { message = 'Thanks for stopping by!' } = req.query;
  
  const svg = `<svg width="650" height="130" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="ledGlow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      
      <linearGradient id="ledBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0d1117"/>
        <stop offset="100%" stop-color="#161b22"/>
      </linearGradient>
    </defs>
    
    <rect width="650" height="130" fill="url(#ledBg)" rx="20"/>
    <rect width="646" height="126" x="2" y="2" fill="none" stroke="#58a6ff" stroke-width="2" rx="18"/>
    
    <!-- LED display background -->
    <rect x="20" y="20" width="610" height="90" rx="15" fill="#000" stroke="#21262d" stroke-width="1"/>
    
    <!-- LED border lights -->
    ${Array.from({length: 24}, (_, i) => {
      const x = 35 + (i * 24);
      const colors = ['#58a6ff', '#ff7b72', '#3fb950', '#f7df1e'];
      const color = colors[i % 4];
      return `
        <circle cx="${x}" cy="35" r="2.5" fill="${color}" filter="url(#ledGlow)">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="${i * 0.1}s" repeatCount="indefinite"/>
        </circle>
        <circle cx="${x}" cy="95" r="2.5" fill="${color}" filter="url(#ledGlow)">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" begin="${i * 0.1 + 1}s" repeatCount="indefinite"/>
        </circle>
      `;
    }).join('')}
    
    <!-- Main message -->
    <text x="325" y="70" text-anchor="middle" fill="#f0f6fc" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="700" filter="url(#ledGlow)">
      ${message.replace(/%20/g, ' ')}
      <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite"/>
    </text>
    
    <!-- Decorative elements -->
    <text x="120" y="50" fill="#f7df1e" font-size="14">✨
      <animateTransform attributeName="transform" type="rotate" values="0 120 50;360 120 50" dur="4s" repeatCount="indefinite"/>
    </text>
    <text x="530" y="55" fill="#ff7b72" font-size="14">⭐
      <animateTransform attributeName="transform" type="scale" values="1;1.2;1" dur="3s" repeatCount="indefinite"/>
    </text>
    <text x="150" y="85" fill="#3fb950" font-size="12">💫</text>
    <text x="500" y="80" fill="#58a6ff" font-size="16">🌟</text>
  </svg>`;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate=86400');
  res.send(svg);
};
