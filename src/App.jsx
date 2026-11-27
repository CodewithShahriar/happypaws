import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import AnimatedBackground from './components/AnimatedBackground';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import AdoptPage from './pages/AdoptPage';
import ShopPage from './pages/ShopPage';
import StoriesPage from './pages/StoriesPage';

// Modals
import CartDrawer from './components/CartDrawer';
import AdoptionModal from './components/AdoptionModal';
import BookingModal from './components/BookingModal';
import SearchModal from './components/SearchModal';
import StoryModal from './components/StoryModal';
import AuthModal from './components/AuthModal';
import UserProfileModal from './components/UserProfileModal';
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
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [toast, setToast] = useState(null);

  // Active Multi-Page Navigation State ('home' | 'about' | 'services' | 'adopt' | 'shop' | 'stories')
  const [activePage, setActivePage] = useState(() => {
    const rawHash = window.location.hash.replace('#/', '').replace('#', '');
    if (['home', 'about', 'services', 'adopt', 'shop', 'stories'].includes(rawHash)) {
      return rawHash;
    }
    return 'home';
  });

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.location.hash = `#/${pageId}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#/', '').replace('#', '');
      if (['home', 'about', 'services', 'adopt', 'shop', 'stories'].includes(rawHash)) {
        setActivePage(rawHash);
        window.scrollTo({ top: 0, behavior: 'instant' });
        if (lenisRef.current) {
          lenisRef.current.scrollTo(0, { immediate: true });
        }
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Lenis Smooth Scroll Instance
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.8,
      infinite: false,
    });
    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Smooth scroll for in-page anchor links
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.length > 1) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            lenis.scrollTo(target, { offset: -60, duration: 1.2 });
          }
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Pause Lenis scrolling when modals are open
  const isAnyModalOpen = cartOpen || adoptModalOpen || bookingModalOpen || searchModalOpen || storyModalOpen || authModalOpen || profileModalOpen;
  useEffect(() => {
    if (lenisRef.current) {
      if (isAnyModalOpen) {
        lenisRef.current.stop();
      } else {
        lenisRef.current.start();
      }
    }
  }, [isAnyModalOpen]);

  // Auth Handlers
  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    setToast({
      title: `Welcome, ${user.name.split(' ')[0]}! 🐾`,
      message: "You are signed in to your HappyPaws account."
    });
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setToast({
      title: "Signed Out",
      message: "You have signed out of your HappyPaws account."
    });
  };

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
    handleNavigate('adopt');
  };

  // Booking Handlers
  const handleOpenBooking = (serviceTitle) => {
    setBookingServiceTitle(serviceTitle || 'Veterinary Clinical Care');
    setBookingModalOpen(true);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-gray-900 font-sans selection:bg-brand-500 selection:text-white relative">
      {/* Interactive Custom Cursor Follower Effect */}
      <CustomCursor />

      {/* Smooth Ambient Moving Background with Floating Pastel Orbs and Pet Doodles */}
      <AnimatedBackground />

      {/* Top Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenAdopt={handleOpenAdoptGeneral}
        onOpenBooking={() => handleOpenBooking()}
        user={currentUser}
        onOpenAuth={() => setAuthModalOpen(true)}
        onOpenProfile={() => setProfileModalOpen(true)}
        onLogout={handleLogout}
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      {/* Main Content Pages */}
      <main>
        {activePage === 'home' && (
          <HomePage
            onOpenAdopt={handleOpenAdoptGeneral}
            onOpenStory={() => setStoryModalOpen(true)}
            onOpenBooking={handleOpenBooking}
            onAddToCart={handleAddToCart}
            onSelectPet={handleSelectPet}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onOpenAdopt={handleOpenAdoptGeneral}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onOpenBooking={handleOpenBooking}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'adopt' && (
          <AdoptPage
            onSelectPet={handleSelectPet}
            onOpenAdopt={handleOpenAdoptGeneral}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'shop' && (
          <ShopPage
            onAddToCart={handleAddToCart}
            onOpenCart={() => setCartOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'stories' && (
          <StoriesPage
            onOpenStory={() => setStoryModalOpen(true)}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Modern Dark Footer with Puppy & Kitten */}
      <Footer
        onOpenAdopt={handleOpenAdoptGeneral}
        onOpenBooking={handleOpenBooking}
        onNavigate={handleNavigate}
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
        onNavigate={handleNavigate}
      />

      <StoryModal
        isOpen={storyModalOpen}
        onClose={() => setStoryModalOpen(false)}
      />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <UserProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        user={currentUser}
        onLogout={handleLogout}
        onOpenCart={() => setCartOpen(true)}
        onOpenBooking={handleOpenBooking}
        onOpenAdopt={handleOpenAdoptGeneral}
      />

      <Toast
        toast={toast}
        onClose={() => setToast(null)}
      />
    </div>
  );
}
