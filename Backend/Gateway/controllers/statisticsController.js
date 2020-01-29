const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.post('/', async (req, res) => {
	var status = 0;
	let bodyjson = JSON.stringify(req.body);
	fetch('http://localhost:3003/invoice/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: bodyjson
	})
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
	fetch(`http://localhost:3003/invoice/${req.params['id']}`)
		.then((response) => {
			status = response.status;
			return response.json();
		})
		.then((message) => {
			res.status(status).send(message);
		});
});

module.exports = router;
