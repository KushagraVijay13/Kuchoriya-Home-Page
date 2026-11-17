import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CredibilityBar } from './components/CredibilityBar';
import { ServicesSection } from './components/ServicesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { TechStackSection } from './components/TechStackSection';
import { TrustLogosSection } from './components/TrustLogosSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CaseStudyItem, ServiceItem } from './types';
import { MessageSquare } from 'lucide-react';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<CaseStudyItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [estimatorPrefill, setEstimatorPrefill] = useState<{ platform: string; scope: string; timeline: string; budget: string } | null>(null);

  const handleOpenConsultation = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyEstimate = (details: { platform: string; scope: string; timeline: string; budget: string }) => {
    setEstimatorPrefill(details);
    handleOpenConsultation();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F17] text-white" style={{ backgroundColor: '#0B0F17', color: '#FFFFFF' }}>
      {/* Sticky Header with Navigation and Contacts */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with Dual CTAs and Interactive Dashboard */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* 2. Company Credibility & Verified Statistics */}
        <CredibilityBar />

        {/* 3. Core Services Grid with Smooth Animated Tab Filter */}
        <ServicesSection 
          onSelectService={(s) => setSelectedService(s)} 
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 4. Industries Sector Showcase with Top Horizontal Pills & Rich Work Visuals (Zero Scroll Jump) */}
        <IndustriesSection 
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 5. Featured Work / Verified Case Studies with Category Filter & Visual Banners */}
        <CaseStudiesSection 
          onSelectProject={(p) => setSelectedProject(p)} 
        />

        {/* 6. Why Choose Kuchoriya (Authentic Differentiators) */}
        <WhyChooseUs onOpenConsultation={handleOpenConsultation} />

        {/* 7. 6-Stage Agile Development Process */}
        <ProcessSection />

        {/* 8. Technologies & Modern Frameworks Matrix */}
        <TechStackSection />

        {/* 9. Verified Client Logos & Industry Badges */}
        <TrustLogosSection />

        {/* 10. Client Testimonials & Review Platform Ratings */}
        <TestimonialsSection />

        {/* 11. Interactive Milestone Cost & Timeline Estimator */}
        <ProjectEstimator onApplyEstimate={handleApplyEstimate} />

        {/* 12. Frequently Asked Questions Accordion */}
        <FAQSection onOpenConsultation={handleOpenConsultation} />

        {/* 13. Final Call to Action & Consultation Form with Prefill */}
        <ContactSection prefillData={estimatorPrefill} />
      </main>

      {/* Comprehensive B2B Footer */}
      <Footer />

      {/* Interactive Project / Service Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        service={selectedService}
        onClose={() => {
          setSelectedProject(null);
          setSelectedService(null);
        }}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Floating Quick Action Button for Mobile/Tablet */}
      <aside 
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 40
        }}
        className="sm:hidden"
        aria-label="Quick Actions"
      >
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleOpenConsultation();
          }}
          className="btn btn-primary"
          style={{
            borderRadius: '9999px',
            padding: '0.75rem 1.25rem',
            boxShadow: '0 10px 25px -5px rgba(250, 84, 19, 0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.88rem'
          }}
        >
          <MessageSquare size={18} />
          <span>Quick Quote</span>
        </a>
      </aside>
    </div>
  );
};

export default App;
