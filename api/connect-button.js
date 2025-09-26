const { createCanvas } = require('canvas');

module.exports = async (req, res) => {
  const { theme = 'neon', github, email, discord, linkedin } = req.query;
  
  const width = 800;
  const height = 140;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  const colors = {
    neon: { bg: '#1a0033', primary: '#ff00ff', secondary: '#00ffff', accent: '#ffff00' },
    cyberpunk: { bg: '#0a0a0a', primary: '#00d9ff', secondary: '#ff6b6b', accent: '#39ff14' }
  };
  
  const themeColors = colors[theme] || colors.neon;
  
  // Background
  ctx.fillStyle = themeColors.bg;
  ctx.fillRect(0, 0, width, height);
  
  // Title
  ctx.fillStyle = themeColors.primary;
  ctx.font = 'bold 20px Arial';
  ctx.textAlign = 'center';
  ctx.shadowColor = themeColors.primary;
  ctx.shadowBlur = 10;
  ctx.fillText('🚀 Let\'s Connect! 🚀', width / 2, 30);
  
  // Buttons
  const buttons = [
    { name: 'GitHub', icon: '🐙', color: '#333333', x: 100 },
    { name: 'Email', icon: '📧', color: '#ea4335', x: 250 },
    { name: 'Discord', icon: '💬', color: '#7289da', x: 400 },
    { name: 'LinkedIn', icon: '💼', color: '#0077b5', x: 550 }
  ];
  
  ctx.shadowBlur = 0;
  
  buttons.forEach(button => {
    // Button background
    ctx.fillStyle = button.color;
    ctx.fillRect(button.x, 50, 120, 60);
    
    // Button border glow
    ctx.strokeStyle = themeColors.accent;
    ctx.lineWidth = 2;
    ctx.shadowColor = themeColors.accent;
    ctx.shadowBlur = 10;
    ctx.strokeRect(button.x, 50, 120, 60);
    ctx.shadowBlur = 0;
    
    // Icon
    ctx.fillStyle = '#ffffff';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(button.icon, button.x + 60, 75);
    
    // Text
    ctx.font = 'bold 12px Arial';
    ctx.fillText(button.name, button.x + 60, 95);
  });
  
  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.send(canvas.toBuffer('image/png'));
};
