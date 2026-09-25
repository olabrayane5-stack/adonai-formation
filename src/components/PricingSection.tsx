import { useState } from 'react';
import { Check, UserPlus, Gift, Calculator, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onApplyForScholarship: () => void;
  onSelectDuration: (duration: '12 mois' | '24 mois') => void;
}

interface FaqItem {
  question: string;
  answer: string;
  note?: string;
}

const PRICING_FAQ: FaqItem[] = [
  {
    question: "Quelles sont les modalités de paiement des frais de formation (comptant ou en plusieurs fois) ?",
    answer: "Les frais d'inscription (15 000 FCFA) sont réglés une seule fois au moment du dépôt du dossier. Pour les frais de formation (200 000 FCFA pour 12 mois ou 350 000 FCFA pour 24 mois), le centre autorise un règlement comptant avec remise, ou un échelonnement souple en 3 ou 4 tranches étalées sur l'année de cours.",
    note: "Modalités d'échelonnement confirmées au secrétariat lors de l'inscription."
  },
  {
    question: "Que comprennent exactement les frais de formation ?",
    answer: "Les frais couvrent : l'enseignement théorique et l'accès illimité aux ateliers d'application, l'usage des machines et outils professionnels du centre (machines à coudre industrielles, bancs d'électricité, outillage de plomberie, stations informatiques), l'encadrement par un maître-formateur dédié, et l'assurance en atelier.",
    note: "Le petit outillage individuel et consommables personnels restent à la charge de l'apprenant."
  },
  {
    question: "Comment fonctionne la bourse de 21 000 FCFA et qui peut en bénéficier ?",
    answer: "Le centre met à disposition 1500 bourses d'études pour la rentrée 2026. Cette aide exceptionnelle ramène le coût de formation à 21 000 FCFA au lieu de 200 000 FCFA. Les places étant limitées sur nos 3 centres (Porto-Novo, Cotonou, Parakou), l'attribution se fait selon l'ordre de réception et de validation des candidatures complètes.",
    note: "Cochez 'Je sollicite la bourse' sur le formulaire d'inscription en ligne."
  },
  {
    question: "Quelle est la politique de remboursement ou d'annulation ?",
    answer: "Les frais de dossier d'inscription (15 000 FCFA) sont engagés dès l'enregistrement administratif et ne sont pas remboursables. En cas de désistement justifié avant le démarrage effectif des cours du 05 octobre 2026, les tranches de scolarité déjà versées peuvent faire l'objet d'un report pour la session suivante ou d'un remboursement partiel sur décision de la direction.",
    note: "<!-- À COMPLÉTER : conditions formelles de remboursement après le démarrage des cours -->"
  }
];

export function PricingSection({ onApplyForScholarship, onSelectDuration }: PricingSectionProps) {
  const [showSimulator, setShowSimulator] = useState(false);
  const [simDuration, setSimDuration] = useState<'12' | '24'>('12');
  const [simScholarship, setSimScholarship] = useState<boolean>(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Calculations for simulator
  const inscription = 15000;
  const tuition = simScholarship ? 21000 : simDuration === '12' ? 200000 : 350000;
  const total = inscription + tuition;
  const installments = simScholarship 
    ? [
        { label: 'À l\'inscription (Frais de dossier)', amount: 15000 },
        { label: 'Participation Bourse Rentrée 2026', amount: 21000 }
      ]
    : simDuration === '12'
      ? [
          { label: 'Tranche 1 (À la rentrée)', amount: 80000 },
          { label: 'Tranche 2 (3e mois)', amount: 60000 },
          { label: 'Tranche 3 (6e mois)', amount: 60000 },
        ]
      : [
          { label: 'Tranche 1 (À la rentrée)', amount: 120000 },
          { label: 'Tranche 2 (Semestre 1)', amount: 80000 },
          { label: 'Tranche 3 (Année 2)', amount: 80000 },
          { label: 'Tranche 4 (Fin de cycle)', amount: 70000 },
        ];

  return (
    <section id="tarifs" className="py-20 sm:py-28 bg-[#F8FAF8] relative border-b border-slate-200 overflow-hidden">
      {/* Motif graphique discret en arrière-plan (ruban diagonal or inspiré des affiches officielles ADONAI) */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #E5A910 0, #E5A910 2px, transparent 0, transparent 24px)`
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#124B30] bg-[#FEF8E8] border border-[#F7D479] px-3.5 py-1 rounded-full inline-block">
            Investissement & Formules
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#0B2B1B] uppercase tracking-tight">
            Tarifs de Formation & Programme Bourses
          </h2>
          {/* Phrase d'introduction expliquant la logique des tarifs */}
          <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
            La grille tarifaire d’ADONAI-FORMATION repose sur une logique claire et transparente : des frais d’inscription uniques de dossier à régler lors de l'admission, complétés par les frais de scolarité fixés selon la durée de formation choisie (12 ou 24 mois), avec facilités de règlement échelonné.
          </p>
        </div>

        {/* 3.5 Grille : 3 cartes côte à côte de largeur égale et même hauteur */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-10">
          
          {/* Carte 1 : Inscription */}
          <div className="adonai-card rounded-2xl p-8 flex flex-col justify-between bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div>
              <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#124B30] bg-slate-100 px-2.5 py-1 rounded">
                Élément 1
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0B2B1B] mt-3 uppercase leading-tight">
                Inscription
              </h3>
              
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display font-black text-4xl sm:text-5xl text-[#0B2B1B] tabular-nums">
                  15 000
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase">FCFA</span>
              </div>

              {/* Détail exact */}
              <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-medium">
                Frais de dossier, à régler une seule fois lors de l'inscription, avant le début des cours.
              </div>

              <ul className="mt-6 space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#124B30] shrink-0 font-bold" />
                  <span>Ouverture & validation de votre dossier</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#124B30] shrink-0 font-bold" />
                  <span>Livret d'apprentissage & carte d'apprenant</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#124B30] shrink-0 font-bold" />
                  <span>Assurance atelier obligatoire</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 text-center text-xs text-slate-500 font-semibold">
              Règlement unique avant le 05 octobre 2026
            </div>
          </div>

          {/* Carte 2 : Formation 12 mois */}
          <div className="adonai-card rounded-2xl p-8 flex flex-col justify-between relative bg-white border-2 border-[#124B30] shadow-md hover:shadow-xl transition-all">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#124B30] text-[#E5A910] text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full shadow-xs">
              Formule Recommandée
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#124B30] bg-[#FEF8E8] border border-[#F7D479] px-2.5 py-1 rounded">
                Élément 2
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0B2B1B] mt-3 uppercase leading-tight">
                Formation 12 mois
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display font-black text-4xl sm:text-5xl text-[#124B30] tabular-nums">
                  200 000
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase">FCFA</span>
              </div>

              {/* Détail exact */}
              <div className="mt-4 p-3.5 rounded-xl bg-[#FEF8E8] border border-[#F7D479] text-xs text-[#0B2B1B] leading-relaxed font-medium">
                Formation intensive sur un métier ciblé, avec suivi pratique continu et matériel fourni en atelier.
              </div>

              <ul className="mt-6 space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#124B30] shrink-0 font-bold" />
                  <span>1 an de pratique intensive quotidienne</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#124B30] shrink-0 font-bold" />
                  <span>Possibilité de régler en 3 tranches</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#124B30] shrink-0 font-bold" />
                  <span>Attestation officielle de fin de cursus</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100">
              <button
                onClick={() => onSelectDuration('12 mois')}
                className="w-full py-3 rounded-xl bg-[#124B30] hover:bg-[#0B2B1B] text-white font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Choisir le cursus 12 mois
              </button>
            </div>
          </div>

          {/* Carte 3 : Formation 24 mois */}
          <div className="adonai-card rounded-2xl p-8 flex flex-col justify-between bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div>
              <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#124B30] bg-slate-100 px-2.5 py-1 rounded">
                Élément 3
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0B2B1B] mt-3 uppercase leading-tight">
                Formation 24 mois
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display font-black text-4xl sm:text-5xl text-[#0B2B1B] tabular-nums">
                  350 000
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase">FCFA</span>
              </div>

              {/* Détail exact */}
              <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-medium">
                Parcours complet pour approfondir la maîtrise du métier choisi, recommandé pour les filières techniques (électricité, froid-climatisation, génie informatique).
              </div>

              <ul className="mt-6 space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#124B30] shrink-0 font-bold" />
                  <span>2 ans de spécialisation approfondie</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#124B30] shrink-0 font-bold" />
                  <span>Échelonnement sur 2 ans possible</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#124B30] shrink-0 font-bold" />
                  <span>Préparation aux examens d'État CQP</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100">
              <button
                onClick={() => onSelectDuration('24 mois')}
                className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0B2B1B] font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Choisir le cursus 24 mois
              </button>
            </div>
          </div>

        </div>

        {/* 3.5 Sous les 3 cartes, sur toute la largeur : encadré fond or clair, disposé en ligne */}
        <div className="w-full rounded-2xl bg-[#FEF8E8] border-2 border-[#F7D479] p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Ruban or subtil en coin */}
          <div 
            className="absolute -right-12 -top-12 w-32 h-32 opacity-15 rotate-45 pointer-events-none bg-[#E5A910]" 
            aria-hidden="true" 
          />

          {/* Icône à gauche et texte développé à droite, disposé en ligne */}
          <div className="flex items-start gap-5 text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#E5A910] text-[#0B2B1B] flex items-center justify-center shrink-0 shadow-xs mt-1">
              <Gift className="w-7 h-7" />
            </div>

            <div className="space-y-1.5 max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#124B30] text-[#E5A910] text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded">
                Programme Spécial Rentrée 2026
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0B2B1B] uppercase leading-tight">
                1500 bourses disponibles
              </h3>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                Le centre propose un programme de bourses permettant de participer à la formation pour seulement <strong>21 000 FCFA</strong> au lieu du tarif plein. Les places sont limitées et attribuées lors de l'inscription ; il est conseillé de candidater tôt.
              </p>
            </div>
          </div>

          {/* Bouton d'action pour postuler à la bourse */}
          <div className="shrink-0 w-full md:w-auto">
            <button
              onClick={onApplyForScholarship}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B2B1B] hover:bg-[#124B30] text-white font-extrabold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
            >
              <UserPlus className="w-4 h-4 text-[#E5A910]" />
              <span>Demander ma bourse</span>
            </button>
          </div>

        </div>

        {/* Bouton pour afficher/masquer le simulateur d'échelonnement */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowSimulator(!showSimulator)}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#124B30] hover:text-[#0B2B1B] underline cursor-pointer"
          >
            <Calculator className="w-4 h-4 text-[#E5A910]" />
            <span>{showSimulator ? 'Masquer le simulateur' : 'Afficher le simulateur de tranches de paiement'}</span>
          </button>
        </div>

        {/* Simulateur interactif déroulant */}
        {showSimulator && (
          <div className="mt-6 bg-white rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto border border-slate-200 shadow-md">
            <h4 className="font-display font-black text-2xl text-[#0B2B1B] uppercase mb-2">
              Simulateur d'échelonnement des paiements
            </h4>
            <p className="text-xs text-slate-500 mb-6">
              Visualisez le calendrier de règlement des tranches selon votre situation.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                  Formule choisie :
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSimDuration('12')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      simDuration === '12'
                        ? 'bg-[#124B30] text-white border-[#124B30]'
                        : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    12 Mois (200 000 FCFA)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSimDuration('24')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      simDuration === '24'
                        ? 'bg-[#124B30] text-white border-[#124B30]'
                        : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    24 Mois (350 000 FCFA)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                  Aide de scolarité :
                </label>
                <button
                  type="button"
                  onClick={() => setSimScholarship(!simScholarship)}
                  className={`w-full py-2.5 px-4 text-xs font-bold rounded-lg border transition-all flex items-center justify-between cursor-pointer ${
                    simScholarship
                      ? 'bg-[#FEF8E8] text-[#0B2B1B] border-[#F7D479]'
                      : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  <span>Bourse 1500 places (21 000 FCFA)</span>
                  <span className="font-extrabold text-[#124B30]">{simScholarship ? 'Sélectionné ✓' : 'Non retenu'}</span>
                </button>
              </div>

              {/* Tableau des tranches */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between font-bold text-sm text-[#0B2B1B] pb-2 border-b border-slate-200">
                  <span>Coût total estimé :</span>
                  <span className="tabular-nums">{total.toLocaleString('fr-FR')} FCFA</span>
                </div>
                {installments.map((inst, i) => (
                  <div key={i} className="flex justify-between text-slate-700">
                    <span>{inst.label} :</span>
                    <span className="font-bold tabular-nums">{inst.amount.toLocaleString('fr-FR')} FCFA</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4.4 FAQ EN ACCORDÉON INTERACTIF ANIMÉ */}
        <div className="mt-20 pt-16 border-t border-slate-200 max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#124B30] bg-[#FEF8E8] border border-[#F7D479] px-3.5 py-1 rounded-full inline-block">
              Questions Fréquentes
            </span>
            <h3 className="font-display font-black text-3xl sm:text-4xl text-[#0B2B1B] uppercase tracking-tight">
              Tout Savoir sur les Tarifs & Inscriptions
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-normal">
              Modalités d'échelonnement, détails de ce qui est inclus et politique d'admission pour la rentrée 2026.
            </p>
          </div>

          <div className="space-y-4">
            {PRICING_FAQ.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="adonai-card rounded-2xl overflow-hidden bg-white border border-slate-200 transition-all duration-300 shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[#0B2B1B] hover:text-[#124B30] transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-display font-extrabold uppercase tracking-tight leading-snug">
                      {item.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#124B30] text-[#E5A910]' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 space-y-2">
                      <p>{item.answer}</p>
                      {item.note && (
                        <p className="text-[11px] text-[#124B30] font-semibold italic bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                          {item.note}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
