import React from 'react';
import { TrendingUp } from 'lucide-react';
import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';

const ProductsPage = ({ addToCart }) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Product Catalog</h2>
        <div className="flex space-x-2">
          <select className="px-3 py-2 border border-gray-300 rounded-lg">
            <option>All Categories</option>
            <option>Vegetables</option>
            <option>Grains</option>
            <option>Spices</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;