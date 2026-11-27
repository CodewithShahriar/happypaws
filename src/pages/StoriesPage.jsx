import React, { useState } from 'react';
import { 
  Heart, Play, Sparkles, MessageCircle, Share2, 
  CheckCircle2, ArrowRight, Quote, Star, Send 
} from 'lucide-react';

export default function StoriesPage({ onOpenStory, onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [submitted, setSubmitted] = useState(false);
  const [petName, setPetName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [storyText, setStoryText] = useState('');

  const stories = [
    {
      id: "story-1",
      title: "How Bambi Found His Forever Home in BGC",
      pet: "Bambi",
      breed: "Native Mixed Breed / Aspin",
      category: "Dogs",
      adopter: "Carlos & Bea Tan",
      location: "Bonifacio Global City",
      timeSince: "Adopted 1.5 Years Ago",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80",
      quote: "When we saw Bambi on HappyPaws, his gentle eyes and vaccinated profile made it so easy. He's now our favorite marathon training buddy!",
      fullStory: "Bambi was found wandering near a construction site before being rescued by the San Pedro Shelter. Through HappyPaws' digital matchmaking, Carlos and Bea were paired with him based on their active weekend lifestyle.",
      hasVideo: true
    },
    {
      id: "story-2",
      title: "From Shelter Stray to Office Boss: Milo's Story",
      pet: "Milo",
      breed: "Domestic Short Hair / Puspin",
      category: "Cats",
      adopter: "Elena Mendoza",
      location: "Makati City",
      timeSince: "Adopted 8 Months Ago",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80",
      quote: "Milo purrs through every Zoom call. HappyPaws delivered all his initial medical records right to my phone, no fuss at all.",
      fullStory: "Elena lived alone in an apartment and wanted a companion for calm evenings. Milo's friendly personality and indoor-cat clearance was the perfect match.",
      hasVideo: false
    },
    {
      id: "story-3",
      title: "A Second Chance for Rocky: The 3-Legged Champion",
      pet: "Rocky",
      breed: "Golden Retriever Mix",
      category: "Dogs",
      adopter: "Mark & Sarah De Leon",
      location: "Alabang",
      timeSince: "Adopted 2 Years Ago",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&auto=format&fit=crop&q=80",
      quote: "His disability never slowed him down for a second. The HappyPaws veterinary rehab team guided us through joint care and nutrition seamlessly.",
      fullStory: "Rocky survived an automobile accident before receiving emergency orthopedic care from Dr. Miguel Ramos. Today he hikes trails and brings endless joy to the De Leon household.",
      hasVideo: true
    },
    {
      id: "story-4",
      title: "The Quiet Elegance of Snowball",
      pet: "Snowball",
      breed: "Persian Long Hair",
      category: "Cats",
      adopter: "Leticia Ramos",
      location: "Quezon City",
      timeSince: "Adopted 1 Year Ago",
      image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&auto=format&fit=crop&q=80",
      quote: "As a retired teacher, I needed a gentle soul. Snowball curls up right next to my rocking chair every afternoon while I read.",
      fullStory: "Surrendered after her elderly owner passed away, Snowball was fostered until Leticia saw her profile on HappyPaws. They are completely inseparable.",
      hasVideo: false
    },
    {
      id: "story-5",
      title: "Two Rescued Siblings Who Refused to Separate",
      pet: "Pip & Squeak",
      breed: "Tabby Kittens",
      category: "Cats",
      adopter: "The Gomez Family",
      location: "Pasig City",
      timeSince: "Adopted 6 Months Ago",
      image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&auto=format&fit=crop&q=80",
      quote: "We originally went in to adopt one kitten, but seeing how closely they slept together, we adopted both! Best decision our family ever made.",
      fullStory: "Found in a cardboard box during monsoon rains, these siblings were nursed back to health by shelter volunteers and placed in a bonded adoption.",
      hasVideo: true
    },
    {
      id: "story-6",
      title: "Rex: From Timid Guardian to Gentle Family Protector",
      pet: "Rex",
      breed: "German Shepherd",
      category: "Dogs",
      adopter: "Major Allan Reyes (Ret.)",
      location: "Mandaluyong",
      timeSince: "Adopted 10 Months Ago",
      image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=600&auto=format&fit=crop&q=80",
      quote: "He was timid at first, but with the free behavioral coaching sessions provided by HappyPaws, his noble loyalty truly blossomed.",
      fullStory: "Rex required patient desensitization after shelter confinement. Today he is a confident, obedient, and profoundly devoted companion.",
      hasVideo: false
    }
  ];

  const handleStorySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const filtered = activeFilter === 'All' 
    ? stories 
    : stories.filter(s => s.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <div className="py-8 sm:py-12">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 space-y-16 sm:space-y-24">
        
        {/* Hero Banner with Blended Stories Image */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-purple-50/70 via-white to-amber-50/50 border-2 border-brand-200/80 shadow-soft overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-14 xl:p-16 z-10 relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5">
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Real Adoptions • Real Love</span>
              </div>
              
              <h1 className="text-2xl sm:text-4xl lg:text-[3.15rem] font-black text-[#111827] tracking-tight leading-[1.15]">
                Heartwarming Stories From Rescued to Loved.
              </h1>
              
              <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed font-normal max-w-xl">
                Every adoption is a victory of compassion over hardship. Read real accounts from families who opened their hearts and homes to HappyPaws shelter companions.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  onClick={onOpenStory}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-brand-500/25 transition-all flex items-center justify-center gap-2 group active:scale-95 cursor-pointer text-center"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Watch Video Showcase</span>
                </button>
                <button
                  onClick={() => onNavigate('adopt')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white hover:bg-gray-50 text-gray-800 font-bold text-xs sm:text-sm border-2 border-gray-200 hover:border-brand-300 transition-all active:scale-95 cursor-pointer text-center"
                >
                  Start Your Own Story
                </button>
              </div>
            </div>

            {/* Right Column: Vivid Family Image with Clean Left Visibility */}
            <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[460px] overflow-hidden flex items-center justify-center">
              {/* Very subtle edge touch to soften boundary */}
              <div className="absolute inset-y-0 left-0 w-8 sm:w-12 z-10 pointer-events-none hidden lg:block bg-gradient-to-r from-white/40 to-transparent" />

              <img
                src="/images/stories_hero_banner.jpg"
                onError={(e) => { e.currentTarget.src = "/images/journey_friends_top.jpg"; }}
                alt="Happy Family with Rescued Companion"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 98%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 98%, transparent 100%)'
                }}
              />

              {/* Floating Quality Badge */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 bg-white/95 backdrop-blur-md border border-brand-200/80 rounded-2xl p-2.5 sm:p-3 shadow-lg flex items-center gap-2 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-bold text-gray-900 leading-tight">15,400+ Families</p>
                  <p className="text-[9px] sm:text-[10px] text-purple-600 font-semibold">100% Happily Settled</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-3xl font-black text-[#111827] tracking-tight">
              Community Adoption Tales
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Select a category to explore inspiring journeys of hope and healing.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-gray-100/80 p-1.5 rounded-2xl overflow-x-auto scrollbar-none self-start sm:self-auto">
            {['All', 'Dogs', 'Cats'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-white text-brand-600 shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {cat === 'All' ? 'All Stories' : `${cat} Stories`}
              </button>
            ))}
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8">
          {filtered.map(story => (
            <div
              key={story.id}
              className="rounded-3xl bg-white border-2 border-brand-200/80 overflow-hidden shadow-soft hover:border-brand-400 hover:-translate-y-1.5 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image & Video Trigger */}
                <div className="h-52 sm:h-60 relative overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs text-brand-700 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                    {story.breed}
                  </div>
                  {story.hasVideo && (
                    <button
                      onClick={onOpenStory}
                      className="absolute bottom-3.5 right-3.5 bg-brand-600/90 hover:bg-brand-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-xs flex items-center gap-1.5 transition-all hover:scale-105 cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Watch Video</span>
                    </button>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between text-xs text-gray-400 font-semibold mb-2">
                    <span>{story.location}</span>
                    <span className="text-brand-600 font-bold">{story.timeSince}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                    {story.title}
                  </h3>

                  {/* Quote block */}
                  <div className="mt-3 p-3 sm:p-3.5 rounded-2xl bg-brand-50/60 border border-brand-100 text-xs text-gray-700 italic relative">
                    <Quote className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-400 inline mr-1 opacity-60" />
                    "{story.quote}"
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {story.fullStory}
                  </p>
                </div>
              </div>

              {/* Adopter Footer */}
              <div className="p-5 sm:p-6 pt-0 border-t border-gray-100 flex items-center justify-between mt-3 sm:mt-4">
                <div>
                  <span className="text-[10px] text-gray-400 font-semibold uppercase block">Adopters</span>
                  <span className="text-xs font-bold text-gray-900">{story.adopter}</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Adopter</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Share Your Story Form */}
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-white border-2 border-brand-200/80 p-6 sm:p-10 lg:p-14 shadow-soft">
          <div className="max-w-2xl mx-auto text-center mb-6 sm:mb-8">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
              Community Voices
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight mt-3">
              Did You Adopt Through HappyPaws?
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Share your pet's milestone or transformation. Inspire another family to choose adoption.
            </p>
          </div>

          {submitted ? (
            <div className="max-w-md mx-auto text-center p-6 sm:p-8 bg-emerald-50 rounded-3xl border border-emerald-200 text-emerald-800 space-y-2">
              <CheckCircle2 className="w-9 h-9 sm:w-10 sm:h-10 mx-auto text-emerald-600" />
              <h4 className="text-base sm:text-lg font-bold">Thank You For Sharing! 🐾</h4>
              <p className="text-xs text-emerald-700">
                Our community coordinator will review your heartwarming story and feature it on our social feeds.
              </p>
            </div>
          ) : (
            <form onSubmit={handleStorySubmit} className="max-w-xl mx-auto space-y-3.5 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Pet's Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Toby"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    className="w-full px-3.5 sm:px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-brand-500 focus:bg-white text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maria Santos"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full px-3.5 sm:px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-brand-500 focus:bg-white text-gray-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Your Happy Tail Story
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="How has your companion changed your life? Share your favorite memories..."
                  value={storyText}
                  onChange={(e) => setStoryText(e.target.value)}
                  className="w-full px-3.5 sm:px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-brand-500 focus:bg-white text-gray-900"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 sm:py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 text-xs sm:text-sm cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Your Happy Tale</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
