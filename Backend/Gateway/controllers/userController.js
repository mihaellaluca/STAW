const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.post('/register', async (req, res) => {
	var status = 0;
	let bodyjson = JSON.stringify(req.body);
	fetch('http://localhost:3001/users/register', {
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
	fetch(`http://localhost:3001/users/${req.params['id']}`)
		.then((response) => {
			status = response.status;
			return response.json();
		})
		.then((message) => {
			res.status(status).send(message);
		});
});
router.post('/addFavorite', async (req, res) => {
	var status = 0;
	let bodyjson = JSON.stringify(req.body);
	fetch('http://localhost:3001/users/addFavorite', {
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
router.post('/removeFavorite', async (req, res) => {
	var status = 0;
	let bodyjson = JSON.stringify(req.body);
	fetch('http://localhost:3001/users/removeFavorite', {
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
router.post('/login', async (req, res) => {
	var status = 0;
	let bodyjson = JSON.stringify(req.body);
	fetch('http://localhost:3001/users/login', {
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

module.exports = router;
