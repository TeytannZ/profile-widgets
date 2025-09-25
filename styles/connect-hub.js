export default function handler(req, res) {
  const platforms = [
    { 
      name: 'GitHub', 
      icon: '🐙', 
      color: '#00d9ff', 
      bg: 'rgba(0, 217, 255, 0.15)',
      url: 'https://github.com/TeytannZ',
      description: 'Code & Projects'
    },
    { 
      name: 'Gmail', 
      icon: '📧', 
      color: '#ea4335', 
      bg: 'rgba(234, 67, 53, 0.15)',
      url: 'mailto:teytannz@gmail.com',
      description: 'Professional Contact'
    },
    { 
      name: 'Discord', 
      icon: '💬', 
      color: '#7289da', 
      bg: 'rgba(114, 137, 218, 0.15)',
      url: 'https://discord.com/users/Teytann',
      description: 'Let\'s Chat'
    },
    { 
      name: 'LinkedIn', 
      icon: '💼', 
      color: '#0077b5', 
      bg: 'rgba(0, 119, 181, 0.15)',
      url: 'https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BCh2WbyNTTUeu63fjf%2BOqmw%3D%3D',
      description: 'Professional Network'
    }
  ];
  
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="400" viewBox="0 0 900 400">
      <defs>
        <linearGradient id="connectBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1a1a2e"/>
          <stop offset="50%" style="stop-color:#16213e"/>
          <stop offset="100%" style="stop-color:#0f3460"/>
        </linearGradient>
        <linearGradient id="connectTitle" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#00d9ff"/>
          <stop offset="50%" style="stop-color:#ff6b6b"/>
          <stop offset="100%" style="stop-color:#00d9ff"/>
        </linearGradient>
        <filter id="platformGlow">
          <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="cardElevation">
          <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000" flood-opacity="0.4"/>
        </filter>
      </defs>
      
      <style>
        .connect-bg { fill: url(#connectBg); filter: url(#cardElevation); }
        .connect-title { 
          fill: url(#connectTitle); 
          font-family: 'Courier New', monospace; 
          font-size: 32px; 
          font-weight: bold;
          filter: url(#platformGlow);
        }
        .connect-subtitle { 
          fill: #c9d1d9; 
          font-family: 'Courier New', monospace; 
          font-size: 20px; 
        }
        .platform-card {
          filter: url(#cardElevation);
          animation: cardFloat 5s ease-in-out infinite;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .platform-card:hover {
          transform: translateY(-8px);
        }
        .platform-icon { 
          font-size: 32px;
          animation: iconPulse 3s ease-in-out infinite;
        }
        .platform-name { 
          fill: #fff; 
          font-family: 'Courier New', monospace; 
          font-size: 20px; 
          font-weight: bold;
        }
        .platform-desc {
          fill: #c9d1d9;
          font-family: 'Courier New', monospace;
          font-size: 14px;
        }
        .connect-lines {
          stroke: #00d9ff;
          stroke-width: 2;
          stroke-dasharray: 15,8;
          animation: lineFlow 4s linear infinite;
          opacity: 0.6;
        }
        .decoration-circle {
          fill: none;
          stroke-width: 2;
          opacity: 0.4;
          animation: circleRotate 8s linear infinite;
        }
        
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes iconPulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes lineFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -23; }
        }
        @keyframes circleRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
      
      <rect class="connect-bg" x="20" y="20" width="860" height="360" rx="25"/>
      
      <!-- Header Section -->
      <text x="450" y="80" text-anchor="middle" class="connect-title">🚀 Let's Connect & Collaborate!</text>
      <text x="450" y="115" text-anchor="middle" class="connect-subtitle">Ready to build something amazing together?</text>
      
      <!-- Decorative connecting lines -->
      <line class="connect-lines" x1="100" y1="140" x2="800" y2="140"/>
      <line class="connect-lines" x1="150" y1="160" x2="750" y2="160" style="animation-delay: -1s;"/>
      
      <!-- Platform Cards -->
      ${platforms.map((platform, i) => {
        const x = 80 + i * 190;
        const y = 200;
        
        return `
          <g class="platform-card" style="animation-delay: ${i * 0.8}s;">
            <!-- Card background with hover effect -->
            <rect x="${x}" y="${y}" width="160" height="120" fill="${platform.bg}" 
                  stroke="${platform.color}" stroke-width="3" rx="18"/>
            
            <!-- Glow effect background -->
            <rect x="${x}" y="${y}" width="160" height="120" fill="none" 
                  stroke="${platform.color}" stroke-width="1" rx="18" opacity="0.5"/>
            
            <!-- Platform icon -->
            <text x="${x + 80}" y="${y + 40}" text-anchor="middle" class="platform-icon" style="animation-delay: ${i * 0.3}s;">${platform.icon}</text>
            
            <!-- Platform name -->
            <text x="${x + 80}" y="${y + 70}" text-anchor="middle" class="platform-name">${platform.name}</text>
            
            <!-- Platform description -->
            <text x="${x + 80}" y="${y + 90}" text-anchor="middle" class="platform-desc">${platform.description}</text>
            
            <!-- Corner decoration -->
            <circle cx="${x + 20}" cy="${y + 20}" r="8" class="decoration-circle" stroke="${platform.color}"/>
            <circle cx="${x + 140}" cy="${y + 100}" r="6" class="decoration-circle" stroke="${platform.color}" style="animation-delay: -2s;"/>
          </g>
        `;
      }).join('')}
      
      <!-- Bottom decorative elements -->
      <rect x="50" y="350" width="800" height="4" fill="url(#connectTitle)" opacity="0.6" rx="2"/>
      
      <!-- Corner tech symbols -->
      <text x="50" y="370" fill="#ff6b6b" font-family="Courier New" font-size="24" opacity="0.6">&lt;connect/&gt;</text>
      <text x="780" y="370" fill="#00d9ff" font-family="Courier New" font-size="24" opacity="0.6">{ link }</text>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300');
  res.send(svg);
}
