import React, { useState } from 'react';
import { SERVICES_DATA, SERVICE_CATEGORIES } from '../data/servicesData';
import { ServiceItem } from '../types';
import { EngineeringGraphicArt } from './EngineeringGraphicArt';
import { 
  Smartphone, 
  Globe, 
  Cpu, 
  Bot, 
  Palette, 
  Cloud, 
  ShieldCheck, 
  ShoppingBag, 
  Layers, 
  ArrowRight, 
  Check, 
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
  onOpenConsultation?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone size={24} />;
      case 'Globe': return <Globe size={24} />;
      case 'Cpu': return <Cpu size={24} />;
      case 'Bot': return <Bot size={24} />;
      case 'Palette': return <Palette size={24} />;
      case 'Cloud': return <Cloud size={24} />;
      case 'ShieldCheck': return <ShieldCheck size={24} />;
      case 'ShoppingBag': return <ShoppingBag size={24} />;
      case 'Layers': return <Layers size={24} />;
      default: return <Cpu size={24} />;
    }
  };

  return (
    <section 
      id="services"
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
      <EngineeringGraphicArt variant="dark" sectionCode="SEC.03/SERVICES" title="CORE_ENGINEERING_CAPABILITIES" />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Heading & Subtitle */}
        <div style={{ maxWidth: '780px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
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
            <span>End-to-End Capabilities</span>
          </div>

          <h2 className="heading-section" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Comprehensive Engineering &amp; <span style={{ color: '#FA5413' }}>AI Capabilities</span>
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.6 }}>
            From high-growth venture-backed startups to multinational enterprises, we engineer scalable digital platforms that solve mission-critical operational challenges.
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginBottom: '3rem'
          }}
        >
          {SERVICE_CATEGORIES.map((cat) => {
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
                  padding: '0.65rem 1.35rem',
                  borderRadius: '9999px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isActive ? '1px solid #FA5413' : '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: isActive ? '#FA5413' : 'rgba(24, 28, 35, 0.8)',
                  color: isActive ? '#FFFFFF' : '#CBD5E1',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive ? '0 6px 18px rgba(250, 84, 19, 0.35)' : 'none',
                  transform: isActive ? 'scale(1.03)' : 'scale(1)'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Animated Services Grid */}
        <div 
          key={selectedCategory}
          className="animate-tab-switch grid-services-layout"
          style={{
            minHeight: '480px'
          }}
        >
          {filteredServices.map((service, idx) => (
              <div
                key={service.id}
                style={{
                  backgroundColor: '#181C23',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '18px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.3)',
                  position: 'relative',
                  overflow: 'hidden',
                  animationDelay: `${idx * 40}ms`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#FA5413';
                  e.currentTarget.style.boxShadow = '0 20px 35px -10px rgba(250, 84, 19, 0.25), 0 8px 16px -4px rgba(0, 0, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = '0 8px 24px -4px rgba(0, 0, 0, 0.3)';
                }}
              >
                {/* Top Subtle Glowing Accent Bar */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #FA5413 0%, #FF8C38 100%)',
                    opacity: 0.8
                  }}
                />

                <div>
                  {/* Icon & Category Tag */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div 
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '14px',
                        backgroundColor: 'rgba(250, 84, 19, 0.12)',
                        color: '#FA5413',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(250, 84, 19, 0.25)',
                        boxShadow: '0 4px 12px rgba(250, 84, 19, 0.15)'
                      }}
                    >
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span 
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: '#FF8C38',
                        backgroundColor: 'rgba(250, 84, 19, 0.12)',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '6px',
                        border: '1px solid rgba(250, 84, 19, 0.25)'
                      }}
                    >
                      {service.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="heading-card" style={{ color: '#FFFFFF', marginBottom: '0.75rem' }}>
                    {service.title}
                  </h3>

                  {/* Business Short Description */}
                  <p style={{ fontSize: '0.94rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.35rem' }}>
                    {service.shortDesc}
                  </p>

                  {/* Key Deliverables */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', color: '#CBD5E1', letterSpacing: '0.05em', marginBottom: '0.65rem' }}>
                      Key Deliverables:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {service.deliverables.slice(0, 3).map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.86rem', color: '#94A3B8' }}>
                          <Check size={15} style={{ color: '#FA5413', marginTop: '2px', flexShrink: 0 }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom: Tech Stack Chips & Learn More Action */}
                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                    {service.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        style={{
                          fontSize: '0.72rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: '#CBD5E1',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '5px',
                          fontWeight: 600
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <button
                      type="button"
                      onClick={() => {
                        if (onSelectService) {
                          onSelectService(service);
                        }
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        color: '#FA5413',
                        transition: 'color 0.2s ease'
                      }}
                      className="hover:underline"
                    >
                      <span>View Architecture Details</span>
                      <ArrowRight size={16} />
                    </button>

                    {service.officialUrl && (
                      <a
                        href={service.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#94A3B8',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          fontSize: '0.78rem',
                          textDecoration: 'none'
                        }}
                        title="Visit official Kuchoriya TechSoft service page"
                      >
                        <span>Official Page</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
        </div>

        {/* Bottom Banner: Custom Requirements / Consultation */}
        <div 
          style={{
            marginTop: '3.5rem',
            backgroundColor: '#101622',
            borderRadius: '18px',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid rgba(250, 84, 19, 0.35)',
            boxShadow: '0 25px 50px -15px rgba(0, 0, 0, 0.5), 0 0 35px rgba(250, 84, 19, 0.15)'
          }}
          className="md:flex-row text-center md:text-left"
        >
          <div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.35rem' }}>
              Have a unique multi-tier architecture or legacy migration project?
            </div>
            <div style={{ fontSize: '0.95rem', color: '#94A3B8' }}>
              Our senior architects provide free technical scoping sessions and preliminary architectural blueprints within 48 hours.
            </div>
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
              padding: '0.9rem 1.85rem',
              fontSize: '0.98rem',
              borderRadius: '10px',
              whiteSpace: 'nowrap'
            }}
          >
            <span>Request Architecture Review</span>
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};
