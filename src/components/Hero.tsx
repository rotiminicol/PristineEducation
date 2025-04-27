import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div 
            className="max-w-2xl animate-fade-in-up"
            style={{
              animation: 'fadeInUp 1s ease-out forwards',
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Excellence in Education for a Brighter Future
            </h1>
            <p className="mt-6 text-xl text-gray-200">
              Pristine Education offers world-class programs designed to prepare you for success in a rapidly changing world.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center sm:justify-start">
              <a 
                href="#programs"
                className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-md transition-colors shadow-lg hover:shadow-xl"
              >
                Explore Programs
              </a>
              <a 
                href="#contact"
                className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-md transition-colors shadow-lg hover:shadow-xl"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,32L60,53.3C120,75,240,117,360,117.3C480,117,600,75,720,64C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;