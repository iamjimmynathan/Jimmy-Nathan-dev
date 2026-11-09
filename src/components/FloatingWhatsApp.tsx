import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip Card */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-emerald-500/40 shadow-xl text-xs text-white animate-in fade-in slide-in-from-right-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <div>
            <p className="font-bold text-emerald-400">Chat with Jimmy Nathan</p>
            <p className="text-slate-400 text-[11px]">Direct WhatsApp channel (+234 90 699 52829)</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={PERSONAL_INFO.socialLinks.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Direct WhatsApp message to Jimmy Nathan"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {/* Soft pulse glow behind button */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-emerald-500 opacity-40 animate-ping [animation-duration:3s]"
        />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 relative z-10 fill-slate-950" />
      </a>
    </div>
  );
};
