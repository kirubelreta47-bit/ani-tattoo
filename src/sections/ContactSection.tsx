import React from 'react';
import { studioLocations } from '../data/locations';
import { StudioLocationId } from '../types';
import {
  MapPin,
  Phone,
  Clock,
  Send,
  Instagram,
  Calendar,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'motion/react';

interface ContactSectionProps {
  onOpenBookingWithLocation: (locationId: StudioLocationId) => void;
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenBookingWithLocation,
  onOpenBooking: _onOpenBooking,
}) => {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#F4F4F7] text-[#18181B] border-t border-black/5" id="contact">
      {/* Target anchor for locations */}
      <div id="locations" className="absolute -top-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-5 border-b border-black/10 gap-4"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-600 font-['Space_Grotesk']">
                STUDIO RESIDENCIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-['Manrope'] tracking-tight text-[#111113]">
              LOCATIONS<span className="text-zinc-400">.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#71717A] font-['Manrope'] tracking-[0.15em] uppercase font-medium mt-1">
              PRIVATE RESIDENCY STUDIOS IN ADDIS ABABA & DUBAI
            </p>
          </div>

          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            VISITS BY APPOINTMENT ONLY
          </span>
        </motion.div>

        {/* STUDIO LOCATIONS - Clean Minimalist Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {studioLocations.map((loc, index) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border-t-2 border-black p-6 sm:p-8 flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-6">
                {/* Header with City */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.25em] text-zinc-400 uppercase font-['Space_Grotesk'] block">
                      {loc.neighborhood}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black font-['Manrope'] text-black tracking-tight mt-0.5">
                      {loc.city}
                    </h3>
                  </div>

                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                    RESIDENCY 0{index + 1}
                  </span>
                </div>

                {/* Studio Details */}
                <div className="space-y-3 pt-4 text-xs font-['Manrope'] text-zinc-600 border-t border-black/10">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span className="text-zinc-800 font-medium">{loc.addressPlaceholder}</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span className="text-zinc-700">{loc.hours}</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <a
                      href={`tel:${loc.phonePlaceholder.replace(/[^0-9+]/g, '')}`}
                      className="text-zinc-900 font-mono font-bold hover:underline"
                    >
                      {loc.phonePlaceholder}
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Minimal Social Icons & Book CTA */}
              <div className="pt-6 border-t border-black/10 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Social Channels */}
                <div className="flex items-center gap-3">
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noreferrer"
                    title={`Telegram: ${loc.telegramHandle}`}
                    aria-label={`Telegram: ${loc.telegramHandle}`}
                    className="text-zinc-500 hover:text-black transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </a>

                  <a
                    href="https://www.instagram.com/anitattoooo/"
                    target="_blank"
                    rel="noreferrer"
                    title="Instagram: @anitattoooo"
                    aria-label="Instagram: @anitattoooo"
                    className="text-zinc-500 hover:text-black transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>

                  <a
                    href={`tel:${loc.phonePlaceholder.replace(/[^0-9+]/g, '')}`}
                    title={`Call: ${loc.phonePlaceholder}`}
                    aria-label={`Call: ${loc.phonePlaceholder}`}
                    className="text-zinc-500 hover:text-black transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>

                {/* Booking Button */}
                <button
                  onClick={() => onOpenBookingWithLocation(loc.id)}
                  className="w-full sm:w-auto px-6 py-3 bg-black hover:bg-zinc-800 text-white text-xs font-bold tracking-[0.15em] uppercase transition-all cursor-pointer shadow-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-white" />
                  <span>BOOK IN {loc.city}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

