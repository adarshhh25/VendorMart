import React, { useState } from 'react';
import { X, Bell } from 'lucide-react';

const PriceAlertsModal = ({ onClose }) => {
  const [priceAlerts, setPriceAlerts] = useState({
    onion: { enabled: true, currentPrice: 25, alertPrice: 30, whatsapp: '', sms: '' },
    tomato: { enabled: false, currentPrice: 35, alertPrice: 40, whatsapp: '', sms: '' },
    potato: { enabled: true, currentPrice: 20, alertPrice: 25, whatsapp: '', sms: '' },
    rice: { enabled: false, currentPrice: 45, alertPrice: 50, whatsapp: '', sms: '' }
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-screen overflow-y-auto animate-slideUp">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Daily Price Alerts 📲</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="space-y-6">
            {Object.entries(priceAlerts).map(([product, alert]) => (
              <div key={product} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold capitalize">{product}</h4>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={alert.enabled}
                      onChange={(e) => setPriceAlerts(prev => ({
                        ...prev,
                        [product]: { ...prev[product], enabled: e.target.checked }
                      }))}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                  <div>
                    <span className="text-gray-600">Current Price:</span>
                    <div className="font-semibold text-green-600">₹{alert.currentPrice}/kg</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Alert Price:</span>
                    <div className="font-semibold text-red-600">₹{alert.alertPrice}/kg</div>
                  </div>
                </div>
                
                {alert.enabled && (
                  <div className="space-y-2">
                    <input
                      type="tel"
                      placeholder="WhatsApp Number (+91xxxxxxxxxx)"
                      value={alert.whatsapp}
                      onChange={(e) => setPriceAlerts(prev => ({
                        ...prev,
                        [product]: { ...prev[product], whatsapp: e.target.value }
                      }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                    <input
                      type="tel"
                      placeholder="SMS Number (+91xxxxxxxxxx)"
                      value={alert.sms}
                      onChange={(e) => setPriceAlerts(prev => ({
                        ...prev,
                        [product]: { ...prev[product], sms: e.target.value }
                      }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 text-blue-800 mb-2">
              <Bell className="h-4 w-4" />
              <span className="font-medium">How it works:</span>
            </div>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Get alerts at 7:00 AM daily</li>
              <li>• Compare prices from all suppliers</li>
              <li>• Find best deals in your area</li>
              <li>• Never miss bulk order opportunities</li>
            </ul>
          </div>
          
          <button
            onClick={onClose}
            className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save Alert Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceAlertsModal;