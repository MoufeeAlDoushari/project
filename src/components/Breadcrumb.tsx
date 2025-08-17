import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: string[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight size={16} className="text-gray-400" />}
          <span className={index === items.length - 1 ? 'text-gray-900 font-medium' : 'hover:text-gray-800 cursor-pointer'}>
            {item}
          </span>
        </React.Fragment>
      ))}
    </nav>
  );
};