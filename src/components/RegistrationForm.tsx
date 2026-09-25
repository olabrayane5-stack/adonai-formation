import { useState, useEffect } from 'react';
import { 
  Send, 
  MessageSquare, 
  Phone, 
  CheckCircle2, 
  Clock, 
  Printer, 
  RotateCcw
} from 'lucide-react';
import { FILIERES_DATA } from '../data/coursesData';
import { GENERAL_CONTACT, CENTERS_DATA } from '../data/centersData';

interface RegistrationFormProps {
  initialFiliere?: string;
  initialCenter?: string;
  initialDuration?: '12 mois' | '24 mois';
  initialScholarship?: boolean;
}

export interface CandidateApplication {
  id: string;
  fullName: string;
  phone: string;
  filiere: string;
  center: string;
  duration: string;
  applyScholarship: boolean;
  createdAt: string;
}

export function RegistrationForm({
  initialFiliere,
  initialCenter,
  initialDuration,
  initialScholarship,
}: RegistrationFormProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [filiere, setFiliere] = useState(initialFiliere || 'Haute couture');
  const [center, setCenter] = useState(initialCenter || 'Porto-Novo');
  const [duration, setDuration] = useState<'12 mois' | '24 mois'>(initialDuration || '12 mois');
  const [applyScholarship, setApplyScholarship] = useState<boolean>(initialScholarship ?? true);

  const [submittedApp, setSubmittedApp] = useState<CandidateApplication | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialFiliere) setFiliere(initialFiliere);
    if (initialCenter) setCenter(initialCenter);
    if (initialDuration) setDuration(initialDuration);
    if (initialScholarship !== undefined) setApplyScholarship(initialScholarship);
  }, [initialFiliere, initialCenter, initialDuration, initialScholarship]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Le nom complet est obligatoire';
    if (!phone.trim()) {
      errs.phone = 'Le numéro de téléphone est obligatoire';
    } else if (phone.trim().length < 8) {
      errs.phone = 'Numéro de téléphone incomplet (minimum 8 chiffres)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const randomId = 'AF-2026-' + Math.floor(1000 + Math.random() * 9000);
    const durationLabel = duration === '12 mois' ? '12 mois — 200 000 FCFA' : '24 mois — 350 000 FCFA';

    const newApp: CandidateApplication = {
      id: randomId,
      fullName: fullName.trim(),
      phone: phone.trim(),
      filiere,
      center,
      duration: durationLabel,
      applyScholarship,
      createdAt: new Date().toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };

    // Save locally
    try {
      const stored = localStorage.getItem('adonai_applications');
      const list = stored ? JSON.parse(stored) : [];
      localStorage.setItem('adonai_applications', JSON.stringify([newApp, ...list]));
    } catch {
      // ignore
    }

    setSubmittedApp(newApp);

    // Message WhatsApp pré-rempli
    const messageText = `Bonjour ADONAI-FORMATION Bénin,
Je vous adresse ma demande d'inscription pour la Rentrée du 05 Octobre 2026 :

• Nom complet : ${newApp.fullName}
• Téléphone : ${newApp.phone}
• Filière souhaitée : ${newApp.filiere}
• Centre : ${newApp.center}
• Durée : ${newApp.duration}
• Bourse d'études (21 000 FCFA) : ${newApp.applyScholarship ? 'OUI (Je demande la bourse)' : 'Non (Plein tarif)'}
• Référence dossier : ${newApp.id}

Merci de m'indiquer la confirmation de mon inscription et le créneau pour déposer mes photos et mon acte de naissance.`;

    const whatsappUrl = `https://wa.me/${GENERAL_CONTACT.whatsappNumber}?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setSubmittedApp(null);
    setFullName('');
    setPhone('');
  };

  return (
    <section id="inscription" className="py-20 sm:py-28 bg-gradient-to-br from-[#12162A] via-[#12162A] to-[#26339E] text-white relative border-b border-white/10 overflow-hidden">
      {/* Motif discret en arrière-plan (léger quadrillage technique en transparence) */}
      <div 
        className="absolute inset-0 opacity-[0.045] pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#E85B3D] bg-white/10 border border-white/15 px-3.5 py-1 rounded-full inline-block">
            Inscriptions Rentrée 2026
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
            Formulaire d'Inscription & Bourse
          </h2>
          <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed">
            Rejoignez ADONAI-FORMATION pour apprendre un métier pratique d'avenir. Le processus d'admission est simple, rapide et transparent.
          </p>
        </div>

        {/* Déroulé du processus d'inscription en 4 étapes clés */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-5 relative">
              <span className="w-7 h-7 rounded-full bg-[#E85B3D] text-[#12162A] font-display font-black text-sm flex items-center justify-center mb-3">
                1
              </span>
              <h4 className="font-display font-black text-lg text-white uppercase leading-tight mb-1">
                Dépôt en ligne
              </h4>
              <p className="text-xs text-white/75 leading-relaxed">
                Remplissez le formulaire avec vos coordonnées, la filière et le centre retenu.
              </p>
            </div>

            <div className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-5 relative">
              <span className="w-7 h-7 rounded-full bg-[#E85B3D] text-[#12162A] font-display font-black text-sm flex items-center justify-center mb-3">
                2
              </span>
              <h4 className="font-display font-black text-lg text-white uppercase leading-tight mb-1">
                Contact & Validation
              </h4>
              <p className="text-xs text-white/75 leading-relaxed">
                Notre équipe vous contacte sous 24h pour confirmer votre dossier et vos pièces.
              </p>
            </div>

            <div className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-5 relative">
              <span className="w-7 h-7 rounded-full bg-[#E85B3D] text-[#12162A] font-display font-black text-sm flex items-center justify-center mb-3">
                3
              </span>
              <h4 className="font-display font-black text-lg text-white uppercase leading-tight mb-1">
                Frais d'inscription
              </h4>
              <p className="text-xs text-white/75 leading-relaxed">
                Règlement des frais de dossier (15 000 FCFA) et délivrance du livret officiel.
              </p>
            </div>

            <div className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-5 relative">
              <span className="w-7 h-7 rounded-full bg-[#E85B3D] text-[#12162A] font-display font-black text-sm flex items-center justify-center mb-3">
                4
              </span>
              <h4 className="font-display font-black text-lg text-white uppercase leading-tight mb-1">
                Rentrée en atelier
              </h4>
              <p className="text-xs text-white/75 leading-relaxed">
                Démarrage effectif des cours et travaux pratiques dès le <strong>05 octobre 2026</strong>.
              </p>
            </div>

          </div>
        </div>

        {/* 3.7 Formulaire centré dans un encadré blanc sur fond vert foncé */}
        <div className="max-w-2xl mx-auto">
          {submittedApp ? (
            /* Fiche de confirmation post-soumission */
            <div className="bg-white text-slate-900 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
              <div className="flex items-center gap-3 text-emerald-700 bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                <CheckCircle2 className="w-6 h-6 shrink-0 text-emerald-600" />
                <div>
                  <h3 className="font-display font-black text-xl uppercase leading-none">
                    Demande transmise avec succès !
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Votre demande a été envoyée sur WhatsApp et enregistrée sous le numéro <strong className="text-slate-900">{submittedApp.id}</strong>.
                  </p>
                </div>
              </div>

              {/* Récapitulatif */}
              <div className="space-y-2 text-xs sm:text-sm border-t border-b border-slate-100 py-4 text-slate-700">
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Nom complet :</span>
                  <strong className="text-slate-900">{submittedApp.fullName}</strong>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Téléphone :</span>
                  <strong className="text-slate-900">{submittedApp.phone}</strong>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Filière :</span>
                  <strong className="text-[#26339E]">{submittedApp.filiere}</strong>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Centre :</span>
                  <strong className="text-slate-900">{submittedApp.center}</strong>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Durée :</span>
                  <strong className="text-slate-900">{submittedApp.duration}</strong>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Bourse 21 000 FCFA :</span>
                  <strong className="text-[#D44A2D]">
                    {submittedApp.applyScholarship ? 'Oui (Bourse sollicitée)' : 'Non (Plein tarif)'}
                  </strong>
                </div>
              </div>

              {/* Numéros de secours du centre */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <p className="font-bold text-slate-800">
                  Numéros de secours du centre en cas de non-réponse immédiate :
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-slate-600 font-semibold">
                  <div>📞 01 66 73 06 67</div>
                  <div>📞 01 66 48 58 67</div>
                  <div>📞 01 53 51 95 43</div>
                </div>
              </div>

              {/* Boutons d'action */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 no-print">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-semibold cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Nouvelle demande</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="px-4 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-xs font-semibold text-slate-800 cursor-pointer flex items-center gap-1.5"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Imprimer</span>
                  </button>

                  <a
                    href={`https://wa.me/${GENERAL_CONTACT.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-[#E85B3D] hover:bg-[#D44A2D] text-[#12162A] text-xs font-extrabold uppercase tracking-wider cursor-pointer"
                  >
                    Ouvrir WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ) : (
            /* Le formulaire en 2 colonnes pour champs courts, 1 colonne pleine largeur pour durée et bouton d'envoi */
            <div className="bg-white text-slate-900 rounded-3xl p-8 sm:p-10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* 2 colonnes : Nom complet / Téléphone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ex: Romaric DOSSOU"
                      className={`w-full px-4 py-3 text-xs sm:text-sm bg-slate-50 border rounded-xl focus:outline-none focus:border-[#E85B3D] ${
                        errors.fullName ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ex: 01 66 73 06 67"
                      className={`w-full px-4 py-3 text-xs sm:text-sm bg-slate-50 border rounded-xl focus:outline-none focus:border-[#E85B3D] ${
                        errors.phone ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* 2 colonnes : Filière souhaitée / Centre */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Filière souhaitée <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={filiere}
                      onChange={(e) => setFiliere(e.target.value)}
                      className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-[#E85B3D]"
                    >
                      {FILIERES_DATA.map((f) => (
                        <option key={f.id} value={f.name}>
                          {f.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Centre <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={center}
                      onChange={(e) => setCenter(e.target.value)}
                      className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-[#E85B3D]"
                    >
                      <option value="Porto-Novo">Porto-Novo (Kandévié, carrefour Yaya gendarme)</option>
                      <option value="Cotonou">Cotonou</option>
                      <option value="Parakou">Parakou</option>
                    </select>
                  </div>
                </div>

                {/* 1 colonne pleine largeur : Durée (obligatoire) */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                    Durée de formation souhaitée <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label
                      className={`p-3.5 rounded-xl border-2 flex items-center gap-3 cursor-pointer transition-all ${
                        duration === '12 mois'
                          ? 'border-[#26339E] bg-[#EEF0FA] text-[#12162A]'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="duration"
                        checked={duration === '12 mois'}
                        onChange={() => setDuration('12 mois')}
                        className="w-4 h-4 text-[#26339E] focus:ring-[#26339E]"
                      />
                      <div>
                        <div className="font-bold text-xs sm:text-sm">12 mois — 200 000 FCFA</div>
                        <div className="text-[11px] text-slate-500">Paiement échelonné possible</div>
                      </div>
                    </label>

                    <label
                      className={`p-3.5 rounded-xl border-2 flex items-center gap-3 cursor-pointer transition-all ${
                        duration === '24 mois'
                          ? 'border-[#26339E] bg-[#EEF0FA] text-[#12162A]'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="duration"
                        checked={duration === '24 mois'}
                        onChange={() => setDuration('24 mois')}
                        className="w-4 h-4 text-[#26339E] focus:ring-[#26339E]"
                      />
                      <div>
                        <div className="font-bold text-xs sm:text-sm">24 mois — 350 000 FCFA</div>
                        <div className="text-[11px] text-slate-500">Préparation au diplôme CQP</div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Option bourse d'études 1500 places */}
                <div className="p-3.5 rounded-xl bg-[#EEF0FA] border border-[#26339E]/20 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="scholarshipCheckbox"
                    checked={applyScholarship}
                    onChange={(e) => setApplyScholarship(e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded text-[#E85B3D] focus:ring-[#E85B3D] cursor-pointer"
                  />
                  <label htmlFor="scholarshipCheckbox" className="text-xs text-slate-800 cursor-pointer">
                    <strong className="block font-bold text-slate-900">
                      Je souhaite bénéficier d'une bourse d'études (1500 places disponibles)
                    </strong>
                    <span className="text-slate-600 block mt-0.5">
                      Participation réduite à <strong>21 000 FCFA</strong> au lieu du plein tarif pour la rentrée 2026.
                    </span>
                  </label>
                </div>

                {/* 1 colonne pleine largeur pour le bouton d'envoi : « Envoyer ma demande » */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-[#E85B3D] hover:bg-[#D44A2D] text-[#12162A] font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg transition-all cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    <span>Envoyer ma demande</span>
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    Votre demande sera directement transmise via WhatsApp à la direction du centre.
                  </p>
                </div>

              </form>
            </div>
          )}
        </div>

        {/* Contacts d'urgence et coordonnées au pied du formulaire */}
        <div className="mt-12 text-center text-xs text-white/70 space-y-1">
          <p>Besoin d'aide immédiate pour remplir ce formulaire ?</p>
          <p className="font-semibold text-white">
            Appelez le secrétariat au{' '}
            <a href={`tel:${GENERAL_CONTACT.primaryPhone}`} className="text-[#E85B3D] underline">
              {GENERAL_CONTACT.primaryPhone}
            </a>
            {' '}ou au{' '}
            <a href="tel:0166485867" className="text-[#E85B3D] underline">
              01 66 48 58 67
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
