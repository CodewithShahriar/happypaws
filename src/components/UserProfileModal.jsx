import React from 'react';
import { X, LogOut, Heart, Calendar, ShieldCheck, ShoppingBag, ArrowUpRight, PawPrint } from 'lucide-react';

export default function UserProfileModal({ 
  isOpen, 
  onClose, 
  user, 
  onLogout,
  onOpenCart,
  onOpenBooking,
  onOpenAdopt
}) {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-gray-100 overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Profile Cover */}
        <div className="bg-gradient-to-r from-purple-700 via-brand-600 to-indigo-600 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <img
              src={user.avatar || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'}
              alt={user.name}
              className="w-16 h-16 rounded-2xl object-cover ring-4 ring-white/30 shadow-lg"
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {user.name}
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 text-[10px] font-bold">
                  Active
                </span>
              </div>
              <p className="text-xs text-purple-200">{user.email}</p>
              <div className="flex items-center gap-1.5 mt-1 text-[11px] text-purple-100 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                <span>{user.role || 'Verified Pet Guardian'}</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-white/15 text-center">
            <div className="bg-white/10 rounded-xl p-2 backdrop-blur-xs">
              <span className="block text-lg font-black">{user.savedPetsCount || 4}</span>
              <span className="text-[10px] uppercase font-bold text-purple-200">Saved Pets</span>
            </div>
            <div className="bg-white/10 rounded-xl p-2 backdrop-blur-xs">
              <span className="block text-lg font-black">{user.adoptionsCount || 1}</span>
              <span className="text-[10px] uppercase font-bold text-purple-200">Adoptions</span>
            </div>
            <div className="bg-white/10 rounded-xl p-2 backdrop-blur-xs">
              <span className="block text-lg font-black">{user.ordersCount || 2}</span>
              <span className="text-[10px] uppercase font-bold text-purple-200">Orders</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          
          {/* Active Adoption Application Card */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                <PawPrint className="w-3.5 h-3.5 text-brand-600" />
                <span>Active Adoption Application</span>
              </h4>
              <span className="text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                In Review
              </span>
            </div>
            <div className="p-3.5 bg-brand-50/50 rounded-2xl border border-brand-200/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=120&auto=format&fit=crop&q=80"
                  alt="Luna"
                  className="w-12 h-12 rounded-xl object-cover ring-2 ring-white shadow-xs"
                />
                <div>
                  <h5 className="text-sm font-bold text-gray-900 leading-tight">Luna</h5>
                  <p className="text-xs text-gray-500">Golden Retriever Pup • Shelter ID #HP-409</p>
                  <p className="text-[11px] text-brand-600 font-medium mt-0.5">Coordinator reviewing home setup</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onOpenAdopt) onOpenAdopt();
                }}
                className="p-2 text-brand-600 hover:bg-brand-100 rounded-xl transition-colors"
                title="View Adoption Status"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Pet Care Actions */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                if (onOpenBooking) onOpenBooking('Veterinary Clinical Care');
              }}
              className="p-3 rounded-2xl border border-gray-200 hover:border-brand-300 hover:bg-brand-50/40 transition-all text-left flex items-start gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Book Vet Visit</p>
                <p className="text-[10px] text-gray-500">Schedule checkup or clinic care</p>
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                if (onOpenCart) onOpenCart();
              }}
              className="p-3 rounded-2xl border border-gray-200 hover:border-brand-300 hover:bg-brand-50/40 transition-all text-left flex items-start gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">My Care Bag</p>
                <p className="text-[10px] text-gray-500">View items & checkout</p>
              </div>
            </button>
          </div>

          {/* Logout Action */}
          <div className="pt-2 border-t border-gray-100">
            <button
              type="button"
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="w-full py-2.5 px-4 text-xs font-bold text-red-600 hover:bg-red-50 rounded-xl transition-colors flex items-center justify-center gap-2 border border-red-200/60"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out of Account</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
