
import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  
  // Close on escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', query);
    // Handle search submission
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-white/95 dark:bg-black/95 z-50 p-4">
      <div className="container mx-auto max-w-3xl mt-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Search</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for products..."
              className="w-full pl-12 pr-4 py-4 bg-gray-100 dark:bg-gray-800 rounded-md outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">POPULAR SEARCHES</h3>
            <div className="flex flex-wrap gap-2">
              {['T-shirts', 'Dresses', 'Jeans', 'Sneakers', 'Summer collection', 'Sale'].map((term) => (
                <button
                  key={term}
                  type="button"
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  onClick={() => setQuery(term)}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">RECENT SEARCHES</h3>
            <div className="space-y-2">
              {/* Would normally map through recent searches from local storage or user data */}
              <p className="text-gray-400 dark:text-gray-500 text-sm italic">No recent searches</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
