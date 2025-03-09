
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategorySelector from '@/components/CategorySelector';
import { useElementOnScreen } from '@/utils/animations';

const Shop = () => {
  const { ref, isVisible } = useElementOnScreen({ threshold: 0.1 });
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'new-arrivals', name: 'New Arrivals' },
    { id: 'best-sellers', name: 'Best Sellers' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'shoes', name: 'Shoes' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'sale', name: 'Sale' },
  ];
  
  const handleCategorySelect = (categoryId: string) => {
    console.log('Selected category:', categoryId);
    // Filter products based on category
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">Shop Collection</h1>
          
          <CategorySelector 
            categories={categories} 
            onSelect={handleCategorySelect} 
            className="mb-8"
          />
          
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {Array.from({ length: 12 }).map((_, index) => (
              <div 
                key={index}
                className={`aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden transition-all duration-500 ${
                  isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-400">Product {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
