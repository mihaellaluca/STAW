const repository = require('../repository/statisticRepository.js');
module.exports = function service() {
	const repo = repository();
	return {
		async addInvoice(data) {
			try {
				let invoice = await repo.addInvoice(data);
				if (invoice == null) {
					return {
						status: 400,
						data: 'something went wrong'
					};
				} else {
					return {
						status: 200,
						data: invoice
					};
				}
			} catch (err) {
				return {
					status: 400,
					data: err
				};
			}
		},
		async getInvoicesByUserId(id) {
			try {
				let invoices = await repo.getInvoicesByUserId(id);
				if (invoices == null) {
					return {
						status: 400,
						data: 'there are no invoices here'
					};
				} else {
					return {
						status: 200,
						data: invoices
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
