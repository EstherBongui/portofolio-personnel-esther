import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil',      href: '#home'       },
    { name: 'À propos',    href: '#about'      },
    { name: 'Compétences', href: '#skills'     },
    { name: 'Projets',      href: '#projects'   },
    { name: 'Prix',         href: '#awards'     },
    { name: 'Expérience',  href: '#experience' },
    { name: 'Contact',      href: '#contact'    },
  ];

  return (
    <header className="header-nav">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-3" style={{ textDecoration: 'none' }}>
              <div
                className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0"
                style={{
                  border: '2px solid rgba(93,13,24,0.25)',
                  boxShadow: '0 0 10px rgba(93,13,24,0.12)',
                }}
              >
                <img
                  src="/portofolio-personnel-esther/multi-media/about_me.jpeg"
                  alt="Esther Bongui"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="text-2xl md:text-3xl font-bold font-heading" style={{ color: '#5D0D18' }}>
                Portfolio
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-primary font-medium transition duration-300 font-heading"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen
                  ? <path d="M6 18L18 6M6 6l12 12" />
                  : <path d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-600 hover:text-primary font-medium transition duration-300 font-heading"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
