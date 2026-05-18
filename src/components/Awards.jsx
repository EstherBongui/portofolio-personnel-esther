import React, { useEffect, useRef, useState } from 'react';

const TrophyIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
      d="M6 9H4.5a2.5 2.5 0 010-5H6m12 5h1.5a2.5 2.5 0 000-5H18M6 9v6m12-6v6M6 15a6 6 0 0012 0M6 15H4m14 0h2M9 21h6" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ExternalIcon = () => (
  <svg className="w-3 h-3 inline ml-1" style={{ opacity: 0.5 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const AWARDS = [
  {
    id: 1,
    title: 'Premier Prix',
    subtitle: 'Catégorie Universitaire Informatique Baccalauréat - Lévis',
    event: 'Forum Innovation UQAR (Fi3e)',
    project: 'AnatOasis',
    projectLink: 'https://www.uqar.ca/projets-fi3e/anatoasis/',
    date: 'Avril 2026',
    org: 'Université du Québec à Rimouski',
    description: "Premier prix dans la catégorie Universitaire Informatique Baccalauréat Lévis pour le projet AnatOasis - application interactive d'apprentissage de l'anatomie humaine en microservices.",
    extraLink: 'https://www.uqar.ca/app/uploads/2026/05/img-0610.jpg',
    extraLinkLabel: 'Photo de la remise',
    accent: true,
  },
  {
    id: 2,
    title: 'Prix Coup de Cœur du Public Lévis',
    subtitle: 'Vote du public - toutes catégories',
    event: 'Forum Innovation UQAR (Fi3e)',
    date: 'Avril 2026',
    org: 'Université du Québec à Rimouski',
    description: 'Prix décerné par le vote du public lors de la compétition regroupant des projets en ingénierie, informatique et entrepreneuriat.',
    extraLink: 'https://www.uqar.ca/forum-innovation-ingenierie-informatique-et-entrepreneuriat/le-forum-en-images/',
    extraLinkLabel: 'Forum en images',
    accent: false,
  },
];

const Awards = () => {
  const titleRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { setTitleVisible(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    if (titleRef.current) obs.observe(titleRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('#awards .reveal, #awards .reveal-scale, #awards .reveal-left, #awards .reveal-right');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="awards" style={{ background: 'rgba(255,249,235,0.8)' }}>
      <div className="section-container">

        {/* Title */}
        <div className="text-center mb-16 reveal">
          <h2
            ref={titleRef}
            className={`section-title section-title-tech ${titleVisible ? 'visible' : ''}`}
          >
            Prix &amp; Distinctions
          </h2>
          <p className="mt-6 text-base max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            Reconnaissances obtenues dans le cadre de compétitions académiques et d&apos;innovation.
          </p>
        </div>

        {/* Event badge */}
        <div className="flex justify-center mb-12 reveal">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: 'rgba(93,13,24,0.05)',
              border: '1px solid rgba(93,13,24,0.2)',
            }}>
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'rgba(93,13,24,0.6)' }}>
              Forum Innovation UQAR (Fi3e)
            </span>
            <span className="w-1 h-1 rounded-full" style={{ background: 'rgba(159,178,172,0.8)' }} />
            <span className="font-mono text-xs" style={{ color: '#9FB2AC' }}>Avril 2026</span>
          </div>
        </div>

        {/* Awards grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {AWARDS.map((award, idx) => (
            <div
              key={award.id}
              className={`reveal-scale corner-bracket rounded-2xl p-8 transition-all duration-350 ${idx === 0 ? 'delay-100' : 'delay-200'}`}
              style={{
                background: award.accent
                  ? 'rgba(93,13,24,0.04)'
                  : 'rgba(255,255,255,0.8)',
                border: award.accent
                  ? '1px solid rgba(93,13,24,0.25)'
                  : '1px solid rgba(159,178,172,0.35)',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = award.accent
                  ? '0 20px 40px rgba(93,13,24,0.12), 0 0 30px rgba(93,13,24,0.06)'
                  : '0 20px 40px rgba(159,178,172,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Icon + title row */}
              <div className="flex items-start gap-4 mb-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: award.accent ? 'rgba(93,13,24,0.08)' : 'rgba(159,178,172,0.15)',
                    border: award.accent ? '1px solid rgba(93,13,24,0.2)' : '1px solid rgba(159,178,172,0.4)',
                    color: award.accent ? '#5D0D18' : '#9FB2AC',
                  }}>
                  {award.accent ? <TrophyIcon /> : <StarIcon />}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl leading-tight mb-1" style={{ color: '#5D0D18' }}>
                    {award.title}
                  </h3>
                  <p className="text-xs font-mono" style={{ color: '#9FB2AC' }}>
                    {award.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#6B7280' }}>
                {award.description}
              </p>

              {/* Footer: project tag + org */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  {award.projectLink && (
                    <a
                      href={award.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tech-badge"
                      style={{ textDecoration: 'none' }}
                    >
                      <span style={{ color: '#9FB2AC' }}>&#9658;</span>
                      {award.project}
                      <ExternalIcon />
                    </a>
                  )}
                  {award.extraLink && (
                    <a
                      href={award.extraLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tech-badge"
                      style={{ textDecoration: 'none' }}
                    >
                      <span style={{ color: '#9FB2AC' }}>&#9658;</span>
                      {award.extraLinkLabel}
                      <ExternalIcon />
                    </a>
                  )}
                </div>
                <span className="font-mono text-xs" style={{ color: 'rgba(93,13,24,0.4)' }}>
                  {award.org}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Awards;
