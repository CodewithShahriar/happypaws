import React from 'react';
import Hero from '../components/Hero';
import BrandPartners from '../components/BrandPartners';
import AboutSection from '../components/AboutSection';
import CompleteSolutions from '../components/CompleteSolutions';
import FeaturedShop from '../components/FeaturedShop';
import GuaranteedPeace from '../components/GuaranteedPeace';
import JourneyCallout from '../components/JourneyCallout';
import AdoptablePets from '../components/AdoptablePets';

export default function HomePage({
  onOpenAdopt,
  onOpenStory,
  onOpenBooking,
  onAddToCart,
  onSelectPet,
  onNavigate
}) {
  return (
    <div>
      {/* 1. Hero Section */}
      <Hero
        onOpenAdopt={onOpenAdopt}
        onOpenStory={onOpenStory}
      />

      {/* 2. Brand Partners Row */}
      <BrandPartners />

      {/* 3. About Section: Driven By Pure Compassion & Vets */}
      <AboutSection onOpenAdopt={onOpenAdopt} />

      {/* 4. Complete Healthcare Solutions */}
      <CompleteSolutions onOpenBooking={onOpenBooking} />

      {/* 5. Featured Pet Care Essentials Shop */}
      <FeaturedShop onAddToCart={onAddToCart} />

      {/* 6. Guaranteed Peace of Mind Section */}
      <GuaranteedPeace onOpenBooking={onOpenBooking} />

      {/* 7. Panoramic Journey Callout Banner */}
      <JourneyCallout
        onOpenAdopt={onOpenAdopt}
        onOpenStory={onOpenStory}
      />

      {/* 8. Adoptable Pets Directory */}
      <AdoptablePets
        onSelectPet={onSelectPet}
        onOpenAdopt={onOpenAdopt}
      />
    </div>
  );
}
