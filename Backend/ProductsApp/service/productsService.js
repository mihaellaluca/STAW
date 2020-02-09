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
		async getAllCoords() {
			try {
				let coords = await repo.getAllCoords();
				let justCoords = [];
				coords.forEach((coordinate) => {
					let cor = {
						lat: coordinate.lat,
						lng: coordinate.lng
					};
					justCoords.push(cor);
				});
				return {
					status: 200,
					data: justCoords
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
		},
		async processUpdates(data) {
			try {
				if (data.type == 'new item') {
					let newProduct = await repo.addProduct(data.modified);
				} else {
					await repo.modifyProduct(data.modified.name, data.modified.newPrice);
				}
			} catch (err) {}
		}
	};
};
