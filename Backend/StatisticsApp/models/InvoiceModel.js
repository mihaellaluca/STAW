const mongoose = require('mongoose');

let productInvoice = new mongoose.Schema({
	id: String,
	name: String,
	model: String,
	price: Number,
	producer: String,
	nrOfUnits: Number
});

let invoiceSchema = new mongoose.Schema({
	userId: String,
	products: [ productInvoice ],
	totalPrice: Number,
	date: Date
});

module.exports = mongoose.model('invoices', invoiceSchema);
