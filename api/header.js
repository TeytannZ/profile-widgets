const { createCanvas, registerFont } = require('canvas');

module.exports = async (req, res) => {
  const { title = 'Developer', subtitle = 'Coding the Future', theme = 'cyberpunk' } = req.query;
  
  const width = 800;
  const height = 120;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Theme colors
  const themes = {
    cyberpunk: {
      bg: '#0a0a0a',
      primary: '#00d9ff',
      secondary: '#ff6b6b',
      accent: '#39ff14'
    },
    neon: {
      bg: '#1a0033',
      primary: '#ff00ff',
      secondary: '#00ffff',
      accent: '#ffff00'
    }
  };
  
  const colors = themes[theme] || themes.cyberpunk;
  
  // Background with gradient effect
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, colors.bg);
  gradient.addColorStop(0.5, colors.primary + '20');
  gradient.addColorStop(1, colors.bg);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Border with glow effect
  ctx.strokeStyle = colors.primary;
  ctx.lineWidth = 3;
  ctx.shadowColor = colors.primary;
  ctx.shadowBlur = 20;
  ctx.strokeRect(5, 5, width - 10, height - 10);
  
  // Reset shadow for text
  ctx.shadowBlur = 0;
  
  // Main title
  ctx.fillStyle = colors.primary;
  ctx.font = 'bold 36px Arial';
  ctx.textAlign = 'center';
  ctx.shadowColor = colors.primary;
  ctx.shadowBlur = 10;
  ctx.fillText(title, width / 2, 50);
  
  // Subtitle
  ctx.fillStyle = colors.secondary;
  ctx.font = '16px Arial';
  ctx.shadowColor = colors.secondary;
  ctx.shadowBlur = 5;
  ctx.fillText(subtitle.replace(/\|/g, '|'), width / 2, 80);
  
  // Animated particles effect (static positions)
  const particles = [
    { x: width * 0.1, y: height * 0.3, size: 3 },
    { x: width * 0.9, y: height * 0.4, size: 2 },
    { x: width * 0.2, y: height * 0.7, size: 2.5 },
    { x: width * 0.8, y: height * 0.2, size: 1.5 }
  ];
  
  particles.forEach(particle => {
    ctx.fillStyle = colors.accent;
    ctx.shadowColor = colors.accent;
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
  });
  
  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.send(canvas.toBuffer('image/png'));
};
