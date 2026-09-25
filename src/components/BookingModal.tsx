import React, { useState } from 'react';
import { BookingFormState, StudioLocationId } from '../types';
import { X, Calendar, MapPin, Upload, CheckCircle2, AlertCircle, ArrowRight, User, Phone, Send } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialStyle?: string;
  initialPlacement?: string;
  initialLocation?: StudioLocationId;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialStyle = '',
  initialPlacement = '',
  initialLocation = 'addis-ababa',
}) => {
  const [form, setForm] = useState<BookingFormState>({
    fullName: '',
    phone: '',
    socialHandle: '',
    tattooType: initialStyle || 'Fine-Line Micro-Realism',
    placement: initialPlacement || 'Forearm',
    approximateSize: 'Medium (4-7")',
    preferredDate: '',
    preferredTime: 'Afternoon (2:00 PM - 6:00 PM)',
    preferredLocation: initialLocation,
    referenceFile: null,
    referencePreviewUrl: null,
    additionalNotes: '',
  });

  React.useEffect(() => {
    if (isOpen) {
      setForm((prev) => ({
        ...prev,
        tattooType: initialStyle || prev.tattooType || 'Fine-Line Micro-Realism',
        placement: initialPlacement || prev.placement || 'Forearm',
        preferredLocation: initialLocation || prev.preferredLocation || 'addis-ababa',
      }));
    }
  }, [isOpen, initialStyle, initialPlacement, initialLocation]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrorMessage('Please upload an image file (PNG, JPG, WEBP).');
      return;
    }
    setErrorMessage('');
    const previewUrl = URL.createObjectURL(file);
    setForm((prev) => ({
      ...prev,
      referenceFile: file,
      referencePreviewUrl: previewUrl,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!form.phone.trim()) {
      setErrorMessage('Please enter your phone number or WhatsApp.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setForm({
      fullName: '',
      phone: '',
      socialHandle: '',
      tattooType: 'Fine-Line Micro-Realism',
      placement: 'Forearm',
      approximateSize: 'Medium (4-7")',
      preferredDate: '',
      preferredTime: 'Afternoon (2:00 PM - 6:00 PM)',
      preferredLocation: 'addis-ababa',
      referenceFile: null,
      referencePreviewUrl: null,
      additionalNotes: '',
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white border border-black/15 rounded-none shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#F9F9FB] border-b border-black/10 px-6 py-5 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-bold tracking-[0.25em] text-zinc-500 uppercase font-['Space_Grotesk'] mb-1">
              ANI TATTOO • APPOINTMENT & CONSULTATION
            </div>
            <h3 className="text-2xl font-bold font-['Manrope'] text-[#111113]">
              BOOK A PRIVATE SESSION<span className="text-zinc-400">.</span>
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-500 hover:text-black hover:bg-black/5 rounded-none transition-colors cursor-pointer border border-black/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-12 px-4 text-center space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-zinc-100 border border-black/20 text-black rounded-none flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl font-bold font-['Manrope'] text-black">
                  REQUEST RECEIVED<span className="text-zinc-400">.</span>
                </h4>
                <p className="text-zinc-600 max-w-md mx-auto text-sm font-['Manrope'] leading-relaxed">
                  Thank you, <span className="text-black font-bold">{form.fullName}</span>. We have logged your tattoo booking inquiry.
                </p>
                <p className="text-xs text-zinc-500 max-w-md mx-auto font-mono pt-2">
                  Our studio will review your concept notes and reach out via {form.phone} or {form.socialHandle || 'Instagram'} (@anitattoooo) to confirm scheduling.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-8 py-3.5 bg-black hover:bg-zinc-800 text-white font-extrabold text-xs tracking-[0.2em] uppercase rounded-none transition-colors cursor-pointer shadow-sm"
                >
                  DONE
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-none flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold tracking-wider text-zinc-700 uppercase font-['Manrope'] mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Lin"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-[#F9F9FB] border border-black/15 rounded-none text-sm text-black focus:border-black focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-wider text-zinc-700 uppercase font-['Manrope'] mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-[#F9F9FB] border border-black/15 rounded-none text-sm text-black focus:border-black focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Social Handle & Studio Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold tracking-wider text-zinc-700 uppercase font-['Manrope'] mb-1.5">
                    Instagram or Telegram Handle
                  </label>
                  <div className="relative">
                    <Send className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="@yourhandle"
                      value={form.socialHandle}
                      onChange={(e) => setForm({ ...form, socialHandle: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 bg-[#F9F9FB] border border-black/15 rounded-none text-sm text-black focus:border-black focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-wider text-zinc-700 uppercase font-['Manrope'] mb-1.5">
                    Studio Selection
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setForm({ ...form, preferredLocation: 'addis-ababa' })}
                      className={`py-2 px-3 text-xs font-bold rounded-none border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        form.preferredLocation === 'addis-ababa'
                          ? 'bg-black border-black text-white shadow-xs'
                          : 'bg-[#F9F9FB] border-black/15 text-zinc-600 hover:border-black'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>MAIN STUDIO</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setForm({ ...form, preferredLocation: 'adama' })}
                      className={`py-2 px-3 text-xs font-bold rounded-none border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        form.preferredLocation === 'adama'
                          ? 'bg-black border-black text-white shadow-xs'
                          : 'bg-[#F9F9FB] border-black/15 text-zinc-600 hover:border-black'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>GUEST RESIDENCY</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Tattoo Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold tracking-wider text-zinc-700 uppercase font-['Manrope'] mb-1.5">
                    Tattoo Style
                  </label>
                  <select
                    value={form.tattooType}
                    onChange={(e) => setForm({ ...form, tattooType: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#F9F9FB] border border-black/15 rounded-none text-sm text-black focus:border-black focus:outline-none"
                  >
                    <option value="Fine-Line Micro-Realism">Fine-Line Micro-Realism</option>
                    <option value="Black & Grey Realism">Black & Grey Realism</option>
                    <option value="Dark Botanical & Blackwork">Dark Botanical & Blackwork</option>
                    <option value="3D Illusion & Depth">3D Illusion & Depth</option>
                    <option value="Cover Up & Restoration">Cover Up & Restoration</option>
                    <option value="Custom Script / Calligraphy">Custom Script / Calligraphy</option>
                    <option value="Permanent Eyebrow Micro-Art">Permanent Eyebrow Micro-Art</option>
                    <option value="Other Custom Concept">Other Custom Concept</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-wider text-zinc-700 uppercase font-['Manrope'] mb-1.5">
                    Body Placement
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Forearm, Clavicle, Back"
                    value={form.placement}
                    onChange={(e) => setForm({ ...form, placement: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#F9F9FB] border border-black/15 rounded-none text-sm text-black focus:border-black focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-wider text-zinc-700 uppercase font-['Manrope'] mb-1.5">
                    Approximate Size
                  </label>
                  <select
                    value={form.approximateSize}
                    onChange={(e) => setForm({ ...form, approximateSize: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#F9F9FB] border border-black/15 rounded-none text-sm text-black focus:border-black focus:outline-none"
                  >
                    <option value="Small (under 3 inches)">Small (under 3")</option>
                    <option value="Medium (4 - 7 inches)">Medium (4 - 7")</option>
                    <option value="Large (8+ inches / Half Sleeve)">Large / Half Sleeve</option>
                    <option value="Full Sleeve / Back Piece">Full Sleeve / Back Piece</option>
                  </select>
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold tracking-wider text-zinc-700 uppercase font-['Manrope'] mb-1.5">
                    Preferred Session Date
                  </label>
                  <input
                    type="date"
                    value={form.preferredDate}
                    onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#F9F9FB] border border-black/15 rounded-none text-sm text-black focus:border-black focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-wider text-zinc-700 uppercase font-['Manrope'] mb-1.5">
                    Preferred Time of Day
                  </label>
                  <select
                    value={form.preferredTime}
                    onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#F9F9FB] border border-black/15 rounded-none text-sm text-black focus:border-black focus:outline-none"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (2:00 PM - 6:00 PM)">Afternoon (2:00 PM - 6:00 PM)</option>
                    <option value="Evening (6:00 PM - 8:30 PM)">Evening (6:00 PM - 8:30 PM)</option>
                    <option value="Full Day Session (11:00 AM - Close)">Full Day Session</option>
                  </select>
                </div>
              </div>

              {/* Reference Upload */}
              <div>
                <label className="block text-xs font-bold tracking-wider text-zinc-700 uppercase font-['Manrope'] mb-1.5">
                  Inspiration / Reference Image (Optional)
                </label>
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                      handleFileUpload(e.dataTransfer.files[0]);
                    }
                  }}
                  className="border-2 border-dashed border-black/20 hover:border-black bg-[#F9F9FB] p-4 rounded-none text-center cursor-pointer transition-colors"
                  onClick={() => document.getElementById('booking-file-input')?.click()}
                >
                  <input
                    id="booking-file-input"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleFileUpload(e.target.files[0]);
                      }
                    }}
                  />

                  {form.referencePreviewUrl ? (
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={form.referencePreviewUrl}
                        alt="Reference preview"
                        className="w-16 h-16 object-cover rounded-none border border-black/20"
                      />
                      <div className="text-left text-xs">
                        <p className="text-black font-medium truncate max-w-xs">
                          {form.referenceFile?.name}
                        </p>
                        <span className="text-zinc-600 font-bold">Click to replace</span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <Upload className="w-5 h-5 text-zinc-500 mx-auto" />
                      <p className="text-xs text-zinc-700">
                        Drag and drop reference image or <span className="text-black font-bold underline">browse</span>
                      </p>
                      <p className="text-[10px] text-zinc-400">Supports PNG, JPG, WebP up to 10MB</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-bold tracking-wider text-zinc-700 uppercase font-['Manrope'] mb-1.5">
                  Describe Your Vision & Story
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your concept, personal meaning, size scale, or any previous ink to cover..."
                  value={form.additionalNotes}
                  onChange={(e) => setForm({ ...form, additionalNotes: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#F9F9FB] border border-black/15 rounded-none text-sm text-black focus:border-black focus:outline-none transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-black hover:bg-zinc-800 text-white font-extrabold tracking-[0.22em] text-xs uppercase rounded-none transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">PROCESSING REQUEST...</span>
                ) : (
                  <>
                    <span>SEND CONSULTATION REQUEST</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
