const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Milan Mareels</h3>
            <p className="text-gray-400 leading-relaxed">IT-Software Student &amp; Ondernemer gepassioneerd over het creëren van innovatieve softwareoplossingen.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Snelle Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Home
              </a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Over Mij
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Projecten
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Bedrijf</h4>
            <a href="https://www.lannie.be" className="text-blue-400 hover:text-blue-300 font-medium cursor-pointer">
              www.lannie.be
            </a>
            <p className="text-gray-400 mt-2">Innovatieve websites voor moderne bedrijven</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-center items-center">
          <a href="http://lannie.be" target="_blank" rel="noopener noreferrer">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Lannie. Ontworpen en ontwikkeld door Lannie</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
