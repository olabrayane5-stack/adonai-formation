import { 
  X, 
  CheckCircle2, 
  Briefcase, 
  Wrench, 
  Clock, 
  ArrowUpRight, 
  Scissors, 
  Sparkles, 
  Zap, 
  Wind, 
  Cpu, 
  Palette, 
  UtensilsCrossed, 
  Stethoscope, 
  Pill, 
  ClipboardPlus, 
  Megaphone,
  Check
} from 'lucide-react';
import { Filiere } from '../data/coursesData';

interface CourseModalProps {
  course: Filiere | null;
  onClose: () => void;
  onSelectCourse: (course: Filiere) => void;
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

export function CourseModal({ course, onClose, onSelectCourse }: CourseModalProps) {
  if (!course) return null;

  const IconComponent = ICONS[course.iconName] || Wrench;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#1B4D2E]/10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Banner with Course Atelier Photography */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-stone-100">
          <img
            src={course.imageUrl}
            alt={course.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B4D2E] via-[#1B4D2E]/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white rounded-full bg-black/40 hover:bg-black/60 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title and metadata on image */}
          <div className="absolute bottom-5 left-6 right-6 text-white space-y-1">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#F5B800] font-bold">
              {course.categoryLabel} · Formation d'Atelier
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-[#F5B800] border border-white/20">
                <IconComponent className="w-5 h-5" />
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                {course.name}
              </h3>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 text-[#1B4D2E] max-h-[60vh] overflow-y-auto">
          {/* Quick specs */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-[#F1F7F2] text-[#1B4D2E] rounded-full font-semibold border border-[#1B4D2E]/10">
              <Clock className="w-3.5 h-3.5 text-[#2E7D32]" />
              Durée : 12 ou 24 mois
            </span>
            <span className="px-3 py-1 bg-[#F1F7F2] text-[#1B4D2E] rounded-full font-semibold border border-[#2E7D32]/30">
              Rentrée Officielle : 05 Octobre 2026
            </span>
            <span className="px-3 py-1 bg-[#1B4D2E] text-white rounded-full font-semibold">
              Bourse éligible (21 000 FCFA)
            </span>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B4D2E] mb-2">
              Présentation du Métier
            </h4>
            <p className="text-sm text-[#475569] leading-relaxed">
              {course.longDescription}
            </p>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B4D2E] mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1B4D2E]" />
              Compétences Techniques Développées
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {course.skills.map((skill, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-[#F1F7F2] p-3 rounded-xl border border-[#1B4D2E]/8 text-xs text-[#1B4D2E]">
                  <Check className="w-3.5 h-3.5 text-[#2E7D32] mt-0.5 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Careers */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B4D2E] mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#2E7D32]" />
              Débouchés & Opportunités Professionnelles
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {course.careers.map((career, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-[#F1F7F2] p-3 rounded-xl border border-[#1B4D2E]/8 text-xs font-medium text-[#1B4D2E]">
                  <span className="text-[#2E7D32] font-bold">✦</span>
                  <span>{career}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Equipment */}
          <div className="bg-[#F1F7F2] p-5 rounded-2xl border border-[#1B4D2E]/8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B4D2E] mb-2 flex items-center gap-2">
              <Wrench className="w-3.5 h-3.5 text-[#1B4D2E]" />
              Matériel & Équipements Réels en Atelier
            </h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              {course.equipment.join(' · ')}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#F1F7F2] border-t border-[#1B4D2E]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#475569] text-center sm:text-left">
            <span>Inscription : <strong>15 000 FCFA</strong></span> · 
            <span> Formation : <strong>200k (12m)</strong> / <strong>350k (24m)</strong></span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-semibold text-[#475569] hover:text-[#1B4D2E] rounded-full border border-[#1B4D2E]/15 hover:bg-white transition-colors cursor-pointer"
            >
              Fermer
            </button>
            <button
              onClick={() => {
                onSelectCourse(course);
                onClose();
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-[#1B4D2E] hover:bg-[#153D24] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <span>Choisir cette filière</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#F5B800]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
