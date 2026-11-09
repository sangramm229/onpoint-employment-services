import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { COMPANY_DATA } from '../../data/companyData';
import { SectionHeading } from '../common/SectionHeading';

interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'candidates' | 'employers';
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What is Onpoint Employment Services and where are you located?",
      answer: "Onpoint Employment Services is an executive recruitment and employment consultancy headquartered in Narhe, Pune, Maharashtra, India. We are focused on connecting qualified job seekers with verified employers and providing comprehensive corporate hiring solutions.",
      category: "general"
    },
    {
      question: "Do I need to create an account or upload a resume on this website?",
      answer: "No registration is required. We prioritize direct, transparent human communication. Simply get in touch with our recruitment desk via WhatsApp, Phone, Email, or visit our Narhe, Pune office to discuss your career objectives or corporate staffing needs.",
      category: "candidates"
    },
    {
      question: "How do you help fresh graduates starting their career in Pune?",
      answer: "We offer specialized fresher recruitment guidance, ATS-friendly resume review, interview preparation coaching, and mapping to entry-level openings across Pune's key industrial and IT clusters.",
      category: "candidates"
    },
    {
      question: "How can corporate organizations partner with Onpoint for hiring mandates?",
      answer: "Employers can reach out directly via WhatsApp (+91 9359710076) or email (onpointemployments@gmail.com) with their job descriptions and candidate specifications. Our recruitment team will coordinate pre-screening, candidate shortlisting, and interview scheduling tailored to your timelines.",
      category: "employers"
    },
    {
      question: "Which industries and sectors do you facilitate placement for?",
      answer: "We actively facilitate recruitment across 6 major sectors: Information Technology & Software, Manufacturing & Engineering, Banking & Financial Services, Customer Support & BPO, Healthcare & Pharmaceuticals, and Retail & Operations.",
      category: "general"
    },
    {
      question: "How can I schedule a recruitment consultation or office visit?",
      answer: "You can schedule a consultation by calling our official helpline at +91 9359710076 or messaging us on WhatsApp. Our office hours are Monday through Saturday, from 9:30 AM to 6:30 PM at our Narhe, Pune location.",
      category: "general"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-brand-lightGrey relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Clear Answers to"
          highlightedWord="Common Inquiries"
          description="Everything you need to know about our recruitment coordination, candidate guidance, and corporate staffing in Pune."
        />

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="rounded-2xl bg-white border border-slate-200/80 shadow-sm overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold font-heading text-brand-darkNavy">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-brand-navy text-brand-yellow rotate-180' : 'bg-brand-lightGrey text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Help Prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-brand-darkNavy">Have a question not listed here?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Contact our team directly for immediate assistance in Narhe, Pune.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={COMPANY_DATA.contact.callUrl}
              className="px-4 py-2 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-darkNavy transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-brand-yellow" />
              <span>Call Helpline</span>
            </a>
            <a
              href={COMPANY_DATA.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

