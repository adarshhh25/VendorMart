import React from 'react';

const StatCard = ({ title, value, icon: Icon, color = "blue", trend }) => {
  const colorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    red: 'text-red-600',
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className={`text-2xl font-bold ${colorClasses[color]}`}>{value}</p>
        </div>
        <Icon className={`h-8 w-8 ${colorClasses[color]}`} />
      </div>
      {trend && (
        <div className="mt-2 text-xs text-gray-500">
          {trend}
        </div>
      )}
    </div>
  );
};

export default StatCard;
