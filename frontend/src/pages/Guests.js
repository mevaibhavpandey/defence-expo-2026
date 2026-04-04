import React from 'react';
import { motion } from 'framer-motion';
import { FaMedal, FaRocket } from 'react-icons/fa';

const Guests = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-12 text-military-accent"
        >
          Chief Guests
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glow-card bg-military-green/20 backdrop-blur-sm p-8 rounded-lg border border-military-accent/20"
          >
            <div className="flex items-center space-x-3 mb-4">
              <FaMedal className="text-yellow-500 text-4xl" />
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">CONFIRMED</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-2 text-white">Brigadier B. M. Cariappa</h2>
            <p className="text-military-accent font-semibold mb-4">Kargil War Veteran | Vir Chakra Awardee</p>
            
            <div className="space-y-3 text-gray-300">
              <p>
                Brigadier B. M. Cariappa is a distinguished Kargil War veteran who demonstrated exceptional bravery and leadership during one of India's most challenging military operations.
              </p>
              <p>
                Awarded the prestigious <span className="text-military-accent font-semibold">Vir Chakra</span> for his gallantry and strategic acumen, Brigadier Cariappa is known for his unwavering commitment to the nation and his exemplary service in the Indian Army.
              </p>
              <p>
                His insights on defence strategy, leadership, and tactical operations continue to inspire the next generation of defence professionals and technology innovators.
              </p>
            </div>

            <div className="mt-6 p-4 bg-military-dark/50 rounded border-l-4 border-military-accent">
              <p className="text-gray-400 italic">
                "Innovation in defence technology is not just about weapons; it's about protecting lives and securing our nation's future."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glow-card bg-military-green/20 backdrop-blur-sm p-8 rounded-lg border border-military-accent/20"
          >
            <div className="flex items-center space-x-3 mb-4">
              <FaRocket className="text-military-accent text-4xl" />
              <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-bold">TENTATIVE</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-2 text-white">Group Captain Shubhanshu Shukla</h2>
            <p className="text-military-accent font-semibold mb-4">Indian Air Force Officer | ISRO Astronaut</p>
            
            <div className="space-y-3 text-gray-300">
              <p>
                Group Captain Shubhanshu Shukla is an accomplished Indian Air Force officer who has been selected for India's prestigious human spaceflight missions in collaboration with ISRO.
              </p>
              <p>
                As part of India's ambitious space program, Group Captain Shukla represents the convergence of military excellence and space exploration, embodying the spirit of innovation and courage.
              </p>
              <p>
                His expertise in aerospace operations and his role in India's space missions make him an inspirational figure for students pursuing careers in defence technology, aerospace engineering, and related fields.
              </p>
            </div>

            <div className="mt-6 p-4 bg-military-dark/50 rounded border-l-4 border-military-accent">
              <p className="text-gray-400 italic">
                "The future of defence lies in the hands of young innovators who dare to dream beyond the skies."
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 glow-card bg-gradient-to-r from-military-accent/10 to-military-green/20 backdrop-blur-sm p-8 rounded-lg border border-military-accent/20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            An Opportunity to Learn from the Best
          </h3>
          <p className="text-gray-300 text-lg">
            Interact with distinguished defence professionals, gain insights into real-world applications, 
            and get inspired by their extraordinary journeys in service of the nation.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Guests;
