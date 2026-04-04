import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaClipboardCheck } from 'react-icons/fa';

const EventDetails = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-12 text-military-accent"
        >
          Event Details
        </motion.h1>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glow-card bg-military-green/20 backdrop-blur-sm p-8 rounded-lg border border-military-accent/20"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Event Overview</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Students from across Bengaluru colleges are invited to showcase their innovative projects and prototypes in various cutting-edge domains:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {['Defence Technology', 'Robotics & Drones', 'Artificial Intelligence & Machine Learning', 'Internet of Things (IoT)', 'Cybersecurity', 'Embedded Systems'].map((domain, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-military-dark/50 p-3 rounded">
                  <span className="w-2 h-2 bg-military-accent rounded-full"></span>
                  <span className="text-gray-300">{domain}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mt-6">
              <strong className="text-military-accent">Note:</strong> Private companies will also showcase technologies (exhibition only, not competition). Competition is strictly for college students.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glow-card bg-military-green/20 backdrop-blur-sm p-8 rounded-lg border border-military-accent/20"
          >
            <div className="flex items-center space-x-3 mb-4">
              <FaClipboardCheck className="text-military-accent text-3xl" />
              <h2 className="text-3xl font-bold text-white">Evaluation Panel</h2>
            </div>
            <p className="text-gray-300 text-lg mb-4">
              Projects will be evaluated by experts from premier defence organizations (subject to availability):
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: 'DRDO', full: 'Defence Research and Development Organisation' },
                { name: 'HAL', full: 'Hindustan Aeronautics Limited' },
                { name: 'BEL', full: 'Bharat Electronics Limited' },
                { name: 'BDL', full: 'Bharat Dynamics Limited' }
              ].map((org, idx) => (
                <div key={idx} className="bg-military-dark/50 p-4 rounded">
                  <h3 className="text-military-accent font-bold text-xl">{org.name}</h3>
                  <p className="text-gray-400 text-sm">{org.full}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glow-card bg-military-green/20 backdrop-blur-sm p-8 rounded-lg border border-military-accent/20"
          >
            <div className="flex items-center space-x-3 mb-6">
              <FaUsers className="text-military-accent text-3xl" />
              <h2 className="text-3xl font-bold text-white">Competition Details</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-military-accent mb-2">Eligibility</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Open to college students only</li>
                  <li>• Individual or team participation allowed</li>
                  <li>• Maximum team size: 4 members</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-military-accent mb-2">Selection Process</h3>
                <div className="space-y-4">
                  <div className="bg-military-dark/50 p-4 rounded">
                    <h4 className="font-bold text-white mb-2">Round 1: Online Screening</h4>
                    <ul className="text-gray-300 space-y-1">
                      <li>• PPT submission</li>
                      <li>• Video demonstration</li>
                      <li>• Project description</li>
                    </ul>
                  </div>
                  <div className="bg-military-dark/50 p-4 rounded">
                    <h4 className="font-bold text-white mb-2">Round 2: Final Expo at BMSIT</h4>
                    <ul className="text-gray-300 space-y-1">
                      <li>• Selected teams (approx. 30-50 teams)</li>
                      <li>• Live demonstration</li>
                      <li>• Evaluation by expert panel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glow-card bg-gradient-to-r from-military-green/30 to-military-accent/20 backdrop-blur-sm p-8 rounded-lg border border-military-accent/30"
          >
            <div className="flex items-center space-x-3 mb-6">
              <FaTrophy className="text-military-accent text-4xl" />
              <h2 className="text-3xl font-bold text-white">Prize Pool</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { place: '1st Prize', amount: '₹15,000', color: 'from-yellow-500 to-yellow-600' },
                { place: '2nd Prize', amount: '₹10,000', color: 'from-gray-400 to-gray-500' },
                { place: '3rd Prize', amount: '₹5,000', color: 'from-orange-600 to-orange-700' }
              ].map((prize, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${prize.color} p-6 rounded-lg text-center`}>
                  <h3 className="text-white font-bold text-xl mb-2">{prize.place}</h3>
                  <p className="text-white text-3xl font-bold">{prize.amount}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-300 mt-6 text-lg">
              + Certificates for all participants
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
