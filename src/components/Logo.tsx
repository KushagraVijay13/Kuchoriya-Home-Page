import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '', size = 'md' }) => {
  const isLight = variant === 'light';
  
  // Dimensions
  const dimensions = {
    sm: { height: 32, iconSize: 28, fontSize: '1.1rem', subSize: '0.55rem' },
    md: { height: 42, iconSize: 36, fontSize: '1.4rem', subSize: '0.65rem' },
    lg: { height: 52, iconSize: 44, fontSize: '1.75rem', subSize: '0.75rem' }
  }[size];

  return (
    <div 
      className={`inline-flex items-center gap-3 select-none ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}
    >
      {/* Official Kuchoriya Geometric Monogram Mark */}
      <svg
        width={dimensions.iconSize}
        height={dimensions.iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="kuchoriyaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7A29" />
            <stop offset="100%" stopColor="#FA5413" />
          </linearGradient>
          <linearGradient id="kuchoriyaDarkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A303C" />
            <stop offset="100%" stopColor="#121721" />
          </linearGradient>
          <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#FA5413" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* Outer Hexagonal Shield Frame */}
        <polygon
          points="50,4 90,26 90,74 50,96 10,74 10,26"
          fill="url(#kuchoriyaDarkGradient)"
          stroke="#2A3447"
          strokeWidth="3"
        />

        {/* Dynamic Stylized 'K' Tech Facets */}
        {/* Left vertical pillar */}
        <path
          d="M 28 24 L 40 24 L 40 76 L 28 76 Z"
          fill="url(#kuchoriyaGradient)"
          filter="url(#glowEffect)"
        />
        {/* Upper diagonal wing */}
        <path
          d="M 44 48 L 68 24 L 80 24 L 54 50 Z"
          fill="url(#kuchoriyaGradient)"
        />
        {/* Lower diagonal wing */}
        <path
          d="M 52 48 L 78 76 L 64 76 L 42 54 Z"
          fill="#FA5413"
        />
        {/* High-tech node point */}
        <circle cx="70" cy="50" r="4" fill="#FFFFFF" opacity="0.9" />
      </svg>

      {/* Brand Typography */}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'baseline', 
          fontWeight: 800, 
          fontSize: dimensions.fontSize, 
          letterSpacing: '-0.03em',
          color: isLight ? '#0B0F17' : '#FFFFFF'
        }}>
          <span>Kuchoriya</span>
          <span style={{ color: '#FA5413', marginLeft: '1px' }}>.</span>
        </div>
        <div style={{ 
          fontSize: dimensions.subSize, 
          fontWeight: 700, 
          letterSpacing: '0.22em', 
          textTransform: 'uppercase',
          color: isLight ? '#FA5413' : '#FF8C38',
          marginTop: '2px'
        }}>
          TECHSOFT
        </div>
      </div>
    </div>
  );
};
