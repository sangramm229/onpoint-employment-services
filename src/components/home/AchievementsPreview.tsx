import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Building2, 
  Laptop, 
  Cog, 
  Landmark, 
  PhoneCall, 
  Activity, 
  ShoppingBag,
  ArrowRight
} from 'lucide-react';
import { COMPANY_DATA } from '../../data/companyData';
import { SectionHeading } from '../common/SectionHeading';

const iconMap: Record<string, React.ElementType> = {
  Laptop,
  Cog,
  Landmark,
  PhoneCall,
  Activity,
  ShoppingBag,
};

export const AchievementsPreview: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-brand-lightGrey relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Company Journey"
          title={COMPANY_DATA.achievements.heading}
          description={COMPANY_DATA.achievements.subheading}
        />

        {/* Verified Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {COMPANY_DATA.achievements.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-3xl sm:text-4xl font-black font-heading text-brand-navy mb-1">
                {stat.metric}
              </div>
              <div className="text-xs sm:text-sm font-bold text-brand-darkNavy uppercase tracking-wider mb-2">
                {stat.label}
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Industries Served */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-premium border border-slate-100 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                Key Industry Verticals
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-darkNavy">
                Sectors Where We Facilitate Career Opportunities
              </h3>
            </div>
            <Link
              to="/achievements"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:text-brand-yellow transition-colors"
            >
              <span>View Full Journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_DATA.achievements.industriesServed.map((industry) => {
              const Icon = iconMap[industry.icon] || Briefcase;
              return (
                <div
                  key={industry.name}
                  className="p-5 rounded-2xl bg-brand-lightGrey/80 border border-slate-100 hover:border-brand-yellow/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-darkNavy text-brand-yellow flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-brand-darkNavy mb-1">
                    {industry.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Optional Corporate Network Verified Box */}
        <div className="p-6 rounded-2xl bg-brand-darkNavy text-white border border-brand-yellow/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-yellow flex items-center justify-center flex-shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold font-heading text-white">
                Companies Where Our Candidates Have Found Opportunities
              </h4>
              <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {COMPANY_DATA.achievements.corporateNetworkNote}
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full bg-brand-yellow text-brand-darkNavy text-xs font-bold shadow hover:bg-brand-yellowHover transition-colors flex-shrink-0"
          >
            Partner as Employer
          </Link>
        </div>
      </div>
    </section>
  );
};

