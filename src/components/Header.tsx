import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, User, Heart } from 'lucide-react';
import CartDropdown from './CartDropdown';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartCount: number;
  cartItems: string[];
  onRemoveFromCart: (productId: string) => void;
  onToggleFavorites: () => void;
  favoritesCount: number;
  genderFilter: string;
  onGenderFilter: (gender: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  currentPage, 
  onNavigate, 
  cartCount, 
  cartItems, 
  onRemoveFromCart,
  onToggleFavorites,
  favoritesCount,
  genderFilter,
  onGenderFilter
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navigation = [
    { name: 'Home', path: 'home' },
    { name: 'Shop', path: 'category' },
    { name: 'Men', path: 'men' },
    { name: 'Women', path: 'women' },
    { name: 'New', path: 'category' },
  ];

  const handleNavClick = (item: any) => {
    if (item.name === 'Men') {
      onGenderFilter('men');
      onNavigate('category');
    } else if (item.name === 'Women') {
      onGenderFilter('women');
      onNavigate('category');
    } else {
      onGenderFilter('all');
      onNavigate(item.path);
    }
  };

  const handleAccountClick = () => {
    // Simulate account settings navigation
    alert('Account settings would open here (demo)');
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Increased size */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigate('home')}>
            <img
              src="https://github.com/MusashiSanS2/MoleStation/blob/main/WPbRNWX.png?raw=true"
              alt="MoleStation"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-yellow-600 ${
                  (currentPage === item.path || 
                   (item.name === 'Men' && genderFilter === 'men') ||
                   (item.name === 'Women' && genderFilter === 'women')) 
                    ? 'text-yellow-600' : 'text-gray-700'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={onToggleFavorites}
              className="relative p-2 text-gray-700 hover:text-yellow-600 transition-colors duration-200"
            >
              <Heart className="h-5 w-5" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>
            <button 
              onClick={handleAccountClick}
              className="p-2 text-gray-700 hover:text-yellow-600 transition-colors duration-200"
            >
              <User className="h-5 w-5" />
            </button>
            <div className="relative">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative p-2 text-gray-700 hover:text-yellow-600 transition-colors duration-200"
              >
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-yellow-600 text-white text-xs rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <CartDropdown
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cartItems={cartItems}
                onRemoveFromCart={onRemoveFromCart}
                onNavigate={onNavigate}
              />
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              
              {/* Mobile Navigation Links */}
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleNavClick(item);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left py-2 text-base font-medium transition-colors duration-200 hover:text-yellow-600 ${
                    (currentPage === item.path || 
                     (item.name === 'Men' && genderFilter === 'men') ||
                     (item.name === 'Women' && genderFilter === 'women')) 
                      ? 'text-yellow-600' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;