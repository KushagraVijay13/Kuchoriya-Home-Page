import React, { useState } from 'react';
import { EngineeringGraphicArt } from './EngineeringGraphicArt';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Activity, 
  Zap, 
  Layers, 
  Smartphone, 
  TrendingUp, 
  Shield, 
  Star, 
  Terminal, 
  Server
} from 'lucide-react';

interface HeroProps {
  onOpenConsultation?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'ai' | 'cloud' | 'mobile'>('ai');

  return (
    <section 
      id="hero"
      style={{
        position: 'relative',
        backgroundColor: '#0B0F17',
        color: '#FFFFFF',
        paddingTop: 'clamp(2.75rem, 6vw, 4.75rem)',
        paddingBottom: 'clamp(3.5rem, 7vw, 5.75rem)',
        overflow: 'hidden'
      }}
    >
      {/* Authentic Software Engineering Architectural Graphic Art */}
      <EngineeringGraphicArt variant="hero" />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="grid-hero-layout">
          
          {/* Left Column: Strategic Positioning & CTAs */}
          <div style={{ width: '100%' }}>
            
            {/* Top Eyebrow Badge */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                backgroundColor: 'rgba(250, 84, 19, 0.12)',
                border: '1px solid rgba(250, 84, 19, 0.35)',
                borderRadius: '9999px',
                padding: '0.4rem 1rem',
                marginBottom: '1.5rem',
                boxShadow: '0 4px 14px rgba(250, 84, 19, 0.2)'
              }}
            >
              <span className="pulse-live" style={{ 
                width: '8px', 
                height: '8px', 
                borderRadius: '50%', 
                backgroundColor: '#FA5413',
                boxShadow: '0 0 10px #FA5413',
                display: 'inline-block'
              }} />
              <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#FF8C38', letterSpacing: '0.02em' }}>
                Next-Gen Enterprise Engineering &amp; AI Solutions
              </span>
            </div>

            {/* Distinctive Main H1 Headline */}
            <h1 
              className="heading-hero"
              style={{
                color: '#FFFFFF',
                marginBottom: '1.5rem',
                fontWeight: 800,
                letterSpacing: '-0.035em'
              }}
            >
              Custom Software and <span className="gradient-orange-text">AI Solutions</span> Built Around Your Business.
            </h1>

            {/* Strategic Supporting Copy */}
            <p 
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.24rem)',
                lineHeight: 1.6,
                color: '#94A3B8',
                marginBottom: '2.5rem'
              }}
            >
              Kuchoriya TechSoft helps startups and enterprises transform complex ideas into scalable mobile applications, web platforms, enterprise software and intelligent AI-powered solutions.
            </p>

            {/* Primary & Secondary CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '2.5rem' }}>
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
                  padding: '0.95rem 2rem',
                  fontSize: '1.02rem',
                  borderRadius: '12px'
                }}
              >
                <span>Discuss Your Project</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#industries"
                className="btn btn-secondary"
                style={{
                  padding: '0.95rem 1.85rem',
                  fontSize: '1.02rem',
                  borderRadius: '12px'
                }}
              >
                <span>Explore Work by Field</span>
              </a>
            </div>

            {/* Verified Trust & Guarantee Badges */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
                paddingTop: '1.75rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={18} style={{ color: '#FA5413', flexShrink: 0 }} />
                <span style={{ fontSize: '0.86rem', color: '#CBD5E1', fontWeight: 600 }}>
                  15+ Years Industry Experience
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={18} style={{ color: '#FA5413', flexShrink: 0 }} />
                <span style={{ fontSize: '0.86rem', color: '#CBD5E1', fontWeight: 600 }}>
                  1,000+ Platforms Delivered
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={18} style={{ color: '#FA5413', flexShrink: 0 }} />
                <span style={{ fontSize: '0.86rem', color: '#CBD5E1', fontWeight: 600 }}>
                  Strict NDA &amp; 100% IP Transfer
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Interactive Product Visualization */}
          <div style={{ width: '100%', position: 'relative' }}>
            
            {/* Visual Container */}
            <div 
              style={{
                position: 'relative',
                borderRadius: '20px',
                background: 'linear-gradient(145deg, #181C23 0%, #101622 100%)',
                border: '1px solid rgba(250, 84, 19, 0.3)',
                boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.8), 0 0 45px rgba(250, 84, 19, 0.2)',
                overflow: 'hidden'
              }}
            >
              {/* Window Controls Header */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.9rem 1.25rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  backgroundColor: 'rgba(11, 15, 23, 0.85)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                  <span style={{ fontSize: '0.74rem', color: '#64748B', marginLeft: '0.5rem', fontFamily: 'monospace' }}>
                    kuchoriya-telemetry.v4
                  </span>
                </div>

                {/* Interactive Mode Switcher Tabs */}
                <div style={{ display: 'flex', gap: '0.35rem', backgroundColor: '#0B0F17', padding: '3px', borderRadius: '8px' }}>
                  <button
                    type="button"
                    onClick={() => setActiveTab('ai')}
                    style={{
                      padding: '0.3rem 0.75rem',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      borderRadius: '5px',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: activeTab === 'ai' ? '#FA5413' : 'transparent',
                      color: activeTab === 'ai' ? '#FFFFFF' : '#94A3B8',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    AI Engine
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('cloud')}
                    style={{
                      padding: '0.3rem 0.75rem',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      borderRadius: '5px',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: activeTab === 'cloud' ? '#FA5413' : 'transparent',
                      color: activeTab === 'cloud' ? '#FFFFFF' : '#94A3B8',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Cloud SaaS
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('mobile')}
                    style={{
                      padding: '0.3rem 0.75rem',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      borderRadius: '5px',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: activeTab === 'mobile' ? '#FA5413' : 'transparent',
                      color: activeTab === 'mobile' ? '#FFFFFF' : '#94A3B8',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Mobile Sync
                  </button>
                </div>
              </div>

              {/* Mockup Body Content */}
              <div style={{ padding: '1.25rem' }}>

                {/* Top Metrics Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{ backgroundColor: '#0F141F', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', padding: '0.75rem' }}>
                    <div style={{ fontSize: '0.7rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Activity size={12} style={{ color: '#FA5413' }} />
                      <span>Inference Speed</span>
                    </div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', marginTop: '0.2rem' }}>
                      14.2 ms
                    </div>
                    <div style={{ fontSize: '0.65rem', color: '#10B981', marginTop: '0.1rem' }}>
                      ↑ 99.98% Latency SLA
                    </div>
                  </div>

                  <div style={{ backgroundColor: '#0F141F', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', padding: '0.75rem' }}>
                    <div style={{ fontSize: '0.7rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <TrendingUp size={12} style={{ color: '#10B981' }} />
                      <span>RAG Accuracy</span>
                    </div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', marginTop: '0.2rem' }}>
                      99.4%
                    </div>
                    <div style={{ fontSize: '0.65rem', color: '#10B981', marginTop: '0.1rem' }}>
                      Evaluated on 50k tokens
                    </div>
                  </div>

                  <div style={{ backgroundColor: '#0F141F', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', padding: '0.75rem' }}>
                    <div style={{ fontSize: '0.7rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Shield size={12} style={{ color: '#3B82F6' }} />
                      <span>Security Guard</span>
                    </div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', marginTop: '0.2rem' }}>
                      Zero Leaks
                    </div>
                    <div style={{ fontSize: '0.65rem', color: '#3B82F6', marginTop: '0.1rem' }}>
                      HIPAA &amp; SOC 2 Ready
                    </div>
                  </div>
                </div>

                {/* Dynamic Visual Dashboard Area */}
                <div 
                  style={{
                    backgroundColor: '#0B0F17',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    padding: '1.1rem',
                    marginBottom: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Cpu size={16} style={{ color: '#FA5413' }} />
                      <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#E2E8F0' }}>
                        {activeTab === 'ai' && 'Autonomous Multi-Agent Orchestration Engine'}
                        {activeTab === 'cloud' && 'Distributed Microservices & Cloud Telemetry'}
                        {activeTab === 'mobile' && 'Cross-Platform Real-Time Geolocation Sync'}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.68rem', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10B981', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>
                      HEALTHY
                    </span>
                  </div>

                  {/* SVG Chart / Architecture Workflow Graph based on activeTab */}
                  {activeTab === 'ai' && (
                    <svg viewBox="0 0 400 110" style={{ width: '100%', height: 'auto', display: 'block' }}>
                      <defs>
                        <linearGradient id="aiHeroGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#FA5413" />
                          <stop offset="50%" stopColor="#38BDF8" />
                          <stop offset="100%" stopColor="#10B981" />
                        </linearGradient>
                      </defs>
                      {/* Grid background lines */}
                      <line x1="0" y1="30" x2="400" y2="30" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="0" y1="75" x2="400" y2="75" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" strokeDasharray="3 3" />

                      {/* Architecture pipeline connections */}
                      <path d="M 45 55 L 140 35 L 245 75 L 350 45" stroke="url(#aiHeroGrad)" strokeWidth="2" fill="none" className="circuit-flow-fast" />
                      <line x1="140" y1="35" x2="245" y2="35" stroke="rgba(255,255,255,0.08)" strokeWidth="1.2" strokeDasharray="2 4" />

                      {/* Nodes */}
                      <g transform="translate(45, 55)">
                        <circle cx="0" cy="0" r="14" fill="#181C23" stroke="#FA5413" strokeWidth="2" />
                        <circle cx="0" cy="0" r="4" fill="#FA5413" />
                        <text x="0" y="24" fill="#94A3B8" fontSize="8" fontFamily="monospace" textAnchor="middle">DATA_FEED</text>
                      </g>

                      <g transform="translate(140, 35)">
                        <circle cx="0" cy="0" r="16" fill="#181C23" stroke="#38BDF8" strokeWidth="2" />
                        <circle cx="0" cy="0" r="5" fill="#38BDF8" className="pulsing-circuit-node" />
                        <text x="0" y="24" fill="#38BDF8" fontSize="8" fontFamily="monospace" textAnchor="middle">VECTOR_RAG</text>
                      </g>

                      <g transform="translate(245, 75)">
                        <circle cx="0" cy="0" r="16" fill="#181C23" stroke="#FA5413" strokeWidth="2" />
                        <circle cx="0" cy="0" r="5" fill="#FA5413" className="pulsing-circuit-node" />
                        <text x="0" y="24" fill="#FF8C38" fontSize="8" fontFamily="monospace" textAnchor="middle">LLM_AGENT</text>
                      </g>

                      <g transform="translate(350, 45)">
                        <circle cx="0" cy="0" r="15" fill="#181C23" stroke="#10B981" strokeWidth="2" />
                        <circle cx="0" cy="0" r="5" fill="#10B981" />
                        <text x="0" y="24" fill="#10B981" fontSize="8" fontFamily="monospace" textAnchor="middle">SYNAPSE_OUT</text>
                      </g>
                    </svg>
                  )}

                  {activeTab === 'cloud' && (
                    <svg viewBox="0 0 400 110" style={{ width: '100%', height: 'auto', display: 'block' }}>
                      <defs>
                        <linearGradient id="cloudHeroGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <line x1="0" y1="35" x2="400" y2="35" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="0" y1="75" x2="400" y2="75" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" strokeDasharray="3 3" />
                      
                      <path d="M 0 85 Q 70 30 140 50 T 260 20 T 400 30 L 400 110 L 0 110 Z" fill="url(#cloudHeroGrad)" />
                      <path d="M 0 85 Q 70 30 140 50 T 260 20 T 400 30" stroke="#38BDF8" strokeWidth="2.5" fill="none" />
                      
                      {/* Server pod icons */}
                      <rect x="120" y="38" width="40" height="24" rx="4" fill="#181C23" stroke="#38BDF8" strokeWidth="1.5" />
                      <text x="140" y="53" fill="#38BDF8" fontSize="8" fontFamily="monospace" textAnchor="middle">K8S_01</text>
                      
                      <rect x="240" y="10" width="40" height="24" rx="4" fill="#181C23" stroke="#FA5413" strokeWidth="1.5" />
                      <text x="260" y="25" fill="#FA5413" fontSize="8" fontFamily="monospace" textAnchor="middle">K8S_02</text>

                      <rect x="330" y="20" width="50" height="24" rx="4" fill="#181C23" stroke="#10B981" strokeWidth="1.5" />
                      <text x="355" y="35" fill="#10B981" fontSize="8" fontFamily="monospace" textAnchor="middle">REDIS_01</text>
                    </svg>
                  )}

                  {activeTab === 'mobile' && (
                    <svg viewBox="0 0 400 110" style={{ width: '100%', height: 'auto', display: 'block' }}>
                      <defs>
                        <linearGradient id="mobileHeroGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#FA5413" />
                          <stop offset="100%" stopColor="#FF8C38" />
                        </linearGradient>
                      </defs>
                      <line x1="0" y1="55" x2="400" y2="55" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" strokeDasharray="3 3" />
                      
                      {/* Bi-directional mobile sync pipeline */}
                      <path d="M 40 55 H 360" stroke="url(#mobileHeroGrad)" strokeWidth="2.5" className="circuit-flow-fast" />
                      
                      {/* iOS Node */}
                      <g transform="translate(50, 55)">
                        <rect x="-25" y="-22" width="50" height="44" rx="8" fill="#181C23" stroke="#FA5413" strokeWidth="1.5" />
                        <text x="0" y="-3" fill="#FFFFFF" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="700">iOS</text>
                        <text x="0" y="12" fill="#FA5413" fontSize="7" fontFamily="monospace" textAnchor="middle">SWIFT</text>
                      </g>

                      {/* Bridge Node */}
                      <g transform="translate(200, 55)">
                        <circle cx="0" cy="0" r="18" fill="#0B0F17" stroke="#38BDF8" strokeWidth="2" />
                        <circle cx="0" cy="0" r="6" fill="#38BDF8" className="pulsing-circuit-node" />
                        <text x="0" y="30" fill="#38BDF8" fontSize="8" fontFamily="monospace" textAnchor="middle">SQLITE_SYNC</text>
                      </g>

                      {/* Android Node */}
                      <g transform="translate(350, 55)">
                        <rect x="-25" y="-22" width="50" height="44" rx="8" fill="#181C23" stroke="#10B981" strokeWidth="1.5" />
                        <text x="0" y="-3" fill="#FFFFFF" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="700">ANDROID</text>
                        <text x="0" y="12" fill="#10B981" fontSize="7" fontFamily="monospace" textAnchor="middle">KOTLIN</text>
                      </g>
                    </svg>
                  )}

                  {/* Terminal Execution Log */}
                  <div 
                    style={{
                      marginTop: '0.75rem',
                      padding: '0.65rem 0.85rem',
                      backgroundColor: '#070A0F',
                      borderRadius: '8px',
                      fontFamily: 'monospace',
                      fontSize: '0.72rem',
                      color: '#94A3B8',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.25rem'
                    }}
                  >
                    {activeTab === 'ai' && (
                      <>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span style={{ color: '#10B981' }}>✔</span>
                          <span>[agent.swarm] Task &apos;fhir_records_sync&apos; verified (0 errors)</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span style={{ color: '#FA5413' }}>➜</span>
                          <span>[ai.inference] Custom Llama-3 / RAG pipeline responded in 14.2ms</span>
                        </div>
                      </>
                    )}
                    {activeTab === 'cloud' && (
                      <>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span style={{ color: '#10B981' }}>✔</span>
                          <span>[k8s.cluster] 32/32 worker pods running in us-east-1</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span style={{ color: '#38BDF8' }}>➜</span>
                          <span>[api.gateway] 24,800 requests/sec with 0.00% error rate</span>
                        </div>
                      </>
                    )}
                    {activeTab === 'mobile' && (
                      <>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span style={{ color: '#10B981' }}>✔</span>
                          <span>[sync.engine] Offline delta queue dispatched to SQLite</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span style={{ color: '#FA5413' }}>➜</span>
                          <span>[socket.io] WebSocket push delivered in 18ms across 42k clients</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Bottom Status Ribbon */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: '#94A3B8' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                    <span>Live Production Cluster</span>
                  </div>
                  <span style={{ color: '#CBD5E1', fontWeight: 600 }}>Uptime: 99.99% • Kuchoriya SLA</span>
                </div>

              </div>
            </div>

            {/* Floating Mobile Feature Badge (Bottom Left) */}
            <div 
              className="hidden sm:flex"
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-25px',
                backgroundColor: '#181C23',
                border: '1px solid rgba(250, 84, 19, 0.4)',
                borderRadius: '14px',
                padding: '0.85rem 1.15rem',
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.6)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                zIndex: 20
              }}
            >
              <div 
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(250, 84, 19, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FA5413'
                }}
              >
                <Smartphone size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FFFFFF' }}>
                  Native iOS &amp; Android
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>
                  60fps Flutter &amp; React Native
                </div>
              </div>
            </div>

            {/* Floating Top Right Star Rating Pill */}
            <div 
              className="hidden sm:flex"
              style={{
                position: 'absolute',
                top: '-15px',
                right: '-15px',
                backgroundColor: '#181C23',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '9999px',
                padding: '0.5rem 1rem',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                zIndex: 20
              }}
            >
              <Star size={15} style={{ fill: '#FA5413', color: '#FA5413' }} />
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#FFFFFF' }}>5.0 Rating</span>
              <span style={{ fontSize: '0.72rem', color: '#94A3B8' }}>• Clutch Verified</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
