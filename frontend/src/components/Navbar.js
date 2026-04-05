import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Event', path: '/event-details' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Guests', path: '/guests' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#050708]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl' 
        : 'bg-[#050708]/80 backdrop-blur-md border-b border-white/[0.02]'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-military-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="/images/astra-logo.jpg" 
                alt="ASTRA" 
                className="h-14 w-auto object-contain relative z-10 transition-all duration-500 group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold tracking-wider text-gray-400 group-hover:text-military-accent transition-colors duration-300">
                ASTRA
              </div>
              <div className="text-xs text-gray-600 mono">
                Defence Tech Club
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-military-accent'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-military-accent/5 border border-military-accent/20 rounded-lg"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                  />
                )}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-transparent via-military-accent to-transparent group-hover:w-full transition-all duration-500"></div>
              </Link>
            ))}
            
            <Link to="/register">
              <button className="ml-4 px-6 py-2.5 btn-primary rounded-lg text-sm font-semibold">
                <span className="relative z-10">Register</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-military-accent transition-colors duration-300"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#050708]/98 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'bg-military-accent/5 text-military-accent border-l-2 border-military-accent'
                      : 'text-gray-400 hover:bg-white/5 hover:text-gray-200 border-l-2 border-transparent'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/register" onClick={() => setIsOpen(false)}>
                <button className="w-full mt-2 px-4 py-3 btn-primary rounded-lg text-sm font-semibold">
                  Register
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
