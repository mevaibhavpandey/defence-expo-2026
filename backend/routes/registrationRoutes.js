const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { createRegistration, getAllRegistrations } = require('../controllers/registrationController');

router.post('/', upload.fields([
  { name: 'ppt', maxCount: 1 },
  { name: 'video', maxCount: 1 }
]), createRegistration);

router.get('/', getAllRegistrations);

module.exports = router;
