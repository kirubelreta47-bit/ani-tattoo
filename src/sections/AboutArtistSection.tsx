import React from 'react';
import { artistProfile } from '../data/artist';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutArtistSectionProps {
  onOpenBooking: () => void;
}

export const AboutArtistSection: React.FC<AboutArtistSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full py-20 bg-[#F9F9FB] text-[#18181B] border-t border-black/5" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 pb-5 border-b border-black/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-600 font-['Space_Grotesk']">
                ABOUT • @ANITATTOOOO
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-['Manrope'] tracking-tight text-[#111113]">
              ABOUT THE STUDIO & ARTISTRY<span className="text-zinc-400">.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#71717A] font-['Manrope'] tracking-[0.15em] uppercase font-medium mt-1">
              Fine-Line Mastery, Micro-Realism & Bespoke Anatomical Art
            </p>
          </div>

          <a
            href="https://www.instagram.com/anitattoooo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black/15 hover:border-black text-xs font-mono tracking-wider uppercase text-black transition-colors shadow-xs"
          >
            <span>Follow on Instagram</span>
            <span className="text-zinc-500">↗</span>
          </a>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Editorial Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto bg-white border border-black/10 rounded-none overflow-hidden shadow-lg group">
              <img
                src={artistProfile.portraitImage}
                alt={artistProfile.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale contrast-115 brightness-95 hover:brightness-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-300 uppercase font-['Space_Grotesk'] block">
                  {artistProfile.title}
                </span>
                <h3 className="text-2xl font-bold font-['Manrope'] text-white">
                  {artistProfile.name}
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Right: Explanation & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            {/* Philosophy Box */}
            <div className="p-5 bg-white border border-black/10 border-l-4 border-l-black rounded-none shadow-xs">
              <p className="text-sm sm:text-base font-['Manrope'] font-medium italic text-zinc-800 leading-relaxed">
                {artistProfile.philosophy}
              </p>
            </div>

            {/* Explanation */}
            <div className="space-y-2 text-xs sm:text-sm text-[#52525B] font-['Manrope'] leading-relaxed">
              {artistProfile.biography.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Focus Disciplines */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              {artistProfile.focusAreas.map((focus) => (
                <div key={focus} className="flex items-center gap-2 text-xs text-zinc-800 font-['Manrope']">
                  <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                  <span>{focus}</span>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-2 pt-4 border-t border-black/10">
              {artistProfile.statsPlaceholder.map((stat, idx) => (
                <div key={idx} className="bg-white p-3 border border-black/10 text-center space-y-0.5 hover:border-black/30 transition-colors shadow-xs">
                  <span className="text-lg sm:text-xl font-bold font-['Manrope'] text-black block">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-bold text-zinc-600 font-['Manrope'] block">
                    {stat.label}
                  </span>
                  <span className="text-[9px] text-zinc-400 font-mono block truncate">
                    {stat.sublabel}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 bg-black hover:bg-zinc-800 text-white font-bold tracking-[0.2em] text-xs uppercase rounded-none transition-all shadow-md cursor-pointer flex items-center gap-2"
              >
                <span>REQUEST PRIVATE SESSION</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="https://www.instagram.com/anitattoooo/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-black/15 hover:border-black bg-white text-black font-mono text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-xs"
              >
                <span>VISIT @ANITATTOOOO</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
