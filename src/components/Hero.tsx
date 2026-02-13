const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                IT-Software Student &amp; <span className="text-blue-600">Ondernemer</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">Bachelor en Graduaat in Informatica en Programmeren</p>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                Gepassioneerd over het creëren van innovatieve softwareoplossingen die echte impact maken. Met een sterke academische achtergrond en ondernemersgeest bouw ik aan de toekomst van
                technologie. Daarnaast vind ik testautomatisering niet alleen leuk, maar ook bijzonder interessant, omdat het bijdraagt aan kwaliteit, efficiëntie en betrouwbare software.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-button font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">Bekijk Projecten</button>
              </a>
              <a href="/CV - Milan Mareels.pdf" download>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-button font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                  Download CV
                </button>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img src="/milan-mareels.webp" alt="Milan Mareels" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
