const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const auth = require('./verifyToken.js');

router.use(auth);

router.get('/', async (req, res) => {
	var status = 0;
	fetch(`http://localhost:3002/products/`)
		.then((response) => {
			status = response.status;
			return response.json();
		})
		.then((message) => {
			res.status(status).send(message);
		});
});
router.get('/coords', async (req, res) => {
	var status = 0;
	fetch(`http://localhost:3002/products/coords`)
		.then((response) => {
			status = response.status;
			return response.json();
		})
		.then((message) => {
			res.status(status).send(message);
		});
});
router.get('/rss/feed', async (req, res) => {
	fetch(`http://localhost:3002/products/rss/feed`)
		.then((response) => {
			return response.json();
		})
		.then((message) => {
			res.send(message.msg);
		});
});
router.get('/:id', async (req, res) => {
	var status = 0;
	fetch(`http://localhost:3002/products/${req.params['id']}`)
		.then((response) => {
			status = response.status;
			return response.json();
		})
		.then((message) => {
			res.status(status).send(message);
		});
});

module.exports = router;
