const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    model: { type: String, required: true },
    pricePerDay: { type: Number, required: true },
    available: { type: Boolean, default: true },
});

module.exports = mongoose.model('Car', carSchema);
