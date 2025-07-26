//========================================
// components/pages/SuppliersPage.jsx
import React from 'react';
import { MapPin } from 'lucide-react';
import SupplierCard from '../ui/SupplierCard';
import { suppliers } from '../../data/suppliers';

const SuppliersPage = ({ setShowCommunityChat, setCurrentPage }) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Verified Suppliers</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <MapPin className="h-4 w-4 inline mr-2" />
            Near Me
          </button>
        </div>
      </div>
      
      <div className="grid gap-6">
        {suppliers.map(supplier => (
          <SupplierCard 
            key={supplier.id} 
            supplier={supplier}
            onChatClick={() => setShowCommunityChat(true)}
            onViewProducts={() => setCurrentPage('products')}
          />
        ))}
      </div>
    </div>
  );
};

export default SuppliersPage;
