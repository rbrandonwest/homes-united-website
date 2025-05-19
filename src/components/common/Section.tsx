import { forwardRef } from 'react';
import { Container } from '../layout/Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'light' | 'dark';
  spacing?: 'none' | 'small' | 'medium' | 'large';
  id?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className = '', containerClassName = '', background = 'white', spacing = 'large', id }, ref) => {
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
        ref={ref}
        id={id}
        className={`
          ${backgroundStyles[background]}
          ${spacingStyles[spacing]}
          ${className}
          pt-32 md:pt-28 pb-16 md:pb-24 px-4
        `}
      >
        <Container className={containerClassName}>
          {children}
        </Container>
      </section>
    );
  }
);

Section.displayName = 'Section'; 