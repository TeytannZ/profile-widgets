export default function handler(req, res) {
  const stats = [
    { emoji: '📅', label: 'Coding Journey', value: 'Since 2023', color: '#00d9ff' },
    { emoji: '💧', label: 'Daily Hydration', value: '8+ Glasses', color: '#4ecdc4' },
    { emoji: '🌅', label: 'Early Bird Start', value: '6:00 AM', color: '#ff6b6b' },
    { emoji: '🎨', label: 'Creative Projects', value: 'Infinite ∞', color: '#45b7d1' },
    { emoji: '☕', label: 'Focus Mode', value: 'Hydration', color: '#96ceb4' },
    { emoji: '🔥', label: 'Learning Streak', value: 'Daily +1', color: '#feca57' }
  ];
  
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="350" viewBox="0 0 800 350">
      <defs>
        <linearGradient id="statsBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#161b22"/>
          <stop offset="50%" style="stop-color:#21262d"/>
          <stop offset="100%" style="stop-color:#0d1117"/>
        </linearGradient>
        <filter id="statsGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <style>
        .stats-bg { fill: url(#statsBg); stroke: #ff6b6b; stroke-width: 3; }
        .stats-title { 
          fill: #ff6b6b; 
          font-family: 'Courier New', monospace; 
          font-size: 28px; 
          font-weight: bold;
          filter: url(#statsGlow);
        }
        .stat-card {
          animation: statFloat 4s ease-in-out infinite;
          filter: url(#statsGlow);
        }
        .stat-emoji { font-size: 36px; }
        .stat-value { 
          font-family: 'Courier New', monospace; 
          font-size: 16px; 
          font-weight: bold;
        }
        .stat-label { 
          fill: #c9d1d9; 
          font-family: 'Courier New', monospace; 
          font-size: 12px;
        }
        .connection-line {
          stroke-width: 2;
          stroke-dasharray: 5,3;
          animation: connectionFlow 3s linear infinite;
        }
        
        @keyframes statFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes connectionFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -8; }
        }
      </style>
      
      <rect class="stats-bg" x="15" y="15" width="770" height="320" rx="20"/>
      
      <!-- Header -->
      <text x="400" y="50" text-anchor="middle" class="stats-title">📊 Developer Metrics & Fun Facts</text>
      
      <!-- Connection lines between stats -->
      <line class="connection-line" x1="80" y1="80" x2="720" y2="80" stroke="#ff6b6b" opacity="0.4"/>
      
      <!-- Stats Grid -->
      ${stats.map((stat, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 100 + col * 220;
        const y = 130 + row * 120;
        
        return `
          <g class="stat-card" style="animation-delay: ${i * 0.4}s;">
            <!-- Card background -->
            <rect x="${x}" y="${y}" width="180" height="100" fill="rgba(${stat.color === '#00d9ff' ? '0, 217, 255' : 
              stat.color === '#4ecdc4' ? '78, 205, 196' :
              stat.color === '#ff6b6b' ? '255, 107, 107' :
              stat.color === '#45b7d1' ? '69, 183, 209' :
              stat.color === '#96ceb4' ? '150, 206, 180' : '254, 202, 87'}, 0.1)" 
                  stroke="${stat.color}" stroke-width="2" rx="15"/>
            
            <!-- Stat icon -->
            <text x="${x + 90}" y="${y + 35}" text-anchor="middle" class="stat-emoji">${stat.emoji}</text>
            
            <!-- Stat value -->
            <text x="${x + 90}" y="${y + 60}" text-anchor="middle" class="stat-value" fill="${stat.color}">${stat.value}</text>
            
            <!-- Stat label -->
            <text x="${x + 90}" y="${y + 80}" text-anchor="middle" class="stat-label">${stat.label}</text>
            
            <!-- Corner decoration -->
            <circle cx="${x + 20}" cy="${y + 20}" r="3" fill="${stat.color}" opacity="0.6"/>
            <circle cx="${x + 160}" cy="${y + 80}" r="2" fill="${stat.color}" opacity="0.4"/>
          </g>
        `;
      }).join('')}
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300');
  res.send(svg);
}
