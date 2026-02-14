const Projects = () => {
  const projects = [
    {
      title: "Lannie",
      description: "Mijn eigen bedrijfsplatform gebouwd met moderne webtechnologieën voor optimale gebruikerservaring.",
      image: "/lannie.webp",
      technologies: ["React", "TypeScript", "Flowbite", "Tailwindcss"],
      liveDemo: "https://www.lannie.be",
      github: "https://github.com/MilanMareels/Lannie",
    },
    {
      title: "Garden Guru",
      description: "Een volledige applicatie waarmee gebruikers eenvoudig planten kunnen toevoegen aan hun persoonlijke digitale tuin.",
      image: "/gardenguru.webp",
      technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Material ui", "Tailwindcss"],
      liveDemo: "https://gardenguru.vercel.app",
      github: "https://github.com/GardenGuru2324?tab=repositories",
    },
    {
      title: "Clocky",
      description: "Een heel simpele applicatie waarmee studenten hun gewerkte uren eenvoudig kunnen inklokken en beheren.",
      image: "/clocky.webp",
      technologies: ["Angular", "MongoDB", "Node.js", "Express"],
      liveDemo: "https://www.clocky.be",
      github: "https://github.com/MilanMareels/Clocky-Frontend",
    },
    {
      title: "AP Gaming Hub",
      description: "Een full-stack webapplicatie waarmee studenten plekken kunnen reserveren en informatie kunnen vinden over de AP Gaming Hub.",
      image: "/ap-gaming.webp",
      technologies: ["Next.js", "Firebase", "Tailwindcss"],
      liveDemo: "https://www.apgaming.be",
      github: "https://github.com/MilanMareels/ap-gaming-hub",
    },
    {
      title: "Blog Milan Mareels",
      description: "Een persoonlijk blogplatform gewijd aan het delen van inzichten, opinies en mijn passie voor IT.",
      image: "/blog.webp",
      technologies: ["Next.js", "Supabase", "Tailwindcss"],
      liveDemo: "https://blog.milanmareels.be",
      github: "https://github.com/MilanMareels/blog-milan-mareels",
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
              <div className="h-72 overflow-hidden">
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
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                    <i className="fa fa-external-link-alt mr-2"></i>Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 font-medium cursor-pointer">
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
