module.exports = (req, res) => {
  const { message = 'Thanks for stopping by!' } = req.query;
  
  const svg = `<svg width="650" height="140" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0d1117">
          <animate attributeName="stop-color" values="#0d1117;#161b22;#0d1117" dur="8s" repeatCount="indefinite"/>
        </stop>
        <stop offset="50%" stop-color="#161b22"/>
        <stop offset="100%" stop-color="#21262d">
          <animate attributeName="stop-color" values="#21262d;#30363d;#21262d" dur="6s" repeatCount="indefinite"/>
        </stop>
      </linearGradient>
      
      <linearGradient id="text" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#58a6ff">
          <animate attributeName="offset" values="0%;20%;0%" dur="5s" repeatCount="indefinite"/>
        </stop>
        <stop offset="50%" stop-color="#ff7b72">
          <animate attributeName="offset" values="50%;70%;50%" dur="4s" repeatCount="indefinite"/>
        </stop>
        <stop offset="100%" stop-color="#a5f3fc">
          <animate attributeName="offset" values="100%;80%;100%" dur="6s" repeatCount="indefinite"/>
        </stop>
      </linearGradient>
      
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      
      <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="1" fill="#58a6ff" opacity="0.1">
          <animate attributeName="opacity" values="0.05;0.15;0.05" dur="3s" repeatCount="indefinite"/>
        </circle>
      </pattern>
    </defs>
    
    <rect width="650" height="140" fill="url(#bg)" rx="20"/>
    <rect width="650" height="140" fill="url(#dots)" rx="20"/>
    <rect width="646" height="136" x="2" y="2" fill="none" stroke="url(#text)" stroke-width="2" rx="18" stroke-dasharray="8,4">
      <animate attributeName="stroke-dashoffset" values="0;-24;0" dur="3s" repeatCount="indefinite"/>
    </rect>
    
    <!-- Floating elements like header -->
    <circle cx="80" cy="40" r="2" fill="#58a6ff">
      <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="40;35;40" dur="4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="570" cy="100" r="1.5" fill="#a5f3fc">
      <animate attributeName="cx" values="570;575;570" dur="5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite"/>
    </circle>
    
    <text x="325" y="75" text-anchor="middle" fill="url(#text)" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="800" filter="url(#glow)">
      ${message.replace(/%20/g, ' ')}
      <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite"/>
      <animateTransform attributeName="transform" type="scale" values="1;1.01;1" dur="4s" repeatCount="indefinite"/>
    </text>
    
    <text x="120" y="110" fill="#7d8590" font-family="monospace" font-size="12" opacity="0.7">
      &lt;/visit&gt;
      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite"/>
    </text>
    
    <text x="530" y="110" fill="#7d8590" font-family="monospace" font-size="12" opacity="0.6">
      { gratitude: true }
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite"/>
    </text>
  </svg>`;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate=86400');
  res.send(svg);
};
