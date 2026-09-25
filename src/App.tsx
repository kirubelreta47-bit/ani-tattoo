import React, { useState, useEffect } from 'react';
import { Navbar, AppView } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { PortfolioSection } from './sections/PortfolioSection';
import { ServicesSection } from './sections/ServicesSection';
import { AboutArtistSection } from './sections/AboutArtistSection';
import { ContactSection } from './sections/ContactSection';
import { AftercareSection } from './sections/AftercareSection';
import { Footer } from './sections/Footer';
import { WorkPage } from './pages/WorkPage';
import { ProjectModal } from './components/ProjectModal';
import { BookingModal } from './components/BookingModal';
import { portfolioItems } from './data/portfolio';
import { PortfolioItem, StudioLocationId } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Calendar, ArrowRight } from 'lucide-react';

export default function App() {
  // Page view state: 'home' | 'work' | 'about' | 'aftercare'
  const [currentView, setCurrentView] = useState<AppView>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#work' || hash === '#work-page' || hash === '#work-archive') return 'work';
      if (hash === '#about' || hash === '#about-artist') return 'about';
      if (hash === '#aftercare') return 'aftercare';
    }
    return 'home';
  });

  // Modal states
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingStyle, setBookingStyle] = useState<string>('');
  const [bookingPlacement, setBookingPlacement] = useState<string>('');
  const [bookingLocation, setBookingLocation] = useState<StudioLocationId>('addis-ababa');

  // Handle hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#work' || hash === '#work-page' || hash === '#work-archive') {
        setCurrentView('work');
      } else if (hash === '#about' || hash === '#about-artist') {
        setCurrentView('about');
      } else if (hash === '#aftercare') {
        setCurrentView('aftercare');
      } else if (hash === '' || hash === '#home') {
        setCurrentView('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Navigation handlers
  const handleNavigateView = (view: AppView) => {
    setCurrentView(view);
    if (view === 'home') {
      if (window.location.hash !== '' && window.location.hash !== '#home') {
        history.replaceState(null, '', ' ');
      }
    } else {
      window.location.hash = view;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateSection = (sectionId: string) => {
    if (sectionId === 'work') {
      handleNavigateView('work');
      return;
    }
    if (sectionId === 'about') {
      handleNavigateView('about');
      return;
    }
    if (sectionId === 'aftercare') {
      handleNavigateView('aftercare');
      return;
    }

    if (currentView !== 'home') {
      setCurrentView('home');
      if (window.location.hash) {
        history.replaceState(null, '', ' ');
      }
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenBooking = (style = '', placement = '', location: StudioLocationId = 'addis-ababa') => {
    setBookingStyle(style);
    setBookingPlacement(placement);
    setBookingLocation(location);
    setIsBookingOpen(true);
  };

  const handleSelectPortfolioItem = (item: PortfolioItem) => {
    setSelectedPortfolioItem(item);
  };

  const handleSelectNextPortfolio = () => {
    if (!selectedPortfolioItem) return;
    const currentIndex = portfolioItems.findIndex((i) => i.id === selectedPortfolioItem.id);
    const nextIndex = (currentIndex + 1) % portfolioItems.length;
    setSelectedPortfolioItem(portfolioItems[nextIndex]);
  };

  const handleSelectPrevPortfolio = () => {
    if (!selectedPortfolioItem) return;
    const currentIndex = portfolioItems.findIndex((i) => i.id === selectedPortfolioItem.id);
    const prevIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
    setSelectedPortfolioItem(portfolioItems[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-[#F9F9FB] text-[#18181B] font-['Manrope'] selection:bg-black selection:text-white">
      {/* Floating Minimalist Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onNavigateSection={handleNavigateSection}
        onNavigateView={handleNavigateView}
        onNavigateWork={() => handleNavigateView('work')}
        onNavigateHome={() => handleNavigateView('home')}
        currentView={currentView}
      />

      {/* Main View Experience */}
      <AnimatePresence mode="wait">
        {/* 1. HOME VIEW */}
        {currentView === 'home' && (
          <motion.main
            key="home-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pt-0"
          >
            {/* Hero Section with clean light tattoo studio atmosphere */}
            <HeroSection
              onOpenBooking={() => handleOpenBooking()}
              onExploreWork={() => {
                const workEl = document.getElementById('work');
                if (workEl) {
                  workEl.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />

            {/* The Work Gallery */}
            <PortfolioSection
              onSelectItem={handleSelectPortfolioItem}
              onOpenBooking={() => handleOpenBooking()}
              onExploreAllWork={() => handleNavigateView('work')}
            />

            {/* Studio Disciplines & Services */}
            <ServicesSection
              onOpenBookingWithService={(service) => handleOpenBooking(service)}
            />

            {/* Contact & Studio Channels */}
            <ContactSection
              onOpenBookingWithLocation={(loc) => handleOpenBooking('', '', loc)}
              onOpenBooking={() => handleOpenBooking()}
            />
          </motion.main>
        )}

        {/* 2. DEDICATED WORK VIEW */}
        {currentView === 'work' && (
          <motion.main
            key="work-view"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="pt-24"
          >
            <WorkPage
              onBackToHome={() => handleNavigateView('home')}
              onSelectItem={handleSelectPortfolioItem}
              onOpenBookingWithStyle={(style, placement) => handleOpenBooking(style, placement)}
            />
          </motion.main>
        )}

        {/* 3. DEDICATED ABOUT THE ARTIST VIEW */}
        {currentView === 'about' && (
          <motion.main
            key="about-view"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="pt-24 pb-20 bg-[#F9F9FB]"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <div className="flex items-center justify-between pb-4 border-b border-black/10">
                <button
                  onClick={() => handleNavigateView('home')}
                  className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-zinc-600 hover:text-black transition-colors cursor-pointer group"
                >
                  <ArrowLeft className="w-4 h-4 text-zinc-500 group-hover:-translate-x-1 transition-transform" />
                  <span>BACK TO HOME</span>
                </button>
                <span className="text-[11px] font-mono text-zinc-500 uppercase font-bold tracking-wider">
                  ABOUT • THE STUDIO & ARTISTRY
                </span>
              </div>
            </div>

            <AboutArtistSection
              onOpenBooking={() => handleOpenBooking()}
            />

            {/* Bottom Consultation CTA in Light Theme */}
            <div className="max-w-4xl mx-auto px-4 mt-12">
              <div className="p-8 bg-white border border-black/10 text-center space-y-4 shadow-sm">
                <h3 className="text-2xl font-black text-[#111113] font-['Manrope']">
                  COMMISSION A CUSTOM MASTERPIECE<span className="text-zinc-400">.</span>
                </h3>
                <p className="text-xs text-[#52525B] max-w-md mx-auto">
                  Reserve a 1-on-1 design consultation directly with the studio (@anitattoooo).
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => handleOpenBooking()}
                    className="px-8 py-3.5 bg-black hover:bg-zinc-800 text-white text-xs font-extrabold tracking-[0.2em] uppercase transition-all shadow-sm inline-flex items-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    <span>BOOK CONSULTATION</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.main>
        )}

        {/* 4. DEDICATED AFTERCARE VIEW */}
        {currentView === 'aftercare' && (
          <motion.main
            key="aftercare-view"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="pt-24 pb-20 bg-[#F9F9FB]"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <div className="flex items-center justify-between pb-4 border-b border-black/10">
                <button
                  onClick={() => handleNavigateView('home')}
                  className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-zinc-600 hover:text-black transition-colors cursor-pointer group"
                >
                  <ArrowLeft className="w-4 h-4 text-zinc-500 group-hover:-translate-x-1 transition-transform" />
                  <span>BACK TO HOME</span>
                </button>
                <span className="text-[11px] font-mono text-zinc-500 uppercase font-bold tracking-wider">
                  CLINICAL PROTOCOL • ANI TATTOO
                </span>
              </div>
            </div>

            <AftercareSection />
          </motion.main>
        )}
      </AnimatePresence>

      {/* Minimalist Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onNavigateWork={() => handleNavigateView('work')}
        onNavigateSection={handleNavigateSection}
        onNavigateView={handleNavigateView}
      />

      {/* Fullscreen Art Exhibition Project Modal */}
      {selectedPortfolioItem && (
        <ProjectModal
          item={selectedPortfolioItem}
          allItems={portfolioItems}
          onClose={() => setSelectedPortfolioItem(null)}
          onSelectNext={handleSelectNextPortfolio}
          onSelectPrev={handleSelectPrevPortfolio}
          onOpenBookingWithStyle={(style, placement) => {
            setSelectedPortfolioItem(null);
            handleOpenBooking(style, placement);
          }}
        />
      )}

      {/* Booking / Appointment Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialStyle={bookingStyle}
        initialPlacement={bookingPlacement}
        initialLocation={bookingLocation}
      />
    </div>
  );
}
