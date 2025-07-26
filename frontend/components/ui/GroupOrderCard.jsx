import React from 'react';

const GroupOrderCard = ({ order }) => {
  const getProgressPercentage = () => {
    return Math.min((order.participants / order.minParticipants) * 100, 100);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <h3 className="text-xl font-semibold text-gray-900">{order.product}</h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              order.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {order.status === 'confirmed' ? 'Confirmed' : 'Open'}
            </span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Quantity:</span>
              <div className="font-semibold">{order.quantity}</div>
            </div>
            <div>
              <span className="text-gray-600">Participants:</span>
              <div className="font-semibold">{order.participants}/{order.minParticipants}</div>
            </div>
            <div>
              <span className="text-gray-600">Savings:</span>
              <div className="font-semibold text-green-600">{order.savings}</div>
            </div>
            <div>
              <span className="text-gray-600">Deadline:</span>
              <div className="font-semibold">{order.deadline}</div>
            </div>
          </div>
          
          <div className="mt-3">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>{Math.round(getProgressPercentage())}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all ${
                  order.participants >= order.minParticipants ? 'bg-green-600' : 'bg-blue-600'
                }`}
                style={{ width: `${getProgressPercentage()}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 md:mt-0 md:ml-6">
          <button className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            order.status === 'confirmed'
              ? 'bg-gray-100 text-gray-600 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}>
            {order.status === 'confirmed' ? 'Joined' : 'Join Order'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupOrderCard;