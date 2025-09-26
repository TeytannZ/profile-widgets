const { createCanvas } = require('canvas');

module.exports = async (req, res) => {
  const { theme = 'dark', glow = 'false' } = req.query;
  
  const width = 400;
  const height = 300;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  const colors = {
    dark: { bg: '#1a1a2e', primary: '#00d9ff', secondary: '#ff6b9d', text: '#ffffff' },
    cyberpunk: { bg: '#0a0a0a', primary: '#00d9ff', secondary: '#ff6b6b', text: '#ffffff' }
  };
  
  const themeColors = colors[theme] || colors.dark;
  
  // Background with gradient
  const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width/2);
  gradient.addColorStop(0, themeColors.bg + 'CC');
  gradient.addColorStop(1, themeColors.bg);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Border
  ctx.strokeStyle = themeColors.primary;
  ctx.lineWidth = 2;
  if (glow === 'true') {
    ctx.shadowColor = themeColors.primary;
    ctx.shadowBlur = 15;
  }
  ctx.strokeRect(10, 10, width - 20, height - 20);
  ctx.shadowBlur = 0;
  
  // Title
  ctx.fillStyle = themeColors.primary;
  ctx.font = 'bold 20px Arial';
  ctx.textAlign = 'left';
  ctx.shadowColor = themeColors.primary;
  ctx.shadowBlur = 8;
  ctx.fillText('💫 Quick Facts', 30, 50);
  
  // Facts
  const facts = [
    '🎓 Computer Science Student',
    '💻 Frontend Developer', 
    '🌱 Always Learning',
    '🎨 Creative Coder',
    '🚀 Building the Future'
  ];
  
  ctx.fillStyle = themeColors.text;
  ctx.font = '14px Arial';
  ctx.shadowBlur = 3;
  
  facts.forEach((fact, index) => {
    ctx.fillText(fact, 30, 85 + (index * 25));
  });
  
  // Quote
  ctx.fillStyle = themeColors.secondary;
  ctx.font = 'italic 12px Arial';
  ctx.shadowColor = themeColors.secondary;
  ctx.shadowBlur = 5;
  ctx.fillText('"Code is poetry written in logic"', 30, 220);
  
  // Tech symbols
  ctx.fillStyle = themeColors.primary + '80';
  ctx.font = '16px monospace';
  ctx.textAlign = 'right';
  ctx.fillText('</>', width - 30, 80);
  ctx.fillText('{}', width - 30, 120);
  ctx.fillText('[]', width - 30, 160);
  
  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.send(canvas.toBuffer('image/png'));
};
