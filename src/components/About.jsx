import React, { useEffect } from 'react';

const Illustration = () => (
  <div className="w-64 h-64 md:w-80 md:h-80 relative flex items-center justify-center">
    <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <defs>
        <style>{`
          @keyframes sway   { 0%,100%{transform:rotate(0deg)}  50%{transform:rotate(4deg)}  }
          @keyframes sway2  { 0%,100%{transform:rotate(0deg)}  50%{transform:rotate(-5deg)} }
          @keyframes sway3  { 0%,100%{transform:rotate(0deg)}  50%{transform:rotate(3deg)}  }
          @keyframes grow-stem { from{stroke-dashoffset:200} to{stroke-dashoffset:0} }
          @keyframes bloom  { from{opacity:0;transform:scale(0.4)} to{opacity:1;transform:scale(1)} }
          @keyframes float-dot { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
          @keyframes pulse-ring { 0%,100%{opacity:.12} 50%{opacity:.28} }
          .stem  { stroke-dasharray:200; stroke-dashoffset:200; animation: grow-stem 2s ease-out forwards; }
          .leaf1 { transform-origin:160px 195px; animation: sway  5s ease-in-out infinite; }
          .leaf2 { transform-origin:160px 165px; animation: sway2 6s ease-in-out infinite 0.5s; }
          .leaf3 { transform-origin:160px 140px; animation: sway3 5.5s ease-in-out infinite 1s; }
          .bloom { transform-origin:160px 88px;  animation: bloom 1s 1.8s ease-out both; }
          .fd1   { animation: float-dot 4s ease-in-out infinite; }
          .fd2   { animation: float-dot 5s ease-in-out infinite 1s; }
          .fd3   { animation: float-dot 4.5s ease-in-out infinite 2s; }
          .ring  { animation: pulse-ring 4s ease-in-out infinite; }
        `}</style>
      </defs>
      <circle cx="160" cy="175" r="115" fill="rgba(159,178,172,0.07)" className="ring"/>
      <circle cx="160" cy="175" r="85"  fill="rgba(93,13,24,0.04)"/>
      <ellipse cx="160" cy="268" rx="55" ry="8" fill="rgba(93,13,24,0.08)"/>
      <path d="M160 265 C160 265 155 230 160 195 C165 160 155 130 160 88"
        fill="none" stroke="#5D0D18" strokeWidth="2.5" strokeLinecap="round" className="stem"/>
      <g className="leaf1">
        <path d="M160 200 C140 185 118 188 110 200 C118 210 140 208 160 200 Z" fill="#9FB2AC" opacity="0.75"/>
        <line x1="160" y1="200" x2="115" y2="200" stroke="rgba(93,13,24,0.2)" strokeWidth="0.8" strokeLinecap="round"/>
      </g>
      <g className="leaf2">
        <path d="M160 168 C180 152 202 154 210 165 C202 176 180 175 160 168 Z" fill="#9FB2AC" opacity="0.85"/>
        <line x1="160" y1="168" x2="205" y2="165" stroke="rgba(93,13,24,0.2)" strokeWidth="0.8" strokeLinecap="round"/>
      </g>
      <g className="leaf3">
        <path d="M160 142 C142 126 120 128 113 140 C121 150 142 148 160 142 Z" fill="#9FB2AC" opacity="0.65"/>
        <line x1="160" y1="142" x2="118" y2="139" stroke="rgba(93,13,24,0.2)" strokeWidth="0.8" strokeLinecap="round"/>
      </g>
      <g className="bloom">
        <ellipse cx="160" cy="72" rx="9" ry="16" fill="rgba(93,13,24,0.5)"  transform="rotate(0   160 88)"/>
        <ellipse cx="160" cy="72" rx="9" ry="16" fill="rgba(93,13,24,0.45)" transform="rotate(60  160 88)"/>
        <ellipse cx="160" cy="72" rx="9" ry="16" fill="rgba(93,13,24,0.4)"  transform="rotate(120 160 88)"/>
        <ellipse cx="160" cy="72" rx="9" ry="16" fill="rgba(93,13,24,0.45)" transform="rotate(180 160 88)"/>
        <ellipse cx="160" cy="72" rx="9" ry="16" fill="rgba(93,13,24,0.4)"  transform="rotate(240 160 88)"/>
        <ellipse cx="160" cy="72" rx="9" ry="16" fill="rgba(93,13,24,0.45)" transform="rotate(300 160 88)"/>
        <circle cx="160" cy="88" r="10" fill="#FFF9EB" stroke="rgba(93,13,24,0.3)" strokeWidth="1.5"/>
        <circle cx="160" cy="88" r="5"  fill="rgba(93,13,24,0.2)"/>
      </g>
      <circle cx="198" cy="78"  r="3.5" fill="#9FB2AC" opacity="0.55" className="fd1"/>
      <circle cx="122" cy="92"  r="3"   fill="#9FB2AC" opacity="0.45" className="fd2"/>
      <circle cx="210" cy="108" r="2.5" fill="rgba(93,13,24,0.3)" opacity="0.6" className="fd3"/>
      <circle cx="112" cy="120" r="2"   fill="#9FB2AC" opacity="0.4" className="fd1"/>
      <g stroke="rgba(93,13,24,0.15)" strokeWidth="1.2" fill="none">
        <polyline points="25,45  25,25  45,25"/>
        <polyline points="295,45 295,25 275,25"/>
        <polyline points="25,295  25,295 45,295"/>
        <polyline points="295,275 295,295 275,295"/>
      </g>
      <text x="160" y="310" textAnchor="middle"
        fontFamily="Courier New, monospace" fontSize="8" letterSpacing="3"
        fill="rgba(93,13,24,0.2)">TOUJOURS ALLER DE L&apos;AVANT</text>
    </svg>
  </div>
);

const POINTS = [
  "Curieuse et rigoureuse, j'aime découvrir de nouvelles technologies.",
  "Je considère chaque projet comme une occasion d'apprendre et de me dépasser.",
  "J'aime m'impliquer dans des projets collaboratifs et relever des défis techniques.",
  "Pour moi, la collaboration est la clé pour transformer une idée en réussite concrète.",
];

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
          <h2 className="section-title">A propos de moi</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center reveal-left">
            <Illustration />
          </div>
          <div className="space-y-6 reveal-right">
            <ul className="space-y-3">
              {POINTS.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base" style={{ color: '#6B7280' }}>
                  <span className="mt-1 flex-shrink-0 font-mono text-xs" style={{ color: '#9FB2AC' }}>—</span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { value: '2023', label: 'Debut du baccalaureat' },
                { value: '10+',  label: 'Projets informatiques' },
              ].map(({ value, label }) => (
                <div key={label}
                  className="text-center p-4 rounded-lg corner-bracket transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(93,13,24,0.12)' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow='0 8px 24px rgba(93,13,24,0.1)'; e.currentTarget.style.transform='translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow='none'; e.currentTarget.style.transform='translateY(0)'; }}
                >
                  <div className="text-4xl font-bold mb-2 font-heading" style={{ color: '#5D0D18' }}>{value}</div>
                  <div className="text-sm" style={{ color: '#9B9B9B' }}>{label}</div>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <a href="#contact" className="btn-primary inline-block">Discutons ensemble</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
