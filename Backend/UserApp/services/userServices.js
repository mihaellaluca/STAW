const repository = require('../repository/userRepository.js');
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
					data: 'email already used'
				};
		}
	};
};
