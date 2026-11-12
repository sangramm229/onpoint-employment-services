import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  Laptop, 
  Cog, 
  Landmark, 
  PhoneCall, 
  Activity, 
  ShoppingBag,
  Sparkles,
  PieChart
} from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ElementType> = {
  Laptop,
  Cog,
  Landmark,
  PhoneCall,
  Activity,
  ShoppingBag,
};

const sectorDistribution = [
  { name: "Automobile & Mechanical Engineering", pct: 30, color: "#F5C52E", belt: "Chakan & Bhosari MIDC" },
  { name: "Information Technology & Software", pct: 25, color: "#38bdf8", belt: "Hinjawadi & Magarpatta" },
  { name: "Manufacturing & Industrial Operations", pct: 20, color: "#34d399", belt: "Narhe & Talegaon" },
  { name: "BFSI & Commercial Services", pct: 12, color: "#c084fc", belt: "SB Road & Camp" },
  { name: "Healthcare & Pharmaceuticals", pct: 8, color: "#f87171", belt: "Pune & Pimpri" },
  { name: "Logistics, Supply Chain & Retail", pct: 5, color: "#94a3b8", belt: "Wagholi & Chakan" },
];

export const AchievementsPage: React.FC = () => {
  const [activeSector, setActiveSector] = useState<number | null>(null);
  return (
    <div className="bg-brand-lightGrey min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lightYellow text-brand-darkNavy text-xs font-bold uppercase tracking-wider mb-3 border border-brand-yellow/40">
            <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
            <span>Placement & Milestones</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-brand-darkNavy">
            Our Journey of Connecting <span className="text-brand-navy">Talent With Opportunities</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            {COMPANY_DATA.achievements.subheading}
          </p>
        </div>

        {/* Verified Placement & Recruitment Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {COMPANY_DATA.achievements.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-premium border border-slate-100 text-center flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-brand-navy mb-1">
                  {stat.metric}
                </div>
                <div className="text-xs sm:text-sm font-bold text-brand-darkNavy uppercase tracking-wider mb-2">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {stat.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-brand-yellow font-bold uppercase tracking-widest flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-brand-yellow" />
                <span>Verified Metric</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* URRI HR-Inspired Sector Reach Breakdown Visualization */}
        <div className="bg-gradient-to-br from-[#041829] via-[#092B46] to-[#06466B] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10 mb-16 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Sector Metrics Legend */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow block mb-1">
                  Pune &amp; Regional Placement Footprint
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  Industry Reach &amp; Distribution
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
                  From high-tech engineering belts to IT software corridors, our placement network covers Pune's most vital economic hubs.
                </p>
              </div>

              {/* Interactive Legend Rows */}
              <div className="space-y-3">
                {sectorDistribution.map((sec, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveSector(idx)}
                    onMouseLeave={() => setActiveSector(null)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      activeSector === idx 
                        ? 'bg-white/15 border-brand-yellow/60 scale-[1.02]' 
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: sec.color }} />
                      <div>
                        <span className="text-xs sm:text-sm font-bold text-white block">
                          {sec.name}
                        </span>
                        <span className="text-[10px] text-slate-300">
                          Primary corridor: {sec.belt}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm sm:text-base font-black font-heading" style={{ color: sec.color }}>
                      {sec.pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visual Donut Chart & Hub Badge */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F5C52E" strokeWidth="12" strokeDasharray="75.4 251.3" strokeDashoffset="0" />
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#38bdf8" strokeWidth="12" strokeDasharray="62.8 251.3" strokeDashoffset="-75.4" />
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#34d399" strokeWidth="12" strokeDasharray="50.3 251.3" strokeDashoffset="-138.2" />
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#c084fc" strokeWidth="12" strokeDasharray="30.2 251.3" strokeDashoffset="-188.5" />
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f87171" strokeWidth="12" strokeDasharray="20.1 251.3" strokeDashoffset="-218.7" />
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#94a3b8" strokeWidth="12" strokeDasharray="12.6 251.3" strokeDashoffset="-238.8" />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <div className="w-10 h-10 rounded-full bg-brand-yellow text-brand-darkNavy flex items-center justify-center font-black mb-1 shadow-md">
                    <PieChart className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-black text-white font-heading">
                    100%
                  </span>
                  <span className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">
                    Targeted Placement
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-300">
                <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10">Hinjawadi IT</span>
                <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10">Chakan MIDC</span>
                <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10">Bhosari Auto</span>
                <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10">Narhe Hub</span>
              </div>
            </div>

          </div>
        </div>

        {/* Industries Served Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-premium border border-slate-100 mb-16 text-left">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-navy block mb-1">
              Sector Specialization
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-darkNavy">
              Key Industry Verticals Served
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              We facilitate recruitment and talent mapping across key economic sectors in Pune, Mumbai, and the broader Maharashtra region.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_DATA.achievements.industriesServed.map((industry) => {
              const Icon = iconMap[industry.icon] || Briefcase;
              return (
                <div
                  key={industry.name}
                  className="p-6 rounded-2xl bg-brand-lightGrey/70 border border-slate-200/80 hover:bg-white hover:border-brand-navy/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-darkNavy text-brand-yellow flex items-center justify-center mb-4 shadow">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-brand-darkNavy mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Candidate Success Themes (In General Terms) */}
        <div className="bg-gradient-to-br from-[#041829] via-[#092B46] to-[#06466B] text-white rounded-3xl p-8 sm:p-12 shadow-premium border border-white/10 mb-16 text-left">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow block mb-1">
              Real Impact
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Placement Success Highlights
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
              Authentic themes of candidate career acceleration and corporate recruitment coordination achieved through transparent guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPANY_DATA.achievements.candidateSuccessThemes.map((theme, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-3"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-yellow text-brand-darkNavy font-black flex items-center justify-center text-sm shadow">
                  0{i + 1}
                </div>
                <h3 className="text-base font-bold text-white font-heading">
                  {theme.title}
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-300 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-yellow flex-shrink-0" />
            <span>Note: We maintain candidate privacy and do not display personal student records without explicit verification and consent.</span>
          </div>
        </div>

        {/* Optional Section: Companies Where Our Candidates Have Found Opportunities */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-premium border border-slate-200 text-left mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-lightYellow text-brand-navy flex items-center justify-center">
              <Building2 className="w-5 h-5 text-brand-darkNavy" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow">
                Corporate Placement Network
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-darkNavy">
                Companies Where Our Candidates Have Found Opportunities
              </h3>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            {COMPANY_DATA.achievements.corporateNetworkNote}
          </p>

          <div className="p-4 rounded-2xl bg-brand-lightGrey border border-slate-200 text-xs text-slate-600 space-y-2">
            <div className="flex items-center gap-2 font-bold text-brand-darkNavy">
              <CheckCircle2 className="w-4 h-4 text-brand-yellow" />
              <span>Verified Placement Practice:</span>
            </div>
            <p>
              In accordance with ethical employment consultancy norms, company logos and verified corporate endorsements are showcased in coordination with client agreements. We continuously expand recruitment ties with leading employers across Pune's IT parks, industrial zones, and commercial districts.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <span className="text-xs text-slate-500 font-medium">
              Are you an employer seeking dependable talent in Pune?
            </span>
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-full bg-brand-navy hover:bg-brand-darkNavy text-white font-bold text-xs shadow transition-all"
            >
              Partner With Onpoint
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
