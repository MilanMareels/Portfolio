import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">Milan Mareels</div>

          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Over Mij
            </a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Vaardigheden
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Projecten
            </a>
            <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Ervaring
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Contact
            </a>
          </div>

          <button className="md:hidden text-gray-700 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="fa fa-bars text-xl"></i>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <a href="#home" className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Home
            </a>
            <a href="#about" className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Over Mij
            </a>
            <a href="#skills" className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Vaardigheden
            </a>
            <a href="#projects" className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Projecten
            </a>
            <a href="#experience" className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Ervaring
            </a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
