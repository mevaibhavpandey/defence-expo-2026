import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaShieldAlt, FaCrosshairs } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="tactical-grid fixed inset-0 opacity-30"></div>
      
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="text-military-accent text-sm font-semibold tracking-wider uppercase border border-military-accent/30 px-4 py-2 rounded-full">
                30 April 2026
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Defence Technology
              <span className="block text-military-accent mt-2">EXPO 2026</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Organized by <span className="text-military-accent font-semibold">ASTRA</span> - Armed Squadron for Tactical Readiness and Awareness
            </p>
            
            <p className="text-lg text-gray-300 mb-12">
              BMS Institute of Technology and Management, Bengaluru
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-military-accent text-military-dark font-bold rounded-lg hover:shadow-lg hover:shadow-military-accent/50 transition-all"
                >
                  Register Now
                </motion.button>
              </Link>
              <Link to="/event-details">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-military-accent text-military-accent font-bold rounded-lg hover:bg-military-accent/10 transition-all"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaRocket, title: 'Innovation', desc: 'Cutting-edge defence technology projects' },
              { icon: FaShieldAlt, title: 'Excellence', desc: 'Evaluated by DRDO, HAL, BEL, BDL experts' },
              { icon: FaCrosshairs, title: 'Competition', desc: '₹30,000 prize pool for top innovators' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="glow-card bg-military-green/30 backdrop-blur-sm p-8 rounded-lg border border-military-accent/20"
              >
                <item.icon className="text-military-accent text-5xl mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
