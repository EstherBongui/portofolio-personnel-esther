import React, { useEffect } from 'react';

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
            <div className="relative">
              <div
                className="w-64 h-64 md:w-80 md:h-80 rounded-2xl absolute top-0 left-0 transform rotate-6"
                style={{ background: 'linear-gradient(135deg, #5D0D18, #9FB2AC)' }}
              />
              <div
                className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden relative shadow-lg corner-bracket"
                style={{ border: '4px solid white' }}
              >
                <img
                  src="/portofolio-personnel-esther/multi-media/about_me.jpeg"
                  alt="Esther Bongui - A propos"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 reveal-right">
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#6B7280' }}>
              Toujours en quête d&apos;évolution, je considère chaque projet comme une occasion d&apos;apprendre,
              de me dépasser et de grandir. Curieuse, rigoureuse et investie, j&apos;aime découvrir de nouvelles
              technologies et m&apos;impliquer dans des projets collaboratifs.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#6B7280' }}>
              Je crois profondément que chaque défi est une opportunité de progression et que la collaboration
              est la clé pour transformer une idée en réussite concrète.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { value: '2023', label: 'Début du baccalauréat' },
                { value: '6+',   label: 'Projets informatiques' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="text-center p-4 rounded-lg corner-bracket transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(93,13,24,0.12)' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(93,13,24,0.1)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <div className="text-4xl font-bold mb-2 font-heading" style={{ color: '#5D0D18' }}>{value}</div>
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
