const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { 
    lines = "console.log('Hello World!');const learning = true;while(learning) { code(); };", 
    theme = 'matrix', 
    speed = 'normal' 
  } = req.query;
  
  const lineArray = lines.split(';').filter(line => line.length > 0);
  const typingSpeed = speed === 'fast' ? 100 : speed === 'slow' ? 200 : 150;
  
  let content = `
    <!-- Terminal window -->
    <rect x="10" y="10" width="580" height="${Math.max(200, lineArray.length * 40 + 80)}" rx="15" fill="#0a0a0a" stroke="#00ff00" stroke-width="2"/>
    <rect x="10" y="10" width="580" height="30" rx="15" fill="#1a1a1a"/>
    
    <!-- Terminal header -->
    <circle cx="30" cy="25" r="6" fill="#ff5f56"/>
    <circle cx="50" cy="25" r="6" fill="#ffbd2e"/>
    <circle cx="70" cy="25" r="6" fill="#27ca3f"/>
    <text x="300" y="30" text-anchor="middle" class="text-style" fill="#ffffff" font-size="12">Terminal - Live Coding</text>
    
    <!-- Prompt -->
    <text x="30" y="65" class="theme-accent text-style" font-size="14">$</text>
  `;
  
  let yPos = 65;
  let totalDelay = 0;
  
  lineArray.forEach((line, lineIndex) => {
    const cleanLine = line.replace(/%20/g, ' ').replace(/%27/g, "'");
    yPos += 25;
    
    // Create character-by-character animation
    for (let charIndex = 0; charIndex < cleanLine.length; charIndex++) {
      const char = cleanLine[charIndex];
      const delay = totalDelay + (charIndex * typingSpeed);
      
      content += `
        <text x="${50 + (charIndex * 8)}" y="${yPos}" class="theme-primary text-style" font-size="14" 
              font-family="monospace" opacity="0">
          ${char === '<' ? '&lt;' : char === '>' ? '&gt;' : char === '&' ? '&amp;' : char}
          <animate attributeName="opacity" values="0;1" dur="0.1s" begin="${delay}ms" fill="freeze"/>
        </text>
      `;
    }
    
    totalDelay += cleanLine.length * typingSpeed + 500; // Pause between lines
  });
  
  // Blinking cursor
  content += `
    <rect x="${50 + (lineArray[lineArray.length - 1]?.length || 0) * 8}" y="${yPos - 15}" width="2" height="18" class="theme-accent">
      <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
    </rect>
  `;
  
  const height = Math.max(200, lineArray.length * 40 + 100);
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(createSVG(600, height, content, theme));
};