const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { 
    message = 'Thanks for stopping by!', 
    theme = 'cyberpunk', 
    animated = 'true',
    style = 'premium'
  } = req.query;
  
  const content = `
    <!-- Enhanced LED Sign Background with multiple layers -->
    <rect x="10" y="10" width="780" height="120" rx="25" fill="#0a0a0a" stroke="#00d9ff" stroke-width="4"/>
    <rect x="18" y="18" width="764" height="104" rx="20" fill="#1a1a1a" stroke="#ff6b6b" stroke-width="2" opacity="0.8"/>
    <rect x="25" y="25" width="750" height="90" rx="15" fill="#000000"/>
    
    <!-- Premium LED Border Animation -->
    ${Array.from({length: 35}, (_, i) => {
      const x = 35 + (i * 20);
      return `<circle cx="${x}" cy="35" r="2.5" fill="#00d9ff" opacity="0.9">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="${i * 0.05}s" repeatCount="indefinite"/>
        <animate attributeName="fill" values="#00d9ff;#39ff14;#ff6b6b;#00d9ff" dur="4s" begin="${i * 0.1}s" repeatCount="indefinite"/>
      </circle>`;
    }).join('')}
    
    ${Array.from({length: 35}, (_, i) => {
      const x = 35 + (i * 20);
      return `<circle cx="${x}" cy="105" r="2.5" fill="#39ff14" opacity="0.9">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="${i * 0.05 + 1}s" repeatCount="indefinite"/>
        <animate attributeName="fill" values="#39ff14;#ff6b6b;#00d9ff;#39ff14" dur="4s" begin="${i * 0.1 + 2}s" repeatCount="indefinite"/>
      </circle>`;
    }).join('')}
    
    <!-- Vertical LED strips -->
    ${Array.from({length: 8}, (_, i) => {
      const y = 45 + (i * 7);
      return `<circle cx="45" cy="${y}" r="2" fill="#ff6b6b" opacity="0.8">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="${i * 0.2}s" repeatCount="indefinite"/>
      </circle>
      <circle cx="755" cy="${y}" r="2" fill="#ff6b6b" opacity="0.8">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="${i * 0.2 + 0.7}s" repeatCount="indefinite"/>
      </circle>`;
    }).join('')}
    
    <!-- Main Text with Premium Effects -->
    <text x="400" y="75" text-anchor="middle" class="theme-primary text-style" font-size="28" font-weight="bold" 
          style="filter: drop-shadow(0 0 20px currentColor) drop-shadow(0 0 40px #00d9ff);">
      ${message.replace(/%20/g, ' ')}
      ${animated === 'true' ? `
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="fill" values="#00d9ff;#39ff14;#ff6b6b;#00d9ff" dur="6s" repeatCount="indefinite"/>
      ` : ''}
    </text>
    
    <!-- Enhanced Sparkle Effects -->
    <g opacity="0.8">
      <text x="120" y="55" class="theme-accent text-style" font-size="16">✨
        <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" begin="1s"/>
      </text>
      <text x="680" y="60" class="theme-secondary text-style" font-size="14">⭐
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="2s"/>
      </text>
      <text x="180" y="90" class="theme-primary text-style" font-size="12">💫
        <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" begin="0.5s"/>
      </text>
      <text x="620" y="95" class="theme-accent text-style" font-size="18">🌟
        <animate attributeName="opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite" begin="1.5s"/>
      </text>
    </g>
    
    <!-- Scanning line effect -->
    <rect x="25" y="70" width="750" height="2" fill="#00d9ff" opacity="0.6">
      <animate attributeName="opacity" values="0;0.8;0" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="x" values="25;775;25" dur="4s" repeatCount="indefinite"/>
    </rect>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(createSVG(800, 140, content, theme));
};