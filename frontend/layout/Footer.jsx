import React from 'react';
import { ShoppingCart, Bell, Shield, MessageCircle, Bot, Package, PhoneCall, Mail, MapPin, ChevronRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-20 md:pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-slideIn">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">VendorMart</h3>
                <p className="text-sm text-gray-400">Street Food Supply Hub</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Empowering street food vendors with smart supply chain solutions.
              Get the best prices, trusted suppliers, and group buying power.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ChevronRight className="h-3 w-3 mr-1" />Dashboard</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ChevronRight className="h-3 w-3 mr-1" />Find Suppliers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ChevronRight className="h-3 w-3 mr-1" />Browse Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ChevronRight className="h-3 w-3 mr-1" />Group Orders</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center"><ChevronRight className="h-3 w-3 mr-1" />Inventory Tracker</a></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300 flex items-center"><Bell className="h-3 w-3 mr-2 text-yellow-400" />Daily Price Alerts</li>
              <li className="text-gray-300 flex items-center"><Shield className="h-3 w-3 mr-2 text-green-400" />Trusted Suppliers</li>
              <li className="text-gray-300 flex items-center"><MessageCircle className="h-3 w-3 mr-2 text-blue-400" />Community Chat</li>
              <li className="text-gray-300 flex items-center"><Bot className="h-3 w-3 mr-2 text-purple-400" />AI Assistant</li>
              <li className="text-gray-300 flex items-center"><Package className="h-3 w-3 mr-2 text-orange-400" />Smart Inventory</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <PhoneCall className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">+91 1800-VENDOR</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">support@vendormart.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-red-400" />
                <span className="text-gray-300">Mumbai, Maharashtra, India</span>
              </div>
              <div className="mt-4">
                <h5 className="font-semibold mb-2">Business Hours</h5>
                <p className="text-gray-400 text-xs">Monday - Saturday: 6:00 AM - 10:00 PM</p>
                <p className="text-gray-400 text-xs">Sunday: 7:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2025 VendorMart. All rights reserved. Made with ❤️ for street food vendors.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;