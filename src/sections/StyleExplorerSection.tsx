import React from 'react';
import { tattooStyles } from '../data/styles';
import { TattooCategory } from '../types';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface StyleExplorerSectionProps {
  onSelectCategoryFilter: (category: TattooCategory) => void;
  onOpenBookingWithStyle: (styleName: string) => void;
}

export const StyleExplorerSection: React.FC<StyleExplorerSectionProps> = ({
  onSelectCategoryFilter,
  onOpenBookingWithStyle,
}) => {
  return (
    <section className="relative w-full py-28 bg-[#08080A] text-[#EDEDED] border-t border-white/5" id="styles">
      {/* Background Accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-4"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-300 font-['Space_Grotesk']">
                STYLISTIC DISCIPLINES • ANI TATTOO
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-['Manrope'] tracking-tight text-white">
              WHAT’S YOUR INK<span className="text-zinc-500">?</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#9CA3AF] font-['Manrope'] tracking-[0.2em] uppercase font-medium mt-2">
              MASTERED TECHNIQUES ENGINEERED FOR ENDURING SKIN PRESENCE.
            </p>
          </div>
        </motion.div>

        {/* Styles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tattooStyles.map((style, index) => (
            <motion.div
              key={style.id}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.35, delay: (index % 3) * 0.18, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.45, ease: 'easeOut' } }}
              className="group relative bg-black/60 border border-white/10 hover:border-white/40 rounded-none overflow-hidden transition-colors duration-700 hover:shadow-[0_20px_45px_rgba(255,255,255,0.06)] flex flex-col justify-between backdrop-blur-md"
            >
              {/* Top Image Preview Container */}
              <div className="relative h-60 w-full overflow-hidden bg-black">
                <img
                  src={style.image}
                  alt={style.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter grayscale contrast-110 brightness-90 transition-transform duration-1200 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-black/50" />

                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-bold tracking-widest text-white uppercase font-['Manrope'] rounded-none">
                    {style.category}
                  </span>
                </div>
              </div>

              {/* Body Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold font-['Manrope'] text-white group-hover:text-zinc-200 transition-colors duration-500">
                    {style.name}
                  </h3>
                  <p className="text-xs text-zinc-300 font-bold tracking-wider uppercase font-['Space_Grotesk'] mt-1">
                    {style.tagline}
                  </p>
                  <p className="text-xs text-[#9CA3AF] font-['Manrope'] leading-relaxed mt-3">
                    {style.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <div className="text-[11px] text-zinc-400 font-['Manrope']">
                    <strong className="text-zinc-300 block text-[10px] tracking-wider uppercase mb-0.5">
                      Technique:
                    </strong>
                    {style.technique}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {style.popularPlacements.map((plc) => (
                      <span
                        key={plc}
                        className="px-2 py-0.5 bg-white/5 border border-white/5 text-zinc-400 text-[10px] font-mono rounded-none"
                      >
                        {plc}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center justify-between gap-2">
                    <button
                      onClick={() => {
                        onSelectCategoryFilter(style.category);
                        const workEl = document.getElementById('work');
                        if (workEl) workEl.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-xs font-bold text-zinc-300 hover:text-white font-['Manrope'] tracking-wider uppercase flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>VIEW GALLERY</span>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                    </button>

                    <button
                      onClick={() => onOpenBookingWithStyle(style.name)}
                      className="px-4 py-2 bg-white hover:bg-zinc-200 text-black text-[11px] font-extrabold tracking-wider uppercase font-['Manrope'] rounded-none transition-all cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    >
                      BOOK STYLE
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
