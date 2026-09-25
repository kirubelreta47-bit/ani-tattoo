import React from 'react';
import { Logo } from '../components/Logo';
import { AppView } from '../components/Navbar';
import { Instagram, Send, ArrowUp, Calendar, Clock } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onNavigateWork?: () => void;
  onNavigateSection?: (sectionId: string) => void;
  onNavigateView?: (view: AppView) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onNavigateWork,
  onNavigateSection,
  onNavigateView,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: {
    label: string;
    href: string;
    viewTarget?: AppView;
    sectionTarget?: string;
  }[] = [
    { label: 'WORK ARCHIVE', href: '#work', viewTarget: 'work' },
    { label: 'SERVICES', href: '#services', sectionTarget: 'services' },
    { label: 'ABOUT ANI', href: '#about', viewTarget: 'about' },
    { label: 'AFTERCARE PROTOCOL', href: '#aftercare', viewTarget: 'aftercare' },
    { label: 'CONTACT & STUDIOS', href: '#contact', sectionTarget: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    if (link.viewTarget) {
      if (onNavigateView) {
        onNavigateView(link.viewTarget);
      } else if (link.viewTarget === 'work' && onNavigateWork) {
        onNavigateWork();
      }
      return;
    }

    if (link.sectionTarget && onNavigateSection) {
      onNavigateSection(link.sectionTarget);
    }
  };

  return (
    <footer className="w-full bg-[#FFFFFF] text-[#18181B] border-t border-black/10 pt-16 pb-12 font-['Manrope'] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-black/10">
          {/* Col 1: Brand & Statement */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="lg" />
            <p className="text-xs text-[#52525B] leading-relaxed max-w-sm">
              ANI TATTOO is a luxury contemporary tattoo studio crafting bespoke fine-line art, single-needle micro-realism, velvety black & grey shading, and custom anatomical body compositions.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.instagram.com/anitattoooo/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-zinc-100 hover:bg-black border border-black/10 hover:border-black hover:text-white flex items-center gap-2 text-xs text-zinc-800 font-mono transition-colors shadow-xs"
                aria-label="Instagram @anitattoooo"
              >
                <Instagram className="w-4 h-4" />
                <span>@anitattoooo</span>
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-zinc-100 hover:bg-black border border-black/10 hover:border-black hover:text-white flex items-center justify-center text-zinc-800 transition-colors shadow-xs"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Directory */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-zinc-900 block font-['Space_Grotesk']">
              DIRECTORY
            </span>
            <ul className="space-y-2.5 text-xs text-zinc-600">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => handleLinkClick(e, l)}
                    className="hover:text-black hover:underline underline-offset-4 decoration-black/40 transition-colors cursor-pointer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Studio & Bookings */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-zinc-900 block font-['Space_Grotesk']">
              APPOINTMENTS
            </span>
            
            <div className="p-3.5 bg-zinc-50 border border-black/10 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2 text-xs text-zinc-600">
                <Clock className="w-3.5 h-3.5 text-black" />
                <span className="text-[10px] tracking-wider uppercase font-semibold">Waitlist</span>
              </div>
              <p className="text-sm font-bold text-black font-['Manrope']">
                ~ 3 TO 4 WEEKS
              </p>
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed">
              Private 1-on-1 sessions. Reserve your consultation or submit custom concepts with Ani.
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 bg-black hover:bg-zinc-800 text-white text-xs font-extrabold tracking-[0.2em] uppercase rounded-none transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>BOOK SESSION</span>
            </button>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div className="flex items-center gap-3">
            <p>© {new Date().getFullYear()} ANI TATTOO (@anitattoooo). All rights reserved.</p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-600 hover:text-black transition-colors cursor-pointer group"
          >
            <span className="text-[11px] tracking-wider uppercase font-bold">BACK TO TOP</span>
            <div className="w-6 h-6 border border-black/20 flex items-center justify-center group-hover:border-black transition-colors bg-white shadow-xs">
              <ArrowUp className="w-3.5 h-3.5 text-black" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
