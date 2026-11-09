import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  User, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Twitter,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_DATA } from '../../data/companyData';
import { Logo } from '../common/Logo';

export const ContactCards: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Primary Company Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-[#041829] via-[#092B46] to-[#06466B] text-white rounded-3xl p-6 sm:p-8 shadow-premium border border-white/10 relative overflow-hidden"
      >
        <div className="relative z-10 space-y-4">
          <Logo variant="white" size="md" />

          <div className="pt-2">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              {COMPANY_DATA.name}
            </h3>
            <p className="text-xs text-brand-yellow font-semibold tracking-wide mt-0.5">
              {COMPANY_DATA.contact.industry}
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-yellow text-brand-darkNavy font-black flex items-center justify-center flex-shrink-0">
              SH
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block">
                Executive Leadership
              </span>
              <span className="text-sm font-bold text-white">
                Director: {COMPANY_DATA.contact.director}
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-200 leading-relaxed">
            Reach out to our leadership and recruitment desk for candidate placement assistance, HR partnerships, or general inquiries in Pune and surrounding regions.
          </p>
        </div>
      </motion.div>

      {/* Action Buttons: Call Now, WhatsApp, Email */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Call Now */}
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={COMPANY_DATA.contact.callUrl}
          className="flex flex-col items-center justify-center p-4 rounded-2xl bg-brand-navy text-white text-center shadow-md hover:bg-brand-darkNavy transition-all group"
        >
          <div className="w-10 h-10 rounded-full bg-brand-yellow text-brand-darkNavy flex items-center justify-center mb-2 shadow group-hover:scale-110 transition-transform">
            <Phone className="w-5 h-5 fill-current" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Call Now</span>
          <span className="text-sm font-extrabold text-white mt-0.5">{COMPANY_DATA.contact.phoneDisplay}</span>
        </motion.a>

        {/* WhatsApp */}
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={COMPANY_DATA.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#25D366] text-white text-center shadow-md hover:bg-[#20BD5A] transition-all group"
        >
          <div className="w-10 h-10 rounded-full bg-white text-[#25D366] flex items-center justify-center mb-2 shadow group-hover:scale-110 transition-transform">
            <MessageCircle className="w-5 h-5 fill-current" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-100">WhatsApp Chat</span>
          <span className="text-sm font-extrabold text-white mt-0.5">Quick Direct Msg</span>
        </motion.a>

        {/* Email */}
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={COMPANY_DATA.contact.emailUrl}
          className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white text-brand-navy border border-slate-200 text-center shadow-md hover:border-brand-navy transition-all group"
        >
          <div className="w-10 h-10 rounded-full bg-brand-lightGrey text-brand-navy flex items-center justify-center mb-2 shadow group-hover:scale-110 transition-transform">
            <Mail className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Official Email</span>
          <span className="text-xs font-extrabold text-brand-navy mt-0.5 break-all">Send Inquiry</span>
        </motion.a>
      </div>

      {/* Info Details Cards */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 text-left">
        <h4 className="text-sm font-bold uppercase tracking-wider text-brand-darkNavy pb-2 border-b border-slate-100 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-yellow" />
          <span>Office & Consultation Coordinates</span>
        </h4>

        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-brand-navy flex-shrink-0 mt-1" />
            <div>
              <strong className="block text-brand-darkNavy font-semibold text-xs">Office Location:</strong>
              <span className="text-slate-600 text-xs leading-relaxed">{COMPANY_DATA.contact.addressFull}</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-brand-navy flex-shrink-0 mt-1" />
            <div>
              <strong className="block text-brand-darkNavy font-semibold text-xs">Consultation Hours:</strong>
              <span className="text-slate-600 text-xs">{COMPANY_DATA.contact.workingHours}</span>
            </div>
          </div>
        </div>

        {/* Social Media Channels */}
        <div className="pt-3 border-t border-slate-100">
          <span className="text-xs font-semibold text-slate-500 block mb-2">
            Official Channels &amp; Social Connect:
          </span>
          <div className="flex items-center gap-2">
            <a
              href={COMPANY_DATA.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-brand-lightGrey hover:bg-brand-navy hover:text-white text-slate-700 transition-colors"
              title="Onpoint Employment Services on LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={COMPANY_DATA.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-brand-lightGrey hover:bg-brand-navy hover:text-white text-slate-700 transition-colors"
              title="Facebook (Editable Placeholder)"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={COMPANY_DATA.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-brand-lightGrey hover:bg-brand-navy hover:text-white text-slate-700 transition-colors"
              title="Onpoint Employment Services on Instagram"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={COMPANY_DATA.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-brand-lightGrey hover:bg-brand-navy hover:text-white text-slate-700 transition-colors"
              title="Twitter (Editable Placeholder)"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

