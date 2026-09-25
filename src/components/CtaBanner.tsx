import { ArrowUpRight, MessageSquare } from 'lucide-react';
import { GENERAL_CONTACT } from '../data/centersData';

interface CtaBannerProps {
  onRegisterClick: () => void;
}

export function CtaBanner({ onRegisterClick }: CtaBannerProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#0B251C] to-[#061610] text-[#FAF9F5] py-24 sm:py-28 overflow-hidden border-t border-[#B8892F]/20">
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#CFA049 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#CFA049]">
          Rejoignez l'Élite Artisanale & Technique
        </span>

        <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
          L'Avenir Appartient à Ceux <br />
          <span className="font-serif italic font-normal text-[#CFA049]">
            Qui Savent Faire.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-normal leading-relaxed">
          Inscrivez-vous pour la rentrée solennelle du <strong>05 octobre 2026</strong>. 
          Découvrez nos ateliers équipés à Porto-Novo, Cotonou ou Parakou et transformez votre passion en métier d'avenir.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onRegisterClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B8892F] hover:bg-[#9E7428] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all cursor-pointer"
          >
            <span>Candidater maintenant</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </button>

          <a
            href={`https://wa.me/${GENERAL_CONTACT.whatsappNumber}?text=${encodeURIComponent(
              "Bonjour ADONAI-FORMATION, je souhaite échanger directement avec un conseiller d'orientation."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#CFA049]" />
            <span>Échanger sur WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
