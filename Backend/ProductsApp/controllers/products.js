const express = require('express');
const router = express.Router();
const service = require('../service/productsService.js');
const services = service();
router.get('/', async (req, res) => {
	let { status, data } = await services.getAllProducts();
	res.status(status).send(data);
});
router.get('/coords', async (req, res) => {
	let { status, data } = await services.getAllCoords();
	res.status(status).send(data);
});
router.get('/:id', async (req, res) => {
	let { status, data } = await services.getProductById(req.params['id']);
	res.status(status).send(data);
});
router.post('/updates', async (req, res) => {
	console.log(req.body);
	await services.processUpdates(req.body);
});
router.get('/rss/feed', (req, res) => {
	let msg = { msg: services.returnRssFeed() };
	res.send(msg);
});
router.post('/subscribe', (req, res) => {
	const subscription = req.body;
	services.subscribe(subscription);
});
module.exports = router;
