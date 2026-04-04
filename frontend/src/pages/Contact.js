import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-12 text-military-accent"
        >
          Contact Us
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glow-card bg-military-green/20 backdrop-blur-sm p-6 rounded-lg border border-military-accent/20">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-military-accent text-2xl mt-1" />
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Address</h3>
                  <p className="text-gray-300">
                    BMS Institute of Technology and Management<br />
                    Avalahalli, Yelahanka<br />
                    Bengaluru, Karnataka 560064
                  </p>
                </div>
              </div>
            </div>

            <div className="glow-card bg-military-green/20 backdrop-blur-sm p-6 rounded-lg border border-military-accent/20">
              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-military-accent text-2xl mt-1" />
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Email</h3>
                  <p className="text-gray-300">astra@bmsit.in</p>
                  <p className="text-gray-300">defenceexpo@bmsit.in</p>
                </div>
              </div>
            </div>

            <div className="glow-card bg-military-green/20 backdrop-blur-sm p-6 rounded-lg border border-military-accent/20">
              <div className="flex items-start space-x-4">
                <FaPhone className="text-military-accent text-2xl mt-1" />
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Phone</h3>
                  <p className="text-gray-300">+91 [CONTACT_NUMBER]</p>
                  <p className="text-gray-300">+91 [CONTACT_NUMBER]</p>
                </div>
              </div>
            </div>

            <div className="glow-card bg-military-green/20 backdrop-blur-sm p-6 rounded-lg border border-military-accent/20">
              <h3 className="text-white font-bold text-xl mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-military-accent hover:text-white transition-colors">
                  <FaInstagram size={28} />
                </a>
                <a href="#" className="text-military-accent hover:text-white transition-colors">
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glow-card bg-military-green/20 backdrop-blur-sm p-8 rounded-lg border border-military-accent/20"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-military-dark/50 border border-military-accent/30 rounded px-4 py-3 text-white focus:outline-none focus:border-military-accent"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-military-dark/50 border border-military-accent/30 rounded px-4 py-3 text-white focus:outline-none focus:border-military-accent"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full bg-military-dark/50 border border-military-accent/30 rounded px-4 py-3 text-white focus:outline-none focus:border-military-accent"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full bg-military-dark/50 border border-military-accent/30 rounded px-4 py-3 text-white focus:outline-none focus:border-military-accent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-military-accent text-military-dark font-bold py-3 rounded-lg hover:bg-military-accent/80 transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
