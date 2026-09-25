import React from 'react';
import { studioTestimonials } from '../data/testimonials';
import { Quote, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative w-full py-28 bg-[#08080A] text-[#EDEDED] border-t border-white/5" id="testimonials">
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
                CLIENT DIALOGUE • ANI TATTOO
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-['Manrope'] tracking-tight text-white">
              CLIENT STORIES<span className="text-zinc-500">.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#9CA3AF] font-['Manrope'] tracking-[0.2em] uppercase font-medium mt-2">
              STORIES OF ENDURING CRAFTSMANSHIP FROM OUR COLLECTORS.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-500">
            @anitattoooo Verified Collectors
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {studioTestimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.35, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.45, ease: 'easeOut' } }}
              className="bg-[#101014] border border-white/10 hover:border-white/40 rounded-none p-8 flex flex-col justify-between transition-colors duration-700 group shadow-xl"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-zinc-600 group-hover:text-zinc-300 transition-colors duration-500" />

                <p className="text-sm sm:text-base font-['Manrope'] text-zinc-300 italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold font-['Manrope'] text-white">
                    {item.clientName}
                  </h4>
                  <p className="text-xs text-zinc-400 font-medium font-['Manrope']">
                    {item.tattooType}
                  </p>
                </div>

                <div className="text-right text-xs text-zinc-500 font-mono">
                  <span className="block">{item.location}</span>
                  <span className="text-[10px] text-zinc-400 flex items-center gap-1 justify-end">
                    <CheckCircle className="w-2.5 h-2.5 text-zinc-300" />
                    {item.datePlaceholder}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
