import React, { useEffect } from 'react';
import { PortfolioItem } from '../types';
import { X, ChevronLeft, ChevronRight, Clock, Tag, MapPin, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  item: PortfolioItem | null;
  allItems: PortfolioItem[];
  onClose: () => void;
  onSelectNext: () => void;
  onSelectPrev: () => void;
  onOpenBookingWithStyle?: (style: string, placement: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  item,
  allItems,
  onClose,
  onSelectNext,
  onSelectPrev,
  onOpenBookingWithStyle,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelectNext();
      if (e.key === 'ArrowLeft') onSelectPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onSelectNext, onSelectPrev]);

  if (!item) return null;

  const currentIndex = allItems.findIndex((i) => i.id === item.id);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-200 select-none"
      onClick={onClose}
      id="portfolio-project-modal"
    >
      {/* Container */}
      <div
        className="relative w-full max-w-6xl max-h-[92vh] bg-white border border-black/15 rounded-none shadow-2xl overflow-hidden flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
          <span className="hidden sm:inline-block px-3 py-1 bg-white/90 backdrop-blur-md text-[11px] font-mono text-zinc-600 border border-black/10 rounded-none shadow-xs">
            {currentIndex + 1} / {allItems.length}
          </span>
          <button
            onClick={onClose}
            className="p-2 bg-white/90 hover:bg-black hover:text-white text-black border border-black/15 rounded-none transition-colors focus:outline-none cursor-pointer shadow-xs"
            aria-label="Close viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Left / Main: High-Res Large Artwork Image Display */}
        <div className="relative lg:w-3/5 bg-zinc-900 flex items-center justify-center overflow-hidden min-h-[350px] lg:min-h-[560px]">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-full max-h-[78vh] object-contain object-center filter grayscale contrast-110 brightness-95"
          />

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectPrev();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 bg-black/75 hover:bg-white hover:text-black text-white rounded-none transition-all border border-white/20 shadow-xl cursor-pointer"
            aria-label="Previous artwork"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectNext();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-black/75 hover:bg-white hover:text-black text-white rounded-none transition-all border border-white/20 shadow-xl cursor-pointer"
            aria-label="Next artwork"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Right: Curatorial & Artwork Details */}
        <div className="lg:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-white border-t lg:border-t-0 lg:border-l border-black/10">
          <div className="space-y-5">
            {/* Category Badge & Placement */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-black text-white text-[11px] font-extrabold tracking-widest uppercase font-['Manrope'] rounded-none shadow-xs">
                {item.category}
              </span>
              <span className="px-3 py-1 bg-zinc-100 border border-black/10 text-zinc-800 text-[11px] font-semibold tracking-wider uppercase font-['Manrope'] rounded-none flex items-center gap-1">
                <MapPin className="w-3 h-3 text-black" />
                {item.placement}
              </span>
              {item.sessionHours && (
                <span className="px-2.5 py-1 bg-zinc-100 text-zinc-600 text-[11px] font-mono rounded-none flex items-center gap-1 border border-black/10">
                  <Clock className="w-3 h-3" />
                  {item.sessionHours}
                </span>
              )}
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold font-['Manrope'] text-[#111113] tracking-wide leading-snug">
              {item.title}<span className="text-zinc-400">.</span>
            </h2>

            {/* Divider */}
            <div className="w-12 h-[2px] bg-black" />

            {/* Description */}
            <p className="text-sm text-[#52525B] leading-relaxed font-['Manrope']">
              {item.description}
            </p>

            {/* Tags */}
            {item.tags && item.tags.length > 0 && (
              <div>
                <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase font-['Space_Grotesk'] block mb-2">
                  TECHNIQUE & AESTHETIC TAGS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-zinc-100 border border-black/10 text-xs text-zinc-700 rounded-none flex items-center gap-1"
                    >
                      <Tag className="w-2.5 h-2.5 text-zinc-500" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action CTA */}
          <div className="mt-8 pt-6 border-t border-black/10 space-y-3">
            <button
              onClick={() => {
                if (onOpenBookingWithStyle) {
                  onOpenBookingWithStyle(item.category, item.placement);
                }
              }}
              className="w-full py-4 bg-black hover:bg-zinc-800 text-white font-extrabold tracking-[0.2em] text-xs uppercase rounded-none transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>BOOK SIMILAR PIECE</span>
            </button>
            <p className="text-center text-[10px] text-zinc-500 font-['Space_Grotesk'] uppercase tracking-widest">
              Private Studio • @anitattoooo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
