import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Filter, 
  Brain, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Network, 
  CheckCircle2, 
  Building2, 
  Briefcase,
  ArrowRight
} from 'lucide-react';
import { COMPANY_DATA } from '../../data/companyData';
import { Link } from 'react-router-dom';

export const TechRecruitmentHub: React.FC = () => {
  const features = [
    {
      icon: Filter,
      color: "from-cyan-500 to-blue-600",
      title: "Smart Profile Structuring & Screening",
      desc: "Comprehensive evaluation of technical competencies, academic foundations, and career goals to surface the ideal organizational fit."
    },
    {
      icon: TrendingUp,
      color: "from-brand-yellow to-amber-500",
      title: "Predictive Role Fit & Skill Alignment",
      desc: "Aligning candidates with positions that foster career longevity, lowering early attrition and maximizing employer satisfaction."
    },
    {
      icon: Network,
      color: "from-emerald-400 to-teal-600",
      title: "Direct Corporate Coordination",
      desc: "Eliminating communication delays with swift coordination directly connecting hiring managers across Pune with shortlisted candidates."
    },
    {
      icon: ShieldCheck,
      color: "from-purple-500 to-indigo-600",
      title: "Merit-First & Ethical Evaluation",
      desc: "Zero hidden charges, transparent job roles, and objective candidate assessments ensuring equal opportunity for freshers and experienced talent."
    },
    {
      icon: Building2,
      color: "from-pink-500 to-rose-600",
      title: "Pune Industrial Talent Pool",
      desc: "Pre-screened candidate pipeline covering Chakan & Bhosari MIDC, Hinjawadi IT parks, Talegaon, and the Narhe industrial belt."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#041829] text-white relative overflow-hidden border-t border-b border-white/10">
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#06466B]/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-yellow/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Feature Highlights */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow/15 text-brand-yellow text-xs font-bold uppercase tracking-wider mb-4 border border-brand-yellow/30">
                <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
                <span>Modern Recruitment Methodology</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white leading-tight">
                Recruitment Reimagined:<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-amber-300 to-cyan-400">
                  Fast, Ethical &amp; Data-Driven
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                We blend localized Pune industrial expertise with structured candidate mapping to connect organizations with capable talent faster, smarter, and with zero bias.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-5">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-brand-yellow/40 transition-all duration-300 group"
                  >
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feat.color} text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-brand-yellow transition-colors">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Inquire CTA */}
            <div className="pt-2">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-yellow text-brand-darkNavy text-xs sm:text-sm font-bold shadow-gold-glow hover:bg-brand-yellowHover transition-all hover:scale-105 active:scale-95"
              >
                <span>Learn How We Source &amp; Screen Talent</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Animated SVG Hub (Inspired by URRI HR Mind Map) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#061726]/90 to-[#092B46]/80 border border-white/15 shadow-2xl relative overflow-hidden text-center"
            >
              {/* Background Glow Ring */}
              <div className="absolute inset-0 bg-radial from-brand-yellow/10 via-transparent to-transparent opacity-60 pointer-events-none" />

              <div className="mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-yellow block">
                  Interactive Sourcing Ecosystem
                </span>
                <h3 className="text-lg font-bold text-white font-heading mt-0.5">
                  Onpoint Recruitment Engine
                </h3>
              </div>

              {/* Animated SVG Hub Diagram */}
              <div className="relative w-full max-w-lg mx-auto aspect-[580/400]">
                <svg viewBox="0 0 580 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#092B46" />
                      <stop offset="50%" stopColor="#06466B" />
                      <stop offset="100%" stopColor="#041829" />
                    </linearGradient>
                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F5C52E" />
                      <stop offset="100%" stopColor="#E5B21D" />
                    </linearGradient>
                    <filter id="hubGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Connecting Animated Dashed Lines */}
                  {/* Top: Smart Screening */}
                  <line x1="290" y1="145" x2="290" y2="70" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6,4" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.5s" repeatCount="indefinite" />
                  </line>

                  {/* Top-Right: Skill Fit Alignment */}
                  <line x1="340" y1="165" x2="445" y2="100" stroke="#F5C52E" strokeWidth="2" strokeDasharray="6,4" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.8s" repeatCount="indefinite" />
                  </line>

                  {/* Right: Direct HR Liaison */}
                  <line x1="355" y1="200" x2="470" y2="200" stroke="#34d399" strokeWidth="2" strokeDasharray="6,4" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite" />
                  </line>

                  {/* Bottom-Right: MIDC & IT Network */}
                  <line x1="335" y1="235" x2="440" y2="300" stroke="#fbbf24" strokeWidth="2" strokeDasharray="6,4" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.6s" repeatCount="indefinite" />
                  </line>

                  {/* Bottom: Ethical Evaluation */}
                  <line x1="290" y1="255" x2="290" y2="325" stroke="#c084fc" strokeWidth="2" strokeDasharray="6,4" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.9s" repeatCount="indefinite" />
                  </line>

                  {/* Top-Left: Career Mentorship */}
                  <line x1="240" y1="165" x2="135" y2="100" stroke="#f87171" strokeWidth="2" strokeDasharray="6,4" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2.1s" repeatCount="indefinite" />
                  </line>

                  {/* Center Hub */}
                  <circle cx="290" cy="200" r="56" fill="url(#centerGrad)" stroke="#F5C52E" strokeWidth="2.5" filter="url(#hubGlow)" />
                  <circle cx="290" cy="200" r="68" fill="none" stroke="#F5C52E" strokeWidth="1.5" opacity="0.3">
                    <animate attributeName="r" values="58;74;58" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <text x="290" y="190" textAnchor="middle" fill="#F5C52E" fontSize="11" fontFamily="Poppins, sans-serif" fontWeight="800">
                    ONPOINT
                  </text>
                  <text x="290" y="206" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">
                    Recruitment Hub
                  </text>
                  <text x="290" y="220" textAnchor="middle" fill="#94A3B8" fontSize="8.5" fontFamily="Plus Jakarta Sans, sans-serif">
                    Narhe, Pune
                  </text>

                  {/* Node 1: Smart Screening (Top) */}
                  <g className="cursor-pointer">
                    <rect x="210" y="32" width="160" height="38" rx="19" fill="#092B46" stroke="#38bdf8" strokeWidth="1.5" />
                    <text x="290" y="56" textAnchor="middle" fill="#38bdf8" fontSize="11" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="600">
                      ✓ Smart Screening
                    </text>
                  </g>

                  {/* Node 2: Skill Fit Alignment (Top-Right) */}
                  <g className="cursor-pointer">
                    <rect x="375" y="75" width="170" height="38" rx="19" fill="#092B46" stroke="#F5C52E" strokeWidth="1.5" />
                    <text x="460" y="99" textAnchor="middle" fill="#F5C52E" fontSize="10.5" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="600">
                      ✦ Predictive Role Fit
                    </text>
                  </g>

                  {/* Node 3: Direct HR Coordination (Right) */}
                  <g className="cursor-pointer">
                    <rect x="420" y="181" width="150" height="38" rx="19" fill="#092B46" stroke="#34d399" strokeWidth="1.5" />
                    <text x="495" y="205" textAnchor="middle" fill="#34d399" fontSize="10.5" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="600">
                      ⚡ Direct HR Connect
                    </text>
                  </g>

                  {/* Node 4: MIDC & IT Network (Bottom-Right) */}
                  <g className="cursor-pointer">
                    <rect x="370" y="280" width="170" height="38" rx="19" fill="#092B46" stroke="#fbbf24" strokeWidth="1.5" />
                    <text x="455" y="304" textAnchor="middle" fill="#fbbf24" fontSize="10.5" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="600">
                      🏢 Pune Industrial Belts
                    </text>
                  </g>

                  {/* Node 5: Ethical Evaluation (Bottom) */}
                  <g className="cursor-pointer">
                    <rect x="205" y="325" width="170" height="38" rx="19" fill="#092B46" stroke="#c084fc" strokeWidth="1.5" />
                    <text x="290" y="349" textAnchor="middle" fill="#c084fc" fontSize="10.5" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="600">
                      🛡️ 100% Ethical Pledge
                    </text>
                  </g>

                  {/* Node 6: Career Mentorship (Top-Left) */}
                  <g className="cursor-pointer">
                    <rect x="30" y="75" width="170" height="38" rx="19" fill="#092B46" stroke="#f87171" strokeWidth="1.5" />
                    <text x="115" y="99" textAnchor="middle" fill="#f87171" fontSize="10.5" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="600">
                      🎓 Fresher Mentorship
                    </text>
                  </g>
                </svg>
              </div>

              {/* Diagram Footer Note */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                <span>Connected across Hinjawadi, Chakan, Bhosari, Talegaon &amp; Narhe corridors</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
