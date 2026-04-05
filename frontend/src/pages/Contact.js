import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <span className="text-tactical text-xs tracking-widest mb-4 block">COMMUNICATION CHANNEL</span>
          <h1 className="text-5xl font-rajdhani font-bold text-tactical-text">
            CONTACT COMMAND
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card corner-indicators p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 tactical-border flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-tactical-accent text-sm" />
                </div>
                <div>
                  <h3 className="text-tactical text-sm mb-3 tracking-widest">LOCATION</h3>
                  <p className="text-tactical-text/70 text-sm leading-relaxed">
                    BMS Institute of Technology and Management<br />
                    Avalahalli, Yelahanka<br />
                    Bengaluru, Karnataka 560064
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card corner-indicators p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 tactical-border flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-tactical-accent text-sm" />
                </div>
                <div>
                  <h3 className="text-tactical text-sm mb-3 tracking-widest">EMAIL</h3>
                  <p className="text-tactical-text/70 text-sm text-mono">astra@bmsit.in</p>
                  <p className="text-tactical-text/70 text-sm text-mono">defenceexpo@bmsit.in</p>
                </div>
              </div>
            </div>

            <div className="glass-card corner-indicators p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 tactical-border flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-tactical-accent text-sm" />
                </div>
                <div>
                  <h3 className="text-tactical text-sm mb-3 tracking-widest">PHONE</h3>
                  <p className="text-tactical-text/70 text-sm text-mono">+91 [CONTACT_NUMBER]</p>
                  <p className="text-tactical-text/70 text-sm text-mono">+91 [CONTACT_NUMBER]</p>
                </div>
              </div>
            </div>

            <div className="glass-card corner-indicators p-6">
              <h3 className="text-tactical text-sm mb-4 tracking-widest">SOCIAL CHANNELS</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 tactical-border flex items-center justify-center hover:border-tactical-accent/50 transition-all">
                  <FaInstagram className="text-tactical-accent" />
                </a>
                <a href="#" className="w-10 h-10 tactical-border flex items-center justify-center hover:border-tactical-accent/50 transition-all">
                  <FaLinkedin className="text-tactical-accent" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-8"
          >
            <h2 className="text-tactical text-sm mb-6 tracking-widest">SEND MESSAGE</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-tactical-text/70 text-xs mb-2 tracking-wide">NAME</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-tactical-text/70 text-xs mb-2 tracking-wide">EMAIL</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded text-sm"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-tactical-text/70 text-xs mb-2 tracking-wide">SUBJECT</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded text-sm"
                  placeholder="Message subject"
                />
              </div>
              <div>
                <label className="block text-tactical-text/70 text-xs mb-2 tracking-wide">MESSAGE</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 rounded text-sm"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-tactical-solid py-3 text-sm"
              >
                TRANSMIT MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
