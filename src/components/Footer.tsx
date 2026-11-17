import React, { useState } from 'react';
import { Logo } from './Logo';
import { EngineeringGraphicArt } from './EngineeringGraphicArt';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook, 
  Youtube,
  ShieldCheck
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterSubscribed(true);
    }
  };

  return (
    <footer 
      style={{
        backgroundColor: '#0B0F17',
        color: '#FFFFFF',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: 'clamp(3.5rem, 6vw, 5rem)',
        paddingBottom: '2.5rem',
        fontSize: '0.88rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Consistent Engineering Graphic Art (Dark Variant) */}
      <EngineeringGraphicArt variant="dark" sectionCode="SEC.13/FOOTER" title="DISTRIBUTED_SITEMAP_INDEX" />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid-footer-layout" style={{ marginBottom: '3.5rem' }}>
          {/* Col 1 & 2: Brand Information & Newsletter */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Logo variant="dark" size="md" />
            
            <p style={{ color: '#94A3B8', lineHeight: 1.6, maxWidth: '420px', fontSize: '0.9rem' }}>
              Kuchoriya TechSoft is a premier custom software engineering and AI solutions company. We help visionary startups and global enterprises architect, build, and scale transformative digital products with zero compromise on quality.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#10B981', fontSize: '0.82rem' }}>
              <ShieldCheck size={16} />
              <span>ISO 9001:2015 Certified • HIPAA &amp; SOC 2 Compliant Partner</span>
            </div>

            {/* Newsletter Subscription */}
            <div style={{ marginTop: '0.5rem', maxWidth: '400px' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#E2E8F0', marginBottom: '0.4rem' }}>
                Subscribe to Tech Insights &amp; AI Playbooks
              </div>

              {!newsletterSubscribed ? (
                <form onSubmit={handleNewsletter} style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    style={{
                      flex: 1,
                      backgroundColor: '#101622',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '6px',
                      padding: '0.6rem 0.85rem',
                      color: '#FFFFFF',
                      fontSize: '0.85rem',
                      outline: 'none'
                    }}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ padding: '0.6rem 1rem', fontSize: '0.85rem', borderRadius: '6px' }}
                  >
                    <span>Subscribe</span>
                  </button>
                </form>
              ) : (
                <div style={{ color: '#10B981', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={16} />
                  <span>Thank you for subscribing to Kuchoriya Tech Insights!</span>
                </div>
              )}
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <a
                href="https://www.linkedin.com/company/kuchoriyatechsoft/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                aria-label="LinkedIn"
                className="hover:text-orange hover:bg-white/10"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://x.com/KuchoriyaSoft"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                aria-label="Twitter / X"
                className="hover:text-orange hover:bg-white/10"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.instagram.com/kuchoriyatechsoft/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                aria-label="Instagram"
                className="hover:text-orange hover:bg-white/10"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/people/Kuchoriya-TechSoft-Private-Limited/61583279013831/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                aria-label="Facebook"
                className="hover:text-orange hover:bg-white/10"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.youtube.com/@kuchoriyatechsoft"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#CBD5E1', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                aria-label="YouTube"
                className="hover:text-orange hover:bg-white/10"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Col 3: Core Services */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.25rem' }}>
              Core Services
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li><a href="#services" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-orange">Mobile App Development</a></li>
              <li><a href="#services" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-orange">Custom Software &amp; SaaS</a></li>
              <li><a href="#services" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-orange">AI &amp; Generative AI</a></li>
              <li><a href="#services" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-orange">AI Agents &amp; Automation</a></li>
              <li><a href="#services" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-orange">UI/UX &amp; Product Design</a></li>
              <li><a href="#services" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-orange">Cloud &amp; DevOps Engineering</a></li>
              <li><a href="#services" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-orange">Blockchain &amp; Web3</a></li>
              <li><a href="#services" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-orange">Headless eCommerce</a></li>
            </ul>
          </div>

          {/* Col 4: Specialized Solutions & Industries */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.25rem' }}>
              Industry Solutions
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li><a href="#industries" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-orange">FinTech &amp; Digital Banking</a></li>
              <li><a href="#industries" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-orange">Healthcare &amp; HIPAA EMR</a></li>
              <li><a href="#industries" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-orange">EdTech &amp; Video LMS</a></li>
              <li><a href="#industries" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-orange">Fleet Logistics &amp; Telematics</a></li>
              <li><a href="#industries" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-orange">Travel &amp; Contactless Car Rental</a></li>
              <li><a href="#industries" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-orange">Real Estate &amp; PropTech</a></li>
              <li><a href="#industries" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-orange">Manufacturing IoT Systems</a></li>
            </ul>
          </div>

          {/* Col 5: Company & Quick Links */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.25rem' }}>
              Quick Navigation
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li><a href="#why-choose-us" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-orange">Why Kuchoriya TechSoft</a></li>
              <li><a href="#case-studies" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-orange">Verified Case Studies</a></li>
              <li><a href="#development-process" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-orange">6-Stage Agile Process</a></li>
              <li><a href="#technologies" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-orange">Technologies &amp; Frameworks</a></li>
              <li><a href="#faq" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-orange">Cost &amp; Process FAQs</a></li>
              <li><a href="#contact" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-orange">Contact Sales &amp; NDA</a></li>
              <li>
                <a 
                  href="https://kuchoriyatechsoft.com/portfolio" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#FA5413', textDecoration: 'none', fontWeight: 600 }}
                >
                  Official Live Site ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Addresses Banner */}
        <div 
          className="grid-footer-offices"
          style={{
            padding: '1.5rem',
            backgroundColor: '#0F141F',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            marginBottom: '2.5rem'
          }}
        >
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.2rem' }}>
              India Global HQ (Jaipur)
            </div>
            <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
              C-15, Behind World Trade Park, Malviya Nagar, Jaipur, RJ 302017
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.2rem' }}>
              United States Office (NY)
            </div>
            <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
              9765 Keystone Court, Clarence, NY 14031, USA
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.2rem' }}>
              Canada Office (Ontario)
            </div>
            <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
              1100 Caven St, Suite PH11, Mississauga, ON L5G 4N3, Canada
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '1.75rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            fontSize: '0.78rem',
            color: '#64748B'
          }}
          className="md:flex-row"
        >
          <div>
            © {new Date().getFullYear()} Kuchoriya TechSoft Pvt. Ltd. All rights reserved. Registered software development enterprise.
          </div>

          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <a href="https://kuchoriyatechsoft.com/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:underline">Privacy Policy</a>
            <a href="https://kuchoriyatechsoft.com/terms" target="_blank" rel="noopener noreferrer" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:underline">Terms of Service</a>
            <a href="https://kuchoriyatechsoft.com/sitemap" target="_blank" rel="noopener noreferrer" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:underline">Sitemap</a>
            <span style={{ color: '#475569' }}>Local Redesign Evaluation</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
