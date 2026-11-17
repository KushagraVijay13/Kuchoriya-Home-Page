import React from 'react';
import { COMPANY_STATS, TRUST_BADGES } from '../data/companyData';
import { EngineeringGraphicArt } from './EngineeringGraphicArt';
import { Award, Star, ShieldCheck, CheckCircle } from 'lucide-react';

export const CredibilityBar: React.FC = () => {
  return (
    <section 
      style={{
        backgroundColor: '#0B0F17',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '2.5rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Consistent Engineering Graphic Art */}
      <EngineeringGraphicArt variant="dark" sectionCode="SEC.02/METRICS" title="VERIFIED_SCALE_AND_LONGEVITY" />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Statistics Grid */}
        <div 
          className="grid-stats-5"
          style={{
            gap: '1.5rem',
            marginBottom: '2.5rem'
          }}
        >
          {COMPANY_STATS.map((stat, idx) => (
            <div 
              key={stat.label}
              style={{
                backgroundColor: 'rgba(24, 28, 35, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
                padding: '1.25rem 1rem',
                textAlign: 'center',
                transition: 'all 0.25s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="hover:border-orange-500/40"
            >
              {/* Subtle top accent line */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '25%',
                  right: '25%',
                  height: '2px',
                  backgroundColor: idx === 0 ? '#FA5413' : 'rgba(250, 84, 19, 0.3)'
                }}
              />

              <div 
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  marginBottom: '0.35rem',
                  fontFeatureSettings: '"tnum"'
                }}
              >
                {stat.number}
              </div>

              <div 
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#FA5413',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '0.25rem'
                }}
              >
                {stat.label}
              </div>

              <div style={{ fontSize: '0.72rem', color: '#94A3B8', lineHeight: 1.35 }}>
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Strip */}
        <div 
          style={{
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem'
          }}
        >
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94A3B8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Recognized & Verified by Leading Global Technology Rating Authorities
          </div>

          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              width: '100%'
            }}
          >
            {TRUST_BADGES.map((badge) => (
              <div 
                key={badge.name}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.8rem',
                  color: '#E2E8F0',
                  transition: 'background-color 0.2s ease'
                }}
                className="hover:bg-white/10"
              >
                {badge.category === 'Clutch' && <Star size={14} style={{ fill: '#FA5413', color: '#FA5413' }} />}
                {badge.category === 'GoodFirms' && <Star size={14} style={{ fill: '#10B981', color: '#10B981' }} />}
                {badge.category === 'Globee' && <Award size={14} style={{ color: '#F59E0B' }} />}
                {badge.category === 'TechBehemoths' && <ShieldCheck size={14} style={{ color: '#3B82F6' }} />}
                {badge.category === 'RightFirms' && <CheckCircle size={14} style={{ color: '#FA5413' }} />}
                {badge.category === 'DesignRush' && <Award size={14} style={{ color: '#8B5CF6' }} />}
                
                <span style={{ fontWeight: 600 }}>{badge.name}:</span>
                <span style={{ color: '#CBD5E1' }}>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
