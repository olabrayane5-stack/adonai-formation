import { Building2, ShieldCheck } from 'lucide-react';

interface Partner {
  name: string;
  category: string;
  location: string;
  code: string;
}

export function PartnersSection() {
  const partners: Partner[] = [
    {
      name: 'Union des Salons & Ateliers de Confection',
      category: 'Haute Couture & Modélisme',
      location: 'Porto-Novo & Cotonou',
      code: 'USAC',
    },
    {
      name: 'Consortium des Installateurs Électriques & Frigoristes',
      category: 'Technique & BTP',
      location: 'Cotonou Littoral',
      code: 'CIEF',
    },
    {
      name: 'Réseau des Officines & Dépôts Pharmaceutiques',
      category: 'Pharmacie & Santé Publique',
      location: 'Porto-Novo & Parakou',
      code: 'RODP',
    },
    {
      name: 'Groupement des Agences Créatives & Médias',
      category: 'Marketing Digital & Informatique',
      location: 'Cotonou Métropole',
      code: 'GACM',
    },
    {
      name: 'Fédération Hôtelière & Restauration du Bénin',
      category: 'Hôtellerie & Événementiel',
      location: 'Porto-Novo & Cotonou',
      code: 'FHRB',
    },
    {
      name: 'Cliniques & Centres Médico-Sociaux Partenaires',
      category: 'Secrétariat Médical & Soins',
      location: 'Parakou Grand Nord',
      code: 'CMSP',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#EEF0FA] relative border-b border-[#12162A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.22em] font-bold text-[#D44A2D]">
            Écosystème Professionnel & Insertion
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#12162A] tracking-tight">
            Nos Partenaires de Stage & de Recrutement
          </h2>
          <p className="text-base text-[#475569] font-normal leading-relaxed">
            Les entreprises, officines et ateliers partenaires qui accueillent nos stagiaires et recrutent nos lauréats à la fin de leur cursus.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="lux-card rounded-2xl p-6 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#12162A] text-[#F5C64B] font-display font-bold text-sm flex items-center justify-center shrink-0 border border-[#E85B3D]/30 shadow-xs">
                {p.code}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-sm text-[#12162A] truncate">
                  {p.name}
                </h3>
                <p className="text-xs text-[#D44A2D] font-medium">{p.category}</p>
                <span className="text-[11px] text-[#475569] mt-0.5 block">
                  📍 {p.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
