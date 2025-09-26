const { createCanvas } = require('canvas');

module.exports = async (req, res) => {
  const { lines = 'Hello World!', theme = 'neon' } = req.query;
  const lineArray = lines.split(';');
  
  const width = 600;
  const height = Math.max(100, lineArray.length * 35 + 40);
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Theme colors
  const themes = {
    cyberpunk: { bg: '#0a0a0a', primary: '#00d9ff', accent: '#39ff14' },
    neon: { bg: '#1a0033', primary: '#ff00ff', accent: '#ffff00' },
    matrix: { bg: '#000000', primary: '#00ff00', accent: '#00ff41' }
  };
  
  const colors = themes[theme] || themes.neon;
  
  // Background
  ctx.fillStyle = colors.bg;
  ctx.fillRect(0, 0, width, height);
  
  // Border with glow
  ctx.strokeStyle = colors.primary;
  ctx.lineWidth = 2;
  ctx.shadowColor = colors.primary;
  ctx.shadowBlur = 15;
  ctx.strokeRect(2, 2, width - 4, height - 4);
  ctx.shadowBlur = 0;
  
  // Display lines
  ctx.fillStyle = colors.primary;
  ctx.font = 'bold 18px monospace';
  ctx.textAlign = 'center';
  ctx.shadowColor = colors.primary;
  ctx.shadowBlur = 8;
  
  lineArray.forEach((line, index) => {
    const yPos = 35 + (index * 35);
    const cleanLine = line.replace(/%26/g, '&').trim();
    ctx.fillText(cleanLine, width / 2, yPos);
  });
  
  // Blinking cursor effect (static for PNG)
  ctx.fillStyle = colors.accent;
  ctx.shadowColor = colors.accent;
  ctx.shadowBlur = 10;
  ctx.fillRect(width / 2 + 10, height - 45, 3, 20);
  
  // Add some tech symbols
  ctx.fillStyle = colors.accent + '80';
  ctx.font = '16px monospace';
  ctx.shadowBlur = 5;
  ctx.textAlign = 'left';
  ctx.fillText('</>', 20, height - 20);
  ctx.textAlign = 'right';
  ctx.fillText('{}', width - 20, height - 20);
  
  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.send(canvas.toBuffer('image/png'));
};
