import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { GENERAL_CONTACT } from '../data/centersData';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: "Quelles sont les conditions d'accès et le niveau d'études requis ?",
    answer: "Les formations d'ADONAI-FORMATION sont ouvertes à tous les profils : jeunes déscolarisés, titulaires du CEP, BEPC, BAC ou diplômés universitaires en reconversion. Aucun diplôme préalable n'est obligatoire. Notre enseignement individualisé en atelier s'adapte à votre rythme d'apprentissage."
  },
  {
    question: "Comment bénéficier de l'une des 1500 bourses d'études à 21 000 FCFA ?",
    answer: "Il vous suffit de cocher l'option 'Je sollicite la bourse' sur le formulaire d'inscription en ligne ou au secrétariat. Les bourses sont octroyées par ordre de validation des dossiers dans nos 3 campus (Porto-Novo, Cotonou et Parakou). La participation financière est fixée à 21 000 FCFA au lieu du plein tarif."
  },
  {
    question: "Quelle est la date officielle de la rentrée des classes ?",
    answer: "La rentrée solennelle en atelier se déroulera le lundi 05 octobre 2026 dans tous nos campus. Les inscriptions sont d'ores et déjà ouvertes pour réserver votre matériel et votre poste de travail."
  },
  {
    question: "Quels sont les documents à fournir pour valider son inscription ?",
    answer: "Le dossier d'admission comprend : la fiche de pré-inscription (générée en ligne ou sur place), une copie simple d'acte de naissance, 2 photos d'identité récentes sur fond blanc, et les frais de dossier d'inscription uniques de 15 000 FCFA."
  },
  {
    question: "Quelle reconnaissance et quel diplôme obtient-on à la fin du cursus ?",
    answer: "À l'issue de votre formation de 12 ou 24 mois et après validation de vos épreuves pratiques et de votre stage professionnel, une attestation officielle de fin de formation professionnelle reconnue vous est remise. Pour les cursus de 24 mois, une préparation au Certificat de Qualification Professionnelle (CQP) de l'État béninois est assurée."
  },
  {
    question: "Quelles facilités de paiement proposez-vous pour les frais de formation ?",
    answer: "Pour les candidats inscrits hors programme de bourse, la scolarité (200 000 FCFA pour 12 mois ou 350 000 FCFA pour 24 mois) peut être échelonnée en 3 ou 4 tranches mensuelles réparties tout au long de l'année scolaire."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white relative border-b border-[#10382B]/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.22em] font-bold text-[#9E7428]">
            Réponses aux Questions
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#0B251C] tracking-tight">
            Foire Aux Questions
          </h2>
          <p className="text-base text-[#53625C] font-normal leading-relaxed">
            Tout ce qu'il faut savoir sur les conditions d'accès, les bourses d'études et le déroulement des cours en atelier.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="lux-card rounded-2xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[#0B251C] hover:text-[#9E7428] transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-display tracking-tight leading-snug">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#0B251C] text-[#CFA049]' : 'bg-[#FAF9F5] text-[#53625C]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#53625C] leading-relaxed border-t border-[#10382B]/8">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-xs text-[#53625C]">
          Une question spécifique non abordée ? Contactez notre standard au{' '}
          <a href={`tel:${GENERAL_CONTACT.primaryPhone}`} className="font-bold text-[#0B251C] underline hover:text-[#9E7428]">
            {GENERAL_CONTACT.primaryPhone}
          </a>
        </div>

      </div>
    </section>
  );
}
