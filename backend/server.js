require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const registrationRoutes = require('./routes/registrationRoutes');

const app = express();

// Connect to MongoDB (optional - will work without it)
connectDB().catch(err => {
  console.log('MongoDB not connected. Registration features will be limited.');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.use('/api/registrations', registrationRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Defence Expo API Running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
