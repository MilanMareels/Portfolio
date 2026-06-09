const Publications = () => {
  const publicationsList = [
    {
      title: "Ontwikkeling van een Full-Stack Applicatie met Next.js & Express",
      type: "Bachelorproef & Stage",
      date: "Juni 2026",
      description:
        "Mijn bachelorproef en bijbehorende stage stonden in het teken van het bouwen van een complete full-stack applicatie. Hierbij is gebruikgemaakt van Next.js voor een performante frontend en Express (Node.js) voor de backend. Daarnaast is er veel aandacht besteed aan softwarekwaliteit door de implementatie van robuuste testing frameworks.",
      icon: "fa fa-graduation-cap",
      link: "/Bachelorproef_Milan_Mareels 25-26 SOF.pdf",
      linkText: "Download Bachelorproef",
      isDownload: true,
    },
    {
      title: "De Impact van Caching op Gebruikerservaring en Zoekmachineoptimalisatie",
      type: "Academische Paper",
      date: "Juni 2025",
      description:
        "Een diepgaand onderzoek naar hoe verschillende caching-strategieën de laadtijden van webpagina's beïnvloeden. De paper analyseert de directe correlatie tussen snellere responstijden, een verbeterde gebruikerservaring (UX) en de positieve impact daarvan op de Core Web Vitals binnen zoekmachineoptimalisatie (SEO).",
      icon: "fa fa-file-text-o",
      link: "/Paper_de_impact_van_caching_op_gebruikerservaring_en_zoekmachineoptimalisatie_Milan_Mareels.pdf",
      linkText: "Download Paper",
      isDownload: true,
    },
  ];

  return (
    <section id="publicaties" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Publicaties & Papers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Een overzicht van mijn academisch werk, stageonderzoeken en technische publicaties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {publicationsList.map((pub, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <i className={`${pub.icon} text-xl`} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">{pub.type}</span>
                  <div className="text-sm text-gray-500">{pub.date}</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{pub.title}</h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{pub.description}</p>

              {pub.link && (
                <a
                  href={pub.link}
                  download={pub.isDownload}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors mt-auto group"
                >
                  {pub.linkText}
                  <i className="fa fa-download ml-2 text-xs group-hover:translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
