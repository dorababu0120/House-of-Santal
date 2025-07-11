import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-amber-300 mb-6">House of Santal</h3>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Curating the finest furniture and artisanal pieces from India's most celebrated designers, 
              bringing timeless elegance and conscious craftsmanship to contemporary spaces worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-amber-400 mr-3" />
                <span className="text-gray-300">123 Design District, New York, NY 10013</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-amber-400 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-amber-400 mr-3" />
                <span className="text-gray-300">hello@houseofsantal.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-xl font-semibold mb-8 text-amber-300">Shop</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-amber-300 transition-colors duration-200">Living Room</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors duration-200">Bedroom</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors duration-200">Dining Room</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors duration-200">Office & Study</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors duration-200">Accessories</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors duration-200">Lighting</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors duration-200">Textiles</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-xl font-semibold mb-8 text-amber-300">Support</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-amber-300 transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors duration-200">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors duration-200">Size Guide</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors duration-200">Care Instructions</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors duration-200">Trade Program</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors duration-200">FAQs</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors duration-200">Live Chat</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-6 lg:mb-0">
              <p className="text-gray-400 text-sm">© 2025 House of Santal. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-amber-300 text-sm transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-amber-300 text-sm transition-colors duration-200">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-amber-300 text-sm transition-colors duration-200">Cookies</a>
              </div>
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">We accept:</span>
              <div className="flex space-x-2">
                <div className="w-8 h-5 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-xs text-white font-bold">VISA</span>
                </div>
                <div className="w-8 h-5 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-xs text-white font-bold">MC</span>
                </div>
                <div className="w-8 h-5 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-xs text-white font-bold">AMEX</span>
                </div>
                <div className="w-8 h-5 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-xs text-white font-bold">PP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;