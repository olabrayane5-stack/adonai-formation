import { IMAGES } from '../assets/images';

export type CourseCategory =
  | 'mode-artisanat'
  | 'batiment-technique'
  | 'sante-pharmacie'
  | 'beaute-image'
  | 'hotellerie-restauration'
  | 'digital-bureautique';

export interface Filiere {
  id: string;
  name: string;
  category: CourseCategory;
  categoryLabel: string;
  duration: '12 ou 24 mois';
  description: string;
  longDescription: string;
  imageUrl: string;
  skills: string[];
  careers: string[];
  equipment: string[];
  iconName: string;
  featured?: boolean;
}

export const FILIERES_DATA: Filiere[] = [
  // ---------- 1. Mode & Artisanat créatif ----------
  {
    id: 'haute-couture',
    name: 'Haute couture',
    category: 'mode-artisanat',
    categoryLabel: 'Mode & Artisanat créatif',
    duration: '12 ou 24 mois',
    imageUrl: IMAGES.hauteCouture,
    description: 'Conception et confection de vêtements sur mesure, de la prise de mesure à la finition, avec les techniques de couture professionnelle.',
    longDescription: 'La formation en Haute Couture forme des créateurs et artisans capables de concevoir, couper et monter des vêtements haut de gamme. Dès les premières semaines, les apprenants travaillent sur machines industrielles, maîtrisent le wax, la dentelle, les soies et les finitions de prestige.',
    skills: [
      'Patronage & gradation industrielle',
      'Coupe sur tissu délicat & wax africain',
      'Montage de pièces complexes (costumes, robes de cérémonie)',
      'Finitions manuelles haut de gamme et broderie'
    ],
    careers: [
      'Chef d\'atelier de haute couture',
      'Créateur / Couturier indépendant',
      'Costumier pour le cinéma et le spectacle',
      'Responsable de confection textile'
    ],
    equipment: ['Piqueuses plates industrielles', 'Surjeteuses 4 & 5 fils', 'Mannequins professionnels', 'Tables de coupe grand format'],
    iconName: 'Scissors',
    featured: true,
  },
  {
    id: 'stylisme-modelisme',
    name: 'Stylisme-Modélisme',
    category: 'mode-artisanat',
    categoryLabel: 'Mode & Artisanat créatif',
    duration: '12 ou 24 mois',
    imageUrl: IMAGES.stylismeModelisme,
    description: 'Création de modèles, dessin de mode et construction de patrons pour donner vie à ses propres collections.',
    longDescription: 'Alliant vision artistique et rigueur technique, cette filière permet de traduire des tendances en modèles vendables. Les stagiaires apprennent le dessin de mode, la morphologie, le choix des matières et le moulage sur mannequin.',
    skills: [
      'Dessin technique de mode & figurines',
      'Moulage sur mannequin et transformation',
      'Conception de collections saisonnières',
      'Calcul des coûts de production textile'
    ],
    careers: [
      'Styliste créateur de marque',
      'Modéliste patronnier',
      'Conseiller en image et vestimentaire',
      'Directeur artistique textile'
    ],
    equipment: ['Tables de dessin', 'Mannequins réglables', 'Logiciels de moodboard', 'Atelier d\'essayage'],
    iconName: 'Sparkles',
  },
  {
    id: 'decoration-evenementielle',
    name: 'Décoration événementielle',
    category: 'mode-artisanat',
    categoryLabel: 'Mode & Artisanat créatif',
    duration: '12 ou 24 mois',
    imageUrl: IMAGES.decorationEvenementielle,
    description: 'Conception et réalisation de décors pour mariages, anniversaires et événements professionnels.',
    longDescription: 'Créez des ambiances inoubliables pour les cérémonies et événements d\'envergure. Maîtrisez le drapage de plafonds et scènes, les structures de ballons organiques, les centres de table floraux et l\'éclairage d\'ambiance.',
    skills: [
      'Scénographie et harmonie des couleurs',
      'Techniques de drapage professionnel et arches florales',
      'Conception 3D/plans d\'implantation de réceptions',
      'Gestion budgétaire et négociation fournisseurs'
    ],
    careers: [
      'Décorateur événementiel professionnel',
      'Wedding planner / Organisateur de réceptions',
      'Scénographe d\'espaces commerciaux',
      'Prestataire en mobilier événementiel'
    ],
    equipment: ['Structures aluminium et backdrops', 'Matériel de drapé ignifugé', 'Projecteurs LED d\'ambiance', 'Accessoires de banquet'],
    iconName: 'Palette',
  },
  {
    id: 'serigraphie',
    name: 'Sérigraphie',
    category: 'mode-artisanat',
    categoryLabel: 'Mode & Artisanat créatif',
    duration: '12 ou 24 mois',
    imageUrl: IMAGES.heroBrightStudents,
    description: 'Impression de motifs et de logos sur textile et supports rigides, du calque à la finition en série.',
    longDescription: 'Formation pratique aux techniques d\'impression sur t-shirts, pagnes et supports publicitaires. Les apprenants réalisent leurs propres écrans, dosent les encres et maîtrisent l\'impression en petite et moyenne série pour les marques, événements et associations locales.',
    skills: [
      'Préparation d\'écrans et insolation de motifs',
      'Impression textile monochrome et multicouleur',
      'Dosage et mélange des encres sérigraphiques',
      'Finition, séchage et contrôle qualité en série'
    ],
    careers: [
      'Sérigraphe indépendant',
      'Technicien d\'atelier d\'impression textile',
      'Responsable production pour marque de vêtements',
      'Prestataire impression événementielle'
    ],
    equipment: ['Cadres et écrans de sérigraphie', 'Table d\'impression manuelle', 'Insoleuse', 'Sécheuse textile'],
    iconName: 'Palette',
  },

  // ---------- 2. Bâtiment & Technique ----------
  {
    id: 'electricite-batiment',
    name: 'Électricité bâtiment',
    category: 'batiment-technique',
    categoryLabel: 'Bâtiment & Technique',
    duration: '12 ou 24 mois',
    imageUrl: IMAGES.electriciteBatiment,
    description: 'Installation électrique domestique et industrielle : câblage, tableaux électriques, normes de sécurité.',
    longDescription: 'Formation intensive 100% pratique sur des maquettes réelles et chantiers partenaires. Les étudiants apprennent la lecture de plans électriques, le raccordement de tableaux divisionnaires, l\'éclairage, et les fondamentaux du solaire photovoltaïque.',
    skills: [
      'Schémas électriques & normes de sécurité NFC 15-100',
      'Câblage de tableaux, disjoncteurs et différentiels',
      'Dépannage d\'urgence et diagnostic de pannes',
      'Initiation au couplage solaire et onduleurs'
    ],
    careers: [
      'Électricien d\'installation bâtiment',
      'Technicien de maintenance résidentielle',
      'Artisan installateur agréé',
      'Chef d\'équipe électricité BTP'
    ],
    equipment: ['Tableaux pédagogiques réels', 'Multimètres & testeurs d\'isolement', 'Outillage électroportatif', 'Kits solaires de test'],
    iconName: 'Zap',
    featured: true,
  },
  {
    id: 'plomberie-generale',
    name: 'Plomberie générale',
    category: 'batiment-technique',
    categoryLabel: 'Bâtiment & Technique',
    duration: '12 ou 24 mois',
    imageUrl: IMAGES.plomberieGenerale,
    description: 'Installation et réparation des systèmes d\'eau et d\'assainissement, de la tuyauterie aux sanitaires.',
    longDescription: 'Devenez un professionnel indispensable dans le secteur du bâtiment. Apprentissage du façonnage des tubes en cuivre, PVC et multicouche, raccordement sanitaire, pose de chauffe-eau, fosses et réservoirs surélevés.',
    skills: [
      'Soudure et brasure cuivre, assemblage PVC & multicouche',
      'Installation de sanitaires, robinetteries et douches',
      'Montage de surpresseurs et pompes de forage',
      'Recherche et réparation de fuites d\'eau'
    ],
    careers: [
      'Plombier sanitaire indépendant',
      'Installateur en réseaux hydrauliques',
      'Technicien de maintenance hôtelière',
      'Responsable plomberie pour entreprises BTP'
    ],
    equipment: ['Étaux et cintreuses de tubes', 'Postes de soudure autogène', 'Caméras d\'inspection de canalisations', 'Atelier sanitaire complet'],
    iconName: 'Wrench',
  },
  {
    id: 'froid-climatisation',
    name: 'Froid-climatisation',
    category: 'batiment-technique',
    categoryLabel: 'Bâtiment & Technique',
    duration: '12 ou 24 mois',
    imageUrl: IMAGES.froidClimatisation,
    description: 'Installation et maintenance des systèmes de climatisation et de réfrigération, un métier très demandé.',
    longDescription: 'Secteur en forte demande au Bénin en raison du climat et du développement des commerces et résidences. Apprenez à manipuler les gaz frigorifiques en toute sécurité, réaliser le tirage au vide, tester l\'étanchéité et réparer les cartes de commande.',
    skills: [
      'Cycle frigorifique et thermodynamique appliquée',
      'Pose mécanique et raccordement électrique de splits',
      'Charge en fluide frigorigène (R410A, R32, R134a)',
      'Diagnostic électrique et compresseurs'
    ],
    careers: [
      'Technicien frigoriste résidentiel & tertiaire',
      'Frigoriste de chambres froides agroalimentaires',
      'Installateur de systèmes de climatisation',
      'Responsable SAV électroménager'
    ],
    equipment: ['Manifolds numériques et manomètres', 'Pompes à vide professionnelles', 'Détecteurs électroniques de fuites', 'Stations de récupération de gaz'],
    iconName: 'Wind',
    featured: true,
  },
  {
    id: 'maintenance-gsm',
    name: 'Maintenance GSM',
    category: 'batiment-technique',
    categoryLabel: 'Bâtiment & Technique',
    duration: '12 ou 24 mois',
    imageUrl: IMAGES.trainerMentor,
    description: 'Diagnostic et réparation de smartphones : écrans, batteries, cartes mères et logiciels.',
    longDescription: 'Un métier accessible et très demandé grâce à la multiplication des téléphones mobiles. Les apprenants dessoudent, remplacent et réparent les composants électroniques, flashent les systèmes et déblocent les appareils dans le respect des règles du métier.',
    skills: [
      'Diagnostic de pannes matérielles et logicielles',
      'Micro-soudure et remplacement de composants',
      'Changement d\'écrans, batteries et connecteurs',
      'Flashage, déblocage et mise à jour de systèmes mobiles'
    ],
    careers: [
      'Technicien réparateur de téléphones',
      'Gérant d\'atelier de maintenance GSM',
      'Technicien SAV pour boutique de téléphonie',
      'Réparateur itinérant / à domicile'
    ],
    equipment: ['Stations de micro-soudure', 'Loupes binoculaires', 'Kits d\'ouverture et outillage de précision', 'Logiciels de diagnostic mobile'],
    iconName: 'Smartphone',
  },

  // ---------- 3. Santé & Pharmacie ----------
  {
    id: 'delegation-medicale',
    name: 'Délégation médicale',
    category: 'sante-pharmacie',
    categoryLabel: 'Santé & Pharmacie',
    duration: '12 ou 24 mois',
    imageUrl: IMAGES.delegationMedicale,
    description: 'Techniques de prospection et de promotion des produits pharmaceutiques auprès des professionnels de santé.',
    longDescription: 'Intermédiaire clé entre les laboratoires pharmaceutiques et le corps médical (médecins, pharmaciens, cliniques). Apprenez la pharmacologie de base, la déontologie médicale, les techniques d\'argumentation commerciale et l\'organisation de tournées.',
    skills: [
      'Vocabulaire médical et classes thérapeutiques',
      'Techniques de communication et visite médicale',
      'Gestion de secteur et planification de tournées',
      'Éthique et réglementation pharmaceutique béninoise'
    ],
    careers: [
      'Délégué médical pour laboratoires pharmaceutiques',
      'Délégué pharmaceutique en grossisterie',
      'Chargé de promotion de dispositifs médicaux',
      'Superviseur de réseau de promotion médicale'
    ],
    equipment: ['Dictionnaires Vidal & fiches posologiques', 'Simulations d\'entretiens cabinet', 'Outils de CRM et reporting'],
    iconName: 'Stethoscope',
    featured: true,
  },
  {
    id: 'auxiliaire-pharmacie',
    name: 'Auxiliaire de pharmacie',
    category: 'sante-pharmacie',
    categoryLabel: 'Santé & Pharmacie',
    duration: '12 ou 24 mois',
    imageUrl: IMAGES.ventePharmacie,
    description: 'Gestion d\'une officine, conseil client et connaissance des produits pharmaceutiques de base.',
    longDescription: 'Devenez l\'auxiliaire précieux du pharmacien d\'officine. Vous apprendrez à lire et décrypter une ordonnance, conseiller les clients sur les produits d\'automédication courante, réceptionner et ranger les commandes de médicaments.',
    skills: [
      'Lecture des ordonnances et délivrance sécurisée',
      'Gestion informatisée des stocks officinaux',
      'Conseil en dermocosmétique et parapharmacie',
      'Règles de pharmacovigilance et conservation'
    ],
    careers: [
      'Auxiliaire / Vendeur en officine de pharmacie',
      'Gestionnaire de stock pharmaceutique',
      'Conseiller en parapharmacie',
      'Agent en dépôt de médicaments agréé'
    ],
    equipment: ['Officine d\'application reconstituée', 'Logiciel de gestion officinale', 'Boîtes de médicaments témoins', 'Rayonnages pharmaceutiques'],
    iconName: 'Pill',
    featured: true,
  },
  {
    id: 'secretariat-medical',
    name: 'Secrétariat médical',
    category: 'sante-pharmacie',
    categoryLabel: 'Santé & Pharmacie',
    duration: '12 ou 24 mois',
    imageUrl: IMAGES.secretariatMedical,
    description: 'Accueil des patients, gestion des dossiers médicaux et outils bureautiques adaptés au secteur de la santé.',
    longDescription: 'Le cœur administratif des cabinets de médecins, hôpitaux et cliniques privées. Les apprenants maîtrisent la terminologie médicale, la confidentialité déontologique, la saisie rapide de rapports médicaux et la facturation.',
    skills: [
      'Accueil physique et téléphonique des patients',
      'Terminologie médicale et frappe de comptes rendus',
      'Gestion des agendas et dossiers médicaux électroniques',
      'Respect strict du secret médical'
    ],
    careers: [
      'Secrétaire médical(e) en clinique ou hôpital',
      'Assistant(e) de cabinet médical ou dentaire',
      'Secrétaire de laboratoire d\'analyses médicales',
      'Agent d\'accueil en centre d\'imagerie'
    ],
    equipment: ['Postes bureautiques avec logiciels médicaux', 'Casques de transcription audio', 'Dossiers de simulation de patients'],
    iconName: 'ClipboardPlus',
  },

  // ---------- 4. Beauté & Image ----------
  {
    id: 'tresse-coiffure-perruque',
    name: 'Tresse-coiffure-perruque',
    category: 'beaute-image',
    categoryLabel: 'Beauté & Image',
    duration: '12 ou 24 mois',
    imageUrl: IMAGES.heroSunnyStudents,
    description: 'Techniques de tressage, coiffure afro et pose de perruques pour salon ou activité à domicile.',
    longDescription: 'Formation pratique sur mannequins puis sur clientèle réelle, couvrant les techniques traditionnelles et modernes de coiffure afro. Les apprenants maîtrisent le tressage, le tissage, la pose et l\'entretien de perruques ainsi que le conseil capillaire.',
    skills: [
      'Techniques de tressage traditionnelles et modernes',
      'Pose, coupe et entretien de perruques et tissages',
      'Soins et traitements capillaires adaptés aux cheveux afro',
      'Accueil et conseil client en salon'
    ],
    careers: [
      'Coiffeuse / Coiffeur professionnel(le)',
      'Spécialiste tresse et pose de perruques',
      'Gérante de salon de coiffure',
      'Coiffeuse à domicile indépendante'
    ],
    equipment: ['Postes de coiffure équipés', 'Mannequins d\'entraînement', 'Sèche-cheveux et fers professionnels', 'Gamme de produits capillaires'],
    iconName: 'Scissors',
  },
  {
    id: 'makeup-nouage-foulards',
    name: 'Make-up & nouage de foulards',
    category: 'beaute-image',
    categoryLabel: 'Beauté & Image',
    duration: '12 ou 24 mois',
    imageUrl: IMAGES.trainerMentor,
    description: 'Maquillage professionnel événementiel et techniques de nouage de foulards et turbans assortis.',
    longDescription: 'Une formation complète pour sublimer les visages lors de mariages, cérémonies et séances photo. Les apprenants maîtrisent les techniques de maquillage adaptées aux peaux et carnations locales, ainsi que le nouage artistique de foulards et turbans.',
    skills: [
      'Techniques de maquillage jour, soirée et mariée',
      'Harmonisation des teintes pour carnations variées',
      'Nouage artistique de foulards, turbans et gèles',
      'Préparation de peau et pose de faux-cils'
    ],
    careers: [
      'Maquilleuse professionnelle événementielle',
      'Spécialiste nouage de foulards pour cérémonies',
      'Consultante image et beauté',
      'Prestataire mariage indépendante'
    ],
    equipment: ['Palettes et pinceaux professionnels', 'Éclairage de maquillage type loge', 'Collection de foulards et tissus d\'entraînement'],
    iconName: 'Sparkles',
  },
  {
    id: 'esthetique-massage',
    name: 'Esthétique & massage',
    category: 'beaute-image',
    categoryLabel: 'Beauté & Image',
    duration: '12 ou 24 mois',
    imageUrl: IMAGES.heroBrightStudents,
    description: 'Soins du visage et du corps, techniques de massage bien-être et hygiène en institut de beauté.',
    longDescription: 'Formation aux techniques de soins esthétiques et de massage pratiquées en institut ou spa. Les apprenants réalisent des soins du visage, épilations, manucure-pédicure et massages relaxants dans le respect strict des règles d\'hygiène.',
    skills: [
      'Soins du visage et techniques d\'épilation',
      'Manucure, pédicure et pose d\'ongles',
      'Techniques de massage relaxant et bien-être',
      'Hygiène, protocole et accueil en institut'
    ],
    careers: [
      'Esthéticienne en institut ou spa',
      'Praticienne masseuse bien-être',
      'Gérante d\'institut de beauté',
      'Prestataire esthétique à domicile'
    ],
    equipment: ['Tables de soin et de massage', 'Cabine esthétique équipée', 'Appareils de soin du visage', 'Gamme de produits cosmétiques'],
    iconName: 'Sparkles',
  },

  // ---------- 5. Hôtellerie & Restauration ----------
  {
    id: 'hotellerie-restauration',
    name: 'Hôtellerie-Restauration',
    category: 'hotellerie-restauration',
    categoryLabel: 'Hôtellerie & Restauration',
    duration: '12 ou 24 mois',
    imageUrl: IMAGES.hotellerieRestauration,
    description: 'Compétences en service, cuisine et accueil pour travailler dans l\'hôtellerie et la restauration.',
    longDescription: 'Le secteur touristique et gastronomique au Bénin recrute des profils rigoureux et souriants. Formation axée sur la pratique en cuisine d\'application, les techniques de cuisson, les règles d\'hygiène HACCP, et l\'accueil des clients VIP.',
    skills: [
      'Techniques culinaires africaines et internationales',
      'Service au guéridon, dressage de tables et bar',
      'Normes d\'hygiène alimentaire et conservation',
      'Gestion des réservations et relation client'
    ],
    careers: [
      'Chef cuisinier en restaurant ou hôtel',
      'Maître d\'hôtel / Responsable de salle',
      'Traiteur pour réceptions privées',
      'Gérant de complexe hôtelier ou bar lounge'
    ],
    equipment: ['Cuisine pédagogique équipée', 'Fourneaux professionnels', 'Vaisselle d\'arts de la table', 'Bar d\'entraînement mixologie'],
    iconName: 'UtensilsCrossed',
  },
  {
    id: 'patisserie-cuisine',
    name: 'Pâtisserie & cuisine',
    category: 'hotellerie-restauration',
    categoryLabel: 'Hôtellerie & Restauration',
    duration: '12 ou 24 mois',
    imageUrl: IMAGES.trainerMentor,
    description: 'Techniques de pâtisserie, boulangerie et cuisine d\'application pour se lancer dans la restauration.',
    longDescription: 'Une formation gourmande et exigeante, du fournil à la vitrine. Les apprenants réalisent gâteaux, viennoiseries et desserts de cérémonie, tout en se perfectionnant sur les bases de la cuisine chaude et froide.',
    skills: [
      'Techniques de base en pâtisserie et boulangerie',
      'Réalisation de gâteaux de cérémonie et pièces montées',
      'Cuisine chaude et froide, dressage d\'assiettes',
      'Hygiène alimentaire et gestion des coûts matière'
    ],
    careers: [
      'Pâtissier(ère) en boulangerie ou hôtel',
      'Gérant(e) de pâtisserie / traiteur',
      'Chef de partie pâtisserie en restauration',
      'Prestataire gâteaux de cérémonie indépendant(e)'
    ],
    equipment: ['Fournil et four pâtissier professionnel', 'Batteurs et plans de travail réfrigérés', 'Matériel de décoration pâtissière'],
    iconName: 'UtensilsCrossed',
  },

  // ---------- 6. Digital & Bureautique ----------
  {
    id: 'genie-informatique',
    name: 'Génie informatique',
    category: 'digital-bureautique',
    categoryLabel: 'Digital & Bureautique',
    duration: '12 ou 24 mois',
    imageUrl: IMAGES.genieInformatique,
    description: 'Maintenance informatique, réseau et dépannage matériel/logiciel.',
    longDescription: 'Un cursus complet pour maîtriser les outils informatiques d\'entreprise. Dépannage PC et serveurs, configuration de switchs et routeurs Wi-Fi, sécurité de base, bureautique avancée et maintenance préventive.',
    skills: [
      'Assemblage, diagnostic et dépannage matériel PC/Laptops',
      'Configuration réseau LAN/WLAN, adressage IP et câblage RJ45',
      'Installation d\'OS Windows / Linux et gestion de parcs',
      'Bureautique avancée et sauvegarde de données'
    ],
    careers: [
      'Technicien support et maintenance informatique',
      'Administrateur réseau junior',
      'Responsable parc informatique en PME',
      'Dépanneur informatique à son propre compte'
    ],
    equipment: ['Laboratoire PC avec composants interchangeables', 'Baies de brassage et switchs administrables', 'Testeurs de câbles réseau', 'Stations de clonage SSD'],
    iconName: 'Cpu',
    featured: true,
  },
  {
    id: 'secretariat-informatique',
    name: 'Secrétariat-informatique',
    category: 'digital-bureautique',
    categoryLabel: 'Digital & Bureautique',
    duration: '12 ou 24 mois',
    imageUrl: IMAGES.itDigital,
    description: 'Bureautique professionnelle, gestion administrative et outils numériques pour le secrétariat d\'entreprise.',
    longDescription: 'Formation complète aux outils bureautiques (Word, Excel, PowerPoint) et à la gestion administrative moderne. Les apprenants maîtrisent la rédaction professionnelle, la gestion d\'agendas partagés, le classement numérique et l\'accueil en entreprise.',
    skills: [
      'Maîtrise avancée de Word, Excel et PowerPoint',
      'Rédaction de courriers et comptes rendus professionnels',
      'Gestion d\'agendas, classement et archivage numérique',
      'Accueil physique, téléphonique et relation client'
    ],
    careers: [
      'Secrétaire de direction',
      'Assistant(e) administratif(ve) en entreprise',
      'Agent d\'accueil et de gestion administrative',
      'Assistant(e) polyvalent(e) freelance'
    ],
    equipment: ['Postes bureautiques connectés', 'Suite Microsoft Office', 'Imprimantes et scanners professionnels'],
    iconName: 'ClipboardPlus',
  },
  {
    id: 'marketing-digital',
    name: 'Marketing digital',
    category: 'digital-bureautique',
    categoryLabel: 'Digital & Bureautique',
    duration: '12 ou 24 mois',
    imageUrl: IMAGES.marketingDigital,
    description: 'Création et gestion de campagnes sur les réseaux sociaux, conception de contenu et présence en ligne.',
    longDescription: 'Propulsez les entreprises et marques locales grâce aux outils du web. Cette formation pratique couvre la création de contenus percutants avec Canva et suite Adobe, la gestion de communautés (Community Management), les campagnes sponsorisées et les ventes WhatsApp Business.',
    skills: [
      'Community management & stratégie de contenu',
      'Publicité sponsorisée (Meta Ads, Google Ads)',
      'Création graphique pour réseaux sociaux (Canva, Photoshop)',
      'E-commerce, WhatsApp Business et tunnel de vente'
    ],
    careers: [
      'Community Manager freelance ou en agence',
      'Responsable acquisition / Publicité en ligne',
      'Gestionnaire de boutique e-commerce',
      'Consultant en stratégie digitale pour PME'
    ],
    equipment: ['Stations de travail connectées haut débit', 'Kits smartphone pour captation vidéo', 'Lumières ring-light et micros cravate'],
    iconName: 'Megaphone',
    featured: true,
  },
  {
    id: 'graphisme-designer',
    name: 'Graphisme designer',
    category: 'digital-bureautique',
    categoryLabel: 'Digital & Bureautique',
    duration: '12 ou 24 mois',
    imageUrl: IMAGES.heroBrightStudents,
    description: 'Conception graphique, identité visuelle et mise en page pour supports print et digitaux.',
    longDescription: 'Une formation pour transformer des idées en visuels percutants. Les apprenants maîtrisent les logiciels de création (Photoshop, Illustrator, Canva), les principes de mise en page, la création de logos et d\'identités visuelles pour les entreprises locales.',
    skills: [
      'Création de logos et identités visuelles',
      'Mise en page print (flyers, affiches, cartes de visite)',
      'Maîtrise de Photoshop, Illustrator et Canva',
      'Préparation de fichiers pour l\'impression et le web'
    ],
    careers: [
      'Graphiste freelance',
      'Designer en agence de communication',
      'Infographiste pour imprimerie',
      'Responsable identité visuelle en entreprise'
    ],
    equipment: ['Postes graphiques haute performance', 'Tablettes graphiques', 'Suite Adobe Creative Cloud', 'Imprimante couleur de contrôle'],
    iconName: 'Palette',
  },
];

export const CATEGORIES = [
  { id: 'all', label: 'Toutes les filières (20)' },
  { id: 'mode-artisanat', label: 'Mode & Artisanat créatif' },
  { id: 'batiment-technique', label: 'Bâtiment & Technique' },
  { id: 'sante-pharmacie', label: 'Santé & Pharmacie' },
  { id: 'beaute-image', label: 'Beauté & Image' },
  { id: 'hotellerie-restauration', label: 'Hôtellerie & Restauration' },
  { id: 'digital-bureautique', label: 'Digital & Bureautique' },
];
