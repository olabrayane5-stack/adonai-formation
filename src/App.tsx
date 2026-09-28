/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Header, AppPage } from './components/Header';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { CoursesSection } from './components/CoursesSection';
import { CourseModal } from './components/CourseModal';
import { PricingSection } from './components/PricingSection';
import { CentersSection } from './components/CentersSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FaqSection } from './components/FaqSection';
import { Filiere } from './data/coursesData';
import { GENERAL_CONTACT, CENTERS_DATA } from './data/centersData';
import { IMAGES } from './assets/images';
import { Mail, Phone, MapPin, MessageCircle, UserPlus, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('accueil');
  const [selectedCourseModal, setSelectedCourseModal] = useState<Filiere | null>(null);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash === 'a-propos') setCurrentPage('a-propos');
      else if (hash === 'formations' || hash === 'filieres') setCurrentPage('filieres');
      else if (hash === 'tarifs') setCurrentPage('tarifs');
      else if (hash === 'centres') setCurrentPage('centres');
      else if (hash === 'contact') setCurrentPage('contact');
      else setCurrentPage('accueil');
    };

    // Initial check
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Toute demande d'inscription ouvre directement le Google Form officiel du client
  // (le directeur reçoit les réponses dans son compte Google — pas de formulaire interne, pas de backend)
  const navigateTo = (page: AppPage) => {
    if (page === 'inscription') {
      window.open(GENERAL_CONTACT.googleFormUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    setCurrentPage(page);
    window.location.hash = `/${page === 'filieres' ? 'formations' : page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F1F7F2] text-[#1B4D2E] font-sans antialiased selection:bg-[#F5B800] selection:text-[#1B4D2E]">
      {/* Header Sticky avec navigation entre les pages */}
      <Header 
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenRegister={() => navigateTo('inscription')} 
      />

      {/* Rendu dynamique multi-pages : chaque lien mène à son contenu développé */}
      <main className="flex-grow">
        
        {/* 4.1 PAGE ACCUEIL : Un teaser de chaque page, rien de complet */}
        {currentPage === 'accueil' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectCourseModal={(course) => setSelectedCourseModal(course)}
          />
        )}

        {/* 4.2 PAGE À PROPOS : Développée en profondeur (Mission, 4 Piliers, Chiffres animés, Centres) */}
        {currentPage === 'a-propos' && (
          <AboutPage 
            onNavigateToCourses={() => navigateTo('filieres')}
            onNavigateToRegister={() => navigateTo('inscription')}
            onNavigateToCenters={() => navigateTo('centres')}
          />
        )}

        {/* 4.3 PAGE FORMATIONS : Grille des 20 filières avec bandeau photo, filtre interactif & modale */}
        {currentPage === 'filieres' && (
          <div>
            {/* Bandeau d'en-tête de page bleu marine quasi noir #1B4D2E avec photo à faible opacité et triangles corail */}
            <div className="relative bg-[#1B4D2E] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/10">
              <div className="absolute inset-0 opacity-40 pointer-events-none">
                <img
                  src={IMAGES.workshopCouture}
                  alt="Ambiance atelier ADONAI-FORMATION"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Motif géométrique corail discret dans un coin (triangles) */}
              <svg className="absolute -top-6 -right-6 w-36 h-36 opacity-25 pointer-events-none text-[#F5B800]" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
                <polygon points="100,0 60,0 100,40" />
                <polygon points="100,50 40,0 20,0 100,80" />
                <polygon points="100,90 10,0 0,0 100,100" />
              </svg>
              <div className="max-w-5xl mx-auto relative z-10 text-center space-y-3">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#F5B800] bg-white/10 px-4 py-1.5 rounded-full inline-block border border-white/15 backdrop-blur-sm">
                  Catalogue Officiel Rentrée 2026
                </span>
                <h1 className="text-4xl sm:text-6xl font-black font-display text-white uppercase tracking-tight leading-tight">
                  Nos 20 Filières <span className="text-[#F5B800]">d'Atelier</span>
                </h1>
                <p className="mt-3 text-white/85 max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
                  Découvrez nos formations pratiques en conditions réelles d'atelier. Choisissez votre métier d'avenir et devenez un expert reconnu.
                </p>
              </div>
            </div>

            {/* Contenu complet avec filtres interactifs et grille de cartes */}
            <CoursesSection
              onSelectCourse={() => navigateTo('inscription')}
              onOpenModal={(course) => setSelectedCourseModal(course)}
            />
          </div>
        )}

        {/* 4.4 PAGE TARIFS : Grille tarifaire, Bourses, Simulateur & FAQ en accordéon animé */}
        {currentPage === 'tarifs' && (
          <div>
            {/* Bandeau d'en-tête bleu marine quasi noir #1B4D2E avec photo et motif corail */}
            <div className="relative bg-[#1B4D2E] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/10">
              <div className="absolute inset-0 opacity-40 pointer-events-none">
                <img
                  src={IMAGES.heroBrightStudents}
                  alt="Étudiants ADONAI-FORMATION"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Motif géométrique corail discret dans un coin (triangles) */}
              <svg className="absolute -top-6 -right-6 w-36 h-36 opacity-25 pointer-events-none text-[#F5B800]" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
                <polygon points="100,0 60,0 100,40" />
                <polygon points="100,50 40,0 20,0 100,80" />
                <polygon points="100,90 10,0 0,0 100,100" />
              </svg>
              <div className="max-w-5xl mx-auto relative z-10 text-center space-y-3">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#F5B800] bg-white/10 px-4 py-1.5 rounded-full inline-block border border-white/15 backdrop-blur-sm">
                  Transparence & Égalité des Chances
                </span>
                <h1 className="text-4xl sm:text-6xl font-black font-display text-white uppercase tracking-tight leading-tight">
                  Tarifs & Programme de <span className="text-[#F5B800]">1500 Bourses</span>
                </h1>
                <p className="mt-3 text-white/85 max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
                  Investissez sereinement dans votre avenir grâce à des tarifs justes et un échelonnement souple des paiements.
                </p>
              </div>
            </div>

            <PricingSection
              onApplyForScholarship={() => navigateTo('inscription')}
              onSelectDuration={() => navigateTo('inscription')}
            />
          </div>
        )}

        {/* 4.5 PAGE CENTRES : 3 sous-sections complètes, photos de fond & carte Maps */}
        {currentPage === 'centres' && (
          <div>
            {/* Bandeau d'en-tête de page bleu marine quasi noir #1B4D2E avec triangles corail */}
            <div className="relative bg-[#1B4D2E] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/10">
              <div className="absolute inset-0 opacity-40 pointer-events-none">
                <img
                  src={IMAGES.centerPortoNovo}
                  alt="Campus ADONAI-FORMATION"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Motif géométrique corail discret dans un coin (triangles) */}
              <svg className="absolute -top-6 -right-6 w-36 h-36 opacity-25 pointer-events-none text-[#F5B800]" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
                <polygon points="100,0 60,0 100,40" />
                <polygon points="100,50 40,0 20,0 100,80" />
                <polygon points="100,90 10,0 0,0 100,100" />
              </svg>
              <div className="max-w-5xl mx-auto relative z-10 text-center space-y-3">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#F5B800] bg-white/10 px-4 py-1.5 rounded-full inline-block border border-white/15 backdrop-blur-sm">
                  Infrastructures Pédagogiques
                </span>
                <h1 className="text-4xl sm:text-6xl font-black font-display text-white uppercase tracking-tight leading-tight">
                  Nos 4 Campus au <span className="text-[#F5B800]">Bénin</span>
                </h1>
                <p className="mt-3 text-white/85 max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
                  Des ateliers spacieux et modernes à <strong>Porto-Novo</strong> (siège historique), <strong>Cotonou</strong>, <strong>Calavi</strong> et <strong>Parakou</strong>.
                </p>
              </div>
            </div>

            <CentersSection onSelectCenter={() => navigateTo('inscription')} />
          </div>
        )}

        {/* 4.6 PAGE CONTACT : coordonnées (email, téléphones) + FAQ — reste sur le site, aucun formulaire externe ici */}
        {currentPage === 'contact' && (
          <div>
            {/* Bandeau d'en-tête bleu marine quasi noir #1B4D2E avec triangles corail */}
            <div className="relative bg-[#1B4D2E] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/10">
              <div className="absolute inset-0 opacity-40 pointer-events-none">
                <img
                  src={IMAGES.trainerMentor}
                  alt="Secrétariat ADONAI-FORMATION"
                  className="w-full h-full object-cover"
                />
              </div>
              <svg className="absolute -top-6 -right-6 w-36 h-36 opacity-25 pointer-events-none text-[#F5B800]" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
                <polygon points="100,0 60,0 100,40" />
                <polygon points="100,50 40,0 20,0 100,80" />
                <polygon points="100,90 10,0 0,0 100,100" />
              </svg>
              <div className="max-w-5xl mx-auto relative z-10 text-center space-y-3">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#F5B800] bg-white/10 px-4 py-1.5 rounded-full inline-block border border-white/15 backdrop-blur-sm">
                  Une Question ? Parlons-en
                </span>
                <h1 className="text-4xl sm:text-6xl font-black font-display text-white uppercase tracking-tight leading-tight">
                  Contactez <span className="text-[#F5B800]">Notre Équipe</span>
                </h1>
                <p className="mt-3 text-white/85 max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
                  Le secrétariat de chacun de nos 4 centres est à votre écoute pour toute question sur les formations, les tarifs ou les bourses.
                </p>
              </div>
            </div>

            {/* Coordonnées générales */}
            <section className="py-16 sm:py-20 bg-[#F1F7F2] border-b border-slate-200">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="adonai-card rounded-2xl bg-white p-6 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#1B4D2E] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#F5B800]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-extrabold text-[#2E7D32] mb-1">Email Officiel</p>
                    <a href={`mailto:${GENERAL_CONTACT.email}`} className="text-sm font-bold text-[#1B4D2E] hover:underline">
                      {GENERAL_CONTACT.email}
                    </a>
                  </div>
                </div>
                <div className="adonai-card rounded-2xl bg-white p-6 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#1B4D2E] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#F5B800]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-extrabold text-[#2E7D32] mb-1">Lignes Téléphoniques</p>
                    <p className="text-sm font-bold text-[#1B4D2E]">
                      {GENERAL_CONTACT.primaryPhone} <span className="text-slate-400 font-normal">/</span> {GENERAL_CONTACT.secondaryPhones.join(' / ')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Coordonnées par centre */}
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-display font-black text-2xl sm:text-3xl text-[#1B4D2E] uppercase tracking-tight text-center mb-8">
                  Un Secrétariat Dans Chacun de Nos 4 Centres
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {CENTERS_DATA.map((center) => (
                    <div key={center.id} className="adonai-card rounded-2xl bg-white p-5 space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#2E7D32] shrink-0" />
                        <p className="font-display font-black text-lg text-[#1B4D2E]">{center.city}</p>
                      </div>
                      <p className="text-xs text-slate-600">{center.address}</p>
                      <a href={`tel:${center.phoneDigits}`} className="block text-xs font-bold text-[#2E7D32] hover:underline pt-1">
                        {center.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Comment nous contacter / Comment s'inscrire — réponses directes, tout reste sur le site */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Comment nous contacter */}
                <div className="adonai-card rounded-2xl border border-slate-200 p-7 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <MessageCircle className="w-5 h-5 text-[#2E7D32]" />
                    <h3 className="font-display font-black text-xl text-[#1B4D2E] uppercase tracking-tight">
                      Comment Nous Contacter ?
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pour toute question sur les formations, les tarifs ou les bourses, trois moyens simples :
                  </p>
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span>Appelez ou écrivez sur WhatsApp au secrétariat du centre le plus proche de chez vous</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span>Envoyez un email à <strong>{GENERAL_CONTACT.email}</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span>Rendez-vous directement au secrétariat de l'un de nos 4 centres</span>
                    </li>
                  </ul>
                </div>

                {/* Comment s'inscrire */}
                <div className="adonai-card rounded-2xl bg-[#1B4D2E] text-white p-7 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <UserPlus className="w-5 h-5 text-[#F5B800]" />
                    <h3 className="font-display font-black text-xl text-white uppercase tracking-tight">
                      Comment S'inscrire ?
                    </h3>
                  </div>
                  <ol className="space-y-2.5 text-sm text-white/85">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#F5B800] shrink-0">1.</span>
                      <span>Choisissez votre centre et votre filière parmi les 20 proposées</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#F5B800] shrink-0">2.</span>
                      <span>Remplissez le formulaire officiel d'inscription en ligne</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#F5B800] shrink-0">3.</span>
                      <span>Le secrétariat vous recontacte sous 48h pour la suite du dossier</span>
                    </li>
                  </ol>
                  <button
                    onClick={() => navigateTo('inscription')}
                    className="w-full mt-2 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F5B800] hover:bg-[#E0A600] text-[#1B4D2E] font-extrabold text-sm uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Remplir le formulaire d'inscription</span>
                  </button>
                </div>

              </div>
            </section>

            {/* FAQ générale */}
            <FaqSection />
          </div>
        )}

      </main>

      {/* Modal Détails Filière avec programme & compétences */}
      <CourseModal
        course={selectedCourseModal}
        onClose={() => setSelectedCourseModal(null)}
        onSelectCourse={() => navigateTo('inscription')}
      />

      {/* Pied de page riche en 3 colonnes */}
      <Footer onNavigate={navigateTo} />

      {/* Bouton WhatsApp flottant permanent */}
      <FloatingWhatsApp />
    </div>
  );
}
