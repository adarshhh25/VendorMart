import React from 'react';
import { TrendingUp } from 'lucide-react';
import TrendIndicator from './TrendIndicator';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <TrendIndicator trend={product.trend} />
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-2xl font-bold text-blue-600">₹{product.price}</span>
            <span className="text-sm text-gray-600">per {product.unit}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Stock:</span>
            <span className={`font-medium ${product.stock < 100 ? 'text-red-600' : 'text-green-600'}`}>
              {product.stock} {product.unit}
            </span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Supplier:</span>
            <span className="text-gray-800">{product.supplier}</span>
          </div>
        </div>
        
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;