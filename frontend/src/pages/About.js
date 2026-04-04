import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 text-military-accent">About</h1>
          
          <div className="glow-card bg-military-green/20 backdrop-blur-sm p-8 rounded-lg border border-military-accent/20 mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">BMS Institute of Technology and Management</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              BMSIT is a reputed engineering institution located in Bengaluru, Karnataka. Known for its commitment to academic excellence, innovation, and research, BMSIT has established itself as a premier institution that nurtures future engineers and technologists.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              The institute actively encourages student-led projects and fosters strong industry collaboration, providing students with real-world exposure and opportunities to work on cutting-edge technologies.
            </p>
          </div>

          <div className="glow-card bg-military-green/20 backdrop-blur-sm p-8 rounded-lg border border-military-accent/20">
            <h2 className="text-3xl font-bold mb-4 text-white">ASTRA - Armed Squadron for Tactical Readiness and Awareness</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              ASTRA is the official defence technology club of BMSIT, dedicated to fostering innovation in defence-related technologies. The club focuses on various cutting-edge domains including:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 mb-6">
              {['Defence Technology', 'Robotics & UAVs', 'Artificial Intelligence & Machine Learning', 'Internet of Things (IoT)', 'Cybersecurity', 'Embedded Systems'].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-military-accent rounded-full"></span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed">
              ASTRA aims to bridge the gap between students, the defence sector, and real-world applications, preparing the next generation of defence technology innovators.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
