import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp, CheckCircle2, PhoneCall, ShieldCheck, HeartPulse, Clock } from 'lucide-react';
import { SERVICES } from '../data/mockData';

export default function CompleteSolutions({ onOpenBooking }) {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES[0].id);

  return (
    <section id="services" className="py-16 lg:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Grid with Perfect Alignment and Zero Gaps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            
            {/* Top Block: Title, Rich Description, Badges, & Actions */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-brand-600 text-xs font-bold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-brand-600"></span>
                All In One Care
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.1]">
                Complete Solutions<br className="hidden sm:inline" /> For Pets
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md pt-1">
                From emergency clinical interventions to daily wellness therapy, access our integrated healthcare ecosystem designed exclusively for rescued companions across the Philippines.
              </p>

              {/* Trust Checkpoints Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs font-medium text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                  <span>Licensed Veterinarians</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                  <span>Same-Day Appointments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                  <span>Prescription Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                  <span>Fear-Free Clinic Care</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenBooking(SERVICES[0].title)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-sm rounded-full shadow-sm hover:shadow-purple-glow transition-all"
                >
                  <span>Schedule Today</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+639171234567"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-xs sm:text-sm rounded-full border border-gray-200 transition-all shadow-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-brand-600" />
                  <span>24/7 Hotline</span>
                </a>
              </div>
            </div>

            {/* Middle Block: Clinical Metrics Card (Completely Fills the Gap) */}
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-gray-100 shadow-soft grid grid-cols-3 gap-2 sm:gap-3 text-center">
              <div className="p-2">
                <div className="flex items-center justify-center text-brand-600 mb-1">
                  <HeartPulse className="w-4 h-4" />
                </div>
                <span className="text-lg sm:text-xl font-extrabold text-[#111827] block">15k+</span>
                <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Pets Healed</span>
              </div>

              <div className="p-2 border-x border-gray-100">
                <div className="flex items-center justify-center text-brand-600 mb-1">
                  <Clock className="w-4 h-4" />
                </div>
                <span className="text-lg sm:text-xl font-extrabold text-[#111827] block">24/7</span>
                <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Emergency</span>
              </div>

              <div className="p-2">
                <div className="flex items-center justify-center text-brand-600 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-lg sm:text-xl font-extrabold text-[#111827] block">100%</span>
                <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Verified Care</span>
              </div>
            </div>

            {/* Bottom Block: Male Vet with Golden Retriever Card + Doctor Bio */}
            <div className="bg-white rounded-3xl p-4 sm:p-5 border border-gray-100 shadow-soft flex flex-col justify-between">
              
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full bg-brand-50 mb-3 sm:mb-4">
                <img
                  src="/images/vet_male_golden_retriever.jpg"
                  alt="Veterinarian with friendly Golden Retriever"
                  className="w-full h-full object-cover object-center hover:scale-102 transition-transform duration-500"
                />
              </div>

              <div className="px-1 pt-1">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-sm font-bold text-gray-900">
                    Dr. Miguel Ramos, DVM
                  </h4>
                  <span className="text-[11px] font-semibold text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-full">
                    Senior Surgeon
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Specialized in clinical triage, soft-tissue surgeries, and canine rehabilitation for rescue pets across Metro Manila.
                </p>
              </div>

            </div>

          </div>


          {/* ================= RIGHT COLUMN ================= */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5">
            
            {/* Top Block: Blue Scrubs Vet Examining Cat Image Card */}
            <div className="bg-white rounded-3xl p-3 sm:p-4 border border-gray-100 shadow-soft">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9.5] w-full bg-brand-50">
                <img
                  src="/images/vet_examining_cat_blue.jpg"
                  alt="Veterinarian in blue scrubs examining cat"
                  className="w-full h-full object-cover object-center hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bottom Block: 5 Interactive Services List */}
            <div className="space-y-3 flex-1 flex flex-col justify-between">
              {SERVICES.map((srv) => {
                const isActive = srv.id === activeServiceId;
                return (
                  <div
                    key={srv.id}
                    onClick={() => setActiveServiceId(isActive ? '' : srv.id)}
                    className={`rounded-2xl transition-all duration-200 border cursor-pointer ${
                      isActive
                        ? 'bg-white border-brand-200 shadow-soft p-5'
                        : 'bg-white/80 hover:bg-white border-gray-100 hover:border-gray-200 p-4 sm:p-5'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full transition-colors ${
                          isActive ? 'bg-brand-600' : 'bg-gray-300'
                        }`} />
                        <h3 className="text-sm sm:text-base font-bold text-gray-900">
                          {srv.title}
                        </h3>
                      </div>

                      <div className="p-1 rounded-full text-gray-400">
                        {isActive ? (
                          <ChevronUp className="w-4 h-4 text-brand-600" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                    </div>

                    {/* Expanded description when active */}
                    {isActive && (
                      <div className="mt-3 pt-3 border-t border-gray-100 text-xs sm:text-sm text-gray-600 pl-5">
                        <p className="leading-relaxed mb-3">{srv.description}</p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenBooking(srv.title);
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700"
                        >
                          <span>Book {srv.title}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
