const animations = {
  pulse: `
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
  `,
  glow: `
    <animate attributeName="filter" values="drop-shadow(0 0 5px currentColor);drop-shadow(0 0 20px currentColor);drop-shadow(0 0 5px currentColor)" dur="3s" repeatCount="indefinite"/>
  `,
  float: `
    <animateTransform attributeName="transform" type="translate" values="0,0;0,-5;0,0" dur="2s" repeatCount="indefinite"/>
  `,
  rotate: `
    <animateTransform attributeName="transform" type="rotate" values="0;360;0" dur="4s" repeatCount="indefinite"/>
  `,
  typewriter: (text, delay = 100) => {
    let chars = '';
    for (let i = 0; i < text.length; i++) {
      chars += `<animate attributeName="opacity" values="0;1" dur="0.1s" begin="${i * delay}ms" fill="freeze"/>`;
    }
    return chars;
  }
};

module.exports = animations;
