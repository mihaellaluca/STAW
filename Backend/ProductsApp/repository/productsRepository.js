const mongoose = require('mongoose');
const Product = require('../models/ProductModel.js');
const Coords = require('../models/CoordsModel.js');
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
		async getAllCoords() {
			return Coords.find().exec();
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
		},
		putCoords(datas) {
			//console.log(datas);
			if (!datas.msg) {
				Coords.collection.insertMany(datas, (err, docs) => {
					if (err) {
						console.log(err);
					} else {
						console.log('mission acomplished');
					}
				});
			}
		},
		async addProduct(data) {
			console.log(data);
			let product = new Product({
				name: data.name,
				description: data.description,
				stock: data.stock,
				price: data.price,
				producer: data.producer,
				type: data.type,
				coordinates: data.coordinates
			});
			return product.save();
		},
		async modifyProduct(name, price) {
			console.log(price);
			await Product.updateOne(
				{
					name: name
				},
				{
					$set: {
						price: price
					}
				},
				function(err, product) {
					if (err) throw error;
					//console.log(product);
					//console.log('update product complete');
				}
			);
			return Product.findOne({ name: name }).exec();
		}
	};
};
