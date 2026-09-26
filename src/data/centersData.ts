export interface CenterInfo {
  id: string;
  city: string;
  name: string;
  isMain: boolean;
  address: string;
  landmark: string;
  details: string;
  phone: string;
  phones: string[];
  email: string;
  hours: string;
  schedule: string;
  features: string[];
}

export const CENTERS_DATA: CenterInfo[] = [
  {
    id: 'porto-novo',
    city: 'Porto-Novo',
    name: 'Centre Principal ADONAI-FORMATION',
    isMain: true,
    address: 'Kandévié, carrefour Yaya gendarme (Von Sans Blague)',
    landmark: 'Carrefour Yaya gendarme, Von Sans Blague',
    details: 'Siège historique et grands ateliers pratiques (ateliers couture, électricité, froid et climatisation, plomberie). Direction des études et bureau des bourses.',
    phone: '01 66 73 06 67',
    phones: ['01 66 73 06 67', '01 66 48 58 67', '01 53 51 95 43'],
    email: 'adonaiformationbenin@gmail.com',
    hours: 'Lundi au Vendredi : 08h00 - 18h30 | Samedi : 08h30 - 14h00',
    schedule: '08h00 - 18h30',
    features: ['Grands ateliers techniques équipés', 'Laboratoire informatique', 'Bureau d\'orientation & inscriptions', 'Salle de conférence']
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
    phones: ['01 66 73 06 67', '01 66 48 58 67'],
    email: 'adonaiformationbenin@gmail.com',
    hours: 'Lundi au Vendredi : 08h00 - 18h00 | Samedi : 08h30 - 13h30',
    schedule: '08h00 - 18h00',
    features: ['Laboratoire multimédia connecté', 'Officine pédagogique pharmacie', 'Atelier pratique stylisme & coupe', 'Accès facile en transport en commun']
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
    phones: ['47 97 97 22'],
    email: 'adonaiformationbenin@gmail.com',
    hours: 'Lundi au Vendredi : 08h00 - 18h00 | Samedi : 08h30 - 13h30',
    schedule: '08h00 - 18h00',
    features: ['Ateliers beauté & image équipés', 'Salle informatique connectée', 'Accompagnement insertion locale']
  },
  {
    id: 'parakou',
    city: 'Parakou',
    name: 'Centre ADONAI Parakou Grand Nord',
    isMain: false,
    address: 'Centre-ville accessible, Parakou Borgou',
    landmark: 'Centre-ville, proche gare et carrefour principal',
    details: 'Pôle de formation pour tous les apprenants du septentrion. Ateliers BTP, froid, couture et secrétariat médical avec formateurs certifiés.',
    phone: '01 53 51 95 43',
    phones: ['01 66 73 06 67', '01 53 51 95 43'],
    email: 'adonaiformationbenin@gmail.com',
    hours: 'Lundi au Vendredi : 08h00 - 18h00 | Samedi : 08h30 - 13h00',
    schedule: '08h00 - 18h00',
    features: ['Ateliers techniques BTP & électricité', 'Salle informatique & bureautique', 'Accompagnement insertion régionale']
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
