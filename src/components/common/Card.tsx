import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'none' | 'small' | 'medium' | 'large';
  shadow?: 'none' | 'small' | 'medium' | 'large';
}

export function Card({ 
  children, 
  className = '',
  padding = 'medium',
  shadow = 'medium'
}: CardProps) {
  const paddingStyles = {
    none: '',
    small: 'p-3',
    medium: 'p-6',
    large: 'p-8'
  };

  const shadowStyles = {
    none: '',
    small: 'shadow-sm',
    medium: 'shadow',
    large: 'shadow-lg'
  };

  return (
    <div 
      className={`
        bg-white 
        rounded-lg 
        text-gray-900
        ${paddingStyles[padding]}
        ${shadowStyles[shadow]}
        ${className}
      `}
    >
      {children}
    </div>
  );
} 