import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap, 
  Users, 
  Briefcase,
  Building2,
  MapPin,
  ShieldCheck,
  TrendingUp,
  Award
} from 'lucide-react';
import { COMPANY_DATA } from '../../data/companyData';

export const IntroStatsBanner: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Fresher & Graduate Placement",
      desc: "Tailored career mapping, resume structuring, and orientation for fresh graduates."
    },
    {
      icon: Users,
      title: "Corporate Recruitment",
      desc: "Partnering with Pune & Maharashtra businesses for reliable talent sourcing."
    },
    {
      icon: Briefcase,
      title: "Career & Interview Guidance",
      desc: "Empowering candidates with real-world interview preparation and mock sessions."
    }
  ];

  const puneCorridors = [
    "Hinjawadi IT Park",
    "Chakan & Bhosari MIDC",
    "Magarpatta Cybercity",
    "Kharadi EON Free Zone",
    "Narhe Industrial Corridor",
    "Talegaon Auto Belt"
  ];

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 mb-16">
      
      {/* 1. Fast Key Stats Bar (Floating with Deep Navy Gradient & Gold Borders) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
        {COMPANY_DATA.achievements.stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-5 sm:p-6 rounded-2xl bg-[#092B46] text-white border-2 border-brand-yellow/40 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="text-3xl sm:text-4xl font-black font-heading text-brand-yellow mb-1">
                {stat.metric}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-1">
                {stat.label}
              </div>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed mt-2 border-t border-white/10 pt-2">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 2. Main Executive Intro White Card */}
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/80 p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Introduction Overview (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lightYellow text-brand-darkNavy text-xs font-bold uppercase tracking-wider border border-brand-yellow/40">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow" />
              <span>Executive Company Overview</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-brand-darkNavy leading-tight">
              Bridging Pune's Talent With <span className="text-brand-navy">Meaningful Career Opportunities</span>
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              <strong className="text-brand-darkNavy">Onpoint Employment Services</strong> is an established recruitment and employment consultancy headquartered in Narhe, Pune. Our focus is delivering structured, ethical placement coordination for job seekers while providing corporate organizations with thoroughly assessed, verified, and capable talent.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-xs font-semibold text-slate-800">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-brand-lightGrey border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                <span>Transparent Candidate Guidance</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-brand-lightGrey border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                <span>Verified Employer Requirements</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-brand-lightGrey border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                <span>Pune &amp; Maharashtra Network</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-brand-lightGrey border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                <span>Continuous Placement Support</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-darkNavy group"
              >
                <span>Read More About Our Background &amp; Mission</span>
                <ArrowRight className="w-4 h-4 text-brand-yellow transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: Key Service Highlights (5 cols) */}
          <div className="lg:col-span-5 bg-brand-lightGrey/90 rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-sm font-bold text-brand-darkNavy uppercase tracking-wider">
                Recruitment Highlights
              </h3>
              <span className="text-[11px] font-bold text-brand-navy bg-white px-2.5 py-1 rounded-full shadow-sm border border-slate-200">
                10 Solutions
              </span>
            </div>

            <div className="space-y-3">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 4 }}
                    className="p-3.5 rounded-xl bg-white shadow-sm border border-slate-100 flex items-start gap-3.5 transition-all text-left"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#092B46] text-brand-yellow flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-brand-darkNavy">{item.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Regional Pune Corridors Ribbon */}
            <div className="pt-3 border-t border-slate-200">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-2">
                Active Placement Reach in Pune:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {puneCorridors.map((c, i) => (
                  <span key={i} className="text-[10px] font-semibold bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:text-brand-yellow transition-colors"
              >
                <span>Explore all 10 recruitment solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
