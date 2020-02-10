const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const port = 3000;
const app = express();
const productRouter = require('./controllers/productsController.js');
const userRouter = require('./controllers/userController.js');
const invoiceRouter = require('./controllers/statisticsController.js');
app.use(cors());
app.use(bodyParser.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/invoices', invoiceRouter);
app.get('/rss', async (req, res) => {
	fetch(`http://localhost:3002/products/rss/feed`)
		.then((response) => {
			return response.json();
		})
		.then((message) => {
			res.send(message.msg);
		});
});
app.listen(port, () => {
	console.log(`Server listens at port ${port}`);
});
