module.exports = (req, res) => {
  const count = Math.floor(Math.random() * 5000) + 2500;
  
  const svg = `<svg width="320" height="110" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="counterBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0d1117"/>
        <stop offset="100%" stop-color="#161b22"/>
      </linearGradient>
      
      <filter id="counterGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <rect width="320" height="110" fill="url(#counterBg)" rx="20"/>
    <rect width="316" height="106" x="2" y="2" fill="none" stroke="#58a6ff" stroke-width="2" rx="18"/>
    
    <!-- Digital display background -->
    <rect x="15" y="15" width="290" height="80" rx="12" fill="#000" stroke="#21262d" stroke-width="1"/>
    
    <!-- Display scanlines -->
    ${Array.from({length: 15}, (_, i) => `
      <line x1="20" y1="${20 + (i * 4)}" x2="300" y2="${20 + (i * 4)}" stroke="#58a6ff" stroke-width="0.5" opacity="0.05"/>
    `).join('')}
    
    <!-- Eye icon -->
    <text x="40" y="50" fill="#58a6ff" font-size="20" filter="url(#counterGlow)">👁️
      <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="2s" repeatCount="indefinite"/>
    </text>
    
    <!-- Label -->
    <text x="80" y="40" fill="#7d8590" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600">
      Profile Views
    </text>
    
    <!-- Counter with digital effect -->
    <text x="80" y="65" fill="#58a6ff" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="800" filter="url(#counterGlow)">
      ${count.toLocaleString()}
      <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite"/>
    </text>
    
    <!-- Status indicator -->
    <circle cx="270" cy="35" r="3" fill="#3fb950">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
    </circle>
    <text x="245" y="40" fill="#3fb950" font-family="monospace" font-size="10">LIVE</text>
    
    <!-- Activity line -->
    <rect x="80" y="75" width="180" height="2" rx="1" fill="#21262d"/>
    <rect x="80" y="75" width="120" height="2" rx="1" fill="#58a6ff">
      <animate attributeName="width" values="0;120;0" dur="4s" repeatCount="indefinite"/>
    </rect>
  </svg>`;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate=86400');
  res.send(svg);
};
