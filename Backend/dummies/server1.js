const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Product = require('./ProductModel');
const fetch = require('node-fetch');
const fs = require('fs');
const port = 4001;
const app = express();
mongoose.connect('mongodb+srv://Electrik:Electrik@electrik-zcz1p.mongodb.net/DummyOne?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
app.use(bodyParser.json());

app.get('/populate', (req, res) => {
	Product.collection.insertMany(products, (err, docs) => {
		if (err) {
			console.log(err);
		} else {
			console.log('mission acomplished');
			res.send('yey');
		}
	});
});
app.patch('/:id', async (req, res) => {
	let productModified = await Product.findById(req.params['id']);
	productModified.price = req.body.price;
	let modification = await productModified.save();
	let msg = {
		type: 'price change',
		modified: modification
	};
	let msgjson = JSON.stringify(msg);
	await sendUpdates(msgjson);
	res.send('updated');
});
app.post('/', async (req, res) => {
	let prod = new Product(req.body);
	await prod.save();
	res.send('added');
});

app.post('/subscribe', async (req, res) => {
	await fs.readFile('server1subs.txt', async (err, data) => {
		if (err) console.log(err);
		else {
			//console.log(data.toString());
			let subs = data.toString();
			let alreadySubbed = subs.search(req.body.link);
			//console.log(alreadySubbed);
			if (alreadySubbed == -1) {
				subs += `${req.body.link},`;
				await fs.writeFile('server1subs.txt', subs, async (err, data) => {
					if (err) res.status(400).send('failed');
					else {
						try {
							let products = await Product.find().exec();
							res.status(200).send(products);
						} catch (err) {
							console.log(err);
						}
					}
				});
			} else res.status(400).send(`{"msg":"already subbed"}`);
		}
	});
});

app.listen(port, () => {
	console.log(`Server listens at port ${port}`);
});

async function sendUpdates(msgjson) {
	await fs.readFile('server1subs.txt', async (err, data) => {
		if (err) console.log(err);
		else {
			let subs = data.toString().split(',');
			console.log(subs);
			subs.forEach((sub) => {
				console.log(typeof sub);
				if (sub !== '') {
					fetch(sub, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: msgjson
					}).then((resp) => {
						console.log(resp.status);
					});
				}
			});
		}
	});
}
