'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 justify-start">
            <Link href="#how-it-works" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors">
              How it works
            </Link>
            <Link href="#what-it-covers" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors">
              What it covers
            </Link>
            <Link href="#plans" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors">
              Plans
            </Link>
          </nav>

          {/* Logo - Centered */}
          <div className="flex justify-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-white font-black-ops-one">NomadSafe .</span>
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center justify-end">
            <Link
              href="#contact"
              className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium font-semibold transition-colors hover:bg-gray-100 inline-flex items-center"
            >
              Contact us
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-800">
              <Link href="#how-it-works" className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium">
                How it works
              </Link>
              <Link href="#what-it-covers" className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium">
                What it covers
              </Link>
              <Link href="#plans" className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium">
                Plans
              </Link>
              <div className="pt-4 pb-3 border-t border-gray-800">
                <Link
                  href="#contact"
                  className="bg-white text-black block px-3 py-2 rounded-lg text-base font-medium hover:bg-gray-100 inline-flex items-center"
                >
                  Contact us
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
