
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Heart, ShoppingBag, ChevronDown } from 'lucide-react';
import { useElementOnScreen } from '@/utils/animations';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { ref, isVisible } = useElementOnScreen({ threshold: 0.1 });
  const [selectedSize, setSelectedSize] = useState('');
  const [activeTab, setActiveTab] = useState('description');
  
  // Mock product data - would normally be fetched from API
  const product = {
    id: id || '1',
    name: 'Premium Cotton T-Shirt',
    price: 49.99,
    discount: 0,
    rating: 4.5,
    reviewCount: 12,
    description: 'This premium cotton t-shirt combines luxury with everyday comfort. Made from 100% organic cotton, it features a relaxed fit and subtle detailing that makes it perfect for any casual occasion.',
    details: [
      'Material: 100% Organic Cotton',
      'Fit: Regular fit',
      'Care: Machine wash cold, tumble dry low',
      'Made in Portugal',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy'],
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
  };
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    console.log('Added to cart:', { ...product, selectedSize });
    // Add to cart logic
  };
  
  const handleAddToWishlist = () => {
    console.log('Added to wishlist:', product);
    // Add to wishlist logic
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div 
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg"></div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.slice(0, 4).map((img, index) => (
                  <div key={index} className="aspect-square bg-gray-100 rounded-lg"></div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-${i < Math.floor(product.rating) ? 'yellow-400' : 'gray-300'}`}>★</span>
                  ))}
                </div>
                <span className="ml-2 text-gray-500">{product.reviewCount} reviews</span>
              </div>
              
              <div className="mb-6">
                {product.discount > 0 ? (
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">${(product.price * (1 - product.discount)).toFixed(2)}</span>
                    <span className="text-gray-500 line-through">${product.price.toFixed(2)}</span>
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">
                      {Math.round(product.discount * 100)}% OFF
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                )}
              </div>
              
              {/* Sizes */}
              <div className="mb-6">
                <h2 className="font-semibold mb-2">Size</h2>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium border transition-all
                        ${selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 hover:border-gray-900'
                        }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Add to Cart */}
              <div className="flex gap-2 mb-8">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-md transition-colors"
                >
                  <ShoppingBag size={20} />
                  <span>Add to Cart</span>
                </button>
                <button
                  onClick={handleAddToWishlist}
                  className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-md hover:border-gray-900 transition-colors"
                >
                  <Heart size={20} />
                </button>
              </div>
              
              {/* Tabs */}
              <div>
                <div className="flex border-b mb-4">
                  <button
                    onClick={() => setActiveTab('description')}
                    className={`pb-2 px-4 font-medium transition-colors ${
                      activeTab === 'description'
                        ? 'border-b-2 border-black text-black'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setActiveTab('details')}
                    className={`pb-2 px-4 font-medium transition-colors ${
                      activeTab === 'details'
                        ? 'border-b-2 border-black text-black'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    Details
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`pb-2 px-4 font-medium transition-colors ${
                      activeTab === 'reviews'
                        ? 'border-b-2 border-black text-black'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    Reviews
                  </button>
                </div>
                
                <div className="prose prose-sm max-w-none">
                  {activeTab === 'description' && (
                    <p>{product.description}</p>
                  )}
                  
                  {activeTab === 'details' && (
                    <ul>
                      {product.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  )}
                  
                  {activeTab === 'reviews' && (
                    <div className="space-y-4">
                      <p>Customer reviews will be displayed here.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
