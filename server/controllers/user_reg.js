// controllers/user_reg.js
const User = require('../models/user_model');

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    user = new User({ name, email, password });

    // Save the user to the database
    await user.save();

    return res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error.message);
    return res.status(500).json({ message: 'Server error' });
  }
};
