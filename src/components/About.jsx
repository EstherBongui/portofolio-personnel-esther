import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-light">
      <div className="section-container">
        <h2 className="section-title">À propos de moi</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image section */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary to-secondary transform rotate-6"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden absolute top-0 left-0 shadow-lg border-4 border-white">
                <img 
                  src="/portofolio-personnel-esther/multi-media/about_me.jpeg" 
                  alt="Esther Bongui - À propos" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Toujours en quête d'évolution, je considère chaque projet comme une occasion d'apprendre, 
              de me dépasser et de grandir, tant sur le plan professionnel que personnel. Curieuse, 
              rigoureuse et investie, j'aime découvrir de nouvelles technologies et m'impliquer dans 
              des projets collaboratifs où l'innovation et la qualité se rencontrent.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Je crois profondément que chaque défi est une opportunité de progression et que la 
              collaboration est la clé pour transformer une idée en réussite concrète. Mon objectif 
              est de continuer à évoluer, d'acquérir de nouvelles compétences et de contribuer à des 
              projets qui ont un impact réel et durable.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-white rounded-lg border border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">2023</div>
                <div className="text-gray-600">Début du baccalauréat</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg border border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">6+</div>
                <div className="text-gray-600">Projets informatiques</div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-block btn-primary"
              >
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

