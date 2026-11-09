import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  MessageCircle, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_DATA } from '../../data/companyData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Our Team', path: '/team' },
    { name: 'Our Achievements', path: '/achievements' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification / Quick Contact Bar */}
      <div className="bg-brand-darkNavy text-slate-200 text-xs py-2 px-4 border-b border-brand-navy/30 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a 
              href={COMPANY_DATA.contact.callUrl} 
              className="flex items-center gap-1.5 hover:text-brand-yellow transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-brand-yellow" />
              <span>{COMPANY_DATA.contact.phoneDisplay}</span>
            </a>
            <a 
              href={COMPANY_DATA.contact.emailUrl} 
              className="flex items-center gap-1.5 hover:text-brand-yellow transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-brand-yellow" />
              <span>{COMPANY_DATA.contact.email}</span>
            </a>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-brand-yellow" />
              <span>{COMPANY_DATA.contact.location}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-300 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-brand-yellow" />
              Your Trusted Hiring Partner
            </span>
            <a
              href={COMPANY_DATA.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled ? 'glass-nav shadow-md py-3' : 'bg-white/95 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Official Logo */}
            <Logo variant="default" size="md" />

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-3.5 py-2 text-sm font-semibold transition-colors duration-200 rounded-lg ${
                      active
                        ? 'text-brand-navy font-bold'
                        : 'text-slate-600 hover:text-brand-navy hover:bg-brand-lightGrey'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-yellow rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-brand-navy text-white hover:bg-brand-darkNavy transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 group border border-brand-navy"
              >
                <span>Contact Us</span>
                <span className="w-6 h-6 rounded-full bg-brand-yellow text-brand-darkNavy flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={COMPANY_DATA.contact.callUrl}
                className="p-2 rounded-lg bg-brand-lightGrey text-brand-navy hover:bg-slate-200 transition-colors"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4 text-brand-navy" />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-lg text-brand-navy hover:bg-brand-lightGrey focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`px-4 py-3 rounded-lg text-base font-semibold transition-all flex items-center justify-between ${
                        active
                          ? 'bg-brand-navy text-white font-bold'
                          : 'text-slate-700 hover:bg-brand-lightGrey hover:text-brand-navy'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className={`w-4 h-4 ${active ? 'text-brand-yellow' : 'text-slate-400'}`} />
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Quick Contact Cards */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                <a
                  href={COMPANY_DATA.contact.callUrl}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-brand-lightGrey text-brand-darkNavy font-semibold hover:bg-slate-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-navy" />
                  <span>Call Now</span>
                </a>
                <a
                  href={COMPANY_DATA.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200 hover:bg-emerald-100 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="w-full py-3 rounded-xl bg-brand-navy text-white font-bold text-center block shadow-md hover:bg-brand-darkNavy transition-colors"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

