import { Wrench, Users, Target, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../assets/images';

export function WhyAdonai() {
  const points = [
    {
      title: '100% pratique',
      description: "Chaque filière s'apprend d'abord sur le terrain : dès les premières semaines, les apprenants manipulent le matériel réel du métier plutôt que de rester sur de la théorie. L'objectif est d'être opérationnel rapidement.",
      icon: Wrench,
      badge: 'Atelier dès la 1ère semaine'
    },
    {
      title: 'Formateurs qualifiés',
      description: "Chaque groupe est encadré par un professionnel expérimenté dans son domaine, qui suit personnellement la progression de chaque apprenant tout au long du parcours.",
      icon: Users,
      badge: 'Encadrement personnalisé'
    },
    {
      title: 'Insertion professionnelle',
      description: "Le centre accompagne les apprenants après la formation : conseils pour démarrer une activité indépendante, mise en relation avec des employeurs ou des partenaires du secteur.",
      icon: Target,
      badge: 'Accompagnement post-cursus'
    },
    {
      title: 'Attestation reconnue',
      description: "À la fin du parcours, chaque apprenant reçoit une attestation officielle valorisant les compétences acquises, utile pour chercher un emploi ou rassurer une clientèle.",
      icon: ShieldCheck,
      badge: 'Attestation officielle'
    }
  ];

  return (
    <section id="pourquoi-nous" className="py-20 sm:py-28 bg-white relative border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16 text-left">
          <span className="text-xs uppercase tracking-widest font-bold text-[#26339E] bg-[#EEF0FA] border border-[#26339E]/20 px-3.5 py-1 rounded-full inline-block">
            Pédagogie d'Excellence
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#12162A] uppercase tracking-tight">
            Pourquoi choisir ADONAI-FORMATION ?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Un centre conçu pour faire passer chaque apprenant de l’apprentissage initial à la maîtrise professionnelle reconnue sur le marché béninois et sous-régional.
          </p>
        </div>

        {/* 3.4 Mise en page : 2 colonnes sur desktop (texte à gauche en 4 points détaillés, photo/illustration à droite) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Colonne Gauche : 4 points détaillés développés en plusieurs phrases */}
          <div className="lg:col-span-7 space-y-6">
            {points.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="adonai-card p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-[#26339E]/40 transition-all flex flex-col sm:flex-row items-start gap-5 group"
                >
                  <div className="w-13 h-13 rounded-2xl bg-[#EEF0FA] border border-[#26339E]/20 flex items-center justify-center text-[#26339E] shrink-0 group-hover:bg-[#26339E] group-hover:text-[#E85B3D] transition-colors shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display font-black text-2xl text-[#12162A] uppercase tracking-tight">
                        {point.title}
                      </h3>
                      <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#26339E] bg-white border border-slate-200 px-2.5 py-0.5 rounded-full">
                        {point.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Colonne Droite : Photo/illustration grand format formateur/apprenant en atelier */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img
                src={IMAGES.trainerMentor}
                alt="Formateur professionnel qualifié et apprenant en atelier pratique à ADONAI-FORMATION"
                className="w-full h-[520px] sm:h-[600px] object-cover group-hover:scale-103 transition-transform duration-700"
              />

              {/* Overlay subtil avec dégradé */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12162A]/90 via-[#12162A]/30 to-transparent" />

              {/* Badge flottant sur l'image */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md py-2 px-3.5 rounded-xl border border-slate-200 shadow-md flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#E85B3D] animate-ping" />
                <span className="text-xs font-bold text-[#12162A]">100% Pratique en atelier</span>
              </div>

              {/* Cartouche d'information en bas de l'image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl space-y-2 text-[#12162A]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#26339E]" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#26339E]">
                    Encadrement de terrain
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-700 leading-relaxed">
                  Des formateurs passionnés, des ateliers spacieux et un suivi rigoureux pour faire de vous un expert prêt pour l’emploi dès le 1er jour.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
