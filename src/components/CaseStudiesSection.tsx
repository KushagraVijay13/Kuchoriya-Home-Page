import React, { useState } from 'react';
import { CASE_STUDIES_DATA, CASE_STUDY_CATEGORIES } from '../data/caseStudiesData';
import { CaseStudyItem } from '../types';
import { EngineeringGraphicArt } from './EngineeringGraphicArt';
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  Play,
  CreditCard,
  Key,
  Activity,
  Tv,
  Users,
  Film,
  Zap,
  Layers
} from 'lucide-react';

interface CaseStudiesSectionProps {
  onSelectProject?: (project: CaseStudyItem) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredStudies = selectedCategory === 'all'
    ? CASE_STUDIES_DATA
    : CASE_STUDIES_DATA.filter((s) => s.industry === selectedCategory);

  const getProjectVisual = (id: string) => {
    switch (id) {
      case 'ott-streaming':
        return (
          <div style={{ background: 'linear-gradient(135deg, #181C23 0%, #0F172A 100%)', height: '100%', minHeight: '230px', borderRadius: '14px', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FFFFFF', border: '1px solid rgba(250, 84, 19, 0.35)', position: 'relative', overflow: 'hidden' }}>
            {/* Ambient OTT Glow */}
            <div style={{ position: 'absolute', top: -30, right: -30, width: '120px', height: '120px', background: 'radial-gradient(circle, rgba(250,84,19,0.35) 0%, transparent 70%)', filter: 'blur(25px)' }} />
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 2 }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, backgroundColor: 'rgba(250, 84, 19, 0.2)', color: '#FF8C38', padding: '0.25rem 0.6rem', borderRadius: '6px', border: '1px solid rgba(250, 84, 19, 0.3)' }}>
                GLOBAL OTT PLATFORM
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', color: '#10B981', fontWeight: 700 }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }} className="pulse-live" />
                <span>1M+ Active Users</span>
              </div>
            </div>

            {/* Simulated OTT Video Wall Preview */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', margin: '1rem 0', position: 'relative', zIndex: 2 }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '8px', height: '62px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Film size={20} style={{ color: '#FF8C38' }} />
              </div>
              <div style={{ backgroundColor: 'rgba(250,84,19,0.12)', borderRadius: '8px', height: '62px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(250,84,19,0.4)' }}>
                <Play size={22} style={{ color: '#FA5413' }} />
              </div>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '8px', height: '62px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Tv size={20} style={{ color: '#38BDF8' }} />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.72rem', color: '#94A3B8', position: 'relative', zIndex: 2 }}>
              <span>Multi-DRM • 4K HLS Stream</span>
              <span style={{ color: '#FA5413', fontWeight: 700 }}>99.98% SLA</span>
            </div>
          </div>
        );

      case 'social-ai-app':
        return (
          <div style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)', height: '100%', minHeight: '230px', borderRadius: '14px', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, backgroundColor: 'rgba(0,0,0,0.3)', padding: '0.25rem 0.6rem', borderRadius: '6px' }}>
                COMMUNITY AI ENGINE
              </span>
              <Users size={18} style={{ color: '#A5B4FC' }} />
            </div>

            <div style={{ margin: '0.75rem 0' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>2,000,000+ Members</div>
              <div style={{ fontSize: '0.75rem', color: '#C7D2FE', marginTop: '0.2rem' }}>Sub-50ms Global Socket Latency</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(0,0,0,0.25)', padding: '0.45rem 0.75rem', borderRadius: '8px', fontSize: '0.7rem' }}>
              <span style={{ color: '#818CF8', fontWeight: 600 }}>Real-Time AI Vision Moderation</span>
              <span style={{ color: '#10B981', fontWeight: 800 }}>99.4% Accurate</span>
            </div>
          </div>
        );

      case 'hipaa-emr':
        return (
          <div style={{ background: 'linear-gradient(135deg, #0C4A6E 0%, #0369A1 100%)', height: '100%', minHeight: '230px', borderRadius: '14px', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, backgroundColor: 'rgba(0,0,0,0.3)', padding: '0.25rem 0.6rem', borderRadius: '6px' }}>
                HL7 / FHIR INTEROP
              </span>
              <Activity size={18} style={{ color: '#38BDF8' }} />
            </div>
            <div style={{ margin: '0.75rem 0' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>2M+ Patient Records</div>
              <div style={{ fontSize: '0.75rem', color: '#BAE6FD', marginTop: '0.2rem' }}>Sub-Second Query • Zero Breaches</div>
            </div>
            <div style={{ fontSize: '0.7rem', backgroundColor: '#0284C7', padding: '0.35rem 0.65rem', borderRadius: '6px', textAlign: 'center', fontWeight: 700 }}>
              100% HIPAA &amp; HITECH COMPLIANT
            </div>
          </div>
        );

      case 'expensya-fintech':
        return (
          <div style={{ background: 'linear-gradient(135deg, #064E3B 0%, #059669 100%)', height: '100%', minHeight: '230px', borderRadius: '14px', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <CreditCard size={20} style={{ color: '#A7F3D0' }} />
              <span style={{ fontSize: '0.7rem', fontWeight: 800, backgroundColor: 'rgba(0,0,0,0.3)', padding: '0.25rem 0.6rem', borderRadius: '6px' }}>
                AI OCR ENGINE
              </span>
            </div>
            <div style={{ margin: '0.75rem 0' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>-80% Processing Time</div>
              <div style={{ fontSize: '0.75rem', color: '#D1FAE5', marginTop: '0.2rem' }}>Automated Spend &amp; Multi-Currency Sync</div>
            </div>
            <div style={{ fontSize: '0.7rem', backgroundColor: '#047857', padding: '0.35rem 0.65rem', borderRadius: '6px', textAlign: 'center', fontWeight: 700 }}>
              99.2% LINE-ITEM ACCURACY • SAP / ORACLE
            </div>
          </div>
        );

      case 'eduk-platform':
        return (
          <div style={{ background: 'linear-gradient(135deg, #7C2D12 0%, #C2410C 100%)', height: '100%', minHeight: '230px', borderRadius: '14px', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, backgroundColor: 'rgba(0,0,0,0.3)', padding: '0.25rem 0.6rem', borderRadius: '6px' }}>
                LIVE OTT LMS
              </span>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#FFFFFF', color: '#C2410C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Play size={14} style={{ marginLeft: '2px' }} />
              </div>
            </div>
            <div style={{ margin: '0.75rem 0' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>500,000+ Learners</div>
              <div style={{ fontSize: '0.75rem', color: '#FFEDD5', marginTop: '0.2rem' }}>Brazil &amp; Latin America Creator Hub</div>
            </div>
            <div style={{ fontSize: '0.7rem', backgroundColor: '#EA580C', padding: '0.35rem 0.65rem', borderRadius: '6px', textAlign: 'center', fontWeight: 700 }}>
              +35% COURSE COMPLETION • OFFLINE HLS
            </div>
          </div>
        );

      case 'sixt-mobility':
        return (
          <div style={{ background: 'linear-gradient(135deg, #181C23 0%, #2A303C 100%)', height: '100%', minHeight: '230px', borderRadius: '14px', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FFFFFF', border: '1px solid rgba(250,84,19,0.4)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#FA5413' }}>SIXT MOBILITY</span>
              <Key size={18} style={{ color: '#FA5413' }} />
            </div>
            <div style={{ margin: '0.75rem 0' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>3-Min Airport Pickup</div>
              <div style={{ fontSize: '0.75rem', color: '#CBD5E1', marginTop: '0.2rem' }}>Contactless Digital Key Bluetooth Unlock</div>
            </div>
            <div style={{ fontSize: '0.7rem', backgroundColor: '#FA5413', padding: '0.35rem 0.65rem', borderRadius: '6px', textAlign: 'center', fontWeight: 700 }}>
              4.8 ★ APP STORE RATING • 65% DIGITAL ADOPTION
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section 
      id="case-studies"
      style={{
        backgroundColor: '#0B0F17',
        color: '#FFFFFF',
        paddingTop: 'clamp(4rem, 8vw, 6.5rem)',
        paddingBottom: 'clamp(4rem, 8vw, 6.5rem)',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden'
      }}
    >
      {/* Consistent Engineering Graphic Art (Dark Variant) */}
      <EngineeringGraphicArt variant="dark" sectionCode="SEC.05/PORTFOLIO" title="VERIFIED_CLIENT_SYSTEMS" />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
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
                  marginBottom: '0.75rem',
                  border: '1px solid rgba(250, 84, 19, 0.25)'
                }}
              >
                <Sparkles size={14} style={{ color: '#FA5413' }} />
                <span>Verified Client Case Studies</span>
              </div>
              <h2 className="heading-section" style={{ color: '#FFFFFF' }}>
                Featured Engineering <span style={{ color: '#FA5413' }}>Success Stories</span>
              </h2>
            </div>

            <a
              href="https://kuchoriyatechsoft.com/case-studies"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#FA5413',
                textDecoration: 'none'
              }}
              className="hover:underline"
            >
              <span>Explore All Official Projects</span>
              <ExternalLink size={16} />
            </a>
          </div>

          <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '820px', lineHeight: 1.6 }}>
            Explore how Kuchoriya TechSoft designs and deploys mission-critical software, custom AI systems, and mobile platforms for global enterprise leaders.
          </p>
        </div>

        {/* Category Filter Pills (Matches User's Screenshot 3 inspiration!) */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.55rem',
            marginBottom: '2.75rem'
          }}
        >
          {CASE_STUDY_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                type="button"
                key={cat.id}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedCategory(cat.id);
                }}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isActive ? '1px solid #FA5413' : '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: isActive ? '#FA5413' : 'rgba(24, 28, 35, 0.8)',
                  color: isActive ? '#FFFFFF' : '#CBD5E1',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive ? '0 4px 12px rgba(250, 84, 19, 0.3)' : 'none',
                  transform: isActive ? 'scale(1.02)' : 'scale(1)'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Animated Case Studies Grid */}
        <div 
          key={selectedCategory}
          className="animate-tab-switch grid-casestudies-layout"
          style={{
            minHeight: '400px'
          }}
        >
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              style={{
                backgroundColor: '#181C23',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = '#FA5413';
                e.currentTarget.style.boxShadow = '0 25px 45px -12px rgba(250, 84, 19, 0.25), 0 8px 16px -4px rgba(0, 0, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = '0 8px 24px -4px rgba(0, 0, 0, 0.3)';
              }}
            >
              <div>
                {/* Visual Banner Preview */}
                <div style={{ marginBottom: '1.5rem' }}>
                  {getProjectVisual(study.id)}
                </div>

                {/* Tags & Verified Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.85rem' }}>
                  <span 
                    style={{
                      backgroundColor: 'rgba(250, 84, 19, 0.12)',
                      color: '#FF8C38',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      padding: '0.3rem 0.75rem',
                      borderRadius: '6px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      border: '1px solid rgba(250, 84, 19, 0.25)'
                    }}
                  >
                    {study.industry}
                  </span>

                  <span 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#34D399',
                      backgroundColor: 'rgba(16, 185, 129, 0.12)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '6px',
                      border: '1px solid rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    <ShieldCheck size={14} />
                    <span>{study.badge}</span>
                  </span>
                </div>

                {/* Case Study Title & Tagline */}
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  {study.title}
                </h3>
                <p style={{ fontSize: '0.94rem', fontWeight: 600, color: '#FA5413', marginBottom: '1.1rem', lineHeight: 1.45 }}>
                  {study.tagline}
                </p>

                {/* Problem & Solution Accordion Narrative */}
                <div style={{ backgroundColor: '#101622', borderRadius: '12px', padding: '1.1rem', marginBottom: '1.25rem', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#F87171', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>
                      Client Challenge:
                    </div>
                    <div style={{ fontSize: '0.86rem', color: '#CBD5E1', lineHeight: 1.5 }}>
                      {study.problem}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#34D399', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>
                      Delivered Engineering:
                    </div>
                    <div style={{ fontSize: '0.86rem', color: '#E2E8F0', lineHeight: 1.5 }}>
                      {study.solution}
                    </div>
                  </div>
                </div>

                {/* Verified Results List */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#CBD5E1', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.65rem' }}>
                    Verified Project Outcomes:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {study.verifiedResults.map((result, rIdx) => (
                      <li key={rIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.86rem', color: '#94A3B8' }}>
                        <CheckCircle2 size={16} style={{ color: '#FA5413', flexShrink: 0, marginTop: '2px' }} />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Tech Tags & Modal Trigger Button */}
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.35rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  {study.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#CBD5E1',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '0.25rem 0.55rem',
                        borderRadius: '6px'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <button
                    type="button"
                    onClick={() => onSelectProject && onSelectProject(study)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      color: '#FA5413',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0
                    }}
                    className="hover:underline"
                  >
                    <span>View Architecture Details</span>
                    <ArrowRight size={16} />
                  </button>

                  <a
                    href={study.verifiedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: '#94A3B8',
                      textDecoration: 'none'
                    }}
                    className="hover:text-slate-900"
                  >
                    <span>Official Portfolio</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
