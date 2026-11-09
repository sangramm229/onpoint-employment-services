import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  HeartHandshake, 
  TrendingUp, 
  Shuffle, 
  Search, 
  Headphones 
} from 'lucide-react';
import { COMPANY_DATA } from '../../data/companyData';
import { SectionHeading } from '../common/SectionHeading';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  HeartHandshake,
  TrendingUp,
  Shuffle,
  Search,
  Headphones,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative gradient corner */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-lightYellow rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Why Choose Us"
          title="The Onpoint Advantage for"
          highlightedWord="Talent & Employers"
          description="We combine personal mentorship, local Pune industry insights, and structured corporate coordination to ensure successful recruitment outcomes."
        />

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {COMPANY_DATA.whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-7 rounded-2xl bg-brand-lightGrey/70 hover:bg-white border border-slate-200/80 hover:border-brand-navy/30 hover:shadow-premium transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-navy group-hover:bg-brand-yellow text-white group-hover:text-brand-darkNavy flex items-center justify-center mb-5 transition-colors duration-300 shadow-md">
                  <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>

                <h3 className="text-lg font-bold font-heading text-brand-darkNavy mb-2 group-hover:text-brand-navy transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Prompt */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-br from-[#041829] via-[#092B46] to-[#06466B] text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-premium border border-white/10">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Ready to find the right career opportunity or hire dependable talent?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200">
              Speak directly with our team in Narhe, Pune or initiate an inquiry today.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-brand-yellow text-brand-darkNavy font-bold text-sm shadow hover:bg-brand-yellowHover transition-all hover:scale-105 active:scale-95"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

