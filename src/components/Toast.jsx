import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3500);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up flex items-center gap-3 bg-gray-900 text-white px-5 py-3.5 rounded-2xl shadow-xl max-w-md border border-gray-800">
      <div className="w-7 h-7 rounded-xl bg-brand-600 flex items-center justify-center text-white flex-shrink-0">
        <CheckCircle className="w-4 h-4" />
      </div>
      <div className="text-xs flex-1">
        <p className="font-bold text-white">{toast.title || 'Success'}</p>
        <p className="text-gray-300">{toast.message}</p>
      </div>
      <button onClick={onClose} className="text-gray-400 hover:text-white p-1">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
