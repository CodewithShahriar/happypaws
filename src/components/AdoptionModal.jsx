import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Heart, MapPin, Calendar, Sparkles } from 'lucide-react';
import { PETS } from '../data/mockData';

export default function AdoptionModal({ isOpen, onClose, initialPet, onComplete }) {
  const [selectedPet, setSelectedPet] = useState(initialPet || PETS[0]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    housingType: 'Condo / Apartment (Pet Friendly)',
    hasOtherPets: 'No',
    experience: 'First-time pet owner',
    message: ''
  });

  // Sync if initialPet changes
  React.useEffect(() => {
    if (initialPet) {
      setSelectedPet(initialPet);
    }
  }, [initialPet]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onComplete) onComplete(selectedPet);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={handleClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-gray-100 overflow-hidden z-10 my-8">
        
        {/* Header */}
        <div className="p-6 bg-[#FAF7F2] border-b border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-full">
              Adoption Matching Portal
            </span>
            <h3 className="text-xl font-bold text-gray-900 mt-1">
              Apply to Adopt {selectedPet?.name || 'a Companion'}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-gray-900">
                Application Submitted!
              </h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName || 'Kind Adopter'}</strong>! Our adoption counselor for <strong>{selectedPet?.name}</strong> at <em>{selectedPet?.location}</em> will review your profile and reach out within 24 hours.
              </p>
              
              <div className="p-4 bg-brand-50 rounded-2xl max-w-sm mx-auto text-left text-xs text-brand-900 space-y-1">
                <p><strong>Next Steps:</strong></p>
                <p>1. Brief virtual home check via WhatsApp/Zoom</p>
                <p>2. Meet-and-greet session with {selectedPet?.name}</p>
                <p>3. Adoption clearance & welcome care kit delivery</p>
              </div>

              <button
                onClick={handleClose}
                className="px-6 py-2.5 bg-brand-600 text-white font-semibold text-sm rounded-full shadow-sm"
              >
                Done
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Pet Profile Header Card */}
              {selectedPet && (
                <div className="p-4 bg-[#FAF7F2] rounded-2xl flex flex-col sm:flex-row items-center gap-4 border border-gray-100">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white p-1 flex-shrink-0 shadow-sm flex items-center justify-center">
                    <img
                      src={selectedPet.image}
                      alt={selectedPet.name}
                      className="w-full h-full object-contain object-bottom rounded-xl"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                      <span className="text-xs font-bold text-gray-900">{selectedPet.name}</span>
                      <span className="text-xs text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full font-medium">
                        {selectedPet.breed}
                      </span>
                      <span className="text-xs text-gray-500">
                        • {selectedPet.age} • {selectedPet.gender}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{selectedPet.personality}</p>
                    <div className="flex items-center justify-center sm:justify-start gap-4 text-xs font-semibold text-emerald-600">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Complete Medical Clearance
                      </span>
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-brand-500" />
                        {selectedPet.location}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maria Clara Santos"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Contact Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="+63 9XX XXX XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Home Environment</label>
                    <select
                      value={formData.housingType}
                      onChange={(e) => setFormData({ ...formData, housingType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none bg-white"
                    >
                      <option>House with fenced yard</option>
                      <option>Townhouse / Duplex</option>
                      <option>Condo / Apartment (Pet Friendly)</option>
                      <option>Rented accommodation with pet permit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Pet Experience</label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none bg-white"
                    >
                      <option>First-time pet owner</option>
                      <option>Experienced pet parent</option>
                      <option>Currently have pets at home</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Tell us why you'd like to adopt {selectedPet?.name}
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us a little bit about your home and daily routine..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-full shadow-purple-glow hover:shadow-lg transition-all"
                  >
                    Submit Adoption Application
                  </button>
                  <p className="text-[11px] text-gray-400 text-center mt-2">
                    🔒 Zero application fee. HappyPaws never charges adoption fees for shelter animals.
                  </p>
                </div>
              </form>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
