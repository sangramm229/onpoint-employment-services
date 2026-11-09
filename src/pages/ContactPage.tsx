import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Building2, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { ContactCards } from '../components/contact/ContactCards';
import { QuickInquiryForm } from '../components/contact/QuickInquiryForm';
import { MapSection } from '../components/contact/MapSection';
import { COMPANY_DATA } from '../data/companyData';
import { Logo } from '../components/common/Logo';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-brand-lightGrey min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lightYellow text-brand-darkNavy text-xs font-bold uppercase tracking-wider mb-3 border border-brand-yellow/40">
            <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
            <span>Connect With Our Office</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-brand-darkNavy">
            Let's Connect and <span className="text-brand-navy">Build Opportunities Together</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Headquartered in Narhe, Pune, Onpoint Employment Services welcomes inquiries from job seekers, fresh graduates, and corporate organizations seeking reliable recruitment partnerships.
          </p>
        </div>

        {/* Two-Column Grid: Contact Details Cards + Direct Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-16">
          <div className="lg:col-span-6">
            <ContactCards />
          </div>

          <div className="lg:col-span-6">
            <QuickInquiryForm />
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mb-12">
          <MapSection />
        </div>

        {/* Direct Consultation Note */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center text-xs text-slate-600 max-w-3xl mx-auto shadow-sm">
          <p>
            <strong className="text-brand-darkNavy">Direct Consultations &amp; Office Visits:</strong> We welcome job seekers, fresh graduates, and corporate HR representatives to connect with us. Schedule an in-person meeting with Director Shalan Hingmire and our recruitment team at our office located at <strong>Shop No 6, Deepraj Angan, Zeal College Rd, Narhe, Pune</strong>, or reach us instantly via Phone and WhatsApp.
          </p>
        </div>

      </div>
    </div>
  );
};

