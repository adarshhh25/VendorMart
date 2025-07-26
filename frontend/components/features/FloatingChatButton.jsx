import React from 'react';
import { Bot } from 'lucide-react';

const FloatingChatButton = ({ showChatbot, setShowChatbot }) => {
  return (
    <button
      onClick={() => setShowChatbot(!showChatbot)}
      className="fixed bottom-24 md:bottom-6 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 z-30"
    >
      <Bot className="h-6 w-6" />
    </button>
  );
};

export default FloatingChatButton;