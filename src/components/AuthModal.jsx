import React, { useState } from 'react';
import { X, Mail, Lock, User, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const demoUser = {
      name: name.trim() || (isRegister ? 'Happy Pet Lover' : 'Sarah Jenkins'),
      email: email.trim() || 'sarah.jenkins@happypaws.org',
      role: 'Verified Pet Guardian',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      adoptionsCount: 1,
      ordersCount: 2,
      savedPetsCount: 4
    };
    onLoginSuccess(demoUser);
    onClose();
  };

  const handleQuickDemoLogin = (roleName, roleEmail, avatarUrl) => {
    const demoUser = {
      name: roleName,
      email: roleEmail,
      role: 'Verified Pet Guardian',
      avatar: avatarUrl,
      adoptionsCount: 1,
      ordersCount: 3,
      savedPetsCount: 4
    };
    onLoginSuccess(demoUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-md w-full shadow-2xl border border-gray-100 overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header decoration */}
        <div className="bg-gradient-to-r from-brand-600 to-purple-600 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </span>
            <span className="text-xs uppercase font-bold tracking-wider text-purple-100">
              HappyPaws Community
            </span>
          </div>
          <h3 className="text-2xl font-black tracking-tight">
            {isRegister ? 'Join HappyPaws' : 'Welcome Back'}
          </h3>
          <p className="text-xs sm:text-sm text-purple-100/90 mt-1">
            {isRegister 
              ? 'Create a free account to adopt pets, save favorites, and track care orders.'
              : 'Sign in to access your adoption applications, wishlist, and bookings.'}
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-gray-100 bg-gray-50/70 p-1.5">
          <button
            type="button"
            onClick={() => setIsRegister(false)}
            className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
              !isRegister 
                ? 'bg-white text-brand-600 shadow-xs' 
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setIsRegister(true)}
            className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
              isRegister 
                ? 'bg-white text-brand-600 shadow-xs' 
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {isRegister && (
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-gray-900"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-gray-900"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                Password
              </label>
              {!isRegister && (
                <button
                  type="button"
                  onClick={() => alert("Password reset link sent to demo email!")}
                  className="text-xs font-semibold text-brand-600 hover:text-brand-700 hover:underline"
                >
                  Forgot?
                </button>
              )}
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-gray-900"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none text-xs text-gray-600 font-medium">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded text-brand-600 focus:ring-brand-500 w-4 h-4"
              />
              <span>Remember me for 30 days</span>
            </label>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-md hover:shadow-brand-500/20 transition-all flex items-center justify-center gap-2 group text-sm"
          >
            <span>{isRegister ? 'Create Free Account' : 'Sign In to Account'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Divider */}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-3 text-xs uppercase tracking-wider text-gray-400 font-bold">
              Or 1-Click Demo Login
            </span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* Quick Demo Login Cards */}
          <div className="space-y-2">
            <button
              type="button"
              onClick={() => handleQuickDemoLogin(
                'Sarah Jenkins',
                'sarah.jenkins@happypaws.org',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'
              )}
              className="w-full flex items-center justify-between p-2.5 rounded-xl border border-brand-200 bg-brand-50/50 hover:bg-brand-100/60 transition-colors text-left"
            >
              <div className="flex items-center gap-2.5">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
                  alt="Sarah Jenkins"
                  className="w-7 h-7 rounded-full object-cover ring-2 ring-brand-300"
                />
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-tight">Sarah Jenkins</p>
                  <p className="text-[10px] text-brand-700">Demo Pet Parent • 1 Saved Adoption</p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-brand-600 bg-white px-2 py-0.5 rounded-md border border-brand-200">
                Log In
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleQuickDemoLogin(
                'Dr. Alex Vance',
                'alex.vet@happypaws.org',
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
              )}
              className="w-full flex items-center justify-between p-2.5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
            >
              <div className="flex items-center gap-2.5">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                  alt="Dr. Alex Vance"
                  className="w-7 h-7 rounded-full object-cover ring-2 ring-gray-300"
                />
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-tight">Dr. Alex Vance</p>
                  <p className="text-[10px] text-gray-500">Certified Veterinary Care Partner</p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-gray-700 bg-white px-2 py-0.5 rounded-md border border-gray-200">
                Log In
              </span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
