const Projects = () => {
  const projects = [
    {
      title: "Lannie",
      description: "Mijn eigen bedrijfsplatform gebouwd met moderne webtechnologieën voor optimale gebruikerservaring.",
      image:
        "https://readdy.ai/api/search-image?query=modern%20business%20platform%20interface%20with%20clean%20design%20professional%20dashboard%20layout%20minimal%20white%20background%20contemporary%20web%20application&width=400&height=250&seq=project1&orientation=landscape",
      technologies: ["React", "TypeScript", "Flowbite", "Tailwindcss"],
      liveDemo: "https://www.lannie.be",
      github: "https://github.com/MilanMareels/Lannie",
    },
    {
      title: "Garden Guru",
      description: "Een volledige applicatie waarmee gebruikers eenvoudig planten kunnen toevoegen aan hun persoonlijke digitale tuin.",
      image:
        "https://readdy.ai/api/search-image?query=modern%20e-commerce%20website%20interface%20shopping%20cart%20product%20catalog%20clean%20minimal%20design%20professional%20white%20background%20contemporary%20layout&width=400&height=250&seq=project2&orientation=landscape",
      technologies: ["React", "TypeScript", "Node.js", "Material ui", "Tailwindcss"],
      liveDemo: "https://www.gardenguru.guru",
      github: "https://github.com/GardenGuru2324?tab=repositories",
    },
    {
      title: "Clocky",
      description: "Een heel simpele applicatie waarmee studenten hun gewerkte uren eenvoudig kunnen inklokken en beheren.",
      image:
        "https://readdy.ai/api/search-image?query=task%20management%20application%20interface%20project%20dashboard%20kanban%20board%20clean%20modern%20design%20minimal%20white%20background%20professional%20layout&width=400&height=250&seq=project3&orientation=landscape",
      technologies: ["Angular", "MongoDB", "Node.js", "Express"],
      liveDemo: "https://www.clocky.be",
      github: "https://github.com/MilanMareels/Clocky-Frontend",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projecten Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Een selectie van mijn beste werk dat mijn technische vaardigheden en creativiteit toont</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a href={project.liveDemo} target="blank" className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                    <i className="fa fa-external-link-alt mr-2"></i>Live Demo
                  </a>
                  <a href={project.github} target="blank" className="text-gray-600 hover:text-gray-800 font-medium cursor-pointer">
                    <i className="fa fa-github mr-2"></i>GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
