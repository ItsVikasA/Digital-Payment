import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const text = {
    en: {
      title: "Digital Pay India",
      subtitle: "Empowering Every Rupee",
      nav: {
        about: "About",
        benefits: "Benefits",
        methods: "Payment Methods",
        safety: "Safety",
        testimonials: "Stories",
        faq: "FAQ",
        workshop: "Workshop"
      },
      cta: "Join Workshop"
    },
    hi: {
      title: "डिजिटल पे इंडिया",
      subtitle: "हर रुपये को सशक्त बनाना",
      nav: {
        about: "परिचय",
        benefits: "फायदे",
        methods: "भुगतान तरीके",
        safety: "सुरक्षा",
        testimonials: "कहानियां",
        faq: "सवाल",
        workshop: "कार्यशाला"
      },
      cta: "कार्यशाला में शामिल हों"
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-xl">₹</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {text[language].title}
              </h1>
              <p className="text-xs md:text-sm text-teal-600 font-medium">{text[language].subtitle}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {Object.entries(text[language].nav).map(([key, value]) => (
              <a 
                key={key}
                href={`#${key}`} 
                className="text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium text-sm relative group"
              >
                {value}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Language Toggle & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 border-2 border-gray-200 rounded-xl text-sm font-medium hover:border-teal-400 hover:text-teal-600 transition-all duration-300 bg-white"
            >
              {language === 'en' ? '🇮🇳 हिं' : '🇺🇸 EN'}
            </button>
            <a
              href="#workshop"
              className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
            >
              {text[language].cta}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg">
            <div className="flex flex-col space-y-1">
              {Object.entries(text[language].nav).map(([key, value]) => (
                <a 
                  key={key}
                  href={`#${key}`} 
                  className="text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300 py-3 px-4 rounded-xl font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {value}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4 px-4">
                <button
                  onClick={toggleLanguage}
                  className="px-4 py-2 border-2 border-gray-200 rounded-xl text-sm font-medium hover:border-teal-400 hover:text-teal-600 transition-all duration-300 bg-white"
                >
                  {language === 'en' ? '🇮🇳 हिं' : '🇺🇸 EN'}
                </button>
                <a
                  href="#workshop"
                  className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {text[language].cta}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
