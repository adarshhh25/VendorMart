import React, { useState } from 'react';
import { X, Send, MapPin } from 'lucide-react';

const CommunityChat = ({ onClose }) => {
  const [communityMessages] = useState([
    { id: 1, user: 'राज वर्मा', location: '2.1 km away', message: 'कोई प्याज का bulk order join करना चाहता है?', time: '10:30 AM' },
    { id: 2, user: 'मीरा देवी', location: '1.8 km away', message: 'आटा की अच्छी quality मिली है Sharma Suppliers से', time: '9:45 AM' },
    { id: 3, user: 'अमित कुमार', location: '2.5 km away', message: 'Tomorrow tomato group order - minimum 50kg needed', time: '8:20 AM' }
  ]);

  const [messageInput, setMessageInput] = useState('');

  const sendMessage = () => {
    if (messageInput.trim()) {
      // Handle message sending logic
      setMessageInput('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full h-96 flex flex-col animate-slideUp">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">Community Chat 💬</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-sm text-gray-600">Vendors within 2-3 km radius</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {communityMessages.map(message => (
            <div key={message.id} className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-sm">{message.user}</span>
                <span className="text-xs text-gray-500">{message.time}</span>
              </div>
              <p className="text-sm text-gray-700 mb-1">{message.message}</p>
              <p className="text-xs text-gray-500 flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                {message.location}
              </p>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityChat;