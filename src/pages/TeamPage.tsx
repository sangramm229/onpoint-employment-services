import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  ShieldCheck,
  Quote,
  CheckCircle2,
  Sparkles,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { LeaderCard } from '../components/team/LeaderCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { COMPANY_DATA } from '../data/companyData';
import { Link } from 'react-router-dom';

export const TeamPage: React.FC = () => {
  return (
    <div className="bg-brand-lightGrey min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lightYellow text-brand-darkNavy text-xs font-bold uppercase tracking-wider mb-3 border border-brand-yellow/40">
            <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
            <span>Organizational Governance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-brand-darkNavy">
            Meet Our <span className="text-brand-navy">Leadership Team</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            The dedicated minds spearheading Onpoint Employment Services, committed to ethical recruitment coordination, candidate mentorship, and reliable corporate staffing partnerships in Narhe, Pune.
          </p>
        </div>

        {/* Two-Column Leadership Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
          <LeaderCard member={COMPANY_DATA.leadership.director} type="director" />
          <LeaderCard member={COMPANY_DATA.leadership.hiringManager} type="hiring-manager" />
        </div>

        {/* Leadership Philosophy & Values Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-premium border border-slate-200/80 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-4 text-left border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-8">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow block mb-1">
                Our Commitment
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-darkNavy">
                Ethical Placement Governance
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Under Director Shalan Hingmire's direction, our team ensures every placement mandate operates on transparent communication, verified role criteria, and candidate well-being.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="p-4 rounded-xl bg-brand-lightGrey border border-slate-100">
                <h4 className="text-xs font-bold uppercase text-brand-navy mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-yellow" />
                  <span>Transparent Processes</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Honest guidance without false promises. We set realistic career goals and provide actionable feedback.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-lightGrey border border-slate-100">
                <h4 className="text-xs font-bold uppercase text-brand-navy mb-1 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-brand-yellow" />
                  <span>Employer Dependability</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Thorough pre-screening ensuring candidates align with company culture and job competencies.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Connect with Leadership CTA */}
        <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-[#041829] via-[#092B46] to-[#06466B] text-white shadow-premium border border-white/10">
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-2">
            Have a question for our Director or Recruitment Coordinators?
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 mb-6 max-w-xl mx-auto">
            Contact us directly to discuss custom recruitment packages or to schedule an in-person consultation at our Narhe, Pune office.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={COMPANY_DATA.contact.callUrl}
              className="px-6 py-3 rounded-full bg-brand-yellow text-brand-darkNavy font-bold text-xs sm:text-sm shadow hover:bg-brand-yellowHover transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call +91 9359710076</span>
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all"
            >
              Contact Our Office
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};