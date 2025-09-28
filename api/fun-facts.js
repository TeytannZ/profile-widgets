module.exports = (req, res) => {
  const { facts = '🌱 Passionate learner;💡 Problem solver;🎨 Creative thinker;📚 Always studying;🚀 Future developer' } = req.query;
  
  const factList = facts.split(';');
  const height = Math.max(280, factList.length * 40 + 120);
  
  const svg = `<svg width="600" height="${height}" xmlns="http://www.w3.org/2000/svg">
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
        <stop offset="0%" stop-color="#58a6ff"/>
        <stop offset="50%" stop-color="#ff7b72"/>
        <stop offset="100%" stop-color="#a5f3fc"/>
      </linearGradient>
      
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      
      <pattern id="dots" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
        <circle cx="25" cy="25" r="1" fill="#58a6ff" opacity="0.08">
          <animate attributeName="opacity" values="0.05;0.15;0.05" dur="4s" repeatCount="indefinite"/>
        </circle>
      </pattern>
    </defs>
    
    <rect width="600" height="${height}" fill="url(#bg)" rx="25"/>
    <rect width="600" height="${height}" fill="url(#dots)" rx="25"/>
    <rect width="596" height="${height - 4}" x="2" y="2" fill="none" stroke="url(#text)" stroke-width="2" rx="23" stroke-dasharray="7,3">
      <animate attributeName="stroke-dashoffset" values="0;-20;0" dur="4s" repeatCount="indefinite"/>
    </rect>
    
    <!-- Header-style floating particles -->
    <circle cx="80" cy="50" r="2" fill="#58a6ff">
      <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="50;45;50" dur="4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="520" cy="${height - 40}" r="1.5" fill="#a5f3fc">
      <animate attributeName="cx" values="520;525;520" dur="5s" repeatCount="indefinite"/>
    </circle>
    
    <text x="300" y="50" text-anchor="middle" fill="url(#text)" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="800" filter="url(#glow)">
      About Me
      <animateTransform attributeName="transform" type="scale" values="1;1.01;1" dur="4s" repeatCount="indefinite"/>
    </text>
    
    ${factList.map((fact, index) => {
      const yPos = 100 + (index * 40);
      const colors = ['#58a6ff', '#ff7b72', '#a5f3fc', '#79c0ff', '#ffa657'];
      const color = colors[index % colors.length];
      
      return `
        <g>
          <rect x="40" y="${yPos - 18}" width="520" height="32" rx="16" fill="rgba(255,255,255,0.03)" stroke="${color}" stroke-width="1" opacity="0.6">
            <animate attributeName="opacity" values="0;0.6" dur="0.8s" begin="${index * 0.3}s" fill="freeze"/>
            <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="${3 + (index * 0.5)}s" repeatCount="indefinite"/>
          </rect>
          
          <text x="60" y="${yPos}" fill="#f0f6fc" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="500">
            ${fact.trim()}
            <animate attributeName="opacity" values="0;1" dur="0.8s" begin="${index * 0.3 + 0.4}s" fill="freeze"/>
            <animate attributeName="x" values="50;60" dur="0.8s" begin="${index * 0.3 + 0.4}s" fill="freeze"/>
          </text>
        </g>
      `;
    }).join('')}
    
    <text x="60" y="${height - 25}" fill="#7d8590" font-family="monospace" font-size="12" opacity="0.7">
      &lt;/about&gt;
      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite"/>
    </text>
    
    <text x="480" y="${height - 25}" fill="#7d8590" font-family="monospace" font-size="12" opacity="0.6">
      { journey: ongoing }
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite"/>
    </text>
  </svg>`;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate=86400');
  res.send(svg);
};
