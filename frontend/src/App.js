import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import EventDetails from './pages/EventDetails';
import Schedule from './pages/Schedule';
import Guests from './pages/Guests';
import Registration from './pages/Registration';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-military-dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
