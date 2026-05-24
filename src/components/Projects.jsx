import React, { useState, useEffect } from 'react';

/** Chemins public/ → URL correcte en local et sur GitHub Pages */
const resolveAsset = (path) => {
  if (/^https?:\/\//i.test(path)) return path;
  const base = import.meta.env.BASE_URL;
  const relative = path
    .replace(/^\//, '')
    .replace(/^portofolio-personnel-esther\//, '');
  return `${base}${relative}`;
};

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
  'Web App':    { bg: 'rgba(93,13,24,0.07)',    border: 'rgba(93,13,24,0.25)',   text: '#5D0D18' },
  'Backend':    { bg: 'rgba(93,13,24,0.07)',    border: 'rgba(93,13,24,0.25)',   text: '#5D0D18' },
  'Desktop':    { bg: 'rgba(159,178,172,0.15)', border: 'rgba(159,178,172,0.5)', text: '#5a7a74' },
  'Jeu':        { bg: 'rgba(159,178,172,0.15)', border: 'rgba(159,178,172,0.5)', text: '#5a7a74' },
  'Mobile App': { bg: 'rgba(159,178,172,0.12)', border: 'rgba(93,13,24,0.2)',   text: '#5D0D18' },
};

const CONTEXT_META = {
  personnel: {
    label: 'Projet personnel',
    sectionTitle: 'Projets personnels',
  },
  academique: {
    label: 'Travaux pratiques',
    sectionTitle: 'Travaux pratiques (cadre universitaire)',
  },
};

const CONTEXT_ORDER = ['personnel', 'academique'];

const TrophyIcon = ({ size = 16 }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75"
      d="M6 9H4.5a2.5 2.5 0 010-5H6m12 5h1.5a2.5 2.5 0 000-5H18M6 9v6m12-6v6M6 15a6 6 0 0012 0M6 15H4m14 0h2M9 21h6" />
  </svg>
);

/** Indicateur visuel : projet distingué (détails dans #awards) */
const AwardMark = ({ compact, onNavigate }) => (
  <button
    type="button"
    title="Projet distingué au Forum Innovation UQAR (Fi3e) 2026 — voir Prix & Distinctions"
    aria-label="Projet distingué au Forum Innovation UQAR — voir la section Prix"
    onClick={(e) => {
      e.stopPropagation();
      onNavigate?.();
    }}
    className="inline-flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-110"
    style={{
      width: compact ? 26 : 32,
      height: compact ? 26 : 32,
      borderRadius: '50%',
      border: '1px solid rgba(93,13,24,0.35)',
      background: 'linear-gradient(145deg, rgba(255,249,235,1) 0%, rgba(93,13,24,0.12) 100%)',
      color: '#5D0D18',
      cursor: 'pointer',
      boxShadow: '0 2px 8px rgba(93,13,24,0.12)',
    }}
  >
    <TrophyIcon size={compact ? 14 : 16} />
  </button>
);

const ContextBadge = ({ context, compact }) => {
  const isPersonal = context === 'personnel';
  return (
    <span
      className="font-mono rounded"
      style={{
        fontSize: compact ? '0.65rem' : '0.7rem',
        padding: compact ? '2px 8px' : '3px 10px',
        background: isPersonal ? 'rgba(159,178,172,0.2)' : 'rgba(93,13,24,0.08)',
        border: isPersonal ? '1px solid rgba(159,178,172,0.45)' : '1px solid rgba(93,13,24,0.22)',
        color: isPersonal ? '#5a7a74' : '#5D0D18',
      }}
    >
      {CONTEXT_META[context].label}
    </span>
  );
};

const projects = [
  {
    id: 1,
    context: 'personnel',
    title: 'TechWorld',
    shortDesc: 'App mobile d\'exploration tech : parcours guidés, recommandations personnalisées et espace administrateur.',
    objectif: 'Aider les utilisateurs à découvrir des métiers et compétences technologiques grâce à un parcours mobile personnalisé et ludique.',
    description: "Projet personnel mobile (React Native / Expo) visant à démocratiser la découverte des métiers tech. L'utilisateur complète un onboarding, explore plusieurs domaines via des mini-activités, reçoit des recommandations selon ses intérêts et suit sa progression. Firebase assure l'authentification et la persistance des données ; un espace admin permet de gérer le contenu, les utilisateurs et les retours. La navigation est structurée avec expo-router (auth, tabs, admin) en TypeScript.",
    highlights: [
      "Exploration de domaines technologiques avec fiches, activités courtes et indicateurs de progression",
      "Moteur de recommandations basé sur le profil (centres d'intérêt, forces, parcours)",
      "Firebase : authentification, base de données et synchronisation des données utilisateur",
      "Onboarding personnalisé, gestion des favoris et suivi de l'avancement",
      "Panel admin : gestion des domaines, activités, utilisateurs et retours",
      "Navigation typée avec expo-router (stacks auth, tabs principales, zone admin)",
      "Codebase TypeScript pour la robustesse et la maintenabilité",
    ],
    images: [
      'multi-media/TechWorld/2026_TW_image_a_la_une.jpeg',
      'multi-media/TechWorld/2026_TW_accueil.jpeg',
      'multi-media/TechWorld/2026_TW_domaines.jpeg',
      'multi-media/TechWorld/2026_TW_profil.jpeg',
      'multi-media/TechWorld/2026_TW_tableau_bord_admin.jpeg',
    ],
    category: 'Mobile App',
    technologies: ['React Native', 'Expo', 'expo-router', 'TypeScript', 'Firebase'],
    github: 'https://github.com/EstherBongui/TechWorld.git',
    demo: 'not-available',
  },
  {
    id: 11,
    context: 'academique',
    title: 'Sécurité Informatique — Hachage & Brute Force',
    shortDesc: 'Deux applications C# : générateur de dictionnaires de mots de passe et casseur de hachages bcrypt(10) par force brute.',
    objectif: "Analyser les pratiques de stockage de mots de passe, démontrer les conséquences d'une mauvaise implémentation et proposer une politique de sécurité réaliste.",
    description: "Deux applications desktop C# ont été développées : un générateur de dictionnaires de mots de passe configurable et un casseur de hachages bcrypt(10) par attaque par force brute. Le projet inclut la résolution de 10 hachages fournis, une analyse comparative des algorithmes de hachage et la rédaction d'une note de service sur la politique de mots de passe.",
    highlights: [
      'Générateur de dictionnaires configurable : jeu de caractères, longueur min/max et export vers fichier texte',
      'Application de brute force bcrypt(10) avec affichage en temps réel des tentatives et du temps écoulé',
      'Résolution de 10 hachages bcrypt fournis avec identification des mots de passe cachés',
      'Analyse comparative : MD5, SHA-1 vs bcrypt — vulnérabilités et bonnes pratiques',
      "Note de service rédigée sur la politique de mots de passe à destination du personnel d'entreprise",
      'Interface WPF avec paramètres configurables et retour visuel de progression',
    ],
    images: ['multi-media/Hachage/2026_HB_app_dictionnaire.png',
      'multi-media/Hachage/2026_HB_app_hachage.jpeg',
      'multi-media/Hachage/2026_HB_app_hachage1.jpeg',
    ],
    category: 'Desktop',
    technologies: ['C#', 'WPF', 'bcrypt', 'Cryptographie'],
    github: 'https://github.com/Seck2000/TP1_HachageMotDePass.git',
    demo: 'not-available',
  },
  {
    id: 2,
    context: 'academique',
    title: 'Plateforme de Réservation de Cinéma',
    shortDesc: 'Plateforme transactionnelle complète : parcours client de la sélection du film au paiement, avec API documentée et livraison en sprints Agile.',
    objectif: 'Permettre à un cinéma de gérer son catalogue, ses séances et les réservations en ligne dans un parcours fluide et sécurisé.',
    description: "Projet mené en équipe selon Scrum, de l'analyse du besoin jusqu'à une solution intégrée prête à être démontrée. L'application couvre le cycle complet d'une réservation : consultation du catalogue, choix des places, authentification, paiement et confirmation. L'accent a été mis sur la qualité logicielle (tests, documentation API, intégration continue) et sur une architecture claire entre interface React et services ASP.NET.",
    highlights: [
      "Analyse fonctionnelle et conception d'une Solution Viable Minimale (MVS) avec user stories et priorisation des fonctionnalités",
      "Catalogue de films, gestion des séances et plan de salle interactif pour la réservation de sièges",
      "Authentification JWT, gestion des rôles et protection des routes sensibles",
      "Paiement en ligne simulé avec validation des transactions et historique des commandes",
      "API REST documentée avec Swagger et consommée par le frontend React",
      "Pipeline CI/CD, tests unitaires et livraisons incrémentales par sprint",
    ],
    images: [],
    category: 'Web App',
    technologies: ['C#', 'ASP.NET', 'React', 'JWT', 'Swagger', 'CI/CD', 'Agile/Scrum', 'Tests unitaires'],
    github: 'not-available',
    demo: 'not-available',
  },
  {
    id: 3,
    context: 'academique',
    title: 'ERP/PGI — Nordik Adventures',
    shortDesc: 'ERP desktop pour une entreprise fictive : stocks, ventes, facturation TPS/TVQ, comptabilité et CRM dans une application WPF structurée.',
    objectif: 'Centraliser les opérations d\'une PME (inventaire, ventes, finances, clients) dans un outil unique et cohérent.',
    description: "Développement d'un système ERP/PGI desktop pour Nordik Adventures, pensé comme un produit métier réel et non un simple exercice isolé. Le projet a demandé une modélisation relationnelle solide, l'implémentation de règles comptables et commerciales, ainsi qu'une interface WPF claire pour les utilisateurs internes. Chaque module communique via une base MySQL commune et respecte le pattern MVVM pour séparer l'interface de la logique.",
    highlights: [
      "Architecture MVVM en WPF (.NET 8) avec navigation entre modules et tableaux de bord",
      "Gestion des stocks : produits, catégories, fournisseurs, mouvements et alertes de réapprovisionnement",
      "Facturation avec calcul automatique TPS/TVQ, paiements et génération de documents",
      "Comptabilité en partie double : journal, grand livre et états financiers de base",
      "Achats fournisseurs, ventes, commandes clients et panier côté client",
      "CRM : fiches clients, interactions et campagnes marketing",
      "Authentification par rôles et modélisation MySQL avec Entity Framework",
    ],
    images: [],
    category: 'Desktop',
    technologies: ['C#', 'WPF .NET 8.0', 'MySQL', 'Entity Framework', 'MVVM'],
    github: 'https://github.com/eliDaniel007/TP3-ANALYSE.git',
    demo: 'not-available',
  },
  {
    id: 4,
    context: 'academique',
    title: 'Déclaration de Revenus (Revenu Québec)',
    shortDesc: 'Portail fiscal simulé en équipe : déclaration en ligne, suivi du traitement, avis de cotisation et console administrateur.',
    objectif: 'Reproduire le parcours d\'un contribuable et d\'un agent, de l\'inscription à la production d\'un avis de cotisation, dans un contexte gouvernemental simulé.',
    description: "L'application permet l'inscription sécurisée, la saisie guidée d'une déclaration, son envoi, le suivi de son statut et le téléchargement de l'avis de cotisation. Le backend .NET suit une Clean Architecture ; le frontend React applique MVVM pour structurer les écrans complexes. Des services simulés et un tableau de bord admin complètent l'écosystème.",
    highlights: [
      "Inscription, authentification et gestion de session sécurisées",
      "Formulaires dynamiques avec validation métier (revenus, déductions, crédits)",
      "Clean Architecture côté .NET : Domain, Application, Infrastructure, API",
      "Persistance SQL Server avec Entity Framework Core et migrations",
      "API REST consommée par React ; séparation claire des responsabilités",
      "Simulation de services gouvernementaux et workflow de traitement des déclarations",
      "Tableau de bord administratif pour consulter, valider et gérer les dossiers",
    ],
    images: [
      'multi-media/RevenuQuebec/2025_RV_acceuil.png',
      'multi-media/RevenuQuebec/2025_RV_connexion.png',
      'multi-media/RevenuQuebec/2025_RV_inscription.png',
      'multi-media/RevenuQuebec/2025_RV_profil.png',
      'multi-media/RevenuQuebec/2025_RV_declaration_revenu.png',
      'multi-media/RevenuQuebec/2025_RV_detail_declaration.png',
      'multi-media/RevenuQuebec/2025_RV_historique.png',
      'multi-media/RevenuQuebec/2025_RV_avis_cotisation_personnalise.png',
      'multi-media/RevenuQuebec/2025_RV_avis_cotisation_automatise.png',
    ],
    category: 'Web App',
    technologies: ['React', '.NET', 'SQL Server', 'Entity Framework Core', 'API REST', 'Clean Architecture', 'MVVM'],
    github: 'not-available',
    demo: '/portofolio-personnel-esther/multi-media/INF37607_TP3_Video_Esther_Sirielle_Wilfried.mkv',
  },
  {
    id: 5,
    context: 'personnel',
    title: "AnatOasis — Apprentissage de l'Anatomie",
    shortDesc: 'Plateforme pédagogique interactive : exploration anatomique, quiz, progression et architecture microservices.',
    objectif: 'Rendre l\'apprentissage de l\'anatomie humaine plus interactif, progressif et engageant pour tout public curieux ou en formation, sans se limiter à un domaine d\'études précis.',
    description: "AnatOasis s'adresse à toute personne souhaitant découvrir ou approfondir l'anatomie humaine : contenus pédagogiques, évaluation par quiz et suivi des acquis. L'architecture repose sur des microservices ASP.NET reliés par Ocelot, avec un frontend React/Redux réactif, pensé pour une utilisation fluide en contexte d'apprentissage.",
    highlights: [
      "Microservices métier (contenus, utilisateurs, quiz, progression) avec passerelle Ocelot",
      "Authentification JWT et documentation Swagger par service",
      "Frontend React + Redux Toolkit : navigation fluide et état global maîtrisé",
      "Modules de visualisation anatomique, questionnaires et tableaux de bord pour les apprenants",
      "Parcours utilisateur pensé pour l'apprentissage autonome et le suivi des résultats",
      "Déploiement et intégration front/back testés en conditions de démonstration",
    ],
    images: [
      'multi-media/AnatOasis/2026_AO_image_a_la_une.png',
      'multi-media/AnatOasis/2026_AO_image_corps_humain_interactif.png',
      'multi-media/AnatOasis/2026_AO_image_articulations_principales.png',
      'multi-media/AnatOasis/2026_AO_image_quiz.png',
      'multi-media/AnatOasis/2026_AO_image_statistique.png',
    ],
    category: 'Web App',
    technologies: ['C#', 'ASP.NET', 'React', 'Redux Toolkit', 'Ocelot', 'JWT', 'Swagger'],
    github: {
      frontend: 'https://github.com/EstherBongui/AnatOasis_FrontEnd_Project.git',
      backend:  'https://github.com/EstherBongui/AnatomyOasis_Projet.git',
    },
    demo: 'not-available',
    awarded: true,
  },
  {
    id: 6,
    context: 'academique',
    title: 'E-Vente — Boutique en Ligne ASP.NET',
    shortDesc: 'Boutique en ligne ASP.NET : catalogue, panier, commandes et paiement Stripe dans une interface Razor responsive.',
    objectif: 'Offrir une expérience d\'achat en ligne complète, du catalogue au paiement, en s\'appuyant sur des pratiques web professionnelles.',
    description: "Projet e-commerce full-stack où j'ai conçu l'expérience utilisateur côté Razor/Bootstrap et branché les fonctionnalités métier sur ASP.NET. Le catalogue s'alimente via une API externe (DummyJSON), le panier persiste entre les sessions et le paiement passe par Stripe. Entity Framework Core assure la persistance des commandes et des utilisateurs.",
    highlights: [
      "Pages Razor responsive avec Bootstrap et composants réutilisables",
      "Catalogue dynamique, filtres et fiches produits alimentés par API REST",
      "Panier persistant, mise à jour des quantités et calcul automatique des totaux",
      "Intégration Stripe : paiement par carte et gestion des événements (webhooks)",
      "Gestion des comptes clients, historique de commandes et états de livraison",
      "Couche données Entity Framework Core et architecture MVC côté serveur",
    ],
    images: [],
    category: 'Web App',
    technologies: ['ASP.NET', 'C#', 'Entity Framework', 'Bootstrap', 'Stripe', 'Razor'],
    github: 'https://github.com/EstherBongui/E-Vente_ASP.NET_Interface.git',
    demo: 'not-available',
  },
  {
    id: 7,
    context: 'academique',
    title: 'Architecture Microservices E-Commerce',
    shortDesc: 'Écosystème e-commerce découpé en microservices : API Gateway Ocelot, JWT, Stripe et hébergement Azure.',
    objectif: 'Démontrer la conception d\'un backend scalable, modulaire et prêt à être consommé par plusieurs clients frontaux.',
    description: "Extension architecturale du volet e-commerce : chaque domaine métier (produits, utilisateurs, panier, commandes, paiement) est isolé dans un microservice ASP.NET indépendant. Ocelot centralise les appels, JWT sécurise les échanges et Stripe gère les paiements. Le projet met l'accent sur la documentation, le déploiement cloud et la maintenabilité à long terme.",
    highlights: [
      "Cinq microservices découplés avec responsabilités métier claires",
      "Passerelle Ocelot : routage, agrégation et point d'entrée unique pour le frontend",
      "JWT pour l'authentification et le contrôle d'accès inter-services",
      "Service de paiement connecté à Stripe avec scénarios de succès et d'échec",
      "Contrats API versionnés et documentation Swagger par microservice",
      "Déploiement et configuration sur Azure pour simuler un environnement de production",
    ],
    images: [],
    category: 'Backend',
    technologies: ['ASP.NET Web API', 'C#', 'Ocelot', 'JWT', 'Azure', 'Entity Framework', 'Swagger'],
    github: 'https://github.com/EstherBongui/EVente_MicroServices.git',
    demo: 'not-available',
  },
  {
    id: 8,
    context: 'academique',
    title: 'Gestion de Rendez-vous Automobile',
    shortDesc: 'Garage connecté : prise de rendez-vous, rôles client/mécanicien, suivi des véhicules et API Django + interface React.',
    objectif: 'Digitaliser la prise de rendez-vous et le suivi des interventions dans un garage, avec des parcours adaptés à chaque type d\'utilisateur.',
    description: "Application full-stack pour la gestion d'un atelier mécanique. Les clients réservent un créneau, consultent l'état de leur véhicule et paient en ligne ; les mécaniciens gèrent le planning, mettent à jour les statuts et documentent les interventions. Django fournit l'API REST et la persistance (SQLite puis MySQL) ; React offre une interface moderne avec authentification JWT et vues conditionnelles selon le rôle.",
    highlights: [
      "Deux espaces : client (RDV, véhicules, factures) et mécanicien (planning, interventions)",
      "API Django REST avec modèles relationnels et permissions par rôle",
      "Migration progressive SQLite → MySQL pour préparer la montée en charge",
      "Frontend React : routing protégé, formulaires et retours utilisateur en temps réel",
      "Calendrier de disponibilités et gestion des statuts de rendez-vous",
      "Historique des réparations, pièces associées et module de paiement",
      "Documentation Swagger pour faciliter les tests et l'intégration",
    ],
    images: [],
    category: 'Web App',
    technologies: ['Django', 'React', 'MySQL', 'JWT', 'Swagger', 'SQLite'],
    github: 'https://github.com/EstherBongui/Gestion-de-Rendez-vous-Automobil.git',
    demo: 'not-available',
  },
  {
    id: 9,
    context: 'academique',
    title: "Jeu d'Echecs en C#",
    shortDesc: "Échecs en C# : moteur de règles complet, interface console et mémorisation des parties.",
    objectif: 'Construire un jeu fidèle aux règles officielles tout en renforçant la logique algorithmique et la conception orientée objet.',
    description: "Projet centré sur la modélisation du jeu et la qualité de la logique métier. Chaque pièce dispose de ses règles de déplacement ; le moteur détecte l'échec, le mat et le pat. L'interaction se fait via une interface en console : affichage du plateau en mode texte, saisie des coups et messages guidant le joueur. Le tout est structuré en classes C# pour une logique claire et évolutive.",
    highlights: [
      "Moteur de déplacement par type de pièce avec validation stricte",
      "Détection d'échec, échec et mat, pat et fin de partie",
      "Coups spéciaux : roque, prise en passant, promotion du pion",
      "Interface console : plateau ASCII, saisie des coordonnées et retours textuels",
      "Historique des coups et possibilité de rejouer une partie",
      "Architecture modulaire séparant moteur de jeu et couche d'affichage console",
    ],
    images: [],
    category: 'Jeu',
    technologies: ['C#', 'Logique de Jeu'],
    github: 'https://github.com/EstherBongui/Jeu-d-chec.git',
    demo: 'not-available',
  },
  {
    id: 10,
    context: 'academique',
    title: 'Tic-Tac-Toe Web',
    shortDesc: "Morpion web : partie à deux joueurs, interface animée et statistiques persistées en base de données.",
    objectif: 'Proposer une expérience de jeu fluide en ligne tout en maîtrisant le trio classique HTML/CSS/JS avec persistance PHP/MySQL.',
    description: "Jeu web accessible depuis le navigateur, conçu pour deux joueurs qui alternent sur la même grille. Chaque partie peut être enregistrée pour alimenter un historique et des statistiques. Le front met l'accent sur la réactivité (animations, feedback immédiat) ; le back PHP structure les échanges avec MySQL.",
    highlights: [
      "Partie locale à deux joueurs avec alternance des tours sur la grille",
      "Détection automatique des victoires, défaites et matchs nuls",
      "Interface responsive avec animations CSS et messages contextuels",
      "API PHP pour créer, lire et archiver les parties en MySQL",
      "Tableau de bord des scores et ratio victoires/défaites par joueur",
      "Séparation claire entre logique de jeu (JS) et persistance (PHP)",
    ],
    images: [],
    category: 'Jeu',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/EstherBongui/Tic-Tac-Toe-Web.git',
    demo: 'not-available',
  },
];

const Projects = () => {
  const [filter, setFilter]               = useState('Tous');
  const [demoModal, setDemoModal]         = useState(null);
  const [detailProject, setDetailProject] = useState(null);
  const [titleVisible, setTitleVisible]   = useState(false);
  const [lightboxImage, setLightboxImage]   = useState(null);

  const openDemo    = (url, e) => { e.stopPropagation(); setDemoModal(url); };
  const closeDemo   = ()       => setDemoModal(null);
  const openDetail  = (proj)   => setDetailProject(proj);
  const closeDetail = ()       => setDetailProject(null);
  const goToAwards  = ()       => {
    closeDetail();
    document.querySelector('#awards')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const els = document.querySelectorAll('#projects .reveal, #projects .reveal-scale');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.06 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [filter]);

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

  const categories = ['Tous', 'Web App', 'Backend', 'Desktop', 'Jeu', 'Mobile App'];
  const filtered   = filter === 'Tous' ? projects : projects.filter(p => p.category === filter);
  const showGrouped = filter === 'Tous';

  const renderProjectCard = (project, idx) => {
    const catStyle = CATEGORY_COLORS[project.category] || CATEGORY_COLORS['Web App'];
    return (
      <div
        key={project.id}
        className="project-card-tech reveal-scale flex flex-col"
        style={{ transitionDelay: `${(idx % 3) * 0.08}s`, cursor: 'pointer' }}
        onClick={() => openDetail(project)}
      >
        <div className="px-5 pt-5 pb-4" style={{ borderBottom: '1px solid rgba(159,178,172,0.2)' }}>
          <div className="flex items-center justify-between mb-3 gap-2">
            <ContextBadge context={project.context} compact />
            <span className="font-mono text-xs px-2 py-1 rounded shrink-0"
              style={{ background: catStyle.bg, border: `1px solid ${catStyle.border}`, color: catStyle.text }}>
              {project.category.toLowerCase().replace(' ', '-')}
            </span>
          </div>
          <div className="flex items-center gap-1.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(93,13,24,0.25)' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(159,178,172,0.35)' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(93,13,24,0.15)' }} />
          </div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading font-bold text-base leading-snug flex-1" style={{ color: '#5D0D18' }}>
              {project.title}
            </h3>
            {project.awarded && <AwardMark compact onNavigate={goToAwards} />}
          </div>
        </div>
        <div className="px-5 py-4 flex-1 flex flex-col gap-4">
          <p className="text-sm leading-relaxed text-justify" style={{ color: '#6B7280', lineHeight: '1.65' }}>
            {project.shortDesc}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
            {project.technologies.length > 4 && (
              <span className="tech-badge" style={{ color: '#9FB2AC' }}>+{project.technologies.length - 4}</span>
            )}
          </div>
          <div className="flex-1" />
          <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid rgba(159,178,172,0.2)' }}>
            <span className="font-mono text-xs" style={{ color: 'rgba(159,178,172,0.7)' }}>cliquer pour les details</span>
            <span style={{ color: '#9FB2AC', fontSize: '0.75rem' }}>→</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" style={{ background: '#FFF9EB' }}>
      <div className="section-container">

        <div className="text-center mb-16">
          <h2 className={`section-title section-title-tech ${titleVisible ? 'visible' : ''}`}>
            Mes Projets
          </h2>
          <p className="mt-6 text-base max-w-2xl mx-auto reveal" style={{ color: '#6B7280' }}>
            Projets personnels et realisations universitaires — du back-end a l&apos;interface utilisateur.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {categories.map((cat) => {
            const active = filter === cat;
            return (
              <button key={cat} onClick={() => setFilter(cat)}
                className="font-mono text-sm transition-all duration-300"
                style={{
                  padding: '6px 18px', borderRadius: '6px', cursor: 'pointer',
                  border: active ? '1px solid rgba(93,13,24,0.6)' : '1px solid rgba(159,178,172,0.4)',
                  background: active ? 'rgba(93,13,24,0.08)' : 'transparent',
                  color: active ? '#5D0D18' : 'rgba(93,13,24,0.5)',
                  boxShadow: active ? '0 0 12px rgba(93,13,24,0.1)' : 'none',
                  fontWeight: active ? '600' : '400',
                }}>
                {active && <span style={{ marginRight: '4px', color: '#9FB2AC' }}>{'>'}</span>}
                {cat}
              </button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center font-mono text-sm reveal" style={{ color: '#9FB2AC' }}>
            Aucun projet ne correspond a ce filtre.
          </p>
        ) : showGrouped ? (
          <div className="space-y-14">
            {CONTEXT_ORDER.map((ctx) => {
              const group = filtered.filter((p) => p.context === ctx);
              if (!group.length) return null;
              return (
                <div key={ctx}>
                  <h3 className="font-heading font-bold text-xl mb-6 reveal" style={{ color: '#5D0D18' }}>
                    {CONTEXT_META[ctx].sectionTitle}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.map((project, idx) => renderProjectCard(project, idx))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, idx) => renderProjectCard(project, idx))}
          </div>
        )}

        <div className="text-center mt-16 reveal">
          <p className="font-mono text-sm mb-5" style={{ color: 'rgba(159,178,172,0.8)' }}>
            <span style={{ color: '#5D0D18' }}>{'// '}</span>interesse(e) par mon profil ?
          </p>
          <a href="#contact" className="btn-primary">Me contacter</a>
        </div>
      </div>

      {/* Detail Modal — rapport de projet */}
      {detailProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
          onClick={closeDetail}>
          <div className="rounded-2xl w-full max-w-2xl overflow-hidden"
            style={{ background: '#FFF9EB', border: '1px solid rgba(159,178,172,0.4)', maxHeight: '90vh', overflowY: 'auto' }}
            onClick={e => e.stopPropagation()}>

            {/* Barre de fenetre */}
            <div className="flex items-center justify-between px-6 py-3"
              style={{ borderBottom: '1px solid rgba(159,178,172,0.25)', background: 'rgba(93,13,24,0.03)' }}>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
                <span className="font-mono text-xs ml-2" style={{ color: 'rgba(93,13,24,0.4)' }}>rapport-projet.pdf</span>
              </div>
              <button onClick={closeDetail}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(93,13,24,0.4)', fontSize: '1rem' }}>
                &#x2715;
              </button>
            </div>

            {/* Contenu rapport */}
            <div className="px-10 py-8">

              {/* En-tete rapport */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <ContextBadge context={detailProject.context} />
                  <span className="font-mono text-xs px-2 py-0.5 rounded"
                    style={{
                      background: (CATEGORY_COLORS[detailProject.category] || CATEGORY_COLORS['Web App']).bg,
                      border: `1px solid ${(CATEGORY_COLORS[detailProject.category] || CATEGORY_COLORS['Web App']).border}`,
                      color: (CATEGORY_COLORS[detailProject.category] || CATEGORY_COLORS['Web App']).text,
                    }}>
                    {detailProject.category}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="font-heading font-bold text-xl leading-snug flex-1" style={{ color: '#1a1a1a' }}>
                    {detailProject.title}
                  </h3>
                  {detailProject.awarded && <AwardMark onNavigate={goToAwards} />}
                </div>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  {detailProject.context === 'academique'
                    ? "Université du Québec à Rimouski — Lévis, QC"
                    : "Projet réalisé en autonomie"}
                </p>
                <div className="mt-4" style={{ borderBottom: '2px solid rgba(93,13,24,0.15)' }} />
              </div>

              {detailProject.objectif && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#5D0D18' }}>
                    Objectif
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#5D0D18', lineHeight: '1.75', fontWeight: 500 }}>
                    {detailProject.objectif}
                  </p>
                </div>
              )}

              {/* Section 1 : Presentation */}
              <div className="mb-6">
                <h4 className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#5D0D18' }}>
                  Présentation
                </h4>
                <p className="text-sm leading-relaxed text-justify" style={{ color: '#4B5563', lineHeight: '1.85' }}>
                  {detailProject.description}
                </p>
              </div>

              {/* Section 2 : Realisations */}
              <div className="mb-6">
                <h4 className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#5D0D18' }}>
                  Réalisations clés
                </h4>
                <ul className="space-y-2">
                  {detailProject.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#4B5563', lineHeight: '1.7' }}>
                      <span className="flex-shrink-0 font-bold mt-0.5" style={{ color: '#5D0D18' }}>—</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 3 : Stack technique */}
              <div className="mb-6">
                <h4 className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#5D0D18' }}>
                  Technologies utilisées
                </h4>
                <div className="flex flex-wrap gap-2">
                  {detailProject.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Section 4 : Aperçus */}
              {detailProject.images && detailProject.images.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#5D0D18' }}>
                    Aperçus
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {detailProject.images.map((src, i) => {
                      const resolved = resolveAsset(src);
                      return (
                      <div key={i}
                        className="rounded-lg overflow-hidden cursor-zoom-in transition-all duration-200 hover:scale-[1.02]"
                        style={{ border: '1px solid rgba(159,178,172,0.35)', aspectRatio: '16/9', background: 'rgba(159,178,172,0.08)' }}
                        onClick={() => setLightboxImage(resolved)}>
                        <img src={resolved} alt={`Aperçu ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    );})}
                  </div>
                  <p className="font-mono text-xs mt-2" style={{ color: 'rgba(159,178,172,0.6)' }}>
                    Cliquer sur une image pour l&apos;agrandir
                  </p>
                </div>
              )}

              {/* Separateur */}
              <div className="mb-5" style={{ borderTop: '1px solid rgba(93,13,24,0.1)' }} />

              {/* Liens */}
              <div className="flex flex-wrap gap-3">
                {typeof detailProject.github === 'object' ? (
                  ['frontend', 'backend'].map((key) =>
                    detailProject.github[key] === 'not-available' ? (
                      <span key={key} className="flex items-center gap-1.5 font-mono text-xs"
                        style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid rgba(159,178,172,0.3)', color: 'rgba(93,13,24,0.35)' }}>
                        <GithubIcon />{key === 'frontend' ? 'Front' : 'Back'} — bientot disponible
                      </span>
                    ) : (
                      <a key={key} href={detailProject.github[key]} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-mono text-xs transition-all hover:scale-105"
                        style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid rgba(93,13,24,0.3)', background: 'rgba(93,13,24,0.05)', color: '#5D0D18', textDecoration: 'none' }}>
                        <GithubIcon />{key === 'frontend' ? 'Front' : 'Back'}
                      </a>
                    )
                  )
                ) : detailProject.github === 'not-available' ? (
                  <span className="flex items-center gap-1.5 font-mono text-xs"
                    style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid rgba(159,178,172,0.3)', color: 'rgba(93,13,24,0.35)' }}>
                    <GithubIcon /> Code source — bientot disponible
                  </span>
                ) : (
                  <a href={detailProject.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-mono text-xs transition-all hover:scale-105"
                    style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid rgba(93,13,24,0.3)', background: 'rgba(93,13,24,0.05)', color: '#5D0D18', textDecoration: 'none' }}>
                    <GithubIcon /> Code source
                  </a>
                )}

                {detailProject.demo !== 'not-available' ? (
                  <button onClick={(e) => { closeDetail(); openDemo(detailProject.demo, e); }}
                    className="flex items-center gap-1.5 font-mono text-xs transition-all hover:scale-105"
                    style={{ padding: '6px 14px', borderRadius: '6px', border: '1px solid rgba(93,13,24,0.4)', background: 'rgba(93,13,24,0.08)', color: '#5D0D18', cursor: 'pointer', fontWeight: '600' }}>
                    <ExternalIcon /> Voir la démonstration
                  </button>
                ) : (
                  <span className="flex items-center gap-1.5 font-mono text-xs"
                    style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid rgba(159,178,172,0.3)', color: 'rgba(93,13,24,0.35)' }}>
                    <ExternalIcon /> Démonstration — bientot disponible
                  </span>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Demo Media Modal */}
      {demoModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
          onClick={closeDemo}>
          <div className="rounded-xl w-full max-w-4xl overflow-hidden"
            style={{ background: '#FFF9EB', border: '1px solid rgba(159,178,172,0.4)', maxHeight: '90vh' }}
            onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-5 py-3"
              style={{ borderBottom: '1px solid rgba(159,178,172,0.3)' }}>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
                <span className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
                <span className="font-mono text-sm ml-2" style={{ color: 'rgba(93,13,24,0.6)' }}>demo.preview</span>
              </div>
              <button onClick={closeDemo}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(93,13,24,0.5)', fontSize: '1.1rem' }}>
                &#x2715;
              </button>
            </div>
            <div className="p-5">
              {demoModal.endsWith('.mkv') || demoModal.endsWith('.mp4') ? (
                <video controls className="w-full rounded-lg" autoPlay style={{ maxHeight: '70vh' }}>
                  <source src={demoModal} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture video.
                </video>
              ) : (
                <iframe src={demoModal} className="w-full rounded-lg" style={{ height: '70vh' }} title="Demonstration" />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox image */}
      {lightboxImage && (
        <div className="fixed inset-0 flex items-center justify-center z-[70] p-6"
          style={{ background: 'rgba(0,0,0,0.92)' }}
          onClick={() => setLightboxImage(null)}>
          <button
            onClick={() => setLightboxImage(null)}
            style={{ position: 'absolute', top: 20, right: 28, background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '1.5rem', cursor: 'pointer', lineHeight: 1 }}>
            &#x2715;
          </button>
          <img
            src={lightboxImage}
            alt="Apercu agrandi"
            style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '12px', objectFit: 'contain', boxShadow: '0 0 60px rgba(0,0,0,0.6)' }}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
