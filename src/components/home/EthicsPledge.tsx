import React from 'react';
import { ShieldCheck, Lock, CheckCircle2, Award, HeartHandshake } from 'lucide-react';
import { COMPANY_DATA } from '../../data/companyData';

export const EthicsPledge: React.FC = () => {
  return (
    <section className="py-16 bg-white relative border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-brand-lightGrey via-white to-brand-lightYellow/40 border-2 border-brand-yellow/30 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Trust Badge & Seal (4 cols) */}
            <div className="lg:col-span-4 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-slate-200/80 pb-6 lg:pb-0 lg:pr-8">
              <div className="w-16 h-16 rounded-2xl bg-brand-navy text-brand-yellow flex items-center justify-center mx-auto lg:mx-0 mb-4 shadow-md">
                <ShieldCheck className="w-9 h-9" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-navy block mb-1">
                Transparency &amp; Trust
              </span>
              <h3 className="text-2xl font-extrabold font-heading text-brand-darkNavy">
                Our Ethical Placement Pledge
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Guided by our founding commitment to honest, verified, and candidate-centric recruitment across Pune and Maharashtra.
              </p>
            </div>

            {/* Right Column: 3 Pillars of Integrity (8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                  <span>No Fake Promises</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We match candidates based on genuine skills, qualifications, and actual corporate vacancies. No false assurances or misleading claims.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                  <Lock className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                  <span>Candidate Privacy</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Personal profiles and career details are treated with strict confidentiality and presented to employers only with candidate consent.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                  <HeartHandshake className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                  <span>Fair Corporate Hiring</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Thorough job analysis and objective screening ensuring that our corporate client partners get dependable, culture-aligned team members.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

