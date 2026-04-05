import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaPlus, FaTimes, FaUpload } from 'react-icons/fa';

const Registration = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    teamLeader: {
      name: '',
      email: '',
      contact: '',
      college: '',
      year: '',
      course: '',
      stream: ''
    },
    teamMembers: [],
    project: {
      problemStatement: '',
      description: '',
      additionalLinks: ''
    }
  });

  const [files, setFiles] = useState({ ppt: null, video: null });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const addTeamMember = () => {
    if (formData.teamMembers.length < 3) {
      setFormData({
        ...formData,
        teamMembers: [...formData.teamMembers, { name: '', email: '', contact: '' }]
      });
    }
  };

  const removeTeamMember = (index) => {
    setFormData({
      ...formData,
      teamMembers: formData.teamMembers.filter((_, i) => i !== index)
    });
  };

  const handleTeamMemberChange = (index, field, value) => {
    const updatedMembers = [...formData.teamMembers];
    updatedMembers[index][field] = value;
    setFormData({ ...formData, teamMembers: updatedMembers });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const submitData = new FormData();
    submitData.append('teamName', formData.teamName);
    submitData.append('teamLeader', JSON.stringify(formData.teamLeader));
    submitData.append('teamMembers', JSON.stringify(formData.teamMembers));
    submitData.append('project', JSON.stringify(formData.project));
    
    if (files.ppt) submitData.append('ppt', files.ppt);
    if (files.video) submitData.append('video', files.video);

    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      await axios.post(`${API_URL}/api/registrations`, submitData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setMessage('Registration submitted successfully!');
      setFormData({
        teamName: '',
        teamLeader: { name: '', email: '', contact: '', college: '', year: '', course: '', stream: '' },
        teamMembers: [],
        project: { problemStatement: '', description: '', additionalLinks: '' }
      });
      setFiles({ ppt: null, video: null });
    } catch (error) {
      setMessage('Error submitting registration. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <span className="text-tactical text-xs tracking-widest mb-4 block">MISSION REGISTRATION</span>
          <h1 className="text-5xl font-rajdhani font-bold text-tactical-text mb-4">
            TEAM ENROLLMENT
          </h1>
          <p className="text-tactical-text/60 text-sm">Complete all fields to register your team for the expo</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-card p-8 space-y-8"
        >
          {/* Team Name */}
          <div>
            <label className="block text-tactical text-xs tracking-widest mb-3">TEAM NAME *</label>
            <input
              type="text"
              required
              value={formData.teamName}
              onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
              className="w-full px-4 py-3 rounded text-sm"
              placeholder="Enter team name"
            />
          </div>

          {/* Team Leader Details */}
          <div className="border-t border-tactical-accent/10 pt-8">
            <h3 className="text-tactical text-sm mb-6 tracking-widest">TEAM LEADER DETAILS</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { key: 'name', label: 'NAME', type: 'text', placeholder: 'Full name' },
                { key: 'email', label: 'EMAIL', type: 'email', placeholder: 'email@example.com' },
                { key: 'contact', label: 'CONTACT', type: 'tel', placeholder: '+91 XXXXXXXXXX' },
                { key: 'college', label: 'COLLEGE', type: 'text', placeholder: 'College name' },
                { key: 'year', label: 'YEAR', type: 'text', placeholder: 'Current year' },
                { key: 'course', label: 'COURSE', type: 'text', placeholder: 'B.Tech, M.Tech, etc.' },
                { key: 'stream', label: 'STREAM', type: 'text', placeholder: 'CSE, ECE, etc.' }
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-tactical-text/70 text-xs mb-2 tracking-wide">{field.label} *</label>
                  <input
                    type={field.type}
                    required
                    value={formData.teamLeader[field.key]}
                    onChange={(e) => setFormData({
                      ...formData,
                      teamLeader: { ...formData.teamLeader, [field.key]: e.target.value }
                    })}
                    className="w-full px-4 py-3 rounded text-sm"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Team Members */}
          <div className="border-t border-tactical-accent/10 pt-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-tactical text-sm tracking-widest">TEAM MEMBERS (MAX 3)</h3>
              {formData.teamMembers.length < 3 && (
                <button
                  type="button"
                  onClick={addTeamMember}
                  className="btn-tactical px-4 py-2 text-xs flex items-center gap-2"
                >
                  <FaPlus className="text-[10px]" /> ADD MEMBER
                </button>
              )}
            </div>
            {formData.teamMembers.map((member, idx) => (
              <div key={idx} className="tactical-border p-6 rounded mb-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-tactical-text text-sm font-rajdhani">MEMBER {idx + 1}</h4>
                  <button
                    type="button"
                    onClick={() => removeTeamMember(idx)}
                    className="text-red-500 hover:text-red-400 transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={member.name}
                    onChange={(e) => handleTeamMemberChange(idx, 'name', e.target.value)}
                    className="px-4 py-3 rounded text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={member.email}
                    onChange={(e) => handleTeamMemberChange(idx, 'email', e.target.value)}
                    className="px-4 py-3 rounded text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Contact"
                    value={member.contact}
                    onChange={(e) => handleTeamMemberChange(idx, 'contact', e.target.value)}
                    className="px-4 py-3 rounded text-sm"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Project Details */}
          <div className="border-t border-tactical-accent/10 pt-8">
            <h3 className="text-tactical text-sm mb-6 tracking-widest">PROJECT DETAILS</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-tactical-text/70 text-xs mb-2 tracking-wide">PROBLEM STATEMENT *</label>
                <textarea
                  required
                  rows="3"
                  value={formData.project.problemStatement}
                  onChange={(e) => setFormData({
                    ...formData,
                    project: { ...formData.project, problemStatement: e.target.value }
                  })}
                  className="w-full px-4 py-3 rounded text-sm"
                  placeholder="Describe the problem your project addresses"
                />
              </div>
              <div>
                <label className="block text-tactical-text/70 text-xs mb-2 tracking-wide">PROJECT DESCRIPTION *</label>
                <textarea
                  required
                  rows="5"
                  value={formData.project.description}
                  onChange={(e) => setFormData({
                    ...formData,
                    project: { ...formData.project, description: e.target.value }
                  })}
                  className="w-full px-4 py-3 rounded text-sm"
                  placeholder="Detailed description of your project"
                />
              </div>
              <div>
                <label className="block text-tactical-text/70 text-xs mb-2 tracking-wide flex items-center gap-2">
                  <FaUpload className="text-tactical-accent" /> PPT UPLOAD
                </label>
                <input
                  type="file"
                  accept=".ppt,.pptx,.pdf"
                  onChange={(e) => setFiles({ ...files, ppt: e.target.files[0] })}
                  className="w-full px-4 py-3 rounded text-sm"
                />
                <p className="text-tactical-text/40 text-xs mt-2 text-mono">Accepted: PPT, PPTX, PDF</p>
              </div>
              <div>
                <label className="block text-tactical-text/70 text-xs mb-2 tracking-wide flex items-center gap-2">
                  <FaUpload className="text-tactical-accent" /> VIDEO UPLOAD
                </label>
                <input
                  type="file"
                  accept=".mp4,.avi,.mov"
                  onChange={(e) => setFiles({ ...files, video: e.target.files[0] })}
                  className="w-full px-4 py-3 rounded text-sm"
                />
                <p className="text-tactical-text/40 text-xs mt-2 text-mono">Accepted: MP4, AVI, MOV</p>
              </div>
              <div>
                <label className="block text-tactical-text/70 text-xs mb-2 tracking-wide">ADDITIONAL LINKS</label>
                <input
                  type="text"
                  value={formData.project.additionalLinks}
                  onChange={(e) => setFormData({
                    ...formData,
                    project: { ...formData.project, additionalLinks: e.target.value }
                  })}
                  className="w-full px-4 py-3 rounded text-sm"
                  placeholder="GitHub, Drive, or other relevant links"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-tactical-solid py-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'SUBMITTING...' : 'SUBMIT REGISTRATION'}
          </button>

          {message && (
            <div className={`p-4 rounded text-center text-sm ${
              message.includes('success') 
                ? 'bg-tactical-accent/10 text-tactical-accent border border-tactical-accent/30' 
                : 'bg-red-500/10 text-red-400 border border-red-500/30'
            }`}>
              {message}
            </div>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default Registration;
