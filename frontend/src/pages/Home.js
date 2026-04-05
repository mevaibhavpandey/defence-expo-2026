import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaShieldAlt, FaTrophy, FaUsers, FaCalendarAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Logo & Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-12"
          >
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-military-accent/10 blur-3xl rounded-full"></div>
              <img 
                src="/images/astra-logo.jpg" 
                alt="ASTRA Logo" 
                className="h-32 w-auto object-contain relative z-10"
              />
            </div>
            
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-military-accent/5 border border-military-accent/20 backdrop-blur-sm">
              <div className="status-dot"></div>
              <span className="text-sm font-medium text-gray-300 mono">30 APRIL 2026</span>
              <div className="w-px h-4 bg-white/10"></div>
              <span className="text-sm font-medium text-military-accent">BMSIT, BENGALURU</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-white">Defence Technology</span>
              <br />
              <span className="text-gradient">EXPO 2026</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4">
              Organized by <span className="text-gray-300 font-medium">Armed Squadron for Tactical Readiness and Awareness</span>
            </p>
            
            <p className="text-sm text-gray-500 mono">
              BMS Institute of Technology and Management
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <Link to="/register">
              <button className="group px-8 py-4 bg-military-accent/10 hover:bg-military-accent/15 border border-military-accent/30 hover:border-military-accent/50 rounded-lg text-military-accent font-semibold transition-all duration-300 flex items-center gap-3">
                Register Now
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            <Link to="/event-details">
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-gray-300 hover:text-white font-semibold transition-all duration-300">
                Event Details
              </button>
            </Link>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { 
                icon: FaShieldAlt, 
                title: 'Expert Evaluation', 
                desc: 'Projects assessed by DRDO, HAL, BEL, and BDL professionals',
                gradient: 'from-military-accent/10 to-transparent'
              },
              { 
                icon: FaTrophy, 
                title: '₹30,000 Prize Pool', 
                desc: 'Rewarding innovation and excellence in defence technology',
                gradient: 'from-yellow-500/10 to-transparent'
              },
              { 
                icon: FaUsers, 
                title: '~50 Selected Teams', 
                desc: 'Showcasing cutting-edge projects from top engineering colleges',
                gradient: 'from-blue-500/10 to-transparent'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="glow-card corner-accent p-6 rounded-xl group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="text-military-accent text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-military-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="military-border rounded-xl p-8 backdrop-blur-sm"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '~50', label: 'Selected Teams', unit: '' },
                { value: '₹30K', label: 'Prize Pool', unit: '' },
                { value: '4+', label: 'Expert Panels', unit: '' },
                { value: '200+', label: 'Participants', unit: '' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-military-accent mb-2 mono group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="relative py-16 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glow-card p-8 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-military-accent/10 flex items-center justify-center flex-shrink-0">
                  <FaCalendarAlt className="text-military-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Event Schedule</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    Full-day event featuring project demonstrations, expert evaluations, and keynote addresses from distinguished defence professionals.
                  </p>
                  <Link to="/schedule" className="text-sm text-military-accent hover:underline inline-flex items-center gap-2">
                    View Full Schedule <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glow-card p-8 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-military-accent/10 flex items-center justify-center flex-shrink-0">
                  <FaShieldAlt className="text-military-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Distinguished Guests</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">
                    Featuring Brigadier B. M. Cariappa (Vir Chakra) and Group Captain Shubhanshu Shukla, sharing insights on defence innovation.
                  </p>
                  <Link to="/guests" className="text-sm text-military-accent hover:underline inline-flex items-center gap-2">
                    Meet Our Guests <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
