
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';
import { useScrollProgress } from '../utils/animations';

const Index = () => {
  const scrollProgress = useScrollProgress();
  
  // Initialize scroll animations
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.appear-from-bottom');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.9;
        
        if (isInView) {
          el.classList.add('appear-visible');
        }
      });
    };
    
    window.addEventListener('scroll', animateElements);
    animateElements(); // Run once on mount
    
    return () => window.removeEventListener('scroll', animateElements);
  }, []);
  
  return (
    <main className="relative">
      {/* Progress bar */}
      <div 
        className="fixed top-0 left-0 h-0.5 bg-primary z-[60] transition-all duration-300"
        style={{ width: `${scrollProgress * 100}%` }}
      />
      
      <Navbar />
      <Hero />
      
      {/* Features Highlight */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="appear-from-bottom flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.42 4.58C19.76 3.91 18.67 3.91 18.01 4.58L16.06 6.54C15.15 6.19 14.12 6 13 6C8.03 6 4 10.03 4 15C4 19.97 8.03 24 13 24C17.97 24 22 19.97 22 15C22 13.88 21.81 12.85 21.46 11.94L23.42 9.99C24.09 9.33 24.09 8.24 23.42 7.58L20.42 4.58ZM13 22C9.13 22 6 18.87 6 15C6 11.13 9.13 8 13 8C16.87 8 20 11.13 20 15C20 18.87 16.87 22 13 22Z" fill="currentColor"/>
                  <path d="M13 12C11.9 12 11 12.9 11 14C11 15.1 11.9 16 13 16C14.1 16 15 15.1 15 14C15 12.9 14.1 12 13 12Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Fast Shipping</h3>
              <p className="text-gray-600 dark:text-gray-300">Free shipping on orders over $100</p>
            </div>
            
            <div className="appear-from-bottom flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L21.16 4.96L19.42 4H19.41L18.31 6L15.55 11H8.53L8.4 10.73L6.16 6L5.21 4L4.27 2H1V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.29 15 7.17 14.89 7.17 14.75Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Easy Returns</h3>
              <p className="text-gray-600 dark:text-gray-300">30-day hassle-free returns</p>
            </div>
            
            <div className="appear-from-bottom flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19H11V17H13V19ZM15.07 11.25L14.17 12.17C13.45 12.9 13 13.5 13 15H11V14.5C11 13.4 11.45 12.4 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9H8C8 6.79 9.79 5 12 5C14.21 5 16 6.79 16 9C16 9.88 15.64 10.68 15.07 11.25Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-300">Always here to help you</p>
            </div>
            
            <div className="appear-from-bottom flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Secure Payments</h3>
              <p className="text-gray-600 dark:text-gray-300">Your data is always protected</p>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedProducts />
      
      {/* Collection Highlights */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 appear-from-bottom">
              <div className="max-w-lg">
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3">Summer Collection</h3>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">Discover our Latest Summer Essentials</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Lightweight fabrics, breathable designs, and vibrant colors that capture the essence of summer. Perfect for any occasion under the sun.
                </p>
                <button className="neo-button group">
                  Explore Collection
                  <svg className="inline-block ml-2 group-hover:translate-x-1 transition-transform" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z" fill="currentColor"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 appear-from-bottom">
              <div className="aspect-[3/4] overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80" 
                  alt="Summer collection"
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-xl mt-12">
                <img 
                  src="https://images.unsplash.com/photo-1596993099511-4577f98c8101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Summer collection"
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center appear-from-bottom">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Be the first to know about new collections, exclusive offers, and fashion trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-md sm:rounded-r-none"
              />
              <button className="px-6 py-3 bg-primary text-white font-medium rounded-md sm:rounded-l-none hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Instagram Feed */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 appear-from-bottom">
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3">@luxe_fashion</h3>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">Follow Us on Instagram</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join our community and share your style using #LuxeFashion
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            <div className="aspect-square overflow-hidden appear-from-bottom">
              <img 
                src="https://images.unsplash.com/photo-1622495894971-42702f9b8a0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                alt="Instagram post"
                className="w-full h-full object-cover hover-scale"
              />
            </div>
            <div className="aspect-square overflow-hidden appear-from-bottom">
              <img 
                src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                alt="Instagram post"
                className="w-full h-full object-cover hover-scale"
              />
            </div>
            <div className="aspect-square overflow-hidden appear-from-bottom">
              <img 
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                alt="Instagram post"
                className="w-full h-full object-cover hover-scale"
              />
            </div>
            <div className="aspect-square overflow-hidden appear-from-bottom">
              <img 
                src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80" 
                alt="Instagram post"
                className="w-full h-full object-cover hover-scale"
              />
            </div>
            <div className="aspect-square overflow-hidden appear-from-bottom">
              <img 
                src="https://images.unsplash.com/photo-1622519407650-3df9883f76a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                alt="Instagram post"
                className="w-full h-full object-cover hover-scale"
              />
            </div>
            <div className="aspect-square overflow-hidden appear-from-bottom">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                alt="Instagram post"
                className="w-full h-full object-cover hover-scale"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Index;
