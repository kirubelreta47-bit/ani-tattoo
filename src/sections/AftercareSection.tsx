import React from 'react';
import { aftercareRules } from '../data/aftercare';
import { ShieldAlert, Droplets, Sparkles, Ban, CheckCircle2, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

export const AftercareSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-black" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-black" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-black" />;
      case 'Ban':
        return <Ban className="w-5 h-5 text-black" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-black" />;
    }
  };

  return (
    <section className="relative w-full py-20 bg-[#F9F9FB] text-[#18181B] border-t border-black/5" id="aftercare">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-5 border-b border-black/10 gap-4"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-600 font-['Space_Grotesk']">
                HEALING & PRESERVATION • ANI TATTOO
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-['Manrope'] tracking-tight text-[#111113]">
              PROTECT THE ART<span className="text-zinc-400">.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#71717A] font-['Manrope'] tracking-[0.15em] uppercase font-medium mt-1">
              Essential Care Protocols for Fine-Line & Pigment Longevity
            </p>
          </div>
        </motion.div>

        {/* 4 Stage Aftercare Cards Grid with Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {aftercareRules.map((rule, index) => (
            <motion.div
              key={rule.id}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.35, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: 'easeOut' } }}
              className="bg-white border border-black/10 hover:border-black/30 rounded-none p-5 flex flex-col justify-between transition-colors duration-500 group shadow-sm hover:shadow-md"
            >
              <div className="space-y-3">
                {/* Period Header */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-700 uppercase bg-zinc-100 px-2 py-0.5 border border-black/10">
                    {rule.period}
                  </span>
                  {getIcon(rule.iconName)}
                </div>

                <h3 className="text-base font-bold font-['Manrope'] text-[#111113] group-hover:text-black transition-colors leading-snug">
                  {rule.title}
                </h3>

                {/* Instructions List */}
                <div className="space-y-2 pt-1">
                  {rule.instructions.map((inst, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-600 font-['Manrope'] leading-relaxed">
                      <span className="text-black font-bold mt-0.5">•</span>
                      <span>{inst}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warning box */}
              {rule.importantWarning && (
                <div className="mt-4 pt-3 border-t border-black/10 text-[10px] text-zinc-700 font-['Manrope'] flex items-start gap-1.5 bg-amber-50/60 p-2.5 border border-amber-200/60">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                  <span className="text-amber-900">{rule.importantWarning}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
