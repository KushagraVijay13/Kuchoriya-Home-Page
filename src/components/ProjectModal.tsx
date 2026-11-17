import React, { useEffect } from 'react';
import { CaseStudyItem, ServiceItem } from '../types';
import { X, CheckCircle2, ShieldCheck, ArrowRight, ExternalLink, Code2 } from 'lucide-react';

interface ProjectModalProps {
  project: CaseStudyItem | null;
  service: ServiceItem | null;
  onClose: () => void;
  onOpenConsultation?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  service, 
  onClose, 
  onOpenConsultation 
}) => {
  const isOpen = Boolean(project || service);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(7, 10, 15, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          backgroundColor: '#181C23',
          border: '1px solid rgba(250, 84, 19, 0.4)',
          borderRadius: '18px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(250, 84, 19, 0.2)',
          color: '#FFFFFF',
          overflowY: 'auto',
          padding: 'clamp(1.5rem, 3vw, 2.5rem)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}
          aria-label="Close details"
        >
          <X size={20} />
        </button>

        {/* Modal Case Study Details */}
        {project && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FA5413', backgroundColor: 'rgba(250, 84, 19, 0.15)', padding: '0.25rem 0.65rem', borderRadius: '6px', textTransform: 'uppercase' }}>
                {project.industry}
              </span>
              <span style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>
                Client: {project.client}
              </span>
              {project.badge && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', color: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                  <ShieldCheck size={12} />
                  <span>{project.badge}</span>
                </span>
              )}
            </div>

            <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.25, marginBottom: '0.75rem' }}>
              {project.title}
            </h3>

            <p style={{ fontSize: '1.05rem', color: '#CBD5E1', fontWeight: 500, lineHeight: 1.5, marginBottom: '1.75rem' }}>
              {project.tagline}
            </p>

            {/* Architecture Details Box */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
              <div style={{ backgroundColor: '#0F141F', borderRadius: '10px', padding: '1.25rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#EF4444', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
                  Problem Addressed &amp; Technical Bottlenecks
                </div>
                <div style={{ fontSize: '0.92rem', color: '#CBD5E1', lineHeight: 1.6 }}>
                  {project.problem}
                </div>
              </div>

              <div style={{ backgroundColor: '#0F141F', borderRadius: '10px', padding: '1.25rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
                  Engineering Solution &amp; System Architecture
                </div>
                <div style={{ fontSize: '0.92rem', color: '#CBD5E1', lineHeight: 1.6 }}>
                  {project.solution}
                </div>
              </div>
            </div>

            {/* Verified Outcomes */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                Verified Deliverables &amp; Performance Metrics
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {project.verifiedResults.map((res, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={16} style={{ color: '#FA5413', marginTop: '3px', flexShrink: 0 }} />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                Underlying Stack &amp; Infrastructure
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {project.techStack.map((tech) => (
                  <span key={tech} style={{ fontSize: '0.78rem', backgroundColor: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#FFFFFF', padding: '0.25rem 0.65rem', borderRadius: '4px', fontWeight: 500 }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <a
                href="#contact"
                onClick={() => {
                  onClose();
                  if (onOpenConsultation) onOpenConsultation();
                }}
                className="btn btn-primary"
                style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}
              >
                <span>Build Similar Architecture</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={project.verifiedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.75rem 1.25rem', fontSize: '0.9rem' }}
              >
                <span>View on Live Website</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        )}

        {/* Modal Service Details */}
        {service && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FA5413', backgroundColor: 'rgba(250, 84, 19, 0.15)', padding: '0.25rem 0.65rem', borderRadius: '6px', textTransform: 'uppercase' }}>
                {service.category}
              </span>
            </div>

            <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
              {service.title}
            </h3>

            <p style={{ fontSize: '1rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '1.75rem' }}>
              {service.fullDesc}
            </p>

            {/* Deliverables List */}
            <div style={{ marginBottom: '1.75rem', backgroundColor: '#0F141F', borderRadius: '10px', padding: '1.25rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#FA5413', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                Complete Service Deliverables:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {service.deliverables.map((d, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={16} style={{ color: '#FA5413', marginTop: '3px', flexShrink: 0 }} />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                Supported Frameworks &amp; Languages
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {service.techStack.map((tech) => (
                  <span key={tech} style={{ fontSize: '0.78rem', backgroundColor: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#FFFFFF', padding: '0.25rem 0.65rem', borderRadius: '4px', fontWeight: 500 }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <a
                href="#contact"
                onClick={() => {
                  onClose();
                  if (onOpenConsultation) onOpenConsultation();
                }}
                className="btn btn-primary"
                style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}
              >
                <span>Discuss {service.title}</span>
                <ArrowRight size={16} />
              </a>

              {service.officialUrl && (
                <a
                  href={service.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '0.75rem 1.25rem', fontSize: '0.9rem' }}
                >
                  <span>Official Service Details</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
