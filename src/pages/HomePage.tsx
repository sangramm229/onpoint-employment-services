import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Phone, 
  MessageCircle
} from 'lucide-react';
import { HeroSection } from '../components/home/HeroSection';
import { IntroStatsBanner } from '../components/home/IntroStatsBanner';
import { AudienceSwitcher } from '../components/home/AudienceSwitcher';
import { WorkflowTimeline } from '../components/home/WorkflowTimeline';
import { EthicsPledge } from '../components/home/EthicsPledge';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { AchievementsPreview } from '../components/home/AchievementsPreview';
import { FAQSection } from '../components/home/FAQSection';
import { ServiceCard } from '../components/services/ServiceCard';
import { ServiceInquiryModal } from '../components/common/ServiceInquiryModal';
import { SectionHeading } from '../components/common/SectionHeading';
import { COMPANY_DATA, ServiceItem } from '../data/companyData';

export const HomePage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Show top 6 services on homepage
  const featuredServices = COMPANY_DATA.services.slice(0, 6);

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Intro and Key Highlights Banner */}
      <IntroStatsBanner />

      {/* 3. Interactive Audience Switcher (For Candidates vs. For Employers) */}
      <AudienceSwitcher />

      {/* 4. Featured Services Section */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Expertise"
            title="Comprehensive Placement &"
            highlightedWord="Recruitment Services"
            description="Tailored employment solutions for aspiring professionals, fresh graduates, and corporate businesses seeking vetted talent."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onSelect={(s) => setSelectedService(s)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold bg-brand-navy text-white hover:bg-brand-darkNavy transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Explore All 10 Services</span>
              <ArrowRight className="w-4 h-4 text-brand-yellow" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. How We Work / 4-Step Timeline */}
      <WorkflowTimeline />

      {/* 6. Ethical Placement Pledge */}
      <EthicsPledge />

      {/* 7. Why Choose Onpoint */}
      <WhyChooseUs />

      {/* 8. Achievements & Journey Preview */}
      <AchievementsPreview />

      {/* 9. Frequently Asked Questions */}
      <FAQSection />

      {/* 10. Homepage Final Contact CTA Strip */}
      <section className="py-16 bg-gradient-to-br from-[#041829] via-[#092B46] to-[#06466B] text-white relative overflow-hidden border-t-4 border-brand-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow">
                Narhe, Pune • Maharashtra
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white">
                Let's Connect and Build Opportunities Together
              </h2>
              <p className="text-slate-200 text-sm max-w-2xl">
                Whether you are seeking career guidance or looking for qualified talent for your organization, our dedicated recruitment and placement team is ready to assist.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
              <a
                href={COMPANY_DATA.contact.callUrl}
                className="px-6 py-3 rounded-full bg-brand-yellow text-brand-darkNavy text-sm font-bold shadow-gold-glow hover:bg-brand-yellowHover transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call +91 9359710076</span>
              </a>

              <a
                href={COMPANY_DATA.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#25D366] text-white text-sm font-bold shadow hover:bg-[#20BD5A] transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Us</span>
              </a>

              <Link
                to="/contact"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-bold backdrop-blur-md border border-white/20 transition-all"
              >
                Full Contact Info
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceInquiryModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
};
