import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Search, 
  ShieldCheck, 
  GraduationCap, 
  Users2, 
  Rocket, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const WorkflowTimeline: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: FileText,
      title: "Requirement & Career Mapping",
      desc: "Deep-dive consultation to map role requirements, technical skillsets, salary benchmarks, and cultural expectations."
    },
    {
      num: "02",
      icon: Search,
      title: "Talent Sourcing & Outreach",
      desc: "Multi-channel sourcing across Pune's top engineering & commerce colleges, professional networks, and active talent databases."
    },
    {
      num: "03",
      icon: ShieldCheck,
      title: "Screening & Verification",
      desc: "Structured profile assessment, credential verification, and preliminary competency checks to ensure 100% role readiness."
    },
    {
      num: "04",
      icon: GraduationCap,
      title: "Pre-Interview Orientation",
      desc: "Practical resume polishing, corporate expectations briefing, and mock interview coaching tailored for Pune employers."
    },
    {
      num: "05",
      icon: Users2,
      title: "Client Interview Facilitation",
      desc: "Shortlisted candidate dossiers presented to hiring managers with prompt, synchronized interview coordination."
    },
    {
      num: "06",
      icon: Rocket,
      title: "Placement & Onboarding Support",
      desc: "Transparent offer communication, document assistance, and continuous joining support through the first 90 days."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Recruitment Pipeline"
          title="A Structured 6-Step"
          highlightedWord="Placement Process"
          description="A transparent, predictable, and professional hiring workflow designed to save recruiter hours and build sustainable careers."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 sm:p-7 rounded-3xl bg-brand-lightGrey/70 hover:bg-white border border-slate-200/80 hover:border-brand-navy/30 hover:shadow-premium transition-all duration-300 relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl sm:text-4xl font-black font-heading text-brand-navy group-hover:text-brand-yellow transition-colors">
                      {st.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#092B46] text-brand-yellow flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-brand-darkNavy mb-2 group-hover:text-brand-navy transition-colors">
                    {st.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-slate-500">
                  <div className="flex items-center gap-1.5 text-brand-navy">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow flex-shrink-0" />
                    <span>Stage {i + 1} of 6</span>
                  </div>
                  <span className="text-brand-yellow group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Process Trust Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-lightGrey border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-brand-yellow text-brand-darkNavy flex items-center justify-center font-bold flex-shrink-0">
              ✓
            </div>
            <span><strong>Turnaround Guarantee:</strong> Initial candidate shortlist presented within 24-48 hours of requirement intake.</span>
          </div>
          <a
            href="https://wa.me/919359710076?text=Hello%20Onpoint%20Employment%20Services,%20I%20would%20like%20to%20discuss%20a%20hiring%20mandate."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-brand-navy hover:bg-brand-darkNavy text-white font-bold transition-all shadow-sm flex-shrink-0"
          >
            Initiate Requirement
          </a>
        </div>
      </div>
    </section>
  );
};


