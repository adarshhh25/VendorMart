import React from 'react';
import { TrendingUp } from 'lucide-react';

const TrendIndicator = ({ trend }) => {
  const getTrendConfig = () => {
    switch (trend) {
      case 'up':
        return { color: 'text-red-600', rotation: '' };
      case 'down':
        return { color: 'text-green-600', rotation: 'rotate-180' };
      case 'stable':
        return { color: 'text-gray-600', rotation: 'rotate-90' };
      default:
        return { color: 'text-gray-600', rotation: '' };
    }
  };

  const config = getTrendConfig();

  return (
    <div className={`flex items-center space-x-1 ${config.color}`}>
      <TrendingUp className={`h-4 w-4 transform ${config.rotation}`} />
    </div>
  );
};

export default TrendIndicator;
