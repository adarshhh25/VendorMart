import React from 'react';
import { Home, Bell, MessageCircle } from 'lucide-react';

const MobileMenu = ({ 
  setCurrentPage, 
  setShowMobileMenu, 
  setShowPriceAlerts, 
  setShowCommunityChat 
}) => {
  const handleNavigation = (page) => {
    setCurrentPage(page);
    setShowMobileMenu(false);
  };

  const handlePriceAlerts = () => {
    setShowPriceAlerts(true);
    setShowMobileMenu(false);
  };

  const handleCommunityChat = () => {
    setShowCommunityChat(true);
    setShowMobileMenu(false);
  };

  return (
    <div className="md:hidden bg-white border-t border-gray-200 animate-slideIn">
      <div className="px-4 py-3 space-y-2">
        <button
          onClick={() => handleNavigation('dashboard')}
          className="flex items-center space-x-3 w-full px-3 py-2 text-left hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Home className="h-5 w-5 text-gray-600" />
          <span>Dashboard</span>
        </button>
        
        <button
          onClick={handlePriceAlerts}
          className="flex items-center space-x-3 w-full px-3 py-2 text-left hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Bell className="h-5 w-5 text-gray-600" />
          <span>Price Alerts</span>
          <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
        </button>
        
        <button
          onClick={handleCommunityChat}
          className="flex items-center space-x-3 w-full px-3 py-2 text-left hover:bg-gray-100 rounded-lg transition-colors"
        >
          <MessageCircle className="h-5 w-5 text-gray-600" />
          <span>Community Chat</span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
