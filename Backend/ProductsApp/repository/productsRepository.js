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
		},
		putProducts(datas) {
			//console.log(datas);
			if (!datas.msg) {
				Product.collection.insertMany(datas, (err, docs) => {
					if (err) {
						console.log(err);
					} else {
						console.log('mission acomplished');
					}
				});
			}
		},
		async getById(id) {
			return Product.findById(id).exec();
		}
	};
};
