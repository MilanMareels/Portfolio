const Skills = () => {
  const technicalSkills = [
    { name: "TypeScript", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "React", percentage: 80 },
    { name: "Angular", percentage: 80 },
    { name: "Node.js", percentage: 80 },
    { name: "C#", percentage: 80 },
    { name: "Java", percentage: 65 },
    { name: "MongoDB", percentage: 85 },
    { name: "DynamoDB", percentage: 75 },
    { name: "SQL", percentage: 75 },
    { name: "Jest", percentage: 85 },
    { name: "Playwright", percentage: 85 },
  ];

  const expertiseAreas = [
    {
      icon: "fa fa-laptop",
      title: "Frontend Development",
      description: "React, Angular, TypeScript",
    },
    {
      icon: "fa fa-server",
      title: "Backend Development",
      description: "Node.js, C#, Java",
    },
    {
      icon: "fa fa-database",
      title: "Database Management",
      description: "SQL, MongoDB, DynamoDB",
    },
    {
      icon: "fa fa-mobile",
      title: "Mobile Development",
      description: "React Native, Kotlin",
    },
    {
      icon: "fa fa-code",
      title: "Test Automation",
      description: "Jest, Playwright",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Vaardigheden</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Een uitgebreide set van technische competenties opgebouwd door studie en praktijkervaring.</p>

          <p className="text-sm text-gray-500 max-w-2xl mx-auto mt-4">
            *De weergegeven percentages zijn geen skill-levels, maar tonen aan hoeveel interesse ik momenteel heb in deze technologieën. Ik blijf continu bijleren en sta altijd open om nieuwe talen en
            frameworks te ontdekken.*
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technische Vaardigheden</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500 text-sm">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Expertise Gebieden</h3>
            <div className="grid grid-cols-2 gap-6">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <i className={`${area.icon} text-3xl text-blue-600 mb-4`}></i>
                  <h4 className="font-semibold text-gray-900 mb-2">{area.title}</h4>
                  <p className="text-gray-600 text-sm">{area.description}</p>
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
