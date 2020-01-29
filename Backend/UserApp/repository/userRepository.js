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
		},
		async findById(id) {
			let query = User.findById(id);
			return query.exec();
		},
		async updateUserFavorites(data) {
			let query = User.findOneAndUpdate({ _id: data.userId }, { $push: { favoriteProducts: data.productId } });
			return query.exec();
		},
		async removeUserFavorite(data) {
			let query = User.findOneAndUpdate({ _id: data.userId }, { $pull: { favoriteProducts: data.productId } });
			return query.exec();
		}
	};
};
