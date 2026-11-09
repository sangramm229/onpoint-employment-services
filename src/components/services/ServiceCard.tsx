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
  ArrowRight
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

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect, index }) => {
  const IconComponent = iconMap[service.icon] || Briefcase;

  const categoryBadge = {
    candidates: { text: 'For Job Seekers', bg: 'bg-blue-50 text-brand-navy border-blue-200' },
    employers: { text: 'For Employers', bg: 'bg-amber-50 text-amber-900 border-amber-200' },
    both: { text: 'Candidates & Employers', bg: 'bg-emerald-50 text-emerald-900 border-emerald-200' },
  }[service.category];

  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-2xl p-6 sm:p-7 shadow-card hover:shadow-premium-hover border border-slate-100 hover:border-brand-yellow/50 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-6 right-6 h-1 bg-transparent group-hover:bg-brand-yellow rounded-t-full transition-all duration-300" />

      <div>
        {/* Header: Icon & Category Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-lightGrey group-hover:bg-brand-darkNavy text-brand-navy group-hover:text-brand-yellow flex items-center justify-center transition-colors duration-300 shadow-sm border border-slate-100">
            <IconComponent className="w-7 h-7 transition-transform group-hover:scale-110" />
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
          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-brand-lightGrey hover:bg-brand-navy hover:text-white text-slate-700 transition-colors"
        >
          Inquire Now
        </button>
      </div>
    </motion.div>
  );
};

