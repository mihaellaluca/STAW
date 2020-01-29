const express = require('express');
const bodyParser = require('body-parser');
const port = 3001;
const app = express();
const userRouter = require('./controllers/users.js');
app.use(bodyParser.json());

app.use('/users', userRouter);

app.listen(port, () => {
	console.log(`Server listens at port ${port}`);
});
