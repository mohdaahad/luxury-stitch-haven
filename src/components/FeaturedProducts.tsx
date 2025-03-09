
import React, { useState } from 'react';
import AnimatedTitle from './AnimatedTitle';
import CategorySelector from './CategorySelector';
import ProductCard, { Product } from './ProductCard';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'new', name: 'New Arrivals' },
  { id: 'tops', name: 'Tops' },
  { id: 'bottoms', name: 'Bottoms' },
  { id: 'dresses', name: 'Dresses' },
  { id: 'accessories', name: 'Accessories' },
];

const products: Product[] = [
  {
    id: '1',
    name: 'Slim Fit Cotton Shirt',
    brand: 'Modern Essentials',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1578932750355-5eb30ece487a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1594938298603-c9148ed42a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80',
    category: 'tops',
    isNew: true,
  },
  {
    id: '2',
    name: 'High-Waisted Trousers',
    brand: 'Urban Style',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
    category: 'bottoms',
  },
  {
    id: '3',
    name: 'Floral Print Dress',
    brand: 'Milano',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1495385794356-15371f348c31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80',
    category: 'dresses',
    isSale: true,
    discount: 20,
  },
  {
    id: '4',
    name: 'Leather Crossbody Bag',
    brand: 'Accessoire',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    category: 'accessories',
    isNew: true,
  },
  {
    id: '5',
    name: 'Casual Linen Shirt',
    brand: 'Summer Essential',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    category: 'tops',
  },
  {
    id: '6',
    name: 'Designer Jeans',
    brand: 'Denim Co.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    category: 'bottoms',
    isSale: true,
    discount: 15,
  },
  {
    id: '7',
    name: 'Evening Gown',
    brand: 'Elegance',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1559967461-6d8271347e87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    category: 'dresses',
  },
  {
    id: '8',
    name: 'Minimalist Watch',
    brand: 'Timepiece',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    category: 'accessories',
    isNew: true,
  },
];

const FeaturedProducts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : selectedCategory === 'new'
      ? products.filter(product => product.isNew)
      : products.filter(product => product.category === selectedCategory);
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedTitle 
          title="Featured Products" 
          subtitle="Curated for you"
          align="center"
          size="lg"
          className="mb-12"
        />
        
        <CategorySelector 
          categories={categories}
          onSelect={setSelectedCategory}
          className="max-w-3xl mx-auto mb-12"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
