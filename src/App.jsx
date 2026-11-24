import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandPartners from './components/BrandPartners';
import AboutSection from './components/AboutSection';
import CompleteSolutions from './components/CompleteSolutions';
import FeaturedShop from './components/FeaturedShop';
import GuaranteedPeace from './components/GuaranteedPeace';
import JourneyCallout from './components/JourneyCallout';
import AdoptablePets from './components/AdoptablePets';
import Footer from './components/Footer';

// Modals
import CartDrawer from './components/CartDrawer';
import AdoptionModal from './components/AdoptionModal';
import BookingModal from './components/BookingModal';
import SearchModal from './components/SearchModal';
import StoryModal from './components/StoryModal';
import Toast from './components/Toast';

import { PETS, PRODUCTS } from './data/mockData';

export default function App() {
  // Cart State (initialize with 2 items for lively demo)
  const [cart, setCart] = useState([
    {
      id: PRODUCTS[0].id,
      name: PRODUCTS[0].name,
      price: PRODUCTS[0].price,
      quantity: 1,
      image: PRODUCTS[0].image
    },
    {
      id: PRODUCTS[3].id,
      name: PRODUCTS[3].name,
      price: PRODUCTS[3].price,
      quantity: 2,
      image: PRODUCTS[3].image
    }
  ]);

  // Modal States
  const [cartOpen, setCartOpen] = useState(false);
  const [adoptModalOpen, setAdoptModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(PETS[0]);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingServiceTitle, setBookingServiceTitle] = useState('Veterinary Clinical Care');
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [storyModalOpen, setStoryModalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Cart Handlers
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image
        }
      ];
    });

    setToast({
      title: "Added to Bag!",
      message: `${product.name} ($${product.price.toFixed(2)}) is now in your care bag.`
    });
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    setToast({
      title: "Item Removed",
      message: "The item has been removed from your care bag."
    });
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Pet Adoption Handlers
  const handleSelectPet = (pet) => {
    setSelectedPet(pet);
    setAdoptModalOpen(true);
  };

  const handleOpenAdoptGeneral = () => {
    const el = document.getElementById('adopt');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setSelectedPet(PETS[0]);
      setAdoptModalOpen(true);
    }
  };

  // Booking Handlers
  const handleOpenBooking = (serviceTitle) => {
    setBookingServiceTitle(serviceTitle || 'Veterinary Clinical Care');
    setBookingModalOpen(true);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-gray-900 font-sans selection:bg-brand-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenAdopt={handleOpenAdoptGeneral}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section (Image 7) */}
        <Hero
          onOpenAdopt={handleOpenAdoptGeneral}
          onOpenStory={() => setStoryModalOpen(true)}
        />

        {/* 2. Brand Partners Row (Image 7) */}
        <BrandPartners />

        {/* 3. About Section: Driven By Pure Compassion & Vets (Image 7 & 6) */}
        <AboutSection
          onOpenStory={() => setStoryModalOpen(true)}
        />

        {/* 4. Complete Solutions For Pets: Interactive Services (Image 6 & 2) */}
        <CompleteSolutions
          onOpenBooking={handleOpenBooking}
        />

        {/* 5. Featured Pet Care Essentials Shop */}
        <FeaturedShop
          onAddToCart={handleAddToCart}
        />

        {/* 6. Guaranteed Peace of Mind (Our Promise To You) */}
        <GuaranteedPeace
          onOpenAdopt={handleOpenAdoptGeneral}
        />

        {/* 7. Start A Beautiful Journey (Panoramic Pets Banner) */}
        <JourneyCallout
          onOpenAdopt={handleOpenAdoptGeneral}
        />

        {/* 8. Why Pet Owners Trust Us (Adoptable Pets Grid) */}
        <AdoptablePets
          onSelectPet={handleSelectPet}
        />
      </main>

      {/* 9. Modern Dark Footer with Puppy & Kitten */}
      <Footer
        onOpenAdopt={handleOpenAdoptGeneral}
        onOpenBooking={handleOpenBooking}
      />

      {/* Interactive Modals & Drawers */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <AdoptionModal
        isOpen={adoptModalOpen}
        onClose={() => setAdoptModalOpen(false)}
        initialPet={selectedPet}
        onComplete={(pet) => {
          setToast({
            title: "Application Received! 🐾",
            message: `Our shelter coordinator for ${pet.name} will reach out soon.`
          });
        }}
      />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialServiceTitle={bookingServiceTitle}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectPet={handleSelectPet}
        onAddToCart={handleAddToCart}
      />

      <StoryModal
        isOpen={storyModalOpen}
        onClose={() => setStoryModalOpen(false)}
      />

      <Toast
        toast={toast}
        onClose={() => setToast(null)}
      />
    </div>
  );
}
