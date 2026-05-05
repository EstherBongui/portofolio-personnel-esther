import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  const navLinks = [
    { name: 'Accueil',      href: '#home'       },
    { name: 'A propos',     href: '#about'      },
    { name: 'Competences',  href: '#skills'     },
    { name: 'Projets',      href: '#projects'   },
    { name: 'Prix',         href: '#awards'     },
    { name: 'Experience',   href: '#experience' },
    { name: 'Contact',      href: '#contact'    },
  ];

  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/EstherBongui',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'http://www.linkedin.com/in/esther-bongui-308b88323',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      label: 'Email',
      href: 'mailto:estherbongui@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <footer style={{ background: 'linear-gradient(180deg, #5D0D18 0%, #6B1A25 50%, #5D0D18 100%)', borderTop: '1px solid rgba(159,178,172,0.2)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs" style={{ color: 'rgba(159,178,172,0.6)' }}>{'>'}_</span>
              <h3 className="font-heading text-2xl font-bold text-white">Esther Bongui</h3>
            </div>
            <p className="text-sm mb-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Développeuse en formation à l&apos;UQAR, passionnée par C#, React et les architectures microservices.
            </p>
            <div className="flex gap-3">
              {socials.map(({ label, href, icon }) => (
                <a key={label} href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.15)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(159,178,172,0.25)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'rgba(159,178,172,0.5)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(159,178,172,0.7)' }}>
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href}
                    className="text-sm transition-all duration-200 flex items-center gap-2 group no-underline"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.paddingLeft = '8px'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.paddingLeft = '0'; }}
                  >
                    <span style={{ color: 'rgba(159,178,172,0.5)', fontFamily: 'monospace', fontSize: '0.65rem' }}>{'>'}</span>
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(159,178,172,0.7)' }}>
              Contact
            </p>
            <ul className="space-y-3">
              {[
                { icon: '📧', value: 'estherbongui@gmail.com' },
                { icon: '📍', value: 'Lévis, Québec, Canada'  },
                { icon: '🎓', value: 'UQAR — Bac en Informatique' },
              ].map(({ icon, value }) => (
                <li key={value} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  <span>{icon}</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(159,178,172,0.3), transparent)', margin: '0 0 24px' }} />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © {year} Esther Bongui — Tous droits réservés
          </p>
          <p className="font-mono text-xs" style={{ color: 'rgba(159,178,172,0.5)' }}>
            Built with React + Vite + Tailwind
          </p>
          <a href="#home"
            className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)' }}
            aria-label="Retour en haut"
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(159,178,172,0.25)'; e.currentTarget.style.color = 'white'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
