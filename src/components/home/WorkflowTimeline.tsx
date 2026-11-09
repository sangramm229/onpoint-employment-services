import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Search, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const WorkflowTimeline: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Direct Connect & Requirement Intake",
      desc: "Job seekers or employers reach out via Call or WhatsApp to define their qualifications or open hiring mandates."
    },
    {
      num: "02",
      title: "Skill Analysis & Alignment",
      desc: "Thorough review of competencies, salary benchmarks, and cultural expectations to identify the right match."
    },
    {
      num: "03",
      title: "Coaching & Interview Facilitation",
      desc: "Resume refinement and interview orientation followed by structured interview scheduling with hiring teams."
    },
    {
      num: "04",
      title: "Joining Coordination & Onboarding",
      desc: "Transparent coordination regarding offers, role clarity, and onboarding transition support."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How We Work"
          title="From Initial Consultation to"
          highlightedWord="Successful Placement"
          description="A clear, predictable, and professional 4-step recruitment journey designed to save time and build lasting careers."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((st, i) => (
            <motion.div
              key={st.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-brand-lightGrey/70 hover:bg-white border border-slate-200/80 hover:border-brand-navy/30 hover:shadow-premium transition-all duration-300 relative flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black font-heading text-brand-navy group-hover:text-brand-yellow transition-colors">
                    {st.num}
                  </span>
                  <span className="text-xs font-bold text-slate-400 group-hover:text-brand-navy transition-colors">
                    Phase {i + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold font-heading text-brand-darkNavy mb-2">
                  {st.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-brand-navy">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow flex-shrink-0" />
                <span>Verified Coordination</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

