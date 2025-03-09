
import React, { useState } from 'react';
import { useElementOnScreen } from '../utils/animations';

type Category = {
  id: string;
  name: string;
};

interface CategorySelectorProps {
  categories: Category[];
  onSelect: (categoryId: string) => void;
  className?: string;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ categories, onSelect, className = '' }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || '');
  const { ref, isVisible } = useElementOnScreen({ threshold: 0.1 });
  
  const handleSelectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    onSelect(categoryId);
  };
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`overflow-x-auto flex py-4 gap-2 no-scrollbar ${className}`}
    >
      {categories.map((category, index) => (
        <div
          key={category.id}
          className={`category-pill ${activeCategory === category.id ? 'active' : ''} ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: `${0.1 + index * 0.05}s` }}
          onClick={() => handleSelectCategory(category.id)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default CategorySelector;
