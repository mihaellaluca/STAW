const express = require('express');
const router = express.Router();
const service = require('../service/productsService.js');
const services = service();
router.get('/', async (req, res) => {
	let { status, data } = await services.getAllProducts();
	res.status(status).send(data);
});

module.exports = router;
