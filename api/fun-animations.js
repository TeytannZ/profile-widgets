
const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { theme = 'anime', type = 'coding' } = req.query;
  
  const content = `
    <text x="400" y="40" text-anchor="middle" class="theme-primary text-style" font-size="22" font-weight="bold">
      🎨 Coding in Progress... 🎨
    </text>
    
    <!-- Animated coding scene -->
    <rect x="100" y="60" width="600" height="300" rx="20" class="theme-bg" stroke="currentColor" stroke-width="2" opacity="0.8"/>
    
    <!-- Screen -->
    <rect x="120" y="80" width="560" height="200" rx="10" fill="#000000"/>
    
    <!-- Code lines -->
    <text x="140" y="110" class="theme-accent text-style" font-size="12" font-family="monospace">const developer = {</text>
    <text x="160" y="130" class="theme-primary text-style" font-size="12" font-family="monospace">name: "Teytann",</text>
    <text x="160" y="150" class="theme-secondary text-style" font-size="12" font-family="monospace">skills: ["JS", "React", "Node"],</text>
    <text x="160" y="170" class="theme-accent text-style" font-size="12" font-family="monospace">passion: "Infinite",</text>
    <text x="160" y="190" class="theme-primary text-style" font-size="12" font-family="monospace">status: "Always Learning"</text>
    <text x="140" y="210" class="theme-accent text-style" font-size="12" font-family="monospace">};</text>
    
    <!-- Blinking cursor -->
    <rect x="180" y="200" width="8" height="15" class="theme-primary">
      <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
    </rect>
    
    <!-- Floating code particles -->
    <text x="200" y="320" class="theme-accent text-style" font-size="16" opacity="0.6">&lt;/&gt;</text>
    <text x="300" y="340" class="theme-primary text-style" font-size="14" opacity="0.7">{}</text>
    <text x="400" y="320" class="theme-secondary text-style" font-size="12" opacity="0.5">[]</text>
    <text x="500" y="340" class="theme-accent text-style" font-size="18" opacity="0.6">()</text>
    
    <!-- Coffee cup -->
    <text x="600" y="320" class="theme-text text-style" font-size="24">☕</text>
    <text x="590" y="350" class="theme-secondary text-style" font-size="10">Fuel</text>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(createSVG(800, 380, content, theme));
};
