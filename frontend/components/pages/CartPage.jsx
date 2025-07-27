import React from 'react';
import { ShoppingCart } from 'lucide-react';
import CartItem from '../ui/CartItem';
import EmptyState from '../common/EmptyState';

const CartPage = ({ cart, setCurrentPage }) => {
  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const getGroupSavings = () => {
    return Math.round(getTotalPrice() * 0.1);
  };

  if (cart.length === 0) {
    return (
      <div className="space-y-6 animate-fadeIn">
        <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
        <EmptyState 
          icon={ShoppingCart}
          title="Your cart is empty"
          description="Browse our products to add items to your cart"
          actionLabel="Browse Products"
          onAction={() => setCurrentPage('products')}
        />
      </div>
    );
  }
  const handleCheckout = async () => {
  const vendorInfo = {
    vendorId: "V102", // can be dynamic in future
    vendorName: "Spicy Treat",
    location: { lat: 19.17, lon: 72.98 },
    deliveryTime: new Date(Date.now() + 2 * 60 * 60 * 1000) // 2 hours from now
  };

  const orderPayload = {
    ...vendorInfo,
    items: cart.map(item => ({
      name: item.name,
      quantity: item.quantity,
      grade: item.grade || "A", // default grade
      price: item.price
    }))
  };

  try {
    const res = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderPayload)
    });

    const data = await res.json();
    if (res.ok) {
      alert("✅ Order placed successfully!");
      console.log("Submitted order:", data);
      // Optionally reset cart or go to confirmation page
    } else {
      console.error("Order error:", data);
      alert("❌ Failed to place order");
    }
  } catch (err) {
    console.error("Network error:", err);
    alert("❌ Network error during order submission");
  }
};


  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="space-y-4">
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total: ₹{getTotalPrice()}</span>
            <span className="text-green-600">Group Savings: ₹{getGroupSavings()}</span>
          </div>
          <button
  onClick={handleCheckout}
  className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors transform hover:scale-105"
>
  Proceed to Checkout
</button>

        </div>
      </div>
    </div>
  );
};

export default CartPage;