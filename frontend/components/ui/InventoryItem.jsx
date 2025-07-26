import React from 'react';
import { AlertTriangle } from 'lucide-react';
import StatusBadge from './StatusBadge';
import ProgressBar from './ProgressBar';

const InventoryItem = ({ item, onReorder }) => {
  const getStockPercentage = () => {
    const maxStock = item.dailyUsage * 30; // 30 days worth
    return Math.min((item.currentStock / maxStock) * 100, 100);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
            <StatusBadge status={item.status} />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
            <div>
              <span className="text-gray-600">Current Stock:</span>
              <div className="font-semibold text-lg">{item.currentStock} {item.unit}</div>
            </div>
            <div>
              <span className="text-gray-600">Daily Usage:</span>
              <div className="font-semibold">{item.dailyUsage} {item.unit}/day</div>
            </div>
            <div>
              <span className="text-gray-600">Days Remaining:</span>
              <div className={`font-semibold ${item.daysRemaining <= 3 ? 'text-red-600' : 'text-green-600'}`}>
                {item.daysRemaining} days
              </div>
            </div>
            <div>
              <span className="text-gray-600">Status:</span>
              <div className="font-semibold">
                {item.status === 'critical' && '🚨 Reorder Now!'}
                {item.status === 'low' && '⚠️ Order Soon'}
                {item.status === 'medium' && '📦 Monitor'}
                {item.status === 'good' && '✅ All Good'}
              </div>
            </div>
          </div>
          
          <ProgressBar 
            percentage={getStockPercentage()}
            status={item.status}
            label="Stock Level"
          />
          
          {item.status === 'critical' && (
            <div className="bg-red-50 p-3 rounded-lg mb-4 mt-4">
              <div className="flex items-center space-x-2 text-red-800">
                <AlertTriangle className="h-4 w-4" />
                <span className="font-medium">Critical stock level! Reorder immediately to avoid shortage.</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-4 md:mt-0 md:ml-6">
          <button
            onClick={onReorder}
            className={`px-6 py-2 rounded-lg font-medium transition-colors transform hover:scale-105 ${
              item.status === 'critical'
                ? 'bg-red-600 text-white hover:bg-red-700 animate-pulse'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {item.status === 'critical' ? 'Reorder Now!' : 'Reorder'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;