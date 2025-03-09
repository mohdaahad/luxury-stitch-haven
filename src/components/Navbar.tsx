
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, Heart, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 backdrop-blur-lg bg-white/80 dark:bg-black/80 shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-heading font-bold tracking-tight transition-all duration-300 hover:opacity-80"
          >
            LUXE
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/shop" className="text-sm font-medium hover:text-primary transition-colors">Shop</Link>
            <Link to="/collections" className="text-sm font-medium hover:text-primary transition-colors">Collections</Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          </nav>
          
          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="hover:text-primary transition-colors">
              <Search size={20} />
            </button>
            <button className="hover:text-primary transition-colors">
              <Heart size={20} />
            </button>
            <button className="hover:text-primary transition-colors">
              <User size={20} />
            </button>
            <button className="relative hover:text-primary transition-colors">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center bg-primary text-white text-xs rounded-full">0</span>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black shadow-md transition-all duration-300 ease-in-out origin-top 
        ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col">
          <Link 
            to="/" 
            className="py-3 text-sm font-medium border-b border-gray-100 dark:border-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/shop" 
            className="py-3 text-sm font-medium border-b border-gray-100 dark:border-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Shop
          </Link>
          <Link 
            to="/collections" 
            className="py-3 text-sm font-medium border-b border-gray-100 dark:border-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Collections
          </Link>
          <Link 
            to="/about" 
            className="py-3 text-sm font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          
          <div className="flex items-center justify-around mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <button className="p-2 hover:text-primary transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 hover:text-primary transition-colors">
              <Heart size={20} />
            </button>
            <button className="p-2 hover:text-primary transition-colors">
              <User size={20} />
            </button>
            <button className="p-2 relative hover:text-primary transition-colors">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center bg-primary text-white text-xs rounded-full">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
