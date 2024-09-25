const express = require('express');
const cors = require('cors');
const connectDB = require('./utilities/db_connection'); // Import database connection
const regRouter = require('./routes/reg_router'); // Import registration router

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const corsOptions = {
  origin: 'http://localhost:5173', // Allow this origin to access the API
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
  credentials: true, // Enable cookies to be sent
};

// Middleware
app.use(cors(corsOptions)); 
app.use(express.json()); // To parse JSON requests

// Connect to the database
connectDB();

// Use the registration router
app.use('/', regRouter); // Pass registration router to handle /register routes

// Sample route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
