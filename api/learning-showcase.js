const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { username = 'user', theme = 'anime', status = 'currently-learning' } = req.query;
  
  const content = `
    <text x="400" y="35" text-anchor="middle" class="theme-primary text-style" font-size="22" font-weight="bold">
      🌱 Learning Journey
    </text>
    
    <!-- Learning progress bars -->
    <g>
      <text x="50" y="70" class="theme-text text-style" font-size="14">JavaScript</text>
      <rect x="50" y="80" width="300" height="8" rx="4" class="theme-bg" opacity="0.3"/>
      <rect x="50" y="80" width="210" height="8" rx="4" class="theme-primary" opacity="0.8">
        <animate attributeName="width" values="0;210" dur="2s" fill="freeze"/>
      </rect>
      <text x="370" y="87" class="theme-accent text-style" font-size="12">70%</text>
    </g>
    
    <g>
      <text x="50" y="110" class="theme-text text-style" font-size="14">React</text>
      <rect x="50" y="120" width="300" height="8" rx="4" class="theme-bg" opacity="0.3"/>
      <rect x="50" y="120" width="150" height="8" rx="4" class="theme-secondary" opacity="0.8">
        <animate attributeName="width" values="0;150" dur="2.5s" fill="freeze"/>
      </rect>
      <text x="370" y="127" class="theme-accent text-style" font-size="12">50%</text>
    </g>
    
    <g>
      <text x="50" y="150" class="theme-text text-style" font-size="14">Node.js</text>
      <rect x="50" y="160" width="300" height="8" rx="4" class="theme-bg" opacity="0.3"/>
      <rect x="50" y="160" width="120" height="8" rx="4" class="theme-accent" opacity="0.8">
        <animate attributeName="width" values="0;120" dur="3s" fill="freeze"/>
      </rect>
      <text x="370" y="167" class="theme-accent text-style" font-size="12">40%</text>
    </g>
    
    <!-- Currently studying -->
    <rect x="450" y="60" width="300" height="120" rx="15" class="gradient-bg" opacity="0.2"/>
    <text x="600" y="85" text-anchor="middle" class="theme-secondary text-style" font-size="16" font-weight="bold">
      📚 Currently Studying
    </text>
    <text x="470" y="110" class="theme-text text-style" font-size="12">• TypeScript fundamentals</text>
    <text x="470" y="130" class="theme-text text-style" font-size="12">• React hooks & context</text>
    <text x="470" y="150" class="theme-text text-style" font-size="12">• Database design patterns</text>
    <text x="470" y="170" class="theme-text text-style" font-size="12">• API development</text>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(createSVG(800, 200, content, theme));
};