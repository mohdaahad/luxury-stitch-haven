
import React, { useEffect, useRef } from 'react';
import { useElementOnScreen } from '../utils/animations';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { ref, isVisible } = useElementOnScreen({ threshold: 0.1 });
  const imageRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for hero image
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;
      
      imageRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="inline-block px-4 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium">
                New Collection 2023
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold leading-tight">
                Discover Your <span className="text-gradient">Personal Style</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
                Explore our handpicked selection of premium clothing designed to elevate your wardrobe with timeless elegance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="neo-button group">
                  Shop Collection
                  <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </button>
                <button className="px-6 py-2 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  Explore Lookbook
                </button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div 
              className={`rounded-xl overflow-hidden ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}
              style={{ animationDelay: '0.3s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-xl z-10"></div>
              <div 
                ref={imageRef}
                className="relative w-full h-[500px] lg:h-[600px] transition-transform duration-500"
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80" 
                  alt="Fashion model in designer outfit"
                  className="w-full h-full object-cover object-center rounded-xl img-shine"
                />
              </div>
            </div>
            
            <div 
              className={`absolute -bottom-5 -left-5 sm:bottom-8 sm:left-8 glass-panel p-4 sm:p-6 rounded-lg max-w-[240px] sm:max-w-[280px] ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.6s' }}
            >
              <p className="font-medium text-sm sm:text-base">Summer Collection</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Lightweight fabrics perfect for warm days</p>
            </div>
            
            <div 
              className={`absolute -top-5 -right-5 sm:top-8 sm:right-8 glass-panel p-4 sm:p-6 rounded-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.9s' }}
            >
              <p className="font-medium text-xl sm:text-2xl">25% OFF</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">New arrivals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
