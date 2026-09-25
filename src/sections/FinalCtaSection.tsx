import React from 'react';
import { Calendar, ArrowRight, Sparkles, ShieldCheck, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

interface FinalCtaSectionProps {
  onOpenBooking: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full py-20 md:py-28 bg-[#08080A] text-[#EDEDED] overflow-hidden border-t border-white/5" id="book">
      {/* Background Volumetric Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[140px]" />
      </div>

      {/* Decorative Radial Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 mx-auto">
          <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-zinc-300 font-['Space_Grotesk']">
            COMMISSION YOUR MASTERPIECE • @ANITATTOOOO
          </span>
        </div>

        {/* Dramatic Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-['Manrope'] tracking-[-0.02em] text-white leading-[0.95]">
          READY TO GET <span className="text-zinc-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]">INKED?</span>
        </h2>

        {/* Supporting Line */}
        <p className="text-xs sm:text-sm font-['Manrope'] tracking-[0.25em] uppercase text-zinc-400 font-bold max-w-xl mx-auto">
          YOUR SKIN<span className="text-zinc-500">.</span> YOUR STORY<span className="text-zinc-500">.</span> BESPOKE ART<span className="text-zinc-500">.</span>
        </p>

        {/* Primary CTA Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-10 py-4 bg-white hover:bg-zinc-200 text-black font-extrabold tracking-[0.22em] text-xs uppercase rounded-none transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-3 group cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-black" />
            <span>BOOK SESSION WITH ANI</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <a
            href="https://www.instagram.com/anitattoooo/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border border-white/20 hover:border-white text-white font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            <Instagram className="w-4 h-4 text-zinc-400" />
            <span>@anitattoooo</span>
            <span className="text-zinc-500">↗</span>
          </a>
        </div>

        {/* Studio Standard Subtext */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-500 font-['Manrope']">
          <span className="flex items-center gap-1.5 text-zinc-400">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
            Private 1-on-1 Sessions
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-zinc-400">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
            Hospital-Grade Sterilization
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-zinc-400">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
            100% Bespoke Designs
          </span>
        </div>
      </motion.div>
    </section>
  );
};
