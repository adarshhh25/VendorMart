import React from 'react';

const ProgressBar = ({ percentage, status, label }) => {
  const getBarColor = () => {
    switch (status) {
      case 'critical': return 'bg-red-600';
      case 'low': return 'bg-orange-600';
      case 'medium': return 'bg-yellow-600';
      case 'good': return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{Math.round(percentage)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`h-3 rounded-full transition-all ${getBarColor()}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;