const User = require('../models/userModel');

exports.signup = (req, res) => {
  const { email, password } = req.body;
  User.create(email, password, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ message: 'User created successfully' });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  User.find(email, password, (err, user) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    res.json({ message: 'Login successful' });
  });
};
