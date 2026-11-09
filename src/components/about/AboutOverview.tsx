import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { COMPANY_DATA } from '../../data/companyData';
import { Logo } from '../common/Logo';

export const AboutOverview: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase & Brand Pin Badge (5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer decorative box */}
              <div className="rounded-3xl p-8 bg-gradient-to-br from-[#041829] via-[#092B46] to-[#06466B] text-white shadow-premium border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-yellow/15 rounded-full blur-2xl" />
                
                {/* Official Logo Display */}
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 text-center mb-6">
                  <Logo variant="white" size="lg" />
                  <p className="text-xs text-brand-yellow font-semibold mt-3">
                    Recruitment & Placement Consultancy
                  </p>
                </div>

                <div className="space-y-4 text-xs text-slate-200">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <MapPin className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                    <div>
                      <strong className="text-white block font-semibold text-sm">Narhe, Pune Headquarters</strong>
                      <span>Shop No 6, Deepraj Angan, Zeal College Rd, Narhe, Pune 411041</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                    <ShieldCheck className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                    <div>
                      <strong className="text-white block font-semibold text-sm">Director Shalan Hingmire</strong>
                      <span>Committed to transparent and ethical guidance</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-slate-300 text-center">
                  Premier Recruitment &amp; Placement Consultancy • Narhe, Pune
                </div>
              </div>

              {/* Floating accent badge */}
              <div className="absolute -bottom-5 -right-5 hidden sm:flex items-center gap-2 p-3.5 rounded-2xl bg-white text-brand-darkNavy shadow-xl border border-slate-100 z-10">
                <div className="w-8 h-8 rounded-lg bg-brand-yellow text-brand-darkNavy flex items-center justify-center font-black text-xs">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Pune Verified</div>
                  <div className="text-[10px] text-slate-500 font-semibold">Recruitment Support</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Company Overview Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lightYellow text-brand-darkNavy text-xs font-bold uppercase tracking-wider border border-brand-yellow/40">
              <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
              <span>Who We Are</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-darkNavy leading-tight">
              Bridging the Gap Between <span className="text-brand-navy">Talent</span> and{' '}
              <span className="text-brand-yellow underline decoration-brand-yellow/50 underline-offset-4">
                Organizations
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              {COMPANY_DATA.aboutDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-brand-lightGrey border border-slate-200/80">
                <h4 className="text-sm font-bold font-heading text-brand-darkNavy mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-navy" />
                  <span>Candidate Empowerment</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Personalized resume review, interview confidence coaching, and ethical career recommendations.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-brand-lightGrey border border-slate-200/80">
                <h4 className="text-sm font-bold font-heading text-brand-darkNavy mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-navy" />
                  <span>Corporate Reliability</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Understanding organizational mandates and delivering screened candidate profiles that match actual role requirements.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed italic border-l-2 border-brand-yellow pl-4">
              "We believe that every candidate possesses distinct potential, and every organization thrives with the right team. Our mission is to facilitate that connection with dedication and integrity."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

