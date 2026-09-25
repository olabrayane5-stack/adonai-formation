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
import { RegistrationForm } from './components/RegistrationForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Filiere } from './data/coursesData';
import { IMAGES } from './assets/images';

export default function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('accueil');
  const [selectedCourseModal, setSelectedCourseModal] = useState<Filiere | null>(null);
  
  // Registration form auto-fill states
  const [formFiliere, setFormFiliere] = useState<string>('Haute couture');
  const [formCenter, setFormCenter] = useState<string>('Porto-Novo');
  const [formDuration, setFormDuration] = useState<'12 mois' | '24 mois'>('12 mois');
  const [formScholarship, setFormScholarship] = useState<boolean>(true);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash === 'a-propos') setCurrentPage('a-propos');
      else if (hash === 'formations' || hash === 'filieres') setCurrentPage('filieres');
      else if (hash === 'tarifs') setCurrentPage('tarifs');
      else if (hash === 'centres') setCurrentPage('centres');
      else if (hash === 'contact' || hash === 'inscription') setCurrentPage('inscription');
      else setCurrentPage('accueil');
    };

    // Initial check
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: AppPage) => {
    setCurrentPage(page);
    const hashTarget = page === 'filieres' ? 'formations' : page === 'inscription' ? 'contact' : page;
    window.location.hash = `/${hashTarget}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCourse = (filiere: Filiere) => {
    setFormFiliere(filiere.name);
    navigateTo('inscription');
  };

  const handleApplyForScholarship = () => {
    setFormScholarship(true);
    navigateTo('inscription');
  };

  const handleSelectDuration = (duration: '12 mois' | '24 mois') => {
    setFormDuration(duration);
    navigateTo('inscription');
  };

  const handleSelectCenter = (centerCity: string) => {
    setFormCenter(centerCity);
    navigateTo('inscription');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EEF0FA] text-[#14162B] font-sans antialiased selection:bg-[#E85B3D] selection:text-white">
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

        {/* 4.3 PAGE FORMATIONS : Grille des 12 filières avec bandeau photo, filtre interactif & modale */}
        {currentPage === 'filieres' && (
          <div>
            {/* Bandeau d'en-tête de page bleu marine quasi noir #12162A avec photo à faible opacité et triangles corail */}
            <div className="relative bg-[#12162A] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/10">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <img
                  src={IMAGES.workshopCouture}
                  alt="Ambiance atelier ADONAI-FORMATION"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Motif géométrique corail discret dans un coin (triangles) */}
              <svg className="absolute -top-6 -right-6 w-36 h-36 opacity-25 pointer-events-none text-[#E85B3D]" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
                <polygon points="100,0 60,0 100,40" />
                <polygon points="100,50 40,0 20,0 100,80" />
                <polygon points="100,90 10,0 0,0 100,100" />
              </svg>
              <div className="max-w-5xl mx-auto relative z-10 text-center space-y-3">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#F5C64B] bg-white/10 px-4 py-1.5 rounded-full inline-block border border-white/15 backdrop-blur-sm">
                  Catalogue Officiel Rentrée 2026
                </span>
                <h1 className="text-4xl sm:text-6xl font-black font-display text-white uppercase tracking-tight leading-tight">
                  Nos 12 Filières <span className="text-[#E85B3D]">d'Atelier</span>
                </h1>
                <p className="mt-3 text-white/85 max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
                  Découvrez nos formations pratiques en conditions réelles d'atelier. Choisissez votre métier d'avenir et devenez un expert reconnu.
                </p>
              </div>
            </div>

            {/* Contenu complet avec filtres interactifs et grille de cartes */}
            <CoursesSection
              onSelectCourse={handleSelectCourse}
              onOpenModal={(course) => setSelectedCourseModal(course)}
            />
          </div>
        )}

        {/* 4.4 PAGE TARIFS : Grille tarifaire, Bourses, Simulateur & FAQ en accordéon animé */}
        {currentPage === 'tarifs' && (
          <div>
            {/* Bandeau d'en-tête bleu marine quasi noir #12162A avec photo et motif corail */}
            <div className="relative bg-[#12162A] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/10">
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <img
                  src={IMAGES.heroBrightStudents}
                  alt="Étudiants ADONAI-FORMATION"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Motif géométrique corail discret dans un coin (triangles) */}
              <svg className="absolute -top-6 -right-6 w-36 h-36 opacity-25 pointer-events-none text-[#E85B3D]" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
                <polygon points="100,0 60,0 100,40" />
                <polygon points="100,50 40,0 20,0 100,80" />
                <polygon points="100,90 10,0 0,0 100,100" />
              </svg>
              <div className="max-w-5xl mx-auto relative z-10 text-center space-y-3">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#F5C64B] bg-white/10 px-4 py-1.5 rounded-full inline-block border border-white/15 backdrop-blur-sm">
                  Transparence & Égalité des Chances
                </span>
                <h1 className="text-4xl sm:text-6xl font-black font-display text-white uppercase tracking-tight leading-tight">
                  Tarifs & Programme de <span className="text-[#E85B3D]">1500 Bourses</span>
                </h1>
                <p className="mt-3 text-white/85 max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
                  Investissez sereinement dans votre avenir grâce à des tarifs justes et un échelonnement souple des paiements.
                </p>
              </div>
            </div>

            <PricingSection
              onApplyForScholarship={handleApplyForScholarship}
              onSelectDuration={handleSelectDuration}
            />
          </div>
        )}

        {/* 4.5 PAGE CENTRES : 3 sous-sections complètes, photos de fond & carte Maps */}
        {currentPage === 'centres' && (
          <div>
            {/* Bandeau d'en-tête de page bleu marine quasi noir #12162A avec triangles corail */}
            <div className="relative bg-[#12162A] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/10">
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <img
                  src={IMAGES.centerPortoNovo}
                  alt="Campus ADONAI-FORMATION"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Motif géométrique corail discret dans un coin (triangles) */}
              <svg className="absolute -top-6 -right-6 w-36 h-36 opacity-25 pointer-events-none text-[#E85B3D]" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
                <polygon points="100,0 60,0 100,40" />
                <polygon points="100,50 40,0 20,0 100,80" />
                <polygon points="100,90 10,0 0,0 100,100" />
              </svg>
              <div className="max-w-5xl mx-auto relative z-10 text-center space-y-3">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#F5C64B] bg-white/10 px-4 py-1.5 rounded-full inline-block border border-white/15 backdrop-blur-sm">
                  Infrastructures Pédagogiques
                </span>
                <h1 className="text-4xl sm:text-6xl font-black font-display text-white uppercase tracking-tight leading-tight">
                  Nos 3 Campus au <span className="text-[#E85B3D]">Bénin</span>
                </h1>
                <p className="mt-3 text-white/85 max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
                  Des ateliers spacieux et modernes à <strong>Porto-Novo</strong> (siège historique), <strong>Cotonou</strong> et <strong>Parakou</strong>.
                </p>
              </div>
            </div>

            <CentersSection onSelectCenter={handleSelectCenter} />
          </div>
        )}

        {/* 4.6 PAGE CONTACT / INSCRIPTION : Explication 4 étapes & formulaire complet */}
        {currentPage === 'inscription' && (
          <div>
            <div className="relative bg-[#12162A] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/10">
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <img
                  src={IMAGES.trainerMentor}
                  alt="Apprenants et encadrement ADONAI-FORMATION"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Motif géométrique corail discret dans un coin (triangles) */}
              <svg className="absolute -top-6 -right-6 w-36 h-36 opacity-25 pointer-events-none text-[#E85B3D]" viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
                <polygon points="100,0 60,0 100,40" />
                <polygon points="100,50 40,0 20,0 100,80" />
                <polygon points="100,90 10,0 0,0 100,100" />
              </svg>
              <div className="max-w-5xl mx-auto relative z-10 text-center space-y-3">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#F5C64B] bg-white/10 px-4 py-1.5 rounded-full inline-block border border-white/15 backdrop-blur-sm">
                  Session Officielle 2026-2027
                </span>
                <h1 className="text-4xl sm:text-6xl font-black font-display text-white uppercase tracking-tight leading-tight">
                  Candidature & <span className="text-[#E85B3D]">Pré-Inscription</span>
                </h1>
                <p className="mt-3 text-white/85 max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
                  Remplissez votre dossier en ligne pour réserver votre poste en atelier dès la rentrée du 05 octobre 2026.
                </p>
              </div>
            </div>

            <RegistrationForm
              initialFiliere={formFiliere}
              initialCenter={formCenter}
              initialDuration={formDuration}
              initialScholarship={formScholarship}
            />
          </div>
        )}
      </main>

      {/* Modal Détails Filière avec programme & compétences */}
      <CourseModal
        course={selectedCourseModal}
        onClose={() => setSelectedCourseModal(null)}
        onSelectCourse={handleSelectCourse}
      />

      {/* Pied de page riche en 3 colonnes */}
      <Footer onNavigate={navigateTo} />

      {/* Bouton WhatsApp flottant permanent */}
      <FloatingWhatsApp />
    </div>
  );
}
