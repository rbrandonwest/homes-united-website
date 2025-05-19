'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from './Container';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <Container>
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center gap-2">
            <svg
              viewBox="0 0 768 768"
              className="w-auto h-20 text-gray-900"
              aria-label="HomesUnited Logo"
            >
              <use href="/images/hu-logo.svg#logo" />
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-primary-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary-600">
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-primary-600">
              Services
            </Link>
            <Link href="/get-involved" className="text-gray-600 hover:text-primary-600">
              Get Involved
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary-600">
              Contact
            </Link>
            <Link href="/portal" className="text-gray-600 hover:text-primary-600">
              Portal
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Menu</span>
            <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <Link
              href="/"
              className="block py-2 text-gray-600 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-600 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block py-2 text-gray-600 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/get-involved"
              className="block py-2 text-gray-600 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Involved
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-600 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/portal"
              className="block py-2 text-gray-600 hover:text-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Portal
            </Link>
          </nav>
        )}
      </Container>
    </header>
  );
}
