const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
	userRights: Number,
	email: String,
	firstName: String,
	lastName: String,
	password: String,
	favoriteProducts: [ String ]
});

module.exports = mongoose.model('Users', UserSchema);
