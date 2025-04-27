import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import About from './components/About';
import Faculty from './components/Faculty';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Add global styles for animations
const globalStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 1s ease-out forwards;
  }
  
  .animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
  }
`;

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Pristine Education - Excellence in Learning";

    // Add global styles
    const styleElement = document.createElement('style');
    styleElement.innerHTML = globalStyles;
    document.head.appendChild(styleElement);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Programs />
      <About />
      <Faculty />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;