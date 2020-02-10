const repository = require('../repository/userRepository.js');
const jwt = require('jsonwebtoken');
module.exports = function service() {
	const repo = repository();
	return {
		async register(Userdata) {
			try {
				var check = await repo.findByEmail(Userdata.email);
			} catch (err) {
				console.log(err);
			}
			if (check === null) {
				console.log(check);
				try {
					let registeredUser = await repo.addUser(Userdata);

					return {
						status: 200,
						data: registeredUser
					};
				} catch (err) {
					return {
						status: 400,
						data: err
					};
				}
			} else
				return {
					status: 400,
					data: { code: 'email already used' }
				};
		},
		async getUserById(id) {
			try {
				var user = await repo.findById(id);

				if (user == null)
					return {
						status: 400,
						data: { code: 'user does not exist' }
					};
				else
					return {
						status: 200,
						data: user
					};
			} catch (err) {
				return {
					status: 500,
					data: err
				};
			}
		},
		async addFavorite(data) {
			try {
				let user = await repo.updateUserFavorites(data);
				if (user == null) {
					return {
						status: 400,
						data: { code: 'something went wrong' }
					};
				} else {
					return {
						status: 200,
						data: user
					};
				}
			} catch (err) {
				return {
					status: 400,
					data: err
				};
			}
		},
		async removeFavorite(data) {
			try {
				let user = await repo.removeUserFavorite(data);
				if (user == null) {
					return {
						status: 400,
						data: { code: 'something went wrong' }
					};
				} else {
					return {
						status: 200,
						data: user
					};
				}
			} catch (err) {
				return {
					status: 400,
					data: err
				};
			}
		},
		async login(data) {
			try {
				let credentials = await repo.findByEmail(data.email);
				if (credentials == null)
					return {
						status: 400,
						data: { code: 'email or password wrong' }
					};
				if (credentials.password !== data.password)
					return {
						status: 400,
						data: { code: 'email or password wrong' }
					};
				const token = jwt.sign({ _id: credentials._id }, 'secretForToken', { expiresIn: '2h' });
				return {
					status: 200,
					data: {
						id: credentials._id,
						token: token
					}
				};
			} catch (err) {
				return {
					status: 400,
					data: err
				};
			}
		}
	};
};
