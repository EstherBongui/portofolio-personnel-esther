import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Conseillère / Caissière',
      company: 'Aubainerie',
      location: 'Lévis, QC',
      period: 'Août 2025 – Présent',
      type: 'Emploi',
      description: [
        'Accueillir et conseiller la clientèle afin d\'assurer une expérience d\'achat agréable et personnalisée',
        'Opérer la caisse : encaissements, échanges, remboursements et fidélisation',
        'Maintenir la propreté et l\'organisation du département pour refléter l\'image de marque',
        'Assurer la mise en rayon, l\'étiquetage et la disponibilité des produits',
        'Promouvoir les promotions et les nouveautés afin de maximiser les ventes'
      ],
      icon: '🛍️'
    },
    {
      id: 2,
      title: 'Équipière / Team Member',
      company: 'Tim Hortons',
      location: 'Lévis, QC',
      period: 'Juin – Août 2025',
      type: 'Emploi',
      description: [
        'Offrir un service rapide, courtois et professionnel aux clients',
        'Gérer les commandes et les paiements avec précision à la caisse',
        'Préparer les boissons et produits alimentaires selon les normes de qualité',
        'Maintenir un environnement de travail propre et sécuritaire',
        'Collaborer efficacement avec l\'équipe pour assurer un service fluide'
      ],
      icon: '☕'
    },
    {
      id: 3,
      title: 'Accompagnatrice au camp de jour',
      company: 'Ville de Lévis',
      location: 'Lévis, QC',
      period: 'Juillet – Août 2024',
      type: 'Emploi',
      description: [
        'Encourager les enfants à s\'intégrer et participer aux activités',
        'Communiquer avec les parents via des bilans quotidiens',
        'Aider à maintenir un environnement de travail propre et organisé',
        'Proposer des activités éducatives et gérer les comportements avec discipline positive'
      ],
      icon: '👶'
    },
    {
      id: 4,
      title: 'Associée aux ventes',
      company: 'Dynamite',
      location: 'Lévis, QC',
      period: 'Juin 2024',
      type: 'Emploi',
      description: [
        'Offrir un excellent service client : accueil, conseils mode et tendances',
        'Maintenir le magasin : organisation, réapprovisionnement et présentation attrayante',
        'Collaborer avec l\'équipe pour une expérience client optimale'
      ],
      icon: '👗'
    }
  ];

  const formations = [
    {
      id: 1,
      title: 'Baccalauréat en informatique',
      school: 'Université du Québec à Rimouski (UQAR)',
      location: 'Lévis, QC',
      period: '2023 – Présent',
      description: 'Formation complète en développement logiciel, bases de données, réseaux et architectures informatiques'
    },
    {
      id: 2,
      title: 'Baccalauréat scientifique — Diplôme d\'études collégiales',
      school: 'École privée Louis Gregory',
      location: 'Congo',
      period: '2019 – 2022',
      description: 'Sciences de la nature avec spécialisation en mathématiques et sciences physiques'
    }
  ];

  return (
    <section id="experience" className="bg-light">
      <div className="section-container">
        <h2 className="section-title">Expérience & Formation</h2>
        
        <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          Mon parcours combine une solide formation académique en informatique avec une expérience
          professionnelle diversifiée dans le service à la clientèle et l'encadrement.
        </p>

        {/* Expériences professionnelles */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-dark">Expériences Professionnelles</h3>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="card">
                <div className="flex items-start gap-6">
                  <div className="text-4xl">{exp.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-dark">{exp.title}</h4>
                        <p className="text-primary font-semibold">{exp.company}</p>
                        <p className="text-gray-600">{exp.location}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-2">
                          {exp.type}
                        </span>
                        <p className="text-gray-600 font-medium">{exp.period}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((desc, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600">
                          <span className="text-primary mt-1">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formation */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-dark">Formation</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {formations.map((formation) => (
              <div key={formation.id} className="card">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎓</div>
                  <h4 className="text-xl font-bold text-dark mb-2">{formation.title}</h4>
                  <p className="text-primary font-semibold mb-2">{formation.school}</p>
                  <p className="text-gray-600 mb-3">{formation.location}</p>
                  <p className="text-gray-600 font-medium mb-4">{formation.period}</p>
                  <p className="text-gray-600 text-sm">{formation.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Langues */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-dark mb-6">Langues</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { lang: 'Français', level: 'Langue maternelle' },
              { lang: 'Anglais', level: 'Intermédiaire' },
              { lang: 'Italien', level: 'Débutant' }
            ].map((lang, index) => (
              <div key={index} className="px-6 py-3 bg-white rounded-lg shadow-md">
                <div className="font-semibold text-dark">{lang.lang}</div>
                <div className="text-sm text-gray-600">{lang.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
