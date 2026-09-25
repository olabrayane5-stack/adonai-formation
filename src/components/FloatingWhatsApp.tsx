import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { GENERAL_CONTACT } from '../data/centersData';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${GENERAL_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    "Bonjour ADONAI-FORMATION, je souhaite avoir des informations sur les inscriptions pour la rentrée du 05 octobre 2026."
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 no-print">
      {/* Tooltip d'aide discrète */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-medium py-2 px-3.5 rounded-2xl shadow-xl border border-slate-200 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          <span>Une question ? Discutez avec le centre sur WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5"
            aria-label="Fermer l'aide"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Bouton WhatsApp flottant */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-400/50"
        aria-label="Contacter le secrétariat sur WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current shrink-0" />
        <span className="hidden sm:inline text-xs font-extrabold uppercase tracking-wider">
          Discuter sur WhatsApp
        </span>
      </a>
    </div>
  );
}
