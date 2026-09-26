import { CheckCircle2, Flag, Wrench, Zap, Award } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export function TimelineSection() {
  const events: TimelineEvent[] = [
    {
      date: 'Jusqu\'au 04 Octobre 2026',
      title: 'Inscriptions & Attribution des 1500 Bourses',
      description: 'Dépôt des dossiers de candidature en ligne ou au secrétariat. Réservation prioritaire des bourses à 21 000 FCFA.',
      icon: CheckCircle2,
    },
    {
      date: '05 Octobre 2026',
      title: 'Grande Rentrée Solennelle d\'Atelier',
      description: 'Accueil des promotions sur nos 3 campus (Porto-Novo, Cotonou, Parakou), remise des livrets et attribution des postes de travail.',
      icon: Flag,
    },
    {
      date: 'Trimestre 1 (Octobre – Décembre)',
      title: 'Initiation Fondamentale & Pratique Directe',
      description: 'Prise en main immédiate des machines industrielles, outillages BTP, logiciels informatiques et pharmacopée.',
      icon: Wrench,
    },
    {
      date: 'Cursus 12 ou 24 mois',
      title: 'Projets Clients & Perfectionnement',
      description: 'Mises en situation réelles, commandes clients, études de cas techniques, chantiers de raccordement et gestion d\'atelier.',
      icon: Zap,
    },
    {
      date: 'Clôture & Insertion',
      title: 'Stage Professionnel & Diplômes Reconnus',
      description: 'Immersion en entreprise partenaire, évaluation par jury de maîtres-artisans et délivrance des attestations officielles.',
      icon: Award,
    },
  ];

  return (
    <section id="timeline" className="py-20 sm:py-28 bg-white relative border-b border-[#1B4D2E]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.22em] font-bold text-[#1B4D2E]">
            Calendrier Académique
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#1B4D2E] tracking-tight">
            Les Grandes Étapes de la Promotion 2026
          </h2>
          <p className="text-base text-[#475569] font-normal leading-relaxed">
            De votre inscription jusqu'à votre insertion sur le marché de l'emploi, découvrez le rythme de votre cursus.
          </p>
        </div>

        {/* Editorial Timeline */}
        <div className="relative border-l border-[#1B4D2E]/15 ml-4 sm:ml-32 space-y-12">
          {events.map((evt, idx) => {
            const Icon = evt.icon;
            return (
              <div key={idx} className="relative pl-8 sm:pl-10">
                {/* Node */}
                <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-[#1B4D2E] text-[#F5B800] flex items-center justify-center border-2 border-white shadow-xs">
                  <Icon className="w-3 h-3" />
                </div>

                {/* Date marker outside on desktop */}
                <div className="sm:absolute sm:-left-36 sm:top-1 sm:w-28 sm:text-right">
                  <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#1B4D2E] block">
                    {evt.date}
                  </span>
                </div>

                <div className="lux-card rounded-2xl p-6 space-y-1.5">
                  <h3 className="font-display font-bold text-lg text-[#1B4D2E]">
                    {evt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
