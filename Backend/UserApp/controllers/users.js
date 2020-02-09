const express = require('express');
const router = express.Router();
const service = require('../services/userServices.js');
const services = service();
router.post('/register', async (req, res) => {
	let { status, data } = await services.register(req.body);
	res.status(status).send(data);
});
router.get('/:id', async (req, res) => {
	let { status, data } = await services.getUserById(req.params['id']);
	res.status(status).send(data);
});
router.post('/addFavorite', async (req, res) => {
	let { status, data } = await services.addFavorite(req.body);
	res.status(status).send(data);
});
router.post('/removeFavorite', async (req, res) => {
	let { status, data } = await services.removeFavorite(req.body);
	res.status(status).send(data);
});
router.post('/login', async (req, res) => {
	let { status, data } = await services.login(req.body);
	res.status(status).send(data);
});

module.exports = router;
