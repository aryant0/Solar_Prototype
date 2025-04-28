import React, { useState, useEffect } from 'react';
import { Sun, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', id: 'services' },
    { label: 'Benefits', id: 'benefits' },
    { label: 'Projects', id: 'projects' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' }
  ];

  const navTextClass = isScrolled
    ? 'text-gray-800 hover:text-blue-600'
    : 'text-white hover:text-yellow-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Sun className={`w-8 h-8 ${isScrolled ? 'text-yellow-500' : 'text-yellow-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'}`}>
              ENA Solar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              item.path ? (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-yellow-500 after:transition-all hover:after:w-full ${navTextClass}`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id!)}
                  className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-yellow-500 after:transition-all hover:after:w-full ${navTextClass}`}
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 absolute top-full left-0 right-0 animate-slideDown">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              item.path ? (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-sm font-medium text-gray-800 hover:text-yellow-500 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id!)}
                  className="text-sm font-medium text-gray-800 hover:text-yellow-500 transition-all text-left"
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;