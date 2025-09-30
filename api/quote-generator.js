// api/quote-generator.js - Updates on every refresh
module.exports = (req, res) => {
  const quotes = [
    "The only way to do great work is to love what you do.",
    "Life is what happens to you while you're busy making other plans.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It is during our darkest moments that we must focus to see the light.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The only impossible journey is the one you never begin.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "The purpose of our lives is to be happy.",
    "Life is really simple, but we insist on making it complicated.",
    "The way to get started is to quit talking and begin doing.",
    "Your time is limited, don't waste it living someone else's life.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "Life is 10% what happens to you and 90% how you react to it.",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    "When you reach the end of your rope, tie a knot in it and hang on.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Fall seven times and stand up eight.",
    "Everything you've ever wanted is on the other side of fear.",
    "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
    "Nothing is impossible. The word itself says 'I'm possible!'",
    "You only live once, but if you do it right, once is enough.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "Believe you can and you're halfway there.",
    "The mind is everything. What you think you become.",
    "The best revenge is massive success.",
    "Do what you can, with what you have, where you are.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Our lives begin to end the day we become silent about things that matter.",
    "Change your thoughts and you change your world.",
    "The only person you are destined to become is the person you decide to be.",
    "Go confidently in the direction of your dreams. Live the life you have imagined.",
    "Start where you are. Use what you have. Do what you can.",
    "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    "Too many of us are not living our dreams because we are living our fears.",
    "I have learned over the years that when one's mind is made up, this diminishes fear.",
    "Don't watch the clock; do what it does. Keep going.",
    "You miss 100% of the shots you don't take.",
    "Whether you think you can or you think you can't, you're right.",
    "The two most important days in your life are the day you are born and the day you find out why.",
    "Whatever you are, be a good one.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "If you look at what you have in life, you'll always have more.",
    "Life is either a daring adventure or nothing at all.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    "Tough times never last, but tough people do.",
    "Be the change that you wish to see in the world.",
    "Don't let yesterday take up too much of today."
  ];
  
  // Generate random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  // Add timestamp to ensure uniqueness
  const timestamp = Date.now();
  
  // Function to wrap text
  function wrapText(text, maxCharsPerLine) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';
    
    words.forEach(word => {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      if (testLine.length <= maxCharsPerLine) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    });
    
    if (currentLine) lines.push(currentLine);
    return lines;
  }
  
  const wrappedLines = wrapText(randomQuote, 75);
  const lineHeight = 22;
  const startY = 75;
  const totalTextHeight = wrappedLines.length * lineHeight;
  const height = Math.max(180, totalTextHeight + 120);
  
  const svg = `<svg width="750" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg-${timestamp}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0d1117">
          <animate attributeName="stop-color" values="#0d1117;#161b22;#0d1117" dur="8s" repeatCount="indefinite"/>
        </stop>
        <stop offset="50%" stop-color="#161b22"/>
        <stop offset="100%" stop-color="#21262d">
          <animate attributeName="stop-color" values="#21262d;#30363d;#21262d" dur="6s" repeatCount="indefinite"/>
        </stop>
      </linearGradient>
      
      <linearGradient id="text-${timestamp}" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#58a6ff">
          <animate attributeName="offset" values="0%;15%;0%" dur="5s" repeatCount="indefinite"/>
        </stop>
        <stop offset="50%" stop-color="#ff7b72">
          <animate attributeName="offset" values="50%;65%;50%" dur="4s" repeatCount="indefinite"/>
        </stop>
        <stop offset="100%" stop-color="#a5f3fc">
          <animate attributeName="offset" values="100%;85%;100%" dur="6s" repeatCount="indefinite"/>
        </stop>
      </linearGradient>
      
      <filter id="glow-${timestamp}">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      
      <pattern id="dots-${timestamp}" x="0" y="0" width="45" height="45" patternUnits="userSpaceOnUse">
        <circle cx="22" cy="22" r="1" fill="#58a6ff" opacity="0.08">
          <animate attributeName="opacity" values="0.05;0.15;0.05" dur="4s" repeatCount="indefinite"/>
        </circle>
      </pattern>
    </defs>
    
    <rect width="750" height="${height}" fill="url(#bg-${timestamp})" rx="25"/>
    <rect width="750" height="${height}" fill="url(#dots-${timestamp})" rx="25"/>
    <rect width="746" height="${height - 4}" x="2" y="2" fill="none" stroke="url(#text-${timestamp})" stroke-width="2" rx="23" stroke-dasharray="10,5">
      <animate attributeName="stroke-dashoffset" values="0;-30;0" dur="4s" repeatCount="indefinite"/>
    </rect>
    
    <circle cx="100" cy="${height - 30}" r="2" fill="#58a6ff">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="${height - 30};${height - 35};${height - 30}" dur="4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="650" cy="40" r="1.5" fill="#ff7b72">
      <animate attributeName="cx" values="650;655;650" dur="5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="200" cy="30" r="1" fill="#a5f3fc">
      <animate attributeName="r" values="1;2;1" dur="3s" repeatCount="indefinite"/>
    </circle>
    
    <text x="375" y="45" text-anchor="middle" fill="url(#text-${timestamp})" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="800" filter="url(#glow-${timestamp})">
      Daily Inspiration
      <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite"/>
    </text>
    
    ${wrappedLines.map((line, i) => `
      <text x="375" y="${startY + (i * lineHeight)}" text-anchor="middle" fill="#f0f6fc" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="400" font-style="italic">
        ${i === 0 ? '"' : ''}${line}${i === wrappedLines.length - 1 ? '"' : ''}
        <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
      </text>
    `).join('')}
    
    <text x="120" y="${height - 15}" fill="#7d8590" font-family="monospace" font-size="12" opacity="0.7">
      &lt;wisdom/&gt;
      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite"/>
    </text>
    
    <text x="630" y="${height - 15}" fill="#7d8590" font-family="monospace" font-size="12" opacity="0.6">
      { inspire: daily }
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite"/>
    </text>
  </svg>`;
  
  // Set headers to prevent any caching
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Last-Modified', new Date().toUTCString());
  
  res.send(svg);
};
