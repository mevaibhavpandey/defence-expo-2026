import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaShieldAlt, FaTrophy, FaUsers, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto w-full">
          {/* Mission Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="tactical-border px-6 py-3 backdrop-blur-sm inline-flex items-center gap-4">
              <div className="status-indicator"></div>
              <span className="text-tactical text-xs tracking-widest">MISSION ACTIVE</span>
              <div className="w-px h-4 bg-tactical-accent/20"></div>
              <span className="text-mono text-[10px] text-tactical-text/60">30.04.2026</span>
            </div>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center mb-12"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-tactical-accent/5 blur-3xl"></div>
              <img 
                src="/images/astra-logo.jpg" 
                alt="ASTRA" 
                className="h-40 w-auto object-contain relative z-10"
              />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl md:text-8xl font-rajdhani font-bold mb-6 leading-none">
              <span className="text-tactical-text">DEFENCE TECHNOLOGY</span>
              <br />
              <span className="text-gradient-tactical">EXPO 2026</span>
            </h1>
            
            <p className="text-tactical-text/70 text-lg md:text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
              Defence Innovation Starts Here
            </p>
            
            <div className="flex items-center justify-center gap-3 text-sm text-tactical-text/50">
              <FaMapMarkerAlt className="text-tactical-accent" />
              <span className="text-mono">BMS INSTITUTE OF TECHNOLOGY & MANAGEMENT</span>
              <div className="w-px h-4 bg-tactical-accent/20"></div>
              <span className="text-mono">BENGALURU</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link to="/register">
              <button className="btn-tactical-solid px-10 py-4 text-sm flex items-center gap-3 group">
                REGISTER NOW
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            <Link to="/event-details">
              <button className="btn-tactical px-10 py-4 text-sm">
                EXPLORE PROJECTS
              </button>
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { value: '~50', label: 'SELECTED TEAMS', unit: '' },
              { value: '₹30K', label: 'PRIZE POOL', unit: '' },
              { value: '04', label: 'EXPERT PANELS', unit: '+' },
              { value: '200', label: 'PARTICIPANTS', unit: '+' }
            ].map((stat, idx) => (
              <div key={idx} className="tactical-border p-4 text-center backdrop-blur-sm group hover:border-tactical-accent/30 transition-all duration-300">
                <div className="text-3xl font-rajdhani font-bold text-tactical-accent mb-1 text-mono">
                  {stat.value}{stat.unit}
                </div>
                <div className="text-[10px] text-tactical-text/50 tracking-widest">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Objectives Section */}
      <section className="relative py-24 px-6 border-t border-tactical-accent/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-tactical text-xs tracking-widest mb-4 block">MISSION OBJECTIVES</span>
            <h2 className="text-4xl md:text-5xl font-rajdhani font-bold text-tactical-text">
              TACTICAL EXCELLENCE
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: FaShieldAlt, 
                title: 'EXPERT EVALUATION', 
                desc: 'Projects assessed by DRDO, HAL, BEL, and BDL defence professionals',
                code: 'OBJ-001'
              },
              { 
                icon: FaTrophy, 
                title: 'PRIZE POOL', 
                desc: 'Total rewards of ₹30,000 for top innovators in defence technology',
                code: 'OBJ-002'
              },
              { 
                icon: FaUsers, 
                title: 'SELECTED TEAMS', 
                desc: 'Approximately 50 teams showcasing cutting-edge defence projects',
                code: 'OBJ-003'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="glass-card corner-indicators p-8 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 tactical-border flex items-center justify-center">
                    <item.icon className="text-tactical-accent text-xl" />
                  </div>
                  <span className="text-mono text-[10px] text-tactical-text/30">{item.code}</span>
                </div>
                <h3 className="text-tactical text-sm mb-3 group-hover:text-tactical-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-tactical-text/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="relative py-16 px-6 border-t border-tactical-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 tactical-border flex items-center justify-center flex-shrink-0">
                  <FaCalendarAlt className="text-tactical-accent text-sm" />
                </div>
                <div>
                  <h3 className="text-tactical text-sm mb-3">OPERATION SCHEDULE</h3>
                  <p className="text-sm text-tactical-text/60 leading-relaxed mb-4">
                    Full-day mission featuring project demonstrations, expert evaluations, and keynote addresses from distinguished defence professionals.
                  </p>
                  <Link to="/schedule" className="text-tactical-accent text-xs hover:underline inline-flex items-center gap-2 text-mono">
                    VIEW TIMELINE <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 tactical-border flex items-center justify-center flex-shrink-0">
                  <FaShieldAlt className="text-tactical-accent text-sm" />
                </div>
                <div>
                  <h3 className="text-tactical text-sm mb-3">DISTINGUISHED GUESTS</h3>
                  <p className="text-sm text-tactical-text/60 leading-relaxed mb-4">
                    Featuring Brigadier B. M. Cariappa (Vir Chakra) and Group Captain Shubhanshu Shukla, sharing insights on defence innovation.
                  </p>
                  <Link to="/guests" className="text-tactical-accent text-xs hover:underline inline-flex items-center gap-2 text-mono">
                    VIEW PROFILES <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Organized By */}
      <section className="relative py-16 px-6 border-t border-tactical-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-tactical-text/40 text-xs tracking-widest block mb-4">ORGANIZED BY</span>
          <h3 className="text-2xl font-rajdhani font-bold text-tactical-text mb-2">
            ARMED SQUADRON FOR TACTICAL READINESS AND AWARENESS
          </h3>
          <p className="text-tactical-text/50 text-sm text-mono">ASTRA - DEFENCE TECHNOLOGY CLUB</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
