import { ReactNode } from 'react';
import { Container } from '../layout/Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'light' | 'dark';
  spacing?: 'none' | 'small' | 'medium' | 'large';
}

export function Section({
  children,
  className = '',
  containerClassName = '',
  background = 'white',
  spacing = 'large'
}: SectionProps) {
  const backgroundStyles = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-gray-900 text-white'
  };

  const spacingStyles = {
    none: '',
    small: 'py-8',
    medium: 'py-16',
    large: 'py-24'
  };

  return (
    <section 
      className={`
        ${backgroundStyles[background]}
        ${spacingStyles[spacing]}
        ${className}
      `}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
} 