
import React, { useEffect, useRef } from 'react';
import { useElementOnScreen } from '../utils/animations';

interface AnimatedTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  title,
  subtitle,
  align = 'left',
  size = 'md',
  className = '',
}) => {
  const { ref, isVisible } = useElementOnScreen({ threshold: 0.2 });
  const hasAnimated = useRef(false);

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const titleSizeClasses = {
    sm: 'text-2xl sm:text-3xl',
    md: 'text-3xl sm:text-4xl',
    lg: 'text-4xl sm:text-5xl',
    xl: 'text-5xl sm:text-6xl',
  };

  const subtitleSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  useEffect(() => {
    if (isVisible) {
      hasAnimated.current = true;
    }
  }, [isVisible]);

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>} 
      className={`${alignmentClasses[align]} ${className}`}
    >
      {subtitle && (
        <div 
          className={`${subtitleSizeClasses[size]} text-muted-foreground uppercase tracking-widest mb-2 font-medium ${isVisible || hasAnimated.current ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          {subtitle}
        </div>
      )}
      <h2 
        className={`${titleSizeClasses[size]} font-heading font-bold ${isVisible || hasAnimated.current ? 'animate-fade-in' : 'opacity-0'}`}
        style={{ animationDelay: '0.3s' }}
      >
        {title}
      </h2>
      <div 
        className={`w-12 h-0.5 bg-primary mt-4 mb-8 ${align === 'center' ? 'mx-auto' : ''} ${align === 'right' ? 'ml-auto' : ''} ${isVisible || hasAnimated.current ? 'animate-scale-in' : 'opacity-0 scale-0'}`}
        style={{ animationDelay: '0.5s', transformOrigin: align === 'center' ? 'center' : align === 'right' ? 'right' : 'left' }}
      />
    </div>
  );
};

export default AnimatedTitle;
