import React, { useEffect } from 'react';

const AbstractIllustration = () => (
  <div className="w-64 h-64 md:w-80 md:h-80 relative flex items-center justify-center">
    <svg
      viewBox="0 0 320 320"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#FFF9EB" stopOpacity="0" />
          <stop offset="100%" stopColor="#FFF9EB" stopOpacity="0" />
        </radialGradient>

        <style>{`
          @keyframes spin-slow  { from { transform: rotate(0deg);   } to { transform: rotate(360deg);  } }
          @keyframes spin-rev   { from { transform: rotate(0deg);   } to { transform: rotate(-360deg); } }
          @keyframes pulse-ring { 0%,100% { opacity:.18; } 50% { opacity:.38; } }
          @keyframes float-dot  { 0%,100% { transform:translateY(0);   } 50% { transform:translateY(-8px); } }

          .ring-outer  { transform-origin:160px 160px; animation: spin-slow  22s linear infinite; }
          .ring-mid    { transform-origin:160px 160px; animation: spin-rev   15s linear infinite; }
          .ring-inner  { transform-origin:160px 160px; animation: spin-slow  10s linear infinite; }
          .pulse1      { animation: pulse-ring 3s ease-in-out infinite; }
          .pulse2      { animation: pulse-ring 3s ease-in-out infinite 1s; }
          .dot-a       { transform-origin:160px 75px;  animation: float-dot 4s ease-in-out infinite; }
          .dot-b       { transform-origin:245px 220px; animation: float-dot 5s ease-in-out infinite 1s; }
          .dot-c       { transform-origin:75px 220px;  animation: float-dot 4.5s ease-in-out infinite 2s; }
        `}</style>
      </defs>

      {/* Background circle */}
      <circle cx="160" cy="160" r="130"
        fill="rgba(93,13,24,0.04)"
        stroke="rgba(159,178,172,0.25)"
        strokeWidth="1"
        className="pulse1"
      />
      <circle cx="160" cy="160" r="100"
        fill="none"
        stroke="rgba(93,13,24,0.08)"
        strokeWidth="1"
        className="pulse2"
      />

      {/* Outer rotating ring — dashed */}
      <g className="ring-outer">
        <circle cx="160" cy="160" r="118"
          fill="none"
          stroke="rgba(159,178,172,0.35)"
          strokeWidth="1"
          strokeDasharray="6 10"
        />
        {/* Dots on ring */}
        <circle cx="160" cy="42"  r="4" fill="#9FB2AC" opacity="0.7" />
        <circle cx="278" cy="160" r="3" fill="#9FB2AC" opacity="0.5" />
        <circle cx="160" cy="278" r="4" fill="#9FB2AC" opacity="0.7" />
        <circle cx="42"  cy="160" r="3" fill="#9FB2AC" opacity="0.5" />
      </g>

      {/* Mid rotating ring — solid thin */}
      <g className="ring-mid">
        <circle cx="160" cy="160" r="85"
          fill="none"
          stroke="rgba(93,13,24,0.2)"
          strokeWidth="1"
          strokeDasharray="3 14"
        />
        <circle cx="160" cy="75"  r="5" fill="#5D0D18" opacity="0.5" />
        <circle cx="245" cy="220" r="5" fill="#5D0D18" opacity="0.5" />
        <circle cx="75"  cy="220" r="5" fill="#5D0D18" opacity="0.5" />
      </g>

      {/* Inner rotating ring */}
      <g className="ring-inner">
        <polygon
          points="160,90 215,195 105,195"
          fill="none"
          stroke="rgba(159,178,172,0.5)"
          strokeWidth="1.5"
        />
        <polygon
          points="160,230 105,125 215,125"
          fill="none"
          stroke="rgba(93,13,24,0.2)"
          strokeWidth="1"
        />
      </g>

      {/* Centre emblem */}
      <circle cx="160" cy="160" r="36"
        fill="rgba(255,255,255,0.9)"
        stroke="rgba(93,13,24,0.18)"
        strokeWidth="1.5"
      />
      <circle cx="160" cy="160" r="26"
        fill="rgba(93,13,24,0.06)"
        stroke="rgba(93,13,24,0.25)"
        strokeWidth="1"
      />
      {/* Initials */}
      <text
        x="160" y="167"
        textAnchor="middle"
        fontFamily="serif"
        fontSize="20"
        fontWeight="700"
        fill="#5D0D18"
        opacity="0.85"
      >EB</text>

      {/* Floating accent dots */}
      <circle cx="160" cy="75"  r="6" fill="#9FB2AC" opacity="0.6" className="dot-a" />
      <circle cx="245" cy="220" r="6" fill="#9FB2AC" opacity="0.6" className="dot-b" />
      <circle cx="75"  cy="220" r="6" fill="#5D0D18" opacity="0.35" className="dot-c" />

      {/* Corner brackets — decorative */}
      <g stroke="rgba(93,13,24,0.3)" strokeWidth="1.5" fill="none">
        <polyline points="20,40  20,20  40,20"  />
        <polyline points="280,40 280,20 260,20" />
        <polyline points="20,280  20,300 40,300"  />
        <polyline points="280,280 280,300 260,300" />
      </g>

      {/* Code snippets — decorative text */}
      <text x="30" y="60" fontFamily="monospace" fontSize="9" fill="rgba(93,13,24,0.3)">&lt;/&gt;</text>
      <text x="272" y="60" fontFamily="monospace" fontSize="9" fill="rgba(159,178,172,0.6)">{}</text>
      <text x="30" y="285" fontFamily="monospace" fontSize="9" fill="rgba(159,178,172,0.6)">()</text>
      <text x="272" y="285" fontFamily="monospace" fontSize="9" fill="rgba(93,13,24,0.3)">;</text>
    </svg>
  </div>
);

const About = () => {
  useEffect(() => {
    const els = document.querySelectorAll('#about .reveal, #about .reveal-left, #about .reveal-right');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" style={{ background: 'rgba(255,249,235,0.8)' }}>
      <div className="section-container">

        <div className="text-center mb-16 reveal">
          <h2 className="section-title">À propos de moi</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center reveal-left">
            <AbstractIllustration />
          </div>

          <div className="space-y-6 reveal-right">
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#6B7280' }}>
              Toujours en quête d’évolution, je considère chaque projet comme une occasion
              d’apprendre, de me dépasser et de grandir. Curieuse, rigoureuse et investie,
              j’aime découvrir de nouvelles technologies et m’impliquer dans des projets collaboratifs.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#6B7280' }}>
              Je crois profondément que chaque défi est une opportunité de progression et que
              la collaboration est la clé pour transformer une idée en réussite concrète.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { value: '2023', label: 'Début du baccalauréat' },
                { value: '9+',   label: 'Projets informatiques' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="text-center p-4 rounded-lg corner-bracket transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(93,13,24,0.12)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(93,13,24,0.1)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div className="text-4xl font-bold mb-2 font-heading" style={{ color: '#5D0D18' }}>
                    {value}
                  </div>
                  <div className="text-sm" style={{ color: '#9B9B9B' }}>{label}</div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a href="#contact" className="btn-primary inline-block">
                Discutons de votre projet
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
