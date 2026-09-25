import { TattooStyleInfo } from '../types';

export const tattooStyles: TattooStyleInfo[] = [
  {
    id: 'style-fineline-realism',
    name: 'FINE-LINE & MICRO-REALISM',
    category: 'BLACK & GREY',
    tagline: 'Microscopic Precision & Velvety Soft Gradients',
    description: 'Mastery over single-needle linework, from deep carbon blacks to whisper-soft skin tone blends. Creates enduring realism and architectural shadow.',
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=800&auto=format&fit=crop',
    technique: 'Single-needle tapering, smooth whip shading, multi-dilution wash systems.',
    popularPlacements: ['Forearm', 'Inner Arm', 'Clavicle', 'Full Sleeve']
  },
  {
    id: 'style-dark-blackwork',
    name: 'DARK ART & BLACKWORK',
    category: 'BLACK & GREY',
    tagline: 'High-Density Ink & Negative Space Balance',
    description: 'Striking monochrome contrasts, botanical silhouettes, and evocative dark motifs engineered for clean, permanent longevity on skin.',
    image: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=800&auto=format&fit=crop',
    technique: 'Solid black pigment packing, stippling dotwork, negative-space framing.',
    popularPlacements: ['Outer Bicep', 'Back Piece', 'Thigh', 'Shoulder']
  },
  {
    id: 'style-3d',
    name: '3D & OPTICAL REALISM',
    category: '3D',
    tagline: 'Defying the Flat Surface of Skin',
    description: 'Hyper-realistic drop shadows, specular chrome highlights, and anatomical depth cues that make artwork seem to float or carve into tissue.',
    image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop',
    technique: 'Calculated perspective, ambient occlusion shading, white highlight accents.',
    popularPlacements: ['Chest', 'Forearm', 'Ribs', 'Upper Arm']
  },
  {
    id: 'style-lettering',
    name: 'CUSTOM SCRIPT & CALLIGRAPHY',
    category: 'LETTERING',
    tagline: 'Anatomically Sculpted Typography',
    description: 'From sharp gothic blackletter and delicate single-needle script to custom ornamental lettering shaped to body flow.',
    image: 'https://images.unsplash.com/photo-1590246814883-5783374135d9?q=80&w=800&auto=format&fit=crop',
    technique: 'Freehand marker mapping, single-needle precision, dynamic weight variation.',
    popularPlacements: ['Clavicle', 'Neck', 'Inner Wrist', 'Ribcage']
  },
  {
    id: 'style-cover-up',
    name: 'EXPERT COVER UPS',
    category: 'COVER UP',
    tagline: 'Reclaiming Your Canvas',
    description: 'Transforming regret, faded marks, or outdated ink into formidable, brand-new bespoke artwork through strategic optical distraction and dense shading.',
    image: 'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?q=80&w=800&auto=format&fit=crop',
    technique: 'Tone neutralization, high-density line placement, dark contrast flow.',
    popularPlacements: ['Shoulder', 'Upper Back', 'Outer Forearm', 'Calf']
  },
  {
    id: 'style-custom',
    name: 'BESPOKE ART & FUSION',
    category: 'CUSTOM',
    tagline: 'One-of-One Personal Conceptions',
    description: 'Collaborative concept development turning abstract thoughts, dark aesthetic ideas, and personal narratives into an original masterwork that will never be duplicated.',
    image: 'https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=800&auto=format&fit=crop',
    technique: 'Custom sketch drafting, anatomical previewing, bespoke needle grouping.',
    popularPlacements: ['Torso', 'Full Back', 'Full Leg', 'Arm Sleeve']
  }
];
