import React, { useState } from 'react';
import { 
  Stethoscope, Pill, Sparkles, Award, Home, Calendar, Clock, 
  CheckCircle2, ShieldCheck, ChevronDown, ArrowRight, HeartPulse, 
  Microscope, Syringe, Scissors, HelpCircle 
} from 'lucide-react';
import { SERVICES } from '../data/mockData';

export default function ServicesPage({ onOpenBooking, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState(0);

  const extendedServices = [
    {
      id: "clinical-care",
      title: "Veterinary Clinical Care & Diagnostics",
      category: "clinical",
      tag: "Most Requested",
      price: "From $35.00",
      duration: "30-45 mins",
      icon: Stethoscope,
      badgeColor: "bg-purple-100 text-purple-700",
      description: "Comprehensive physical examinations, diagnostic blood chemistry, digital radiology, soft-tissue surgeries, and preventative care.",
      includes: [
        "Head-to-tail physical exam by licensed veterinarian",
        "Complete CBC blood count and parasite testing",
        "Vaccination updates (Rabies, 5-in-1, Bordetella)",
        "Official digital medical passport updates"
      ]
    },
    {
      id: "food-medication",
      title: "Prescription Diets & Pharmacy Delivery",
      category: "clinical",
      tag: "Cold-Chain Verified",
      price: "Custom Prescription",
      duration: "Same-Day Dispatch",
      icon: Pill,
      badgeColor: "bg-blue-100 text-blue-700",
      description: "Veterinary-formulated therapeutic diets, post-operative medications, antibiotics, and supplements delivered with guaranteed cold-chain safety.",
      includes: [
        "Therapeutic renal, gastrointestinal, and allergy recipes",
        "Automatic recurring monthly medication refills",
        "Veterinary nutrition consultation & weight monitoring",
        "Direct temperature-monitored courier delivery"
      ]
    },
    {
      id: "hygiene-spa",
      title: "Luxury Pet Hygiene Spa & Grooming",
      category: "spa",
      tag: "Fear-Free Certified",
      price: "From $28.00",
      duration: "60-90 mins",
      icon: Sparkles,
      badgeColor: "bg-pink-100 text-pink-700",
      description: "Relaxing hydrotherapy, coat conditioning with hypoallergenic botanical shampoos, sanitary hygiene trim, ear cleaning, and nail styling.",
      includes: [
        "Warm soothing hydro-jet bath with natural botanical wash",
        "Custom breed haircuts and sanitary coat trimming",
        "Deep ear flush and antibacterial paw pad balm",
        "Gentle, stress-free handling for shy or nervous companions"
      ]
    },
    {
      id: "smart-coaching",
      title: "Behavioral Coaching & Smart Training",
      category: "training",
      tag: "Certified Trainers",
      price: "From $45.00 / session",
      duration: "60 mins",
      icon: Award,
      badgeColor: "bg-amber-100 text-amber-700",
      description: "Evidence-based positive reinforcement coaching designed to resolve separation anxiety, master leash manners, and accelerate potty training.",
      includes: [
        "1-on-1 private home or dedicated agility facility sessions",
        "Rescue pet desensitization and household socialization",
        "Puppy milestone roadmap and basic command mastery",
        "Lifetime behavioral support group access"
      ]
    },
    {
      id: "cozy-hotel",
      title: "Cozy Pet Hotel & Quarantine Boarding",
      category: "boarding",
      tag: "24/7 Webcam",
      price: "From $32.00 / night",
      duration: "Overnight & Extended",
      icon: Home,
      badgeColor: "bg-emerald-100 text-emerald-700",
      description: "Private climate-controlled sleeping suites, 24/7 dedicated webcam streaming, individualized playtimes, and continuous veterinary supervision.",
      includes: [
        "Private sound-isolated suites for dogs and cats",
        "Dedicated HD live camera streaming for pet parents",
        "Custom diet schedules & complimentary medication administering",
        "Twice-daily outdoor private park exercise runs"
      ]
    },
    {
      id: "dental-surgery",
      title: "Ultrasonic Dental Cleaning & Oral Surgery",
      category: "clinical",
      tag: "Specialized Care",
      price: "From $65.00",
      duration: "45-60 mins",
      icon: HeartPulse,
      badgeColor: "bg-teal-100 text-teal-700",
      description: "Comprehensive oral examinations, ultrasonic subgingival scaling, tooth polishing, and gentle extractions to combat periodontal disease.",
      includes: [
        "Pre-anesthetic blood work screening for senior safety",
        "Subgingival ultrasonic plaque and tartar removal",
        "Fluoride treatment and enamel barrier polishing",
        "Post-procedure soft diet plan and pain management"
      ]
    }
  ];

  const packages = [
    {
      title: "Puppy & Kitten Foundation",
      price: "$89",
      period: "one-time",
      desc: "Complete 3-round vaccination series, deworming, microchip, and first wellness check.",
      popular: false,
      features: [
        "3 core vaccination rounds",
        "Full deworming & fecal test",
        "Digital microchip registration",
        "Free 30-day nutrition starter pack",
        "24/7 vet chat support"
      ]
    },
    {
      title: "Annual Complete Wellness",
      price: "$149",
      period: "per year",
      desc: "The gold standard preventive care plan for healthy adult dogs and cats.",
      popular: true,
      features: [
        "Comprehensive biannual vet checkups",
        "Annual vaccine booster shots",
        "Full CBC & internal organ blood panel",
        "1 Ultrasonic dental scaling session",
        "10% discount on all shop supplies"
      ]
    },
    {
      title: "Senior Golden Years Care",
      price: "$199",
      period: "per year",
      desc: "Specialized geriatric screening, joint care, and metabolic monitoring for pets 7+ years.",
      popular: false,
      features: [
        "Quarterly comprehensive geriatric exams",
        "Digital arthritis & joint X-rays",
        "Cardiac screening & blood pressure",
        "Senior joint supplement allowance",
        "Priority emergency appointment booking"
      ]
    }
  ];

  const faqs = [
    {
      q: "What vaccines does my rescue pet need before adoption?",
      a: "All HappyPaws rescue pets come 100% vaccinated against Rabies, DHPP (5-in-1 for dogs), and FVRCP (for cats), along with complete deworming and veterinary medical clearance."
    },
    {
      q: "How do I schedule an appointment for clinic services?",
      a: "You can click any 'Book Service' button on this page or use the top navigation. Select your preferred date, service type, and time slot, and our clinical coordinator will confirm instantly."
    },
    {
      q: "Are the grooming products hypoallergenic?",
      a: "Yes. Our Pet Hygiene Spa exclusively uses certified organic, tearless, and hypoallergenic botanical shampoos formulated without harsh sulfates, artificial dyes, or parabens."
    },
    {
      q: "Can I watch my pet while they stay at the Cozy Hotel?",
      a: "Absolutely! Every boarding suite includes an encrypted 24/7 HD webcam accessible directly from your smartphone so you can check in anytime."
    },
    {
      q: "What should I bring for my pet's first clinical appointment?",
      a: "Please bring any prior medical or vaccination records. If adopting through HappyPaws, all historical digital records are already pre-loaded into our clinical database."
    }
  ];

  const filtered = activeCategory === 'all' 
    ? extendedServices 
    : extendedServices.filter(s => s.category === activeCategory);

  return (
    <div className="py-8 sm:py-12">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 space-y-16 sm:space-y-24">
        
        {/* Hero Section */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-purple-50/70 via-white to-brand-50/50 p-8 sm:p-14 lg:p-20 border-2 border-brand-200/80 shadow-soft overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-purple-200/40 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-5">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>HappyPaws Clinical Excellence</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#111827] tracking-tight leading-[1.15]">
              Full-Spectrum Veterinary Care & Luxury Pet Wellness.
            </h1>
            
            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              From routine health exams and sterile surgical suites to fear-free hygiene spa grooming and climate-controlled boarding suites, our licensed veterinarians treat every companion like family.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking('Veterinary Clinical Care')}
                className="px-7 py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md hover:shadow-brand-500/25 transition-all flex items-center gap-2 group active:scale-95"
              >
                <span>Book Clinical Care</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('adopt')}
                className="px-7 py-3.5 rounded-2xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm border-2 border-gray-200 hover:border-brand-300 transition-all active:scale-95"
              >
                Adopt a Companion
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
                Our Specialized Services
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Select a category to explore procedures, pricing, and certified care options.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 bg-gray-100/80 p-1.5 rounded-2xl border border-gray-200">
              {[
                { id: 'all', label: 'All Services' },
                { id: 'clinical', label: 'Clinical & Diagnostics' },
                { id: 'spa', label: 'Hygiene & Spa' },
                { id: 'training', label: 'Coaching' },
                { id: 'boarding', label: 'Hotel & Suites' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-white text-brand-600 shadow-xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map(service => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="rounded-3xl bg-white border-2 border-brand-200/80 p-6 sm:p-8 flex flex-col justify-between shadow-soft hover:border-brand-400 hover:shadow-md transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white flex items-center justify-center transition-colors">
                        <Icon className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${service.badgeColor}`}>
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#111827] group-hover:text-brand-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-2.5 font-normal">
                      {service.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-gray-100 space-y-2">
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        Procedure Includes:
                      </p>
                      {service.includes.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="block text-[11px] text-gray-400 font-semibold uppercase">Pricing</span>
                      <span className="text-base font-black text-gray-900">{service.price}</span>
                    </div>
                    <button
                      onClick={() => onOpenBooking(service.title)}
                      className="px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-xs transition-colors flex items-center gap-1.5 active:scale-95"
                    >
                      <span>Book Service</span>
                      <Calendar className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clinical Wellness Packages */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
              Transparent Care Plans
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#111827] tracking-tight mt-3">
              Comprehensive Health Membership Plans
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-2">
              All-inclusive preventive coverage designed to keep your companion healthy while saving up to 35% on clinical costs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-7 sm:p-9 border-2 flex flex-col justify-between transition-all ${
                  pkg.popular
                    ? 'bg-brand-600 text-white border-brand-600 shadow-xl scale-100 lg:-translate-y-2'
                    : 'bg-white text-gray-900 border-brand-200/80 shadow-soft hover:border-brand-300'
                }`}
              >
                <div>
                  {pkg.popular && (
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider mb-4">
                      Most Popular Plan
                    </span>
                  )}
                  <h3 className="text-xl font-bold tracking-tight">
                    {pkg.title}
                  </h3>
                  <div className="flex items-baseline gap-1 mt-4">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight">{pkg.price}</span>
                    <span className={`text-xs ${pkg.popular ? 'text-purple-200' : 'text-gray-500'}`}>/{pkg.period}</span>
                  </div>
                  <p className={`text-xs sm:text-sm mt-3 ${pkg.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                    {pkg.desc}
                  </p>

                  <div className="mt-6 pt-5 border-t border-current/15 space-y-3">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${pkg.popular ? 'text-white' : 'text-emerald-500'}`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking(pkg.title)}
                  className={`mt-8 w-full py-3.5 rounded-2xl font-bold text-sm transition-all active:scale-95 ${
                    pkg.popular
                      ? 'bg-white text-brand-700 hover:bg-gray-100 shadow-md'
                      : 'bg-brand-600 text-white hover:bg-brand-700 shadow-xs'
                  }`}
                >
                  Choose {pkg.title}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical FAQs Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight mt-3">
              Veterinary Care FAQs
            </h2>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border-2 border-brand-200/80 bg-white overflow-hidden shadow-2xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-gray-900"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-brand-600 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
