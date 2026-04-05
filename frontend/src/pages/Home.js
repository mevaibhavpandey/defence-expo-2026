import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaShieldAlt, FaCrosshairs, FaAward } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo with Glow Effect */}
            <div className="flex justify-center mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-military-accent/20 blur-3xl rounded-full"></div>
                <img 
                  src="/images/astra-logo.jpg" 
                  alt="ASTRA Logo" 
                  className="h-48 w-auto object-contain relative z-10 drop-shadow-[0_0_30px_rgba(0,255,65,0.4)]"
                />
              </motion.div>
            </div>
            
            {/* Date Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-block mb-8"
            >
              <div className="military-border px-6 py-3 rounded-lg bg-military-darker/80 backdrop-blur-sm">
                <span className="text-military-accent text-sm font-bold tracking-widest uppercase flex items-center gap-2">
                  <span className="w-2 h-2 bg-military-accent rounded-full animate-pulse"></span>
                  30 April 2026
                  <span className="w-2 h-2 bg-military-accent rounded-full animate-pulse"></span>
                </span>
              </div>
            </motion.div>
            
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-6xl md:text-8xl font-bold mb-6 relative"
            >
              <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                Defence Technology
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-military-accent via-military-gold to-military-accent mt-4 animate-pulse-slow">
                EXPO 2026
              </span>
              <div className="absolute -inset-4 bg-gradient-to-r from-military-accent/0 via-military-accent/10 to-military-accent/0 blur-2xl -z-10"></div>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Organized by <span className="text-military-gold font-semibold">Armed Squadron for Tactical Readiness and Awareness</span>
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-lg text-gray-400 mb-12"
            >
              BMS Institute of Technology and Management, Bengaluru
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,255,65,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-5 bg-gradient-to-r from-military-accent to-military-accentDark text-military-darker font-bold text-lg rounded-lg overflow-hidden transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaRocket className="group-hover:translate-x-1 transition-transform" />
                    Register Now
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-military-gold to-military-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </Link>
              <Link to="/event-details">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="military-border px-10 py-5 text-military-accent font-bold text-lg rounded-lg hover:bg-military-accent/10 transition-all duration-300 flex items-center gap-2"
                >
                  <FaShieldAlt />
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: FaRocket, 
                title: 'Innovation', 
                desc: 'Cutting-edge defence technology projects',
                color: 'from-military-accent/20 to-military-green/20',
                iconColor: 'text-military-accent'
              },
              { 
                icon: FaShieldAlt, 
                title: 'Excellence', 
                desc: 'Evaluated by DRDO, HAL, BEL, BDL experts',
                color: 'from-military-gold/20 to-military-green/20',
                iconColor: 'text-military-gold'
              },
              { 
                icon: FaAward, 
                title: 'Competition', 
                desc: '₹30,000 prize pool for top innovators',
                color: 'from-military-orange/20 to-military-green/20',
                iconColor: 'text-military-orange'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * idx, duration: 0.6 }}
                className="glow-card corner-accent scan-line p-8 rounded-lg group cursor-pointer"
              >
                <div className={`w-20 h-20 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`${item.iconColor} text-4xl`} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-military-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="military-border rounded-lg p-8 bg-gradient-to-r from-military-green/20 to-military-darker/80 backdrop-blur-sm"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '~50', label: 'Selected Teams' },
                { value: '₹30K', label: 'Prize Pool' },
                { value: '4+', label: 'Expert Panels' },
                { value: '200+', label: 'Participants' }
              ].map((stat, idx) => (
                <div key={idx} className="group">
                  <div className="text-4xl md:text-5xl font-bold text-military-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
