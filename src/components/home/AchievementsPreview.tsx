import React, { useState } from 'react';
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
  ArrowRight,
  TrendingUp,
  Award,
  CheckCircle2,
  PieChart
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

const sectorDistribution = [
  { name: "Automobile & Mechanical Engineering", pct: 30, color: "#F5C52E", belt: "Chakan & Bhosari MIDC" },
  { name: "Information Technology & Software", pct: 25, color: "#38bdf8", belt: "Hinjawadi & Magarpatta" },
  { name: "Manufacturing & Industrial Operations", pct: 20, color: "#34d399", belt: "Narhe & Talegaon" },
  { name: "BFSI & Commercial Services", pct: 12, color: "#c084fc", belt: "SB Road & Camp" },
  { name: "Healthcare & Pharmaceuticals", pct: 8, color: "#f87171", belt: "Pune & Pimpri" },
  { name: "Logistics, Supply Chain & Retail", pct: 5, color: "#94a3b8", belt: "Wagholi & Chakan" },
];

export const AchievementsPreview: React.FC = () => {
  const [activeSector, setActiveSector] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-brand-lightGrey relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Company Journey & Reach"
          title={COMPANY_DATA.achievements.heading}
          description={COMPANY_DATA.achievements.subheading}
        />

        {/* 1. Verified Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {COMPANY_DATA.achievements.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-slate-200/80 text-center hover:shadow-premium hover:border-brand-navy/30 transition-all group"
            >
              <div className="text-3xl sm:text-4xl font-black font-heading text-brand-navy group-hover:text-brand-yellow transition-colors mb-1">
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

        {/* 2. URRI HR-Inspired Sector Reach Breakdown Visualization */}
        <div className="bg-gradient-to-br from-[#041829] via-[#092B46] to-[#06466B] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Sector Metrics Legend */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow block mb-1">
                  Pune &amp; Regional Placement Footprint
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  Industry Reach &amp; Distribution
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
                  From high-tech engineering hubs to IT software corridors, our placement network covers Pune's most vital economic engines.
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
                {/* SVG Visual Donut Diagram */}
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  {/* Total Circumference = 2 * PI * 40 = 251.327 */}
                  {/* Segment 1: Auto 30% -> dash 75.4, offset 0 */}
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F5C52E" strokeWidth="12" strokeDasharray="75.4 251.3" strokeDashoffset="0" />
                  {/* Segment 2: IT 25% -> dash 62.8, offset -75.4 */}
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#38bdf8" strokeWidth="12" strokeDasharray="62.8 251.3" strokeDashoffset="-75.4" />
                  {/* Segment 3: Mfg 20% -> dash 50.3, offset -138.2 */}
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#34d399" strokeWidth="12" strokeDasharray="50.3 251.3" strokeDashoffset="-138.2" />
                  {/* Segment 4: BFSI 12% -> dash 30.2, offset -188.5 */}
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#c084fc" strokeWidth="12" strokeDasharray="30.2 251.3" strokeDashoffset="-188.5" />
                  {/* Segment 5: Health 8% -> dash 20.1, offset -218.7 */}
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f87171" strokeWidth="12" strokeDasharray="20.1 251.3" strokeDashoffset="-218.7" />
                  {/* Segment 6: Retail 5% -> dash 12.6, offset -238.8 */}
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#94a3b8" strokeWidth="12" strokeDasharray="12.6 251.3" strokeDashoffset="-238.8" />
                </svg>

                {/* Center Badge */}
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

              {/* Bottom Quick Corridor Summary */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-300">
                <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10">Hinjawadi IT</span>
                <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10">Chakan MIDC</span>
                <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10">Bhosari Auto</span>
                <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10">Narhe Hub</span>
              </div>
            </div>

          </div>
        </div>

        {/* 3. Industries Served Grid */}
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
                  className="p-5 rounded-2xl bg-brand-lightGrey/80 border border-slate-100 hover:border-brand-navy/30 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-darkNavy text-brand-yellow flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-brand-darkNavy mb-1 group-hover:text-brand-navy transition-colors">
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

        {/* 4. Optional Corporate Network Verified Box */}
        <div className="p-6 rounded-2xl bg-brand-darkNavy text-white border border-brand-yellow/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-premium">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-yellow flex items-center justify-center flex-shrink-0 shadow">
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
            className="px-5 py-2.5 rounded-full bg-brand-yellow text-brand-darkNavy text-xs font-bold shadow hover:bg-brand-yellowHover transition-colors flex-shrink-0 hover:scale-105 active:scale-95"
          >
            Partner as Employer
          </Link>
        </div>
      </div>
    </section>
  );
};


