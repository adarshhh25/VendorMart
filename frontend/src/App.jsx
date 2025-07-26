// App..jsx - Main Application Component
import React, { useState } from 'react';
import Header from '../layout/Header';
import Navigation from '../layout/Navigation';
import MobileBottomNav from '../layout/MobileBottomNav.jsx';
import Footer from '../layout/Footer';
import Dashboard from '../components/pages/Dashboard';
import SuppliersPage from '../components/pages/SuppliersPage';
import ProductsPage from '../components/pages/ProductsPage';
import GroupOrdersPage from '../components/pages/GroupOrdersPage';
import InventoryPage from '../components/pages/InventoryPage';
import CartPage from '../components/pages/CartPage';
import PriceAlertsModal from '../components/features/PriceAlertsModal';
import CommunityChat from '../components/features/CommunityChat';
import AIChatbot from '../components/features/AIChatbot';
import FloatingChatButton from '../components/features/FloatingChatButton';
import { useChart } from '../hooks/useChart';
import { useChat } from '../hooks/useChat';
import '../Styles/animations.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showPriceAlerts, setShowPriceAlerts] = useState(false);
  const [showCommunityChat, setShowCommunityChat] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  const { cart, addToCart } = useChart();
  const { chatMessages, chatInput, setChatInput, sendChatMessage } = useChat();

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard setCurrentPage={setCurrentPage} />;
      case 'suppliers': return <SuppliersPage setShowCommunityChat={setShowCommunityChat} setCurrentPage={setCurrentPage} />;
      case 'products': return <ProductsPage addToCart={addToCart} />;
      case 'groups': return <GroupOrdersPage />;
      case 'inventory': return <InventoryPage setCurrentPage={setCurrentPage} />;
      case 'cart': return <CartPage cart={cart} setCurrentPage={setCurrentPage} />;
      default: return <Dashboard setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        setShowPriceAlerts={setShowPriceAlerts}
        setShowCommunityChat={setShowCommunityChat}
        setCurrentPage={setCurrentPage}
        cart={cart}
        currentPage={currentPage}
      />
      
      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cart={cart}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
      
      <MobileBottomNav 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cart={cart}
      />
      
      <FloatingChatButton 
        showChatbot={showChatbot}
        setShowChatbot={setShowChatbot}
      />
      
      <Footer />
      
      {/* Modals */}
      {showPriceAlerts && <PriceAlertsModal onClose={() => setShowPriceAlerts(false)} />}
      {showCommunityChat && <CommunityChat onClose={() => setShowCommunityChat(false)} />}
      {showChatbot && (
        <AIChatbot 
          onClose={() => setShowChatbot(false)}
          chatMessages={chatMessages}
          chatInput={chatInput}
          setChatInput={setChatInput}
          sendChatMessage={sendChatMessage}
        />
      )}
    </div>
  );
};

export default App;