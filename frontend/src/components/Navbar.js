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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'EVENT', path: '/event-details' },
    { name: 'SCHEDULE', path: '/schedule' },
    { name: 'GUESTS', path: '/guests' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-tactical-dark/98 backdrop-blur-xl border-b border-tactical-accent/10 shadow-2xl' 
        : 'bg-transparent border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-tactical-accent/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="/images/astra-logo.jpg" 
                alt="ASTRA" 
                className="h-12 w-auto object-contain relative z-10 transition-all duration-500 group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-tactical text-xs tracking-widest">ASTRA</span>
              <span className="text-[10px] text-tactical-text/50 text-mono tracking-wider">DEFENCE TECH</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-5 py-2 text-xs font-rajdhani font-semibold tracking-widest transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-tactical-accent'
                    : 'text-tactical-text/60 hover:text-tactical-text'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-tactical-accent/5 border border-tactical-accent/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            
            <Link to="/register" className="ml-4">
              <button className="btn-tactical px-6 py-2.5 text-xs">
                <span className="relative z-10">REGISTER</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-tactical-text/60 hover:text-tactical-accent transition-colors duration-300"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
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
            className="md:hidden bg-tactical-dark/98 backdrop-blur-xl border-t border-tactical-accent/10"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-xs font-rajdhani font-semibold tracking-widest transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'bg-tactical-accent/5 text-tactical-accent border-l-2 border-tactical-accent'
                      : 'text-tactical-text/60 hover:bg-white/5 hover:text-tactical-text border-l-2 border-transparent'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/register" onClick={() => setIsOpen(false)}>
                <button className="w-full mt-2 btn-tactical px-4 py-3 text-xs">
                  REGISTER
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
