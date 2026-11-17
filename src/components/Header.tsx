import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { 
  Phone, 
  Mail, 
  ArrowRight, 
  Menu, 
  X, 
  Star, 
  ShieldCheck, 
  ChevronDown,
  ExternalLink
} from 'lucide-react';

interface HeaderProps {
  onOpenConsultation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Our Work', href: '#case-studies' },
    { label: 'About Us', href: '#why-choose-us' },
    { label: 'Insights', href: '#faq' },
  ];

  const mobileNavLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Our Work', href: '#case-studies' },
    { label: 'About Us', href: '#why-choose-us' },
    { label: 'Why Kuchoriya', href: '#why-choose-us' },
    { label: 'Development Process', href: '#development-process' },
    { label: 'Cost Estimator', href: '#estimator' },
    { label: 'Insights & FAQ', href: '#faq' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
      <header 
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          width: '100%',
          transition: 'all 0.3s ease',
          backgroundColor: isScrolled ? 'rgba(11, 15, 23, 0.95)' : '#0B0F17',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0.04)',
          boxShadow: isScrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.5)' : 'none'
        }}
      >
        {/* Top Contact & Trust Strip */}
        <div 
          style={{
            backgroundColor: '#070A0F',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            fontSize: '0.78rem',
            color: '#94A3B8',
            padding: '0.4rem 0'
          }}
          className="hidden md:block"
        >
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Left: Global Sales Contacts */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <a 
                href="tel:+16504887911" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#CBD5E1', textDecoration: 'none' }}
                className="hover:text-orange"
              >
                <Phone size={13} style={{ color: '#FA5413' }} />
                <span>USA: +1-6504887911</span>
              </a>
              <span style={{ color: 'rgba(255, 255, 255, 0.15)' }}>|</span>
              <a 
                href="tel:+918003156735" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#CBD5E1', textDecoration: 'none' }}
                className="hover:text-orange"
              >
                <Phone size={13} style={{ color: '#FA5413' }} />
                <span>IND: +91-8003156735</span>
              </a>
              <span style={{ color: 'rgba(255, 255, 255, 0.15)' }}>|</span>
              <a 
                href="mailto:info@kuchoriyatechsoft.com" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#CBD5E1', textDecoration: 'none' }}
                className="hover:text-orange"
              >
                <Mail size={13} style={{ color: '#FA5413' }} />
                <span>info@kuchoriyatechsoft.com</span>
              </a>
            </div>

            {/* Right: Verified Rating & Certification Indicators */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#E2E8F0' }}>
                <Star size={13} style={{ fill: '#FA5413', color: '#FA5413' }} />
                <span style={{ fontWeight: 600 }}>Rated 5.0</span>
                <span style={{ color: '#94A3B8' }}>on Clutch &amp; GoodFirms</span>
              </div>
              <span style={{ color: 'rgba(255, 255, 255, 0.15)' }}>|</span>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#94A3B8' }}>
                <ShieldCheck size={13} style={{ color: '#10B981' }} />
                <span>ISO 9001:2015 Certified Quality</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: isScrolled ? '70px' : '82px', transition: 'height 0.3s ease' }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} aria-label="Kuchoriya TechSoft Home">
            <Logo variant="dark" size="md" />
          </a>

          {/* Desktop Navigation Links (Visible on 1024px and above) */}
          <nav 
            className="desktop-nav"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: '#E2E8F0',
                  textDecoration: 'none',
                  fontSize: '0.94rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  padding: '0.4rem 0',
                  position: 'relative'
                }}
                className="hover:text-orange"
                onMouseEnter={(e) => { e.currentTarget.style.color = '#FA5413'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#E2E8F0'; }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA & Mobile Trigger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="#contact"
              onClick={(e) => {
                if (onOpenConsultation) {
                  e.preventDefault();
                  onOpenConsultation();
                }
              }}
              className="btn btn-primary discuss-project-btn"
              style={{
                padding: '0.7rem 1.5rem',
                fontSize: '0.92rem',
                fontWeight: 700,
                borderRadius: '8px',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(250, 84, 19, 0.4)'
              }}
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={16} />
            </a>

            {/* Mobile Menu Button (Visible strictly on mobile & tablet < 1024px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#FFFFFF',
                borderRadius: '8px',
                padding: '0.55rem',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
              }}
              className="mobile-menu-btn"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(7, 10, 15, 0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'flex-end',
            animation: 'fadeIn 0.2s ease'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              width: '85%',
              maxWidth: '380px',
              height: '100%',
              backgroundColor: '#0B0F17',
              borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar of Drawer */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <Logo variant="dark" size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: 'none',
                    color: '#FFFFFF',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {mobileNavLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      color: '#E2E8F0',
                      textDecoration: 'none',
                      fontSize: '0.98rem',
                      fontWeight: 600,
                      padding: '0.65rem 0.5rem',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={15} style={{ color: '#FA5413', opacity: 0.8 }} />
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions & Contact in Mobile Menu */}
            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '0.85rem',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  marginBottom: '1.25rem'
                }}
              >
                <span>Discuss Your Project</span>
                <ArrowRight size={16} />
              </a>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.82rem', color: '#94A3B8' }}>
                <a 
                  href="tel:+16504887911" 
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#CBD5E1', textDecoration: 'none' }}
                >
                  <Phone size={14} style={{ color: '#FA5413' }} />
                  <span>US: +1-6504887911</span>
                </a>
                <a 
                  href="tel:+918003156735" 
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#CBD5E1', textDecoration: 'none' }}
                >
                  <Phone size={14} style={{ color: '#FA5413' }} />
                  <span>India: +91-8003156735</span>
                </a>
                <a 
                  href="mailto:info@kuchoriyatechsoft.com" 
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#CBD5E1', textDecoration: 'none' }}
                >
                  <Mail size={14} style={{ color: '#FA5413' }} />
                  <span>info@kuchoriyatechsoft.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
