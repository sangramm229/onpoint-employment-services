import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import { COMPANY_DATA } from '../../data/companyData';
import { SectionHeading } from '../common/SectionHeading';

export const MissionVision: React.FC = () => {
  return (
    <section className="py-20 bg-brand-lightGrey relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Guiding Principles"
          title="Our Purpose, Mission &"
          highlightedWord="Vision"
          description="The foundational compass that guides our recruitment operations, client partnerships, and candidate interactions every day."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-8 sm:p-10 bg-white shadow-premium border-2 border-brand-yellow/30 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lightYellow rounded-bl-full pointer-events-none" />
            
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-yellow text-brand-darkNavy flex items-center justify-center mb-6 shadow">
                <Target className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-brand-navy block mb-2">
                Our Primary Purpose
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-darkNavy mb-4">
                Our Mission
              </h3>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {COMPANY_DATA.missionVision.mission}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-brand-darkNavy">
              <span className="w-2 h-2 rounded-full bg-brand-yellow" />
              <span>Ethical Placement • Candidate Care • Corporate Growth</span>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl p-8 sm:p-10 bg-brand-darkNavy text-white shadow-premium border border-slate-700 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-navy/60 rounded-bl-full pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-navy text-brand-yellow flex items-center justify-center mb-6 shadow border border-brand-yellow/30">
                <Eye className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow block mb-2">
                Our Long-Term Aspiration
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-4">
                Our Vision
              </h3>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {COMPANY_DATA.missionVision.vision}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700 flex items-center gap-2 text-xs font-bold text-brand-yellow">
              <span className="w-2 h-2 rounded-full bg-brand-yellow" />
              <span>Trust • Reliability • Pune Placement Leadership</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

