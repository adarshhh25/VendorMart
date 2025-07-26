import React from 'react';

const StatusBadge = ({ status }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'critical': 
        return { color: 'text-red-600 bg-red-100', label: 'Critical' };
      case 'low': 
        return { color: 'text-orange-600 bg-orange-100', label: 'Low' };
      case 'medium': 
        return { color: 'text-yellow-600 bg-yellow-100', label: 'Medium' };
      case 'good': 
        return { color: 'text-green-600 bg-green-100', label: 'Good' };
      default: 
        return { color: 'text-gray-600 bg-gray-100', label: 'Unknown' };
    }
  };

  const config = getStatusConfig();

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
      {config.label}
    </span>
  );
};

export default StatusBadge;