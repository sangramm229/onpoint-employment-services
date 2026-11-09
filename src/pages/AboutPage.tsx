import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Target, 
  Users, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { AboutOverview } from '../components/about/AboutOverview';
import { MissionVision } from '../components/about/MissionVision';
import { CoreValues } from '../components/about/CoreValues';
import { COMPANY_DATA } from '../data/companyData';
import { Logo } from '../components/common/Logo';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-br from-[#041829] via-[#092B46] to-[#06466B] text-white py-16 sm:py-20 relative overflow-hidden border-b-4 border-brand-yellow">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-brand-yellow text-xs font-bold uppercase tracking-wider mb-4 border border-white/15"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Our Firm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black font-heading leading-tight"
          >
            About Onpoint <span className="text-brand-yellow">Employment Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-200 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed"
          >
            {COMPANY_DATA.heroDescription}
          </motion.p>
        </div>
      </section>

      {/* Main About Sections */}
      <AboutOverview />
      <MissionVision />
      <CoreValues />

      {/* Bottom CTA */}
      <section className="py-14 bg-brand-lightGrey border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold font-heading text-brand-darkNavy mb-3">
            Want to know more about our leadership and achievements?
          </h3>
          <p className="text-slate-600 text-sm mb-6">
            Explore our leadership structure under Director Shalan Hingmire or learn how we facilitate opportunities across Pune.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/team"
              className="px-6 py-3 rounded-full bg-brand-navy text-white text-xs sm:text-sm font-bold hover:bg-brand-darkNavy transition-all shadow-md"
            >
              Meet Our Leadership
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-white border border-slate-300 text-brand-navy text-xs sm:text-sm font-bold hover:bg-brand-lightGrey transition-all shadow-sm"
            >
              Contact Our Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

