import React, { useState } from 'react';
import { TECH_STACK_DATA, TECH_CATEGORIES } from '../data/techStackData';
import { EngineeringGraphicArt } from './EngineeringGraphicArt';
import {
  Sparkles,
  Cpu,
  Network,
  Binary,
  Database,
  Atom,
  Layers,
  Code,
  Palette,
  Layout,
  Smartphone,
  Tablet,
  Apple,
  Bot,
  Server,
  Terminal,
  Zap,
  Shield,
  Grid,
  Cloud,
  CloudRain,
  CloudLightning,
  Box,
  Wrench,
  FileText,
  Gauge,
  Coins,
  Blocks
} from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All Technologies');

  const filteredTech = activeCategory === 'All Technologies'
    ? TECH_STACK_DATA
    : TECH_STACK_DATA.filter((t) => t.category === activeCategory);

  const getTechIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles size={20} />;
      case 'Cpu': return <Cpu size={20} />;
      case 'Network': return <Network size={20} />;
      case 'Binary': return <Binary size={20} />;
      case 'Database': return <Database size={20} />;
      case 'Atom': return <Atom size={20} />;
      case 'Layers': return <Layers size={20} />;
      case 'Code': return <Code size={20} />;
      case 'Palette': return <Palette size={20} />;
      case 'Layout': return <Layout size={20} />;
      case 'Smartphone': return <Smartphone size={20} />;
      case 'Tablet': return <Tablet size={20} />;
      case 'Apple': return <Apple size={20} />;
      case 'Bot': return <Bot size={20} />;
      case 'Server': return <Server size={20} />;
      case 'Terminal': return <Terminal size={20} />;
      case 'Zap': return <Zap size={20} />;
      case 'Shield': return <Shield size={20} />;
      case 'Grid': return <Grid size={20} />;
      case 'Cloud': return <Cloud size={20} />;
      case 'CloudRain': return <CloudRain size={20} />;
      case 'CloudLightning': return <CloudLightning size={20} />;
      case 'Box': return <Box size={20} />;
      case 'Wrench': return <Wrench size={20} />;
      case 'FileText': return <FileText size={20} />;
      case 'Gauge': return <Gauge size={20} />;
      case 'Coins': return <Coins size={20} />;
      case 'Blocks': return <Blocks size={20} />;
      default: return <Code size={20} />;
    }
  };

  return (
    <section
      id="technologies"
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
      <EngineeringGraphicArt variant="dark" sectionCode="SEC.08/STACK" title="DISTRIBUTED_FRAMEWORK_MATRIX" />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>

        {/* Header */}
        <div style={{ maxWidth: '780px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
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
            Modern Frameworks &amp; Tooling
          </div>

          <h2 className="heading-section" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Technologies and <span className="gradient-orange-text">Platforms We Use</span>
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.6 }}>
            We leverage industry-standard, production-proven tools across artificial intelligence, modern frontend, cloud backends, and distributed systems.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '3rem'
          }}
        >
          {TECH_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isActive ? '1px solid #FA5413' : '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: isActive ? '#FA5413' : 'rgba(24, 28, 35, 0.7)',
                  color: isActive ? '#FFFFFF' : '#CBD5E1',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 12px rgba(250, 84, 19, 0.3)' : 'none'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Tech Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1rem'
          }}
        >
          {filteredTech.map((item) => (
            <div
              key={item.name}
              style={{
                backgroundColor: 'rgba(24, 28, 35, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all 0.25s ease'
              }}
              className="hover:border-orange-500/50 hover:bg-white/5"
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(250, 84, 19, 0.12)',
                  color: '#FA5413',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {getTechIcon(item.icon)}
              </div>
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#FFFFFF' }}>
                  {item.name}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '0.15rem' }}>
                  {item.popularFor}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
