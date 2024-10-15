const express = require('express');
const { bookHotel } = require('../controllers/bookingController');

const router = express.Router();

// API Routes
router.post('/book-hotel', bookHotel);

// Add more routes as needed

module.exports = router;
