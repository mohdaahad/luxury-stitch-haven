
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useElementOnScreen } from '../utils/animations';

const Footer: React.FC = () => {
  const { ref, isVisible } = useElementOnScreen({ threshold: 0.1 });
  
  return (
    <footer 
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-gray-50 dark:bg-gray-900 pt-20 pb-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className={isVisible ? 'animate-fade-in' : 'opacity-0'} style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-heading font-bold mb-6">LUXE</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xs">
              Luxury fashion destination offering premium clothing and accessories for the modern wardrobe.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className={isVisible ? 'animate-fade-in' : 'opacity-0'} style={{ animationDelay: '0.2s' }}>
            <h3 className="text-base font-bold uppercase tracking-wide mb-6">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">All Products</Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">New Arrivals</Link>
              </li>
              <li>
                <Link to="/bestsellers" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Bestsellers</Link>
              </li>
              <li>
                <Link to="/sale" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Sale</Link>
              </li>
              <li>
                <Link to="/gift-cards" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Gift Cards</Link>
              </li>
            </ul>
          </div>
          
          <div className={isVisible ? 'animate-fade-in' : 'opacity-0'} style={{ animationDelay: '0.3s' }}>
            <h3 className="text-base font-bold uppercase tracking-wide mb-6">Help</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/customer-care" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Customer Care</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Shipping & Returns</Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Size Guide</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div className={isVisible ? 'animate-fade-in' : 'opacity-0'} style={{ animationDelay: '0.4s' }}>
            <h3 className="text-base font-bold uppercase tracking-wide mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-gray-600 dark:text-gray-300">123 Fashion Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-primary" />
                <span className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-primary" />
                <span className="text-gray-600 dark:text-gray-300">support@luxe.com</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-l-md"
                />
                <button className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm order-2 md:order-1 mt-4 md:mt-0">
            © {new Date().getFullYear()} LUXE. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 order-1 md:order-2">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
            <Link to="/accessibility" className="hover:text-primary transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
