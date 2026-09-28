import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { GENERAL_CONTACT } from '../data/centersData';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: "Quels sont les frais d'inscription et de formation ?",
    answer: `Les frais d'inscription sont de ${GENERAL_CONTACT.registrationFee}. La formation coûte ${GENERAL_CONTACT.duration12Price} pour 12 mois ou ${GENERAL_CONTACT.duration24Price} pour 24 mois.`
  },
  {
    question: "Comment bénéficier d'une bourse ?",
    answer: `${GENERAL_CONTACT.scholarshipQuota} sont disponibles : avec la bourse, la participation est de ${GENERAL_CONTACT.scholarshipPrice}. Pour connaître la marche à suivre, renseignez-vous auprès du secrétariat de votre centre.`
  },
  {
    question: "Où se trouvent vos centres ?",
    answer: "ADONAI-FORMATION est présent dans 4 villes du Bénin : Porto-Novo (siège, Kandévié – carrefour Yaya Gendarme), Cotonou, Calavi et Parakou. Retrouvez le détail de chaque centre dans la page Centres."
  },
  {
    question: "Quelle est la date de la prochaine rentrée ?",
    answer: `La prochaine rentrée a lieu le ${GENERAL_CONTACT.academicStart}. Les inscriptions sont ouvertes : cliquez sur « S'inscrire » pour remplir le formulaire officiel.`
  },
  {
    question: "Que se passe-t-il après mon inscription ?",
    answer: "Une fois le formulaire rempli, l'équipe du centre vous recontacte par téléphone ou WhatsApp sous 48 h pour la suite de votre dossier."
  },
  {
    question: "Obtient-on une attestation à la fin de la formation ?",
    answer: "Oui, une attestation de formation est délivrée à l'issue du parcours. Pour connaître les conditions précises, rapprochez-vous du secrétariat de votre centre."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white relative border-b border-[#1B4D2E]/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.22em] font-bold text-[#1B4D2E]">
            Réponses aux Questions
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#1B4D2E] tracking-tight">
            Foire Aux Questions
          </h2>
          <p className="text-base text-[#475569] font-normal leading-relaxed">
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
                className="adonai-card rounded-2xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[#1B4D2E] hover:text-[#1B4D2E] transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-display tracking-tight leading-snug">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#1B4D2E] text-[#F5B800]' : 'bg-[#F1F7F2] text-[#475569]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#1B4D2E]/8">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-xs text-[#475569]">
          Une question spécifique non abordée ? Contactez notre standard au{' '}
          <a href={`tel:${GENERAL_CONTACT.primaryPhone}`} className="font-bold text-[#1B4D2E] underline hover:text-[#1B4D2E]">
            {GENERAL_CONTACT.primaryPhone}
          </a>
        </div>

      </div>
    </section>
  );
}
