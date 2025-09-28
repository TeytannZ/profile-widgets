module.exports = (req, res) => {
  // Note: For real visitor count, you'd need a database. This shows a realistic demo count.
  const count = Math.floor(Math.random() * 3000) + 1500;
  
  const svg = `<svg width="320" height="120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0d1117">
          <animate attributeName="stop-color" values="#0d1117;#161b22;#0d1117" dur="8s" repeatCount="indefinite"/>
        </stop>
        <stop offset="100%" stop-color="#21262d"/>
      </linearGradient>
      
      <linearGradient id="text" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#58a6ff"/>
        <stop offset="50%" stop-color="#ff7b72"/>
        <stop offset="100%" stop-color="#a5f3fc"/>
      </linearGradient>
      
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <rect width="320" height="120" fill="url(#bg)" rx="20"/>
    <rect width="316" height="116" x="2" y="2" fill="none" stroke="url(#text)" stroke-width="2" rx="18" stroke-dasharray="6,3">
      <animate attributeName="stroke-dashoffset" values="0;-18;0" dur="3s" repeatCount="indefinite"/>
    </rect>
    
    <circle cx="50" cy="40" r="2" fill="#58a6ff">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="270" cy="80" r="1.5" fill="#a5f3fc">
      <animate attributeName="cy" values="80;75;80" dur="3s" repeatCount="indefinite"/>
    </circle>
    
    <text x="160" y="35" text-anchor="middle" fill="#8b949e" font-family="system-ui, -apple-system, sans-serif" font-size="12">
      Profile Views
    </text>
    
    <text x="160" y="60" text-anchor="middle" fill="url(#text)" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="800" filter="url(#glow)">
      ${count.toLocaleString()}
      <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite"/>
    </text>
    
    <text x="160" y="85" text-anchor="middle" fill="#7d8590" font-family="monospace" font-size="10">
      and counting...
    </text>
    
    <text x="50" y="105" fill="#7d8590" font-family="monospace" font-size="10" opacity="0.6">
      { live: true }
    </text>
  </svg>`;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate=86400');
  res.send(svg);
};
