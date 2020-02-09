const mongoose = require('mongoose');

let CoordsSchema = new mongoose.Schema({
	lat: Number,
	lng: Number
});

module.exports = mongoose.model('Coords', CoordsSchema);
