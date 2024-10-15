const express = require('express');
const { getDestinationInsights } = require('../controllers/destinationController');

const router = express.Router();

// AI-generated destination insights route
router.post('/get-destination-insights', getDestinationInsights);

module.exports = router;
