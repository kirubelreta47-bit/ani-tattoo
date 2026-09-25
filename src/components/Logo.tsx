import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl',
    xl: 'text-3xl md:text-5xl'
  };

  const emblemSize = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
    xl: 'w-14 h-14'
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`} id="ani-tattoo-logo">
      {/* Stylized Fine-Line Tattoo Needle / Monogram Emblem in Crisp Black */}
      <div className={`relative ${emblemSize[size]} flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transition-transform duration-500 group-hover:scale-105"
        >
          {/* Outer Geometric Frame */}
          <polygon
            points="50,4 94,28 94,72 50,96 6,72 6,28"
            stroke="#18181B"
            strokeWidth="2.5"
            className="transition-colors duration-300 group-hover:stroke-black"
          />
          <polygon
            points="50,14 84,34 84,66 50,86 16,66 16,34"
            stroke="#E4E4E7"
            strokeWidth="1.5"
          />

          {/* Central Fine-Line Needle and Letter 'A' Monogram */}
          <path d="M30 68 L50 24 L70 68" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="38" y1="52" x2="62" y2="52" stroke="#18181B" strokeWidth="2" strokeLinecap="round" />

          {/* Central Needle Spine */}
          <line x1="50" y1="12" x2="50" y2="88" stroke="#000000" strokeWidth="2" strokeLinecap="round" />

          {/* Micro Needle Nodes */}
          <circle cx="50" cy="24" r="3" fill="#000000" />
          <circle cx="50" cy="52" r="3" fill="#000000" />
          <circle cx="50" cy="88" r="2.5" fill="#18181B" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center leading-none">
          <span className={`font-['Manrope'] font-black tracking-tight text-[#18181B] uppercase text-lg sm:text-xl md:text-2xl`}>
            ANI<span className="text-zinc-400">.</span>TATTOO
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[9px] sm:text-[10px] tracking-[0.38em] uppercase opacity-70 text-zinc-500 font-semibold mt-0.5 sm:mt-1 font-['Space_Grotesk'] hidden sm:block">
            @anitattoooo • Studio
          </span>
        )}
      </div>
    </div>
  );
};
