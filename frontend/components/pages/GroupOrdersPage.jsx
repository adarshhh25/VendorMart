import React from 'react';
import { Plus } from 'lucide-react';
import GroupOrderCard from '../ui/GroupOrderCard';
import { groupOrders } from '../../data/groupOrders';

const GroupOrdersPage = () => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Group Orders</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          <Plus className="h-4 w-4 inline mr-2" />
          Create Group Order
        </button>
      </div>
      
      <div className="grid gap-6">
        {groupOrders.map(order => (
          <GroupOrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default GroupOrdersPage;