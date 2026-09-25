export type TattooCategory =
  | 'ALL'
  | 'BLACK & GREY'
  | 'COLOR'
  | '3D'
  | 'COVER UP'
  | 'LETTERING'
  | 'CUSTOM';

export type BodyPlacement =
  | 'ARM'
  | 'FOREARM'
  | 'HAND'
  | 'CHEST'
  | 'BACK'
  | 'NECK'
  | 'LEG'
  | 'RIBS'
  | 'SHOULDER'
  | 'HEAD'
  | 'OTHER';

export type TattooSize = 'Small (under 3")' | 'Medium (4-7")' | 'Large / Full Piece (8"+)';

export type StudioLocationId = 'addis-ababa' | 'adama';

export interface PortfolioItem {
  id: string;
  title: string;
  category: TattooCategory;
  placement: BodyPlacement | string;
  description: string;
  image: string;
  aspectRatio?: 'portrait' | 'square' | 'tall';
  sessionHours?: string;
  tags?: string[];
  featured?: boolean;
}

export interface TattooStyleInfo {
  id: string;
  name: string;
  category: TattooCategory;
  tagline: string;
  description: string;
  image: string;
  technique: string;
  popularPlacements: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortExplanation: string;
  details: string[];
  image: string;
  consultationNote: string;
}

export interface BodyPlacementData {
  id: BodyPlacement;
  name: string;
  painLevel: 'Mild' | 'Moderate' | 'Intense';
  painRating: number; // 1 to 5
  healingDays: string;
  recommendedStyles: string[];
  tips: string;
  coordinates: { x: number; y: number; z?: number };
}

export interface CustomIdeaFormState {
  styleCategory: string;
  placement: string;
  size: string;
  referenceFile: File | null;
  referencePreviewUrl: string | null;
  description: string;
  preferredDate: string;
  preferredLocation: StudioLocationId | string;
  clientName: string;
  clientContact: string;
}

export interface BookingFormState {
  fullName: string;
  phone: string;
  socialHandle: string; // IG or Telegram
  tattooType: string;
  placement: string;
  approximateSize: string;
  preferredDate: string;
  preferredTime: string;
  preferredLocation: StudioLocationId | string;
  referenceFile: File | null;
  referencePreviewUrl: string | null;
  additionalNotes: string;
}

export interface ArtistProfile {
  name: string;
  title: string;
  portraitImage: string;
  biography: string[];
  philosophy: string;
  artisticStyle: string;
  focusAreas: string[];
  statsPlaceholder: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}

export interface StudioLocation {
  id: StudioLocationId;
  city: string;
  neighborhood: string;
  addressPlaceholder: string;
  phonePlaceholder: string;
  telegramHandle: string;
  instagramHandle: string;
  tiktokHandle?: string;
  hours: string;
  amenities: string[];
  directionsNote: string;
  mapCoordinates: { lat: number; lng: number };
}

export interface AftercareRule {
  id: string;
  period: string;
  title: string;
  instructions: string[];
  importantWarning?: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  quote: string;
  tattooType: string;
  placement?: string;
  location: string;
  datePlaceholder: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  likes: number;
  caption: string;
  tag: string;
}
