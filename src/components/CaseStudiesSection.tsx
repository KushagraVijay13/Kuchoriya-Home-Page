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
  Layers,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  SlidersHorizontal
} from 'lucide-react';

interface CaseStudiesSectionProps {
  onSelectProject?: (project: CaseStudyItem) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const filteredStudies = selectedCategory === 'all'
    ? CASE_STUDIES_DATA
    : CASE_STUDIES_DATA.filter((s) => s.industry === selectedCategory);

  const totalSlides = Math.ceil(filteredStudies.length / 2);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setCurrentSlide(0);
  };

  const visibleStudies = viewMode === 'slider'
    ? filteredStudies.slice(currentSlide * 2, currentSlide * 2 + 2)
    : filteredStudies;

  const getProjectVisual = (id: string) => {
    switch (id) {
      case 'ott-streaming':
        return (
          <div style={{ background: 'linear-gradient(135deg, #181C23 0%, #0F172A 100%)', minHeight: '210px', borderRadius: '14px', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FFFFFF', border: '1px solid rgba(250, 84, 19, 0.35)', position: 'relative', overflow: 'hidden' }}>
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
          <div style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)', minHeight: '210px', borderRadius: '14px', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
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
          <div style={{ background: 'linear-gradient(135deg, #0C4A6E 0%, #0369A1 100%)', minHeight: '210px', borderRadius: '14px', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
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
          <div style={{ background: 'linear-gradient(135deg, #064E3B 0%, #059669 100%)', minHeight: '210px', borderRadius: '14px', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
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
          <div style={{ background: 'linear-gradient(135deg, #7C2D12 0%, #C2410C 100%)', minHeight: '210px', borderRadius: '14px', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
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
          <div style={{ background: 'linear-gradient(135deg, #181C23 0%, #2A303C 100%)', minHeight: '210px', borderRadius: '14px', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#FFFFFF', border: '1px solid rgba(250,84,19,0.4)', position: 'relative', overflow: 'hidden' }}>
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

        {/* Category Filter Pills */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.55rem',
            marginBottom: '1.75rem'
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
                  handleCategoryChange(cat.id);
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

        {/* Interactive Controls Bar: Project Counter, View Switcher & Slide Controls */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1.75rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Active Status & Count */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span 
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                display: 'inline-block'
              }} 
              className="pulse-live"
            />
            <span style={{ fontSize: '0.88rem', color: '#CBD5E1', fontWeight: 600 }}>
              {viewMode === 'slider' 
                ? `Showing ${Math.min(currentSlide * 2 + 1, filteredStudies.length)}–${Math.min((currentSlide + 1) * 2, filteredStudies.length)} of ${filteredStudies.length} Flagship Projects`
                : `Showing All ${filteredStudies.length} Flagship Projects`
              }
            </span>
          </div>

          {/* Controls: Slider/Grid Toggle + Navigation Chevrons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* View Mode Switcher Toggle */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#101622',
                borderRadius: '10px',
                padding: '0.25rem',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <button
                type="button"
                onClick={() => setViewMode('slider')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '7px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: viewMode === 'slider' ? '#FA5413' : 'transparent',
                  color: viewMode === 'slider' ? '#FFFFFF' : '#94A3B8',
                  transition: 'all 0.2s ease'
                }}
                title="Interactive Slider Mode (Zero Endless Scroll)"
              >
                <SlidersHorizontal size={13} />
                <span>Slider</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('grid')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '7px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: viewMode === 'grid' ? '#FA5413' : 'transparent',
                  color: viewMode === 'grid' ? '#FFFFFF' : '#94A3B8',
                  transition: 'all 0.2s ease'
                }}
                title="View All Projects Grid"
              >
                <LayoutGrid size={13} />
                <span>Grid</span>
              </button>
            </div>

            {/* Slider Navigation Chevrons */}
            {viewMode === 'slider' && filteredStudies.length > 2 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <button
                  type="button"
                  onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
                  disabled={currentSlide === 0}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: currentSlide === 0 ? 'rgba(255, 255, 255, 0.03)' : 'rgba(250, 84, 19, 0.15)',
                    border: currentSlide === 0 ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid rgba(250, 84, 19, 0.4)',
                    color: currentSlide === 0 ? '#475569' : '#FA5413',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  aria-label="Previous Slide"
                  title="Previous Projects"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1))}
                  disabled={(currentSlide + 1) * 2 >= filteredStudies.length}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    backgroundColor: (currentSlide + 1) * 2 >= filteredStudies.length ? 'rgba(255, 255, 255, 0.03)' : 'rgba(250, 84, 19, 0.15)',
                    border: (currentSlide + 1) * 2 >= filteredStudies.length ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid rgba(250, 84, 19, 0.4)',
                    color: (currentSlide + 1) * 2 >= filteredStudies.length ? '#475569' : '#FA5413',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: (currentSlide + 1) * 2 >= filteredStudies.length ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  aria-label="Next Slide"
                  title="Next Projects"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Animated Case Studies Grid / Slider Container */}
        <div 
          key={`${selectedCategory}-${currentSlide}-${viewMode}`}
          className="animate-tab-switch grid-casestudies-layout"
        >
          {visibleStudies.map((study) => (
            <div
              key={study.id}
              style={{
                backgroundColor: '#181C23',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: 'clamp(1.25rem, 2.5vw, 1.85rem)',
                boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative'
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
              <div style={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column' }}>
                {/* Visual Banner Preview */}
                <div style={{ marginBottom: '1.15rem', width: '100%' }}>
                  {getProjectVisual(study.id)}
                </div>

                {/* Tags & Verified Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span 
                    style={{
                      backgroundColor: 'rgba(250, 84, 19, 0.12)',
                      color: '#FF8C38',
                      fontSize: '0.76rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.65rem',
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
                      fontSize: '0.74rem',
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
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.4rem', lineHeight: 1.35 }}>
                  {study.title}
                </h3>
                <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#FA5413', marginBottom: '1rem', lineHeight: 1.45 }}>
                  {study.tagline}
                </p>

                {/* Verified Enterprise Impact Summary Badge (Replaces tall wall of text with punchy takeaway) */}
                <div 
                  style={{
                    backgroundColor: '#101622',
                    borderRadius: '12px',
                    padding: '0.85rem 1rem',
                    marginBottom: '1.25rem',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem'
                  }}
                >
                  <CheckCircle2 size={18} style={{ color: '#FA5413', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#34D399', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>
                      Verified Enterprise Outcome
                    </div>
                    <div style={{ fontSize: '0.84rem', color: '#E2E8F0', lineHeight: 1.45, fontWeight: 500 }}>
                      {study.verifiedResults[0]}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Tech Tags & Modal Trigger Button */}
              <div style={{ marginTop: 'auto', paddingTop: '1.15rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.15rem' }}>
                  {study.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#CBD5E1',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.5rem',
                        borderRadius: '6px'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={() => onSelectProject && onSelectProject(study)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: '#FA5413',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0
                    }}
                    className="hover:underline"
                  >
                    <span>View Architecture Details</span>
                    <ArrowRight size={15} />
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

        {/* Slider Pagination Pill Indicators */}
        {viewMode === 'slider' && totalSlides > 1 && (
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '2.25rem'
            }}
          >
            {Array.from({ length: totalSlides }).map((_, idx) => {
              const isCurrent = currentSlide === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  style={{
                    height: '8px',
                    width: isCurrent ? '32px' : '8px',
                    borderRadius: '9999px',
                    backgroundColor: isCurrent ? '#FA5413' : 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isCurrent ? '0 0 10px rgba(250, 84, 19, 0.5)' : 'none'
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  title={`Slide ${idx + 1}`}
                />
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
