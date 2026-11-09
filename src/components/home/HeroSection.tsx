import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  PhoneCall, 
  Briefcase, 
  Users, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Building2,
  GraduationCap,
  MessageCircle
} from 'lucide-react';
import { COMPANY_DATA } from '../../data/companyData';
import { Logo } from '../common/Logo';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-gradient-to-br from-[#041829] via-[#092B46] to-[#06466B] text-white overflow-hidden py-16 lg:py-20 border-b-4 border-brand-yellow">
      
      {/* Decorative High-End Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Crisp subtle tech grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Dynamic gradient orbs for depth */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#06466B] rounded-full blur-[140px] opacity-60" />
        <div className="absolute top-1/4 -right-24 w-[450px] h-[450px] bg-[#F5C52E] rounded-full blur-[160px] opacity-25" />
        <div className="absolute -bottom-24 left-1/3 w-[600px] h-[600px] bg-[#0A3D62] rounded-full blur-[180px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Bold Corporate Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Verified Location & Tagline Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-yellow/15 backdrop-blur-md border border-brand-yellow/40 text-xs sm:text-sm font-semibold shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-brand-yellow animate-ping" />
              <Sparkles className="w-4 h-4 text-brand-yellow flex-shrink-0" />
              <span className="text-white font-extrabold tracking-wide uppercase">Your Trusted Hiring Partner</span>
              <span className="text-slate-400 hidden sm:inline">•</span>
              <span className="text-brand-yellow hidden sm:inline font-semibold">Narhe, Pune</span>
            </motion.div>

            {/* Subheading Badge */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.22em] text-[#FFDE6A]"
            >
              {COMPANY_DATA.subheading}
            </motion.p>

            {/* Main High-Impact Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-black font-heading tracking-tight leading-[1.14] text-white"
            >
              Connecting <span className="text-white">Talent</span> With{' '}
              <span className="relative inline-block text-brand-yellow">
                Opportunities
                <span className="absolute left-0 -bottom-1.5 w-full h-2 bg-brand-yellow/50 rounded-full" />
              </span>
            </motion.h1>

            {/* High-Contrast Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-2xl font-normal drop-shadow-sm"
            >
              {COMPANY_DATA.heroDescription}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold bg-brand-yellow text-brand-darkNavy hover:bg-brand-yellowHover transition-all duration-200 shadow-gold-glow hover:scale-105 active:scale-95 group border-2 border-brand-yellow"
              >
                <span>Discover Our Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-brand-yellow" />
                <span>Contact Our Team</span>
              </Link>
            </motion.div>

            {/* Fast Credibility Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-200 border-t border-white/15"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                <span className="font-semibold">Ethical Placement Support</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                <span className="font-semibold">Freshers &amp; Experienced</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                <span className="font-semibold">Local Pune Industry Network</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-Impact Visual Photo Collage with Corporate Badges (5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              
              {/* Primary Image Frame with Corporate Photo */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-white/25 via-white/10 to-brand-yellow/30 shadow-2xl backdrop-blur-md border border-white/20 overflow-hidden">
                
                {/* Real High-Resolution Corporate Imagery of Professional Indian Team */}
                <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden shadow-inner">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                    alt="Corporate Recruitment and Placement Team at Onpoint Employment Services"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient Shade on bottom of photo for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041829]/90 via-[#041829]/20 to-transparent" />

                  {/* Photo Overlay Badge: Recruitment & Advisory Desk */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#092B46]/90 backdrop-blur-md border border-white/20 text-left shadow-lg">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-yellow text-brand-darkNavy font-black flex items-center justify-center text-sm shadow">
                          <Users className="w-5 h-5 text-brand-darkNavy" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white font-heading">
                            Recruitment &amp; Advisory Desk
                          </h4>
                          <p className="text-xs text-brand-yellow font-semibold">
                            Placement Coordination • Narhe, Pune
                          </p>
                        </div>
                      </div>

                      <a
                        href={COMPANY_DATA.contact.callUrl}
                        className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-brand-yellow hover:text-brand-darkNavy text-xs font-bold text-white transition-colors flex items-center gap-1 border border-white/15"
                      >
                        <span>Call</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating 3D Badge 1: Top Right (Your Trusted Hiring Partner) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-5 -right-5 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-white text-brand-darkNavy shadow-2xl border border-slate-100 z-20 hover:scale-105 transition-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-black text-slate-900">Your Trusted</div>
                  <div className="text-[10px] text-brand-navy font-extrabold uppercase tracking-wider">Hiring Partner</div>
                </div>
              </motion.div>

              {/* Floating 3D Badge 2: Bottom Left (10+ Specialized Services) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-[#092B46] text-white shadow-2xl border border-brand-yellow/50 z-20 hover:scale-105 transition-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-yellow text-brand-darkNavy flex items-center justify-center font-black">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-black text-brand-yellow">10+ Services</div>
                  <div className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">End-to-End Solutions</div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
