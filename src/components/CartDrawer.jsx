import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart' | 'checkout' | 'success'
  const [paymentMethod, setPaymentMethod] = useState('gcash');
  const [formData, setFormData] = useState({
    name: 'Maria Santos',
    phone: '+63 917 123 4567',
    address: 'Unit 12B, Sapphire Tower, BGC, Taguig City',
    notes: 'Please leave with reception if not home.'
  });

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 1000 || subtotal === 0 ? 0 : 90;
  const total = subtotal + deliveryFee;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setCheckoutStep('success');
  };

  const handleFinish = () => {
    onClearCart();
    setCheckoutStep('cart');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-[#FAF7F2]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center text-white">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <h2 className="text-lg font-bold text-gray-900">
                {checkoutStep === 'cart' && `Your Care Bag (${cart.reduce((s, i) => s + i.quantity, 0)})`}
                {checkoutStep === 'checkout' && 'Express Checkout'}
                {checkoutStep === 'success' && 'Order Placed!'}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6">
            
            {/* Step 1: Cart Items */}
            {checkoutStep === 'cart' && (
              <>
                {cart.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-4">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">Your bag is empty</h3>
                    <p className="text-xs text-gray-500 mb-6">Discover nutritious treats and care essentials for your companions.</p>
                    <button
                      onClick={onClose}
                      className="px-5 py-2.5 bg-brand-600 text-white font-semibold text-xs rounded-full shadow-sm"
                    >
                      Explore Products
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 p-3 bg-[#FAF7F2] rounded-2xl border border-gray-100"
                      >
                        <div className="w-16 h-16 rounded-xl bg-white p-1 flex-shrink-0 flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-gray-900 truncate">
                            {item.name}
                          </h4>
                          <p className="text-xs text-brand-600 font-bold mb-2">
                            ₱{item.price.toFixed(2)}
                          </p>

                          <div className="flex items-center gap-3">
                            <div className="flex items-center border border-gray-200 bg-white rounded-lg">
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                className="p-1 text-gray-500 hover:text-brand-600"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2 text-xs font-bold text-gray-700">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                className="p-1 text-gray-500 hover:text-brand-600"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors p-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <div className="text-right font-bold text-sm text-gray-900">
                          ₱{(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Step 2: Checkout Form */}
            {checkoutStep === 'checkout' && (
              <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Delivery Address</label>
                  <textarea
                    rows={2}
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none resize-none"
                  />
                </div>

                {/* Payment Option */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Payment Method</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'gcash', label: 'GCash' },
                      { id: 'maya', label: 'Maya' },
                      { id: 'cod', label: 'Cash on Del.' }
                    ].map(p => (
                      <button
                        type="button"
                        key={p.id}
                        onClick={() => setPaymentMethod(p.id)}
                        className={`py-2 px-1 text-center rounded-xl text-xs font-bold border transition-all ${
                          paymentMethod === p.id
                            ? 'bg-brand-50 border-brand-500 text-brand-700'
                            : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <div className="bg-brand-50/70 p-3 rounded-xl text-[11px] text-brand-800">
                    💡 <strong>Rescue Support:</strong> 5% of this purchase goes directly to supplying nutrition for non-profit shelters.
                  </div>
                </div>
              </form>
            )}

            {/* Step 3: Success Screen */}
            {checkoutStep === 'success' && (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900">
                  Thank You for Your Order!
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed max-w-xs mx-auto">
                  We have received your order <strong>#HP-{Math.floor(100000 + Math.random() * 900000)}</strong>. A confirmation SMS and tracking details will be sent to <strong>{formData.phone}</strong>.
                </p>
                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-gray-100 text-left text-xs space-y-2 mt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Payment:</span>
                    <span className="font-bold text-gray-800 uppercase">{paymentMethod}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Total Paid:</span>
                    <span className="font-extrabold text-brand-600">₱{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Estimated Delivery:</span>
                    <span className="font-bold text-gray-800">Tomorrow, 10 AM - 2 PM</span>
                  </div>
                </div>
                <button
                  onClick={handleFinish}
                  className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-full shadow-sm text-sm"
                >
                  Continue Shopping
                </button>
              </div>
            )}

          </div>

          {/* Footer Totals & Action */}
          {checkoutStep !== 'success' && cart.length > 0 && (
            <div className="p-6 border-t border-gray-100 bg-[#FAF7F2] space-y-3">
              <div className="space-y-1.5 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-gray-900">₱{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Metro Manila Delivery</span>
                  <span>{deliveryFee === 0 ? <strong className="text-emerald-600">FREE</strong> : `₱${deliveryFee.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-gray-900 pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span className="text-brand-600">₱{total.toFixed(2)}</span>
                </div>
              </div>

              {checkoutStep === 'cart' ? (
                <button
                  onClick={() => setCheckoutStep('checkout')}
                  className="w-full py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm rounded-full shadow-purple-glow flex items-center justify-center gap-2 transition-all"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('cart')}
                    className="w-1/3 py-3 bg-white border border-gray-200 text-gray-700 font-semibold text-xs rounded-full"
                  >
                    Back to Bag
                  </button>
                  <button
                    type="submit"
                    form="checkout-form"
                    className="w-2/3 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-sm rounded-full shadow-sm"
                  >
                    Confirm & Pay ₱{total.toFixed(2)}
                  </button>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
