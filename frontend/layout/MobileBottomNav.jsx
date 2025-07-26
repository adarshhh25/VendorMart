import React from 'react';
import { Home, Users, Search, ShoppingCart } from 'lucide-react';

const MobileBottomNav = ({ currentPage, setCurrentPage, cart }) => {
  const navItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'suppliers', label: 'Suppliers', icon: Users },
    { id: 'products', label: 'Products', icon: Search },
    { id: 'groups', label: 'Groups', icon: Users },
    { id: 'cart', label: 'Cart', icon: ShoppingCart },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-20">
      <div className="grid grid-cols-5 gap-1">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setCurrentPage(id)}
            className={`flex flex-col items-center justify-center py-2 px-1 transition-colors ${
              currentPage === id ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <div className="relative">
              <Icon className="h-5 w-5" />
              {id === 'cart' && cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default MobileBottomNav;