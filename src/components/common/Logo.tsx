import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'white' | 'icon-only';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withLink?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'default',
  className = '',
  size = 'md',
  withLink = true,
}) => {
  const isWhite = variant === 'white';
  const isIconOnly = variant === 'icon-only';

  const content = (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Icon: Navy-blue Location Pin with Golden-yellow Checkmark */}
      <div className={`relative flex-shrink-0 transition-transform duration-300 hover:scale-105 ${
        size === 'sm' ? 'w-8 h-8' : size === 'md' ? 'w-10 h-10 sm:w-11 sm:h-11' : size === 'lg' ? 'w-14 h-14' : 'w-20 h-20'
      }`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`pinGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isWhite ? '#0B5B8A' : '#092B46'} />
              <stop offset="100%" stopColor={isWhite ? '#06466B' : '#06466B'} />
            </linearGradient>
            <linearGradient id={`checkGrad-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFDE6A" />
              <stop offset="100%" stopColor="#F5C52E" />
            </linearGradient>
          </defs>

          {/* Navy-blue Location Pin */}
          <path
            d="M50 8 C30 8 14 24 14 44 C14 66 50 94 50 94 C50 94 86 66 86 44 C86 24 70 8 50 8 Z"
            fill={`url(#pinGrad-${variant})`}
            stroke={isWhite ? '#38BDF8' : '#06466B'}
            strokeWidth={isWhite ? '1.5' : '1'}
          />

          {/* Inner Pin Circular Accent */}
          <circle cx="50" cy="42" r="22" fill={isWhite ? '#041A2D' : '#092B46'} opacity="0.65" />

          {/* Golden-yellow Checkmark */}
          <path
            d="M34 44 L46 56 L68 28"
            stroke={`url(#checkGrad-${variant})`}
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Typography: ONPOINT (navy blue or white) + EMPLOYMENT SERVICES (golden yellow) */}
      {!isIconOnly && (
        <div className="flex flex-col justify-center leading-none whitespace-nowrap shrink-0">
          <span
            className={`font-black tracking-wider uppercase transition-colors font-heading ${
              isWhite ? 'text-white' : 'text-brand-navy'
            } ${
              size === 'sm'
                ? 'text-lg tracking-wider'
                : size === 'md'
                ? 'text-xl sm:text-2xl tracking-wider'
                : size === 'lg'
                ? 'text-3xl tracking-widest'
                : 'text-4xl tracking-widest'
            }`}
          >
            ONPOINT
          </span>
          <span
            className={`font-extrabold uppercase text-brand-yellow tracking-[0.22em] ${
              size === 'sm'
                ? 'text-[8.5px]'
                : size === 'md'
                ? 'text-[10px] sm:text-[11px]'
                : size === 'lg'
                ? 'text-xs'
                : 'text-sm'
            }`}
          >
            EMPLOYMENT SERVICES
          </span>
        </div>
      )}
    </div>
  );

  if (withLink) {
    return (
      <Link to="/" className="focus:outline-none focus:ring-2 focus:ring-brand-yellow/50 rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
};

