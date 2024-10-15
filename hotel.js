const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    available: { type: Boolean, default: true },
});

module.exports = mongoose.model('Hotel', hotelSchema);
