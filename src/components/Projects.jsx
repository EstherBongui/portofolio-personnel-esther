import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('Tous');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState('');

  const openModal = (demoUrl) => {
    setSelectedDemo(demoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDemo('');
  };

  const projects = [
    {
      id: 1,
      title: 'Application Web d\'Apprentissage de l\'Anatomie',
      description: 'Conception d’une application web interactive pour l’apprentissage de l’anatomie humaine, permettant aux utilisateurs d’explorer les organes, muscles et os à travers des images cliquables et des quiz. Le projet combine un back-end en C# avec ASP.NET en architecture microservices (Ocelot, Swagger, JWT) et un front-end en React avec Redux Toolkit, Axios et Tailwind CSS. L’application inclut une gestion des utilisateurs (participants et administrateurs), un suivi des apprentissages et un système de quiz générés aléatoirement. Le tout est versionné avec Git et hébergé sur GitHub pour assurer la traçabilité et la collaboration.',
      image: '🫀',
      category: 'Web App',
      technologies: ['C#', 'ASP.NET', 'React', 'Redux Toolkit', 'Ocelot', 'JWT', 'Swagger'],
          github: {
            frontend: 'https://github.com/EstherBongui/AnatOasis_FrontEnd_Project.git',
            backend: 'https://github.com/EstherBongui/AnatomyOasis_Projet.git'
          },
          demo: '/portofolio-personnel-esther/src/multi-media/Video_AnatOasis.mkv',
    },
    {
      id: 2,
      title: 'Boutique en Ligne ASP.NET',
      description: 'Développement d’une application web complète de e-commerce avec ASP.NET et C#, intégrant une interface utilisateur responsive conçue avec Bootstrap et Razor. Le projet permettait l’inscription et l’authentification des clients et vendeurs, la gestion des, produits, des paniers et des factures, ainsi que le traitement des paiements électroniques, via Stripe. L’application exploitait des API REST publiques (FakeStore API, DummyJSON), pour la génération de données factices et utilisait Entity Framework Core pour la persistance des données. L’ensemble du projet a été versionné avec Git et hébergé sur GitHub pour le travail collaboratif.',
      image: '🛒',
      category: 'E-Commerce',
      technologies: ['ASP.NET', 'C#', 'Entity Framework', 'Bootstrap', 'Stripe', 'Razor'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 3,
      title: 'Architecture Microservices E-Commerce',
      description: 'Conception et développement du back-end d’une plateforme de commerce électronique selon une architecture en microservices, avec ASP.NET Web API et C#. Le projet incluait la création de plusieurs services indépendants (produits, utilisateurs, commandes, panier, paiement) interconnectés via une passerelle Ocelot. Il comportait une authentification sécurisée par jeton JWT, une documentation unifiée avec Swagger et une intégration du paiement électronique Stripe. Chaque service utilisait sa propre base de données gérée avec Entity Framework Core, et le système a été déployé sur Microsoft Azure avec gestion de version Git/GitHub pour le suivi et la collaboration.',
      image: '⚙️',
      category: 'Backend',
      technologies: ['ASP.NET Web API', 'C#', 'Ocelot', 'JWT', 'Azure', 'Entity Framework'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 4,
      title: 'Gestion de Rendez-vous Automobile',
      description: 'Conception d’une application web complète combinant Django (backend) et React (frontend) pour la gestion des rendez-vous, des véhicules et des paiements dans un garage automobile. Le projet intégrait une authentification par jeton avec expiration et des permissions basées sur les rôles (client, mécanicien). L’ORM de Django a été configuré avec SQLite, puis migré vers MySQL, et une interface d’administration a été mise en place. L’API REST a été documentée avec Swagger, incluant les méthodes HTTP (GET, POST, DELETE, PUT) et testée pour la sécurité et la gestion des accès. L’application permettait une interaction fluide entre le client et le personnel via une interface réactive et intuitive.',
      image: '🚗',
      category: 'Gestion',
      technologies: ['Django', 'React', 'MySQL', 'JWT', 'Swagger', 'SQLite'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 5,
      title: 'Jeu d\'Échecs en C#',
      description: 'Développement complet d’un jeu d’échecs avec interface utilisateur interactive en C#. Le projet consistait à concevoir une interface permettant au joueur d’entrer ses coups, à valider les déplacements selon les règles officielles, à gérer les interactions entre les pièces, ainsi qu’à détecter les situations d’échec, d’échec et mat et de pat. Le programme enregistre également les parties jouées et conserve la liste des coups de chaque joueur.',
      image: '♟️',
      category: 'Jeu',
      technologies: ['C#', 'Logique de Jeu'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 6,
      title: 'Tic-Tac-Toe Web',
      description: 'Création d’une application web de type jeu interactif où l’utilisateur peut choisir son niveau de difficulté, entrer ses informations et jouer contre l’ordinateur. Le projet incluait la conception de plusieurs pages web, la gestion dynamique du plateau de jeu, la détection automatique des alignements gagnants et l’affichage des résultats. L’application permet également de consulter l’historique des parties et de recommencer une nouvelle partie à la fin du jeu.',
      image: '⭕',
      category: 'Jeu Web',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];

  const categories = ['Tous', 'Web App', 'E-Commerce', 'Backend', 'Gestion', 'Jeu', 'Jeu Web'];

  const filteredProjects = filter === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="bg-light">
      <div className="section-container">
        <h2 className="section-title">Mes Projets</h2>
        
        <p className="text-center text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
          Découvrez une sélection de mes projets récents. Chaque projet représente
          une opportunité d'apprentissage et de création.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
                filter === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card group">
              {/* Project Image/Icon */}
              <div className="text-center mb-6">
                <div className="text-7xl mb-4">{project.image}</div>
                <h3 className="text-xl font-bold text-dark group-hover:text-primary transition duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 text-justify">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-primary text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 justify-center flex-wrap">
                {/* GitHub Links */}
                {typeof project.github === 'object' ? (
                  // Multiple GitHub repos (Frontend + Backend)
                  <>
                    <a
                      href={project.github.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-primary hover:text-primary transition duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Frontend
                    </a>
                    <a
                      href={project.github.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-primary hover:text-primary transition duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Backend
                    </a>
                  </>
                ) : (
                  // Single GitHub repo
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-primary hover:text-primary transition duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Code
                  </a>
                )}
                
                {/* Demo Link */}
                <button
                  onClick={() => openModal(project.demo)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Vous avez un projet en tête ?
          </p>
          <a href="#contact" className="btn-primary">
            Travaillons ensemble
          </a>
        </div>
      </div>

      {/* Modal pour la démo */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold text-dark">Démonstration</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              {selectedDemo.endsWith('.mkv') || selectedDemo.endsWith('.mp4') ? (
                <video
                  controls
                  className="w-full max-h-[70vh]"
                  autoPlay
                >
                  <source src={selectedDemo} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
              ) : (
                <iframe
                  src={selectedDemo}
                  className="w-full h-[70vh] rounded"
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

