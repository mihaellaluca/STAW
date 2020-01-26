const mongoose = require('mongoose');
const Product = require('../models/ProductModel.js');

module.exports = function repository() {
	mongoose.connect(
		'mongodb+srv://Electrik:Electrik@electrik-zcz1p.mongodb.net/ProductDB?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		}
	);
	return {
		async getAllProducts() {
			return Product.find().exec();
		}
	};
};
