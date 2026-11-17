import React from 'react';
import { 
  Play, 
  Activity, 
  CreditCard, 
  MapPin, 
  Key, 
  Zap, 
  Building, 
  Layers, 
  Eye, 
  Radio, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Sparkles,
  Wifi,
  Lock
} from 'lucide-react';

interface MockupProps {
  visualType: string;
  projectTitle: string;
}

export const IndustryVisualMockup: React.FC<MockupProps> = ({ visualType, projectTitle }) => {
  return (
    <div 
      style={{
        width: '100%',
        height: '100%',
        minHeight: '340px',
        maxHeight: '440px',
        backgroundColor: '#0F141F',
        borderRadius: '16px',
        border: '1px solid rgba(250, 84, 19, 0.25)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.8), inset 0 0 20px rgba(250, 84, 19, 0.05)'
      }}
    >
      {/* Top Window Bar */}
      <div 
        style={{
          padding: '0.65rem 1rem',
          backgroundColor: '#070A0F',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.74rem',
          color: '#94A3B8'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
          <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
          <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#10B981' }} />
          <span style={{ marginLeft: '0.4rem', fontFamily: 'monospace', color: '#64748B' }}>
            kuchoriya.{visualType}.live
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#10B981', fontSize: '0.7rem', fontWeight: 600 }}>
          <span className="pulse-live" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }} />
          <span>PRODUCTION LIVE</span>
        </div>
      </div>

      {/* Visual Content based on type */}
      <div style={{ flex: 1, padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
        
        {/* MEDIA & ENTERTAINMENT (Matches User's Screenshot 3 inspiration!) */}
        {visualType === 'media' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {/* Streaming Video Screen Preview */}
            <div 
              style={{
                position: 'relative',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%)',
                padding: '1.25rem',
                border: '1px solid rgba(99, 102, 241, 0.4)',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                <span style={{ backgroundColor: '#EF4444', color: '#FFFFFF', padding: '0.2rem 0.55rem', borderRadius: '4px', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.05em' }}>
                  4K ULTRA HD • LIVE OTT
                </span>
                <span style={{ fontSize: '0.72rem', color: '#E0E7FF', backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                  HLS / DASH Adaptive
                </span>
              </div>

              {/* Play Button & Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#FA5413', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(250, 84, 19, 0.6)' }}>
                  <Play size={20} style={{ marginLeft: '3px' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF' }}>EPIX Global Broadcast Stream</div>
                  <div style={{ fontSize: '0.74rem', color: '#C7D2FE' }}>1,000,000+ Concurrent Mobile &amp; Smart TV Viewers</div>
                </div>
              </div>
            </div>

            {/* Video Thumbnails Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
              <div style={{ backgroundColor: '#1E293B', borderRadius: '8px', padding: '0.6rem', border: '1px solid rgba(255, 255, 255, 0.08)', textAlign: 'center' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#FFFFFF' }}>0% Latency</div>
                <div style={{ fontSize: '0.65rem', color: '#94A3B8' }}>Sub-second HLS</div>
              </div>
              <div style={{ backgroundColor: '#1E293B', borderRadius: '8px', padding: '0.6rem', border: '1px solid rgba(255, 255, 255, 0.08)', textAlign: 'center' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#10B981' }}>Studio DRM</div>
                <div style={{ fontSize: '0.65rem', color: '#94A3B8' }}>Widevine Verified</div>
              </div>
              <div style={{ backgroundColor: '#1E293B', borderRadius: '8px', padding: '0.6rem', border: '1px solid rgba(255, 255, 255, 0.08)', textAlign: 'center' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#FA5413' }}>58% Faster</div>
                <div style={{ fontSize: '0.65rem', color: '#94A3B8' }}>Zero Buffering</div>
              </div>
            </div>
          </div>
        )}

        {/* HEALTHCARE */}
        {visualType === 'healthcare' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ backgroundColor: '#132338', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '12px', padding: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Activity size={18} style={{ color: '#38BDF8' }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FFFFFF' }}>Clinical EMR Interoperability</span>
                </div>
                <span style={{ fontSize: '0.68rem', backgroundColor: 'rgba(16, 185, 129, 0.2)', color: '#34D399', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>
                  HIPAA VERIFIED
                </span>
              </div>

              {/* Heart Pulse SVG */}
              <svg viewBox="0 0 300 60" style={{ width: '100%', height: '50px' }}>
                <path
                  d="M 0,30 L 60,30 L 80,10 L 100,50 L 120,5 L 140,45 L 160,30 L 300,30"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="2.5"
                />
              </svg>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#94A3B8', marginTop: '0.5rem' }}>
                <span>HL7 / FHIR Gateway: ACTIVE</span>
                <span style={{ color: '#38BDF8', fontWeight: 600 }}>2M+ Encrypted Records</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem' }}>
              <div style={{ backgroundColor: '#181C23', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Charting Overhead</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#10B981' }}>-40% Reduced</div>
              </div>
              <div style={{ backgroundColor: '#181C23', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Query Response</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FA5413' }}>Sub-Second</div>
              </div>
            </div>
          </div>
        )}

        {/* FINTECH */}
        {visualType === 'fintech' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ background: 'linear-gradient(135deg, #064E3B 0%, #065F46 50%, #047857 100%)', borderRadius: '12px', padding: '1.25rem', border: '1px solid rgba(16, 185, 129, 0.4)', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <CreditCard size={24} style={{ color: '#A7F3D0' }} />
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#A7F3D0', letterSpacing: '0.1em' }}>EXPENSYA CORPORATE</span>
              </div>
              <div style={{ fontSize: '1.2rem', fontFamily: 'monospace', color: '#FFFFFF', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
                •••• •••• •••• 8492
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#D1FAE5' }}>
                <span>AI OCR OCR SCAN: 99.2% ACCURATE</span>
                <span>20+ CURRENCIES</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem' }}>
              <div style={{ backgroundColor: '#181C23', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Reimbursement Cycle</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#10B981' }}>-80% Faster</div>
              </div>
              <div style={{ backgroundColor: '#181C23', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>PCI Compliance</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FA5413' }}>Level 1 Certified</div>
              </div>
            </div>
          </div>
        )}

        {/* EDTECH */}
        {visualType === 'edtech' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ background: 'linear-gradient(135deg, #7C2D12 0%, #9A3412 50%, #C2410C 100%)', borderRadius: '12px', padding: '1.25rem', border: '1px solid rgba(250, 84, 19, 0.4)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, backgroundColor: 'rgba(0, 0, 0, 0.3)', padding: '0.2rem 0.5rem', borderRadius: '4px', color: '#FFEDD5' }}>
                  eduK ACADEMY
                </span>
                <span style={{ fontSize: '0.72rem', color: '#FFFFFF', fontWeight: 600 }}>500K+ Learners</span>
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Personalized AI Learning Track
              </div>
              {/* Progress Bar */}
              <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(0, 0, 0, 0.3)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '85%', height: '100%', backgroundColor: '#FFFFFF', borderRadius: '4px' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#FFEDD5', marginTop: '0.4rem' }}>
                <span>Module 7: Masterclass Complete</span>
                <span>+35% Completion</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem' }}>
              <div style={{ backgroundColor: '#181C23', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>CDN Egress Savings</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#10B981' }}>-60% Bandwidth</div>
              </div>
              <div style={{ backgroundColor: '#181C23', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Active Students</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FA5413' }}>500,000+</div>
              </div>
            </div>
          </div>
        )}

        {/* LOGISTICS */}
        {visualType === 'logistics' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ backgroundColor: '#111827', borderRadius: '12px', padding: '1.25rem', border: '1px solid rgba(250, 84, 19, 0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={18} style={{ color: '#FA5413' }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FFFFFF' }}>Fleet Route Dispatching</span>
                </div>
                <span style={{ fontSize: '0.68rem', backgroundColor: 'rgba(250, 84, 19, 0.2)', color: '#FF8C38', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 700 }}>
                  LIVE GPS 3s PING
                </span>
              </div>

              {/* Waypoint route illustration */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.6rem 0', position: 'relative' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                <div style={{ flex: 1, height: '2px', backgroundColor: '#FA5413', margin: '0 0.5rem', borderStyle: 'dashed' }} />
                <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#FA5413', boxShadow: '0 0 10px #FA5413' }} />
                <div style={{ flex: 1, height: '2px', backgroundColor: 'rgba(255, 255, 255, 0.2)', margin: '0 0.5rem' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#64748B' }} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94A3B8' }}>
                <span>Hub Departure</span>
                <span style={{ color: '#FA5413', fontWeight: 700 }}>Optimized Route</span>
                <span>Final Dock</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem' }}>
              <div style={{ backgroundColor: '#181C23', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Transit Hours</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#10B981' }}>-22% Reduced</div>
              </div>
              <div style={{ backgroundColor: '#181C23', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Proof of Delivery</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FA5413' }}>100% Digital</div>
              </div>
            </div>
          </div>
        )}

        {/* TRAVEL / SIXT */}
        {visualType === 'travel' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ backgroundColor: '#181C23', borderRadius: '12px', padding: '1.25rem', border: '1px solid rgba(250, 84, 19, 0.4)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#FA5413' }}>SIXT RENT A CAR</span>
                <span style={{ fontSize: '0.7rem', color: '#10B981', fontWeight: 700 }}>BLUETOOTH CONNECTED</span>
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.2rem' }}>
                Contactless Digital Key
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginBottom: '1rem' }}>
                BMW 4 Series • Bay 14B • Terminal 2
              </div>
              <div style={{ backgroundColor: '#FA5413', color: '#FFFFFF', padding: '0.6rem', borderRadius: '8px', textAlign: 'center', fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', boxShadow: '0 4px 14px rgba(250, 84, 19, 0.4)' }}>
                <Key size={16} />
                <span>TAP TO UNLOCK VEHICLE</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem' }}>
              <div style={{ backgroundColor: '#181C23', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Pickup Wait Time</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#10B981' }}>Under 3 Mins</div>
              </div>
              <div style={{ backgroundColor: '#181C23', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>App Store Rating</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FA5413' }}>4.8 ★ / 5.0</div>
              </div>
            </div>
          </div>
        )}

        {/* ECOMMERCE */}
        {visualType === 'ecommerce' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ backgroundColor: '#181C23', borderRadius: '12px', padding: '1.25rem', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#10B981' }}>HEADLESS NEXT.JS COMMERCE</span>
                <span style={{ fontSize: '0.72rem', backgroundColor: '#10B981', color: '#FFFFFF', padding: '0.15rem 0.45rem', borderRadius: '4px', fontWeight: 800 }}>780ms SPEED</span>
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.4rem' }}>
                Instant Sub-Second Checkout
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginBottom: '0.85rem' }}>
                Synchronized across 4 multi-regional fulfillment warehouses
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ backgroundColor: '#0F141F', padding: '0.4rem 0.75rem', borderRadius: '6px', fontSize: '0.75rem', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.1)' }}>Apple Pay</span>
                <span style={{ backgroundColor: '#0F141F', padding: '0.4rem 0.75rem', borderRadius: '6px', fontSize: '0.75rem', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.1)' }}>1-Click Checkout</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem' }}>
              <div style={{ backgroundColor: '#181C23', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Conversion Uplift</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#10B981' }}>+28% Uplift</div>
              </div>
              <div style={{ backgroundColor: '#181C23', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Inventory Sync</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FA5413' }}>Zero Desync</div>
              </div>
            </div>
          </div>
        )}

        {/* REAL ESTATE */}
        {visualType === 'realestate' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ backgroundColor: '#181C23', borderRadius: '12px', padding: '1.25rem', border: '1px solid rgba(250, 84, 19, 0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#FA5413' }}>DUBAI PROPERTIES PORTAL</span>
                <span style={{ fontSize: '0.7rem', color: '#94A3B8' }}>5,000+ Active Listings</span>
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.2rem' }}>
                3D Interactive Walkthrough
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginBottom: '0.85rem' }}>
                Virtual tour engine with digital lease execution
              </div>
              <div style={{ backgroundColor: '#0F141F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '0.5rem 0.75rem', fontSize: '0.75rem', color: '#10B981', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={14} />
                <span>Automated Tenant Credit Scoring Verified</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem' }}>
              <div style={{ backgroundColor: '#181C23', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Leasing Cycle</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#10B981' }}>-14 Days Faster</div>
              </div>
              <div style={{ backgroundColor: '#181C23', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Lead Engagement</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FA5413' }}>+45% Boost</div>
              </div>
            </div>
          </div>
        )}

        {/* MANUFACTURING */}
        {visualType === 'manufacturing' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ backgroundColor: '#181C23', borderRadius: '12px', padding: '1.25rem', border: '1px solid rgba(250, 84, 19, 0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#FA5413' }}>SMART FACTORY IOT TELEMETRY</span>
                <span style={{ fontSize: '0.7rem', color: '#10B981', fontWeight: 700 }}>EDGE COMPUTER VISION</span>
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.2rem' }}>
                Defect Detection &amp; OEE Pipeline
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginBottom: '0.85rem' }}>
                Real-time conveyor vibration telemetry and automated work orders
              </div>
              <div style={{ backgroundColor: '#0F141F', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '0.5rem 0.75rem', fontSize: '0.75rem', color: '#10B981', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={14} />
                <span>Conveyor Inspection: PASS (99.6% Accuracy)</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem' }}>
              <div style={{ backgroundColor: '#181C23', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Unplanned Downtime</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#10B981' }}>-35% Less</div>
              </div>
              <div style={{ backgroundColor: '#181C23', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8' }}>Detection Rate</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FA5413' }}>99.6% Precision</div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
