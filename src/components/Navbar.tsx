import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, BookOpen } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-900 hover:text-blue-800 font-medium transition-colors">
              Home
            </a>
            <div className="relative">
              <button 
                className="text-gray-900 hover:text-blue-800 font-medium transition-colors flex items-center"
                onClick={() => setProgramsOpen(!programsOpen)}
              >
                Programs <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {programsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1">
                  <a href="#undergraduate" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                    Undergraduate Programs
                  </a>
                  <a href="#graduate" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                    Graduate Programs
                  </a>
                  <a href="#professional" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                    Professional Certificates
                  </a>
                </div>
              )}
            </div>
            <a href="#about" className="text-gray-900 hover:text-blue-800 font-medium transition-colors">
              About Us
            </a>
            <a href="#faculty" className="text-gray-900 hover:text-blue-800 font-medium transition-colors">
              Faculty
            </a>
            <a href="#testimonials" className="text-gray-900 hover:text-blue-800 font-medium transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-900 hover:text-blue-800 font-medium transition-colors">
              Contact
            </a>
            <a 
              href="#apply" 
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
            >
              Apply Now
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-blue-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-blue-50">
              Home
            </a>
            <button 
              onClick={() => setProgramsOpen(!programsOpen)}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-blue-50 flex items-center justify-between"
            >
              Programs <ChevronDown className={`h-4 w-4 transition-transform ${programsOpen ? 'rotate-180' : ''}`} />
            </button>
            {programsOpen && (
              <div className="pl-6 space-y-1">
                <a href="#undergraduate" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-blue-50">
                  Undergraduate Programs
                </a>
                <a href="#graduate" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-blue-50">
                  Graduate Programs
                </a>
                <a href="#professional" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-blue-50">
                  Professional Certificates
                </a>
              </div>
            )}
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-blue-50">
              About Us
            </a>
            <a href="#faculty" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-blue-50">
              Faculty
            </a>
            <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-blue-50">
              Testimonials
            </a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-blue-50">
              Contact
            </a>
            <a href="#apply" className="block px-3 py-2 rounded-md text-base font-medium bg-yellow-600 text-white hover:bg-yellow-700">
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;