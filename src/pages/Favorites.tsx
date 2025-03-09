
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  // This would normally come from a state management solution or API
  const favorites = [];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">Your Favorites</h1>
          
          {favorites.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {/* Favorite products would be mapped here */}
            </div>
          ) : (
            <div className="text-center py-16">
              <Heart size={64} className="mx-auto mb-4 text-gray-300" />
              <h2 className="text-2xl font-semibold mb-2">Your favorites list is empty</h2>
              <p className="text-gray-500 mb-6">Save items you love to your favorites list.</p>
              <Link 
                to="/shop" 
                className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Favorites;
