import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  UserCheck, 
  Award, 
  FileText, 
  MessageSquare, 
  Compass, 
  Building2, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ServiceItem } from '../../data/companyData';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (service: ServiceItem) => void;
  index: number;
}

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  GraduationCap,
  UserCheck,
  Award,
  FileText,
  MessageSquare,
  Compass,
  Building2,
  Users,
  CheckCircle2,
};

// URRI HR style domain tags per service
const serviceTags: Record<string, string[]> = {
  'fresher-job-placement': ['Graduate Friendly', 'Campus-to-Corporate', 'Entry-Level'],
  'experienced-candidate-hiring': ['Mid & Senior Roles', 'Domain Matching', 'Confidential'],
  'corporate-recruitment-services': ['End-to-End Staffing', 'RPO Solutions', 'MIDC Network'],
  'resume-design-guidance': ['ATS Optimized', 'Format Alignment', 'Executive Bio'],
  'interview-preparation-coaching': ['Mock Interviews', 'Salary Negotiation', 'Confidence'],
  'career-counseling-freshers': ['Skill Assessment', 'Industry Roadmap', '1-on-1 Mentorship'],
  'contract-staffing-temporary': ['Flexible Workforce', 'Project Deployments', 'Compliance'],
  'executive-search-leadership': ['C-Suite & Lead Roles', 'Discreet Search', 'Retained Search'],
  'skill-gap-training-advisory': ['Market Readiness', 'Technical Upskilling', 'Corporate Ready'],
  'industry-campus-hiring-drives': ['College Tie-Ups', 'Bulk Hiring Drives', 'Pune Institutions'],
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect, index }) => {
  const IconComponent = iconMap[service.icon] || Briefcase;

  const categoryBadge = {
    candidates: { text: 'For Job Seekers', bg: 'bg-blue-50 text-brand-navy border-blue-200' },
    employers: { text: 'For Employers', bg: 'bg-amber-50 text-amber-900 border-amber-200' },
    both: { text: 'Candidates & Employers', bg: 'bg-emerald-50 text-emerald-900 border-emerald-200' },
  }[service.category];

  const tags = serviceTags[service.id] || ['Pune Network', 'Verified Roles', 'Direct Connect'];

  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-3xl p-6 sm:p-7 shadow-card hover:shadow-premium-hover border border-slate-100 hover:border-brand-navy/30 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-8 right-8 h-1 bg-transparent group-hover:bg-brand-yellow rounded-t-full transition-all duration-300" />

      <div>
        {/* Header: Icon & Category Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#092B46] text-brand-yellow flex items-center justify-center transition-transform duration-300 shadow-md group-hover:scale-110">
            <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>

          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${categoryBadge.bg}`}>
            {categoryBadge.text}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold font-heading text-brand-darkNavy group-hover:text-brand-navy transition-colors mb-2.5">
          {service.title}
        </h3>

        {/* Short description */}
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
          {service.shortDesc}
        </p>

        {/* URRI HR Style Capability Chips / Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((t, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md bg-brand-lightGrey text-slate-600 text-[10px] font-semibold border border-slate-200/80 group-hover:border-brand-yellow/50 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Key Highlights list */}
        {service.highlights && (
          <ul className="space-y-1.5 mb-6 pt-2 border-t border-slate-100">
            {service.highlights.map((h, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow flex-shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer Action Buttons */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
        <button
          type="button"
          onClick={() => onSelect(service)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy group-hover:text-brand-yellowHover transition-colors focus:outline-none"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>

        <button
          type="button"
          onClick={() => onSelect(service)}
          className="text-xs font-bold px-3.5 py-1.5 rounded-xl bg-brand-lightGrey hover:bg-brand-navy hover:text-white text-brand-darkNavy transition-all shadow-sm"
        >
          Inquire Now
        </button>
      </div>
    </motion.div>
  );
};


