export default function handler(req, res) {
  const technologies = [
    { name: 'JavaScript', color: '#f7df1e', level: 90, category: 'Frontend', icon: '🟨' },
    { name: 'TypeScript', color: '#3178c6', level: 85, category: 'Frontend', icon: '🔷' },
    { name: 'React', color: '#61dafb', level: 88, category: 'Frontend', icon: '⚛️' },
    { name: 'HTML5', color: '#e34c26', level: 95, category: 'Frontend', icon: '🌐' },
    { name: 'CSS3', color: '#1572b6', level: 92, category: 'Frontend', icon: '🎨' },
    { name: 'Node.js', color: '#339933', level: 78, category: 'Backend', icon: '🟢' },
    { name: 'MongoDB', color: '#47a248', level: 70, category: 'Database', icon: '🍃' },
    { name: 'PostgreSQL', color: '#336791', level: 65, category: 'Database', icon: '🐘' },
    { name: 'Git', color: '#f05032', level: 88, category: 'Tools', icon: '📚' },
    { name: 'VS Code', color: '#007acc', level: 95, category: 'Tools', icon: '💻' }
  ];
  
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="700" viewBox="0 0 1000 700">
      <defs>
        <linearGradient id="techBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0d1117"/>
          <stop offset="30%" style="stop-color:#161b22"/>
          <stop offset="70%" style="stop-color:#21262d"/>
          <stop offset="100%" style="stop-color:#0d1117"/>
        </linearGradient>
        <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#00d9ff"/>
          <stop offset="50%" style="stop-color:#ff6b6b"/>
          <stop offset="100%" style="stop-color:#4ecdc4"/>
        </linearGradient>
        <filter id="skillGlow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="cardShadow">
          <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000" flood-opacity="0.3"/>
        </filter>
      </defs>
      
      <style>
        .tech-bg { fill: url(#techBg); stroke: url(#headerGrad); stroke-width: 4; filter: url(#cardShadow); }
        .section-header { 
          fill: url(#headerGrad); 
          font-family: 'Courier New', monospace; 
          font-size: 36px; 
          font-weight: bold;
          text-anchor: middle;
          filter: url(#skillGlow);
        }
        .category-label {
          fill: #58a6ff;
          font-family: 'Courier New', monospace;
          font-size: 18px;
          font-weight: bold;
        }
        .tech-item { 
          fill: #c9d1d9; 
          font-family: 'Courier New', monospace; 
          font-size: 18px; 
          font-weight: bold;
        }
        .tech-emoji {
          font-size: 24px;
        }
        .skill-track { 
          fill: #30363d; 
          stroke: #21262d;
          stroke-width: 1;
        }
        .skill-bar { 
          filter: url(#skillGlow);
          animation: skillLoad 4s ease-out;
        }
        .percentage-text { 
          fill: #58a6ff; 
          font-family: 'Courier New', monospace; 
          font-size: 16px; 
          font-weight: bold;
        }
        .divider-line {
          stroke: rgba(0, 217, 255, 0.3);
          stroke-width: 2;
          stroke-dasharray: 8,4;
          animation: dividerFlow 3s linear infinite;
        }
        .category-bg {
          fill: rgba(88, 166, 255, 0.05);
          stroke: rgba(88, 166, 255, 0.2);
          stroke-width: 1;
        }
        
        @keyframes skillLoad {
          0% { width: 0; opacity: 0; }
          30% { opacity: 1; }
          100% { width: var(--target-width); opacity: 1; }
        }
        @keyframes dividerFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -12; }
        }
      </style>
      
      <rect class="tech-bg" x="20" y="20" width="960" height="660" rx="25"/>
      
      <!-- Header -->
      <rect x="40" y="40" width="920" height="6" fill="url(#headerGrad)" rx="3"/>
      <text x="500" y="90" class="section-header">🚀 Tech Stack & Expertise</text>
      <line class="divider-line" x1="80" y1="110" x2="920" y2="110"/>
      
      ${['Frontend', 'Backend', 'Database', 'Tools'].map((category, catIndex) => {
        const categoryTechs = technologies.filter(tech => tech.category === category);
        const startY = 150 + catIndex * 130;
        
        return `
          <!-- Category Section -->
          <rect class="category-bg" x="60" y="${startY - 20}" width="880" height="${categoryTechs.length * 35 + 40}" rx="12"/>
          <text x="80" y="${startY}" class="category-label">${category} Technologies</text>
          
          ${categoryTechs.map((tech, techIndex) => {
            const y = startY + 30 + techIndex * 35;
            const barWidth = (tech.level / 100) * 500;
            
            return `
              <!-- ${tech.name} -->
              <text x="100" y="${y}" class="tech-emoji">${tech.icon}</text>
              <text x="140" y="${y}" class="tech-item">${tech.name}</text>
              
              <!-- Skill bar -->
              <rect x="320" y="${y - 18}" width="500" height="28" class="skill-track" rx="14"/>
              <rect x="320" y="${y - 18}" width="${barWidth}" height="28" 
                    fill="${tech.color}" class="skill-bar" rx="14"
                    style="--target-width: ${barWidth}px;"/>
              </rect>
              
              <!-- Percentage -->
              <text x="840" y="${y}" class="percentage-text">${tech.level}%</text>
              
              <!-- Skill level indicator -->
              <circle cx="${320 + barWidth + 15}" cy="${y - 4}" r="4" fill="${tech.color}" opacity="0.8"/>
            `;
          }).join('')}
          
          <!-- Category separator -->
          ${catIndex < 3 ? `<line class="divider-line" x1="80" y1="${startY + categoryTechs.length * 35 + 30}" x2="920" y2="${startY + categoryTechs.length * 35 + 30}"/>` : ''}
        `;
      }).join('')}
      
      <!-- Footer accent -->
      <rect x="40" y="640" width="920" height="6" fill="url(#headerGrad)" rx="3"/>
    </svg>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 's-maxage=300');
  res.send(svg);
}
