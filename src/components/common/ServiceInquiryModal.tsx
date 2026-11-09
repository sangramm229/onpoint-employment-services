import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Mail, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { ServiceItem, COMPANY_DATA } from '../../data/companyData';

interface ServiceInquiryModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceInquiryModal: React.FC<ServiceInquiryModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const prefilledWhatsApp = `https://wa.me/919359710076?text=${encodeURIComponent(
    `Hello Onpoint Employment Services, I would like to inquire regarding: "${service.title}". Please provide more details.`
  )}`;

  const prefilledMail = `mailto:onpointemployments@gmail.com?subject=${encodeURIComponent(
    `Inquiry regarding ${service.title} - Onpoint Employment Services`
  )}&body=${encodeURIComponent(
    `Hello Director Shalan Hingmire and Team,\n\nI am interested in learning more about "${service.title}".\n\nPlease let me know the process and next steps.\n\nThank you.`
  )}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-midnight/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden z-10 border border-slate-100"
        >
          {/* Header */}
          <div className="bg-brand-navy p-6 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="inline-block text-xs font-bold text-brand-yellow uppercase tracking-widest mb-1">
              Service Consultation
            </span>
            <h3 className="text-xl font-bold font-heading">{service.title}</h3>
            <p className="text-xs text-slate-300 mt-1">
              Connect directly with our Narhe, Pune office for guidance & consultation.
            </p>
          </div>

          {/* Body */}
          <div className="p-6 space-y-5">
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Service Overview
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            {service.highlights && (
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Key Features
                </h4>
                <ul className="space-y-1.5">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-2 border-t border-slate-100">
              <h4 className="text-xs font-bold text-brand-darkNavy uppercase tracking-wider mb-3">
                Reach Out Regarding This Service
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={prefilledWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow hover:bg-emerald-700 transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>

                <a
                  href={prefilledMail}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-brand-navy text-white font-bold text-sm shadow hover:bg-brand-darkNavy transition-all hover:scale-[1.02]"
                >
                  <Mail className="w-4 h-4 text-brand-yellow" />
                  <span>Send Email</span>
                </a>
              </div>

              <div className="mt-3 text-center">
                <a
                  href={COMPANY_DATA.contact.callUrl}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-brand-navy font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-yellow" />
                  <span>Or call us directly at {COMPANY_DATA.contact.phoneDisplay}</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

