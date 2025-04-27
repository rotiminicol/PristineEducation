import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface FacultyMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const FacultyMember: React.FC<FacultyMemberProps> = ({ name, role, image, bio, social }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-blue-800 font-medium mb-4">{role}</p>
        <p className="text-gray-600 mb-6">
          {bio}
        </p>
        <div className="flex space-x-4">
          {social.linkedin && (
            <a href={social.linkedin} className="text-gray-600 hover:text-blue-800 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          {social.twitter && (
            <a href={social.twitter} className="text-gray-600 hover:text-blue-400 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          )}
          {social.email && (
            <a href={`mailto:${social.email}`} className="text-gray-600 hover:text-red-500 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Faculty: React.FC = () => {
  const facultyMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Dean of Business School',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Dr. Johnson has over 20 years of experience in business education and research, specializing in strategic management.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah.johnson@pristine.edu'
      }
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Computer Science Department',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Prof. Chen is a leading expert in artificial intelligence and machine learning with numerous publications in top journals.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael.chen@pristine.edu'
      }
    },
    {
      name: 'Dr. Olivia Rodriguez',
      role: 'Head of Liberal Arts',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Dr. Rodriguez brings a wealth of knowledge in humanities and social sciences with a focus on cultural studies.',
      social: {
        linkedin: '#',
        email: 'olivia.rodriguez@pristine.edu'
      }
    },
    {
      name: 'Prof. David Wilson',
      role: 'Engineering Department',
      image: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Prof. Wilson has extensive industry experience and academic expertise in mechanical engineering and renewable energy.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david.wilson@pristine.edu'
      }
    }
  ];

  return (
    <section id="faculty" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Distinguished Faculty</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from the best minds in the industry who bring years of experience and expertise to the classroom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((member, index) => (
            <FacultyMember key={index} {...member} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#all-faculty" 
            className="inline-flex items-center justify-center px-8 py-3 border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white font-medium rounded-md transition-colors"
          >
            View All Faculty
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faculty;