// api/header.js - ENHANCED VERSION
module.exports = (req, res) => {
  const { title = 'Teytann - Developer Profile', subtitle = 'Learning to Code the Future', theme = 'cyberpunk', animated = 'false' } = req.query;
  
  // Enhanced theme colors with more variety
  const themes = {
    cyberpunk: { 
      primary: '#00d9ff', 
      secondary: '#ff6b6b', 
      accent: '#39ff14', 
      bg: '#0a0a0a', 
      text: '#ffffff',
      glow: '#00d9ff40'
    },
    neon: { 
      primary: '#ff00ff', 
      secondary: '#00ffff', 
      accent: '#ffff00', 
      bg: '#1a0033', 
      text: '#ffffff',
      glow: '#ff00ff40'
    },
    matrix: { 
      primary: '#00ff00', 
      secondary: '#008000', 
      accent: '#00ff41', 
      bg: '#000000', 
      text: '#00ff00',
      glow: '#00ff0040'
    }
  };
  
  const colors = themes[theme] || themes.cyberpunk;
  
  const svg = `
    <svg width="800" height="160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Enhanced gradients -->
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors.primary};stop-opacity:0.1" />
          <stop offset="50%" style="stop-color:${colors.secondary};stop-opacity:0.15" />
          <stop offset="100%" style="stop-color:${colors.accent};stop-opacity:0.1" />
        </linearGradient>
        
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:${colors.primary}" />
          <stop offset="50%" style="stop-color:${colors.secondary}" />
          <stop offset="100%" style="stop-color:${colors.accent}" />
        </linearGradient>
        
        <!-- Glow filters -->
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <filter id="strongGlow">
          <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <!-- Animated pattern -->
        <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0,20 L40,20 M20,0 L20,40" stroke="${colors.primary}" stroke-width="0.5" opacity="0.3"/>
          <circle cx="20" cy="20" r="2" fill="${colors.accent}" opacity="0.5"/>
        </pattern>
      </defs>
      
      <!-- Animated background -->
      <rect width="100%" height="100%" fill="${colors.bg}" rx="20"/>
      <rect width="100%" height="100%" fill="url(#bgGradient)" rx="20"/>
      <rect width="100%" height="100%" fill="url(#circuit)" rx="20" opacity="0.3">
        <animate attributeName="opacity" values="0.1;0.4;0.1" dur="8s" repeatCount="indefinite"/>
      </rect>
      
      <!-- Enhanced border with animation -->
      <rect width="796" height="156" x="2" y="2" fill="none" stroke="url(#textGradient)" stroke-width="3" rx="18">
        ${animated === 'true' ? '<animate attributeName="stroke-width" values="2;4;2" dur="4s" repeatCount="indefinite"/>' : ''}
      </rect>
      
      <!-- Floating geometric shapes -->
      <polygon points="50,30 70,20 90,30 90,50 70,60 50,50" fill="none" stroke="${colors.primary}" stroke-width="1" opacity="0.6">
        <animateTransform attributeName="transform" type="rotate" values="0 70 40;360 70 40" dur="20s" repeatCount="indefinite"/>
      </polygon>
      
      <polygon points="720,40 740,30 760,40 760,60 740,70 720,60" fill="none" stroke="${colors.secondary}" stroke-width="1" opacity="0.5">
        <animateTransform attributeName="transform" type="rotate" values="360 740 50;0 740 50" dur="15s" repeatCount="indefinite"/>
      </polygon>
      
      <!-- Enhanced title with multiple effects -->
      <text x="50%" y="60" text-anchor="middle" fill="url(#textGradient)" font-family="monospace, 'Courier New'" font-size="36" font-weight="bold" filter="url(#strongGlow)">
        ${title.replace(/%20/g, ' ')}
        ${animated === 'true' ? '<animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>' : ''}
      </text>
      
      <!-- Subtitle with typewriter effect simulation -->
      <text x="50%" y="90" text-anchor="middle" fill="${colors.secondary}" font-family="monospace" font-size="18" opacity="0.9" filter="url(#glow)">
        ${subtitle.replace(/%20/g, ' ')}
        ${animated === 'true' ? '<animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>' : ''}
      </text>
      
      <!-- Code snippets floating -->
      <text x="100" y="130" fill="${colors.accent}" font-family="monospace" font-size="12" opacity="0.7">&lt;code/&gt;
        <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite"/>
      </text>
      <text x="650" y="130" fill="${colors.primary}" font-family="monospace" font-size="12" opacity="0.6">{ dev }
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" begin="1s"/>
      </text>
      
      <!-- Dynamic particles with trails -->
      <g>
        <circle cx="150" cy="35" r="2" fill="${colors.accent}" opacity="0.8">
          <animate attributeName="cx" values="150;180;150" dur="6s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;1;0" dur="6s" repeatCount="indefinite"/>
        </circle>
        <circle cx="650" cy="45" r="1.5" fill="${colors.primary}" opacity="0.7">
          <animate attributeName="cy" values="45;25;45" dur="5s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite" begin="2s"/>
        </circle>
        <circle cx="200" cy="120" r="1" fill="${colors.secondary}" opacity="0.6">
          <animate attributeName="r" values="1;3;1" dur="4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" begin="3s"/>
        </circle>
        <circle cx="600" cy="110" r="2.5" fill="${colors.accent}" opacity="0.9">
          <animate attributeName="cx" values="600;570;600" dur="7s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.5;1;0.5" dur="7s" repeatCount="indefinite" begin="1.5s"/>
        </circle>
      </g>
      
      <!-- Data stream effect -->
      <g opacity="0.4">
        <text x="30" y="80" fill="${colors.primary}" font-family="monospace" font-size="8">01010011</text>
        <text x="30" y="95" fill="${colors.secondary}" font-family="monospace" font-size="8">11010110</text>
        <text x="30" y="110" fill="${colors.accent}" font-family="monospace" font-size="8">00110101
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite"/>
        </text>
        
        <text x="760" y="80" fill="${colors.accent}" font-family="monospace" font-size="8">10110100</text>
        <text x="760" y="95" fill="${colors.primary}" font-family="monospace" font-size="8">01100011</text>
        <text x="760" y="110" fill="${colors.secondary}" font-family="monospace" font-size="8">11001010
          <animate attributeName="opacity" values="0.1;0.5;0.1" dur="3s" repeatCount="indefinite" begin="1s"/>
        </text>
      </g>
      
      <!-- Scanning line effect -->
      ${animated === 'true' ? `
        <rect x="0" y="75" width="800" height="2" fill="${colors.primary}" opacity="0.3">
          <animate attributeName="opacity" values="0;0.6;0" dur="4s" repeatCount="indefinite"/>
          <animate attributeName="y" values="20;140;20" dur="4s" repeatCount="indefinite"/>
        </rect>
      ` : ''}
      
      <!-- Corner accents -->
      <path d="M20,20 L40,20 M20,20 L20,40" stroke="${colors.primary}" stroke-width="2" opacity="0.8"/>
      <path d="M760,20 L780,20 M780,20 L780,40" stroke="${colors.secondary}" stroke-width="2" opacity="0.8"/>
      <path d="M20,140 L20,120 M20,140 L40,140" stroke="${colors.accent}" stroke-width="2" opacity="0.8"/>
      <path d="M780,140 L780,120 M780,140 L760,140" stroke="${colors.primary}" stroke-width="2" opacity="0.8"/>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  res.send(svg);
};
