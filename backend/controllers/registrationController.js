const Registration = require('../models/Registration');

exports.createRegistration = async (req, res) => {
  try {
    const registrationData = {
      ...req.body,
      project: {
        ...req.body.project,
        pptUrl: req.files?.ppt ? req.files.ppt[0].path : '',
        videoUrl: req.files?.video ? req.files.video[0].path : ''
      }
    };

    const registration = new Registration(registrationData);
    await registration.save();

    res.status(201).json({
      success: true,
      message: 'Registration submitted successfully',
      data: registration
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

exports.getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: registrations.length,
      data: registrations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
