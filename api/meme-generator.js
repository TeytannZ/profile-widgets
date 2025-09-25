
const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { category = 'programming', theme = 'dark' } = req.query;
  
  const memes = [
    { top: "When your code works", bottom: "But you don't know why", emoji: "😅" },
    { top: "It's not a bug", bottom: "It's a feature", emoji: "🐛" },
    { top: "Works on my machine", bottom: "*shrugs*", emoji: "🤷‍♂️" },
    { top: "99 little bugs in the code", bottom: "Take one down, patch it around", emoji: "🎵" },
    { top: "Debugging:", bottom: "Being a detective in a crime", emoji: "🕵️" }
  ];
  
  const randomMeme = memes[Math.floor(Math.random() * memes.length)];
  
  const content = `
    <rect x="20" y="20" width="360" height="280" rx="15" class="gradient-bg" opacity="0.2"/>
    
    <text x="200" y="60" text-anchor="middle" class="theme-primary text-style" font-size="14" font-weight="bold">
      ${randomMeme.top}
    </text>
    
    <text x="200" y="150" text-anchor="middle" class="theme-text text-style" font-size="40">
      ${randomMeme.emoji}
    </text>
    
    <text x="200" y="220" text-anchor="middle" class="theme-secondary text-style" font-size="14" font-weight="bold">
      ${randomMeme.bottom}
    </text>
    
    <text x="200" y="270" text-anchor="middle" class="theme-accent text-style" font-size="12">
      *Every Developer Ever*
    </text>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(createSVG(400, 320, content, theme));
};
