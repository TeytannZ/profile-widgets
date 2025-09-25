
const { createSVG } = require('../utils/svg-utils');

module.exports = (req, res) => {
  const { username = 'user', theme = 'cyberpunk', modules = 'stats,activity' } = req.query;
  
  const content = `
    <text x="400" y="30" text-anchor="middle" class="theme-primary text-style" font-size="24" font-weight="bold">
      📊 Developer Dashboard
    </text>
    
    <!-- Stats Panel -->
    <rect x="20" y="50" width="180" height="120" rx="10" class="gradient-bg" opacity="0.2"/>
    <text x="110" y="75" text-anchor="middle" class="theme-secondary text-style" font-size="14" font-weight="bold">GitHub Stats</text>
    <text x="30" y="95" class="theme-text text-style" font-size="12">Repos: 42</text>
    <text x="30" y="115" class="theme-text text-style" font-size="12">Stars: ⭐ 156</text>
    <text x="30" y="135" class="theme-text text-style" font-size="12">Commits: 🔥 1,337</text>
    <text x="30" y="155" class="theme-text text-style" font-size="12">PRs: ✅ 89</text>
    
    <!-- Activity Panel -->
    <rect x="220" y="50" width="180" height="120" rx="10" class="gradient-bg" opacity="0.2"/>
    <text x="310" y="75" text-anchor="middle" class="theme-secondary text-style" font-size="14" font-weight="bold">Activity</text>
    <text x="230" y="95" class="theme-text text-style" font-size="12">Today: 8 commits</text>
    <text x="230" y="115" class="theme-text text-style" font-size="12">Streak: 🔥 15 days</text>
    <text x="230" y="135" class="theme-text text-style" font-size="12">Languages: 5</text>
    <text x="230" y="155" class="theme-text text-style" font-size="12">Hours: ⏰ 52h</text>
    
    <!-- Skills Panel -->
    <rect x="420" y="50" width="180" height="120" rx="10" class="gradient-bg" opacity="0.2"/>
    <text x="510" y="75" text-anchor="middle" class="theme-secondary text-style" font-size="14" font-weight="bold">Top Skills</text>
    <text x="430" y="95" class="theme-text text-style" font-size="12">JavaScript 🟨 95%</text>
    <text x="430" y="115" class="theme-text text-style" font-size="12">React ⚛️ 88%</text>
    <text x="430" y="135" class="theme-text text-style" font-size="12">Node.js 🟢 82%</text>
    <text x="430" y="155" class="theme-text text-style" font-size="12">TypeScript 🔷 75%</text>
    
    <!-- Performance Graph -->
    <rect x="620" y="50" width="160" height="120" rx="10" class="gradient-bg" opacity="0.2"/>
    <text x="700" y="75" text-anchor="middle" class="theme-secondary text-style" font-size="14" font-weight="bold">Performance</text>
    
    <!-- Simple bar chart -->
    <rect x="630" y="140" width="20" height="20" class="theme-primary" opacity="0.8"/>
    <rect x="655" y="130" width="20" height="30" class="theme-accent" opacity="0.8"/>
    <rect x="680" y="120" width="20" height="40" class="theme-secondary" opacity="0.8"/>
    <rect x="705" y="110" width="20" height="50" class="theme-primary" opacity="0.8"/>
    <rect x="730" y="100" width="20" height="60" class="theme-accent" opacity="0.8"/>
    <rect x="755" y="90" width="20" height="70" class="theme-secondary" opacity="0.8"/>
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(createSVG(800, 200, content, theme));
};
