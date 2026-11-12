import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  PhoneCall, 
  Briefcase, 
  Users, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Building2, 
  Layers, 
  Clock, 
  Phone
} from 'lucide-react';
import { COMPANY_DATA } from '../../data/companyData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-gradient-to-br from-[#041829] via-[#092B46] to-[#06466B] text-white overflow-hidden py-16 lg:py-20 border-b-4 border-brand-yellow">
      
      {/* Ambient Tech Grid & Dynamic Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '28px 28px'
          }}
        />
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-[#06466B] rounded-full blur-[140px] opacity-60" />
        <div className="absolute top-1/3 -right-28 w-[480px] h-[480px] bg-[#F5C52E] rounded-full blur-[160px] opacity-20" />
        <div className="absolute -bottom-28 left-1/4 w-[600px] h-[600px] bg-[#08243A] rounded-full blur-[180px] opacity-50" />
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-black font-heading tracking-tight leading-[1.15] text-white"
            >
              Transforming <span className="text-white">Talent Acquisition</span> &amp; Career Growth in{' '}
              <span className="relative inline-block text-brand-yellow">
                Pune
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
              {COMPANY_DATA.heroDescription} We support ambitious candidates with structured career mentorship while delivering verified, role-ready talent to organizations across Pune's industrial corridors.
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

          {/* Right Column: Live Recruitment Dashboard Card (URRI HR Inspired) (5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              
              {/* Main Dashboard Card */}
              <div className="relative rounded-3xl p-6 sm:p-7 bg-[#061726]/90 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden text-left space-y-6">
                
                {/* Ambient Internal Glow */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-brand-yellow/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-44 h-44 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Dashboard Top Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-yellow to-amber-500 text-brand-darkNavy flex items-center justify-center font-black shadow-md">
                      <TrendingUp className="w-5 h-5 text-brand-darkNavy" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white font-heading tracking-wide">
                        Recruitment Dashboard
                      </h3>
                      <p className="text-[11px] text-slate-300 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live Operations • Narhe, Pune</span>
                      </p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-white/10 text-[10px] font-bold text-brand-yellow uppercase tracking-wider border border-white/15">
                    Active Desk
                  </span>
                </div>

                {/* 4-Stat Micro Grid */}
                <div className="grid grid-cols-2 gap-3 relative z-10">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-yellow/40 transition-colors">
                    <div className="text-2xl font-black font-heading text-white">500+</div>
                    <div className="text-[11px] font-semibold text-slate-300 mt-0.5">Candidates Guided</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-yellow/40 transition-colors">
                    <div className="text-2xl font-black font-heading text-brand-yellow">50+</div>
                    <div className="text-[11px] font-semibold text-slate-300 mt-0.5">Corporate Network</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-yellow/40 transition-colors">
                    <div className="text-2xl font-black font-heading text-emerald-400">98%</div>
                    <div className="text-[11px] font-semibold text-slate-300 mt-0.5">Client Satisfaction</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-yellow/40 transition-colors">
                    <div className="text-2xl font-black font-heading text-cyan-300">10+</div>
                    <div className="text-[11px] font-semibold text-slate-300 mt-0.5">Services Delivered</div>
                  </div>
                </div>

                {/* Live Sector Progress Bars */}
                <div className="space-y-3 pt-2 border-t border-white/10 relative z-10">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">Industrial Placement Fulfillment</span>
                    <span className="text-[11px] text-brand-yellow font-bold">Pune Hubs</span>
                  </div>

                  {/* IT & Software */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] text-slate-300 font-medium">
                      <span>IT &amp; Software Services (Hinjawadi/Magarpatta)</span>
                      <span className="font-bold text-white">85%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      />
                    </div>
                  </div>

                  {/* Manufacturing & Auto */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] text-slate-300 font-medium">
                      <span>Automobile &amp; Manufacturing (Chakan/Bhosari)</span>
                      <span className="font-bold text-white">78%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '78%' }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="h-full rounded-full bg-gradient-to-r from-brand-yellow to-amber-500"
                      />
                    </div>
                  </div>

                  {/* Engineering & Operations */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] text-slate-300 font-medium">
                      <span>Engineering &amp; Technical Operations (Narhe/Talegaon)</span>
                      <span className="font-bold text-white">72%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '72%' }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"
                      />
                    </div>
                  </div>

                  {/* Corporate & BFSI */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] text-slate-300 font-medium">
                      <span>BFSI, Commercial &amp; Front Office Operations</span>
                      <span className="font-bold text-white">65%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '65%' }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Quick Call Consultation Banner */}
                <div className="pt-2 relative z-10">
                  <a
                    href={COMPANY_DATA.contact.callUrl}
                    className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-brand-yellow via-amber-400 to-brand-yellowHover text-brand-darkNavy font-black text-xs sm:text-sm flex items-center justify-between shadow-gold-glow hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 fill-current" />
                      <span>Speak With Placement Coordinators</span>
                    </div>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>

              {/* Floating Badge 1: Top Right (Active Hiring in Progress) */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#092B46] text-white shadow-2xl border border-white/20 z-20 backdrop-blur-md"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold text-white">Active Candidate Matching</span>
              </motion.div>

              {/* Floating Badge 2: Bottom Left (100% Ethical & Verified) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white text-brand-darkNavy shadow-2xl border border-slate-100 z-20"
              >
                <ShieldCheck className="w-5 h-5 text-brand-navy" />
                <div className="text-left">
                  <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-wider">Placement Pledge</span>
                  <span className="text-xs font-black text-brand-darkNavy">100% Ethical &amp; Verified</span>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
