export default function handler(req, res) {
  const { 
    name = "Teytann",
    title = "Computer Science Student & Frontend Developer",
    subtitle = "Self-learner | Solo Coder | Creative Mind"
  } = req.query;
  
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="400" viewBox="0 0 1200 400">
      <defs>
        <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0a0a0a"/>
          <stop offset="25%" style="stop-color:#1a1a2e"/>
          <stop offset="50%" style="stop-color:#16213e"/>
          <stop offset="75%" style="stop-color:#0f3460"/>
          <stop offset="100%" style="stop-color:#0a0a0a"/>
        </linearGradient>
        <linearGradient id="nameGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#00d9ff"/>
          <stop offset="25%" style="stop-color:#ff6b6b"/>
          <stop offset="50%" style="stop-color:#4ecdc4"/>
          <stop offset="75%" style="stop-color:#45b7d1"/>
          <stop offset="100%" style="stop-color:#00d9ff"/>
        </linearGradient>
        <filter id="heroGlow">
          <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="textShadow">
          <feDropShadow dx="0" dy="0" stdDeviation="12" flood-color="#00d9ff" flood-opacity="0.9"/>
        </filter>
      </defs>
      
      <style>
        .hero-bg { fill: url(#heroBg); }
        .hero-name { 
          fill: url(#nameGrad); 
          font-family: 'Courier New', monospace; 
          font-size: 72px; 
          font-weight: bold;
          filter: url(#textShadow);
          animation: heroTitle 5s ease-in-out infinite;
        }
        .hero-title { 
          fill: #00d9ff; 
          font-family: 'Courier New', monospace; 
          font-size: 28px;
          font-weight: bold;
          opacity: 0.95;
          animation: titleFloat 4s ease-in-out infinite;
        }
        .hero-subtitle { 
          fill: #c9d1d9; 
          font-family: 'Courier New', monospace; 
          font-size: 20px;
          opacity: 0.8;
          animation: subtitlePulse 3s ease-in-out infinite;
        }
        .code-symbol {
          fill: #ff6b6b;
          font-family: 'Courier New', monospace;
          font-size: 36px;
          font-weight: bold;
          animation: symbolRotate 6s linear infinite;
        }
        .particle-large { 
          fill: #00d9ff; 
          filter: url(#heroGlow);
          animation: particleDrift 8s ease-in-out infinite;
        }
        .wave-bg {
          fill: rgba(0, 217, 255, 0.1);
          animation: waveFlow 10s ease-in-out infinite;
        }
        .border-accent {
          stroke: url(#nameGrad);
          stroke-width: 4;
          fill: none;
          animation: borderPulse 4s ease-in-out infinite;
        }
        
        @keyframes heroTitle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }
        @keyframes titleFloat {
          0%, 100% { transform: translateY(0px); opacity: 0.95; }
          50% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes subtitlePulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        @keyframes symbolRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes particleDrift {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
          25% { transform: translateY(-20px) translateX(10px); opacity: 1; }
          50% { transform: translateY(-10px) translateX(-5px); opacity: 0.8; }
          75% { transform: translateY(-15px) translateX(15px); opacity: 0.9; }
        }
        @keyframes waveFlow {
          0%, 100% { transform: translateX(0px); opacity: 0.1; }
          50% { transform: translateX(-30px); opacity: 0.2; }
        }
        @keyframes borderPulse {
          0%, 100% { opacity: 0.8; stroke-width: 4; }
          50% { opacity: 1; stroke-width: 6; }
        }
      </style>
      
      <rect class="hero-bg" width="100%" height="100%" rx="30"/>
      <rect class="border-accent" x="10" y="10" width="1180" height="380" rx="25"/>
      
      <!-- Animated background waves -->
      <path class="wave-bg" d="M0,280 Q300,220 600,250 T1200,240 L1200,400 L0,400 Z"/>
      <path class="wave-bg" d="M0,320 Q300,260 600,290 T1200,280 L1200,400 L0,400 Z" style="animation-delay: -3s; opacity: 0.08;"/>
      
      <!-- Floating particles -->
      <circle class="particle-large" cx="150" cy="100" r="6" style="animation-delay: 0s;"/>
      <circle class="particle-large" cx="1050" cy="120" r="5" style="animation-delay: -2s;"/>
      <circle class="particle-large" cx="300" cy="80" r="4" style="animation-delay: -4s;"/>
      <circle class="particle-large" cx="900" cy="90" r="7" style="animation-delay: -1s;"/>
      <circle class="particle-large" cx="500" cy="70" r="3" style="animation-delay: -5s;"/>
      <circle class="particle-large" cx="1100" cy="200" r="5" style="animation-delay: -3s;"/>
      
      <!-- Code symbols -->
      <text x="80" y="120" class="code-symbol" style="animation-delay: 0s;">&lt;/&gt;</text>
      <text x="1080" y="150" class="code-symbol" style="animation-delay: -2s;">{ }</text>
      
      <!-- Main content -->
      <text x="600" y="150" text-anchor="middle" class="hero-name">Hi! I'm ${name}</text>
      <text x="600" y="200" text-anchor="middle" class="hero-title">${title}</text>
<text x="600" y="240" text-anchor="middle" class="hero-subtitle">✨ ${subtitle} ✨</text>      
      <!-- Decorative tech elements -->
      <rect x="100" y="320" width="120" height="4" fill="#00d9ff" opacity="0.6" rx="2"/>
      <rect x="980" y="320" width="120" height="4" fill="#ff6b6b" opacity="0.6" rx="2"/>
      
      <!-- Corner tech decorations -->
      <circle cx="80" cy="80" r="15" fill="none" stroke="#ff6b6b" stroke-width="3" opacity="0.7"/>
      <circle cx="1120" cy="320" r="15" fill="none" stroke="#00d9ff" stroke-width="3" opacity="0.7"/>
      <rect x="60" y="300" width="40" height="40" fill="none" stroke="#4ecdc4" stroke-width="2" opacity="0.6" rx="5"/>
      <rect x="1100" y="60" width="40" height="40" fill="none" stroke="#45b7d1" stroke-width="2" opacity="0.6" rx="5"/>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300');
  res.send(svg);
}
