import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full z-50 bg-black/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">MINY</Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            {isHome ? (
              <>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('creators')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Creators
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/#features"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Features
                </Link>
                <Link
                  to="/#creators"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Creators
                </Link>
                <Link
                  to="/#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </>
            )}
          </nav>
          <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}