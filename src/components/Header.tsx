import { useState } from 'react';
import { Menu, X, Phone, UserPlus } from 'lucide-react';
import { GENERAL_CONTACT } from '../data/centersData';
import { IMAGES } from '../assets/images';

export type AppPage = 'accueil' | 'a-propos' | 'filieres' | 'tarifs' | 'centres' | 'inscription';

interface HeaderProps {
  currentPage: AppPage;
  onNavigate: (page: AppPage) => void;
  onOpenRegister: () => void;
}

export function Header({ currentPage, onNavigate, onOpenRegister }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: AppPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: AppPage; label: string }[] = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'a-propos', label: 'À propos' },
    { id: 'filieres', label: 'Formations' },
    { id: 'tarifs', label: 'Tarifs' },
    { id: 'centres', label: 'Centres' },
    { id: 'inscription', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200">
      {/* Ligne principale du header : logo + nom à gauche, téléphone + bouton "S'inscrire" + menu hamburger à droite */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Gauche : Logo (conservé) + Nom avec accent corail */}
          <button
            onClick={() => handleNav('accueil')}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer shrink-0"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#E85B3D]/30 shadow-sm shrink-0 bg-white p-0.5 group-hover:border-[#E85B3D] transition-colors">
              <img
                src={IMAGES.schoolLogo}
                alt="Logo ADONAI-FORMATION"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <div className="font-display font-black text-2xl sm:text-3xl tracking-tight text-[#12162A] group-hover:text-[#26339E] transition-colors leading-none uppercase">
                ADONAI<span className="text-[#E85B3D] ml-1">FORMATION</span>
              </div>
              <p className="text-[10px] tracking-wider uppercase text-slate-500 font-semibold mt-0.5">
                Centre de Formation & Métiers
              </p>
            </div>
          </button>

          {/* Centre : Liens de navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#14162B]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`py-1 transition-all cursor-pointer relative ${
                  currentPage === link.id
                    ? 'text-[#E85B3D] font-extrabold'
                    : 'text-[#14162B]/80 hover:text-[#E85B3D]'
                }`}
              >
                {link.label}
                {currentPage === link.id && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-[#E85B3D] rounded-full"></span>
                )}
              </button>
            ))}
          </nav>

          {/* Droite : Téléphone + Bouton "S'inscrire" (corail PitchLab) + Menu hamburger */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={`tel:${GENERAL_CONTACT.primaryPhone}`}
              className="hidden xl:flex items-center gap-2 text-xs font-semibold text-[#14162B] hover:text-[#E85B3D] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#26339E]" />
              <span>01 66 73 06 67</span>
            </a>

            {/* Bouton S'inscrire en corail plein PitchLab */}
            <button
              onClick={() => {
                handleNav('inscription');
                onOpenRegister();
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#E85B3D] hover:bg-[#D44A2D] text-white font-bold text-xs sm:text-sm tracking-wide shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <UserPlus className="w-4 h-4" />
              <span>S'inscrire</span>
            </button>

            {/* Menu mobile hamburger (☰) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-800 hover:bg-slate-100 lg:hidden focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menu mobile déroulant */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-5 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  currentPage === link.id
                    ? 'bg-[#12162A] text-white font-bold'
                    : 'text-[#14162B] hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            <button
              onClick={() => {
                handleNav('inscription');
                onOpenRegister();
              }}
              className="w-full text-center py-3 rounded-lg bg-[#E85B3D] hover:bg-[#D44A2D] text-white font-bold text-xs uppercase tracking-wider shadow-sm mt-3"
            >
              S'inscrire en ligne (Rentrée 2026)
            </button>
          </div>

          <div className="pt-3 border-t border-slate-200 text-xs text-slate-500 space-y-1">
            <p className="font-semibold text-[#12162A]">Porto-Novo · Cotonou · Parakou</p>
            <p>Hotline : {GENERAL_CONTACT.primaryPhone}</p>
          </div>
        </div>
      )}
    </header>
  );
}
