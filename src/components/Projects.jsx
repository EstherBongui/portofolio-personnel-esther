import React, { useState, useEffect } from 'react';

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const CATEGORY_COLORS = {
  'Web App':    { bg: 'rgba(93,13,24,0.07)',   border: 'rgba(93,13,24,0.25)',   text: '#5D0D18'  },
  'E-Commerce': { bg: 'rgba(159,178,172,0.15)', border: 'rgba(159,178,172,0.5)', text: '#5a7a74'  },
  'Backend':    { bg: 'rgba(93,13,24,0.07)',   border: 'rgba(93,13,24,0.25)',   text: '#5D0D18'  },
  'Jeu':        { bg: 'rgba(159,178,172,0.15)', border: 'rgba(159,178,172,0.5)', text: '#5a7a74'  },
  'Jeu Web':    { bg: 'rgba(93,13,24,0.07)',   border: 'rgba(93,13,24,0.25)',   text: '#5D0D18'  },
};

const Projects = () => {
  const [filter, setFilter]           = useState('Tous');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState('');
  const [titleVisible, setTitleVisible] = useState(false);

  const openModal  = (url) => { setSelectedDemo(url); setIsModalOpen(true); };
  const closeModal = ()    => { setIsModalOpen(false); setSelectedDemo(''); };

  /* Scroll reveal */
  useEffect(() => {
    const els = document.querySelectorAll('#projects .reveal, #projects .reveal-scale');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.06 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [filter]);

  /* Title underline */
  useEffect(() => {
    const el = document.querySelector('#projects .section-title-tech');
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { setTitleVisible(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Plateforme de Réservation de Cinéma',
      shortDesc: 'Plateforme web transactionnelle avec catalogue de films, réservation de sièges, paiement en ligne et CI/CD.',
      description: 'Développement d\'une plateforme web transactionnelle de réservation de cinéma en suivant les pratiques Agile (Scrum). Le projet inclut l\'analyse et la conception d\'une Solution Viable Minimale (MVS), un catalogue de films, une authentification sécurisée avec JWT, un système de réservation de sièges et un paiement en ligne. Mise en œuvre des pratiques Agile avec user stories, sprints, CI/CD, tests unitaires, documentation API (Swagger) et intégration Frontend/Backend complète.',
      category: 'Web App',
      technologies: ['C#', 'ASP.NET', 'React', 'JWT', 'Swagger', 'CI/CD', 'Agile/Scrum', 'Tests unitaires'],
      github: 'not-available',
      demo: 'not-available',
    },
    {
      id: 2,
      title: 'ERP/PGI — Nordik Adventures',
      shortDesc: 'Système ERP desktop WPF .NET 8 avec gestion des stocks, facturation, comptabilité et CRM.',
      description: 'Développement d\'un système ERP/PGI desktop (WPF .NET 8.0) pour Nordik Adventures avec modélisation de base de données MySQL. Modules implémentés : gestion des stocks, facturation (TPS/TVQ), comptabilité en partie double, achats fournisseurs, ventes, commandes clients et CRM.',
      category: 'Web App',
      technologies: ['C#', 'WPF .NET 8.0', 'MySQL', 'Entity Framework', 'MVVM'],
      github: 'not-available',
      demo: 'not-available',
    },
    {
      id: 9,
      title: 'Déclaration de Revenus (Revenu Québec)',
      shortDesc: 'Application web full-stack de déclaration fiscale avec Clean Architecture, React MVVM et .NET.',
      description: 'Développement d\'une application Web permettant aux contribuables de produire et soumettre leur déclaration de revenus en ligne. Front End React (MVVM), Back End .NET (Clean Architecture), SQL Server, Entity Framework Core, API REST sécurisée.',
      category: 'Web App',
      technologies: ['React', '.NET', 'SQL Server', 'Entity Framework Core', 'API REST', 'Clean Architecture', 'MVVM'],
      github: 'not-available',
      demo: '/portofolio-personnel-esther/multi-media/INF37607_TP3_Video_Esther_Sirielle_Wilfried.mkv',
    },
    {
      id: 3,
      title: 'AnatOasis — Apprentissage de l\'Anatomie',
      shortDesc: 'Application interactive d\'anatomie humaine avec microservices, quiz et suivi des apprentissages.',
      description: 'Conception d\'une application web interactive pour l\'apprentissage de l\'anatomie humaine. Back-end en C# avec ASP.NET en architecture microservices (Ocelot, Swagger, JWT) et front-end en React avec Redux Toolkit.',
      category: 'Jeu Web',
      technologies: ['C#', 'ASP.NET', 'React', 'Redux Toolkit', 'Ocelot', 'JWT', 'Swagger'],
      github: {
        frontend: 'https://github.com/EstherBongui/AnatOasis_FrontEnd_Project.git',
        backend:  'https://github.com/EstherBongui/AnatomyOasis_Projet.git',
      },
      demo: '/portofolio-personnel-esther/multi-media/Video_AnatOasis.mkv',
    },
    {
      id: 4,
      title: 'E-Vente — Boutique en Ligne ASP.NET',
      shortDesc: 'E-commerce complet avec Stripe, Razor, Bootstrap et API REST DummyJSON.',
      description: 'Développement d\'une application web complète de e-commerce avec ASP.NET et C#, intégrant une interface responsive Bootstrap/Razor, gestion des paniers, paiements Stripe et Entity Framework Core.',
      category: 'E-Commerce',
      technologies: ['ASP.NET', 'C#', 'Entity Framework', 'Bootstrap', 'Stripe', 'Razor'],
      github: 'https://github.com/EstherBongui/E-Vente_ASP.NET_Interface.git',
      demo: 'not-available',
    },
    {
      id: 5,
      title: 'Architecture Microservices E-Commerce',
      shortDesc: 'Back-end en microservices avec passerelle Ocelot, JWT, Stripe et déploiement Azure.',
      description: 'Conception et développement du back-end d\'une plateforme e-commerce en microservices. Services indépendants (produits, utilisateurs, commandes, panier, paiement) interconnectés via Ocelot, JWT, Swagger, Stripe et déployés sur Azure.',
      category: 'Backend',
      technologies: ['ASP.NET Web API', 'C#', 'Ocelot', 'JWT', 'Azure', 'Entity Framework'],
      github: 'https://github.com/EstherBongui/EVente_MicroServices.git',
      demo: 'not-available',
    },
    {
      id: 6,
      title: 'Gestion de Rendez-vous Automobile',
      shortDesc: 'Application web Django + React avec rôles (client/mécanicien), JWT et Swagger.',
      description: 'Application web pour la gestion des rendez-vous, véhicules et paiements dans un garage. Django (ORM SQLite→MySQL), React, JWT, Swagger, permissions basées sur les rôles.',
      category: 'Web App',
      technologies: ['Django', 'React', 'MySQL', 'JWT', 'Swagger', 'SQLite'],
      github: 'https://github.com/EstherBongui/Gestion-de-Rendez-vous-Automobil.git',
      demo: 'not-available',
    },
    {
      id: 7,
      title: 'Jeu d\'Échecs en C#',
      shortDesc: 'Jeu d\'échecs complet avec validation des règles, détection d\'échec/mat et historique des parties.',
      description: 'Développement complet d\'un jeu d\'échecs avec interface interactive en C#. Validation des déplacements selon les règles officielles, détection d\'échec et mat, enregistrement des parties.',
      category: 'Jeu',
      technologies: ['C#', 'Logique de Jeu'],
      github: 'https://github.com/EstherBongui/Jeu-d-chec.git',
      demo: 'not-available',
    },
    {
      id: 8,
      title: 'Tic-Tac-Toe Web',
      shortDesc: 'Jeu web contre l\'ordinateur avec niveaux de difficulté, historique et PHP/MySQL.',
      description: 'Application web de Tic-Tac-Toe avec niveaux de difficulté, historique des parties, détection des alignements gagnants et interface dynamique.',
      category: 'Jeu Web',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/EstherBongui/Tic-Tac-Toe-Web.git',
      demo: 'not-available',
    },
  ];

  const categories = ['Tous', 'Web App', 'E-Commerce', 'Backend', 'Jeu', 'Jeu Web'];
  const filtered   = filter === 'Tous' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ background: '#FFF9EB' }}>
      <div className="section-container">

        {/* Title */}
        <div className="text-center mb-16">
<h2 className={`section-title section-title-tech ${titleVisible ? 'visible' : ''}`}>
            Mes Projets
          </h2>
          <p className="mt-6 text-base max-w-2xl mx-auto reveal" style={{ color: '#6B7280' }}>
            Chaque projet représente une opportunité d'apprentissage et de création.
            Des solutions complètes, du back-end à l'interface utilisateur.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {categories.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="font-mono text-sm transition-all duration-300"
                style={{
                  padding: '6px 18px',
                  borderRadius: '6px',
                  border: active ? '1px solid rgba(93,13,24,0.6)' : '1px solid rgba(159,178,172,0.4)',
                  background: active ? 'rgba(93,13,24,0.08)' : 'transparent',
                  color: active ? '#5D0D18' : 'rgba(93,13,24,0.5)',
                  boxShadow: active ? '0 0 12px rgba(93,13,24,0.1)' : 'none',
                  cursor: 'pointer',
                  fontWeight: active ? '600' : '400',
                }}
              >
                {active && <span style={{ marginRight: '4px', color: '#9FB2AC' }}>{'>'}</span>}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => {
            const catStyle = CATEGORY_COLORS[project.category] || CATEGORY_COLORS['Web App'];
            return (
              <div
                key={project.id}
                className="project-card-tech reveal-scale flex flex-col"
                style={{ transitionDelay: `${(idx % 3) * 0.08}s` }}
              >
                {/* Card header */}
                <div
                  className="px-5 pt-5 pb-4"
                  style={{
                    borderBottom: '1px solid rgba(159,178,172,0.2)',
                  }}
                >
                  {/* Top row: dots + category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(93,13,24,0.25)' }} />
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(159,178,172,0.35)' }} />
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(93,13,24,0.15)' }} />
                    </div>
                    <span
                      className="font-mono text-xs px-2 py-1 rounded"
                      style={{
                        background: catStyle.bg,
                        border: `1px solid ${catStyle.border}`,
                        color: catStyle.text,
                      }}
                    >
                      {project.category.toLowerCase().replace(' ', '-')}
                    </span>
                  </div>

                  {/* Icon + title */}
                  <div className="flex items-start gap-3">
                    <h3
                      className="font-heading font-bold text-base leading-snug"
                      style={{ color: '#5D0D18' }}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card body */}
                <div className="px-5 py-4 flex-1 flex flex-col gap-4">
                  {/* Short description */}
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                    {project.shortDesc}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Actions */}
                  <div className="flex items-center gap-2 flex-wrap pt-1" style={{ borderTop: '1px solid rgba(159,178,172,0.2)', paddingTop: '12px' }}>
                    {/* GitHub */}
                    {typeof project.github === 'object' ? (
                      <>
                        {['frontend', 'backend'].map((key) => (
                          project.github[key] === 'not-available' ? (
                            <button
                              key={key}
                              onClick={() => openModal('not-available')}
                              className="flex items-center gap-1.5 transition-all duration-200 hover:scale-105"
                              style={{
                                padding: '5px 10px',
                                borderRadius: '6px',
                                border: '1px solid rgba(159,178,172,0.35)',
                                background: 'transparent',
                                color: 'rgba(93,13,24,0.45)',
                                fontSize: '0.75rem',
                                fontFamily: 'monospace',
                                cursor: 'pointer',
                              }}
                            >
                              <GithubIcon />
                              {key === 'frontend' ? 'Front' : 'Back'}
                            </button>
                          ) : (
                            <a
                              key={key}
                              href={project.github[key]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 transition-all duration-200 hover:scale-105"
                              style={{
                                padding: '5px 10px',
                                borderRadius: '6px',
                                border: '1px solid rgba(93,13,24,0.3)',
                                background: 'rgba(93,13,24,0.05)',
                                color: '#5D0D18',
                                fontSize: '0.75rem',
                                fontFamily: 'monospace',
                                textDecoration: 'none',
                              }}
                            >
                              <GithubIcon />
                              {key === 'frontend' ? 'Front' : 'Back'}
                            </a>
                          )
                        ))}
                      </>
                    ) : project.github === 'not-available' ? (
                      <button
                        onClick={() => openModal('not-available')}
                        className="flex items-center gap-1.5 transition-all duration-200 hover:scale-105"
                        style={{
                          padding: '5px 10px',
                          borderRadius: '6px',
                          border: '1px solid rgba(159,178,172,0.35)',
                          background: 'transparent',
                          color: 'rgba(93,13,24,0.45)',
                          fontSize: '0.75rem',
                          fontFamily: 'monospace',
                          cursor: 'pointer',
                        }}
                      >
                        <GithubIcon /> Code
                      </button>
                    ) : (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 transition-all duration-200 hover:scale-105"
                        style={{
                          padding: '5px 10px',
                          borderRadius: '6px',
                          border: '1px solid rgba(93,13,24,0.3)',
                          background: 'rgba(93,13,24,0.05)',
                          color: '#5D0D18',
                          fontSize: '0.75rem',
                          fontFamily: 'monospace',
                          textDecoration: 'none',
                        }}
                      >
                        <GithubIcon /> Code
                      </a>
                    )}

                    {/* Demo */}
                    <button
                      onClick={() => openModal(project.demo)}
                      className="flex items-center gap-1.5 transition-all duration-200 hover:scale-105 ml-auto"
                      style={{
                        padding: '5px 12px',
                        borderRadius: '6px',
                        border: '1px solid rgba(93,13,24,0.4)',
                        background: project.demo !== 'not-available' ? 'rgba(93,13,24,0.08)' : 'transparent',
                        color: project.demo !== 'not-available' ? '#5D0D18' : 'rgba(93,13,24,0.35)',
                        fontSize: '0.75rem',
                        fontFamily: 'monospace',
                        cursor: 'pointer',
                        fontWeight: project.demo !== 'not-available' ? '600' : '400',
                      }}
                    >
                      <ExternalIcon /> Demo
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal">
          <p className="font-mono text-sm mb-5" style={{ color: 'rgba(159,178,172,0.8)' }}>
            <span style={{ color: '#5D0D18' }}>{'// '}</span>intéressé(e) par mon profil ?
          </p>
          <a href="#contact" className="btn-primary">Me contacter</a>
        </div>
      </div>

      {/* ---- Modal ---- */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
          onClick={closeModal}
        >
          <div
            className="rounded-xl w-full max-w-4xl overflow-hidden"
            style={{
              background: '#FFF9EB',
              border: '1px solid rgba(159,178,172,0.4)',
              maxHeight: '90vh',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal header */}
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{ borderBottom: '1px solid rgba(159,178,172,0.3)' }}
            >
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
                <span className="font-mono text-sm ml-2" style={{ color: 'rgba(93,13,24,0.6)' }}>
                  demo.preview
                </span>
              </div>
              <button
                onClick={closeModal}
                className="font-mono text-lg leading-none transition-all hover:scale-110"
                style={{ color: 'rgba(93,13,24,0.5)', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            {/* Modal content */}
            <div className="p-5">
              {selectedDemo === 'not-available' ? (
                <div className="text-center py-16">
                  <div
                    className="font-mono text-5xl mb-4"
                    style={{ color: 'rgba(93,13,24,0.3)' }}
                  >
                    {'{ }'}
                  </div>
                  <h4 className="font-heading text-2xl font-bold mb-3" style={{ color: '#5D0D18' }}>
                    Contenu bientôt disponible
                  </h4>
                  <p className="text-sm font-mono" style={{ color: '#9FB2AC' }}>
                    // Le code source et la démo seront publiés prochainement
                  </p>
                </div>
              ) : selectedDemo.endsWith('.mkv') || selectedDemo.endsWith('.mp4') ? (
                <video controls className="w-full rounded-lg" autoPlay style={{ maxHeight: '70vh' }}>
                  <source src={selectedDemo} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
              ) : (
                <iframe
                  src={selectedDemo}
                  className="w-full rounded-lg"
                  style={{ height: '70vh' }}
                  title="Démonstration"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
