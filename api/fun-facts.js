module.exports = (req, res) => {
  const { 
    theme = 'holographic', 
    animated = 'false',
    facts = '🌱 Passionate learner;💡 Problem solver;🎨 Creative thinker;📚 Always studying;🚀 Future developer'
  } = req.query;
  
  const themes = {
    holographic: { primary: '#f093fb', secondary: '#f5576c', accent: '#4facfe', bg: '#2d1b69', text: '#ffffff' }
  };
  
  const colors = themes[theme] || themes.holographic;
  const factList = facts.split(';');
  const height = Math.max(200, factList.length * 30 + 100);
  
  const svg = `
    <svg width="600" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${colors.bg}" rx="15"/>
      <rect width="596" height="${height - 4}" x="2" y="2" fill="none" stroke="${colors.primary}" stroke-width="2" rx="13"/>
      
      <text x="300" y="35" text-anchor="middle" fill="${colors.primary}" font-family="monospace" font-size="20" font-weight="bold">
        About Me
      </text>
      
      ${factList.map((fact, index) => {
        const yPos = 70 + (index * 30);
        return `
          <text x="30" y="${yPos}" fill="${colors.text}" font-family="monospace" font-size="16">
            ${fact.trim()}
            ${animated === 'true' ? `<animate attributeName="opacity" values="0;1" dur="0.8s" begin="${index * 0.3}s" fill="freeze"/>` : ''}
          </text>
        `;
      }).join('')}
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  res.send(svg);
};