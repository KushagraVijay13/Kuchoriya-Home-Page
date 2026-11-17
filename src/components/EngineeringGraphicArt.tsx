import React from 'react';

export interface EngineeringGraphicArtProps {
  className?: string;
  variant?: 'hero' | 'dark' | 'light' | 'connector';
  sectionCode?: string;
  title?: string;
}

export const EngineeringGraphicArt: React.FC<EngineeringGraphicArtProps> = ({ 
  className = '', 
  variant = 'dark',
  sectionCode = 'SYS.ARCH // KTS.V4',
  title = 'DISTRIBUTED_SYSTEMS'
}) => {
  const isLight = variant === 'light';

  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      <svg 
        viewBox="0 0 1440 800" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id={`engGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FA5413" stopOpacity={isLight ? '0.4' : '0.8'} />
            <stop offset="100%" stopColor="#FF8C38" stopOpacity={isLight ? '0.1' : '0.2'} />
          </linearGradient>

          <linearGradient id={`engCyanGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity={isLight ? '0.35' : '0.7'} />
            <stop offset="100%" stopColor="#0284C7" stopOpacity={isLight ? '0.05' : '0.1'} />
          </linearGradient>

          <pattern 
            id={`techGrid-${variant}`} 
            width="60" 
            height="60" 
            patternUnits="userSpaceOnUse"
          >
            <path 
              d="M 60 0 L 0 0 0 60" 
              fill="none" 
              stroke={isLight ? "rgba(15, 23, 42, 0.02)" : "rgba(255, 255, 255, 0.018)"} 
              strokeWidth="1" 
            />
            <circle 
              cx="60" 
              cy="0" 
              r="1.2" 
              fill={isLight ? "rgba(250, 84, 19, 0.08)" : "rgba(250, 84, 19, 0.12)"} 
            />
            <circle 
              cx="0" 
              cy="60" 
              r="1.2" 
              fill={isLight ? "rgba(56, 189, 248, 0.06)" : "rgba(56, 189, 248, 0.10)"} 
            />
          </pattern>
        </defs>

        {/* 1. Underlying Technical Blueprint Grid */}
        <rect width="1440" height="800" fill={`url(#techGrid-${variant})`} />

        {/* 2. Precision Coordinate Markers & Technical Stamps */}
        <g 
          opacity={isLight ? "0.18" : "0.25"} 
          style={{ 
            fontFamily: 'monospace', 
            fontSize: '9.5px', 
            fill: isLight ? '#64748B' : '#94A3B8',
            letterSpacing: '0.06em'
          }}
        >
          <text x="50" y="55">[{sectionCode}]</text>
          <text x="50" y="70">ENGINEERING_SPEC: {title}</text>
          
          <text x="1390" y="55" textAnchor="end">SYS_CADENCE // 14.2ms</text>
          <text x="1390" y="70" textAnchor="end">STATUS: CONTINUOUS_DEPLOYMENT</text>

          {/* Crosshairs */}
          <path d="M 60 140 L 76 140 M 68 132 L 68 148" stroke={isLight ? "rgba(250, 84, 19, 0.15)" : "rgba(250, 84, 19, 0.22)"} strokeWidth="1" />
          <path d="M 1370 140 L 1386 140 M 1378 132 L 1378 148" stroke={isLight ? "rgba(56, 189, 248, 0.15)" : "rgba(56, 189, 248, 0.22)"} strokeWidth="1" />
        </g>

        {/* 3. Hero-Specific Isometric Visuals */}
        {variant === 'hero' && (
          <>
            {/* Main Highway Bus Lines */}
            <g opacity="0.45">
              <path 
                d="M 40 380 L 320 380 L 460 300 L 780 300 L 920 410 L 1400 410" 
                stroke="rgba(250, 84, 19, 0.18)" 
                strokeWidth="1.5" 
                fill="none" 
              />
              <path 
                d="M 40 380 L 320 380 L 460 300 L 780 300 L 920 410 L 1400 410" 
                stroke="#FA5413" 
                strokeWidth="1.5" 
                fill="none" 
                className="circuit-flow-line" 
              />

              <path 
                d="M 80 480 L 260 480 L 380 570 L 740 570 L 860 470 L 1400 470" 
                stroke="rgba(56, 189, 248, 0.15)" 
                strokeWidth="1.5" 
                fill="none" 
              />
              <path 
                d="M 80 480 L 260 480 L 380 570 L 740 570 L 860 470 L 1400 470" 
                stroke="#38BDF8" 
                strokeWidth="1.5" 
                fill="none" 
                className="circuit-flow-fast" 
              />

              <path d="M 320 380 L 320 480" stroke="rgba(250, 84, 19, 0.18)" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 780 300 L 780 200 L 950 200" stroke="rgba(250, 84, 19, 0.15)" strokeWidth="1" />
            </g>

            {/* Hexagonal API Gateway Hub */}
            <g transform="translate(420, 265)" opacity="0.85">
              <polygon points="40,0 80,20 80,60 40,80 0,60 0,20" fill="rgba(16, 22, 34, 0.85)" stroke="#FA5413" strokeWidth="1.5" />
              <circle cx="40" cy="40" r="5" fill="#FA5413" className="pulsing-circuit-node" />
              <text x="40" y="98" fill="#FF8C38" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="700">API_GATEWAY</text>
            </g>

            {/* Neural Vector RAG Node */}
            <g transform="translate(620, 150)" opacity="0.8">
              <rect x="0" y="0" width="130" height="56" rx="8" fill="rgba(16, 22, 34, 0.85)" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1" />
              <path d="M 20 28 L 45 16 L 85 40 L 110 28" stroke="#38BDF8" strokeWidth="1.5" fill="none" />
              <circle cx="20" cy="28" r="3" fill="#38BDF8" />
              <circle cx="45" cy="16" r="3" fill="#38BDF8" />
              <circle cx="85" cy="40" r="3" fill="#FA5413" />
              <circle cx="110" cy="28" r="3" fill="#10B981" />
              <text x="65" y="48" fill="#94A3B8" fontSize="8" fontFamily="monospace" textAnchor="middle">AI_AGENT_RAG</text>
            </g>

            {/* Isometric Server Racks & Database (Right Background) */}
            <g transform="translate(1080, 140)" opacity="0.55" className="float-diagram">
              <polygon points="80,0 160,40 80,80 0,40" fill="rgba(24, 28, 35, 0.9)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
              <polygon points="0,40 80,80 80,140 0,100" fill="rgba(16, 22, 34, 0.95)" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
              <polygon points="80,80 160,40 160,100 80,140" fill="rgba(11, 15, 23, 0.98)" stroke="rgba(250, 84, 19, 0.4)" strokeWidth="1.5" />
              <line x1="95" y1="92" x2="145" y2="67" stroke="#FA5413" strokeWidth="1.5" />
              <line x1="95" y1="106" x2="145" y2="81" stroke="#38BDF8" strokeWidth="1.5" />
              <line x1="95" y1="120" x2="145" y2="95" stroke="#10B981" strokeWidth="1.5" />

              <g transform="translate(140, 110)">
                <ellipse cx="60" cy="30" rx="45" ry="18" fill="rgba(24, 28, 35, 0.85)" stroke="#FA5413" strokeWidth="1.2" />
                <path d="M 15 30 L 15 70 A 45 18 0 0 0 105 70 L 105 30" fill="rgba(16, 22, 34, 0.9)" stroke="rgba(250, 84, 19, 0.6)" strokeWidth="1.2" />
                <ellipse cx="60" cy="70" rx="45" ry="18" fill="none" stroke="rgba(250, 84, 19, 0.3)" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M 15 70 L 15 110 A 45 18 0 0 0 105 110 L 105 70" fill="rgba(11, 15, 23, 0.95)" stroke="rgba(250, 84, 19, 0.8)" strokeWidth="1.2" />
                <text x="60" y="85" fill="#FF8C38" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="700">PG_VECTOR_DB</text>
              </g>
            </g>

            {/* Mobile Wireframe Schematic (Lower Left) */}
            <g transform="translate(140, 540)" opacity="0.6">
              <rect x="0" y="0" width="65" height="110" rx="10" fill="rgba(16, 22, 34, 0.7)" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
              <rect x="5" y="8" width="55" height="90" rx="5" fill="rgba(11, 15, 23, 0.8)" stroke="rgba(250, 84, 19, 0.3)" strokeWidth="1" />
              <line x1="22" y1="4" x2="43" y2="4" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" strokeLinecap="round" />
              <text x="32" y="122" fill="#94A3B8" fontSize="7.5" fontFamily="monospace" textAnchor="middle">MOBILE_CORE</text>
            </g>

            {/* Git Branching Tree Visual */}
            <g opacity="0.35" style={{ fontFamily: 'monospace', fontSize: '9px', fill: '#94A3B8' }}>
              <text x="960" y="700">git commit -m &quot;feat: enterprise multi-agent sync&quot;</text>
              <text x="960" y="716" fill="#38BDF8">&gt; node index.js --cluster=active --port=443</text>
              <text x="960" y="732" fill="#10B981">✔ 28 Microservices Synced [0 dropped packets]</text>
              <path d="M 930 695 L 930 750 M 930 710 L 945 725 L 945 750" stroke="rgba(250, 84, 19, 0.4)" strokeWidth="1" fill="none" />
              <circle cx="930" cy="695" r="2.5" fill="#FA5413" />
              <circle cx="945" cy="725" r="2.5" fill="#10B981" />
            </g>
          </>
        )}

        {/* 4. Consistent Dark-Section Circuit Graphic Art */}
        {variant === 'dark' && (
          <g opacity="0.32">
            {/* Primary Orange Circuit Line */}
            <path 
              d="M 0 240 L 280 240 L 380 320 L 720 320 L 820 220 L 1200 220 L 1320 340 L 1440 340" 
              stroke="rgba(250, 84, 19, 0.15)" 
              strokeWidth="1.2" 
              fill="none" 
            />
            <path 
              d="M 0 240 L 280 240 L 380 320 L 720 320 L 820 220 L 1200 220 L 1320 340 L 1440 340" 
              stroke="#FA5413" 
              strokeWidth="1.5" 
              fill="none" 
              className="circuit-flow-line" 
            />

            {/* Secondary Cyan Circuit Line */}
            <path 
              d="M 0 540 L 320 540 L 440 440 L 860 440 L 960 560 L 1440 560" 
              stroke="rgba(56, 189, 248, 0.12)" 
              strokeWidth="1.2" 
              fill="none" 
            />
            <path 
              d="M 0 540 L 320 540 L 440 440 L 860 440 L 960 560 L 1440 560" 
              stroke="#38BDF8" 
              strokeWidth="1.2" 
              fill="none" 
              className="circuit-flow-fast" 
            />

            {/* Microservice Hub Dots */}
            <circle cx="280" cy="240" r="3" fill="#FA5413" className="pulsing-circuit-node" />
            <circle cx="720" cy="320" r="3.5" fill="#FA5413" className="pulsing-circuit-node" />
            <circle cx="820" cy="220" r="3" fill="#38BDF8" className="pulsing-circuit-node" />
            <circle cx="1200" cy="220" r="3" fill="#10B981" className="pulsing-circuit-node" />
            <circle cx="440" cy="440" r="3" fill="#38BDF8" className="pulsing-circuit-node" />
            <circle cx="960" cy="560" r="3" fill="#FA5413" className="pulsing-circuit-node" />
          </g>
        )}

        {/* 5. Consistent Light-Section Circuit Graphic Art */}
        {variant === 'light' && (
          <g opacity="0.22">
            {/* Elegant light circuit traces */}
            <path 
              d="M 0 180 L 220 180 L 320 280 L 760 280 L 860 160 L 1240 160 L 1340 260 L 1440 260" 
              stroke="rgba(250, 84, 19, 0.12)" 
              strokeWidth="1" 
              fill="none" 
            />
            <path 
              d="M 0 180 L 220 180 L 320 280 L 760 280 L 860 160 L 1240 160 L 1340 260 L 1440 260" 
              stroke="#FA5413" 
              strokeWidth="1.2" 
              fill="none" 
              className="circuit-flow-line" 
            />

            <path 
              d="M 0 620 L 360 620 L 480 500 L 920 500 L 1020 620 L 1440 620" 
              stroke="rgba(56, 189, 248, 0.1)" 
              strokeWidth="1" 
              fill="none" 
            />
            <path 
              d="M 0 620 L 360 620 L 480 500 L 920 500 L 1020 620 L 1440 620" 
              stroke="#38BDF8" 
              strokeWidth="1.2" 
              fill="none" 
              className="circuit-flow-fast" 
            />

            <circle cx="220" cy="180" r="2.5" fill="#FA5413" className="pulsing-circuit-node" />
            <circle cx="760" cy="280" r="3" fill="#FA5413" className="pulsing-circuit-node" />
            <circle cx="860" cy="160" r="2.5" fill="#38BDF8" className="pulsing-circuit-node" />
            <circle cx="480" cy="500" r="2.5" fill="#38BDF8" className="pulsing-circuit-node" />
            <circle cx="1020" cy="620" r="2.5" fill="#FA5413" className="pulsing-circuit-node" />
          </g>
        )}

      </svg>
    </div>
  );
};
