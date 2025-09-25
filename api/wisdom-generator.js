
const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { theme = 'matrix', category = 'coding' } = req.query;
  
  const quotes = [
    "Code is like humor. When you have to explain it, it's bad.",
    "The best error message is the one that never shows up.",
    "Simplicity is the ultimate sophistication.",
    "Make it work, make it right, make it fast.",
    "Code never lies, comments sometimes do."
  ];
  
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  const content = `
    <rect x="20" y="20" width="760" height="120" rx="15" class="gradient-bg" opacity="0.1"/>
    
    <text x="40" y="50" class="theme-accent text-style" font-size="24">💡</text>
    <text x="80" y="50" class="theme-primary text-style" font-size="16" font-weight="bold">Coding Wisdom</text>
    
    <text x="400" y="85" text-anchor="middle" class="theme-text text-style" font-size="14" style="font-style: italic;">
      "${randomQuote}"
    </text>
    
    <text x="400" y="110" text-anchor="middle" class="theme-secondary text-style" font-size="12">
      - Anonymous Developer
    </text>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(createSVG(800, 160, content, theme));
};
