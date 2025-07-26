import React from 'react';
import { Settings } from 'lucide-react';
import InventoryItem from '../ui/InventoryItem';
import { inventory } from '../../data/inventory';

const InventoryPage = ({ setCurrentPage }) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Smart Inventory Tracker</h2>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          <Settings className="h-4 w-4 inline mr-2" />
          Update Usage
        </button>
      </div>
      
      <div className="grid gap-6">
        {inventory.map(item => (
          <InventoryItem 
            key={item.id} 
            item={item}
            onReorder={() => setCurrentPage('products')}
          />
        ))}
      </div>
    </div>
  );
};

export default InventoryPage;