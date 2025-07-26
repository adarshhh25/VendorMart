import React from 'react';
import { Star, MapPin, Clock, Truck, Phone, MessageCircle, Eye, Shield, Award } from 'lucide-react';

const SupplierCard = ({ supplier, onChatClick, onViewProducts }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{supplier.name}</h3>
            {supplier.verified && (
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4 text-blue-600" />
                <span className="text-xs text-blue-600">Verified</span>
              </div>
            )}
            {supplier.trusted && (
              <div className="flex items-center space-x-1 bg-green-100 px-2 py-1 rounded-full">
                <Award className="h-3 w-3 text-green-600" />
                <span className="text-xs text-green-600 font-medium">Trusted</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="font-medium">{supplier.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{supplier.distance} km away</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{supplier.deliveryTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Truck className="h-4 w-4" />
              <span>{supplier.completedOrders} orders completed</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-700">
            Specializes in fresh vegetables, grains, and spices.
            {supplier.trusted && " Known for consistent quality and timely delivery."}
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-stretch md:items-center space-y-2 md:space-y-0 md:space-x-2 mt-4 md:mt-0">
          <button className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Phone className="h-4 w-4 mr-2" />
            Call
          </button>
          <button
            onClick={onChatClick}
            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Chat
          </button>
          <button
            onClick={onViewProducts}
            className="flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Eye className="h-4 w-4 mr-2" />
            View Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupplierCard;