import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightedWord?: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightedWord,
  description,
  align = 'center',
  dark = false,
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
            dark
              ? 'bg-brand-navy/60 text-brand-yellow border border-brand-yellow/30'
              : 'bg-brand-lightYellow text-brand-darkNavy border border-brand-yellow/40'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading leading-tight ${
          dark ? 'text-white' : 'text-brand-darkNavy'
        }`}
      >
        {title}{' '}
        {highlightedWord && (
          <span className="relative inline-block text-brand-yellow">
            {highlightedWord}
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-brand-yellow/40 rounded-full" />
          </span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-sm sm:text-base leading-relaxed ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

