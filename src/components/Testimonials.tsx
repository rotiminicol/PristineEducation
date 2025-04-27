import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  name: string;
  role: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, name, role, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center">
      <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>
      <div>
        <div className="text-blue-800 mb-4">
          <Quote className="h-8 w-8" />
        </div>
        <p className="text-gray-700 text-lg italic mb-6">{content}</p>
        <div>
          <h4 className="text-lg font-bold text-gray-900">{name}</h4>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "Studying at Pristine Education was a transformative experience. The faculty's dedication and the comprehensive curriculum prepared me exceptionally well for my career.",
      name: "Emma Thompson",
      role: "Business Graduate, Class of 2022",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "The hands-on learning approach and state-of-the-art facilities at Pristine Education gave me the practical skills needed to excel in my field from day one.",
      name: "James Roberts",
      role: "Engineering Graduate, Class of 2021",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      content: "As an international student, I found a welcoming community at Pristine Education. The support services and diverse environment enriched my educational journey.",
      name: "Sophia Chen",
      role: "Computer Science Graduate, Class of 2023",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 8000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Students Say</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our alumni about their experiences at Pristine Education.
          </p>
        </div>

        <div className="relative">
          <Testimonial {...testimonials[currentIndex]} />
          
          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full">
            <button 
              onClick={handlePrev}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors focus:outline-none -ml-4"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button 
              onClick={handleNext}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors focus:outline-none -mr-4"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-blue-800' : 'bg-gray-300'
                } transition-all duration-300`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;