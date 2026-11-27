import React from 'react';
import { 
  Heart, ShieldCheck, Stethoscope, SearchCode, Building2, 
  BookOpen, Users, Award, CheckCircle2, ArrowRight, Sparkles, 
  MapPin, PhoneCall, Star 
} from 'lucide-react';

export default function AboutPage({ onOpenAdopt, onNavigate }) {
  const leadershipTeam = [
    {
      name: "Dr. Patricia Santos, DVM",
      role: "Chief Veterinary Officer",
      bio: "14+ years in shelter medicine, soft-tissue surgery, and anti-rabies vaccination advocacy.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80",
      badge: "Clinical Lead"
    },
    {
      name: "Dr. Miguel Ramos, DVM",
      role: "Senior Surgeon & Rehab Specialist",
      bio: "Specializing in canine orthopedics, physical trauma recovery, and rescue pet rehabilitation.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80",
      badge: "Surgery & Rehab"
    },
    {
      name: "Elena Cruz",
      role: "Director of Shelter Partnerships",
      bio: "Connecting over 50+ provincial non-profit animal sanctuaries with verified foster networks.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
      badge: "Shelter Operations"
    },
    {
      name: "Marco Valerio",
      role: "Humane Education & Foster Care",
      bio: "Leads community pet care workshops, school outreach, and responsible pet parenthood programs.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      badge: "Community Lead"
    }
  ];

  const milestones = [
    { number: "15,400+", label: "Happy Adoptions", sub: "Verified forever homes nationwide" },
    { number: "99.2%", label: "Health Clearance", sub: "Complete vaccination & deworming" },
    { number: "50+", label: "Partner Shelters", sub: "Free software & rescue support" },
    { number: "24/7", label: "Vet Advisory", sub: "Continuous post-adoption care" }
  ];

  const coreValues = [
    {
      icon: SearchCode,
      title: "Smart Lifestyle Matching",
      desc: "Our intelligent pairing algorithm evaluates household activity, condo regulations, and resident habits to ensure lasting companionship with zero surrender rates."
    },
    {
      icon: Stethoscope,
      title: "Healthcare First Guarantee",
      desc: "Every single pet undergoes thorough physical exams, complete anti-rabies vaccination courses, spay/neuter operations, and digital health passports before adoption."
    },
    {
      icon: Building2,
      title: "Free Shelter Empowerment",
      desc: "We provide local grassroots rescue shelters with 100% free digital record-keeping tools, public listing portals, and subsidized veterinary clinical resources."
    },
    {
      icon: BookOpen,
      title: "Lifelong Education & Hotline",
      desc: "Adopting is only day one. Our dedicated care specialists and licensed vet hotline guide new pet parents through training, nutrition, and wellness milestones."
    }
  ];

  return (
    <div className="py-6 sm:py-10 lg:py-12">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 space-y-12 sm:space-y-20 lg:space-y-24">
        
        {/* Hero Banner with Blended Visual Stage */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-brand-50 via-white to-purple-50/40 border-2 border-brand-200/80 shadow-soft overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Column: Heading & Content */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-16 z-10 relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5">
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Our Compassionate Mission</span>
              </div>
              
              <h1 className="text-2xl sm:text-4xl lg:text-[3.25rem] font-black text-[#111827] tracking-tight leading-[1.15]">
                Every Rescued Pet Deserves A Safe, Loving Home.
              </h1>
              
              <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed font-normal max-w-xl">
                HappyPaws is a modern animal welfare and adoption platform bridging certified non-profit shelters, passionate rescue advocates, and prospective pet parents through ethical veterinary care and smart matching.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={onOpenAdopt}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-brand-500/25 transition-all flex items-center justify-center gap-2 group active:scale-95 cursor-pointer"
                >
                  <span>Browse Rescue Pets</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-xs sm:text-sm border-2 border-gray-200 hover:border-brand-300 transition-all active:scale-95 cursor-pointer text-center"
                >
                  Our Veterinary Clinic
                </button>
              </div>
            </div>

            {/* Right Column: Blended Image with Soft Gradient Mask */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-full min-h-[260px] sm:min-h-[360px] lg:min-h-[440px] overflow-hidden flex items-center justify-center">
              {/* Seamless Left Fade Gradient (desktop) */}
              <div className="absolute inset-y-0 left-0 w-24 sm:w-36 z-10 pointer-events-none hidden lg:block bg-gradient-to-r from-white via-white/80 to-transparent" />
              {/* Top fade for mobile */}
              <div className="absolute inset-x-0 top-0 h-16 z-10 pointer-events-none lg:hidden bg-gradient-to-b from-white to-transparent" />

              <img
                src="/images/about_hero_banner.jpg"
                onError={(e) => { e.currentTarget.src = "/images/about_vet_care.jpg"; }}
                alt="Compassionate Veterinary Care"
                className="w-full h-full object-cover object-center lg:object-right group-hover:scale-105 transition-transform duration-700"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 95%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 95%, transparent 100%)'
                }}
              />

              {/* Floating Quality Badge */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 bg-white/95 backdrop-blur-md border border-brand-200/80 rounded-2xl p-2.5 sm:p-3 shadow-lg flex items-center gap-2 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center shrink-0">
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-bold text-gray-900 leading-tight">100% Compassionate</p>
                  <p className="text-[9px] sm:text-[10px] text-brand-600 font-semibold">Verified Clinical Standard</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Milestones Numbers Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {milestones.map((item, index) => (
            <div 
              key={index}
              className="p-4 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border-2 border-brand-200/80 shadow-soft text-center group hover:border-brand-400 hover:-translate-y-1 transition-all"
            >
              <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-brand-600 tracking-tight">
                {item.number}
              </p>
              <p className="mt-1 sm:mt-2 text-xs sm:text-base font-bold text-gray-900">
                {item.label}
              </p>
              <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-gray-500">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Story Section: How We Began */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-brand-200 shadow-xl">
              <img
                src="/images/about_vet_care.jpg"
                alt="Veterinarian with rescued companion"
                className="w-full h-64 sm:h-[400px] lg:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5 sm:p-8">
                <div className="text-white">
                  <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider px-2.5 py-1 bg-brand-600 rounded-full">
                    Ethical Rescue Standard
                  </span>
                  <p className="text-sm sm:text-lg font-bold mt-2">
                    "Compassion is only complete when backed by medical excellence."
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-200 mt-1">
                    — Dr. Patricia Santos, Chief Veterinary Officer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
              Our Journey
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight leading-snug">
              Transforming How Rescues Meet Loving Families
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
              Founded in 2021 by a dedicated coalition of shelter veterinarians and rescue volunteers, HappyPaws emerged out of a simple, urgent observation: shelter adoption was held back by paperwork, lack of health transparency, and fragmented communication.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
              We set out to build a modern, dignified platform where every shelter pet receives professional clinical care, digital vaccination records, and a transparent matching process so pet parents can adopt with confidence and unconditional love.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-brand-200">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                <span className="text-xs font-bold text-gray-800">100% Spay & Neuter Mandate</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-brand-200">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                <span className="text-xs font-bold text-gray-800">Lifelong Advisory Support</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-brand-200">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                <span className="text-xs font-bold text-gray-800">Verified Rescue Partners</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-brand-200">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                <span className="text-xs font-bold text-gray-800">Transparent Digital Records</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
              Our Core Pillars
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#111827] tracking-tight mt-3">
              The Standards That Guide Every Rescue
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-2">
              Built on transparency, scientific clinical standards, and empathy for both pets and humans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div 
                  key={idx}
                  className="p-7 sm:p-9 rounded-3xl bg-white border-2 border-brand-200/80 shadow-soft hover:border-brand-400 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 group-hover:bg-brand-600 text-brand-600 group-hover:text-white flex items-center justify-center transition-colors mb-5">
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-2.5">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership & Medical Advisory Board */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
              Medical & Operations Team
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#111827] tracking-tight mt-3">
              Led By Licensed Veterinary Professionals
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-2">
              Our leadership board pairs clinical expertise with decades of animal sanctuary leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {leadershipTeam.map((member, idx) => (
              <div 
                key={idx}
                className="rounded-3xl bg-white border-2 border-brand-200/80 overflow-hidden shadow-soft hover:border-brand-400 hover:-translate-y-1.5 transition-all group"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-brand-700 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                    {member.badge}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-brand-600 mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed mt-2.5">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-[#111827] text-white p-6 sm:p-10 lg:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-brand-300 text-xs font-bold uppercase tracking-wider">
              Get Involved Today
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              Ready to Give a Rescue Pet a Loving Forever Home?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Every adoption directly frees up shelter space, enabling our veterinary teams to rescue and rehabilitate another companion in need.
            </p>
            <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={onOpenAdopt}
                className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                Meet Adoptable Pets
              </button>
              <button
                onClick={() => onNavigate('stories')}
                className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all active:scale-95 cursor-pointer"
              >
                Read Rescue Stories
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
