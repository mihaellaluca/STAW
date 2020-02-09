const repository = require('../repository/productsRepository.js');
module.exports = function service() {
	const repo = repository();
	return {
		async getAllProducts() {
			try {
				let products = await repo.getAllProducts();
				return {
					status: 200,
					data: products
				};
			} catch (err) {
				return {
					status: 400,
					data: err
				};
			}
		},
		async getProductById(id) {
			try {
				let product = await repo.getById(id);
				if (product == null) {
					return {
						status: 400,
						data: { code: 'product does not exist' }
					};
				} else {
					return {
						status: 200,
						data: product
					};
				}
			} catch (err) {
				return {
					status: 400,
					data: err
				};
			}
		}
	};
};
