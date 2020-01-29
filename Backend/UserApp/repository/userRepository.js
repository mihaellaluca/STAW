const mongoose = require('mongoose');
const User = require('../models/UserModel.js');

module.exports = function repository() {
	mongoose.connect('mongodb+srv://Electrik:Electrik@electrik-zcz1p.mongodb.net/UserDB?retryWrites=true&w=majority', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
	return {
		async addUser(userData) {
			//console.log(userData.firstName);
			let user = new User({
				userRights: 0,
				firstName: userData.firstName,
				lastName: userData.lastName,
				email: userData.email,
				password: userData.password,
				favoriteProducts: []
			});
			return user.save();
		},
		async findByEmail(email) {
			let query = User.findOne({ email: email });
			return query.exec();
		}
	};
};
