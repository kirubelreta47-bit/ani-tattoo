import { BodyPlacementData } from '../types';

export const bodyPlacements: BodyPlacementData[] = [
  {
    id: 'ARM',
    name: 'Upper Arm & Bicep',
    painLevel: 'Mild',
    painRating: 2,
    healingDays: '10 - 14 Days',
    recommendedStyles: ['Black & Grey Realism', '3D Illusion', 'Neo-Traditional', 'Custom Sleeve'],
    tips: 'One of the most versatile canvases on the body. Great muscle contour and low distortion over time.',
    coordinates: { x: -0.45, y: 0.35, z: 0.1 }
  },
  {
    id: 'FOREARM',
    name: 'Forearm (Inner & Outer)',
    painLevel: 'Mild',
    painRating: 2,
    healingDays: '10 - 14 Days',
    recommendedStyles: ['Fine Line', 'Lettering / Ge’ez', 'Portraits', 'Geometric Blackwork'],
    tips: 'High visibility area with smooth flat planes. Inner forearm heals exceptionally crisp.',
    coordinates: { x: -0.65, y: -0.1, z: 0.15 }
  },
  {
    id: 'CHEST',
    name: 'Chest & Sternum',
    painLevel: 'Intense',
    painRating: 4,
    healingDays: '14 - 21 Days',
    recommendedStyles: ['Symmetrical 3D Pieces', 'Lettering Across Clavicle', 'Eagle / Animal Crests'],
    tips: 'Sternum and collarbone are sensitive due to proximity to bone, but deliver the most dramatic impact.',
    coordinates: { x: 0, y: 0.35, z: 0.35 }
  },
  {
    id: 'BACK',
    name: 'Full Back & Shoulder Blades',
    painLevel: 'Moderate',
    painRating: 3,
    healingDays: '14 - 21 Days',
    recommendedStyles: ['Large Scale Compositions', 'Oriental / Samurai', 'Large Cover-ups'],
    tips: 'The largest unbroken canvas on the human body. Allows for intricate storytelling and cinematic scale.',
    coordinates: { x: 0, y: 0.4, z: -0.35 }
  },
  {
    id: 'NECK',
    name: 'Neck & Throat / Behind Ear',
    painLevel: 'Intense',
    painRating: 4,
    healingDays: '7 - 12 Days',
    recommendedStyles: ['Delicate Script', 'Dark Gothic Motifs', 'Fine Line Botanical'],
    tips: 'High impact, editorial aesthetic. Requires precise anatomical flow along the sternocleidomastoid muscle.',
    coordinates: { x: 0, y: 0.75, z: 0.1 }
  },
  {
    id: 'LEG',
    name: 'Thigh & Calf',
    painLevel: 'Moderate',
    painRating: 3,
    healingDays: '14 - 18 Days',
    recommendedStyles: ['Color Saturation', 'Japanese Dragons', 'Large Portraiture', '3D Realism'],
    tips: 'Outer thigh is relatively mild, while shin and back of knee require good stamina. Excellent durability.',
    coordinates: { x: -0.22, y: -0.65, z: 0.1 }
  },
  {
    id: 'HAND',
    name: 'Hand & Knuckles',
    painLevel: 'Intense',
    painRating: 5,
    healingDays: '10 - 15 Days',
    recommendedStyles: ['Micro-Realism', 'Bold Blackwork', 'Single Word Script'],
    tips: 'Requires strict aftercare due to constant movement and hand washing. Requires experienced skin application.',
    coordinates: { x: -0.85, y: -0.4, z: 0.2 }
  },
  {
    id: 'SHOULDER',
    name: 'Shoulder & Deltoid Cap',
    painLevel: 'Mild',
    painRating: 2,
    healingDays: '10 - 14 Days',
    recommendedStyles: ['Dark Botanical Cover-Ups', 'Armor Plates', 'Neo-Traditional', 'Mandala Caps'],
    tips: 'Excellent muscular curvature with low sensitivity. Holds dense pigmentation and smooth shading over time.',
    coordinates: { x: -0.38, y: 0.55, z: 0.2 }
  },
  {
    id: 'RIBS',
    name: 'Ribs & Side Flank',
    painLevel: 'Intense',
    painRating: 5,
    healingDays: '14 - 21 Days',
    recommendedStyles: ['3D Illusion', 'Script & Calligraphy', 'Flowing Flora', 'Fluid Ink Dynamics'],
    tips: 'High nerve concentration along the rib cage. Requires steady breathing control and rewarded with stunning natural flow.',
    coordinates: { x: -0.25, y: 0.1, z: 0.1 }
  },
  {
    id: 'HEAD',
    name: 'Eyebrow & Facial Micro-Art',
    painLevel: 'Moderate',
    painRating: 3,
    healingDays: '7 - 10 Days',
    recommendedStyles: ['Micro-Pigmentation', 'Nano-Hair Strokes', 'Geometric Temple Accent', 'Behind-Ear Accent'],
    tips: 'Delicate dermal depth requiring specialized cosmetic needles and precision facial contour mapping.',
    coordinates: { x: 0, y: 0.9, z: 0.1 }
  }
];
