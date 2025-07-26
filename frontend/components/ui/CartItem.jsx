import React, { useState } from 'react';

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const updateQuantity = (newQuantity) => {
    setQuantity(Math.max(1, newQuantity));
  };

  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-gray-600">₹{item.price} per {item.unit}</p>
      </div>
      <div className="flex items-center space-x-3">
        <button
          onClick={() => updateQuantity(quantity - 1)}
          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
        >
          -
        </button>
        <span className="font-semibold">{quantity}</span>
        <button
          onClick={() => updateQuantity(quantity + 1)}
          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
        >
          +
        </button>
        <span className="font-semibold text-blue-600">₹{item.price * quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
