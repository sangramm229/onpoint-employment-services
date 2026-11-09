import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Twitter,
  Clock,
  ExternalLink
} from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_DATA } from '../../data/companyData';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Leadership & Team', path: '/team' },
    { name: 'Achievements & Journey', path: '/achievements' },
    { name: 'Contact Information', path: '/contact' },
  ];

  const highlightedServices = COMPANY_DATA.services.slice(0, 6);

  return (
    <footer className="bg-brand-midnight text-slate-300 relative overflow-hidden border-t-4 border-brand-yellow">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-navy/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="white" size="lg" />
            
            <p className="text-slate-300 text-sm leading-relaxed pr-4">
              Onpoint Employment Services is a dedicated recruitment and placement consultancy in Narhe, Pune, Maharashtra. Bridging the gap between talented individuals and reputable organizations through transparent guidance and professional placement coordination.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-brand-yellow font-semibold">
                <ShieldCheck className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                <span>Director: {COMPANY_DATA.contact.director}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                <span>{COMPANY_DATA.contact.workingHours}</span>
              </div>
            </div>

            {/* Social Media Links (Editable Placeholders) */}
            <div className="pt-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={COMPANY_DATA.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-brand-darkNavy hover:bg-brand-navy text-slate-300 hover:text-brand-yellow flex items-center justify-center transition-all duration-200 border border-slate-700/60 hover:scale-105"
                  aria-label="LinkedIn Company Page"
                  title="Onpoint Employment Services on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_DATA.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-brand-darkNavy hover:bg-brand-navy text-slate-300 hover:text-brand-yellow flex items-center justify-center transition-all duration-200 border border-slate-700/60 hover:scale-105"
                  aria-label="Facebook Page"
                  title="Facebook (Editable Placeholder)"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_DATA.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-brand-darkNavy hover:bg-brand-navy text-slate-300 hover:text-brand-yellow flex items-center justify-center transition-all duration-200 border border-slate-700/60 hover:scale-105"
                  aria-label="Instagram Profile"
                  title="Onpoint Employment Services on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_DATA.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-brand-darkNavy hover:bg-brand-navy text-slate-300 hover:text-brand-yellow flex items-center justify-center transition-all duration-200 border border-slate-700/60 hover:scale-105"
                  aria-label="Twitter Profile"
                  title="Twitter / X (Editable Placeholder)"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-base font-bold font-heading tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-yellow" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-brand-yellow transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-yellow transition-transform group-hover:translate-x-1" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-base font-bold font-heading tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-yellow" />
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {highlightedServices.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-slate-300 hover:text-brand-yellow transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-brand-yellow transition-colors" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-brand-yellow font-semibold hover:underline inline-flex items-center gap-1 pt-1 text-xs"
                >
                  View All 10 Services
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-base font-bold font-heading tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-yellow" />
              Contact Details
            </h4>
            
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-white block">Location</span>
                  <span className="text-slate-300 text-xs block leading-relaxed">
                    {COMPANY_DATA.contact.addressFull}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-white block">Phone Consultation</span>
                  <a
                    href={COMPANY_DATA.contact.callUrl}
                    className="text-slate-300 hover:text-brand-yellow text-xs transition-colors block"
                  >
                    {COMPANY_DATA.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-white block">Official Email</span>
                  <a
                    href={COMPANY_DATA.contact.emailUrl}
                    className="text-slate-300 hover:text-brand-yellow text-xs transition-colors block break-all"
                  >
                    {COMPANY_DATA.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_DATA.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-semibold text-xs border border-emerald-500/30 flex items-center justify-center gap-2 transition-colors"
              >
                <span>Direct WhatsApp Inquiry</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Notice on Company Service */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-400 max-w-3xl mx-auto">
            Onpoint Employment Services is a dedicated recruitment and placement consultancy headquartered in Narhe, Pune. We provide career guidance, placement coordination, and corporate talent acquisition across Pune and Maharashtra. Reach our team directly via phone, WhatsApp, or email.
          </p>
        </div>

        {/* Bottom Copyright bar */}
        <div className="mt-6 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} Onpoint Employment Services. All Rights Reserved.</p>
          <div className="flex items-center gap-6 text-slate-400">
            <span>Narhe, Pune, Maharashtra</span>
            <span>•</span>
            <span>Director: {COMPANY_DATA.contact.director}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

