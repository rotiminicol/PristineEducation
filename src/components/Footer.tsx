import React from 'react';
import Logo from './Logo';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-400 mb-6">
              Providing quality education and transforming lives since 2005. Our mission is to empower students with knowledge and skills for a successful future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#programs" className="text-gray-400 hover:text-white transition-colors">Programs</a>
              </li>
              <li>
                <a href="#faculty" className="text-gray-400 hover:text-white transition-colors">Faculty</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Programs</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Undergraduate</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Graduate</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Professional Certificates</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Online Learning</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Summer Programs</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">International Studies</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to get the latest updates and news about our programs.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-l-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <button 
                  type="submit" 
                  className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </form>
            <p className="text-gray-400 text-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our institution.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Pristine Education. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;