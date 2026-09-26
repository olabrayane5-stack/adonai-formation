import { 
  CheckCircle2, 
  Award, 
  Target, 
  Eye, 
  MapPin, 
  Phone, 
  ShieldCheck,
  UserPlus,
  ArrowRight,
  Wrench,
  Users,
  Compass,
  Building2
} from 'lucide-react';
import { IMAGES } from '../assets/images';
import { CENTERS_DATA, GENERAL_CONTACT } from '../data/centersData';
import { AnimatedCounter } from './AnimatedCounter';

interface AboutPageProps {
  onNavigateToCourses: () => void;
  onNavigateToRegister: () => void;
  onNavigateToCenters: () => void;
}

export function AboutPage({ onNavigateToCourses, onNavigateToRegister, onNavigateToCenters }: AboutPageProps) {
  const pedagogiePoints = [
    {
      title: '100% pratique',
      description: "Chaque filière s'apprend d'abord sur le terrain : dès les premières semaines, les apprenants manipulent le matériel réel du métier plutôt que de rester sur de la théorie. L'objectif est de développer le geste sûr et l'efficacité d'un technicien prêt pour le marché du travail.",
      icon: Wrench,
      badge: 'Pratique dès la semaine 1'
    },
    {
      title: 'Formateurs qualifiés',
      description: "Chaque groupe est encadré par un professionnel expérimenté qui suit personnellement la progression de chaque apprenant. Ce tutorat direct permet de corriger immédiatement les postures de travail, d'inculquer la rigueur professionnelle et de transmettre les secrets du métier.",
      icon: Users,
      badge: 'Mentorat en exercice'
    },
    {
      title: 'Insertion professionnelle',
      description: "L'accompagnement se poursuit après la formation : conseils pour démarrer une activité indépendante, appui à l'élaboration de devis, mise en relation avec des employeurs ou des partenaires locaux du secteur pour faciliter le recrutement immédiat.",
      icon: Target,
      badge: 'Soutien post-formation'
    },
    {
      title: 'Attestation reconnue',
      description: "Une attestation officielle délivrée en fin de parcours valorisant les compétences acquises. Pour les cursus approfondis de 24 mois, les apprenants sont préparés au Certificat de Qualification Professionnelle (CQP) de l'État béninois, garantissant une crédibilité maximale auprès des clients.",
      icon: ShieldCheck,
      badge: 'Attestation & CQP d\'État'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F1F7F2] text-[#1B4D2E]">
      
      {/* 1. Bandeau d'en-tête bleu marine quasi noir #1B4D2E avec triangles corail */}
      <section className="relative bg-[#1B4D2E] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <img
            src={IMAGES.heroBrightStudents}
            alt="Apprenants ADONAI-FORMATION"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Motif triangles corail discret */}
        <svg className="absolute -top-6 -right-6 w-36 h-36 opacity-25 pointer-events-none text-[#F5B800]" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
          <polygon points="100,0 60,0 100,40" />
          <polygon points="100,50 40,0 20,0 100,80" />
          <polygon points="100,90 10,0 0,0 100,100" />
        </svg>

        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#F5B800] bg-white/10 px-4 py-1.5 rounded-full inline-block border border-white/15 backdrop-blur-sm">
            Histoire & Engagement Pédagogique
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight leading-tight">
            À Propos d'<span className="text-[#F5B800]">ADONAI-FORMATION</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/85 font-normal leading-relaxed">
            Centre de Formation Professionnelle et d'Apprentissage des Métiers présent à <strong>Porto-Novo</strong>, <strong>Cotonou</strong> et <strong>Parakou</strong>.
          </p>
        </div>
      </section>

      {/* 2. Notre mission : 2 colonnes (texte / photo), développée en profondeur */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Colonne Gauche : Notre mission développée */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#2E7D32] bg-white border border-[#2E7D32]/20 px-3.5 py-1 rounded-full inline-block">
              Notre Mission
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#2E7D32] uppercase tracking-tight leading-tight">
              Donner à Chaque Béninois un Métier <span className="text-[#2E7D32]">d'Avenir</span> et l'Autonomie Financière
            </h2>
            
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                ADONAI-FORMATION a été fondé pour apporter une réponse concrète au chômage et au sous-emploi des jeunes en République du Bénin. Face aux cursus purement théoriques qui éloignent les apprenants des réalités du terrain, notre centre a fait le choix audacieux d’une pédagogie orientée à 100% vers la pratique et la maîtrise technique immédiate.
              </p>
              <p>
                Le centre s’adresse aussi bien aux jeunes scolarisés ou déscolarisés, aux titulaires de diplômes d'État (CEP, BEPC, BAC) cherchant une qualification opérationnelle, qu'aux diplômés universitaires et adultes souhaitant une reconversion rapide dans des filières manuelles ou digitales à fort potentiel.
              </p>
              <p>
                Notre vision de la formation professionnelle repose sur l'excellence du savoir-faire béninois et africain : bâtir des artisans dignes de confiance, des techniciens rigoureux et des entrepreneurs capables de faire prospérer leurs propres ateliers dans tout le pays.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onNavigateToCourses}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Découvrir les 12 filières</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onNavigateToRegister}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#F5B800] hover:bg-[#E0A600] text-[#1B4D2E] text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer shadow-md"
              >
                <UserPlus className="w-4 h-4" />
                <span>S'inscrire pour 2026</span>
              </button>
            </div>
          </div>

          {/* Colonne Droite : Photo réelle d'atelier */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img 
                src={IMAGES.heroBrightStudents} 
                alt="Apprenants dans les ateliers d'apprentissage ADONAI-FORMATION Bénin" 
                className="w-full h-[520px] object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B4D2E]/90 via-[#1B4D2E]/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-white/40 shadow-xl space-y-2 text-[#1B4D2E]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#2E7D32]">
                    Pédagogie de terrain
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-700 leading-relaxed">
                  « Devenez expert dans le domaine qui vous passionne » · Matériel professionnel et postes individuels de travail.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Notre approche pédagogique — 4 points développés en version longue avec cartes numérotées */}
      <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-3xl space-y-3 mb-16 text-left">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#2E7D32] bg-[#F1F7F2] border border-[#2E7D32]/20 px-3.5 py-1 rounded-full inline-block">
              Notre Approche Pédagogique
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#2E7D32] uppercase tracking-tight">
              Les 4 Piliers Fondateurs <span className="text-[#2E7D32]">d'ADONAI-FORMATION</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Une méthode pédagogique structurée pour transformer un débutant motivé en un professionnel accompli et autonome.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pedagogiePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="adonai-card p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#2E7D32] transition-all space-y-4 relative"
                >
                  <div className="flex items-center justify-between">
                    {/* Icône dans un carré coloré sur fond lavande clair */}
                    <div className="w-14 h-14 rounded-2xl bg-[#F1F7F2] text-[#2E7D32] flex items-center justify-center shadow-2xs border border-[#2E7D32]/10">
                      <Icon className="w-7 h-7" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#2E7D32] bg-[#F1F7F2] px-3 py-1 rounded-full">
                        {point.badge}
                      </span>
                      {/* Petit numéro discret (01, 02...) en haut à droite comme PitchLab */}
                      <span className="font-mono text-sm font-bold text-slate-300">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display font-black text-3xl text-[#1B4D2E] uppercase tracking-tight">
                    {point.title}
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Chiffres clés développés en fond bleu marine quasi noir #1B4D2E */}
      <section className="bg-[#1B4D2E] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
        {/* Motif triangles corail discret */}
        <svg className="absolute -top-6 -right-6 w-32 h-32 opacity-20 pointer-events-none text-[#F5B800]" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
          <polygon points="100,0 60,0 100,40" />
          <polygon points="100,50 40,0 20,0 100,80" />
          <polygon points="100,90 10,0 0,0 100,100" />
        </svg>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#F5B800]">
              Indicateurs Clés
            </span>
            <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
              L'Impact <span className="text-[#F5B800]">d'ADONAI-FORMATION</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-1">
              <div className="font-display font-black text-4xl sm:text-6xl text-[#F5B800]">
                <AnimatedCounter end={12} />
              </div>
              <p className="text-xs uppercase tracking-wider font-extrabold text-white">
                Filières Professionnelles
              </p>
              <p className="text-[11px] text-white/70">Couture, BTP, Numérique, Santé, Hôtellerie</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-1">
              <div className="font-display font-black text-4xl sm:text-6xl text-white">
                <AnimatedCounter end={3} />
              </div>
              <p className="text-xs uppercase tracking-wider font-extrabold text-white">
                Centres Déployés
              </p>
              <p className="text-[11px] text-white/70">Porto-Novo, Cotonou et Parakou</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-1">
              <div className="font-display font-black text-4xl sm:text-6xl text-[#F5B800]">
                <AnimatedCounter end={1500} />
              </div>
              <p className="text-xs uppercase tracking-wider font-extrabold text-white">
                Bourses Accordées
              </p>
              <p className="text-[11px] text-white/70">Frais réduits à 21 000 FCFA</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-1">
              <div className="font-display font-black text-4xl sm:text-6xl text-[#F5B800]">
                100%
              </div>
              <p className="text-xs uppercase tracking-wider font-extrabold text-white">
                Pratique en Atelier
              </p>
              <p className="text-[11px] text-white/70">Matériel professionnel en conditions réelles</p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Nos centres en un mot (courte transition + lien vers la page Centres) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-left max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#2E7D32] bg-[#F1F7F2] border border-[#2E7D32]/20 px-3.5 py-1 rounded-full inline-block">
              Présence Nationale
            </span>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-[#2E7D32] uppercase tracking-tight leading-tight">
              Des Ateliers Spacieux à <span className="text-[#2E7D32]">Porto-Novo, Cotonou et Parakou</span>
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              Où que vous soyez au Bénin, ADONAI-FORMATION met à votre disposition des locaux accueillants, un matériel de pointe et une équipe pédagogique disponible pour vous former dans les meilleures conditions.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <button
              onClick={onNavigateToCenters}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#F5B800] hover:bg-[#E0A600] text-[#1B4D2E] font-extrabold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              <Building2 className="w-4 h-4 text-white" />
              <span>Découvrir nos 3 centres</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
