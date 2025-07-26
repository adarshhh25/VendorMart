import { useState } from 'react';

export const useChat = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');

  const sendChatMessage = () => {
    if (chatInput.trim()) {
      const newMessage = {
        id: Date.now(),
        text: chatInput,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString()
      };
      setChatMessages(prev => [...prev, newMessage]);

      // Simulate AI response
      setTimeout(() => {
        let response = '';
        const input = chatInput.toLowerCase();

        if (input.includes('potato') || input.includes('आलू')) {
          response = 'आलू की आज की दर ₹20/kg है। Sharma Fresh Supplies में अच्छी quality मिल रही है। Group order join करना चाहते हैं?';
        } else if (input.includes('onion') || input.includes('प्याज')) {
          response = 'प्याज की दर बढ़ रही है - ₹25/kg। अभी bulk order करना फायदेमंद रहेगा। 500kg का group order चल रहा है।';
        } else if (input.includes('group') || input.includes('ग्रुप')) {
          response = 'Group order join करने के लिए Group Orders section में जाएं। Minimum participants पूरे होने पर automatic savings मिल जाती है।';
        } else if (input.includes('help') || input.includes('मदद')) {
          response = 'मैं आपकी मदद कर सकता हूं:\n- Daily prices check करने के लिए\n- Group orders join करने के लिए\n- Suppliers find करने के लिए\n- Inventory manage करने के लिए';
        } else {
          response = 'मुझे समझ नहीं आया। कृपया फिर से पूछें या "help" टाइप करें।';
        }

        const aiMessage = {
          id: Date.now(),
          text: response,
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString()
        };
        setChatMessages(prev => [...prev, aiMessage]);
      }, 1000);

      setChatInput('');
    }
  };

  return {
    chatMessages,
    chatInput,
    setChatInput,
    sendChatMessage
  };
};