const express = require('express');
const router = express.Router();
const service = require('../services/userServices.js');
const services = service();
router.post('/register', async (req, res) => {
	let { status, data } = await services.register(req.body);
	res.status(status).send(data);
});

module.exports = router;
