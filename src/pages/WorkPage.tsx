import React, { useState, useMemo } from 'react';
import { portfolioItems } from '../data/portfolio';
import { PortfolioItem, TattooCategory } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  SlidersHorizontal,
  MapPin,
  Eye,
  Calendar,
  Grid3X3,
  LayoutGrid,
  RotateCcw,
  ArrowRight,
  Sparkles,
  Filter,
  X
} from 'lucide-react';

interface WorkPageProps {
  onBackToHome: () => void;
  onSelectItem: (item: PortfolioItem) => void;
  onOpenBookingWithStyle: (style?: string, placement?: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({
  onSelectItem,
  onOpenBookingWithStyle,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<TattooCategory>('ALL');
  const [selectedPlacement, setSelectedPlacement] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<'featured' | 'hours-desc' | 'hours-asc' | 'alphabetical'>('featured');
  const [layoutMode, setLayoutMode] = useState<'cards' | 'dense'>('cards');

  const categories: TattooCategory[] = [
    'ALL',
    'BLACK & GREY',
    '3D',
    'COVER UP',
    'LETTERING',
    'CUSTOM',
  ];

  const placements: { label: string; value: string }[] = [
    { label: 'ALL PLACEMENTS', value: 'ALL' },
    { label: 'FOREARM', value: 'FOREARM' },
    { label: 'CHEST', value: 'CHEST' },
    { label: 'BACK', value: 'BACK' },
    { label: 'SHOULDER', value: 'SHOULDER' },
    { label: 'ARM / BICEP', value: 'ARM' },
    { label: 'NECK', value: 'NECK' },
    { label: 'HAND', value: 'HAND' },
    { label: 'LEG / CALF', value: 'LEG' },
    { label: 'RIBS', value: 'RIBS' },
    { label: 'HEAD / FACIAL', value: 'HEAD' },
  ];

  // Filtered & Sorted items
  const filteredItems = useMemo(() => {
    return portfolioItems
      .filter((item) => {
        // Category filter
        const matchCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
        // Placement filter
        const matchPlacement =
          selectedPlacement === 'ALL' ||
          item.placement === selectedPlacement ||
          item.placement.includes(selectedPlacement);
        // Search query
        const query = searchQuery.trim().toLowerCase();
        const matchSearch =
          !query ||
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.placement.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          (item.tags && item.tags.some((t) => t.toLowerCase().includes(query)));

        return matchCategory && matchPlacement && matchSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'featured') {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        }
        if (sortBy === 'hours-desc') {
          const hoursA = parseFloat(a.sessionHours || '0') || 0;
          const hoursB = parseFloat(b.sessionHours || '0') || 0;
          return hoursB - hoursA;
        }
        if (sortBy === 'hours-asc') {
          const hoursA = parseFloat(a.sessionHours || '0') || 0;
          const hoursB = parseFloat(b.sessionHours || '0') || 0;
          return hoursA - hoursB;
        }
        if (sortBy === 'alphabetical') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
  }, [searchQuery, selectedCategory, selectedPlacement, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('ALL');
    setSelectedPlacement('ALL');
    setSortBy('featured');
  };

  const hasActiveFilters = selectedCategory !== 'ALL' || selectedPlacement !== 'ALL' || !!searchQuery;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-[#F9F9FB] text-[#18181B] font-['Manrope'] pb-24"
    >
      {/* Header Section */}
      <section className="relative pt-6 sm:pt-10 pb-8 px-4 sm:px-6 lg:px-8 border-b border-black/10 bg-white shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2 max-w-2xl"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-600 font-['Space_Grotesk']">
                COMPLETE PORTFOLIO ARCHIVE • ANI TATTOO
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black font-['Manrope'] tracking-tight text-[#111113] uppercase">
              THE WORK<span className="text-zinc-400">.</span>
            </h1>
            <p className="text-xs sm:text-sm text-[#52525B] font-['Manrope'] leading-relaxed pt-1">
              Micro-realism, fine-line botanicals, 3D illusions, and custom monochrome artistry (@anitattoooo).
            </p>
          </motion.div>

          {/* Minimalist Stats Counter */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 text-xs font-mono text-zinc-600 border border-black/10 bg-zinc-50 px-4 py-3 shrink-0 shadow-xs"
          >
            <div>
              <span className="text-zinc-400 block text-[10px]">RECORDED</span>
              <strong className="text-black text-sm font-bold font-['Manrope']">{portfolioItems.length} Pieces</strong>
            </div>
            <div className="w-[1px] h-6 bg-black/10" />
            <div>
              <span className="text-zinc-400 block text-[10px]">MATCHING</span>
              <strong className="text-black text-sm font-bold font-['Manrope']">{filteredItems.length} Items</strong>
            </div>
            <div className="w-[1px] h-6 bg-black/10" />
            <div>
              <span className="text-zinc-400 block text-[10px]">HANDLE</span>
              <strong className="text-black text-sm font-bold font-['Space_Grotesk']">@anitattoooo</strong>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Filter & Gallery Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Custom Styled Filter Studio Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white border border-black/10 p-5 sm:p-7 shadow-sm space-y-6"
          >
            {/* Row 1: Search bar, Sort & Density switchers */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative flex-1 group">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-black transition-colors" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by title, style, placement, or tag (e.g. fine-line, floral, sleeve)..."
                  className="w-full pl-10 pr-10 py-3 bg-[#F9F9FB] border border-black/10 hover:border-black/30 focus:border-black text-xs sm:text-sm text-black placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-black/20 font-['Manrope'] transition-all shadow-2xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-black bg-zinc-200 hover:bg-zinc-300 transition-all rounded-full cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Sort & Layout density controls */}
              <div className="flex items-center gap-2.5 shrink-0 flex-wrap sm:flex-nowrap">
                {/* Sort Selector */}
                <div className="flex items-center gap-2 bg-[#F9F9FB] border border-black/10 hover:border-black/30 px-3.5 py-2.5 transition-colors flex-1 sm:flex-initial">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
                  <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider shrink-0">SORT:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-transparent text-xs text-black font-bold font-['Manrope'] focus:outline-none cursor-pointer pr-1 w-full"
                  >
                    <option value="featured">Featured First</option>
                    <option value="hours-desc">Scale: Longest Sessions</option>
                    <option value="hours-asc">Scale: Quick Sessions</option>
                    <option value="alphabetical">Alphabetical (A-Z)</option>
                  </select>
                </div>

                {/* Density View Switcher */}
                <div className="hidden sm:flex items-center bg-[#F9F9FB] border border-black/10 p-1 gap-1">
                  <button
                    onClick={() => setLayoutMode('cards')}
                    title="Exhibition Card View"
                    className={`p-2 transition-all cursor-pointer ${
                      layoutMode === 'cards'
                        ? 'bg-black text-white shadow-xs'
                        : 'text-zinc-500 hover:text-black hover:bg-zinc-200'
                    }`}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setLayoutMode('dense')}
                    title="Dense Grid View"
                    className={`p-2 transition-all cursor-pointer ${
                      layoutMode === 'dense'
                        ? 'bg-black text-white shadow-xs'
                        : 'text-zinc-500 hover:text-black hover:bg-zinc-200'
                    }`}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Row 2: DISCIPLINE Filter with Horizontal Mobile Sliding */}
            <div className="space-y-2 pt-1 border-t border-black/10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-[0.2em] flex items-center gap-1.5 font-bold">
                  <Filter className="w-3 h-3 text-black" />
                  DISCIPLINE:
                </span>
                <span className="text-[10px] text-zinc-400 font-mono sm:hidden">
                  Swipe horizontally →
                </span>
              </div>

              {/* Horizontal sliding scroll container */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none touch-pan-x select-none">
                {categories.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 text-xs font-bold font-['Manrope'] tracking-[0.12em] uppercase transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 border ${
                        isSelected
                          ? 'bg-black text-white border-black shadow-xs'
                          : 'bg-[#F9F9FB] text-zinc-700 border-black/10 hover:border-black hover:text-black hover:bg-zinc-100'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Row 3: PLACEMENT Filter with Horizontal Mobile Sliding */}
            <div className="space-y-2 pt-1 border-t border-black/10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-[0.2em] flex items-center gap-1.5 font-bold">
                  <MapPin className="w-3 h-3 text-black" />
                  PLACEMENT:
                </span>
                <span className="text-[10px] text-zinc-400 font-mono sm:hidden">
                  Swipe horizontally →
                </span>
              </div>

              {/* Horizontal sliding scroll container */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none touch-pan-x select-none">
                {placements.map((p) => {
                  const isSelected = selectedPlacement === p.value;
                  return (
                    <button
                      key={p.value}
                      onClick={() => setSelectedPlacement(p.value)}
                      className={`px-3.5 py-1.5 text-[11px] font-bold font-['Manrope'] uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 border ${
                        isSelected
                          ? 'bg-black text-white font-extrabold border-black shadow-xs'
                          : 'bg-[#F9F9FB] text-zinc-600 border-black/10 hover:border-black hover:text-black hover:bg-zinc-100'
                      }`}
                    >
                      {p.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Row 4: Active Filters Banner & One-Click Reset */}
            {hasActiveFilters && (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-black/10 text-xs">
                <div className="flex items-center gap-2 flex-wrap text-zinc-600 font-mono text-[11px]">
                  <span className="text-zinc-400 font-bold">ACTIVE:</span>
                  {selectedCategory !== 'ALL' && (
                    <span className="px-2.5 py-1 bg-zinc-100 text-black border border-black/20 flex items-center gap-1.5 font-semibold">
                      Style: {selectedCategory}
                      <button onClick={() => setSelectedCategory('ALL')} className="hover:text-black">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedPlacement !== 'ALL' && (
                    <span className="px-2.5 py-1 bg-zinc-100 text-black border border-black/20 flex items-center gap-1.5 font-semibold">
                      Placement: {selectedPlacement}
                      <button onClick={() => setSelectedPlacement('ALL')} className="hover:text-black">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {searchQuery && (
                    <span className="px-2.5 py-1 bg-zinc-100 text-black border border-black/20 flex items-center gap-1.5">
                      "{searchQuery}"
                      <button onClick={() => setSearchQuery('')} className="hover:text-black">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                </div>

                <button
                  onClick={handleResetFilters}
                  className="flex items-center gap-1.5 text-zinc-700 hover:text-black font-bold font-['Manrope'] uppercase text-[11px] tracking-wider transition-colors cursor-pointer self-end sm:self-auto"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>RESET ALL FILTERS</span>
                </button>
              </div>
            )}
          </motion.div>

          {/* The Gallery Grid */}
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              <motion.div
                layout
                className={`grid gap-6 ${
                  layoutMode === 'cards'
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                }`}
              >
                {filteredItems.map((item, index) => {
                  const cardHeight =
                    layoutMode === 'dense'
                      ? 'min-h-[340px]'
                      : item.aspectRatio === 'tall'
                      ? 'min-h-[460px]'
                      : item.aspectRatio === 'square'
                      ? 'min-h-[380px]'
                      : 'min-h-[420px]';

                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 35, scale: 0.98 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        duration: 0.85,
                        delay: (index % 3) * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{ y: -6, transition: { duration: 0.35, ease: 'easeOut' } }}
                      key={item.id}
                      onClick={() => onSelectItem(item)}
                      className={`group relative ${cardHeight} bg-white border border-black/10 hover:border-black/40 overflow-hidden cursor-pointer transition-colors duration-500 hover:shadow-lg flex flex-col justify-end`}
                    >
                      {/* Background Photo */}
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover object-center filter grayscale contrast-110 brightness-95 transition-transform duration-1000 group-hover:scale-105"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                        <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md border border-black/10 text-[9px] font-bold tracking-widest text-black uppercase font-['Manrope'] shadow-xs">
                          {item.category}
                        </span>
                        {item.featured && (
                          <span className="px-2 py-0.5 bg-black text-white text-[9px] font-black tracking-widest uppercase flex items-center gap-1 shadow-sm">
                            <Sparkles className="w-2.5 h-2.5" /> FEATURED
                          </span>
                        )}
                      </div>

                      {/* Bottom Info Content */}
                      <div className="relative z-10 p-4 sm:p-5 space-y-2 transform transition-transform duration-500 group-hover:-translate-y-1">
                        <div className="flex items-center gap-2 text-[11px] text-zinc-300 font-mono">
                          <MapPin className="w-3 h-3 text-white" />
                          <span>{item.placement}</span>
                          {item.sessionHours && <span>• {item.sessionHours}</span>}
                        </div>

                        <h3 className="text-base sm:text-lg font-bold font-['Manrope'] text-white group-hover:text-zinc-100 transition-colors leading-snug">
                          {item.title}
                        </h3>

                        <p className="text-xs text-zinc-300 line-clamp-2 font-['Manrope'] leading-relaxed">
                          {item.description}
                        </p>

                        <div className="pt-2 flex items-center justify-between text-xs font-bold text-white font-['Manrope'] tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="flex items-center gap-1 underline underline-offset-4">
                            <Eye className="w-3.5 h-3.5" />
                            VIEW ARTWORK
                          </span>
                          <span className="text-zinc-400 font-mono text-[9px]">#{item.id}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <div className="bg-white border border-dashed border-black/20 p-12 text-center space-y-4">
                <Search className="w-8 h-8 text-zinc-400 mx-auto" />
                <h4 className="text-lg font-bold text-[#111113] font-['Manrope']">
                  NO PIECES MATCH YOUR SEARCH
                </h4>
                <p className="text-xs text-zinc-500 font-['Manrope'] max-w-md mx-auto">
                  Try clearing the search query or adjusting your filters to explore more work.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm hover:bg-zinc-800"
                >
                  RESET ALL FILTERS
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Minimal Bottom Booking CTA */}
      <section className="pt-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto bg-white border border-black/10 p-8 text-center space-y-5 shadow-sm"
        >
          <h3 className="text-2xl sm:text-3xl font-black font-['Manrope'] text-[#111113]">
            READY TO DISCUSS YOUR CUSTOM PIECE<span className="text-zinc-400">?</span>
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 font-['Manrope'] max-w-lg mx-auto">
            Direct 1-on-1 consultations with the studio (@anitattoooo). Submit your placement and concept.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => onOpenBookingWithStyle()}
              className="px-8 py-3.5 bg-black hover:bg-zinc-800 text-white text-xs font-extrabold tracking-[0.2em] uppercase transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>BOOK CONSULTATION</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};
