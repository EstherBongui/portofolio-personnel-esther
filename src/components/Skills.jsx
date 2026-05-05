import React, { useEffect, useRef, useState } from 'react';

const MAIN_SKILLS = [
  { name: 'HTML / CSS',       level: 100, icon: '🌐', category: 'Langages'         },
  { name: 'C#',               level: 95,category: 'Langages'         },
  { name: 'Entity Framework', level: 95,category: 'Frameworks'       },
  { name: 'Bootstrap',        level: 95,category: 'Frameworks'       },
  { name: 'React',            level: 90,category: 'Frameworks'       },
  { name: 'ASP.NET',          level: 80,category: 'Frameworks'       },
  { name: 'JavaScript',       level: 75,category: 'Langages'         },
  { name: 'MySQL',            level: 65,category: 'Bases de données' },
  { name: 'Git & GitHub',     level: 50,category: 'Outils'           },
  { name: 'Django',           level: 40,category: 'Frameworks'       },
];

const TOOLS = [
  { name: 'Visual Studio',    accent: true  },
  { name: 'VS Code',          accent: false },
  { name: 'Postman',          accent: true  },
  { name: 'Azure DevOps',     accent: false },
  { name: 'SQL Server',       accent: true  },
  { name: 'MariaDB',          accent: false },
  { name: 'GitLab',           accent: true  },
  { name: 'Linux',            accent: false },
  { name: 'Windows',          accent: true  },
  { name: 'Draw.io',          accent: false },
  { name: 'Visual Paradigm',  accent: true  },
  { name: 'Azure',            accent: false },
  { name: 'Cisco',            accent: true  },
  { name: 'Wireshark',        accent: false },
  { name: 'Canva',            accent: true  },
  { name: 'Overleaf (LaTeX)', accent: false },
];

const CONCEPTS = [
  'Microservices','JWT Authentication','REST API','Swagger','Ocelot Gateway',
  'Stripe Payment','Redux Toolkit','Axios','NoSQL','XML','Assembleur MASM',
  'CI/CD','Tests unitaires','Agile (Scrum)','Clean Architecture','MVVM',
];

const Skills = () => {
  const titleRef  = useRef(null);
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

        {/* Main skills — tag grid with category badges */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-5 mb-16 reveal">
          {MAIN_SKILLS.map((skill) => (
            <div key={skill.name} className="flex items-center justify-between py-2"
              style={{ borderBottom: '1px solid rgba(159,178,172,0.15)' }}>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-sm" style={{ color: '#5D0D18' }}>{skill.name}</span>
              </div>
              <span className="font-mono text-xs px-2 py-0.5 rounded"
                style={{ background: 'rgba(93,13,24,0.06)', border: '1px solid rgba(93,13,24,0.15)', color: 'rgba(93,13,24,0.5)' }}>
                {skill.category}
              </span>
            </div>
          ))}
        </div>

        <div className="section-divider mb-16" />

        {/* Tools */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8 reveal">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(93,13,24,0.2))' }} />
            <h3 className="font-mono text-sm font-semibold tracking-widest uppercase" style={{ color: '#5D0D18' }}>
              Outils &amp; Environnements
            </h3>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(93,13,24,0.2))' }} />
          </div>
          <div className="flex flex-wrap gap-3 justify-center reveal">
            {TOOLS.map((tool) => (
              <span key={tool.name} className="tech-badge">
                <span style={{ color: tool.accent ? '#5D0D18' : '#9FB2AC' }}>▸</span>
                {tool.name}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture / Concepts */}
        <div className="rounded-2xl p-8 reveal"
          style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(159,178,172,0.3)', backdropFilter: 'blur(10px)' }}>
          <div className="flex items-center gap-3 mb-6">
            <h3 className="font-heading text-xl font-bold" style={{ color: '#5D0D18' }}>Architecture &amp; Concepts</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {CONCEPTS.map((concept) => (
              <span key={concept} className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(93,13,24,0.15)', color: '#5D0D18', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'rgba(93,13,24,0.4)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(93,13,24,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(93,13,24,0.15)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {concept}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
