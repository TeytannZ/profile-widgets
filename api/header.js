module.exports = (req, res) => {
  const { title = 'Teytann - Developer Profile', subtitle = 'Learning to Code the Future', theme = 'dark', animated = 'true' } = req.query;
  
  const svg = `
    <svg width="800" height="180" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="darkBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1a1a2e;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#16213e;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0f3460;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#e94560" />
          <stop offset="50%" style="stop-color:#f39c12" />
          <stop offset="100%" style="stop-color:#8e44ad" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="strongGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <!-- Background -->
      <rect width="100%" height="100%" fill="url(#darkBg)" rx="25"/>
      
      <!-- Animated border -->
      <rect width="796" height="176" x="2" y="2" fill="none" stroke="url(#textGrad)" stroke-width="3" rx="23">
        ${animated === 'true' ? '<animate attributeName="stroke-width" values="2;5;2" dur="4s" repeatCount="indefinite"/>' : ''}
      </rect>
      
      <!-- Grid pattern background -->
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e94560" stroke-width="0.5" opacity="0.1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" rx="25"/>
      
      <!-- Floating geometric shapes -->
      <g opacity="0.4">
        <polygon points="80,40 100,30 120,40 120,60 100,70 80,60" fill="none" stroke="#f39c12" stroke-width="2">
          <animateTransform attributeName="transform" type="rotate" values="0 100 50;360 100 50" dur="20s" repeatCount="indefinite"/>
        </polygon>
        <circle cx="720" cy="50" r="15" fill="none" stroke="#8e44ad" stroke-width="2">
          <animate attributeName="r" values="15;20;15" dur="6s" repeatCount="indefinite"/>
        </circle>
        <rect x="670" y="130" width="20" height="20" fill="none" stroke="#e94560" stroke-width="2" transform="rotate(45 680 140)">
          <animateTransform attributeName="transform" type="rotate" values="45 680 140;405 680 140" dur="15s" repeatCount="indefinite"/>
        </rect>
      </g>
      
      <!-- Main title with enhanced effects -->
      <text x="50%" y="70" text-anchor="middle" fill="url(#textGrad)" font-family="'Segoe UI', Arial, sans-serif" font-size="38" font-weight="900" filter="url(#strongGlow)">
        ${title.replace(/%20/g, ' ')}
        ${animated === 'true' ? '<animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite"/>' : ''}
      </text>
      
      <!-- Subtitle -->
      <text x="50%" y="105" text-anchor="middle" fill="#bdc3c7" font-family="'Segoe UI', Arial, sans-serif" font-size="20" font-weight="300" filter="url(#glow)" opacity="0.9">
        ${subtitle.replace(/%20/g, ' ')}
        ${animated === 'true' ? '<animate attributeName="opacity" values="0.7;0.9;0.7" dur="4s" repeatCount="indefinite"/>' : ''}
      </text>
      
      <!-- Animated particles -->
      <g>
        <circle cx="150" cy="130" r="3" fill="#e94560" opacity="0.8">
          <animate attributeName="cy" values="130;110;130" dur="4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite"/>
        </circle>
        <circle cx="650" cy="40" r="2" fill="#f39c12" opacity="0.7">
          <animate attributeName="cx" values="650;670;650" dur="5s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="200" cy="35" r="1.5" fill="#8e44ad" opacity="0.6">
          <animate attributeName="r" values="1.5;3;1.5" dur="3s" repeatCount="indefinite"/>
        </circle>
      </g>
      
      <!-- Code elements -->
      <text x="120" y="150" fill="#95a5a6" font-family="'Consolas', monospace" font-size="14" opacity="0.6">
        &lt;developer/&gt;
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
      </text>
      <text x="630" y="150" fill="#95a5a6" font-family="'Consolas', monospace" font-size="14" opacity="0.5">
        { passion: "∞" }
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite" begin="1s"/>
      </text>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  res.send(svg);
};
