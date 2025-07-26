import React from 'react';

const QuickActionButton = ({ icon: Icon, label, onClick, color = "blue" }) => {
  const colorClasses = {
    blue: 'hover:bg-blue-50 hover:border-blue-300',
    green: 'hover:bg-green-50 hover:border-green-300',
    yellow: 'hover:bg-yellow-50 hover:border-yellow-300',
    purple: 'hover:bg-purple-50 hover:border-purple-300',
  };

  const iconColors = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    yellow: 'text-yellow-600',
    purple: 'text-purple-600',
  };

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center p-4 border border-gray-200 rounded-lg ${colorClasses[color]} transition-all transform hover:scale-105`}
    >
      <Icon className={`h-6 w-6 ${iconColors[color]} mb-2`} />
      <span className="text-sm">{label}</span>
    </button>
  );
};

export default QuickActionButton;