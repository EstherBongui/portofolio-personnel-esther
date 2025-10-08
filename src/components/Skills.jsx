import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Langages de Programmation',
      icon: '💻',
      skills: [
        { name: 'C#', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'PHP', level: 70 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      title: 'Frameworks & Technologies',
      icon: '⚙️',
      skills: [
        { name: 'ASP.NET', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Django', level: 80 },
        { name: 'Entity Framework', level: 85 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Bootstrap', level: 75 },
      ],
    },
    {
      title: 'Outils & Bases de Données',
      icon: '🛠️',
      skills: [
        { name: 'Visual Studio', level: 90 },
        { name: 'Git & GitHub', level: 85 },
        { name: 'SQL Server', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'Linux', level: 70 },
        { name: 'Azure', level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-light">
      <div className="section-container">
        <h2 className="section-title">Mes Compétences</h2>
        
        <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          Voici un aperçu de mes compétences techniques acquises à travers mes projets
          et mon apprentissage continu.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">{category.icon}</div>
                <h3 className="text-2xl font-bold text-dark">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600 font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-dark mb-6">Compétences supplémentaires</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Microservices',
              'JWT Authentication',
              'REST API',
              'Swagger',
              'Ocelot Gateway',
              'Stripe Payment',
              'Redux Toolkit',
              'Axios',
              'NoSQL',
              'XML',
              'Assembleur MASM',
              'Wireshark',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-gray-600 rounded-full shadow-md hover:shadow-lg transition duration-300 hover:scale-105 border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

