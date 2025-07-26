import React from 'react';
import { ShoppingCart, TrendingUp, Users, AlertTriangle, Search, Bell, Package, Check } from 'lucide-react';
import StatCard from '../ui/StatCard';
import QuickActionButton from '../ui/QuickActionButton';

const Dashboard = ({ setCurrentPage }) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2">नमस्ते! आज का व्यापार कैसा चल रहा है? 🛒</h2>
        <p className="opacity-90">Today's savings: ₹450 | Active orders: 3 | New alerts: 2</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard 
          title="Today's Orders" 
          value="5" 
          icon={ShoppingCart} 
          color="blue" 
        />
        <StatCard 
          title="Total Savings" 
          value="₹2,340" 
          icon={TrendingUp} 
          color="green" 
        />
        <StatCard 
          title="Active Groups" 
          value="3" 
          icon={Users} 
          color="purple" 
        />
        <StatCard 
          title="Low Stock Items" 
          value="2" 
          icon={AlertTriangle} 
          color="red" 
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <QuickActionButton
            icon={Search}
            label="Browse Products"
            onClick={() => setCurrentPage('products')}
            color="blue"
          />
          <QuickActionButton
            icon={Users}
            label="Join Group Order"
            onClick={() => setCurrentPage('groups')}
            color="green"
          />
          <QuickActionButton
            icon={Bell}
            label="Price Alerts"
            onClick={() => setShowPriceAlerts(true)}
            color="yellow"
          />
          <QuickActionButton
            icon={Package}
            label="Check Inventory"
            onClick={() => setCurrentPage('inventory')}
            color="purple"
          />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
            <Check className="h-5 w-5 text-green-600" />
            <div>
              <p className="text-sm font-medium">Order #1234 delivered successfully</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
            <Users className="h-5 w-5 text-blue-600" />
            <div>
              <p className="text-sm font-medium">Joined group order for Rice (200kg)</p>
              <p className="text-xs text-gray-500">4 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            <div>
              <p className="text-sm font-medium">Low stock alert: Tomatoes</p>
              <p className="text-xs text-gray-500">6 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;