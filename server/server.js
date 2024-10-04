// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./utilities/db_connection');
const regRouter = require('./routes/reg_router');
require('dotenv').config(); // Load environment variables

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // To parse incoming JSON data

// Enable CORS for requests from your frontend
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend URL
  credentials: true, // Allow cookies/auth headers if needed
}));

// Routes
app.use('/api/register', regRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
