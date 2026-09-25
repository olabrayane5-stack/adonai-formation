import { ArrowRight, UserPlus, Sparkles, ShieldCheck, Gift, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { Hero } from './Hero';
import { AnimatedCounter } from './AnimatedCounter';
import { FILIERES_DATA, Filiere } from '../data/coursesData';
import { IMAGES } from '../assets/images';
import { AppPage } from './Header';

interface HomePageProps {
  onNavigate: (page: AppPage) => void;
  onSelectCourseModal: (course: Filiere) => void;
}

export function HomePage({ onNavigate, onSelectCourseModal }: HomePageProps) {
  // 4 filières phares pour le teaser
  const featuredCourses = FILIERES_DATA.filter((c) => c.featured).slice(0, 4);

  return (
    <div className="space-y-0">
      {/* 1. Hero plein écran avec photo/collage d'apprenants + dégradé vert foncé en overlay */}
      <Hero
        onRegisterClick={() => onNavigate('inscription')}
        onExploreCoursesClick={() => onNavigate('filieres')}
        onScholarshipClick={() => onNavigate('tarifs')}
        onCentersClick={() => onNavigate('centres')}
      />

      {/* 2. Bandeau chiffres clés en fond bleu marine quasi noir #12162A */}
      <section className="bg-[#12162A] text-white py-10 border-y border-white/10 relative overflow-hidden">
        {/* Motif triangles corail discret */}
        <svg className="absolute -top-6 -right-6 w-32 h-32 opacity-20 pointer-events-none text-[#E85B3D]" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
          <polygon points="100,0 60,0 100,40" />
          <polygon points="100,50 40,0 20,0 100,80" />
          <polygon points="100,90 10,0 0,0 100,100" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/15">
            
            <div className="pt-3 md:pt-0 px-2 space-y-1">
              <div className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#E85B3D] leading-none">
                <AnimatedCounter end={12} />
              </div>
              <p className="text-xs uppercase tracking-wider font-extrabold text-white/90">
                Filières Techniques
              </p>
              <p className="text-[11px] text-white/60">100% Pratique en atelier</p>
            </div>

            <div className="pt-3 md:pt-0 px-2 space-y-1">
              <div className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-none">
                <AnimatedCounter end={3} />
              </div>
              <p className="text-xs uppercase tracking-wider font-extrabold text-white/90">
                Centres au Bénin
              </p>
              <p className="text-[11px] text-white/60">Porto-Novo · Cotonou · Parakou</p>
            </div>

            <div className="pt-3 md:pt-0 px-2 space-y-1">
              <div className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#E85B3D] leading-none">
                <AnimatedCounter end={1500} />
              </div>
              <p className="text-xs uppercase tracking-wider font-extrabold text-white/90">
                Bourses Disponibles
              </p>
              <p className="text-[11px] text-white/60">À 21 000 FCFA seulement</p>
            </div>

            <div className="pt-3 md:pt-0 px-2 space-y-1">
              <div className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#F5C64B] leading-none pt-1">
                05 Oct. 2026
              </div>
              <p className="text-xs uppercase tracking-wider font-extrabold text-white/90">
                Rentrée Officielle
              </p>
              <p className="text-[11px] text-white/60">Inscriptions en cours</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Teaser Formations : Fond lavande très pâle #EEF0FA, cartes blanches #FFFFFF avec petit numéro discret */}
      <section className="py-16 sm:py-24 bg-[#EEF0FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#26339E] bg-white border border-[#26339E]/20 px-3 py-1 rounded-full inline-block">
                Aperçu du Catalogue
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-[#26339E] uppercase tracking-tight">
                Nos Formations <span className="text-[#E85B3D]">Pratiques</span>
              </h2>
              <p className="text-sm text-slate-600 max-w-xl font-normal leading-relaxed">
                Découvrez nos métiers phares formés sur équipements réels avec insertion professionnelle garantie.
              </p>
            </div>

            <button
              onClick={() => onNavigate('filieres')}
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#26339E] hover:text-[#E85B3D] transition-colors group cursor-pointer self-start md:self-auto"
            >
              <span>Voir les 12 filières</span>
              <ArrowRight className="w-4 h-4 text-[#E85B3D] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Grille 4 colonnes courtes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course, idx) => (
              <div
                key={course.id}
                className="adonai-card rounded-2xl overflow-hidden flex flex-col justify-between group bg-white border border-slate-200 relative"
              >
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src={course.imageUrl}
                    alt={course.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12162A]/90 via-[#12162A]/20 to-transparent" />
                  
                  {/* Petit numéro discret (01, 02...) en haut à droite comme PitchLab */}
                  <span className="absolute top-2.5 right-2.5 font-mono text-[11px] font-bold text-white/80 bg-[#12162A]/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    0{idx + 1}
                  </span>

                  <span className="absolute top-2.5 left-2.5 bg-[#26339E] text-[#F5C64B] text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs">
                    100% Pratique
                  </span>
                  <span className="absolute bottom-2.5 left-3 text-xs text-white/90 font-medium">
                    {course.categoryLabel}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="font-display font-black text-2xl text-[#12162A] group-hover:text-[#26339E] transition-colors uppercase tracking-tight leading-tight">
                      {course.name}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
                      {course.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-500">
                      {course.duration}
                    </span>
                    <button
                      onClick={() => onSelectCourseModal(course)}
                      className="text-xs font-bold text-[#26339E] hover:text-[#E85B3D] transition-colors cursor-pointer"
                    >
                      Détails →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('filieres')}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#E85B3D] hover:bg-[#D44A2D] text-white text-xs font-extrabold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Accéder au catalogue complet des 12 filières</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. Teaser À propos : Fond blanc #FFFFFF, titre bleu marine avec mot-clé en corail */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Colonne Gauche : Teaser textuel */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#26339E] bg-[#EEF0FA] border border-[#26339E]/20 px-3.5 py-1 rounded-full inline-block">
                Qui Sommes-Nous
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-[#26339E] uppercase tracking-tight leading-tight">
                Former les Maîtres et Techniciens <span className="text-[#E85B3D]">d'Avenir</span> au Bénin
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                <p>
                  <strong>ADONAI-FORMATION</strong> est né de la volonté de révolutionner l’apprentissage professionnel en plaçant la pratique concrète et le matériel réel au centre de chaque journée de formation.
                </p>
                <p>
                  Implanté à <strong>Porto-Novo</strong>, <strong>Cotonou</strong> et <strong>Parakou</strong>, notre centre transmet des compétences immédiatement monétisables grâce à des formateurs qualifiés et un accompagnement vers l'emploi ou la création d'atelier.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('a-propos')}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-[#26339E] text-[#26339E] hover:bg-[#26339E] hover:text-white font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>En savoir plus sur notre mission</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Colonne Droite : Image réelle */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 group">
                <img
                  src={IMAGES.trainerMentor}
                  alt="Encadrement de terrain à ADONAI-FORMATION"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12162A]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 text-[#14162B] shadow-md flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#E85B3D] shrink-0" />
                  <p className="text-xs font-bold leading-snug">
                    Encadrement personnalisé par des professionnels en activité.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Teaser Tarifs : fond bleu marine très sombre #12162A avec triangles corail */}
      <section className="py-16 sm:py-20 bg-[#12162A] text-white border-b border-white/10 relative overflow-hidden">
        {/* Motif géométrique corail discret (triangles) */}
        <svg className="absolute -top-8 -right-8 w-40 h-40 opacity-20 pointer-events-none text-[#E85B3D]" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
          <polygon points="100,0 60,0 100,40" />
          <polygon points="100,50 40,0 20,0 100,80" />
          <polygon points="100,90 10,0 0,0 100,100" />
        </svg>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm text-xs font-semibold text-[#F5C64B] uppercase tracking-wider">
            <Gift className="w-4 h-4 text-[#F5C64B]" />
            <span>Transparence & Soutien Financier</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
            Des Formations d'Excellence <br />
            <span className="text-[#E85B3D]">Accessibles à Tous les Budgets</span>
          </h2>

          <p className="text-base sm:text-xl font-medium text-white/90 max-w-2xl mx-auto leading-relaxed">
            Formations certifiantes à partir de <strong>200 000 FCFA</strong>, avec un programme exceptionnel de <strong>1500 bourses</strong> d'études accordées à <strong>21 000 FCFA</strong>.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('tarifs')}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#E85B3D] hover:bg-[#D44A2D] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
            >
              <span>Voir la grille des tarifs & bourses</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('centres')}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-white/40 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#E85B3D]" />
              <span>Voir les 3 centres</span>
            </button>
          </div>
        </div>
      </section>

      {/* 6. Bandeau CTA final : fond lavande très pâle #EEF0FA avec bouton corail */}
      <section className="py-14 sm:py-18 bg-[#EEF0FA] border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#26339E] bg-white px-3.5 py-1 rounded-full border border-[#26339E]/20 inline-block">
            Prochaine Session Officielle
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#26339E] uppercase tracking-tight">
            Rentrée du 05 Octobre 2026 · <span className="text-[#E85B3D]">Inscriptions Ouvertes</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 max-w-xl mx-auto font-normal leading-relaxed">
            Ne laissez pas passer votre chance de maîtriser un métier porteur. Réservez votre place dès aujourd'hui en atelier à Porto-Novo, Cotonou ou Parakou.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('inscription')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#E85B3D] hover:bg-[#D44A2D] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
            >
              <UserPlus className="w-4 h-4 text-white" />
              <span>S'inscrire maintenant en ligne</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
