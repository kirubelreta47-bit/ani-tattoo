import React from 'react';
import { Calendar, ArrowDown, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onExploreWork,
}) => {
  return (
    <section className="relative w-full min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-28 pb-12 sm:pb-16 bg-[#F9F9FB]">
      {/* Background Image: Crisp, visible tattoo artistry and studio atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=90&w=2400&auto=format&fit=crop"
          alt="Ani Tattoo Fine-Line Studio"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[70%_35%] lg:object-[82%_center] filter grayscale contrast-125 brightness-100 opacity-45 sm:opacity-55"
        />

        {/* Directional Gradient for Text Legibility on Left while keeping Image Crisp on Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F9F9FB] via-[#F9F9FB]/85 sm:via-[#F9F9FB]/70 to-transparent hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F9F9FB] via-[#F9F9FB]/80 to-transparent lg:hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9F9FB]/50 via-transparent to-[#F9F9FB]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center min-h-[72vh]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-6 my-auto">
          {/* Left Column: Bold Editorial Headline & Streamlined Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex flex-col justify-center"
          >
            {/* Minimal Sub-header */}
            <div className="mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-black" />
              <span className="text-xs tracking-[0.3em] uppercase text-zinc-600 font-bold font-['Space_Grotesk']">
                FINE-LINE & MICRO-REALISM • BY ANI
              </span>
            </div>

            {/* Giant Clean Headline */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] leading-[0.90] font-black font-['Manrope'] tracking-tighter text-[#111113] mb-8 select-none">
              FINE LINE<span className="text-zinc-400">.</span><br />
              BESPOKE INK<span className="text-zinc-400">.</span><br />
              TIMELESS<span className="text-zinc-400">.</span>
            </h1>

            {/* Story Manifesto */}
            <p className="max-w-md text-[#52525B] leading-relaxed text-sm md:text-base mb-10 border-l-2 border-black/40 pl-4 font-['Manrope'] font-medium">
              Bespoke fine-line and single-needle micro-realism, sculpted to natural anatomical contours.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                id="hero-primary-book-cta"
                className="bg-black text-white px-8 sm:px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors shadow-sm flex items-center justify-center gap-3 group cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>BOOK APPOINTMENT</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreWork}
                id="hero-secondary-explore-cta"
                className="border border-black/20 bg-transparent hover:bg-black hover:text-white text-black px-8 sm:px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>EXPLORE WORK</span>
                <ArrowDown className="w-4 h-4 text-zinc-500" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Clean Minimalist Editorial Accent (No Boxy Cards) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 hidden lg:flex flex-col justify-center space-y-6 pl-6 border-l border-black/10"
          >
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold font-['Space_Grotesk'] block">
                PRIMARY DISCIPLINES
              </span>
              <p className="text-base font-black font-['Manrope'] text-black tracking-tight uppercase">
                SINGLE-NEEDLE & MICRO-REALISM
              </p>
            </div>

            <div className="space-y-3 text-xs text-[#52525B] font-['Manrope'] leading-relaxed">
              <p>
                Each design is created as a one-of-a-kind bespoke piece, developed through collaborative 1-on-1 consultation.
              </p>
            </div>

            <div className="pt-4 border-t border-black/10 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-500 font-mono text-[11px] uppercase">LOCATIONS</span>
                <span className="font-bold text-black">Addis Ababa & Dubai</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-500 font-mono text-[11px] uppercase">STATUS</span>
                <span className="font-bold text-emerald-700 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Booking Open
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Minimalist Bottom Bar */}
        <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-zinc-600 font-['Manrope'] gap-4">
          <div className="flex items-center gap-6">
            <div>
              <span className="text-black font-bold block font-mono">100%</span>
              <span className="text-[10px] tracking-wider uppercase text-zinc-500">Custom Originals</span>
            </div>
            <div className="h-6 w-[1px] bg-black/10" />
            <div>
              <span className="text-black font-bold block font-mono">1-on-1</span>
              <span className="text-[10px] tracking-wider uppercase text-zinc-500">Private Studio</span>
            </div>
          </div>

          <button
            onClick={onExploreWork}
            className="flex items-center gap-2 text-zinc-600 hover:text-black transition-colors group cursor-pointer"
          >
            <span className="text-[11px] tracking-[0.2em] uppercase font-bold">DISCOVER GALLERY</span>
            <ArrowDown className="w-3.5 h-3.5 text-black animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
