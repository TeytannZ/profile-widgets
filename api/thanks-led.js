module.exports = (req, res) => {
  const { 
    message = 'Thanks for stopping by!', 
    theme = 'cyberpunk', 
    animated = 'true'
  } = req.query;
  
  const themes = {
    cyberpunk: { primary: '#00d9ff', secondary: '#ff6b6b', accent: '#39ff14', bg: '#0a0a0a' }
  };
  
  const colors = themes[theme] || themes.cyberpunk;
  
  const svg = `
    <svg width="800" height="140" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${colors.bg}" rx="15"/>
      <rect width="796" height="136" x="2" y="2" fill="none" stroke="${colors.primary}" stroke-width="2" rx="13"/>
      
      <!-- LED border -->
      <rect x="20" y="20" width="760" height="100" rx="20" fill="#000000" stroke="${colors.primary}" stroke-width="3"/>
      
      <!-- LED lights -->
      ${Array.from({length: 25}, (_, i) => {
        const x = 40 + (i * 28);
        return `
          <circle cx="${x}" cy="35" r="2" fill="${colors.accent}">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="${i * 0.08}s" repeatCount="indefinite"/>
          </circle>
          <circle cx="${x}" cy="105" r="2" fill="${colors.secondary}">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="${i * 0.08 + 1}s" repeatCount="indefinite"/>
          </circle>
        `;
      }).join('')}
      
      <text x="400" y="75" text-anchor="middle" fill="${colors.primary}" font-family="monospace" font-size="24" font-weight="bold">
        ${message.replace(/%20/g, ' ')}
        ${animated === 'true' ? '<animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>' : ''}
      </text>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  res.send(svg);
};