
function getRandomColor() {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

function generateGradient(colors, direction = '135deg') {
  return `linear-gradient(${direction}, ${colors.join(', ')})`;
}

function createPulseAnimation(duration = '2s', values = '0.7;1;0.7') {
  return `<animate attributeName="opacity" values="${values}" dur="${duration}" repeatCount="indefinite"/>`;
}

module.exports = {
  getRandomColor,
  formatNumber,
  generateGradient,
  createPulseAnimation
};
