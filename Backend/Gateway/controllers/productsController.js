const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

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