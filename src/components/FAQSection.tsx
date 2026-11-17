import React, { useState } from 'react';
import { FAQ_DATA } from '../data/faqData';
import { EngineeringGraphicArt } from './EngineeringGraphicArt';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

interface FAQSectionProps {
  onOpenConsultation?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenConsultation }) => {
  // First item open by default
  const [openIds, setOpenIds] = useState<string[]>([FAQ_DATA[0].id]);

  const toggleAccordion = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section 
      id="faq"
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
      <EngineeringGraphicArt variant="dark" sectionCode="SEC.11/FAQ" title="ENTERPRISE_KNOWLEDGE_BASE" />

      <div className="container" style={{ maxWidth: '960px', position: 'relative', zIndex: 10 }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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
            Clear Answers
          </div>

          <h2 className="heading-section" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Frequently Asked <span style={{ color: '#FA5413' }}>Questions</span>
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Transparent facts regarding our custom engineering costs, delivery timelines, AI capabilities, and post-launch SLAs.
          </p>
        </div>

        {/* Accordion Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {FAQ_DATA.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                style={{
                  backgroundColor: isOpen ? '#181C23' : 'rgba(24, 28, 35, 0.6)',
                  border: isOpen ? '1px solid #FA5413' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease',
                  boxShadow: isOpen ? '0 8px 24px -6px rgba(250, 84, 19, 0.25)' : 'none'
                }}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: '#FFFFFF',
                    fontSize: '1.05rem',
                    fontWeight: 700
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={18} style={{ color: isOpen ? '#FA5413' : '#94A3B8', flexShrink: 0 }} />
                    <span>{faq.question}</span>
                  </span>

                  <ChevronDown
                    size={20}
                    style={{
                      color: isOpen ? '#FA5413' : '#94A3B8',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.5rem 1.5rem 3rem',
                      color: '#CBD5E1',
                      fontSize: '0.96rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      paddingTop: '1rem'
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div 
          style={{
            marginTop: '3.5rem',
            backgroundColor: '#181C23',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '16px',
            padding: '2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF' }}>
            Still have questions about your specific technical requirements?
          </div>
          <p style={{ fontSize: '0.95rem', color: '#94A3B8', maxWidth: '600px' }}>
            Speak directly with our technical solutions architects. We provide an initial technical audit and confidential NDA within 24 hours.
          </p>
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
              padding: '0.75rem 1.5rem',
              fontSize: '0.95rem',
              borderRadius: '8px'
            }}
          >
            <span>Ask Our Technical Team</span>
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};
