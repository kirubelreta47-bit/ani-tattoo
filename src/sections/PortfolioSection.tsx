import React, { useState, useRef, useEffect } from 'react';
import { portfolioItems } from '../data/portfolio';
import { PortfolioItem, TattooCategory } from '../types';
import { Eye, MapPin, Sparkles, ArrowRight, Grid, ChevronLeft, ChevronRight, SlidersHorizontal, MousePointer } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PortfolioSectionProps {
  onSelectItem: (item: PortfolioItem) => void;
  onOpenBooking: () => void;
  onExploreAllWork: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectItem,
  onOpenBooking: _onOpenBooking,
  onExploreAllWork,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<TattooCategory>('ALL');
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const sliderRef = useRef<HTMLDivElement>(null);

  const categories: TattooCategory[] = [
    'ALL',
    'BLACK & GREY',
    '3D',
    'COVER UP',
    'LETTERING',
    'CUSTOM',
  ];

  const allFiltered =
    selectedCategory === 'ALL'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  // Showcase up to 8 top curated pieces in the horizontal showcase slider
  const displayItems = allFiltered.slice(0, 8);

  // Track horizontal scroll position
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);

    // Calculate approx active index
    const cardWidth = 360 + 24; // card width + gap
    const activeIdx = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(Math.min(Math.max(0, activeIdx), displayItems.length - 1));
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, [displayItems.length, viewMode]);

  // Scroll controls
  const scrollTo = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.clientWidth > 768 ? 400 : 320;
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  const scrollToIndex = (idx: number) => {
    if (!sliderRef.current) return;
    const cards = sliderRef.current.children;
    if (cards[idx]) {
      (cards[idx] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  };

  return (
    <section className="relative w-full py-20 sm:py-24 bg-[#F4F4F7] text-[#18181B] border-t border-black/5 overflow-hidden" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-black/10 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-600 font-['Space_Grotesk']">
                FEATURED ARCHIVE & GALLERY
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-['Manrope'] tracking-tight text-[#111113]">
              THE WORK<span className="text-zinc-400">.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#71717A] font-['Manrope'] tracking-[0.2em] uppercase font-medium mt-2">
              PERMANENT FINE-LINE ART SCULPTED TO ENDURE ON SKIN.
            </p>
          </div>

          {/* Action Link to Full Archive */}
          <div>
            <button
              onClick={onExploreAllWork}
              id="portfolio-explore-archive-top-btn"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase font-['Manrope'] text-black hover:text-zinc-600 transition-colors cursor-pointer group pb-1 border-b border-black"
            >
              <span>EXPLORE ALL {portfolioItems.length} WORKS</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Filter Categories Tab Bar & Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
        >
          {/* Categories: Minimal Understated Text Navigation */}
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-none no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  if (sliderRef.current) {
                    sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                  }
                }}
                className={`px-3 py-1.5 text-xs font-bold font-['Manrope'] tracking-[0.15em] uppercase transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-black text-white'
                    : 'text-zinc-500 hover:text-black hover:bg-black/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Minimal Navigation Arrows */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <span className="text-[11px] font-mono text-zinc-400 uppercase hidden md:inline">
              SLIDE TO EXPLORE
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollTo('left')}
                disabled={!canScrollLeft}
                title="Previous Artwork"
                aria-label="Previous Artwork"
                className={`w-8 h-8 flex items-center justify-center transition-all cursor-pointer ${
                  canScrollLeft
                    ? 'bg-white hover:bg-black hover:text-white text-black border border-black/10'
                    : 'bg-transparent text-zinc-300 border border-black/5 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo('right')}
                disabled={!canScrollRight}
                title="Next Artwork"
                aria-label="Next Artwork"
                className={`w-8 h-8 flex items-center justify-center transition-all cursor-pointer ${
                  canScrollRight
                    ? 'bg-white hover:bg-black hover:text-white text-black border border-black/10'
                    : 'bg-transparent text-zinc-300 border border-black/5 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* 1. HORIZONTAL SLIDING CARDS VIEW */}
        <AnimatePresence mode="wait">
          {viewMode === 'slider' ? (
            <motion.div
              key="slider-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
            >
              {/* Horizontal Scroll Track */}
              <div
                ref={sliderRef}
                className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth scrollbar-thin scrollbar-thumb-zinc-300 no-scrollbar select-none"
                style={{
                  WebkitOverflowScrolling: 'touch',
                  scrollbarWidth: 'none',
                }}
              >
                {displayItems.map((item, index) => {
                  return (
                    <div
                      key={item.id}
                      onClick={() => onSelectItem(item)}
                      className="shrink-0 w-[82vw] sm:w-[360px] lg:w-[390px] snap-start group relative min-h-[460px] sm:min-h-[480px] bg-white border border-black/10 hover:border-black/50 rounded-none overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl flex flex-col justify-end transform hover:-translate-y-1.5"
                    >
                      {/* Background Artwork Photo */}
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-108 filter grayscale contrast-115 brightness-95"
                      />

                      {/* Smooth Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                        <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md border border-black/10 text-[10px] font-bold tracking-widest text-black uppercase font-['Manrope'] rounded-none shadow-xs">
                          {item.category}
                        </span>
                        <div className="flex items-center gap-1.5">
                          {item.featured && (
                            <span className="px-2.5 py-1 bg-black text-white text-[9px] font-black tracking-widest uppercase rounded-none flex items-center gap-1 shadow-xs">
                              <Sparkles className="w-2.5 h-2.5" /> FEATURED
                            </span>
                          )}
                          <span className="px-2 py-1 bg-black/70 backdrop-blur-md text-white text-[9px] font-mono tracking-wider">
                            0{index + 1}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Card Content */}
                      <div className="relative z-10 p-5 sm:p-6 space-y-2.5 transform transition-transform duration-500 group-hover:-translate-y-1">
                        <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                          <MapPin className="w-3.5 h-3.5 text-white" />
                          <span>{item.placement}</span>
                          {item.sessionHours && <span>• {item.sessionHours}</span>}
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold font-['Manrope'] text-white leading-snug tracking-tight">
                          {item.title}
                        </h3>

                        <p className="text-xs text-zinc-300 line-clamp-2 font-['Manrope'] leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                          {item.description}
                        </p>

                        <div className="pt-2 flex items-center justify-between text-xs font-bold text-white font-['Manrope'] tracking-wider uppercase border-t border-white/15">
                          <span className="flex items-center gap-1.5 text-white group-hover:underline underline-offset-4">
                            <Eye className="w-3.5 h-3.5" />
                            VIEW ARTWORK
                          </span>
                          <span className="text-zinc-400 font-mono text-[10px]">TAP TO EXPAND ↗</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Horizontal Progress Bar & Card Dots Indicator */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-black/10">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-zinc-800">
                    SLIDE {String(currentIndex + 1).padStart(2, '0')} / {String(displayItems.length).padStart(2, '0')}
                  </span>
                  
                  {/* Visual Indicator Dots */}
                  <div className="flex items-center gap-1.5">
                    {displayItems.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => scrollToIndex(idx)}
                        aria-label={`Scroll to slide ${idx + 1}`}
                        className={`h-1.5 transition-all duration-300 rounded-none cursor-pointer ${
                          currentIndex === idx ? 'w-6 bg-black' : 'w-2 bg-black/20 hover:bg-black/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase">
                    SLIDE HORIZONTALLY TO DISCOVER MORE WORKS
                  </span>
                </div>
              </div>
            </motion.div>
          ) : (
            /* 2. GRID VIEW (FALLBACK OPTION) */
            <motion.div
              key="grid-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {displayItems.slice(0, 6).map((item, index) => {
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
                    whileHover={{ y: -6 }}
                    onClick={() => onSelectItem(item)}
                    className="group relative min-h-[440px] bg-white border border-black/10 hover:border-black/40 rounded-none overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-lg flex flex-col justify-end"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105 filter grayscale contrast-110 brightness-95"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md border border-black/10 text-[10px] font-bold tracking-widest text-black uppercase font-['Manrope'] rounded-none shadow-xs">
                        {item.category}
                      </span>
                      {item.featured && (
                        <span className="px-2.5 py-0.5 bg-black text-white text-[9px] font-black tracking-widest uppercase rounded-none flex items-center gap-1 shadow-xs">
                          <Sparkles className="w-2.5 h-2.5" /> FEATURED
                        </span>
                      )}
                    </div>

                    <div className="relative z-10 p-5 sm:p-6 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                        <MapPin className="w-3 h-3 text-white" />
                        <span>{item.placement}</span>
                        {item.sessionHours && <span>• {item.sessionHours}</span>}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold font-['Manrope'] text-white leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs text-zinc-300 line-clamp-2 font-['Manrope'] leading-relaxed">
                        {item.description}
                      </p>

                      <div className="pt-2 flex items-center justify-between text-xs font-bold text-white font-['Manrope'] tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="flex items-center gap-1.5 underline underline-offset-4">
                          <Eye className="w-3.5 h-3.5" />
                          VIEW ARTWORK
                        </span>
                        <span className="text-zinc-400 font-mono text-[10px]">#{item.id}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Explore More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex justify-center"
        >
          <button
            onClick={onExploreAllWork}
            id="portfolio-explore-more-cta-btn"
            className="px-8 sm:px-10 py-4 bg-black hover:bg-zinc-800 text-white text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-md flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>EXPLORE FULL ARCHIVE ({portfolioItems.length} WORKS)</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
