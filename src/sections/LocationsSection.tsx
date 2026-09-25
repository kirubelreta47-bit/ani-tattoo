import React from 'react';
import { studioLocations } from '../data/locations';
import { StudioLocationId } from '../types';
import { MapPin, Phone, Clock, Send, Navigation, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface LocationsSectionProps {
  onOpenBookingWithLocation: (locationId: StudioLocationId) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({
  onOpenBookingWithLocation,
}) => {
  return (
    <section className="relative w-full py-28 bg-[#08080A] text-[#EDEDED] border-t border-white/5" id="locations">
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
                STUDIO PRESENCE • ANI TATTOO
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-['Manrope'] tracking-tight text-white">
              FIND US<span className="text-zinc-500">.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#9CA3AF] font-['Manrope'] tracking-[0.2em] uppercase font-medium mt-2">
              PRIVATE ATELIER & GUEST RESIDENCIES (@ANITATTOOOO).
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-400">
            * VISITS BY APPOINTMENT ONLY TO PRESERVE PRIVATE VIP SESSIONS
          </div>
        </motion.div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {studioLocations.map((loc, index) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 50, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.35, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.45, ease: 'easeOut' } }}
              className="bg-[#101014] border border-white/10 hover:border-white/40 rounded-none overflow-hidden transition-colors duration-700 flex flex-col justify-between group shadow-2xl backdrop-blur-md"
            >
              {/* Top Dark Map Visual Mockup */}
              <div className="relative h-52 w-full bg-[#08080A] overflow-hidden border-b border-white/10 flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:28px_28px]" />

                {/* Radar sweep / pulse rings */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-white/15 animate-ping absolute" />
                  <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center bg-white/5">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-4 text-[10px] font-mono text-zinc-500 bg-black/80 px-2.5 py-1 rounded-none border border-white/5">
                  LAT: {loc.mapCoordinates.lat}° N / LNG: {loc.mapCoordinates.lng}° W
                </div>

                <div className="absolute top-3 right-4">
                  <span className="px-2.5 py-1 bg-white text-black text-[10px] font-bold tracking-widest uppercase font-['Manrope'] rounded-none shadow-sm">
                    ACTIVE STUDIO
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-bold tracking-widest text-zinc-400 uppercase font-['Space_Grotesk']">
                      {loc.neighborhood}
                    </span>
                    <h3 className="text-3xl font-bold font-['Manrope'] text-white mt-1">
                      {loc.city}
                    </h3>
                  </div>

                  {/* Info List */}
                  <div className="space-y-3 text-xs font-['Manrope'] text-[#9CA3AF]">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                      <span className="text-zinc-200">{loc.addressPlaceholder}</span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                      <span>{loc.hours}</span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Phone className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                      <span>{loc.phonePlaceholder}</span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Navigation className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                      <span>{loc.directionsNote}</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="pt-2">
                    <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase font-['Space_Grotesk'] block mb-2">
                      STUDIO AMENITIES & STANDARDS
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {loc.amenities.map((amenity) => (
                        <div key={amenity} className="flex items-center gap-1.5 text-[11px] text-zinc-300">
                          <Check className="w-3 h-3 text-zinc-300" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-3 text-xs text-zinc-400">
                    <a
                      href="https://t.me"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white flex items-center gap-1 font-mono text-[11px]"
                    >
                      <Send className="w-3.5 h-3.5 text-zinc-300" />
                      <span>{loc.telegramHandle}</span>
                    </a>
                  </div>

                  <button
                    onClick={() => onOpenBookingWithLocation(loc.id)}
                    className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-zinc-200 text-black text-xs font-bold tracking-wider uppercase rounded-none transition-colors cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  >
                    BOOK AT {loc.city}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
