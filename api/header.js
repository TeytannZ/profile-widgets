module.exports = (req, res) => {
  const { title = 'Teytann - Developer Profile', subtitle = 'Learning to Code the Future' } = req.query;
  
  const svg = `<svg width="800" height="160" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0d1117"/>
        <stop offset="50%" stop-color="#161b22"/>
        <stop offset="100%" stop-color="#21262d"/>
      </linearGradient>
      <linearGradient id="text" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00d9ff"/>
        <stop offset="50%" stop-color="#ff6b6b"/>
        <stop offset="100%" stop-color="#39ff14"/>
      </linearGradient>
    </defs>
    
    <rect width="800" height="160" fill="url(#bg)" rx="20"/>
    <rect width="796" height="156" x="2" y="2" fill="none" stroke="url(#text)" stroke-width="2" rx="18">
      <animate attributeName="stroke-width" values="2;3;2" dur="4s" repeatCount="indefinite"/>
    </rect>
    
    <text x="400" y="60" text-anchor="middle" fill="url(#text)" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="700">
      ${title.replace(/%20/g, ' ')}
      <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite"/>
    </text>
    
    <text x="400" y="90" text-anchor="middle" fill="#c9d1d9" font-family="system-ui, -apple-system, sans-serif" font-size="16">
      ${subtitle.replace(/%20/g, ' ')}
    </text>
    
    <circle cx="100" cy="130" r="3" fill="#00d9ff">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="700" cy="40" r="2" fill="#ff6b6b">
      <animate attributeName="cy" values="40;35;40" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="150" cy="30" r="1" fill="#39ff14">
      <animate attributeName="r" values="1;2;1" dur="4s" repeatCount="indefinite"/>
    </circle>
    
    <text x="120" y="140" fill="#7d8590" font-family="monospace" font-size="12">&lt;/developer&gt;</text>
    <text x="650" y="140" fill="#7d8590" font-family="monospace" font-size="12">{ code: true }</text>
  </svg>`;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate=86400');
  res.send(svg);
};
