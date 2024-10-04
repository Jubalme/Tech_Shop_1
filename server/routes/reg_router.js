// routes/reg_router.js
const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/user_reg');

// POST route for user registration
router.post('/', registerUser);

module.exports = router;
