module.exports = (req, res) => {
  const { title = 'Teytann - Developer Profile', subtitle = 'Learning to Code the Future' } = req.query;
  
  const svg = `<svg width="800" height="180" xmlns="http://www.w3.org/2000/svg">
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
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      
      <pattern id="dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <circle cx="30" cy="30" r="2" fill="#58a6ff" opacity="0.1">
          <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite"/>
          <animate attributeName="r" values="1;3;1" dur="3s" repeatCount="indefinite"/>
        </circle>
      </pattern>
    </defs>
    
    <rect width="800" height="180" fill="url(#bg)" rx="25"/>
    <rect width="800" height="180" fill="url(#dots)" rx="25"/>
    
    <!-- Animated border with wave effect -->
    <rect width="796" height="176" x="2" y="2" fill="none" stroke="url(#text)" stroke-width="3" rx="23" stroke-dasharray="10,5">
      <animate attributeName="stroke-dashoffset" values="0;-30;0" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="stroke-width" values="2;4;2" dur="4s" repeatCount="indefinite"/>
    </rect>
    
    <!-- Floating geometric elements -->
    <g opacity="0.6">
      <polygon points="80,40 100,30 120,40 120,60 100,70 80,60" fill="none" stroke="#58a6ff" stroke-width="2">
        <animateTransform attributeName="transform" type="rotate" values="0 100 50;360 100 50" dur="20s" repeatCount="indefinite"/>
        <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite"/>
      </polygon>
      
      <circle cx="720" cy="50" r="15" fill="none" stroke="#ff7b72" stroke-width="2">
        <animate attributeName="r" values="10;20;10" dur="4s" repeatCount="indefinite"/>
        <animate attributeName="stroke-opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite"/>
      </circle>
      
      <rect x="650" y="130" width="25" height="25" fill="none" stroke="#a5f3fc" stroke-width="2" rx="5">
        <animateTransform attributeName="transform" type="rotate" values="0 662 142;45 662 142;0 662 142" dur="6s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
      </rect>
    </g>
    
    <!-- Enhanced title with multiple effects -->
    <text x="400" y="70" text-anchor="middle" fill="url(#text)" font-family="system-ui, -apple-system, sans-serif" font-size="38" font-weight="800" filter="url(#glow)">
      ${title.replace(/%20/g, ' ')}
      <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite"/>
      <animateTransform attributeName="transform" type="scale" values="1;1.02;1" dur="4s" repeatCount="indefinite"/>
    </text>
    
    <!-- Animated subtitle with typewriter effect simulation -->
    <text x="400" y="105" text-anchor="middle" fill="#8b949e" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="400">
      ${subtitle.replace(/%20/g, ' ')}
      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
    </text>
    
    <!-- Dynamic particle system -->
    <g>
      <circle cx="150" cy="130" r="3" fill="#58a6ff">
        <animate attributeName="cy" values="130;110;130" dur="4s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.4;0.9;0.4" dur="4s" repeatCount="indefinite"/>
        <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite"/>
      </circle>
      
      <circle cx="650" cy="40" r="2" fill="#ff7b72">
        <animate attributeName="cx" values="650;670;650" dur="5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="5s" repeatCount="indefinite"/>
      </circle>
      
      <circle cx="200" cy="35" r="1.5" fill="#a5f3fc">
        <animate attributeName="r" values="1;3;1" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
      </circle>
      
      <circle cx="550" cy="140" r="2.5" fill="#79c0ff">
        <animate attributeName="cy" values="140;120;140" dur="6s" repeatCount="indefinite"/>
        <animate attributeName="cx" values="550;570;550" dur="4s" repeatCount="indefinite"/>
        <animate attributeName="fill" values="#79c0ff;#ff7b72;#79c0ff" dur="5s" repeatCount="indefinite"/>
      </circle>
    </g>
    
    <!-- Code elements with animation -->
    <text x="120" y="155" fill="#7d8590" font-family="monospace" font-size="14" opacity="0.7">
      &lt;developer/&gt;
      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite"/>
      <animateTransform attributeName="transform" type="translate" values="0,0;5,0;0,0" dur="2s" repeatCount="indefinite"/>
    </text>
    
    <text x="630" y="155" fill="#7d8590" font-family="monospace" font-size="14" opacity="0.6">
      { passion: "∞" }
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite"/>
      <animateTransform attributeName="transform" type="translate" values="0,0;-3,0;0,0" dur="3s" repeatCount="indefinite"/>
    </text>
    
    <!-- Scanning line effect -->
    <line x1="0" y1="90" x2="800" y2="90" stroke="#58a6ff" stroke-width="1" opacity="0.3">
      <animate attributeName="opacity" values="0;0.6;0" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="y1" values="20;160;20" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="20;160;20" dur="4s" repeatCount="indefinite"/>
    </line>
  </svg>`;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate=86400');
  res.send(svg);
};
