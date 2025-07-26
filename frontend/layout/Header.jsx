import React from 'react';
import { Bell, Menu, X, ShoppingCart, MessageCircle, User } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Header = ({ 
  showMobileMenu, 
  setShowMobileMenu, 
  setShowPriceAlerts, 
  setShowCommunityChat, 
  setCurrentPage,
  cart,
  currentPage 
}) => {
  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">VendorMart</h1>
                <p className="text-xs text-gray-600">Street Food Supply Hub</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setShowPriceAlerts(true)}
                className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center animate-pulse">
                  2
                </span>
              </button>
              
              <button
                onClick={() => setShowCommunityChat(true)}
                className="p-2 text-gray-600 hover:text-green-600 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
              
              <button
                onClick={() => setCurrentPage('cart')}
                className="relative p-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
              
              <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg">
                <User className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">राम प्रसाद</span>
              </div>
            </div>
            
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {showMobileMenu && (
          <MobileMenu 
            setCurrentPage={setCurrentPage}
            setShowMobileMenu={setShowMobileMenu}
            setShowPriceAlerts={setShowPriceAlerts}
            setShowCommunityChat={setShowCommunityChat}
          />
        )}
      </header>
    </>
  );
};

export default Header;