import React, { useState, useEffect } from 'react';
import { GLOBAL_OFFICES } from '../data/companyData';
import { EngineeringGraphicArt } from './EngineeringGraphicArt';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  FileText,
  Copy,
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  ndaRequired: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

interface ContactSectionProps {
  prefillData?: { platform: string; scope: string; timeline: string; budget: string } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefillData }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: 'Mobile App Development',
    budget: '₹3 Lakhs - ₹7 Lakhs',
    message: '',
    ndaRequired: true
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  useEffect(() => {
    if (prefillData) {
      setFormData((prev) => ({
        ...prev,
        service: prefillData.platform,
        budget: prefillData.budget,
        message: `Project Scope: ${prefillData.scope}\nEstimated Timeline: ${prefillData.timeline}\nEstimated Investment: ${prefillData.budget}\n\nPlease review our technical specifications and prepare a mutual NDA.`
      }));
    }
  }, [prefillData]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Work Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number with country code is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief project summary';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Summary should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ ...formData });

      // Trigger celebratory confetti on form submission!
      if (typeof (window as any).confetti === 'function') {
        (window as any).confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const generateMailtoLink = () => {
    if (!submittedData) return '';
    const subject = encodeURIComponent(`Project Consultation Request - ${submittedData.fullName} (${submittedData.company || 'Enterprise'})`);
    const body = encodeURIComponent(
      `Hello Kuchoriya TechSoft Team,\n\n` +
      `I would like to discuss a project with your engineering team.\n\n` +
      `Contact Details:\n` +
      `- Name: ${submittedData.fullName}\n` +
      `- Email: ${submittedData.email}\n` +
      `- Phone: ${submittedData.phone}\n` +
      `- Company: ${submittedData.company || 'N/A'}\n` +
      `- Service Needed: ${submittedData.service}\n` +
      `- Estimated Budget: ${submittedData.budget}\n` +
      `- Mutual NDA Requested: ${submittedData.ndaRequired ? 'Yes' : 'No'}\n\n` +
      `Project Overview:\n${submittedData.message}\n\n` +
      `Best regards,\n${submittedData.fullName}`
    );
    return `mailto:info@kuchoriyatechsoft.com?subject=${subject}&body=${body}`;
  };

  return (
    <section 
      id="contact"
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
      <EngineeringGraphicArt variant="dark" sectionCode="SEC.12/CONSULTATION" title="GLOBAL_CONNECTIVITY_AND_NDA" />

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
            <Sparkles size={14} style={{ color: '#FA5413' }} />
            <span>Start Your Journey</span>
          </div>

          <h2 className="heading-section" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Have an Idea? Let&apos;s Turn It Into <span className="gradient-orange-text">Something Real.</span>
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.6 }}>
            Share your project specifications with our software architects. We provide a tailored technical proposal, architectural estimation, and mutual NDA within 24 hours.
          </p>
        </div>

        {/* 2-Column Layout: Form on Left, Direct Contacts on Right */}
        <div className="grid-estimator-layout">
          
          {/* Left: Project Enquiry Form */}
          <div style={{ width: '100%' }}>
            <div
              style={{
                backgroundColor: '#181C23',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '20px',
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF' }}>
                    Project Enquiry Form
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
                    Guaranteed response within 24 business hours
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#10B981', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '0.3rem 0.65rem', borderRadius: '6px' }}>
                  <ShieldCheck size={14} />
                  <span>Strict NDA Enforced</span>
                </div>
              </div>

              {!submittedData ? (
                <form onSubmit={handleSubmit} noValidate>
                  {/* Name and Email Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.25rem', marginBottom: '1.25rem' }} className="sm:grid-cols-2">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.4rem' }}>
                        Your Full Name <span style={{ color: '#FA5413' }}>*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Alex Morgan"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          backgroundColor: '#0F141F',
                          border: errors.fullName ? '1px solid #EF4444' : '1px solid rgba(255, 255, 255, 0.12)',
                          borderRadius: '8px',
                          color: '#FFFFFF',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      />
                      {errors.fullName && (
                        <div style={{ fontSize: '0.74rem', color: '#EF4444', marginTop: '0.25rem' }}>
                          {errors.fullName}
                        </div>
                      )}
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.4rem' }}>
                        Work Email Address <span style={{ color: '#FA5413' }}>*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. alex@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          backgroundColor: '#0F141F',
                          border: errors.email ? '1px solid #EF4444' : '1px solid rgba(255, 255, 255, 0.12)',
                          borderRadius: '8px',
                          color: '#FFFFFF',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      />
                      {errors.email && (
                        <div style={{ fontSize: '0.74rem', color: '#EF4444', marginTop: '0.25rem' }}>
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Phone & Company Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.25rem', marginBottom: '1.25rem' }} className="sm:grid-cols-2">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.4rem' }}>
                        Phone with Country Code <span style={{ color: '#FA5413' }}>*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +1 650 488 7911"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          backgroundColor: '#0F141F',
                          border: errors.phone ? '1px solid #EF4444' : '1px solid rgba(255, 255, 255, 0.12)',
                          borderRadius: '8px',
                          color: '#FFFFFF',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      />
                      {errors.phone && (
                        <div style={{ fontSize: '0.74rem', color: '#EF4444', marginTop: '0.25rem' }}>
                          {errors.phone}
                        </div>
                      )}
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.4rem' }}>
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Acme Corp or Startup"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          backgroundColor: '#0F141F',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          borderRadius: '8px',
                          color: '#FFFFFF',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  {/* Service Category & Budget Dropdowns */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.25rem', marginBottom: '1.25rem' }} className="sm:grid-cols-2">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.4rem' }}>
                        Primary Capability Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          backgroundColor: '#0F141F',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          borderRadius: '8px',
                          color: '#FFFFFF',
                          fontSize: '0.92rem',
                          outline: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Web & Custom Software">Web &amp; Custom Software Development</option>
                        <option value="Artificial Intelligence & GenAI">Artificial Intelligence &amp; GenAI</option>
                        <option value="AI Agent Development & Automation">AI Agent Development &amp; Automation</option>
                        <option value="UI/UX & Product Design">UI/UX &amp; Product Design</option>
                        <option value="Cloud & DevOps Engineering">Cloud &amp; DevOps Engineering</option>
                        <option value="Blockchain Development">Blockchain Development</option>
                        <option value="eCommerce Development">eCommerce Development</option>
                        <option value="Enterprise & On-Demand Systems">Enterprise &amp; On-Demand Systems</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.4rem' }}>
                        Estimated Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          backgroundColor: '#0F141F',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          borderRadius: '8px',
                          color: '#FFFFFF',
                          fontSize: '0.92rem',
                          outline: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="Under ₹2,50,000">Under ₹2,50,000 (&lt;$3k USD) — Scoping &amp; PoC</option>
                        <option value="₹2.5 Lakhs - ₹7 Lakhs">₹2.5 Lakhs - ₹7 Lakhs ($3k-$8k USD) — MVP Launch</option>
                        <option value="₹7 Lakhs - ₹16 Lakhs">₹7 Lakhs - ₹16 Lakhs ($8k-$18k USD) — Production App</option>
                        <option value="₹16 Lakhs - ₹35 Lakhs+">₹16 Lakhs - ₹35 Lakhs+ ($18k-$40k+ USD) — Enterprise Platform</option>
                        <option value="Dedicated Sprints (₹1,200 - ₹2,000/hr)">Dedicated Squad (₹1,200 - ₹2,000 / hr)</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Overview Message */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#E2E8F0', marginBottom: '0.4rem' }}>
                      Project Summary &amp; Scope Details <span style={{ color: '#FA5413' }}>*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe your business goals, target platforms, timelines, or key challenges..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        backgroundColor: '#0F141F',
                        border: errors.message ? '1px solid #EF4444' : '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '8px',
                        color: '#FFFFFF',
                        fontSize: '0.92rem',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                    {errors.message && (
                      <div style={{ fontSize: '0.74rem', color: '#EF4444', marginTop: '0.25rem' }}>
                        {errors.message}
                      </div>
                    )}
                  </div>

                  {/* NDA Checkbox */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.75rem' }}>
                    <input
                      type="checkbox"
                      id="ndaCheck"
                      checked={formData.ndaRequired}
                      onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                      style={{ width: '16px', height: '16px', accentColor: '#FA5413', cursor: 'pointer' }}
                    />
                    <label htmlFor="ndaCheck" style={{ fontSize: '0.84rem', color: '#CBD5E1', cursor: 'pointer' }}>
                      Please provide a mutual Non-Disclosure Agreement (NDA) before sharing sensitive documentation.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      padding: '0.95rem',
                      fontSize: '1rem',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.6rem'
                    }}
                  >
                    <span>Send Project Enquiry</span>
                    <Send size={18} />
                  </button>

                  <div style={{ fontSize: '0.74rem', color: '#64748B', textAlign: 'center', marginTop: '0.85rem' }}>
                    By submitting this form, your request is reviewed directly by our Solutions Architecture team. We respect your confidentiality.
                  </div>
                </form>
              ) : (
                /* Honest Working Confirmation State */
                <div 
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: '14px',
                    padding: '1.75rem',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#10B981', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF' }}>
                        Enquiry Prepared Successfully!
                      </h4>
                      <div style={{ fontSize: '0.82rem', color: '#A7F3D0' }}>
                        Ready for review by Kuchoriya TechSoft
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: '#E2E8F0', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                    Thank you, <strong>{submittedData.fullName}</strong>. In this prototype evaluation, we provide an honest working mailto link and submission payload so you can deliver this directly to our sales inbox.
                  </p>

                  {/* Summary Box */}
                  <div style={{ backgroundColor: '#0B0F17', borderRadius: '8px', padding: '1rem', border: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.84rem', color: '#CBD5E1', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <div><strong>Service:</strong> {submittedData.service}</div>
                    <div><strong>Budget:</strong> {submittedData.budget}</div>
                    <div><strong>Work Email:</strong> {submittedData.email}</div>
                    <div><strong>Phone:</strong> {submittedData.phone}</div>
                    <div><strong>NDA Requested:</strong> {submittedData.ndaRequired ? 'Yes (Guaranteed)' : 'Standard Terms'}</div>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    <a
                      href={generateMailtoLink()}
                      className="btn btn-primary"
                      style={{ padding: '0.75rem 1.25rem', fontSize: '0.9rem' }}
                    >
                      <span>Open in Email Client (Mailto)</span>
                      <ExternalLink size={15} />
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmittedData(null)}
                      className="btn btn-secondary"
                      style={{ padding: '0.75rem 1.25rem', fontSize: '0.9rem' }}
                    >
                      <span>Edit Information</span>
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Right: Verified Direct Contact & Global Offices */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
            
            {/* Direct Sales Box */}
            <div 
              style={{
                backgroundColor: '#181C23',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '18px',
                padding: '1.75rem'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FA5413', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
                Direct Communication Channels
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem' }}>
                Speak Directly with Sales
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Email Item */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#0F141F', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(250, 84, 19, 0.15)', color: '#FA5413', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>Sales &amp; Projects</div>
                      <a href="mailto:info@kuchoriyatechsoft.com" style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FFFFFF', textDecoration: 'none' }} className="hover:underline">
                        info@kuchoriyatechsoft.com
                      </a>
                    </div>
                  </div>
                  <button 
                    type="button"
                    onClick={() => handleCopy('info@kuchoriyatechsoft.com', 'email')}
                    style={{ background: 'none', border: 'none', color: copiedText === 'email' ? '#10B981' : '#94A3B8', cursor: 'pointer', padding: '0.4rem' }}
                    title="Copy Email"
                  >
                    {copiedText === 'email' ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                  </button>
                </div>

                {/* US Phone */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#0F141F', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(250, 84, 19, 0.15)', color: '#FA5413', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>United States Sales</div>
                      <a href="tel:+16504887911" style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FFFFFF', textDecoration: 'none' }} className="hover:underline">
                        +1-6504887911
                      </a>
                    </div>
                  </div>
                  <button 
                    type="button"
                    onClick={() => handleCopy('+16504887911', 'usPhone')}
                    style={{ background: 'none', border: 'none', color: copiedText === 'usPhone' ? '#10B981' : '#94A3B8', cursor: 'pointer', padding: '0.4rem' }}
                    title="Copy US Phone"
                  >
                    {copiedText === 'usPhone' ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                  </button>
                </div>

                {/* India HQ Phone */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#0F141F', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: 'rgba(250, 84, 19, 0.15)', color: '#FA5413', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>India Global HQ</div>
                      <a href="tel:+918003156735" style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FFFFFF', textDecoration: 'none' }} className="hover:underline">
                        +91-8003156735
                      </a>
                    </div>
                  </div>
                  <button 
                    type="button"
                    onClick={() => handleCopy('+918003156735', 'inPhone')}
                    style={{ background: 'none', border: 'none', color: copiedText === 'inPhone' ? '#10B981' : '#94A3B8', cursor: 'pointer', padding: '0.4rem' }}
                    title="Copy India Phone"
                  >
                    {copiedText === 'inPhone' ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Global Locations List */}
            <div 
              style={{
                backgroundColor: '#181C23',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '18px',
                padding: '1.75rem'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#FA5413', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
                Worldwide Presence
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
                Official Global Locations
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {GLOBAL_OFFICES.map((office) => (
                  <div 
                    key={office.country}
                    style={{
                      padding: '0.85rem',
                      backgroundColor: '#0F141F',
                      borderRadius: '8px',
                      border: office.isHQ ? '1px solid rgba(250, 84, 19, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                      <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF' }}>
                        {office.country}
                      </span>
                      {office.isHQ && (
                        <span style={{ fontSize: '0.65rem', backgroundColor: '#FA5413', color: '#FFFFFF', padding: '0.15rem 0.45rem', borderRadius: '4px', fontWeight: 700 }}>
                          HQ
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#94A3B8', lineHeight: 1.4, marginBottom: '0.35rem' }}>
                      {office.address}
                    </div>
                    <div style={{ fontSize: '0.76rem', color: '#FF8C38', fontWeight: 600 }}>
                      Tel: {office.phone}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
