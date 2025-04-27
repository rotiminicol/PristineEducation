import React from 'react';
import { Award, BookOpen, Users, TrendingUp } from 'lucide-react';

interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
      <div className="bg-blue-100 p-3 rounded-full">
        {icon}
      </div>
      <div className="ml-4">
        <div className="text-3xl font-bold text-gray-900">{value}</div>
        <div className="text-gray-600">{label}</div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Pristine Education</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2005, Pristine Education has been a leader in providing quality education that prepares students for the challenges of tomorrow. Our institution is built on the pillars of academic excellence, innovation, and holistic development.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We believe in nurturing not just academic brilliance but also character, creativity, and social responsibility. Our faculty comprises renowned experts who are dedicated to bringing out the best in every student.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
              <a 
                href="#mission" 
                className="px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white font-medium rounded-md transition-colors shadow-md"
              >
                Our Mission
              </a>
              <a 
                href="#history" 
                className="px-6 py-3 border border-blue-800 text-blue-800 hover:bg-blue-50 font-medium rounded-md transition-colors"
              >
                Our History
              </a>
            </div>
          </div>
          <div>
            <div 
              className="rounded-lg overflow-hidden shadow-xl"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px'
              }}
            ></div>
          </div>
        </div>
        
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              At Pristine Education, we are committed to providing an exceptional educational experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              value="25+"
              label="Years of Excellence"
              icon={<Award className="h-6 w-6 text-blue-800" />}
            />
            <StatCard 
              value="200+"
              label="Expert Faculty"
              icon={<Users className="h-6 w-6 text-blue-800" />}
            />
            <StatCard 
              value="50+"
              label="Academic Programs"
              icon={<BookOpen className="h-6 w-6 text-blue-800" />}
            />
            <StatCard 
              value="95%"
              label="Placement Rate"
              icon={<TrendingUp className="h-6 w-6 text-blue-800" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;