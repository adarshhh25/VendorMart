import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import GroupOrderCard from '../ui/GroupOrderCard';

const GroupOrdersPage = () => {
  const [groupOrders, setGroupOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGroupOrders = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/group-and-match"); // adjust URL if deployed
        const data = await response.json();
        setGroupOrders(data.groupedMatches); // as returned by backend
      } catch (err) {
        setError('Failed to load group orders');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGroupOrders();
  }, []);

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
        {loading ? (
          <p>Loading group orders...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : groupOrders.length === 0 ? (
          <p>No group orders available yet.</p>
        ) : (
          groupOrders.map((order, index) => (
            <GroupOrderCard key={index} order={order} />
          ))
        )}
      </div>
    </div>
  );
};

export default GroupOrdersPage;
