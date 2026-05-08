import React, { useEffect, useRef, useState } from 'react';

const KEY_SKILLS = [
  { name: 'C#',         category: 'Langage',         desc: 'Langage principal'    },
  { name: 'React',      category: 'Framework',        desc: 'Frontend moderne'     },
  { name: 'ASP.NET',    category: 'Framework',        desc: 'Backend .NET'         },
  { name: 'JavaScript', category: 'Langage',         desc: 'Web fondamental'      },
  { name: 'HTML / CSS', category: 'Langage',         desc: 'Intégration web'      },
  { name: 'MySQL',      category: 'Base de données',  desc: 'Base relationnelle'   },
];

const OTHER = [
  { name: 'Entity Framework', accent: true  },
  { name: 'Bootstrap',        accent: false },
  { name: 'React Native',     accent: true  },
  { name: 'Django',           accent: false },
  { name: 'Git & GitHub',     accent: true  },
  { name: 'TypeScript',       accent: false },
  { name: 'SQL Server',       accent: true  },
  { name: 'PHP',              accent: false },
  { name: 'Visual Studio',    accent: true  },
  { name: 'VS Code',          accent: false },
  { name: 'Postman',          accent: true  },
  { name: 'Azure DevOps',     accent: false },
  { name: 'MariaDB',          accent: true  },
  { name: 'GitLab',           accent: false },
  { name: 'Linux',            accent: true  },
  { name: 'Windows',          accent: false },
  { name: 'Draw.io',          accent: true  },
  { name: 'Visual Paradigm',  accent: false },
  { name: 'Azure',            accent: true  },
  { name: 'Cisco',            accent: false },
  { name: 'Wireshark',        accent: true  },
  { name: 'Canva',            accent: false },
  { name: 'Overleaf (LaTeX)', accent: true  },
  { name: 'Microservices',    accent: false },
  { name: 'JWT Authentication', accent: true },
  { name: 'REST API',         accent: false },
  { name: 'Swagger',          accent: true  },
  { name: 'Ocelot Gateway',   accent: false },
  { name: 'Stripe Payment',   accent: true  },
  { name: 'Redux Toolkit',    accent: false },
  { name: 'Axios',            accent: true  },
  { name: 'CI/CD',            accent: false },
  { name: 'Tests unitaires',  accent: true  },
  { name: 'Agile (Scrum)',    accent: false },
  { name: 'Clean Architecture', accent: true },
  { name: 'MVVM',             accent: false },
  { name: 'NoSQL',            accent: true  },
  { name: 'XML',              accent: false },
  { name: 'Assembleur MASM',  accent: true  },
];

const Skills = () => {
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
    const els = document.querySelectorAll('#skills .reveal, #skills .reveal-scale');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" style={{ background: '#FFF9EB' }}>
      <div className="section-container">

        {/* Title */}
        <div className="text-center mb-16 reveal">
          <h2 ref={titleRef} className={`section-title section-title-tech ${titleVisible ? 'visible' : ''}`}>
            Mes Compétences
          </h2>
          <p className="mt-6 text-base max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            Compétences acquises à travers mes projets académiques et mon apprentissage continu.
          </p>
        </div>

        {/* Key skills */}
        <div className="mb-6 reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(93,13,24,0.2))' }} />
            <h3 className="font-mono text-sm font-semibold tracking-widest uppercase" style={{ color: '#5D0D18' }}>
              Compétences Clés
            </h3>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(93,13,24,0.2))' }} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {KEY_SKILLS.map((skill, idx) => (
              <div
                key={skill.name}
                className="reveal-scale corner-bracket rounded-xl px-5 py-4 flex flex-col gap-1 transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.85)',
                  border: '1px solid rgba(93,13,24,0.2)',
                  backdropFilter: 'blur(8px)',
                  transitionDelay: `${idx * 0.06}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 28px rgba(93,13,24,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(93,13,24,0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(93,13,24,0.2)';
                }}
              >
                <span className="font-heading font-bold text-base" style={{ color: '#5D0D18' }}>{skill.name}</span>
                <span className="font-mono text-xs" style={{ color: '#9FB2AC' }}>{skill.desc}</span>
                <span className="font-mono text-xs px-2 py-0.5 rounded self-start mt-1"
                  style={{ background: 'rgba(93,13,24,0.06)', border: '1px solid rgba(93,13,24,0.12)', color: 'rgba(93,13,24,0.5)' }}>
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="section-divider mb-12 mt-14" />

        {/* Combined section */}
        <div className="reveal">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(93,13,24,0.2))' }} />
            <h3 className="font-mono text-sm font-semibold tracking-widest uppercase" style={{ color: '#5D0D18' }}>
              Outils, Technologies &amp; Concepts
            </h3>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(93,13,24,0.2))' }} />
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {OTHER.map((item) => (
              <span key={item.name} className="tech-badge">
                <span style={{ color: item.accent ? '#5D0D18' : '#9FB2AC' }}>&#9658;</span>
                {item.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
