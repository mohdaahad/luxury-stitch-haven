
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CategorySelector from '@/components/CategorySelector';
import ProductCard, { Product } from '@/components/ProductCard';
import { useElementOnScreen } from '@/utils/animations';
import { useToast } from '@/components/ui/use-toast';

const Shop = () => {
  const { ref, isVisible } = useElementOnScreen({ threshold: 0.1 });
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'new-arrivals', name: 'New Arrivals' },
    { id: 'best-sellers', name: 'Best Sellers' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'shoes', name: 'Shoes' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'sale', name: 'Sale' },
  ];
  
  // Mock product data
  const products: Product[] = [
    {
      id: 'p1',
      name: 'Designer Wool Coat',
      brand: 'Luxe Collection',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'clothing',
      isNew: true,
    },
    {
      id: 'p2',
      name: 'Premium Leather Sneakers',
      brand: 'Urban Steps',
      price: 189.99,
      image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'shoes',
      isNew: false,
    },
    {
      id: 'p3',
      name: 'Cashmere Sweater',
      brand: 'Soft Elegance',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'clothing',
      isNew: false,
    },
    {
      id: 'p4',
      name: 'Designer Watch',
      brand: 'Time Luxe',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'accessories',
      isNew: true,
    },
    {
      id: 'p5',
      name: 'Slim Fit Jeans',
      brand: 'Denim Republic',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'clothing',
      isSale: true,
      discount: 15,
    },
    {
      id: 'p6',
      name: 'Designer Handbag',
      brand: 'Luxury Carry',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'accessories',
      isSale: false,
    },
    {
      id: 'p7',
      name: 'Running Shoes',
      brand: 'Sprint Elite',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'shoes',
      isNew: false,
    },
    {
      id: 'p8',
      name: 'Silk Scarf',
      brand: 'Elegant Drape',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1601370690183-1c7965545ef0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1601370690183-1c7965545ef0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'accessories',
      isSale: true,
      discount: 20,
    },
    {
      id: 'p9',
      name: 'Formal Shirt',
      brand: 'Classic Elegance',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'clothing',
      isNew: false,
    },
    {
      id: 'p10',
      name: 'Winter Boots',
      brand: 'Snow Trek',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'shoes',
      isSale: false,
    },
    {
      id: 'p11',
      name: 'Summer Dress',
      brand: 'Sunlit Fashion',
      price: 119.99,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'clothing',
      isSale: true,
      discount: 10,
      isNew: true,
    },
    {
      id: 'p12',
      name: 'Leather Belt',
      brand: 'Fine Crafts',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'accessories',
      isNew: false,
    },
  ];
  
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };
  
  const addToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart`,
        duration: 3000,
      });
    }
  };
  
  const addToWishlist = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      toast({
        title: "Added to favorites",
        description: `${product.name} has been added to your favorites`,
        duration: 3000,
      });
    }
  };
  
  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : selectedCategory === 'new-arrivals'
      ? products.filter(product => product.isNew)
      : selectedCategory === 'best-sellers'
        ? products.filter((_, index) => index < 4) // Mock best sellers
        : selectedCategory === 'sale'
          ? products.filter(product => product.isSale)
          : products.filter(product => product.category === selectedCategory);
  
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
          
          {filteredProducts.length > 0 ? (
            <div
              ref={ref as React.RefObject<HTMLDivElement>}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {filteredProducts.map((product, index) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <ProductCard 
                    product={product} 
                    index={index} 
                    onAddToCart={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToCart(product.id);
                    }}
                    onAddToWishlist={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToWishlist(product.id);
                    }}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">No products found in this category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
