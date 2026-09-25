import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { GENERAL_CONTACT } from '../data/centersData';
import { IMAGES } from '../assets/images';
import { AppPage } from './Header';

interface FooterProps {
  onNavigate?: (page: AppPage) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (page: AppPage) => {
    if (onNavigate) {
      onNavigate(page);
    }
    scrollToTop();
  };

  return (
    <footer className="bg-[#12162A] text-white pt-16 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3.8 Grille : 3 colonnes côte à côte (à propos / liens / contact), alignées en haut, séparées par un espacement régulier */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Colonne 1 : Nom + accroche */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#E85B3D] shrink-0 bg-white p-0.5">
                <img
                  src={IMAGES.schoolLogo}
                  alt="Logo ADONAI-FORMATION"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-display font-black text-2xl text-white tracking-tight leading-none block uppercase">
                  ADONAI<span className="text-[#E85B3D] ml-1">FORMATION</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase text-white/70 font-semibold block mt-0.5">
                  Porto-Novo · Cotonou · Parakou
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
              Centre de Formation et d'Apprentissage des Métiers. Apprends, pratique, réussis.
            </p>

            <p className="text-xs text-white/70 leading-relaxed">
              Implanté au cœur de 3 métropoles majeures — <strong>Porto-Novo</strong> (siège historique), <strong>Cotonou</strong> et <strong>Parakou</strong> — ADONAI-FORMATION forme les artisans et techniciens d'excellence de demain.
            </p>

            <p className="text-xs text-[#E85B3D] font-semibold italic border-l-2 border-[#E85B3D] pl-2.5">
              « {GENERAL_CONTACT.slogan} »
            </p>
          </div>

          {/* Colonne 2 : Liens (Accueil · À propos · Formations · Tarifs · Centres · Contact) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E85B3D]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/80">
              <li>
                <button
                  onClick={() => handleLink('accueil')}
                  className="hover:text-[#E85B3D] transition-colors cursor-pointer text-left"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('a-propos')}
                  className="hover:text-[#E85B3D] transition-colors cursor-pointer text-left"
                >
                  À propos
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('filieres')}
                  className="hover:text-[#E85B3D] transition-colors cursor-pointer text-left"
                >
                  Formations (12 filières)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('tarifs')}
                  className="hover:text-[#E85B3D] transition-colors cursor-pointer text-left"
                >
                  Tarifs & 1500 Bourses
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('centres')}
                  className="hover:text-[#E85B3D] transition-colors cursor-pointer text-left"
                >
                  Centres (Porto-Novo, Cotonou, Parakou)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('inscription')}
                  className="text-[#E85B3D] font-bold hover:underline transition-colors cursor-pointer text-left"
                >
                  Contact / Inscription
                </button>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E85B3D]">
              Contact & Secrétariat
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#E85B3D] shrink-0 mt-0.5" />
                <a href={`mailto:${GENERAL_CONTACT.email}`} className="hover:text-[#E85B3D] underline">
                  {GENERAL_CONTACT.email}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#E85B3D] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a href="tel:0166730667" className="block hover:text-[#E85B3D]">01 66 73 06 67</a>
                  <a href="tel:0166485867" className="block hover:text-[#E85B3D]">01 66 48 58 67</a>
                  <a href="tel:0153519543" className="block hover:text-[#E85B3D]">01 53 51 95 43</a>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1 text-xs text-white/70">
                <MapPin className="w-4 h-4 text-[#E85B3D] shrink-0 mt-0.5" />
                <span>Porto-Novo (Kandévié, carrefour Yaya gendarme - siège) · Cotonou · Parakou</span>
              </div>
            </div>
          </div>

        </div>

        {/* Ligne finale sur toute la largeur : © 2026 ADONAI-FORMATION — Tous droits réservés */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© 2026 ADONAI-FORMATION — Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <span>Rentrée 05 octobre 2026</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Haut de page"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#E85B3D]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
