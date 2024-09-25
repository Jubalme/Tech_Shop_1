const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/user_reg');

// POST /register route
router.post('/register', registerUser); // Ensure it matches with your frontend request

module.exports = router;
