const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    flightNumber: { type: String, required: true },
    destination: { type: String, required: true },
    price: { type: Number, required: true },
    available: { type: Boolean, default: true },
});

module.exports = mongoose.model('Flight', flightSchema);
