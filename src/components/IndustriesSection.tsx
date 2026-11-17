import React, { useState } from 'react';
import { INDUSTRIES_PROJECTS_DATA, IndustryProject } from '../data/industriesData';
import { IndustryVisualMockup } from './IndustryVisualMockup';
import { EngineeringGraphicArt } from './EngineeringGraphicArt';
import { 
  Building2, 
  HeartPulse, 
  GraduationCap, 
  ShoppingCart, 
  Truck, 
  Compass, 
  Home, 
  Factory, 
  Tv, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface IndustriesSectionProps {
  onSelectProjectDetails?: (project: any) => void;
  onOpenConsultation?: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ 
  onSelectProjectDetails, 
  onOpenConsultation 
}) => {
  // Start with Media & Entertainment or Healthcare
  const [activeId, setActiveId] = useState<string>(INDUSTRIES_PROJECTS_DATA[0].id);

  const activeProject = INDUSTRIES_PROJECTS_DATA.find((p) => p.id === activeId) || INDUSTRIES_PROJECTS_DATA[0];

  const getIndustryIcon = (iconName: string, size = 16) => {
    switch (iconName) {
      case 'Building2': return <Building2 size={size} />;
      case 'HeartPulse': return <HeartPulse size={size} />;
      case 'GraduationCap': return <GraduationCap size={size} />;
      case 'ShoppingCart': return <ShoppingCart size={size} />;
      case 'Truck': return <Truck size={size} />;
      case 'Compass': return <Compass size={size} />;
      case 'Home': return <Home size={size} />;
      case 'Factory': return <Factory size={size} />;
      case 'Tv': return <Tv size={size} />;
      default: return <Building2 size={size} />;
    }
  };

  return (
    <section 
      id="industries"
      style={{
        backgroundColor: '#0B0F17',
        color: '#FFFFFF',
        paddingTop: 'clamp(4rem, 8vw, 6.5rem)',
        paddingBottom: 'clamp(4rem, 8vw, 6.5rem)',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      {/* Consistent Engineering Graphic Art (Dark Variant) */}
      <EngineeringGraphicArt variant="dark" sectionCode="SEC.04/INDUSTRIES" title="VERTICAL_ENTERPRISE_SYSTEMS" />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ maxWidth: '800px', margin: '0 auto 2.5rem auto', textAlign: 'center' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(250, 84, 19, 0.1)',
              color: '#FF8C38',
              borderRadius: '9999px',
              padding: '0.4rem 1rem',
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '1rem',
              border: '1px solid rgba(250, 84, 19, 0.25)'
            }}
          >
            <Sparkles size={14} style={{ color: '#FA5413' }} />
            <span>Proven Sector Expertise</span>
          </div>

          <h2 className="heading-section" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Empowering Industries with <span className="gradient-orange-text">Specialized Software</span>
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Select any industry below to inspect real systems we engineered, including the business problems solved, delivered architectures, and verified performance outcomes.
          </p>
        </div>

        {/* Top Horizontal Category Pills Bar (Point 2 & 3 fix: Clean horizontal bar, zero scroll required!) */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.6rem',
            marginBottom: '2.5rem'
          }}
        >
          {INDUSTRIES_PROJECTS_DATA.map((ind) => {
            const isActive = ind.id === activeId;
            return (
              <button
                type="button"
                key={ind.id}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveId(ind.id);
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.2rem',
                  borderRadius: '9999px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isActive ? '1px solid #FA5413' : '1px solid rgba(255, 255, 255, 0.12)',
                  backgroundColor: isActive ? '#FA5413' : 'rgba(24, 28, 35, 0.75)',
                  color: isActive ? '#FFFFFF' : '#CBD5E1',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive ? '0 6px 18px rgba(250, 84, 19, 0.35)' : 'none',
                  transform: isActive ? 'scale(1.03)' : 'scale(1)'
                }}
              >
                <span>{getIndustryIcon(ind.iconName, 15)}</span>
                <span>{ind.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Showcase Card (Point 2 & 3 fix: Single fixed-height card, smooth fade, rich visual on left, narrative on right) */}
        <div 
          key={activeProject.id}
          className="animate-tab-switch"
          style={{
            backgroundColor: '#181C23',
            border: '1px solid rgba(250, 84, 19, 0.35)',
            borderRadius: '20px',
            boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(250, 84, 19, 0.15)',
            overflow: 'hidden',
            minHeight: '520px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div className="grid-industries-layout" style={{ padding: 'clamp(1.75rem, 4vw, 3rem)' }}>
            
            {/* Left: Rich Visual Product Mockup (5 cols on lg) */}
            <div style={{ width: '100%' }}>
              <IndustryVisualMockup 
                visualType={activeProject.visualType} 
                projectTitle={activeProject.projectTitle}
              />
            </div>

            {/* Right: Rich Case Study Narrative (7 cols on lg) */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
              
              {/* Top Tag & Client Type */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span 
                  style={{
                    backgroundColor: 'rgba(250, 84, 19, 0.15)',
                    color: '#FA5413',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    border: '1px solid rgba(250, 84, 19, 0.25)'
                  }}
                >
                  {activeProject.name}
                </span>
                <span style={{ fontSize: '0.82rem', color: '#94A3B8', fontWeight: 600 }}>
                  Client: {activeProject.clientType}
                </span>
              </div>

              {/* Title & Bold Impact Hook */}
              <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.25, marginBottom: '0.65rem' }}>
                {activeProject.projectTitle}
              </h3>

              <p style={{ fontSize: '1.05rem', fontWeight: 600, color: '#FF8C38', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                {activeProject.headline}
              </p>

              {/* Problem Solved & Delivered Architecture */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
                <div style={{ backgroundColor: 'rgba(11, 15, 23, 0.8)', borderRadius: '10px', padding: '1rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', color: '#EF4444', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>
                    Business Problem:
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#CBD5E1', lineHeight: 1.55 }}>
                    {activeProject.problem}
                  </div>
                </div>

                <div style={{ backgroundColor: 'rgba(11, 15, 23, 0.8)', borderRadius: '10px', padding: '1rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', color: '#10B981', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>
                    Solution Delivered:
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#CBD5E1', lineHeight: 1.55 }}>
                    {activeProject.solution}
                  </div>
                </div>
              </div>

              {/* Verified Measurable Results Bullets */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', color: '#FFFFFF', letterSpacing: '0.06em', marginBottom: '0.65rem' }}>
                  Verified Production Deliverables:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '0.45rem' }} className="sm:grid-cols-2">
                  {activeProject.verifiedResults.map((res, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.86rem', color: '#E2E8F0' }}>
                      <CheckCircle2 size={16} style={{ color: '#FA5413', marginTop: '2px', flexShrink: 0 }} />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Tech Stack & CTA */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {activeProject.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      style={{
                        fontSize: '0.72rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#CBD5E1',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                        fontWeight: 600
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={(e) => {
                    if (onOpenConsultation) {
                      e.preventDefault();
                      onOpenConsultation();
                    }
                  }}
                  className="btn btn-primary"
                  style={{
                    padding: '0.75rem 1.35rem',
                    fontSize: '0.9rem',
                    borderRadius: '8px'
                  }}
                >
                  <span>Build For {activeProject.shortLabel}</span>
                  <ArrowRight size={16} />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
