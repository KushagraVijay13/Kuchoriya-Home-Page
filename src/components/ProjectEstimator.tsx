import React, { useState } from 'react';
import { EngineeringGraphicArt } from './EngineeringGraphicArt';
import { 
  Calculator, 
  Smartphone, 
  Globe, 
  Cpu, 
  Cloud, 
  Clock, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface ProjectEstimatorProps {
  onApplyEstimate?: (details: { platform: string; scope: string; timeline: string; budget: string }) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onApplyEstimate }) => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [platform, setPlatform] = useState<'mobile' | 'web' | 'ai' | 'cloud'>('mobile');
  const [scope, setScope] = useState<'mvp' | 'growth' | 'enterprise'>('mvp');
  const [addons, setAddons] = useState<string[]>(['ai-rag']);

  const toggleAddon = (id: string) => {
    if (addons.includes(id)) {
      setAddons(addons.filter((item) => item !== id));
    } else {
      setAddons([...addons, id]);
    }
  };

  // Dynamic calculations in Indian Rupees (INR) with optional USD conversion
  const calculateEstimate = () => {
    let baseWeeks = 6;
    let baseMinINR = 280000;
    let baseMaxINR = 520000;
    let team = '1 Full-Stack Lead, 1 UI/UX Designer, 1 QA';

    if (platform === 'mobile') {
      baseWeeks += 4;
      baseMinINR = 350000;
      baseMaxINR = 680000;
      team = '1 Mobile Architect, 2 Flutter Devs, 1 QA';
    } else if (platform === 'web') {
      baseWeeks += 2;
      baseMinINR = 260000;
      baseMaxINR = 500000;
      team = '1 Senior React Lead, 1 Node.js Backend Dev, 1 DevOps';
    } else if (platform === 'ai') {
      baseWeeks += 5;
      baseMinINR = 450000;
      baseMaxINR = 880000;
      team = '1 AI/ML Engineer, 1 Full-Stack Architect, 1 Data Pipeline Dev';
    } else if (platform === 'cloud') {
      baseWeeks += 3;
      baseMinINR = 300000;
      baseMaxINR = 580000;
      team = '1 Cloud DevOps Architect, 1 Site Reliability Engineer';
    }

    if (scope === 'growth') {
      baseWeeks += 4;
      baseMinINR = Math.round(baseMinINR * 1.6);
      baseMaxINR = Math.round(baseMaxINR * 1.6);
    } else if (scope === 'enterprise') {
      baseWeeks += 8;
      baseMinINR = Math.round(baseMinINR * 2.8);
      baseMaxINR = Math.round(baseMaxINR * 2.8);
      team = 'Dedicated Squad: 1 Lead Architect, 4 Senior Engineers, 1 QA Lead, 1 PM';
    }

    // Addons impact (INR)
    addons.forEach((addonId) => {
      baseWeeks += 1;
      if (addonId === 'ai-rag') {
        baseMinINR += 75000;
        baseMaxINR += 120000;
      } else if (addonId === 'hipaa-pci') {
        baseMinINR += 60000;
        baseMaxINR += 100000;
      } else {
        baseMinINR += 50000;
        baseMaxINR += 80000;
      }
    });

    const formatINR = (val: number) => {
      return '₹' + val.toLocaleString('en-IN');
    };

    const inrToUsdRate = 85;
    const minUSD = Math.round(baseMinINR / inrToUsdRate / 250) * 250;
    const maxUSD = Math.round(baseMaxINR / inrToUsdRate / 250) * 250;

    const budgetString = currency === 'INR'
      ? `${formatINR(baseMinINR)} - ${formatINR(baseMaxINR)}`
      : `$${minUSD.toLocaleString()} - $${maxUSD.toLocaleString()}`;

    const secondaryEquivalent = currency === 'INR'
      ? `≈ $${minUSD.toLocaleString()} - $${maxUSD.toLocaleString()} USD (Global)`
      : `≈ ${formatINR(baseMinINR)} - ${formatINR(baseMaxINR)} (Indian Rupee)`;

    return {
      timeline: `${baseWeeks} - ${baseWeeks + 4} Weeks`,
      budget: budgetString,
      secondaryEquivalent,
      team
    };
  };

  const estimate = calculateEstimate();

  const handleApply = () => {
    const platformNames = {
      mobile: 'Mobile App (iOS & Android)',
      web: 'Custom Web & SaaS Platform',
      ai: 'Artificial Intelligence & Agent System',
      cloud: 'Cloud Architecture & DevOps'
    };
    const scopeNames = {
      mvp: 'MVP Launch',
      growth: 'Growth & Scaling Platform',
      enterprise: 'Enterprise-Scale Architecture'
    };

    if (onApplyEstimate) {
      onApplyEstimate({
        platform: platformNames[platform],
        scope: scopeNames[scope],
        timeline: estimate.timeline,
        budget: estimate.budget
      });
    }

    // Trigger confetti if available!
    if (typeof (window as any).confetti === 'function') {
      (window as any).confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 }
      });
    }

    // Scroll to contact form
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="estimator"
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
      <EngineeringGraphicArt variant="dark" sectionCode="SEC.10/ESTIMATOR" title="MILESTONE_BUDGET_CALCULATOR" />

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
              padding: '0.4rem 1rem',
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '1rem',
              border: '1px solid rgba(250, 84, 19, 0.25)'
            }}
          >
            <Calculator size={14} style={{ color: '#FA5413' }} />
            <span>Interactive Estimator</span>
          </div>

          <h2 className="heading-section" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Instant Project Timeline &amp; <span className="gradient-orange-text">Cost Calculator</span>
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Configure your technical requirements below to instantly calculate transparent milestone delivery estimates and suggested engineering team composition.
          </p>

          {/* Currency Selector (Default: INR) */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#101622', padding: '0.35rem 0.65rem', borderRadius: '9999px', border: '1px solid rgba(255, 255, 255, 0.12)', marginTop: '1.25rem' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#94A3B8', paddingLeft: '0.35rem' }}>Currency:</span>
            <button
              type="button"
              onClick={() => setCurrency('INR')}
              style={{
                padding: '0.35rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                backgroundColor: currency === 'INR' ? '#FA5413' : 'transparent',
                color: currency === 'INR' ? '#FFFFFF' : '#94A3B8',
                transition: 'all 0.2s ease',
                boxShadow: currency === 'INR' ? '0 2px 10px rgba(250, 84, 19, 0.4)' : 'none'
              }}
            >
              ₹ INR (Indian Rupees)
            </button>
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              style={{
                padding: '0.35rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                backgroundColor: currency === 'USD' ? '#FA5413' : 'transparent',
                color: currency === 'USD' ? '#FFFFFF' : '#94A3B8',
                transition: 'all 0.2s ease',
                boxShadow: currency === 'USD' ? '0 2px 10px rgba(250, 84, 19, 0.4)' : 'none'
              }}
            >
              $ USD (Global)
            </button>
          </div>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid-estimator-layout">
          
          {/* Left Column: Interactive Selectors */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
            
            {/* 1. Platform Selection */}
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.85rem' }}>
                1. Select Core Platform Focus:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }} className="sm:grid-cols-4">
                {[
                  { id: 'mobile', label: 'Mobile App', icon: <Smartphone size={18} /> },
                  { id: 'web', label: 'Web / SaaS', icon: <Globe size={18} /> },
                  { id: 'ai', label: 'AI & Agents', icon: <Cpu size={18} /> },
                  { id: 'cloud', label: 'Cloud & DevOps', icon: <Cloud size={18} /> }
                ].map((item) => {
                  const isActive = platform === item.id;
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setPlatform(item.id as any)}
                      style={{
                        padding: '1rem 0.75rem',
                        borderRadius: '12px',
                        border: isActive ? '1px solid #FA5413' : '1px solid rgba(255, 255, 255, 0.1)',
                        backgroundColor: isActive ? 'rgba(250, 84, 19, 0.15)' : 'rgba(24, 28, 35, 0.7)',
                        color: isActive ? '#FFFFFF' : '#CBD5E1',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: isActive ? '0 4px 14px rgba(250, 84, 19, 0.3)' : 'none'
                      }}
                    >
                      <div style={{ color: isActive ? '#FA5413' : '#94A3B8' }}>{item.icon}</div>
                      <span style={{ fontSize: '0.84rem', fontWeight: 700 }}>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Project Maturity Scope */}
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.85rem' }}>
                2. Project Development Phase:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '0.75rem' }} className="sm:grid-cols-3">
                {[
                  { id: 'mvp', label: 'PoC / Fast MVP', desc: 'Core feature validation in 6-8 weeks' },
                  { id: 'growth', label: 'Commercial Launch', desc: 'Scalable system with third-party APIs' },
                  { id: 'enterprise', label: 'Enterprise Platform', desc: 'Multi-tenant, high-throughput SLA' }
                ].map((item) => {
                  const isActive = scope === item.id;
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setScope(item.id as any)}
                      style={{
                        padding: '1.1rem 1rem',
                        borderRadius: '12px',
                        border: isActive ? '1px solid #FA5413' : '1px solid rgba(255, 255, 255, 0.1)',
                        backgroundColor: isActive ? 'rgba(250, 84, 19, 0.15)' : 'rgba(24, 28, 35, 0.7)',
                        color: isActive ? '#FFFFFF' : '#CBD5E1',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: isActive ? '#FA5413' : '#FFFFFF', marginBottom: '0.2rem' }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: '#94A3B8', lineHeight: 1.35 }}>
                        {item.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Advanced Capabilities / Add-ons */}
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.85rem' }}>
                3. High-Security &amp; Intelligence Capabilities:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '0.75rem' }} className="sm:grid-cols-3">
                {[
                  { id: 'ai-rag', label: 'Custom AI & Vector RAG', cost: currency === 'INR' ? '+₹75,000' : '+$900' },
                  { id: 'hipaa-pci', label: 'HIPAA / PCI Compliance', cost: currency === 'INR' ? '+₹60,000' : '+$700' },
                  { id: 'realtime-iot', label: 'Real-Time WebSockets & IoT', cost: currency === 'INR' ? '+₹50,000' : '+$600' }
                ].map((item) => {
                  const isChecked = addons.includes(item.id);
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => toggleAddon(item.id)}
                      style={{
                        padding: '0.9rem',
                        borderRadius: '10px',
                        border: isChecked ? '1px solid #FA5413' : '1px solid rgba(255, 255, 255, 0.08)',
                        backgroundColor: isChecked ? 'rgba(250, 84, 19, 0.12)' : 'rgba(24, 28, 35, 0.5)',
                        color: isChecked ? '#FFFFFF' : '#CBD5E1',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textAlign: 'left' }}>
                        <div style={{ width: '16px', height: '16px', borderRadius: '4px', border: isChecked ? '1px solid #FA5413' : '1px solid rgba(255, 255, 255, 0.3)', backgroundColor: isChecked ? '#FA5413' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {isChecked && <CheckCircle2 size={12} style={{ color: '#FFFFFF' }} />}
                        </div>
                        <span style={{ fontSize: '0.78rem', fontWeight: 600 }}>{item.label}</span>
                      </div>
                      <span style={{ fontSize: '0.7rem', color: '#FA5413', fontWeight: 700 }}>{item.cost}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Calculated Estimate Card */}
          <div style={{ width: '100%' }}>
            <div 
              style={{
                backgroundColor: '#181C23',
                border: '1px solid rgba(250, 84, 19, 0.4)',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 35px rgba(250, 84, 19, 0.18)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.75rem'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '0.85rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#FA5413', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Calculated Milestone Plan
                  </div>
                  <span style={{ fontSize: '0.72rem', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10B981', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>
                    100% FIXED-PRICE OPTION
                  </span>
                </div>

                {/* Estimated Budget Output */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Estimated Project Investment Range:
                    </div>
                    <div style={{ display: 'flex', gap: '0.3rem', backgroundColor: '#0F141F', padding: '2px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <button
                        type="button"
                        onClick={() => setCurrency('INR')}
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          padding: '0.15rem 0.45rem',
                          borderRadius: '4px',
                          border: 'none',
                          backgroundColor: currency === 'INR' ? '#FA5413' : 'transparent',
                          color: currency === 'INR' ? '#FFFFFF' : '#94A3B8',
                          cursor: 'pointer'
                        }}
                      >
                        ₹ INR
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrency('USD')}
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          padding: '0.15rem 0.45rem',
                          borderRadius: '4px',
                          border: 'none',
                          backgroundColor: currency === 'USD' ? '#FA5413' : 'transparent',
                          color: currency === 'USD' ? '#FFFFFF' : '#94A3B8',
                          cursor: 'pointer'
                        }}
                      >
                        $ USD
                      </button>
                    </div>
                  </div>
                  <div style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', fontFeatureSettings: '"tnum"' }}>
                    {estimate.budget}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#38BDF8', marginTop: '0.25rem', fontWeight: 600 }}>
                    {estimate.secondaryEquivalent}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#FF8C38', marginTop: '0.35rem' }}>
                    Includes Architecture, UI/UX, Full QA &amp; 90-Day Post-Launch SLA
                  </div>
                </div>

                {/* Timeline Output */}
                <div style={{ backgroundColor: '#0F141F', borderRadius: '12px', padding: '1.1rem', border: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem', fontWeight: 700, color: '#E2E8F0', marginBottom: '0.35rem' }}>
                    <Clock size={16} style={{ color: '#FA5413' }} />
                    <span>Estimated Delivery Timeline:</span>
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>
                    {estimate.timeline}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '0.15rem' }}>
                    Structured in 2-week agile sprints with bi-weekly live client demos
                  </div>
                </div>

                {/* Recommended Team Composition */}
                <div style={{ backgroundColor: '#0F141F', borderRadius: '12px', padding: '1.1rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem', fontWeight: 700, color: '#E2E8F0', marginBottom: '0.35rem' }}>
                    <Users size={16} style={{ color: '#38BDF8' }} />
                    <span>Dedicated Engineering Team:</span>
                  </div>
                  <div style={{ fontSize: '0.86rem', color: '#CBD5E1', lineHeight: 1.45 }}>
                    {estimate.team}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  type="button"
                  onClick={handleApply}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.95rem',
                    fontSize: '0.98rem',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem'
                  }}
                >
                  <Sparkles size={18} />
                  <span>Lock in this Estimate &amp; Request NDA</span>
                  <ArrowRight size={18} />
                </button>
                <div style={{ fontSize: '0.74rem', color: '#94A3B8', textAlign: 'center', marginTop: '0.65rem' }}>
                  No commitment required • Mutual NDA delivered within 24h
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
