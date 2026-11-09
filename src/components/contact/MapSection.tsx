import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink, Compass } from 'lucide-react';
import { COMPANY_DATA } from '../../data/companyData';

export const MapSection: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-card border border-slate-200">
      {/* Map Header / Location Bar */}
      <div className="p-6 bg-brand-lightGrey border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-navy flex items-center gap-1.5 mb-1">
            <Compass className="w-3.5 h-3.5 text-brand-yellow" />
            Strategic Pune Location
          </span>
          <h3 className="text-lg font-bold font-heading text-brand-darkNavy">
            Visit Our Office in Narhe, Pune
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {COMPANY_DATA.contact.addressFull}
          </p>
        </div>

        <a
          href={COMPANY_DATA.contact.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-darkNavy transition-all shadow-sm hover:scale-105 active:scale-95 flex-shrink-0"
        >
          <Navigation className="w-3.5 h-3.5 text-brand-yellow" />
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3 h-3 ml-0.5" />
        </a>
      </div>

      {/* Embedded Google Map */}
      <div className="relative w-full h-80 sm:h-96 bg-slate-200">
        <iframe
          title="Onpoint Employment Services Location - Zeal College Road, Narhe, Pune"
          src={COMPANY_DATA.contact.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full hover:filter-none transition-all duration-300"
        />

        {/* Overlay Location Badge */}
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-slate-200/80 flex items-center gap-2.5 text-xs text-brand-darkNavy font-bold">
          <div className="w-3 h-3 rounded-full bg-brand-yellow animate-ping flex-shrink-0" />
          <span className="truncate">Deepraj Angan, Zeal College Rd, Narhe, Pune</span>
        </div>
      </div>
    </div>
  );
};

