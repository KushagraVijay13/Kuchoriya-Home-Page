import React from 'react';
import { VERIFIED_CLIENT_LOGOS, TRUST_BADGES } from '../data/companyData';
import { Award, Star, CheckCircle, Shield } from 'lucide-react';

export const TrustLogosSection: React.FC = () => {
  return (
    <section 
      style={{
        backgroundColor: '#0B0F17',
        color: '#FFFFFF',
        paddingTop: '3.5rem',
        paddingBottom: '4.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div className="container" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#FA5413', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
          Trusted By Industry Leaders &amp; Startups
        </div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF' }}>
          Partnered with Visionary Startups and Global Enterprises
        </h3>
      </div>

      {/* Infinite Client Logos Ticker */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        {/* Left & Right Gradient Shadows */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '80px',
            background: 'linear-gradient(to right, #0B0F17, transparent)',
            zIndex: 10,
            pointerEvents: 'none'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            width: '80px',
            background: 'linear-gradient(to left, #0B0F17, transparent)',
            zIndex: 10,
            pointerEvents: 'none'
          }}
        />

        <div className="ticker-track">
          {/* Double array for seamless loop */}
          {[...VERIFIED_CLIENT_LOGOS, ...VERIFIED_CLIENT_LOGOS].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                backgroundColor: 'rgba(24, 28, 35, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                padding: '0.75rem 1.25rem',
                margin: '0 0.65rem',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
              className="hover:border-orange-500 hover:shadow-sm"
            >
              <div 
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(250, 84, 19, 0.12)',
                  color: '#FA5413',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.8rem'
                }}
              >
                {client.name.charAt(0)}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF' }}>
                  {client.name}
                </span>
                <span style={{ fontSize: '0.7rem', color: '#94A3B8' }}>
                  {client.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Awards & Recognition Cards */}
      <div className="container" style={{ marginTop: '3.5rem' }}>
        <div className="grid-trustlogos-layout">
          <div style={{ backgroundColor: '#181C23', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'rgba(217, 119, 6, 0.15)', color: '#FBBF24', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Award size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FFFFFF' }}>Globee Awards Winner</div>
              <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>Tech Excellence &amp; Innovation</div>
            </div>
          </div>

          <div style={{ backgroundColor: '#181C23', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'rgba(250, 84, 19, 0.15)', color: '#FA5413', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Star size={22} style={{ fill: '#FA5413' }} />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FFFFFF' }}>Clutch 5.0 ★ Rated</div>
              <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>Top Custom App Developers</div>
            </div>
          </div>

          <div style={{ backgroundColor: '#181C23', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'rgba(5, 150, 105, 0.15)', color: '#34D399', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <CheckCircle size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FFFFFF' }}>GoodFirms Verified</div>
              <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>Top Software Engineering</div>
            </div>
          </div>

          <div style={{ backgroundColor: '#181C23', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'rgba(37, 99, 235, 0.15)', color: '#60A5FA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Shield size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FFFFFF' }}>TechBehemoths Certified</div>
              <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>Global Verified Engineering</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
