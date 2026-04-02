const Skills = () => {
  const technicalSkills = [
    { name: ".NET", percentage: 95 },
    { name: "SQL Server / PostgreSQL", percentage: 90 },
    { name: "Frontend Frameworks", percentage: 85 },
    { name: "Testing", percentage: 85 },
    { name: "NoSQL Databases", percentage: 75 },
    { name: "Mobile Development", percentage: 60 },
  ];

  const expertiseAreas = [
    {
      icon: "fa fa-server",
      title: "Backend Development",
      description: ".NET, Java, REST APIs, backend architecture",
    },
    {
      icon: "fa fa-laptop",
      title: "Frontend Development",
      description: "Blazor, React, Next.js, Angular, TypeScript",
    },
    {
      icon: "fa fa-database",
      title: "Database Development",
      description: "SQL Server, PostgreSQL, MongoDB, DynamoDB",
    },
    {
      icon: "fa fa-code",
      title: "Test Automation",
      description: "Playwright, Jest",
    },
    {
      icon: "fa fa-mobile",
      title: "Mobile Development",
      description: "React Native, Kotlin",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologieën & Expertise</h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Mijn technische focus ligt voornamelijk op .NET en SQL.</p>

          <p className="text-sm text-gray-500 max-w-2xl mx-auto mt-4 leading-relaxed">
            *De weergegeven percentages tonen vooral mijn huidige focus en interessegebieden binnen softwareontwikkeling. Ze zijn niet bedoeld als
            exacte skill-levels, maar geven weer waar ik het meest mee werk en me verder in wil verdiepen.*
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technische Focus</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center gap-4">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500 text-sm whitespace-nowrap">{skill.percentage}%</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000" style={{ width: `${skill.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Expertisegebieden</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <i className={`${area.icon} text-3xl text-blue-600 mb-4`} />
                  <h4 className="font-semibold text-gray-900 mb-2">{area.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
