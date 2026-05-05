import React, { useEffect } from 'react';

const EXPERIENCES = [
  {
    id: 1,
    title: 'Conseillère / Caissière',
    company: 'Aubainerie',
    location: 'Lévis, QC',
    period: 'Août 2025 – Présent',
    points: [
      "Accueillir et conseiller la clientèle pour une expérience d'achat personnalisée",
      "Opérer la caisse : encaissements, échanges, remboursements et fidélisation",
      "Maintenir la propreté et l'organisation du département",
      "Assurer la mise en rayon, l'étiquetage et la disponibilité des produits",
    ],
  },
  {
    id: 2,
    title: 'Équipière',
    company: 'Tim Hortons',
    location: 'Lévis, QC',
    period: 'Juin – Août 2025',
    points: [
      'Offrir un service rapide, courtois et professionnel aux clients',
      'Gérer les commandes et les paiements avec précision à la caisse',
      'Préparer les boissons et produits alimentaires selon les normes de qualité',
      "Collaborer efficacement avec l'équipe pour assurer un service fluide",
    ],
  },
  {
    id: 3,
    title: 'Accompagnatrice au camp de jour',
    company: 'Ville de Lévis',
    location: 'Lévis, QC',
    period: 'Juillet – Août 2024',
    points: [
      "Encourager les enfants à s'intégrer et participer aux activités",
      'Communiquer avec les parents via des bilans quotidiens',
      "Proposer des activités éducatives et gérer les comportements avec discipline positive",
    ],
  },
  {
    id: 4,
    title: 'Associée aux ventes',
    company: 'Dynamite',
    location: 'Lévis, QC',
    period: 'Juin 2024',
    points: [
      'Offrir un excellent service client : accueil, conseils mode et tendances',
      'Maintenir le magasin : organisation, réapprovisionnement et présentation attrayante',
      "Collaborer avec l'équipe pour une expérience client optimale",
    ],
  },
];

const FORMATIONS = [
  {
    id: 1,
    title: "Baccalauréat en informatique",
    school: "Université du Québec à Rimouski (UQAR)",
    location: 'Lévis, QC',
    period: '2023 – Présent',
    description: 'Formation complète en développement logiciel, bases de données, réseaux et architectures informatiques.',
  },
  {
    id: 2,
    title: "Baccalauréat scientifique — Diplôme d'études secondaires",
    school: 'École privée Louis Gregory',
    location: 'Congo',
    period: '2019 – 2022',
    description: 'Baccalauréat général, mathématiques et sciences physiques.',
  },
];

const Experience = () => {
  useEffect(() => {
    const els = document.querySelectorAll('#experience .reveal, #experience .reveal-left, #experience .reveal-right, #experience .reveal-scale');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" style={{ background: '#FFF9EB' }}>
      <div className="section-container">

        {/* Title */}
        <div className="text-center mb-16 reveal">
<h2 className="section-title">Expérience &amp; Formation</h2>
          <p className="mt-6 text-base max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            Un parcours qui combine formation académique en informatique et expérience professionnelle dans le service client.
          </p>
        </div>

        {/* ---- Professional experience ---- */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-10 reveal">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(93,13,24,0.2))' }} />
            <h3 className="font-mono text-sm font-semibold tracking-widest uppercase" style={{ color: '#5D0D18' }}>
              Expériences Professionnelles
            </h3>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(93,13,24,0.2))' }} />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(93,13,24,0.2), rgba(159,178,172,0.3), rgba(93,13,24,0.2), transparent)' }} />

            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <div key={exp.id} className="reveal-scale flex gap-6" style={{ transitionDelay: `${idx * 0.1}s` }}>
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl z-10"
                      style={{
                        background: 'rgba(255,255,255,0.9)',
                        border: '2px solid rgba(93,13,24,0.2)',
                        boxShadow: '0 0 12px rgba(93,13,24,0.08)',
                      }}>
                      <span style={{ width: 10, height: 10, borderRadius: 2, background: 'rgba(93,13,24,0.5)', display: 'inline-block', transform: 'rotate(45deg)' }} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-xl p-5 transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.8)',
                      border: '1px solid rgba(159,178,172,0.3)',
                      backdropFilter: 'blur(10px)',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(93,13,24,0.1)'; e.currentTarget.style.borderColor = 'rgba(93,13,24,0.2)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(159,178,172,0.3)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                      <div>
                        <h4 className="font-heading font-bold text-lg" style={{ color: '#5D0D18' }}>{exp.title}</h4>
                        <p className="font-semibold text-sm" style={{ color: '#9FB2AC' }}>{exp.company}</p>
                        <p className="text-sm" style={{ color: '#9B9B9B' }}>{exp.location}</p>
                      </div>
                      <span className="font-mono text-xs px-3 py-1.5 rounded self-start"
                        style={{ background: 'rgba(93,13,24,0.06)', border: '1px solid rgba(93,13,24,0.2)', color: '#5D0D18', whiteSpace: 'nowrap' }}>
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-1.5 mt-3" style={{ borderTop: '1px solid rgba(159,178,172,0.2)', paddingTop: '12px' }}>
                      {exp.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#6B7280' }}>
                          <span style={{ color: '#9FB2AC', marginTop: '2px', flexShrink: 0 }}>▸</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider mb-16" />

        {/* ---- Formation ---- */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-10 reveal">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(93,13,24,0.2))' }} />
            <h3 className="font-mono text-sm font-semibold tracking-widest uppercase" style={{ color: '#5D0D18' }}>
              Formations
            </h3>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(93,13,24,0.2))' }} />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {FORMATIONS.map((f, idx) => (
              <div key={f.id} className="reveal-scale corner-bracket rounded-xl p-6 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(159,178,172,0.3)', backdropFilter: 'blur(10px)', transitionDelay: `${idx * 0.15}s` }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 32px rgba(93,13,24,0.1)'; e.currentTarget.style.borderColor = 'rgba(93,13,24,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(159,178,172,0.3)'; }}
              >
                <h4 className="font-heading font-bold text-base text-center mb-2" style={{ color: '#5D0D18' }}>{f.title}</h4>
                <p className="font-semibold text-sm text-center mb-1" style={{ color: '#9FB2AC' }}>{f.school}</p>
                <p className="text-xs text-center mb-1" style={{ color: '#9B9B9B' }}>{f.location}</p>
                <p className="font-mono text-xs text-center mb-4 px-3 py-1 rounded inline-block w-full"
                  style={{ background: 'rgba(93,13,24,0.05)', color: 'rgba(93,13,24,0.6)' }}>{f.period}</p>
                <p className="text-sm text-center" style={{ color: '#6B7280' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Languages ---- */}
        <div className="reveal">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(93,13,24,0.2))' }} />
            <h3 className="font-mono text-sm font-semibold tracking-widest uppercase" style={{ color: '#5D0D18' }}>Langues</h3>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(93,13,24,0.2))' }} />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { lang: 'Français', level: 'Langue maternelle', flag: '🇫🇷' },
              { lang: 'Anglais',  level: 'Intermédiaire',     flag: '🇺🇸' },
              { lang: 'Italien',  level: 'Débutant',          flag: '🇮🇹' },
            ].map((l) => (
              <div key={l.lang} className="px-6 py-3 rounded-xl flex items-center gap-3 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(159,178,172,0.3)' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(93,13,24,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <span className="text-2xl">{l.flag}</span>
                <div>
                  <div className="font-semibold text-sm" style={{ color: '#5D0D18' }}>{l.lang}</div>
                  <div className="text-xs" style={{ color: '#9B9B9B' }}>{l.level}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
