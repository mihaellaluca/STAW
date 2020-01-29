const mongoose = require('mongoose');
const Invoice = require('../models/InvoiceModel.js');

module.exports = function repository() {
	mongoose.connect(
		'mongodb+srv://Electrik:Electrik@electrik-zcz1p.mongodb.net/InvoiceDB?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		}
	);
	return {
		async addInvoice(data) {
			let invoice = new Invoice({
				userId: data.userId,
				products: data.products,
				totalPrice: data.totalPrice,
				date: Date.now()
			});
			return invoice.save();
		},
		async getInvoicesByUserId(id) {
			return Invoice.find({ userId: id }).exec();
		}
	};
};
