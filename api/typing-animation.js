
const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { lines = 'Hello World!', theme = 'neon' } = req.query;
  const lineArray = lines.split(';');
  
  let content = '';
  let yPos = 40;
  
  lineArray.forEach((line, index) => {
    content += `
      <text x="50%" y="${yPos}" text-anchor="middle" class="theme-primary text-style" font-size="18">
        ${line.replace(/%26/g, '&')}
        <animate attributeName="opacity" values="0;1;1;0" dur="4s" begin="${index * 4}s" repeatCount="indefinite"/>
      </text>
    `;
    yPos += 30;
  });
  
  // Cursor animation
  content += `
    <rect x="51%" y="25" width="2" height="20" class="theme-accent">
      <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
    </rect>
  `;
  
  res.setHeader('Content-Type', 'image/png');
  res.send(createSVG(600, yPos + 20, content, theme));
};
