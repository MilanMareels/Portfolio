const Experience = () => {
  const timelineItems = [
    {
      title: "Oprichting Lannie",
      period: "2025 - Heden",
      description: "Opgericht eigen softwarebedrijf gespecialiseerd in webontwikkeling en digitale oplossingen voor bedrijven.",
      align: "left",
    },
    {
      title: "Bachelor Informatica IT-Software",
      period: "2024 - 2026",
      description: "Verdieping in softwareontwikkeling, algoritmes, databanken en moderne programmeerprincipes.",
      align: "right",
    },
    {
      title: "Graduaat Programmeren",
      period: "2022 - 2024",
      description: "Opleiding gericht op praktische programmeervaardigheden, full-stack ontwikkeling en projectmatig werken.",
      align: "left",
    },
    {
      title: "Webdesign HTML5 en CSS3",
      period: "2021 - 2022",
      description: "Behaald certificaat webdesign met focus op moderne frontend-technieken, responsive design en UX-principes.",
      align: "right",
    },
    {
      title: "Grafische opmaaksystemen",
      period: "2016 - 2021",
      description: "Ervaring opgedaan met lay-out, typografie, drukvoorbereiding en visuele vormgeving in professionele workflow-omgevingen.",
      align: "left",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ervaring & Onderwijs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Mijn reis door onderwijs en ondernemerschap</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden md:block"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div key={index} className="md:flex md:items-center md:justify-between">
                {item.align === "left" ? (
                  <>
                    <div className="w-full md:w-5/12 text-left md:text-right md:pr-8">
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-blue-600 font-medium mb-3">{item.period}</p>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:w-2/12 md:flex md:justify-center">
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                    </div>
                    <div className="hidden md:block md:w-5/12"></div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:block md:w-5/12"></div>
                    <div className="hidden md:w-2/12 md:flex md:justify-center">
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                    </div>
                    <div className="w-full md:w-5/12 md:pl-8">
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-blue-600 font-medium mb-3">{item.period}</p>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
