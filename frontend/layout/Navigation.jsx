import React from 'react';
import { Home, Users, Search, Package, ShoppingCart } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage, cart }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'suppliers', label: 'Suppliers', icon: Users },
    { id: 'products', label: 'Products', icon: Search },
    { id: 'groups', label: 'Group Orders', icon: Users },
    { id: 'inventory', label: 'Inventory', icon: Package },
    { id: 'cart', label: 'Cart', icon: ShoppingCart },
  ];

  return (
    <nav className="hidden md:block bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setCurrentPage(id)}
              className={`flex items-center space-x-2 px-3 py-4 border-b-2 transition-all transform hover:scale-105 ${
                currentPage === id
                  ? 'border-blue-600 text-blue-600 font-medium'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="whitespace-nowrap">{label}</span>
              {id === 'cart' && cart.length > 0 && (
                <span className="bg-purple-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;