# Defence Technology Expo 2026 - ASTRA

A modern, premium defence-themed full-stack website for the Defence Technology Expo hosted by BMSIT, Bengaluru.

## Features

- Modern defence-themed UI with tactical grid animations
- Responsive design with Tailwind CSS
- Smooth animations using Framer Motion
- Full registration system with file uploads
- MongoDB database integration
- RESTful API with Express.js

## Tech Stack

### Frontend
- React 18
- React Router DOM
- Tailwind CSS
- Framer Motion
- Axios
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Multer (file uploads)
- CORS

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables in `.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/defence-expo
NODE_ENV=development
```

4. Start the server:
```bash
npm run dev
```

Backend will run on http://localhost:5000

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

Frontend will run on http://localhost:3000

## Project Structure

```
├── backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # Request handlers
│   ├── middleware/      # File upload middleware
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── uploads/         # Uploaded files
│   └── server.js        # Entry point
│
├── frontend/
│   ├── public/          # Static files
│   └── src/
│       ├── components/  # Reusable components
│       ├── pages/       # Page components
│       ├── utils/       # Utility functions
│       ├── App.js       # Main app component
│       └── index.js     # Entry point
```

## Pages

- **Home**: Hero section with event overview
- **About**: Information about BMSIT and ASTRA club
- **Event Details**: Competition details, evaluation panel, prizes
- **Schedule**: Timeline of event activities
- **Guests**: Chief guests information
- **Registration**: Dynamic registration form with file uploads
- **Contact**: Contact information and message form

## API Endpoints

### Registrations
- `POST /api/registrations` - Create new registration
- `GET /api/registrations` - Get all registrations

## Event Details

- **Date**: 30 April 2026
- **Venue**: BMSIT, Bengaluru
- **Prize Pool**: ₹30,000
- **Chief Guests**: 
  - Brigadier B. M. Cariappa (Confirmed)
  - Group Captain Shubhanshu Shukla (Tentative)

## License

This project is created for ASTRA - BMSIT Defence Technology Expo 2026.
