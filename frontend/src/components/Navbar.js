import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="fixed w-full z-50 bg-military-dark/95 backdrop-blur-sm border-b border-military-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-military-accent/20 rounded-lg flex items-center justify-center">
              <span className="text-military-accent font-bold text-xl">A</span>
            </div>
            <span className="text-military-accent font-bold text-xl">ASTRA</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-military-accent transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-military-accent"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-military-green/95 backdrop-blur-sm"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-gray-300 hover:bg-military-accent/10 hover:text-military-accent transition-colors"
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
