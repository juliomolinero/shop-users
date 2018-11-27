const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Let's use Controller approach instead
const UserController = require('../controllers/users');

// Check user exists and credentials are correct
router.post('/signup', UserController.user_signup);

// make it visible
module.exports = router;