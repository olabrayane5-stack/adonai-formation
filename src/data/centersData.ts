export interface CenterInfo {
  id: string;
  city: string;
  name: string;
  isMain: boolean;
  address: string;
  landmark: string;
  details: string;
  phone: string;
  phoneDigits: string;
  phones: string[];
  email: string;
  hours: string;
  schedule: string;
  features: string[];
  sampleFilieres: string[];
  note: string;
  mapQuery: string;
}

export const CENTERS_DATA: CenterInfo[] = [
  {
    id: 'porto-novo',
    city: 'Porto-Novo',
    name: 'Centre Principal ADONAI-FORMATION',
    isMain: true,
    address: 'Kandévié, carrefour Yaya gendarme (Von Sans Blague)',
    landmark: 'Carrefour Yaya gendarme, Von Sans Blague',
    details: 'C\'est le centre historique d\'ADONAI-FORMATION, où sont regroupées la majorité des filières techniques et pratiques. Il dispose de vastes ateliers équipés pour la couture, l\'électricité bâtiment, le froid-climatisation et la plomberie avec un grand magasin d\'outillage.',
    phone: '01 66 73 06 67',
    phoneDigits: '0166730667',
    phones: ['01 66 73 06 67', '01 66 48 58 67', '01 53 51 95 43'],
    email: 'adonaiformationbenin@gmail.com',
    hours: 'Lundi au Vendredi : 08h00 - 18h30 | Samedi : 08h30 - 14h00',
    schedule: '08h00 - 18h30',
    features: ['Grands ateliers techniques équipés', 'Laboratoire informatique', 'Bureau d\'orientation & inscriptions', 'Salle de conférence'],
    sampleFilieres: ['Haute couture', 'Électricité', 'Plomberie', 'Froid', 'Santé & Info'],
    note: 'Horaires Lun - Sam 08h00 - 18h30. Permanence d\'inscription ouverte.',
    mapQuery: 'Porto-Novo,Kandevie,Benin',
  },
  {
    id: 'cotonou',
    city: 'Cotonou',
    name: 'Centre ADONAI Cotonou Métropole',
    isMain: false,
    address: 'Axe principal accessible, Cotonou Littoral',
    landmark: 'Axe principal accessible, zone commerciale',
    details: 'Centre urbain moderne axé sur les filières digitales, marketing, pharmacie, délégation médicale et hôtellerie. Ateliers climatisés et accès direct aux transports.',
    phone: '01 66 48 58 67',
    phoneDigits: '0166485867',
    phones: ['01 66 73 06 67', '01 66 48 58 67'],
    email: 'adonaiformationbenin@gmail.com',
    hours: 'Lundi au Vendredi : 08h00 - 18h00 | Samedi : 08h30 - 13h30',
    schedule: '08h00 - 18h00',
    features: ['Laboratoire multimédia connecté', 'Officine pédagogique pharmacie', 'Atelier pratique stylisme & coupe', 'Accès facile en transport en commun'],
    sampleFilieres: ['Marketing digital', 'Génie informatique', 'Auxiliaire pharmacie', 'Délégation médicale', 'Hôtellerie'],
    note: 'Horaires Lun - Sam 08h00 - 18h00. Ateliers climatisés.',
    mapQuery: 'Cotonou,Benin',
  },
  {
    id: 'calavi',
    city: 'Calavi',
    name: 'Centre ADONAI Abomey-Calavi',
    isMain: false,
    address: 'Zone Godomey, Abomey-Calavi (Atlantique)',
    landmark: 'Axe principal, proche du carrefour Godomey',
    details: 'Centre de proximité pour le grand Cotonou, orienté vers les métiers du numérique, de la beauté et de l\'artisanat créatif, avec ateliers pratiques dédiés.',
    phone: '47 97 97 22',
    phoneDigits: '47979722',
    phones: ['47 97 97 22'],
    email: 'adonaiformationbenin@gmail.com',
    hours: 'Lundi au Vendredi : 08h00 - 18h00 | Samedi : 08h30 - 13h30',
    schedule: '08h00 - 18h00',
    features: ['Ateliers beauté & image équipés', 'Salle informatique connectée', 'Accompagnement insertion locale'],
    sampleFilieres: ['Tresse-coiffure-perruque', 'Esthétique & massage', 'Graphisme designer', 'Sérigraphie'],
    note: 'Horaires Lun - Sam 08h00 - 18h00. Centre récent, places limitées.',
    mapQuery: 'Abomey-Calavi,Godomey,Benin',
  },
  {
    id: 'parakou',
    city: 'Parakou',
    name: 'Centre ADONAI Parakou Grand Nord',
    isMain: false,
    address: 'Centre-ville accessible, Parakou Borgou',
    landmark: 'Centre-ville, proche gare et carrefour principal',
    details: 'Conçu pour offrir les mêmes standards d\'excellence aux apprenants du septentrion, le centre de Parakou regroupe des ateliers de BTP, froid-climatisation, électricité, couture et gestion administrative.',
    phone: '01 53 51 95 43',
    phoneDigits: '0153519543',
    phones: ['01 66 73 06 67', '01 53 51 95 43'],
    email: 'adonaiformationbenin@gmail.com',
    hours: 'Lundi au Vendredi : 08h00 - 18h00 | Samedi : 08h30 - 13h00',
    schedule: '08h00 - 18h00',
    features: ['Ateliers techniques BTP & électricité', 'Salle informatique & bureautique', 'Accompagnement insertion régionale'],
    sampleFilieres: ['Électricité bâtiment', 'Froid-Climatisation', 'Couture', 'Plomberie', 'Informatique'],
    note: 'Horaires Lun - Ven 08h00 - 18h00. Ateliers pratiques supervisés.',
    mapQuery: 'Parakou,Benin',
  }
];

export const GENERAL_CONTACT = {
  primaryPhone: '01 66 73 06 67',
  mainPhone: '01 66 73 06 67',
  whatsappNumber: '2290166730667',
  secondaryPhones: ['01 66 48 58 67', '01 53 51 95 43', '47 97 97 22'],
  email: 'adonaiformationbenin@gmail.com',
  officialName: 'Centre de Formation et d\'Apprentissage des Métiers ADONAI-FORMATION',
  slogan: 'Devenez expert dans le domaine qui vous passionne',
  academicStart: '05 octobre 2026',
  scholarshipQuota: '1500 bourses',
  scholarshipPrice: '150 000 FCFA',
  registrationFee: '15 000 FCFA',
  duration12Price: '200 000 FCFA',
  duration24Price: '350 000 FCFA',
};
