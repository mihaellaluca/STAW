const mongoose = require('mongoose');

let ProductSchema = new mongoose.Schema({
	name: String,
	description: String,
	stock: Number,
	price: Number,
	producer: String,
	type: String,
	chargingStationCoordinates: [
		{
			lat: Number,
			long: Number
		}
	]
});

module.exports = mongoose.model('Products', ProductSchema);
