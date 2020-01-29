const express = require('express');
const bodyParser = require('body-parser');
const port = 3003;
const app = express();
const invoiceRouter = require('./controllers/invoices.js');
app.use(bodyParser.json());

app.use('/invoice', invoiceRouter);

app.listen(port, () => {
	console.log(`Server listens at port ${port}`);
});
