import React from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';
import { EngineeringGraphicArt } from './EngineeringGraphicArt';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section 
      style={{
        backgroundColor: '#0B0F17',
        color: '#FFFFFF',
        paddingTop: 'clamp(4rem, 8vw, 6.5rem)',
        paddingBottom: 'clamp(4rem, 8vw, 6.5rem)',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden'
      }}
    >
      {/* Consistent Engineering Graphic Art (Dark Variant) */}
      <EngineeringGraphicArt variant="dark" sectionCode="SEC.09/REVIEWS" title="CLIENT_VERIFIED_OUTCOMES" />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Header */}
        <div style={{ maxWidth: '780px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(250, 84, 19, 0.1)',
              color: '#FF8C38',
              borderRadius: '9999px',
              padding: '0.35rem 0.95rem',
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '1rem',
              border: '1px solid rgba(250, 84, 19, 0.25)'
            }}
          >
            Verified Client Feedback
          </div>

          <h2 className="heading-section" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            What Technology Leaders Say About <span style={{ color: '#FA5413' }}>Kuchoriya</span>
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Read substantiated reviews and verified ratings from CTOs, product vice presidents, and enterprise founders across the globe.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid-casestudies-layout">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              style={{
                backgroundColor: '#181C23',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.25s ease'
              }}
              className="hover:border-orange-500/50 hover:shadow-lg"
            >
              <div>
                {/* Top: 5 Stars & Platform Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.2rem' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} style={{ fill: '#FA5413', color: '#FA5413' }} />
                    ))}
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#FFFFFF', marginLeft: '0.4rem' }}>
                      5.0 / 5.0
                    </span>
                  </div>

                  <span 
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#CBD5E1',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}
                  >
                    Verified on {t.platform}
                  </span>
                </div>

                {/* Scope */}
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#FA5413', letterSpacing: '0.04em', marginBottom: '0.65rem' }}>
                  Project: {t.projectScope}
                </div>

                {/* Quote */}
                <p style={{ fontSize: '0.96rem', color: '#CBD5E1', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div 
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(250, 84, 19, 0.15)',
                    color: '#FA5413',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1rem',
                    flexShrink: 0
                  }}
                >
                  {t.clientName.charAt(0)}
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF' }}>
                    {t.clientName}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>
                    {t.designation} • <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{t.company}</span> ({t.location})
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
