const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const port = 3002;
const app = express();
const repository = require('./repository/productsRepository.js');
const productRouter = require('./controllers/products.js');

app.use(bodyParser.json());

app.use('/products', productRouter);

app.listen(port, () => {
	const repo = new repository();
	// fetch('http://localhost:4003').then((res) => res.json()).then((data) => {
	// 	repo.putProducts(data);
	// });
	// fetch('http://localhost:4002').then((res) => res.json()).then((data) => {
	// 	repo.putProducts(data);
	// });
	fetch('http://localhost:4001/subscribe', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: `{"link":"http://localhost:3002/products/updates"}`
	})
		.then((res) => res.json())
		.then((data) => {
			repo.putProducts(data);
		});
	console.log(`Server listens at port ${port}`);
});
