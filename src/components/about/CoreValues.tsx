import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Heart, 
  Building2, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { COMPANY_DATA } from '../../data/companyData';
import { SectionHeading } from '../common/SectionHeading';

export const CoreValues: React.FC = () => {
  const valueIcons = [ShieldCheck, Heart, Building2, Sparkles];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Values Section */}
        <SectionHeading
          badge="Our Principles"
          title="Our Core"
          highlightedWord="Values"
          description="Every interaction, candidate interview, and client partnership is anchored on these non-negotiable standards."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {COMPANY_DATA.missionVision.coreValues.map((val, idx) => {
            const Icon = valueIcons[idx] || ShieldCheck;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-brand-lightGrey/80 hover:bg-white border border-slate-200/80 hover:border-brand-navy/30 hover:shadow-premium transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-yellow flex items-center justify-center mb-4 shadow">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold font-heading text-brand-darkNavy mb-2">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Our Approach Section */}
        <div className="mt-8 pt-12 border-t border-slate-100">
          <SectionHeading
            badge="Process & Execution"
            title="Our Structured"
            highlightedWord="Recruitment Approach"
            description="How Onpoint Employment Services coordinates seamless connections between candidates and employers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {COMPANY_DATA.missionVision.approachSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#041829] via-[#092B46] to-[#06466B] text-white shadow-premium border border-white/10 relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-heading text-brand-yellow">
                      {step.step}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-slate-200">
                      →
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 text-[11px] text-brand-yellow font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Quality Assured</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

