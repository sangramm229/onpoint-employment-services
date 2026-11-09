import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Send, CheckCircle2, HelpCircle } from 'lucide-react';
import { COMPANY_DATA } from '../../data/companyData';

export const QuickInquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneOrEmail: '',
    inquiryType: 'Placement Consultation',
    message: '',
  });

  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const inquiryOptions = [
    'Job Placement Consultation',
    'Fresher / Graduate Guidance',
    'Experienced Candidate Inquiry',
    'Resume & Interview Coaching',
    'Corporate Hiring & Staffing Mandate',
    'General Information & Office Visit',
  ];

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMessage = `Hello Onpoint Employment Services (Narhe, Pune),%0A%0A*Name:* ${encodeURIComponent(
      formData.name || 'Not provided'
    )}%0A*Contact:* ${encodeURIComponent(
      formData.phoneOrEmail || 'Not provided'
    )}%0A*Topic:* ${encodeURIComponent(
      formData.inquiryType
    )}%0A%0A*Message:* ${encodeURIComponent(formData.message || 'I would like to inquire about your services.')}`;

    window.open(`https://wa.me/919359710076?text=${formattedMessage}`, '_blank');
    setSubmittedFeedback(true);
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(`Inquiry: ${formData.inquiryType} - ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hello Director Shalan Hingmire and Team,\n\nName: ${formData.name}\nContact: ${formData.phoneOrEmail}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}\n\nRegards,\n${formData.name}`
    );
    window.location.href = `mailto:onpointemployments@gmail.com?subject=${subject}&body=${body}`;
    setSubmittedFeedback(true);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-slate-100 text-left">
      <div className="mb-6">
        <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest block mb-1">
          Direct Communication Desk
        </span>
        <h3 className="text-xl sm:text-2xl font-bold font-heading text-brand-darkNavy">
          Send a Direct Inquiry
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Choose WhatsApp or Email to connect directly with Director Shalan Hingmire and the recruitment desk.
        </p>
      </div>

      <form onSubmit={handleWhatsAppSend} className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Your Name / Organization Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Rahul Sharma or Tech Solutions Ltd"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent text-sm text-slate-800 transition-all placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Your Phone or Email Address
          </label>
          <input
            type="text"
            value={formData.phoneOrEmail}
            onChange={(e) => setFormData({ ...formData, phoneOrEmail: e.target.value })}
            placeholder="+91 98765 43210 or yourname@gmail.com"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent text-sm text-slate-800 transition-all placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Topic of Inquiry
          </label>
          <select
            value={formData.inquiryType}
            onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent text-sm text-slate-800 transition-all bg-white"
          >
            {inquiryOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Your Message or Question
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about the opportunity you are seeking or the corporate talent you need..."
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent text-sm text-slate-800 transition-all placeholder:text-slate-400"
          />
        </div>

        {/* Buttons to trigger direct delivery */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-98"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send via WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={handleEmailSend}
            className="flex-1 py-3 px-4 rounded-xl bg-brand-navy hover:bg-brand-darkNavy text-white font-bold text-sm shadow flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-98"
          >
            <Mail className="w-4 h-4 text-brand-yellow" />
            <span>Send via Email</span>
          </button>
        </div>

        {submittedFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Inquiry opened in your communication app! You can also call us directly.</span>
          </motion.div>
        )}

        <div className="pt-2 text-[11px] text-slate-400 text-center">
          Direct inquiry desk • Fast response from our recruitment coordinators in Narhe, Pune
        </div>
      </form>
    </div>
  );
};

