import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { COMPANY_DATA } from '../../data/companyData';

export const FloatingActions: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to top button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="pointer-events-auto w-11 h-11 rounded-full bg-white text-brand-navy shadow-lg border border-slate-200 hover:bg-brand-lightGrey flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-brand-navy" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Call Button */}
      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href={COMPANY_DATA.contact.callUrl}
        className="pointer-events-auto flex items-center gap-2 bg-brand-navy hover:bg-brand-darkNavy text-white px-3.5 py-2.5 rounded-full shadow-lg border border-brand-navy/30 transition-all text-xs font-bold"
        aria-label="Call Onpoint Employment Services"
      >
        <div className="w-6 h-6 rounded-full bg-brand-yellow text-brand-darkNavy flex items-center justify-center">
          <Phone className="w-3.5 h-3.5 fill-current" />
        </div>
        <span className="hidden sm:inline">Call Us</span>
      </motion.a>

      {/* Floating WhatsApp Action with Ping Glow */}
      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href={COMPANY_DATA.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-3 rounded-full shadow-xl transition-all font-bold text-sm"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="font-semibold">WhatsApp</span>
      </motion.a>
    </div>
  );
};

