import React from 'react';
import { ArrowRight, Award, BookOpen, Briefcase } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  level: string;
  duration: string;
  link: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description, icon, level, duration, link }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            {icon}
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <div className="flex items-center text-sm text-gray-500 mt-1 space-x-4">
              <span>{level}</span>
              <span>•</span>
              <span>{duration}</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        <a 
          href={link} 
          className="inline-flex items-center text-blue-800 font-medium hover:text-blue-600 transition-colors"
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

const Programs: React.FC = () => {
  const programs = [
    {
      title: 'Bachelor of Science',
      description: 'Comprehensive undergraduate programs in various disciplines designed to build a strong foundation for your career.',
      icon: <BookOpen className="h-6 w-6 text-blue-800" />,
      level: 'Undergraduate',
      duration: '4 Years',
      link: '#undergraduate'
    },
    {
      title: 'Master of Business',
      description: 'Advanced graduate programs that provide specialized knowledge and skills to excel in your chosen field.',
      icon: <Award className="h-6 w-6 text-blue-800" />,
      level: 'Graduate',
      duration: '2 Years',
      link: '#graduate'
    },
    {
      title: 'Professional Certificates',
      description: 'Short-term programs designed to provide practical skills and knowledge for immediate application in the workplace.',
      icon: <Briefcase className="h-6 w-6 text-blue-800" />,
      level: 'Certificate',
      duration: '3-6 Months',
      link: '#professional'
    }
  ];

  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Academic Programs</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our wide range of programs designed to meet the demands of today's competitive world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#all-programs" 
            className="inline-flex items-center justify-center px-8 py-3 border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white font-medium rounded-md transition-colors"
          >
            View All Programs <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;