const express = require('express');
const router = express.Router();
const service = require('../services/invoiceService.js');
const services = service();

router.post('/', async (req, res) => {
	let { status, data } = await services.addInvoice(req.body);
	res.status(status).send(data);
});
router.get('/:id', async (req, res) => {
	let { status, data } = await services.getInvoicesByUserId(req.params['id']);
	res.status(status).send(data);
});

module.exports = router;
