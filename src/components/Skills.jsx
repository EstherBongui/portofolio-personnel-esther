import React from 'react';

const Skills = () => {
      const skillCategories = [
        {
          title: 'Langages de Programmation',
          icon: '💻',
          skills: [
            { name: 'C#', level: 95 },
            { name: 'JavaScript', level: 75 },
            { name: 'Python', level: 15 },
            { name: 'Java', level: 10 },
            { name: 'PHP', level: 10 },
            { name: 'HTML/CSS', level: 100 },
          ],
        },
        {
          title: 'Frameworks & Technologies',
          icon: '⚙️',
          skills: [
            { name: 'ASP.NET', level: 80 },
            { name: 'React', level: 90 },
            { name: 'Django', level: 40 },
            { name: 'Entity Framework', level: 95 },
            { name: 'Hibernate', level: 40 },
            { name: 'Tailwind CSS', level: 30 },
            { name: 'Bootstrap', level: 95 },
          ],
        },
        {
          title: 'Outils & Bases de Données',
          icon: '🛠️',
          skills: [
            { name: 'Visual Studio', level: 95 },
            { name: 'VS Code', level: 95 },
            { name: 'Postman', level: 70 },
            { name: 'Git & GitHub', level: 50 },
            { name: 'GitLab', level: 50 },
            { name: 'Azure DevOps', level: 40 },
            { name: 'Visual Paradigm', level: 60 },
            { name: 'Draw.io', level: 70 },
            { name: 'Cisco', level: 30 },
            { name: 'SQL Server', level: 40 },
            { name: 'MySQL', level: 65 },
            { name: 'MariaDB', level: 50 },
            { name: 'Linux', level: 10 },
            { name: 'Windows', level: 90 },
            { name: 'Azure', level: 10 },
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

              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-white text-gray-600 rounded-full shadow-md hover:shadow-lg transition duration-300 hover:scale-105 border border-primary/20"
                  >
                    {skill.name}
                  </span>
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
              'CI/CD',
              'Tests unitaires',
              'Agile (Scrum)',
              'Microsoft Office',
              'Teams',
              'Outlook',
              'OneDrive',
              'Canva',
              'Overleaf (Latex)',
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

