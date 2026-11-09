import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  MessageCircle, 
  FileText, 
  Briefcase, 
  Users, 
  Compass, 
  Target, 
  Clock 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_DATA } from '../../data/companyData';

export const AudienceSwitcher: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'candidates' | 'employers'>('candidates');

  const candidateBenefits = [
    {
      title: "Targeted Placement Mapping",
      desc: "Align your qualifications, degrees, and aspirations with vetted hiring requirements across Pune.",
      icon: Briefcase
    },
    {
      title: "Fresher & Graduate Orientation",
      desc: "Guidance on transitioning from campus academics to corporate workplace expectations.",
      icon: GraduationCap
    },
    {
      title: "Resume & Interview Coaching",
      desc: "Professional insights to make your CV stand out to recruiters and ace interview rounds.",
      icon: FileText
    },
    {
      title: "Direct Human Mentorship",
      desc: "Personalized communication without automated rejection bots or hidden procedures.",
      icon: Compass
    }
  ];

  const employerBenefits = [
    {
      title: "Pre-Screened Talent Pipeline",
      desc: "Thoroughly interviewed and vetted candidates matching your exact technical & cultural requirements.",
      icon: Users
    },
    {
      title: "Fast Turnaround Time",
      desc: "Reduce your internal hiring overhead with expedited shortlisting from our active regional talent pool.",
      icon: Clock
    },
    {
      title: "Volume & Niche Staffing",
      desc: "Capabilities across IT, Engineering, BFSI, Operations, and Customer Support in Maharashtra.",
      icon: Target
    },
    {
      title: "Dedicated Recruitment Liaison",
      desc: "A single point of contact from our senior recruitment team for transparent and accountable coordination.",
      icon: Building2
    }
  ];

  const currentBenefits = activeTab === 'candidates' ? candidateBenefits : employerBenefits;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-navy mb-2 bg-brand-lightYellow px-3 py-1 rounded-full border border-brand-yellow/30">
            Tailored Engagement
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-brand-darkNavy">
            How Onpoint Supports Your Professional Goals
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Whether you are advancing your personal career or expanding your corporate workforce in Pune, select your path below.
          </p>

          {/* Segmented Switcher Controls */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-brand-lightGrey border border-slate-200/80 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('candidates')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'candidates'
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'text-slate-600 hover:text-brand-navy'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>For Job Seekers & Freshers</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('employers')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'employers'
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'text-slate-600 hover:text-brand-navy'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>For Employers & Corporates</span>
            </button>
          </div>
        </div>

        {/* Dynamic Content Block with Smooth Fade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl p-8 sm:p-12 bg-brand-lightGrey/60 border border-slate-200/80 shadow-card"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Value Narrative (5 cols) */}
              <div className="lg:col-span-5 space-y-5 text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow font-heading">
                  {activeTab === 'candidates' ? 'Candidate Empowerment Hub' : 'Corporate Talent Acquisition'}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-darkNavy leading-tight">
                  {activeTab === 'candidates'
                    ? 'Start Your Career Journey with Structured Guidance'
                    : 'Hire Verified & Screened Professionals Fast'}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {activeTab === 'candidates'
                    ? 'Navigating the job market requires clarity, confidence, and authentic opportunities. Onpoint provides personalized support for graduates and working professionals in Narhe, Pune.'
                    : 'Finding reliable talent is critical for business continuity. We understand job descriptions deeply, conducting rigorous initial shortlists so you only interview top-fit candidates.'}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={COMPANY_DATA.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow transition-all hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{activeTab === 'candidates' ? 'Chat for Career Advice' : 'Inquire for Hiring Mandate'}</span>
                  </a>

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-navy hover:text-brand-darkNavy py-3 px-4"
                  >
                    <span>View Related Services</span>
                    <ArrowRight className="w-4 h-4 text-brand-yellow" />
                  </Link>
                </div>
              </div>

              {/* Right Column: 4 Pillar Cards (7 cols) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentBenefits.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-left"
                    >
                      <div className="w-10 h-10 rounded-xl bg-brand-darkNavy text-brand-yellow flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-brand-darkNavy mb-1">
                        {b.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

