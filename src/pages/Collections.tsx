
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useElementOnScreen } from '@/utils/animations';

const Collections = () => {
  const { ref, isVisible } = useElementOnScreen({ threshold: 0.1 });
  
  const collections = [
    { id: 'summer', name: 'Summer Collection', image: 'bg-amber-100' },
    { id: 'winter', name: 'Winter Collection', image: 'bg-blue-100' },
    { id: 'casual', name: 'Casual Wear', image: 'bg-green-100' },
    { id: 'formal', name: 'Formal Collection', image: 'bg-purple-100' },
    { id: 'athleisure', name: 'Athleisure', image: 'bg-red-100' },
    { id: 'essentials', name: 'Essentials', image: 'bg-gray-100' },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">Our Collections</h1>
          <p className="text-gray-500 mb-8 text-center md:text-left">Explore our exclusive clothing collections</p>
          
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {collections.map((collection, index) => (
              <Link
                to={`/shop?collection=${collection.id}`}
                key={collection.id}
                className={`group relative h-80 rounded-lg overflow-hidden transition-all duration-500 ${
                  isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className={`w-full h-full ${collection.image} group-hover:scale-105 transition-transform duration-500`}></div>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity group-hover:bg-black/40">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white">{collection.name}</h3>
                    <span className="inline-block mt-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded text-white text-sm transition-all group-hover:bg-white group-hover:text-black">
                      View Collection
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
