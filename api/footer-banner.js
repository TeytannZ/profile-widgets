export default function handler(req, res) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="200" viewBox="0 0 1000 200">
      <defs>
        <linearGradient id="footerBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1a1a2e"/>
          <stop offset="50%" style="stop-color:#16213e"/>
          <stop offset="100%" style="stop-color:#0f3460"/>
        </linearGradient>
        <linearGradient id="thankYou" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#00d9ff"/>
          <stop offset="25%" style="stop-color:#ff6b6b"/>
          <stop offset="50%" style="stop-color:#4ecdc4"/>
          <stop offset="75%" style="stop-color:#45b7d1"/>
          <stop offset="100%" style="stop-color:#00d9ff"/>
        </linearGradient>
        <filter id="ledGlow">
          <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <style>
        .footer-bg { fill: url(#footerBg); }
        .led-text { 
          fill: url(#thankYou); 
          font-family: 'Courier New', monospace; 
          font-size: 42px; 
          font-weight: bold;
          filter: url(#ledGlow);
          animation: ledPulse 3s ease-in-out infinite;
        }
        .quote-text {
          fill: #c9d1d9;
          font-family: 'Courier New', monospace;
          font-size: 18px;
          font-style: italic;
          opacity: 0.9;
        }
        .decoration-spark {
          fill: #feca57;
          animation: sparkle 2s ease-in-out infinite;
        }
        .border-light {
          stroke: url(#thankYou);
          stroke-width: 3;
          fill: none;
          animation: borderFlow 4s linear infinite;
        }
        
        @keyframes ledPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes borderFlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      </style>
      
      <rect class="footer-bg" width="100%" height="100%" rx="20"/>
      <rect class="border-light" x="10" y="10" width="980" height="180" rx="15"/>
      
      <!-- LED Sign Effect -->
      <text x="500" y="80" text-anchor="middle" class="led-text">💖 Thanks for Visiting! 💖</text>
      
      <!-- Quote -->
      <text x="500" y="120" text-anchor="middle" class="quote-text">⚡ "Code is poetry written in logic" ⚡</text>
      
      <!-- Decorative sparkles -->
      <circle class="decoration-spark" cx="200" cy="60" r="3" style="animation-delay: 0s;"/>
      <circle class="decoration-spark" cx="800" cy="60" r="2" style="animation-delay: 0.5s;"/>
      <circle class="decoration-spark" cx="150" cy="140" r="2.5" style="animation-delay: 1s;"/>
      <circle class="decoration-spark" cx="850" cy="140" r="3" style="animation-delay: 1.5s;"/>
      
      <!-- Corner tech elements -->
      <text x="50" y="170" fill="#ff6b6b" font-family="Courier New" font-size="16" opacity="0.7">console.log("Thanks!");</text>
      <text x="780" y="170" fill="#00d9ff" font-family="Courier New" font-size="16" opacity="0.7">return awesome;</text>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300');
  res.send(svg);
}
