import React, { useState, useEffect } from 'react';

const ROLES = [
  'Développeuse Full Stack',
  'Passionnée de C# & React',
  'Architecte Microservices',
  'Étudiante UQAR',
];

const PARTICLES = [
  { symbol: '<>',  top: '12%', left: '4%',  duration: '5s',  delay: '0s',   opacity: 0.3,  size: '1.1rem' },
  { symbol: '/>',  top: '28%', left: '93%', duration: '6s',  delay: '1.2s', opacity: 0.25, size: '1rem'   },
  { symbol: '{}',  top: '58%', left: '6%',  duration: '7s',  delay: '0.5s', opacity: 0.3,  size: '1.2rem' },
  { symbol: '()',  top: '78%', left: '88%', duration: '5.5s',delay: '2s',   opacity: 0.28, size: '1rem'   },
  { symbol: '[]',  top: '42%', left: '96%', duration: '6.5s',delay: '3s',   opacity: 0.25, size: '0.9rem' },
  { symbol: '=>',  top: '68%', left: '2%',  duration: '4.5s',delay: '1.5s', opacity: 0.3,  size: '1rem'   },
  { symbol: ';',   top: '18%', left: '87%', duration: '8s',  delay: '2.5s', opacity: 0.2,  size: '1.3rem' },
  { symbol: "/*",  top: '50%', left: '2%',  duration: '5.5s',delay: '4s',   opacity: 0.25, size: '0.95rem'},
  { symbol: '&&',  top: '85%', left: '12%', duration: '6s',  delay: '1s',   opacity: 0.3,  size: '1.1rem' },
  { symbol: '===', top: '35%', left: '90%', duration: '7s',  delay: '3.5s', opacity: 0.22, size: '0.85rem'},
  { symbol: '||',  top: '62%', left: '91%', duration: '5s',  delay: '0.8s', opacity: 0.28, size: '1rem'   },
  { symbol: '#',   top: '22%', left: '97%', duration: '6s',  delay: '2s',   opacity: 0.2,  size: '1.2rem' },
];

const GithubIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const MailIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const TERMINAL_LINES = [
  { delay: 400,  text: '$ npm run portfolio --env=prod', color: 'rgba(93,13,24,0.7)' },
  { delay: 1100, text: '> Initialisation...', color: '#9FB2AC' },
  { delay: 1800, text: '> Stack chargée : C#, React, .NET  ✓', color: '#28C840' },
  { delay: 2600, text: '> Microservices connectés          ✓', color: '#28C840' },
  { delay: 3400, text: '> 10 projets indexés               ✓', color: '#28C840' },
  { delay: 4200, text: '> 2 prix chargés                   ✓', color: '#28C840' },
  { delay: 5000, text: '> Portfolio déployé                ✓', color: '#9FB2AC' },
  { delay: 5700, text: '$ _', color: 'rgba(93,13,24,0.5)' },
];

const TerminalBlock = () => {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    const timers = TERMINAL_LINES.map((line, i) =>
      setTimeout(() => setVisibleLines(prev => [...prev, i]), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative w-full max-w-sm">
      {/* Offset decorative borders */}
      <div className="absolute rounded-2xl" style={{ top: '20px', right: '-10px', width: '100%', height: '100%', border: '1px solid rgba(159,178,172,0.35)' }} />
      <div className="absolute rounded-2xl" style={{ top: '10px', right: '-5px', width: '100%', height: '100%', border: '1px dashed rgba(93,13,24,0.15)' }} />

      {/* Terminal window */}
      <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl corner-bracket"
        style={{ background: 'rgba(255,249,235,0.96)', backdropFilter: 'blur(12px)', border: '1px solid rgba(159,178,172,0.4)' }}>

        {/* Title bar */}
        <div className="flex items-center gap-1.5 px-4 py-3"
          style={{ borderBottom: '1px solid rgba(159,178,172,0.25)', background: 'rgba(93,13,24,0.03)' }}>
          <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
          <span className="font-mono text-xs ml-2" style={{ color: 'rgba(93,13,24,0.4)' }}>
            ~/esther-bongui/portfolio
          </span>
        </div>

        {/* Terminal body */}
        <div className="p-5 font-mono text-sm space-y-2" style={{ minHeight: '240px' }}>
          {TERMINAL_LINES.map((line, i) =>
            visibleLines.includes(i) ? (
              <div key={i} style={{ color: line.color, opacity: 1, transition: 'opacity 0.3s ease' }}>
                {line.text}
              </div>
            ) : null
          )}
          {visibleLines.length < TERMINAL_LINES.length && (
            <span className="typing-cursor" />
          )}
        </div>

        {/* Status bar */}
        <div className="px-5 py-2 font-mono text-xs flex items-center justify-between"
          style={{ borderTop: '1px solid rgba(93,13,24,0.08)', background: 'rgba(93,13,24,0.03)', color: 'rgba(93,13,24,0.45)' }}>
          <span style={{ color: '#28C840' }}>● online</span>
          <span>UQAR · Lévis, QC</span>
          <span>2023–présent</span>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [roleIndex, setRoleIndex]         = useState(0);
  const [isDeleting, setIsDeleting]       = useState(false);
  const [isPaused, setIsPaused]           = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    if (isPaused) {
      const t = setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, 2200);
      return () => clearTimeout(t);
    }
    if (isDeleting) {
      if (displayedText.length === 0) {
        setIsDeleting(false);
        setRoleIndex(prev => (prev + 1) % ROLES.length);
        return;
      }
      const t = setTimeout(() => setDisplayedText(prev => prev.slice(0, -1)), 40);
      return () => clearTimeout(t);
    }
    if (displayedText.length === currentRole.length) {
      setIsPaused(true);
      return;
    }
    const t = setTimeout(() => setDisplayedText(currentRole.slice(0, displayedText.length + 1)), 80);
    return () => clearTimeout(t);
  }, [displayedText, roleIndex, isDeleting, isPaused]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">

      <div aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span key={i} className="particle" style={{ top: p.top, left: p.left, fontSize: p.size, opacity: p.opacity, '--duration': p.duration, '--delay': p.delay }}>
            {p.symbol}
          </span>
        ))}
      </div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* Left — text */}
          <div className="space-y-5">
            
            <div className="space-y-1">
              <h1 className="text-6xl md:text-7xl font-bold font-heading leading-tight neon-text" style={{ color: '#5D0D18' }}>
                Hello,
              </h1>
              <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight" style={{ color: '#5D0D18' }}>
                Je suis{" "}
                <span style={{ textDecoration: 'underline', textDecorationColor: '#9FB2AC', textUnderlineOffset: '6px' }}>
                  Esther Bongui
                </span>!
              </h1>
            </div>

            <div className="flex items-center font-mono text-lg font-semibold h-8" style={{ color: '#9FB2AC' }}>
              <span style={{ color: 'rgba(93,13,24,0.4)', marginRight: '6px' }}>{">"}</span>
              <span>{displayedText}</span>
              <span className="typing-cursor" />
            </div>

            <p className="text-base md:text-lg leading-relaxed max-w-lg" style={{ color: '#6B7280' }}>
              Je ne me contente pas d&apos;écrire du code - je conçois des expériences.
              Full Stack avec C#, React &amp; .NET, je transforme des idées complexes en solutions
              élégantes. Chaque ligne de code est une intention.
            </p>

            <div className="flex items-center gap-3 py-1">
              <div className="h-px flex-1 max-w-16" style={{ background: 'linear-gradient(to right, transparent, #5D0D18)' }} />
              <span className="w-2 h-2 rotate-45 border" style={{ borderColor: '#9FB2AC' }} />
              <span className="font-mono text-xs tracking-widest" style={{ color: 'rgba(159,178,172,0.7)' }}>CODER · CONSTRUIRE · APPRENDRE</span>
              <span className="w-2 h-2 rotate-45 border" style={{ borderColor: '#9FB2AC' }} />
              <div className="h-px flex-1 max-w-16" style={{ background: 'linear-gradient(to left, transparent, #5D0D18)' }} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="btn-primary">Voir mes projets</a>
              <a href="#contact" className="btn-secondary">Me contacter</a>
            </div>

            <div className="flex gap-5 pt-1">
              {[
                { href: 'https://github.com/EstherBongui', icon: <GithubIcon />, label: 'GitHub' },
                { href: 'http://www.linkedin.com/in/esther-bongui-308b88323', icon: <LinkedinIcon />, label: 'LinkedIn' },
                { href: 'mailto:estherbongui@gmail.com', icon: <MailIcon />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer" aria-label={label}
                  className="transition-all duration-300 hover:scale-110"
                  style={{ color: '#9FB2AC' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#5D0D18'; e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(93,13,24,0.4))'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#9FB2AC'; e.currentTarget.style.filter = 'none'; }}
                >{icon}</a>
              ))}
            </div>
          </div>

          {/* Right — terminal */}
          <div className="relative flex justify-center md:justify-end">
            <TerminalBlock />
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 0.45 }}>
        <span className="font-mono text-xs tracking-widest" style={{ color: '#9FB2AC' }}>scroll</span>
        <div className="w-px h-8 animate-pulse" style={{ background: 'linear-gradient(to bottom, #9FB2AC, transparent)' }} />
      </div>

    </section>
  );
};

export default Hero;
