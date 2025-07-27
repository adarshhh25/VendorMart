import React from 'react';

const GroupOrderCard = ({ order }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{order.supplierName}</h3>
          <p className="text-sm text-gray-500">Supplier ID: {order.supplierId}</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          View Route
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-xs uppercase">
            <tr>
              <th className="px-4 py-2">Vendor</th>
              <th className="px-4 py-2">Item</th>
              <th className="px-4 py-2">Grade</th>
              <th className="px-4 py-2">Qty</th>
              <th className="px-4 py-2">Vendor Price</th>
              <th className="px-4 py-2">Supplier Price</th>
              <th className="px-4 py-2">Savings</th>
              <th className="px-4 py-2">Distance (km)</th>
              <th className="px-4 py-2">Delivery Time (min)</th>
            </tr>
          </thead>
          <tbody>
            {order.matchedVendors.map((vendor, vIndex) =>
              vendor.matchedItems.map((item, iIndex) => (
                <tr key={`${vIndex}-${iIndex}`} className="border-b">
                  <td className="px-4 py-2 font-medium">{vendor.vendorName}</td>
                  <td className="px-4 py-2">{item.item}</td>
                  <td className="px-4 py-2">{item.grade}</td>
                  <td className="px-4 py-2">{item.quantity}</td>
                  <td className="px-4 py-2 text-gray-800">₹{item.vendorPrice}</td>
                  <td className="px-4 py-2 text-green-600">₹{item.supplierPrice}</td>
                  <td className="px-4 py-2 text-green-700 font-semibold">₹{item.savings}</td>
                  <td className="px-4 py-2">{item.distance.toFixed(2)}</td>
                  <td className="px-4 py-2">{Math.round(item.deliveryTimeMin)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GroupOrderCard;
