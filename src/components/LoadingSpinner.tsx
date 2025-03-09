
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'border-primary'
}) => {
  const sizeClasses = {
    sm: 'w-5 h-5 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-12 h-12 border-3',
  };
  
  return (
    <div className="flex justify-center items-center">
      <div 
        className={`${sizeClasses[size]} ${color} border-t-transparent rounded-full animate-rotate-slow`}
      />
    </div>
  );
};

export default LoadingSpinner;
