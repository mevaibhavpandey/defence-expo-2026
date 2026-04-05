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
              ASTRA is the official defence technology club of BMSIT, established to foster innovation and excellence in defence-related technologies. The club serves as a platform for students passionate about contributing to India's defence sector and national security.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our mission is to bridge the gap between academic learning and real-world defence applications, preparing students to become future innovators in the defence technology ecosystem.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-military-accent">Focus Areas</h3>
            <ul className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                'Defence Technology & Systems',
                'Unmanned Aerial Vehicles (UAVs) & Drones',
                'Artificial Intelligence & Machine Learning',
                'Robotics & Autonomous Systems',
                'Cybersecurity & Information Warfare',
                'Embedded Systems & IoT',
                'Surveillance & Reconnaissance Systems',
                'Strategic Communication Systems'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-military-accent rounded-full"></span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-2xl font-bold mb-4 text-military-accent">Our Objectives</h3>
            <div className="space-y-3 mb-6">
              <div className="bg-military-dark/50 p-4 rounded">
                <p className="text-gray-300">
                  <strong className="text-white">Innovation:</strong> Encourage students to develop cutting-edge solutions for defence challenges
                </p>
              </div>
              <div className="bg-military-dark/50 p-4 rounded">
                <p className="text-gray-300">
                  <strong className="text-white">Industry Connect:</strong> Build strong relationships with DRDO, HAL, BEL, BDL, and other defence organizations
                </p>
              </div>
              <div className="bg-military-dark/50 p-4 rounded">
                <p className="text-gray-300">
                  <strong className="text-white">Skill Development:</strong> Provide hands-on experience through workshops, projects, and competitions
                </p>
              </div>
              <div className="bg-military-dark/50 p-4 rounded">
                <p className="text-gray-300">
                  <strong className="text-white">National Service:</strong> Contribute to India's vision of self-reliance in defence technology (Atmanirbhar Bharat)
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Through initiatives like the Defence Technology Expo, ASTRA provides students with opportunities to showcase their innovations, interact with industry experts, and contribute meaningfully to India's defence capabilities.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
