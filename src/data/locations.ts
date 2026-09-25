import { StudioLocation } from '../types';

export const studioLocations: StudioLocation[] = [
  {
    id: 'addis-ababa',
    city: 'MAIN STUDIO',
    neighborhood: 'Private VIP Suite',
    addressPlaceholder: 'Private Studio Suite, Luxury Arts District',
    phonePlaceholder: '+1 (555) 349-8288 (Direct Studio)',
    telegramHandle: '@anitattoooo_booking',
    instagramHandle: '@anitattoooo',
    tiktokHandle: '@anitattoooo',
    hours: 'Tuesday - Sunday: 11:00 AM – 8:00 PM (By Appointment Only)',
    amenities: ['Private 1-on-1 VIP Session', 'Hospital Autoclave Sterilization', 'Espresso & Refreshment Bar', 'High-Fidelity Soundscape'],
    directionsNote: 'Exclusive private studio address provided upon confirmed appointment booking.',
    mapCoordinates: { lat: 40.7128, lng: -74.006 }
  },
  {
    id: 'adama',
    city: 'GUEST STUDIO',
    neighborhood: 'Design Suite',
    addressPlaceholder: 'Guest Residency & Design Lounge',
    phonePlaceholder: '+1 (555) 349-8289 (Concierge)',
    telegramHandle: '@anitattoooo_guest',
    instagramHandle: '@anitattoooo',
    tiktokHandle: '@anitattoooo',
    hours: 'Select Dates & Guest Residencies (By Appointment)',
    amenities: ['Private Custom Design Suite', 'Medical-Grade HEPA Filtration', 'Comprehensive Aftercare Kit'],
    directionsNote: 'Selected seasonal dates announced via Instagram @anitattoooo.',
    mapCoordinates: { lat: 34.0522, lng: -118.2437 }
  }
];
