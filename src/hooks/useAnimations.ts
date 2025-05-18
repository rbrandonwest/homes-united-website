"use client";

import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useAnimations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.6 }
  };

  const slideIn = (direction: 'left' | 'right' | 'up' | 'down') => {
    const x = direction === 'left' ? -50 : direction === 'right' ? 50 : 0;
    const y = direction === 'up' ? -50 : direction === 'down' ? 50 : 0;

    return {
      initial: { opacity: 0, x, y },
      animate: isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y },
      transition: { duration: 0.6, type: "spring", bounce: 0.4 }
    };
  };

  const scale = {
    initial: { scale: 0.95, opacity: 0 },
    animate: isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 },
    transition: { duration: 0.5 }
  };

  const hover = {
    scale: 1.05,
    transition: { duration: 0.2 }
  };

  return { ref, isInView, fadeIn, slideIn, scale, hover };
}; 