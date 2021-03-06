const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Product = require('./ProductModel');
const Coords = require('./Coords.js');
const fetch = require('node-fetch');
const fs = require('fs');
const port = 4003;
const app = express();
mongoose.connect('mongodb+srv://Electrik:Electrik@electrik-zcz1p.mongodb.net/Dummy3?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

coords = [
	{
		lat: 9.34,
		lng: 8.4
	},
	{
		lat: 7.654,
		lng: 56.12
	},
	{
		lat: 16.13241,
		lng: 45.45
	},
	{
		lat: 76.34,
		lng: 15.1231
	},
	{
		lat: 16.23,
		lng: 36.123
	},
	{
		lat: 44.11,
		lng: 54.213
	}
];

app.use(bodyParser.json());

app.get('/populate', (req, res) => {
	Coords.collection.insertMany(coords, (err, docs) => {
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
		modified: {
			name: modification.name,
			newPrice: req.body.price
		}
	};
	let msgjson = JSON.stringify(msg);
	await sendUpdates(msgjson);
	res.send('updated');
});
app.post('/', async (req, res) => {
	let prod = new Product(req.body);
	await prod.save();
	let msg = {
		type: 'new item',
		modified: req.body
	};
	let msgjson = JSON.stringify(msg);
	await sendUpdates(msgjson);
	res.send('added');
});

app.post('/subscribe', async (req, res) => {
	await fs.readFile('server3subs.txt', async (err, data) => {
		if (err) console.log(err);
		else {
			//console.log(data.toString());
			let subs = data.toString();
			let alreadySubbed = subs.search(req.body.link);
			//console.log(alreadySubbed);
			if (alreadySubbed == -1) {
				subs += `${req.body.link},`;
				await fs.writeFile('server3subs.txt', subs, async (err, data) => {
					if (err) res.status(400).send('failed');
					else {
						try {
							let readyProducts = [];
							let products = await Product.find().exec();
							products.forEach((element) => {
								let newElem = {
									name: element.name,
									description: element.description,
									stock: element.stock,
									price: element.price,
									producer: element.producer,
									type: element.type,
									coordinates: element.coordinates
								};
								readyProducts.push(newElem);
							});
							let cor = await Coords.find().exec();
							let data = {
								prod: readyProducts,
								coordinates: cor
							};
							res.status(200).send(data);
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
	await fs.readFile('server3subs.txt', async (err, data) => {
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
