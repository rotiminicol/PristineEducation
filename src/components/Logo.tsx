import React from 'react';
import { BookOpen } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <BookOpen className="h-8 w-8 text-blue-800" />
      <span className="ml-2 text-xl font-bold text-gray-900">Pristine Education</span>
    </div>
  );
};

export default Logo;