import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

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
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-8 text-military-accent"
        >
          Registration
        </motion.h1>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glow-card bg-military-green/20 backdrop-blur-sm p-8 rounded-lg border border-military-accent/20"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-military-accent font-semibold mb-2">Team Name *</label>
              <input
                type="text"
                required
                value={formData.teamName}
                onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                className="w-full bg-military-dark/50 border border-military-accent/30 rounded px-4 py-3 text-white focus:outline-none focus:border-military-accent"
              />
            </div>

            <div className="border-t border-military-accent/20 pt-6">
              <h3 className="text-2xl font-bold text-white mb-4">Team Leader Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { key: 'name', label: 'Name', type: 'text' },
                  { key: 'email', label: 'Email', type: 'email' },
                  { key: 'contact', label: 'Contact Number', type: 'tel' },
                  { key: 'college', label: 'College Name', type: 'text' },
                  { key: 'year', label: 'Year', type: 'text' },
                  { key: 'course', label: 'Course', type: 'text' },
                  { key: 'stream', label: 'Stream', type: 'text' }
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-gray-300 mb-2">{field.label} *</label>
                    <input
                      type={field.type}
                      required
                      value={formData.teamLeader[field.key]}
                      onChange={(e) => setFormData({
                        ...formData,
                        teamLeader: { ...formData.teamLeader, [field.key]: e.target.value }
                      })}
                      className="w-full bg-military-dark/50 border border-military-accent/30 rounded px-4 py-2 text-white focus:outline-none focus:border-military-accent"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-military-accent/20 pt-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">Team Members (Optional, Max 3)</h3>
                {formData.teamMembers.length < 3 && (
                  <button
                    type="button"
                    onClick={addTeamMember}
                    className="bg-military-accent text-military-dark px-4 py-2 rounded font-semibold hover:bg-military-accent/80"
                  >
                    + Add Member
                  </button>
                )}
              </div>
              {formData.teamMembers.map((member, idx) => (
                <div key={idx} className="bg-military-dark/30 p-4 rounded mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-white font-semibold">Member {idx + 1}</h4>
                    <button
                      type="button"
                      onClick={() => removeTeamMember(idx)}
                      className="text-red-500 hover:text-red-400"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      value={member.name}
                      onChange={(e) => handleTeamMemberChange(idx, 'name', e.target.value)}
                      className="bg-military-dark/50 border border-military-accent/30 rounded px-4 py-2 text-white focus:outline-none focus:border-military-accent"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={member.email}
                      onChange={(e) => handleTeamMemberChange(idx, 'email', e.target.value)}
                      className="bg-military-dark/50 border border-military-accent/30 rounded px-4 py-2 text-white focus:outline-none focus:border-military-accent"
                    />
                    <input
                      type="tel"
                      placeholder="Contact"
                      value={member.contact}
                      onChange={(e) => handleTeamMemberChange(idx, 'contact', e.target.value)}
                      className="bg-military-dark/50 border border-military-accent/30 rounded px-4 py-2 text-white focus:outline-none focus:border-military-accent"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-military-accent/20 pt-6">
              <h3 className="text-2xl font-bold text-white mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Problem Statement *</label>
                  <textarea
                    required
                    rows="3"
                    value={formData.project.problemStatement}
                    onChange={(e) => setFormData({
                      ...formData,
                      project: { ...formData.project, problemStatement: e.target.value }
                    })}
                    className="w-full bg-military-dark/50 border border-military-accent/30 rounded px-4 py-2 text-white focus:outline-none focus:border-military-accent"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Project Description *</label>
                  <textarea
                    required
                    rows="5"
                    value={formData.project.description}
                    onChange={(e) => setFormData({
                      ...formData,
                      project: { ...formData.project, description: e.target.value }
                    })}
                    className="w-full bg-military-dark/50 border border-military-accent/30 rounded px-4 py-2 text-white focus:outline-none focus:border-military-accent"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">PPT Upload</label>
                  <input
                    type="file"
                    accept=".ppt,.pptx,.pdf"
                    onChange={(e) => setFiles({ ...files, ppt: e.target.files[0] })}
                    className="w-full bg-military-dark/50 border border-military-accent/30 rounded px-4 py-2 text-white focus:outline-none focus:border-military-accent"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Video Upload</label>
                  <input
                    type="file"
                    accept=".mp4,.avi,.mov"
                    onChange={(e) => setFiles({ ...files, video: e.target.files[0] })}
                    className="w-full bg-military-dark/50 border border-military-accent/30 rounded px-4 py-2 text-white focus:outline-none focus:border-military-accent"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Additional Links</label>
                  <input
                    type="text"
                    value={formData.project.additionalLinks}
                    onChange={(e) => setFormData({
                      ...formData,
                      project: { ...formData.project, additionalLinks: e.target.value }
                    })}
                    className="w-full bg-military-dark/50 border border-military-accent/30 rounded px-4 py-2 text-white focus:outline-none focus:border-military-accent"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-military-accent text-military-dark font-bold py-4 rounded-lg hover:bg-military-accent/80 transition-all disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Submit Registration'}
            </button>

            {message && (
              <div className={`p-4 rounded ${message.includes('success') ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'}`}>
                {message}
              </div>
            )}
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Registration;
