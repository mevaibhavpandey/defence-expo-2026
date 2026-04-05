import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Event Details', path: '/event-details' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Guests', path: '/guests' },
    { name: 'Register', path: '/register' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-military-darker/95 backdrop-blur-md border-b-2 border-military-accent/30 shadow-lg shadow-military-accent/10' 
        : 'bg-military-darker/80 backdrop-blur-sm border-b border-military-accent/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center relative group">
            <div className="relative">
              <img 
                src="/images/astra-logo.jpg" 
                alt="ASTRA Logo" 
                className="h-16 w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(0,255,65,0.6)]"
              />
              <div className="absolute inset-0 bg-military-accent/0 group-hover:bg-military-accent/10 rounded-lg transition-all duration-300"></div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 group ${
                  location.pathname === link.path
                    ? 'text-military-accent'
                    : 'text-gray-300 hover:text-military-accent'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-military-accent/10 border border-military-accent/30 rounded"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-military-accent to-military-gold group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-military-accent p-2 rounded border border-military-accent/30 hover:bg-military-accent/10 transition-all duration-300"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-military-darker/98 backdrop-blur-md border-t border-military-accent/20"
        >
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-4 text-gray-300 hover:bg-military-accent/10 hover:text-military-accent transition-all duration-300 border-l-4 ${
                location.pathname === link.path
                  ? 'border-military-accent bg-military-accent/5 text-military-accent'
                  : 'border-transparent'
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
