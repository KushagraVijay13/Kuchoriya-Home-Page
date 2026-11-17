import React from 'react';
import { EngineeringGraphicArt } from './EngineeringGraphicArt';
import { 
  Search, 
  Compass, 
  Palette, 
  Code2, 
  CheckCircle, 
  Rocket, 
  ArrowRight 
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      subtitle: 'Technical feasibility & requirement scoping',
      desc: 'We analyze your target market, technical bottlenecks, scalability targets, and third-party dependencies to define a crystal-clear product roadmap.',
      deliverable: 'SRS Document, Tech Stack Selection & Milestone Plan',
      icon: <Search size={22} />
    },
    {
      number: '02',
      title: 'Strategy & Architecture',
      subtitle: 'System blueprints & database schemas',
      desc: 'Senior architects design microservices, cloud topologies, database schemas, and API contracts built to withstand high concurrency and security audits.',
      deliverable: 'System Architecture Diagram, DB Schema & API Specs',
      icon: <Compass size={22} />
    },
    {
      number: '03',
      title: 'UI/UX & Prototyping',
      subtitle: 'Human-centered interfaces & design systems',
      desc: 'Our design team crafts user personas, conversion-focused wireframes, and high-fidelity interactive Figma prototypes with complete design system guidelines.',
      deliverable: 'Clickable Figma Prototype & Complete UI Component Kit',
      icon: <Palette size={22} />
    },
    {
      number: '04',
      title: 'Agile Engineering',
      subtitle: '2-week iterative development sprints',
      desc: 'We write clean, test-driven code using modern frameworks. You receive direct Jira access, continuous CI/CD preview builds, and live bi-weekly demos.',
      deliverable: 'Clean Documented Codebase & Bi-Weekly Working Demos',
      icon: <Code2 size={22} />
    },
    {
      number: '05',
      title: 'Testing & QA',
      subtitle: 'Multi-device security & performance testing',
      desc: 'Our QA engineers run automated test suites, load testing, penetration testing, cross-device compatibility, and accessibility audits.',
      deliverable: 'QA Test Run Reports, Security Audit & Zero Critical Bugs',
      icon: <CheckCircle size={22} />
    },
    {
      number: '06',
      title: 'Launch & 24/7 SLA Support',
      subtitle: 'Production deployment & ongoing observability',
      desc: 'We orchestrate zero-downtime production deployment, app store submissions, telemetry setup, and continuous 24/7 site reliability monitoring.',
      deliverable: 'Live Production Platform, IP Transfer & Ongoing SLA',
      icon: <Rocket size={22} />
    }
  ];

  return (
    <section 
      id="development-process"
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
      <EngineeringGraphicArt variant="dark" sectionCode="SEC.07/PROCESS" title="AGILE_ENGINEERING_LIFECYCLE" />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
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
            Engineering Roadmap
          </div>

          <h2 className="heading-section" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Our Proven 6-Stage <span style={{ color: '#FA5413' }}>Development Process</span>
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.6 }}>
            A disciplined, transparent agile lifecycle that takes you from initial architecture discovery to seamless production launch and long-term scale.
          </p>
        </div>

        {/* 6 Steps Grid (3 columns on desktop) */}
        <div className="grid-process-layout">
          {steps.map((s, idx) => (
            <div
              key={s.number}
              style={{
                backgroundColor: '#181C23',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.3)',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#FA5413';
                e.currentTarget.style.boxShadow = '0 16px 32px -6px rgba(250, 84, 19, 0.25), 0 8px 16px -4px rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = '0 8px 24px -4px rgba(0, 0, 0, 0.3)';
              }}
            >
              <div>
                {/* Step Icon & Counter Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div 
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(250, 84, 19, 0.12)',
                      color: '#FA5413',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(250, 84, 19, 0.25)'
                    }}
                  >
                    {s.icon}
                  </div>
                  <span 
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: '#FA5413',
                      fontFamily: 'monospace'
                    }}
                  >
                    {s.number}
                  </span>
                </div>

                {/* Step Title & Subtitle */}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.25rem' }}>
                  {s.title}
                </h3>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#FA5413', marginBottom: '0.85rem' }}>
                  {s.subtitle}
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {s.desc}
                </p>
              </div>

              {/* Tangible Deliverable Box */}
              <div 
                style={{
                  backgroundColor: '#101622',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '8px',
                  padding: '0.75rem 0.9rem'
                }}
              >
                <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: '#CBD5E1', letterSpacing: '0.04em', marginBottom: '0.2rem' }}>
                  Stage Deliverable:
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#E2E8F0' }}>
                  {s.deliverable}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
