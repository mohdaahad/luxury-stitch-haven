
import React, { useState } from 'react';
import { Heart, ShoppingBag, Plus } from 'lucide-react';
import { useElementOnScreen } from '../utils/animations';

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  hoverImage?: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, isVisible } = useElementOnScreen({ threshold: 0.1 });
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Add to cart:', product.id);
    // Add cart logic here
  };
  
  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Add to wishlist:', product.id);
    // Add wishlist logic here
  };
  
  const calculateDiscountedPrice = () => {
    if (product.discount) {
      return (product.price - (product.price * product.discount / 100)).toFixed(2);
    }
    return product.price.toFixed(2);
  };
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group cursor-pointer ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      style={{ animationDelay: `${0.1 + index * 0.05}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-4">
        {/* Product image */}
        <img
          src={isHovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Labels */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-2 py-1 text-xs font-medium bg-primary text-white rounded">
              NEW
            </span>
          )}
          {product.isSale && (
            <span className="px-2 py-1 text-xs font-medium bg-destructive text-white rounded">
              SALE
            </span>
          )}
        </div>
        
        {/* Quick actions */}
        <div 
          className={`absolute inset-0 bg-black/0 transition-all duration-300 flex items-end justify-center ${
            isHovered ? 'bg-black/10' : ''
          }`}
        >
          <div 
            className={`glass-panel flex gap-3 mx-4 mb-4 p-2 rounded-lg transition-all duration-500 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <button 
              onClick={handleAddToWishlist}
              className="p-2 hover:bg-white/20 rounded-md transition-colors"
            >
              <Heart size={20} />
            </button>
            <button 
              onClick={handleAddToCart}
              className="p-2 hover:bg-white/20 rounded-md transition-colors"
            >
              <ShoppingBag size={20} />
            </button>
            <button 
              className="p-2 hover:bg-white/20 rounded-md transition-colors"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Product info */}
      <div className="space-y-1">
        <p className="text-sm text-gray-500 font-medium">{product.brand}</p>
        <h3 className="font-medium">{product.name}</h3>
        <div className="flex items-center gap-2">
          {product.discount ? (
            <>
              <span className="font-medium">${calculateDiscountedPrice()}</span>
              <span className="text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
            </>
          ) : (
            <span className="font-medium">${product.price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
