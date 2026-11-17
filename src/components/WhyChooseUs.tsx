import React from 'react';
import { EngineeringGraphicArt } from './EngineeringGraphicArt';
import { 
  ShieldCheck, 
  Cpu, 
  GitBranch, 
  Code2, 
  Users, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenConsultation?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenConsultation }) => {
  const differentiators = [
    {
      icon: <Clock size={24} />,
      title: '15+ Years Proven Track Record',
      description: 'Founded in 2009, Kuchoriya TechSoft has delivered over 1,000 successful projects. We have weathered multiple tech paradigm shifts and bring battle-tested engineering maturity to every engagement.',
      highlight: 'Established in 2009 • 1,000+ Shipped Systems'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Pioneering AI & Agentic Innovation',
      description: 'We do not just wrap basic APIs. Our internal AI engineering team designs custom LLM fine-tuning pipelines, high-precision RAG systems, and autonomous multi-agent swarms with enterprise data safeguards.',
      highlight: 'Domain-Trained LLMs • LangGraph & Vector DBs'
    },
    {
      icon: <Code2 size={24} />,
      title: 'Bespoke Architecture & 100% IP Ownership',
      description: 'No generic cookie-cutter templates or vendor lock-in. You receive 100% ownership of clean, fully-documented source code, comprehensive architectural diagrams, and deployment scripts from day one.',
      highlight: 'Zero Vendor Lock-In • Full Code & IP Transfer'
    },
    {
      icon: <GitBranch size={24} />,
      title: 'Transparent Agile Sprints & Live Demos',
      description: 'Experience total visibility. We operate on structured 2-week agile sprints, provide direct access to Jira/Linear boards, conduct interactive bi-weekly sprint demos, and host continuous communication channels.',
      highlight: 'Bi-Weekly Demos • Real-Time Jira / Slack Access'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Enterprise Compliance by Default',
      description: 'We bake security and compliance into every architecture from day one. Our systems comply with HIPAA, PCI-DSS Level 1, SOC 2 Type II, GDPR, and ISO 27001 data protection standards.',
      highlight: 'HIPAA • PCI-DSS • SOC 2 Type II Ready'
    },
    {
      icon: <Users size={24} />,
      title: 'Dedicated Engineering & 24/7 SLA Support',
      description: 'Beyond initial launch, our dedicated site reliability engineers provide proactive 24/7 uptime monitoring, automated database indexing, third-party API version upgrades, and guaranteed response SLAs.',
      highlight: 'Guaranteed SLAs • 24/7 SRE Observability'
    }
  ];

  return (
    <section 
      id="why-choose-us"
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
      <EngineeringGraphicArt variant="dark" sectionCode="SEC.06/DIFFERENTIATORS" title="ENGINEERING_DISCIPLINE_AND_RIGOR" />

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
            Engineering Differentiators
          </div>

          <h2 className="heading-section" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Why Global Brands Choose <span className="gradient-orange-text">Kuchoriya TechSoft</span>
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.6 }}>
            We eliminate the frustration of missed deadlines, opaque billing, and brittle code. Here is how our engineering discipline sets us apart.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid-whychoose-layout">
          {differentiators.map((diff, idx) => (
            <div
              key={diff.title}
              style={{
                backgroundColor: '#181C23',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              className="hover:border-orange-500/50"
            >
              <div>
                {/* Icon & Counter */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div 
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(250, 84, 19, 0.12)',
                      color: '#FA5413',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(250, 84, 19, 0.25)'
                    }}
                  >
                    {diff.icon}
                  </div>
                  <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'rgba(255, 255, 255, 0.15)', fontFamily: 'monospace' }}>
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.22rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.85rem' }}>
                  {diff.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '0.92rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {diff.description}
                </p>
              </div>

              {/* Bottom Tag */}
              <div 
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: '#FF8C38',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <Sparkles size={13} style={{ color: '#FA5413' }} />
                <span>{diff.highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
