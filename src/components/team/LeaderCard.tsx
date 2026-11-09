import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Shield, CheckCircle2, Phone, Briefcase } from 'lucide-react';
import { LeadershipMember, COMPANY_DATA } from '../../data/companyData';

interface LeaderCardProps {
  member: LeadershipMember;
  type: 'director' | 'hiring-manager';
}

export const LeaderCard: React.FC<LeaderCardProps> = ({ member, type }) => {
  const isDirector = type === 'director';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative rounded-3xl overflow-hidden bg-white shadow-premium border-2 ${
        isDirector ? 'border-brand-yellow/60' : 'border-slate-200'
      } flex flex-col justify-between`}
    >
      {/* Top Banner Stripe */}
      <div className={`h-3 w-full ${isDirector ? 'bg-gradient-to-r from-[#092B46] via-[#F5C52E] to-[#06466B]' : 'bg-[#092B46]'}`} />

      <div className="p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
          
          {/* Portrait Frame */}
          <div className="relative flex-shrink-0 mx-auto sm:mx-0">
            <div className={`w-40 h-52 sm:w-48 sm:h-60 rounded-2xl p-1.5 shadow-xl flex flex-col items-center justify-center text-center relative overflow-hidden ${
              isDirector 
                ? 'bg-gradient-to-b from-brand-yellow via-amber-300 to-brand-navy' 
                : 'bg-gradient-to-b from-slate-300 to-brand-navy'
            }`}>
              <div className="w-full h-full bg-[#092B46] rounded-xl relative overflow-hidden flex flex-col items-center justify-center text-white">
                
                {isDirector ? (
                  <>
                    <img
                      src="/images/director.png"
                      alt="Shalan Hingmire - Director, Onpoint Employment Services"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041829] via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute bottom-2 left-2 right-2 text-center">
                      <span className="text-xs font-bold text-white block drop-shadow">
                        Shalan Hingmire
                      </span>
                      <span className="text-[10px] font-extrabold text-brand-yellow uppercase tracking-widest block">
                        Director
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src="/images/hiring-manager.png"
                      alt="Pratiksha Kanunje - Hiring Manager, Onpoint Employment Services"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041829] via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute bottom-2 left-2 right-2 text-center">
                      <span className="text-xs font-bold text-white block drop-shadow">
                        Pratiksha Kanunje
                      </span>
                      <span className="text-[10px] font-extrabold text-brand-yellow uppercase tracking-widest block">
                        Hiring Manager
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Role Badge */}
            <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-md whitespace-nowrap ${
              isDirector 
                ? 'bg-brand-yellow text-brand-darkNavy' 
                : 'bg-slate-800 text-slate-200 border border-slate-600'
            }`}>
              {isDirector ? 'Executive Leadership' : 'Recruitment Operations'}
            </div>
          </div>

          {/* Member Details */}
          <div className="flex-1 space-y-3.5 text-left">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-darkNavy">
                  {member.name}
                </h3>
                <p className="text-sm font-bold text-brand-navy flex items-center gap-1.5 mt-0.5">
                  <Shield className="w-4 h-4 text-brand-yellow" />
                  <span>{member.designation}</span>
                </p>
              </div>

              {member.isPlaceholder && (
                <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                  Editable Placeholder
                </span>
              )}
            </div>

            {/* Introduction */}
            <p className="text-sm text-slate-600 leading-relaxed pt-1">
              {member.introduction}
            </p>

            {/* Director's message if applicable */}
            {isDirector && member.message && (
              <div className="mt-4 p-5 rounded-2xl bg-brand-lightYellow border-l-4 border-brand-yellow relative shadow-sm">
                <Quote className="w-7 h-7 text-brand-yellow/80 absolute top-3 right-3" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-darkNavy mb-1.5">
                  Director's Leadership Message
                </h4>
                <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed">
                  "{member.message}"
                </p>
              </div>
            )}

            {/* Responsibilities */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-darkNavy mb-2 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-brand-yellow" />
                <span>{isDirector ? 'Key Focus Areas' : 'Recruitment Responsibilities'}</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                {member.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow flex-shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Card Footer */}
      <div className="bg-brand-lightGrey px-6 sm:px-8 py-4 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-500 font-semibold">
          Onpoint Employment Services • Narhe, Pune
        </span>
        <a
          href={COMPANY_DATA.contact.callUrl}
          className="font-bold text-brand-navy hover:text-brand-yellow transition-colors inline-flex items-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-brand-yellow" />
          <span>Inquire Directly</span>
        </a>
      </div>
    </motion.div>
  );
};
