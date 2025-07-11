import React, { useState, useEffect } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-amber-900' : 'text-white'
              }`}>
                House of Santal
              </h1>
              <p className={`text-xs tracking-widest transition-colors duration-300 ${
                isScrolled ? 'text-amber-700' : 'text-amber-200'
              }`}>
                CURATED LUXURY
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#collections" className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-amber-600 ${
              isScrolled ? 'text-gray-700' : 'text-white hover:text-amber-300'
            }`}>
              COLLECTIONS
            </a>
            <a href="#designers" className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-amber-600 ${
              isScrolled ? 'text-gray-700' : 'text-white hover:text-amber-300'
            }`}>
              DESIGNERS
            </a>
            <a href="#rooms" className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-amber-600 ${
              isScrolled ? 'text-gray-700' : 'text-white hover:text-amber-300'
            }`}>
              SHOP BY ROOM
            </a>
            <a href="#story" className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-amber-600 ${
              isScrolled ? 'text-gray-700' : 'text-white hover:text-amber-300'
            }`}>
              OUR STORY
            </a>
            <a href="#custom" className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-amber-600 ${
              isScrolled ? 'text-gray-700' : 'text-white hover:text-amber-300'
            }`}>
              BESPOKE
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <Search className={`h-5 w-5 cursor-pointer transition-colors duration-300 hover:text-amber-600 ${
              isScrolled ? 'text-gray-600' : 'text-white hover:text-amber-300'
            }`} />
            <User className={`h-5 w-5 cursor-pointer transition-colors duration-300 hover:text-amber-600 ${
              isScrolled ? 'text-gray-600' : 'text-white hover:text-amber-300'
            }`} />
            <Heart className={`h-5 w-5 cursor-pointer transition-colors duration-300 hover:text-amber-600 ${
              isScrolled ? 'text-gray-600' : 'text-white hover:text-amber-300'
            }`} />
            <div className="relative">
              <ShoppingBag className={`h-5 w-5 cursor-pointer transition-colors duration-300 hover:text-amber-600 ${
                isScrolled ? 'text-gray-600' : 'text-white hover:text-amber-300'
              }`} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-amber-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#collections" className="block px-3 py-2 text-gray-700 hover:text-amber-600 font-medium">Collections</a>
              <a href="#designers" className="block px-3 py-2 text-gray-700 hover:text-amber-600 font-medium">Designers</a>
              <a href="#rooms" className="block px-3 py-2 text-gray-700 hover:text-amber-600 font-medium">Shop by Room</a>
              <a href="#story" className="block px-3 py-2 text-gray-700 hover:text-amber-600 font-medium">Our Story</a>
              <a href="#custom" className="block px-3 py-2 text-gray-700 hover:text-amber-600 font-medium">Bespoke</a>
            </div>
            <div className="border-t border-amber-100 px-4 py-3 flex justify-center space-x-6">
              <Search className="h-5 w-5 text-gray-600" />
              <User className="h-5 w-5 text-gray-600" />
              <Heart className="h-5 w-5 text-gray-600" />
              <div className="relative">
                <ShoppingBag className="h-5 w-5 text-gray-600" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;