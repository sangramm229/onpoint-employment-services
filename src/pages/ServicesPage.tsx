import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Search, 
  Sparkles, 
  Filter, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { ServiceCard } from '../components/services/ServiceCard';
import { ServiceInquiryModal } from '../components/common/ServiceInquiryModal';
import { SectionHeading } from '../components/common/SectionHeading';
import { COMPANY_DATA, ServiceItem } from '../data/companyData';
import { Link } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'candidates' | 'employers'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = COMPANY_DATA.services.filter((svc) => {
    const matchesCategory =
      categoryFilter === 'all' ||
      svc.category === categoryFilter ||
      svc.category === 'both';

    const matchesSearch =
      svc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.fullDesc.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-brand-lightGrey min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-lightYellow text-brand-darkNavy text-xs font-bold uppercase tracking-wider mb-3 border border-brand-yellow/40">
            <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
            <span>Comprehensive Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-brand-darkNavy">
            Our Recruitment & <span className="text-brand-navy">Employment Services</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            From entry-level fresher placement to seasoned corporate staffing and career mentorship, explore our specialized employment solutions delivered from Narhe, Pune.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-card border border-slate-100 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              type="button"
              onClick={() => setCategoryFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                categoryFilter === 'all'
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'bg-brand-lightGrey text-slate-600 hover:text-brand-navy hover:bg-slate-200'
              }`}
            >
              All 10 Services
            </button>
            <button
              type="button"
              onClick={() => setCategoryFilter('candidates')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                categoryFilter === 'candidates'
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'bg-brand-lightGrey text-slate-600 hover:text-brand-navy hover:bg-slate-200'
              }`}
            >
              For Job Seekers & Freshers
            </button>
            <button
              type="button"
              onClick={() => setCategoryFilter('employers')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                categoryFilter === 'employers'
                  ? 'bg-brand-navy text-white shadow-sm'
                  : 'bg-brand-lightGrey text-slate-600 hover:text-brand-navy hover:bg-slate-200'
              }`}
            >
              For Corporate & Employers
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services (e.g. Resume, Fresher)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent placeholder:text-slate-400"
            />
          </div>

        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onSelect={(s) => setSelectedService(s)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl p-8 border border-slate-200">
            <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-brand-darkNavy">No services match your search</h3>
            <p className="text-xs text-slate-500 mt-1">Try resetting the search keyword or category filter.</p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setCategoryFilter('all'); }}
              className="mt-4 px-4 py-2 rounded-xl bg-brand-navy text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Quick Consultation Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-brand-darkNavy text-white border border-brand-yellow/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-premium">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Need personalized guidance on the right service for you?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Director Shalan Hingmire and our recruitment coordinators are available for direct consultations in Narhe, Pune.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
            <a
              href={COMPANY_DATA.contact.callUrl}
              className="px-6 py-3 rounded-full bg-brand-yellow text-brand-darkNavy font-bold text-xs sm:text-sm shadow hover:bg-brand-yellowHover transition-all flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>{COMPANY_DATA.contact.phoneDisplay}</span>
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all"
            >
              Contact Desk
            </Link>
          </div>
        </div>

      </div>

      {/* Service Modal */}
      <ServiceInquiryModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
};

