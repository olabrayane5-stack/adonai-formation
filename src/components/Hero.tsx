import { useState, useEffect } from 'react';
import { ArrowRight, UserPlus, Clock, Target } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface HeroProps {
  onRegisterClick: () => void;
  onExploreCoursesClick: () => void;
  onScholarshipClick?: () => void;
  onCentersClick?: () => void;
}

const SLIDE_DURATION_MS = 6000; // durée d'affichage de chaque message avant rotation

export function Hero({
  onRegisterClick,
  onExploreCoursesClick,
  onCentersClick,
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

  // Les 3 messages du hero rotatif : titre (2 lignes), sous-titre, icône, boutons
  const slides = [
    {
      lineOne: 'Apprends un métier.',
      lineTwo: 'Construis ton avenir.',
      subtitle: (
        <><strong>ADONAI-FORMATION</strong> forme aux 20 filières techniques d'avenir, 100% pratique en atelier, à Porto-Novo, Cotonou, Calavi et Parakou.</>
      ),
      primaryLabel: "S'inscrire maintenant",
      primaryIcon: UserPlus,
      primaryClick: onRegisterClick,
      secondaryLabel: 'Voir les 20 filières',
      secondaryClick: onExploreCoursesClick,
    },
    {
      lineOne: 'Former. Accompagner.',
      lineTwo: 'Insérer. Entreprendre.',
      subtitle: (
        <>Notre vision : une jeunesse <strong>compétente, autonome et entreprenante</strong> — prête à réussir dans le monde professionnel, jusqu'à zéro chômage.</>
      ),
      primaryLabel: "S'inscrire maintenant",
      primaryIcon: UserPlus,
      primaryClick: onRegisterClick,
      secondaryLabel: 'Découvrir nos centres',
      secondaryClick: onCentersClick ?? onExploreCoursesClick,
    },
    {
      lineOne: 'Ta Passion.',
      lineTwo: 'Ton Métier de Demain.',
      subtitle: (
        <>20 filières techniques d'avenir pour devenir l'expert que ton secteur recherche, avec un accompagnement jusqu'à <strong>l'insertion professionnelle</strong>.</>
      ),
      primaryLabel: "S'inscrire maintenant",
      primaryIcon: Target,
      primaryClick: onRegisterClick,
      secondaryLabel: 'Voir les 20 filières',
      secondaryClick: onExploreCoursesClick,
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const rotation = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(rotation);
  }, [slides.length]);

  const slide = slides[activeSlide];
  const PrimaryIcon = slide.primaryIcon;

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
          <div className="bg-[#20573A]/90 backdrop-blur-md text-white border border-white/10 shadow-lg py-2.5 px-4 sm:py-2 sm:px-7 rounded-2xl sm:rounded-full flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs sm:text-sm font-semibold">
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

        {/* Contenu principal rotatif : colonne unique centrée, un seul point focal */}
        <div key={activeSlide} className="hero-slide-enter max-w-4xl mx-auto text-center space-y-6 my-auto">

          {/* Badge calendrier/date : jaune doux #F5B800 */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm text-xs font-semibold text-[#F5B800] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#F5B800] animate-pulse"></span>
            <span>Candidatures ouvertes — rentrée 2026</span>
          </div>

          {/* Titre en 2 lignes : taille adaptative (clamp) pour que chaque ligne reste entière, jamais coupée */}
          <h1 className="font-display font-black tracking-tight leading-[1.15] uppercase text-white text-[clamp(1.75rem,6vw,3.25rem)] text-balance">
            <span className="block">{slide.lineOne}</span>
            <span className="block text-[#F5B800]">{slide.lineTwo}</span>
          </h1>

          {/* Sous-titre unique, propre à chaque slide */}
          <p className="text-base sm:text-lg font-medium text-white/90 leading-relaxed max-w-2xl mx-auto">
            {slide.subtitle}
          </p>

          {/* Deux boutons côte à côte, bien espacés */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 pt-2">
            <button
              onClick={slide.primaryClick}
              className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#F5B800] hover:bg-[#E0A600] text-[#1B4D2E] font-extrabold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <PrimaryIcon className="w-5 h-5" />
              <span>{slide.primaryLabel}</span>
            </button>

            <button
              onClick={slide.secondaryClick}
              className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl border-2 border-white/80 hover:bg-white/15 text-white font-bold text-sm transition-all cursor-pointer backdrop-blur-xs"
            >
              <span>{slide.secondaryLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Indicateurs de slide (points cliquables) */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                aria-label={`Voir le message ${i + 1}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  i === activeSlide ? 'w-6 bg-[#F5B800]' : 'w-1.5 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
