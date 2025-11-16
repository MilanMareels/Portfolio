const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Over Mij</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Een gedreven IT-professional met een passie voor innovatie en ondernemerschap</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Als IT-softwarestudent met een bachelor in Informatica – IT & Software, een graduaat in Programmeren en een certificaat in SEO en Webdesign, combineer ik sterke technische kennis met een
              brede digitale skillset. Mijn interesse in technologie begon met een fascinatie voor hoe software echte problemen kan oplossen en efficiëntie kan creëren.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Naast mijn studies heb ik mijn eigen bedrijf opgericht,{" "}
              <a href="https://www.lannie.be" className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer">
                Lannie
              </a>
              , waar ik professionele websites ontwikkel voor zowel kleine als grote bedrijven. Deze praktijkervaring heeft mijn technische achtergrond verder verdiept en me geleerd hoe belangrijk
              gebruiksvriendelijkheid, schaalbaarheid en online vindbaarheid zijn.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Hoogtepunten</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <i className="fa fa-graduation-cap text-blue-600 text-xl"></i>
                <span className="text-gray-700">Bachelor Informatica - IT & Software</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa fa-graduation-cap text-blue-600 text-xl"></i>
                <span className="text-gray-700">Graduaat Programmeren</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa fa-certificate text-blue-600 text-xl"></i>
                <span className="text-gray-700">Webdesign HTML5 en CSS3</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa fa-certificate text-blue-600 text-xl"></i>
                <span className="text-gray-700">Search Engine Optimization</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa fa-briefcase text-blue-600 text-xl"></i>
                <span className="text-gray-700">Oprichter van Lannie</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fa fa-code text-blue-600 text-xl"></i>
                <span className="text-gray-700">Full-Stack Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
