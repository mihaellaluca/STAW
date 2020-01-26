const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const port = 3002;
const app = express();
const productRouter = require('./controllers/products.js');
app.use(bodyParser.json());

app.use('/products', productRouter);

app.listen(port, () => {
	fetch('http://localhost:4003').then((res) => res.json()).then((data) => {});
	console.log(`Server listens at port ${port}`);
});
