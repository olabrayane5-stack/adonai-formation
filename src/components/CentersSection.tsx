import { MapPin, Phone, Clock, ArrowRight, AlertCircle, ExternalLink, Navigation } from 'lucide-react';
import { CENTERS_DATA, GENERAL_CONTACT } from '../data/centersData';
import { IMAGES } from '../assets/images';

interface CentersSectionProps {
  onSelectCenter: (centerCity: string) => void;
}

const CENTER_IMAGES: Record<string, string> = {
  'porto-novo': IMAGES.centerPortoNovo,
  'cotonou': IMAGES.centerCotonou,
  'calavi': IMAGES.trainerMentor,
  'parakou': IMAGES.centerParakou,
};

const mainCenter = CENTERS_DATA.find((c) => c.isMain) ?? CENTERS_DATA[0];

export function CentersSection({ onSelectCenter }: CentersSectionProps) {
  return (
    <section id="centres" className="py-20 sm:py-28 bg-[#F1F7F2] relative border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14 text-left">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#2E7D32] bg-[#F1F7F2] border border-[#2E7D32]/20 px-3.5 py-1 rounded-full inline-block">
            Implantation Territoriale au Bénin
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#1B4D2E] uppercase tracking-tight">
            Nos {CENTERS_DATA.length} Centres de Formation
          </h2>
          <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
            ADONAI-FORMATION déploie ses ateliers pratiques et ses formateurs dans {CENTERS_DATA.length} villes stratégiques du pays : {CENTERS_DATA.map((c, i) => (
              <span key={c.id}>
                <strong>{c.city}</strong>{i < CENTERS_DATA.length - 2 ? ', ' : i === CENTERS_DATA.length - 2 ? ' et ' : ''}
              </span>
            ))}, pour rapprocher l'apprentissage des métiers de tous les jeunes béninois.
          </p>
        </div>

        {/* Grille générée dynamiquement depuis CENTERS_DATA : une carte par centre */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch mb-16">
          {CENTERS_DATA.map((center) => (
            <div
              key={center.id}
              className={`adonai-card rounded-3xl overflow-hidden flex flex-col justify-between relative bg-white transition-all group ${
                center.isMain
                  ? 'border-2 border-[#2E7D32] shadow-md hover:shadow-xl'
                  : 'border border-slate-200 shadow-sm hover:shadow-xl'
              }`}
            >
              {/* Photo de fond du centre avec overlay semi-transparent */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                <img
                  src={CENTER_IMAGES[center.id]}
                  alt={`Centre ADONAI-FORMATION de ${center.city}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4D2E] via-[#1B4D2E]/60 to-transparent" />

                {center.isMain && (
                  <div className="absolute top-3.5 left-3.5 bg-[#1B4D2E] text-[#F5B800] text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-[#F5B800]/40 shadow-xs">
                    Centre Principal (Siège)
                  </div>
                )}

                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <h3 className="font-display font-black text-3xl uppercase tracking-tight leading-none text-white">
                    {center.city}
                  </h3>
                  <p className="text-xs text-[#2E7D32] font-semibold mt-0.5">
                    {center.isMain ? 'Centre historique & Ateliers centraux' : center.landmark}
                  </p>
                </div>
              </div>

              {/* Contenu textuel complet */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3.5">
                  {/* Adresse */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#1B4D2E]">{center.address}</span>
                      <span className="block text-[11px] text-slate-500">{center.landmark}</span>
                    </div>
                  </div>

                  {/* Paragraphe développé */}
                  <div className="text-xs text-slate-700 leading-relaxed space-y-2">
                    <p>{center.details}</p>

                    {/* Filières disponibles sur place */}
                    <div className="pt-1">
                      <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#2E7D32] block mb-1.5">
                        Filières disponibles sur place :
                      </span>
                      <div className="flex flex-wrap gap-1.5 text-[11px]">
                        {center.sampleFilieres.map((f) => (
                          <span key={f} className="bg-[#F1F7F2] text-[#1B4D2E] px-2 py-0.5 rounded border border-[#2E7D32]/20">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* À COMPLÉTER par le client : adresse précise confirmée, horaires définitifs */}
                    <div className="p-2.5 rounded-lg bg-amber-50/80 border border-amber-200/70 text-[11px] text-amber-900 flex items-start gap-2 mt-2">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <span>
                        <strong>Précision secrétariat :</strong> {center.note}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#2E7D32] shrink-0" />
                      <span>Ligne directe : <strong className="text-[#1B4D2E]">{center.phone}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#2E7D32] shrink-0" />
                      <span>Accueil pour les inscriptions</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                  <button
                    onClick={() => onSelectCenter(center.city)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                      center.isMain
                        ? 'bg-[#1B4D2E] hover:bg-[#2E7D32] text-white'
                        : 'border border-slate-300 hover:bg-slate-100 text-[#1B4D2E]'
                    }`}
                  >
                    <span>S'inscrire à {center.city}</span>
                    <ArrowRight className={`w-4 h-4 ${center.isMain ? 'text-[#F5B800]' : 'text-[#2E7D32]'}`} />
                  </button>
                  <a
                    href={`tel:${center.phoneDigits}`}
                    className="w-full py-2 text-center text-xs font-semibold text-[#2E7D32] hover:underline"
                  >
                    Appeler le secrétariat
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carte interactive / Plan de localisation pour le Centre Principal */}
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#2E7D32] bg-[#F1F7F2] border border-[#2E7D32]/20 px-3.5 py-1 rounded-full inline-block">
                Localisation du Siège Principal
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#1B4D2E] uppercase tracking-tight">
                Plan d'Accès · Campus de {mainCenter.city}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {mainCenter.landmark} — Accessible par tous les taxis et motos de {mainCenter.city}.
              </p>
            </div>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(mainCenter.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#1B4D2E] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer self-start md:self-auto border border-slate-300"
            >
              <Navigation className="w-4 h-4 text-[#2E7D32]" />
              <span>Itinéraire Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>

          {/* Google Maps embed iframe propre et sécurisé */}
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
            <iframe
              title={`Carte de localisation du campus ADONAI-FORMATION à ${mainCenter.city}`}
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(mainCenter.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full filter saturate-90 contrast-105"
              loading="lazy"
            />
          </div>
        </div>

        {/* Ligne d'information générale */}
        <div className="mt-14 p-5 rounded-2xl bg-white border border-slate-200 text-center text-xs text-slate-600 space-y-1">
          <p>
            Infoline générale nationale ADONAI-FORMATION :{' '}
            <a href={`tel:${GENERAL_CONTACT.primaryPhone.replace(/\s/g, '')}`} className="font-bold text-[#1B4D2E] underline hover:text-[#2E7D32]">
              {GENERAL_CONTACT.primaryPhone}
            </a>
            {' '}· Numéros secondaires : {GENERAL_CONTACT.secondaryPhones.join(' / ')}
          </p>
          <p className="text-slate-500">
            Email officiel :{' '}
            <a href={`mailto:${GENERAL_CONTACT.email}`} className="font-bold text-[#1B4D2E] underline hover:text-[#2E7D32]">
              {GENERAL_CONTACT.email}
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
