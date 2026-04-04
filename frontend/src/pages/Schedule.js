import React from 'react';
import { motion } from 'framer-motion';
import { FaClock } from 'react-icons/fa';

const Schedule = () => {
  const scheduleItems = [
    { time: '09:00 AM', event: 'Event Begins', desc: 'Registration and setup' },
    { time: '10:00 AM', event: 'Registration Closes', desc: 'All participants must be checked in' },
    { time: '10:00 - 10:30 AM', event: 'Inauguration Ceremony', desc: 'Official opening of the expo' },
    { time: '10:30 AM - 01:30 PM', event: 'Expo + Evaluation', desc: 'Project demonstrations and DRDO panel evaluation' },
    { time: '10:30 - 11:30 AM', event: 'Address by Group Captain Shubhanshu Shukla', desc: 'Keynote speech (Tentative)' },
    { time: '01:30 - 02:30 PM', event: 'Lunch Break', desc: 'Networking and refreshments' },
    { time: '02:30 - 04:00 PM', event: 'Evaluation Continues', desc: 'Final round of project assessments' },
    { time: '02:45 - 04:00 PM', event: 'Address by Brigadier B. M. Cariappa', desc: 'Inspirational talk by Kargil War veteran' },
    { time: '04:30 PM', event: 'Results & Prize Distribution', desc: 'Winners announcement and awards ceremony' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 text-military-accent">Event Schedule</h1>
          <p className="text-gray-400 text-xl">30 April 2026 | BMSIT, Bengaluru</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-military-accent/30"></div>
          
          {scheduleItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative mb-8 ml-16"
            >
              <div className="absolute -left-[34px] top-6 w-4 h-4 bg-military-accent rounded-full border-4 border-military-dark"></div>
              
              <div className="glow-card bg-military-green/20 backdrop-blur-sm p-6 rounded-lg border border-military-accent/20">
                <div className="flex items-center space-x-3 mb-2">
                  <FaClock className="text-military-accent" />
                  <span className="text-military-accent font-bold text-lg">{item.time}</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{item.event}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
