import React, { useState } from 'react';
import { studioServices } from '../data/services';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesSectionProps {
  onOpenBookingWithService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenBookingWithService,
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(studioServices[0].id);

  const activeService = studioServices.find((s) => s.id === activeServiceId) || studioServices[0];

  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FFFFFF] text-[#18181B] border-t border-black/5" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimalist Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-5 border-b border-black/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-600 font-['Space_Grotesk']">
                STUDIO DISCIPLINES & EXPERTISE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-['Manrope'] tracking-tight text-[#111113]">
              SERVICES<span className="text-zinc-400">.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-zinc-500 font-['Manrope'] tracking-[0.1em] uppercase font-medium max-w-sm">
            Bespoke consultation and single-needle precision crafted for every skin placement.
          </p>
        </div>

        {/* Minimalist Split Master Index */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: Clean List of Disciplines */}
          <div className="lg:col-span-6 divide-y divide-black/10">
            {studioServices.map((service, index) => {
              const isActive = activeServiceId === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`py-5 transition-all duration-200 cursor-pointer group flex flex-col justify-center ${
                    isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="text-xs font-mono font-bold text-zinc-400">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className={`text-xl sm:text-2xl font-bold font-['Manrope'] tracking-tight transition-colors ${
                          isActive ? 'text-black' : 'text-zinc-800 group-hover:text-black'
                        }`}>
                          {service.title}
                        </h3>
                        <p className="text-xs text-zinc-500 font-['Manrope'] mt-1 sm:block hidden line-clamp-1">
                          {service.shortExplanation}
                        </p>
                      </div>
                    </div>

                    <span className={`text-[10px] font-mono tracking-widest uppercase transition-opacity ${
                      isActive ? 'text-black font-bold opacity-100' : 'text-zinc-400 opacity-0 group-hover:opacity-100'
                    }`}>
                      {isActive ? 'SELECTED' : 'INSPECT'}
                    </span>
                  </div>

                  {/* Mobile Inline Content */}
                  <div className={`mt-4 pt-3 border-t border-black/10 lg:hidden space-y-3 ${isActive ? 'block' : 'hidden'}`}>
                    <p className="text-xs text-zinc-600 font-['Manrope'] leading-relaxed">
                      {service.shortExplanation}
                    </p>
                    <div className="space-y-1.5">
                      {service.details.map((d, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-zinc-700">
                          <Check className="w-3.5 h-3.5 text-black" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenBookingWithService(service.title);
                      }}
                      className="w-full py-3 bg-black text-white text-xs font-bold font-['Manrope'] tracking-[0.15em] uppercase flex items-center justify-center gap-2 cursor-pointer hover:bg-zinc-800 transition-colors"
                    >
                      <span>BOOK {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Clean Editorial Discipline Details (Desktop) */}
          <div className="lg:col-span-6 hidden lg:flex flex-col justify-between pl-6 border-l border-black/10">
            <div className="space-y-6">
              {/* Image Preview */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover filter grayscale contrast-115 brightness-95 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="px-2 py-0.5 bg-black/80 text-[9px] font-mono uppercase tracking-wider">
                    SPECIFICATION • ANI STUDIO
                  </span>
                </div>
              </div>

              {/* Service Details */}
              <div className="space-y-2">
                <h3 className="text-2xl font-black font-['Manrope'] text-black tracking-tight">
                  {activeService.title}
                </h3>
                <p className="text-xs text-zinc-600 font-['Manrope'] leading-relaxed">
                  {activeService.shortExplanation}
                </p>
              </div>

              {/* Technical Highlights */}
              <div className="space-y-2 pt-2 border-t border-black/10">
                <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase font-['Space_Grotesk'] block">
                  TECHNIQUE & EXECUTION
                </span>
                <div className="space-y-1.5">
                  {activeService.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 font-['Manrope']">
                      <Check className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Booking Action */}
            <div className="pt-6 mt-6 border-t border-black/10 flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-mono">
                1-on-1 Consultation
              </span>
              <button
                onClick={() => onOpenBookingWithService(activeService.title)}
                className="px-6 py-3 bg-black hover:bg-zinc-800 text-white text-xs font-bold font-['Manrope'] tracking-[0.15em] uppercase transition-all flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>BOOK THIS SERVICE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
