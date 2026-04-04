const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true }
});

const registrationSchema = new mongoose.Schema({
  teamName: { type: String, required: true },
  teamLeader: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    college: { type: String, required: true },
    year: { type: String, required: true },
    course: { type: String, required: true },
    stream: { type: String, required: true }
  },
  teamMembers: [teamMemberSchema],
  project: {
    problemStatement: { type: String, required: true },
    description: { type: String, required: true },
    pptUrl: { type: String },
    videoUrl: { type: String },
    additionalLinks: { type: String }
  },
  status: { type: String, default: 'pending', enum: ['pending', 'approved', 'rejected'] },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Registration', registrationSchema);
