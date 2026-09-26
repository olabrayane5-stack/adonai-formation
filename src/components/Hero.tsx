import { useState, useEffect } from 'react';
import { ArrowRight, UserPlus, Clock, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface HeroProps {
  onRegisterClick: () => void;
  onExploreCoursesClick: () => void;
  onScholarshipClick?: () => void;
  onCentersClick?: () => void;
}

export function Hero({
  onRegisterClick,
  onExploreCoursesClick,
}: HeroProps) {
  // Countdown to October 5, 2026
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-10-05T08:00:00+01:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section className="relative overflow-hidden text-white min-h-[620px] lg:min-h-[700px] flex flex-col justify-between bg-[#1B4D2E]">
      {/* Photo réelle en arrière-plan plein écran avec faible opacité */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroBgWide}
          alt="Apprenants en atelier pratique à ADONAI-FORMATION Bénin"
          className="w-full h-full object-cover object-center opacity-40"
        />
        {/* Overlay bleu marine dégradé, allégé pour laisser la photo respirer */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B4D2E] via-[#1B4D2E]/75 to-[#1B4D2E]/55" />
      </div>

      {/* Motif géométrique corail discret dans un coin (triangles) */}
      <svg className="absolute -top-8 -right-8 w-44 h-44 opacity-25 pointer-events-none text-[#F5B800] z-10" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
        <polygon points="100,0 60,0 100,40" />
        <polygon points="100,50 40,0 20,0 100,80" />
        <polygon points="100,90 10,0 0,0 100,100" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-8 pb-16 sm:pb-24 flex flex-col justify-between flex-1">
        
        {/* Bandeau compte à rebours dans un encadré arrondi sombre (comme PitchLab) */}
        <div className="flex justify-center mb-10">
          <div className="bg-[#20573A]/90 backdrop-blur-md text-white border border-white/10 shadow-lg py-2 px-5 sm:px-7 rounded-full flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs sm:text-sm font-semibold">
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="w-4 h-4 text-[#F5B800]" />
              <span>Clôture des inscriptions Rentrée 2026 :</span>
            </div>
            
            <div className="flex items-center gap-1.5 font-mono text-white tabular-nums font-bold">
              <span className="bg-[#2E7D32]/50 border border-white/10 px-2 py-0.5 rounded text-xs">
                {pad(timeLeft.days)} <span className="text-[10px] font-sans font-normal text-white/60">j</span>
              </span>
              <span>:</span>
              <span className="bg-[#2E7D32]/50 border border-white/10 px-2 py-0.5 rounded text-xs">
                {pad(timeLeft.hours)} <span className="text-[10px] font-sans font-normal text-white/60">h</span>
              </span>
              <span>:</span>
              <span className="bg-[#2E7D32]/50 border border-white/10 px-2 py-0.5 rounded text-xs">
                {pad(timeLeft.minutes)} <span className="text-[10px] font-sans font-normal text-white/60">m</span>
              </span>
              <span>:</span>
              <span className="bg-[#F5B800]/25 text-[#F5B800] border border-[#F5B800]/40 px-2 py-0.5 rounded text-xs">
                {pad(timeLeft.seconds)} <span className="text-[10px] font-sans font-normal text-[#F5B800]">s</span>
              </span>
            </div>
          </div>
        </div>

        {/* Contenu principal : Texte aligné à gauche (pas centré), sur 60-70% de la largeur */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto">
          
          <div className="lg:col-span-8 max-w-3xl space-y-6 text-left">
            
            {/* Badge calendrier/date : jaune doux #F5B800 */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm text-xs font-semibold text-[#F5B800] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#F5B800] animate-pulse"></span>
              <span>Candidatures ouvertes — rentrée 2026</span>
            </div>

            {/* Titre en 2 lignes : « Apprends un métier. » / « Construis ton avenir. » (mot-clé en corail) */}
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] uppercase text-white">
              Apprends un métier. <br />
              <span className="text-[#F5B800]">Construis ton avenir.</span>
            </h1>

            {/* Sous-titre */}
            <p className="text-base sm:text-xl font-medium text-white/90 leading-relaxed max-w-2xl">
              <strong>ADONAI-FORMATION</strong> : Centre de Formation Professionnelle et d'Apprentissage des Métiers à Porto-Novo, Cotonou, Calavi et Parakou.
            </p>

            {/* Citation courte avec accent corail */}
            <p className="text-sm sm:text-base font-semibold text-[#F5B800] italic border-l-2 border-[#F5B800] pl-3">
              « Devenez expert dans le domaine qui vous passionne »
            </p>

            {/* Phrase complémentaire */}
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl">
              20 filières techniques d'avenir, 100% pratique en atelier, encadrement par des professionnels qualifiés.
            </p>

            {/* Deux boutons côte à côte : CTA principal en corail plein, secondaire en contour */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onRegisterClick}
                className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#F5B800] hover:bg-[#E0A600] text-[#1B4D2E] font-extrabold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <UserPlus className="w-5 h-5" />
                <span>S'inscrire maintenant</span>
              </button>

              <button
                onClick={onExploreCoursesClick}
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl border-2 border-white/80 hover:bg-white/15 text-white font-bold text-sm transition-all cursor-pointer backdrop-blur-xs"
              >
                <span>Voir les 20 filières</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Repères concrets d'admission */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-white/75">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F5B800]" />
                <span>100% pratique en atelier</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F5B800]" />
                <span>1500 bourses à 150 000 FCFA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F5B800]" />
                <span>Attestation & CQP d'État</span>
              </div>
            </div>

          </div>

          {/* Colonne de droite (desktop) : Encadré sombre arrondi */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-[#20573A]/80 backdrop-blur-md rounded-2xl border border-white/15 p-6 space-y-4 text-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <span className="text-xs uppercase tracking-wider font-bold text-[#F5B800]">
                  Rentrée 2026
                </span>
                <span className="text-xs bg-[#F5B800] text-[#1B4D2E] px-2.5 py-0.5 rounded font-extrabold">
                  05 Octobre 2026
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-white/70">Nombre de filières :</span>
                  <strong className="text-white font-bold">12 métiers techniques</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-white/70">Durées proposées :</span>
                  <strong className="text-white font-bold">12 ou 24 mois</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-white/70">Campus d'accueil :</span>
                  <strong className="text-white font-bold">Porto-Novo · Cotonou · Calavi · Parakou</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-white/10">
                  <span className="text-white/70">Programme d'aide :</span>
                  <strong className="text-[#F5B800] font-bold">1500 bourses d'études</strong>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onRegisterClick}
                  className="w-full py-2.5 rounded-lg bg-[#F5B800] hover:bg-[#E0A600] text-[#1B4D2E] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                >
                  Réserver ma place dès maintenant
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
