import React from 'react';
import { Link } from 'react-router-dom';

interface AuthorCardProps {
  name: string;
  date: string;
  avatar?: string;
  authorId: string;
}

export const AuthorCard: React.FC<AuthorCardProps> = ({ name, date, avatar, authorId }) => {
  return (
    <div className="flex items-center space-x-3 my-6">
      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
        {avatar || name.charAt(0)}
      </div>
      <div>
        <Link 
          to={`/author/${authorId}`}
          className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          {name}
        </Link>
        <p className="text-sm text-gray-600">{date}</p>
      </div>
    </div>
  );
};