import { AftercareRule } from '../types';

export const aftercareRules: AftercareRule[] = [
  {
    id: 'aftercare-24h',
    period: 'FIRST 24 HOURS',
    title: 'Initial Shielding & First Cleanse',
    iconName: 'ShieldAlert',
    instructions: [
      'Keep your protective second-skin medical wrap (Dermalize/Saniderm) on for 12 to 24 hours as directed by the artist.',
      'Remove wrap under clean lukewarm running water. Do not rip aggressively.',
      'Wash gently using only fragrance-free antibacterial liquid soap and clean fingertips. Never use sponges or washcloths.',
      'Gently pat completely dry with a clean paper towel. Do not rub.'
    ],
    importantWarning: 'Expect mild plasma and ink weeping; this is completely normal during the first 24 hours.'
  },
  {
    id: 'aftercare-week1',
    period: 'FIRST WEEK (DAYS 2 - 7)',
    title: 'Moisture Balance & Gentle Healing',
    iconName: 'Droplets',
    instructions: [
      'Wash gently 2 times daily (morning and evening) with mild unscented soap.',
      'Apply a paper-thin layer of artist-approved tattoo balm (e.g. Hustle Butter or Aquaphor). Skin should breathe, not drown.',
      'Wear loose, breathable 100% cotton clothing over the fresh ink to prevent friction and fabric snagging.',
      'If flaking or light peeling begins, NEVER scratch, pick, or peel the dead skin.'
    ],
    importantWarning: 'Over-moisturizing can suffocate the pores and pull ink out of the dermis.'
  },
  {
    id: 'aftercare-longterm',
    period: 'LONG-TERM CARE (WEEK 2 & BEYOND)',
    title: 'Preserving Contrast & Sharpness',
    iconName: 'Sparkles',
    instructions: [
      'Once fully healed (approx. 2-3 weeks), apply SPF 50+ mineral sunscreen whenever exposed to direct sunlight.',
      'Maintain daily skin hydration with natural fragrance-free lotion to keep black pigments rich and deep.',
      'Schedule a complimentary 4-week check-up or touch-up session if your piece involves intense saturation.'
    ],
    importantWarning: 'UV sunlight is the #1 cause of tattoo fading over years. Protect your investment.'
  },
  {
    id: 'aftercare-avoid',
    period: 'WHAT TO STRICTLY AVOID',
    title: 'Critical Healing Prohibitions',
    iconName: 'Ban',
    instructions: [
      'NO swimming pools, hot tubs, ocean water, saunas, or soaking in baths for at least 3 weeks.',
      'NO direct sun exposure or tanning beds while your tattoo is in active recovery.',
      'NO aggressive gym workouts that stretch the healing skin or expose it to communal gym equipment during days 1-4.',
      'NO picking, scratching, or rubbing scabs — let all flakes fall away naturally.'
    ],
    importantWarning: 'Soaking in water invites bacterial infection and leaches uncured ink.'
  }
];
