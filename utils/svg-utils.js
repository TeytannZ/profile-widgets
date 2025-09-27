const themes = require('../styles/themes');

function createSVG(width, height, content, theme = 'cyberpunk') {
  const themeColors = themes[theme] || themes.cyberpunk;
  
  return `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .theme-bg { fill: ${themeColors.bg}; }
          .theme-primary { fill: ${themeColors.primary}; }
          .theme-secondary { fill: ${themeColors.secondary}; }
          .theme-accent { fill: ${themeColors.accent}; }
          .theme-text { fill: ${themeColors.text}; }
          .theme-border { stroke: ${themeColors.border}; fill: none; }
          .gradient-bg { fill: url(#themeGradient); }
          .glow { filter: drop-shadow(0 0 10px ${themeColors.primary}); }
          .text-style { font-family: 'Courier New', monospace; font-weight: bold; }
        </style>
        <linearGradient id="themeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${themeColors.primary};stop-opacity:1" />
          <stop offset="50%" style="stop-color:${themeColors.secondary};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${themeColors.accent};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" class="theme-bg" rx="15"/>
      <rect width="calc(100% - 4)" height="calc(100% - 4)" x="2" y="2" class="theme-border" rx="13" stroke-width="2"/>
      ${content}
    </svg>
  `;
}

module.exports = { createSVG };