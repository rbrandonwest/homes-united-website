"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-lg font-semibold transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-primary-600 text-white hover:bg-primary-700",
        secondary: "bg-white text-gray-900 hover:bg-gray-100",
        outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3",
        lg: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Button({ href, variant, size, children, className, onClick }: ButtonProps) {
  const styles = buttonStyles({ variant, size, className });

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={styles} onClick={onClick}>
      {children}
    </button>
  );
} 