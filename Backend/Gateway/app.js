const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
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

app.listen(port, () => {
	console.log(`Server listens at port ${port}`);
});
