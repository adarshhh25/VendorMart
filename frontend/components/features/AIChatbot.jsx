import React from 'react';
import { X, Bot, Send } from 'lucide-react';

const AIChatbot = ({ onClose, chatMessages, chatInput, setChatInput, sendChatMessage }) => {
  return (
    <div className="fixed bottom-20 right-4 bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col animate-slideUp z-40">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-5 w-5" />
            <span className="font-semibold">AI Assistant</span>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <p className="text-xs opacity-90 mt-1">Hindi & English support</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {chatMessages.length === 0 && (
          <div className="text-center text-gray-500 text-sm">
            <Bot className="h-8 w-8 mx-auto mb-2 text-purple-600" />
            <p>नमस्ते! मैं आपकी मदद कर सकता हूं।</p>
            <p className="text-xs mt-1">Ask about prices, groups, or suppliers</p>
          </div>
        )}
        {chatMessages.map(message => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs p-3 rounded-lg text-sm ${
              message.sender === 'user'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800'
            }`}>
              <p className="whitespace-pre-wrap">{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'
              }`}>
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
            onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
          />
          <button
            onClick={sendChatMessage}
            className="bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;