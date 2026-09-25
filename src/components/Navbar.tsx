import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Calendar, ArrowRight } from 'lucide-react';

export type AppView = 'home' | 'work' | 'about' | 'aftercare';

interface NavbarProps {
  onOpenBooking: () => void;
  onNavigateSection?: (sectionId: string) => void;
  onNavigateView?: (view: AppView) => void;
  onNavigateWork?: () => void;
  onNavigateHome?: () => void;
  currentView?: AppView;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onNavigateSection,
  onNavigateView,
  onNavigateWork,
  onNavigateHome,
  currentView = 'home',
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: {
    label: string;
    href: string;
    viewTarget?: AppView;
    sectionTarget?: string;
  }[] = [
    { label: 'HOME', href: '#home', viewTarget: 'home' },
    { label: 'WORK', href: '#work', viewTarget: 'work' },
    { label: 'SERVICES', href: '#services', sectionTarget: 'services' },
    { label: 'ABOUT', href: '#about', viewTarget: 'about' },
    { label: 'AFTERCARE', href: '#aftercare', viewTarget: 'aftercare' },
    { label: 'CONTACT', href: '#contact', sectionTarget: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.viewTarget) {
      if (onNavigateView) {
        onNavigateView(link.viewTarget);
      } else if (link.viewTarget === 'work' && onNavigateWork) {
        onNavigateWork();
      } else if (link.viewTarget === 'home' && onNavigateHome) {
        onNavigateHome();
      }
      return;
    }

    if (link.sectionTarget && onNavigateSection) {
      onNavigateSection(link.sectionTarget);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onNavigateView) {
      onNavigateView('home');
    } else if (onNavigateHome) {
      onNavigateHome();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-black/10 py-2 sm:py-3 shadow-xs'
            : 'bg-white/80 backdrop-blur-md border-b border-black/5 py-2.5 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={handleLogoClick}
            className="focus:outline-none cursor-pointer shrink-0"
            aria-label="Ani Tattoo Home"
          >
            <Logo size="sm" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => {
              const isActive = link.viewTarget
                ? currentView === link.viewTarget
                : false;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`text-[11px] uppercase tracking-[0.2em] font-semibold transition-all relative py-1 group font-['Manrope'] cursor-pointer ${
                    isActive
                      ? 'text-black opacity-100 font-bold'
                      : 'text-zinc-600 hover:text-black'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-black transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              id="navbar-book-btn"
              className="px-5 py-2.5 bg-black hover:bg-zinc-800 text-white font-['Manrope'] text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-none shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>BOOK SESSION</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="px-2.5 py-1 bg-black text-white font-['Manrope'] text-[11px] font-bold tracking-wider uppercase cursor-pointer"
            >
              BOOK
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-zinc-800 hover:text-black focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer in Light Theme */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl flex flex-col justify-between pt-16 pb-6 px-5 lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 font-mono font-bold pb-2 border-b border-black/10 flex items-center justify-between">
              <span>ANI TATTOO</span>
              <span className="text-zinc-400">NAVIGATION</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="text-base font-['Manrope'] font-bold tracking-wider text-zinc-800 hover:text-black transition-colors py-1 flex items-center justify-between group cursor-pointer"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>

          <div className="space-y-3 pt-4 border-t border-black/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-black text-white font-extrabold tracking-[0.2em] text-xs uppercase flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>BOOK AN APPOINTMENT</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
