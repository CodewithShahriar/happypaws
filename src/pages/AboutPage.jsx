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
    <div className="py-8 sm:py-12">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 space-y-16 sm:space-y-24">
        
        {/* Hero Banner */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-brand-50 via-white to-purple-50/40 p-8 sm:p-14 lg:p-20 border-2 border-brand-200/80 shadow-soft overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-brand-200/40 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-5">
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Our Compassionate Mission</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#111827] tracking-tight leading-[1.15]">
              Every Rescued Pet Deserves A Safe, Loving Home.
            </h1>
            
            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              HappyPaws is a modern animal welfare and adoption platform bridging certified non-profit shelters, passionate rescue advocates, and prospective pet parents through ethical veterinary care and smart matching.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAdopt}
                className="px-7 py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md hover:shadow-brand-500/25 transition-all flex items-center gap-2 group active:scale-95"
              >
                <span>Browse Rescue Pets</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="px-7 py-3.5 rounded-2xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm border-2 border-gray-200 hover:border-brand-300 transition-all active:scale-95"
              >
                Our Veterinary Clinic
              </button>
            </div>
          </div>
        </div>

        {/* Milestones Numbers Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {milestones.map((item, index) => (
            <div 
              key={index}
              className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-brand-200/80 shadow-soft text-center group hover:border-brand-400 hover:-translate-y-1 transition-all"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-600 tracking-tight">
                {item.number}
              </p>
              <p className="mt-2 text-sm sm:text-base font-bold text-gray-900">
                {item.label}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Story Section: How We Began */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-brand-200 shadow-xl">
              <img
                src="/images/about_vet_care.jpg"
                alt="Veterinarian with rescued companion"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white">
                  <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-1 bg-brand-600 rounded-full">
                    Ethical Rescue Standard
                  </span>
                  <p className="text-lg font-bold mt-2">
                    "Compassion is only complete when backed by medical excellence."
                  </p>
                  <p className="text-xs text-gray-200 mt-1">
                    — Dr. Patricia Santos, Chief Veterinary Officer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#111827] tracking-tight leading-snug">
              Transforming How Rescues Meet Loving Families
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Founded in 2021 by a dedicated coalition of shelter veterinarians and rescue volunteers, HappyPaws emerged out of a simple, urgent observation: shelter adoption was held back by paperwork, lack of health transparency, and fragmented communication.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We set out to build a modern, dignified platform where every shelter pet receives professional clinical care, digital vaccination records, and a transparent matching process so pet parents can adopt with confidence and unconditional love.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-brand-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-xs font-bold text-gray-800">100% Spay & Neuter Mandate</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-brand-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-xs font-bold text-gray-800">Lifelong Advisory Support</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-brand-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-xs font-bold text-gray-800">Verified Rescue Partners</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-brand-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
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
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-[#111827] text-white p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-brand-300 text-xs font-bold uppercase tracking-wider">
              Get Involved Today
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              Ready to Give a Rescue Pet a Loving Forever Home?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Every adoption directly frees up shelter space, enabling our veterinary teams to rescue and rehabilitate another companion in need.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenAdopt}
                className="px-7 py-3 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                Meet Adoptable Pets
              </button>
              <button
                onClick={() => onNavigate('stories')}
                className="px-7 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all active:scale-95"
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
