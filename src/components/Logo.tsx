import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

export default function Logo({ className = '', showText = true, light = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Recreated High-Fidelity SVG Brand Logo */}
      <div className="relative w-12 h-12 flex-shrink-0">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Metallic Silver-Blue Gradient for the R */}
            <linearGradient id="metallic-R" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="30%" stopColor="#1E40AF" />
              <stop offset="70%" stopColor="#111827" />
              <stop offset="100%" stopColor="#374151" />
            </linearGradient>

            {/* Brush stroke colors */}
            <linearGradient id="brush-cyan" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#0891B2" />
            </linearGradient>
            <linearGradient id="brush-pink" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#DB2777" />
            </linearGradient>
            <linearGradient id="brush-yellow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#EAB308" />
              <stop offset="100%" stopColor="#CA8A04" />
            </linearGradient>
            <linearGradient id="brush-lime" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#84CC16" />
              <stop offset="100%" stopColor="#65A30D" />
            </linearGradient>
          </defs>

          {/* Background Paint Brush Strokes */}
          {/* Cyan brush stroke */}
          <path
            d="M 5 75 C 20 55, 45 35, 75 35"
            stroke="url(#brush-cyan)"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.85"
          />
          {/* Pink brush stroke */}
          <path
            d="M 12 82 C 28 62, 53 42, 82 42"
            stroke="url(#brush-pink)"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.85"
          />
          {/* Yellow brush stroke */}
          <path
            d="M 19 89 C 35 69, 60 49, 89 49"
            stroke="url(#brush-yellow)"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.85"
          />
          {/* Lime brush stroke */}
          <path
            d="M 26 95 C 42 75, 67 55, 95 55"
            stroke="url(#brush-lime)"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* Bold Styled Metallic 'R' */}
          {/* Main vertical stem of R */}
          <path
            d="M 30 18 L 52 18 C 65 18, 72 23, 72 32 C 72 40, 65 44, 52 44 L 30 44 Z"
            fill="url(#metallic-R)"
          />
          <path
            d="M 30 18 L 44 18 L 44 78 L 30 78 Z"
            fill="url(#metallic-R)"
          />
          {/* R legs/curves */}
          <path
            d="M 44 44 L 62 44 L 78 78 L 62 78 L 48 50 Z"
            fill="url(#metallic-R)"
          />
          {/* Inner cutout */}
          <path
            d="M 44 26 L 50 26 C 54 26, 58 28, 58 31 C 58 34, 54 36, 50 36 L 44 36 Z"
            fill="#F3F4F6"
          />
        </svg>
      </div>

      {/* Brand Text Elements */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-baseline gap-1">
            <span
              className={`font-display text-xl font-extrabold tracking-tight ${
                light ? 'text-white' : 'text-blue-900'
              }`}
            >
              rucon
            </span>
            <span
              className={`font-sans text-md font-medium tracking-wide ${
                light ? 'text-blue-200' : 'text-gray-500'
              }`}
            >
              designs
            </span>
          </div>
          <span
            className={`text-[8px] font-display font-semibold tracking-[0.18em] uppercase ${
              light ? 'text-gray-300' : 'text-blue-800'
            }`}
          >
            architectural sign management
          </span>
        </div>
      )}
    </div>
  );
}
