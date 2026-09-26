import { useState } from 'react';
import { 
  Scissors, 
  Sparkles, 
  Zap, 
  Wrench, 
  Wind, 
  Cpu, 
  Palette, 
  UtensilsCrossed, 
  Stethoscope, 
  Pill, 
  ClipboardPlus, 
  Megaphone,
  UserPlus,
  Info,
  Search,
  MessageCircle,
  Clock
} from 'lucide-react';
import { FILIERES_DATA, CATEGORIES, Filiere } from '../data/coursesData';
import { GENERAL_CONTACT } from '../data/centersData';

interface CoursesSectionProps {
  onSelectCourse: (course: Filiere) => void;
  onOpenModal: (course: Filiere) => void;
}

const ICONS: Record<string, React.ElementType> = {
  Scissors,
  Sparkles,
  Zap,
  Wrench,
  Wind,
  Cpu,
  Palette,
  UtensilsCrossed,
  Stethoscope,
  Pill,
  ClipboardPlus,
  Megaphone,
};

export function CoursesSection({ onSelectCourse, onOpenModal }: CoursesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCourses = FILIERES_DATA.filter((course) => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = 
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="formations" className="py-20 sm:py-28 bg-slate-50 relative border-b border-slate-200 overflow-hidden">
      {/* Texture d'arrière-plan discrète (motif technique en très faible opacité) */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(#1B4D2E 1px, transparent 1px), radial-gradient(#2E7D32 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          backgroundPosition: '0 0, 16px 16px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#2E7D32] bg-[#F1F7F2] border border-[#2E7D32]/20 px-3.5 py-1 rounded-full inline-block">
              Catalogue Officiel · Rentrée 2026
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#1B4D2E] uppercase tracking-tight">
              Nos 12 Filières de Formation
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              <p>
                À ADONAI-FORMATION, chaque filière allie une base théorique courte et ciblée à une pratique intensive et continue directement en atelier. Chaque groupe bénéficie d’un encadrement par un formateur expert dédié, qui suit pas à pas la progression de chacun avec le matériel et l’outillage réel du métier.
              </p>
              <p>
                L’objectif fondamental de notre pédagogie est de rendre chaque diplômé immédiatement opérationnel pour intégrer le marché du travail ou créer sa propre activité indépendante dès la sortie du centre.
              </p>
            </div>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un métier..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#2E7D32] shadow-2xs"
            />
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="pt-6 pb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-2xs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#2E7D32] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#2E7D32] hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Affichage de <span className="text-[#1B4D2E] font-bold">{filteredCourses.length}</span> filière(s)
          </div>
        </div>

        {/* 3.3 Grille de 3 colonnes sur desktop, 2 sur tablette, 1 sur mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            const IconComponent = ICONS[course.iconName] || Scissors;

            return (
              <div
                key={course.id}
                className="adonai-card rounded-2xl overflow-hidden flex flex-col justify-between group bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all"
              >
                {/* 1. Photo en haut */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={course.imageUrl}
                    alt={`${course.name} à ADONAI-FORMATION Bénin`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Overlay dégradé pour contraste */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  {/* Badge officiel "100% PRATIQUE" */}
                  <div className="absolute top-3.5 left-3.5 bg-[#1B4D2E] text-[#F5B800] text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-md shadow-xs border border-[#F5B800]/40">
                    100% PRATIQUE
                  </div>

                  {/* Catégorie */}
                  <div className="absolute top-3.5 right-3.5 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs">
                    {course.categoryLabel}
                  </div>

                  {/* Nom & Icône sur la photo */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center gap-2.5 text-white">
                    <div className="w-8 h-8 rounded-lg bg-[#F5B800] text-[#1B4D2E] flex items-center justify-center shrink-0 font-bold shadow-xs">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-black text-2xl text-white tracking-tight leading-tight uppercase drop-shadow-md">
                      {course.name}
                    </h3>
                  </div>
                </div>

                {/* 2. Nom de la filière et durée en dessous */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    
                    {/* Durée en dessous du nom */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#2E7D32] bg-[#F1F7F2] border border-[#2E7D32]/20 px-3 py-1 rounded-md w-fit">
                      <Clock className="w-3.5 h-3.5 text-[#2E7D32]" />
                      <span>Durée : <strong>{course.duration}</strong> (au choix)</span>
                    </div>

                    {/* Description concrète */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {course.description}
                    </p>

                    {/* Compétences clés */}
                    <div className="pt-3 border-t border-slate-100">
                      <p className="text-[11px] uppercase tracking-wider font-bold text-[#1B4D2E] mb-2">
                        Compétences en atelier :
                      </p>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {course.skills.slice(0, 3).map((skill, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-[#2E7D32] font-bold text-xs mt-0.5">✔</span>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Débouchés */}
                    <div className="pt-2 text-xs text-slate-500">
                      <span className="font-semibold text-slate-700">Débouchés : </span>
                      <span>{course.careers.slice(0, 2).join(' · ')}</span>
                    </div>
                  </div>

                  {/* 3. Boutons d'action */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => onSelectCourse(course)}
                      className="flex-1 py-2.5 px-3 rounded-lg bg-[#F5B800] hover:bg-[#E0A600] text-[#1B4D2E] text-xs font-extrabold uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <UserPlus className="w-4 h-4" />
                      <span>S'inscrire</span>
                    </button>

                    <button
                      onClick={() => onOpenModal(course)}
                      className="py-2.5 px-3.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                      title="Consulter le programme complet et l'outillage"
                    >
                      <Info className="w-3.5 h-3.5 text-slate-500" />
                      <span>Détails</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Encadré d'orientation conseil sous la grille */}
        <div className="mt-14 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase tracking-wider font-bold text-[#2E7D32]">
              Orientation Professionnelle Gratuite
            </span>
            <h3 className="font-display font-black text-2xl text-[#1B4D2E] uppercase">
              Vous hésitez encore entre deux filières ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Nos maîtres d'ateliers et conseillers vous accueillent à Porto-Novo, Cotonou, Calavi et Parakou pour tester votre affinité et vous orienter.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${GENERAL_CONTACT.whatsappNumber}?text=Bonjour%2C%20je%20souhaite%20un%20conseil%20d'orientation%20pour%20choisir%20ma%20fili%C3%A8re%20%C3%A0%20ADONAI-FORMATION.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-[#1B4D2E] hover:bg-[#2E7D32] text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#F5B800]" />
              <span>Contacter un conseiller</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
