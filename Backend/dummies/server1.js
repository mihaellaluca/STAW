const express = require('express');
const port = 4001;
const app = express();

const products = [
	{
		name:
			'Baterie reincarcabila Lipo, 3.7V, 600 mAh , pentru Rc Quadricotteri Syma X5 X5C X5SC X5SW, Cheerson CX-30W, Skytech M68, Wltoys F949,1 set de 1 buc.',
		type: 'drona',
		description:
			'Potrivit pentru Syma X5 X5C X5SC X5SW, Cheerson CX-30W, Skytech M68, Wltoys F9491 bucata Baterie 600 mAh 3.7V Furnizor italian Dimensiunea bateriei: 42 x 24,5 x 8,5 mm Toate bateriile si incarcatoarele au trecut testul de calitate si pot garanta utilizarea pe termen lung',
		stock: 300,
		price: 65,
		producer: ' Yunique',
		coordinates: [
			{
				lat: 1,
				long: 0
			},
			{
				lat: 2,
				long: 3
			}
		]
	},
	{
		name:
			'Set de 3 piese Lipo baterii 3.7 V 500 mAh, pentru Quadcopter Rc Syma X5 X5C X5SC X5SW, Cheerson CX-30W, Skytech M68, Wltoys F949',
		type: 'drona',
		description:
			'Potrivit pentru Syma X5 X5C X5SC X5SW, Cheerson CX-30W, Skytech M68, Wltoys F949 3 bucati Baterie 500 mAh 3.7V Furnizor italian Baterii dimensiuni: 42x24.5x7.5 mm Toate bateriile si incarcatoarele au trecut testul de calitate si pot garanta utilizarea pe termen lung.  ',
		stock: 200,
		price: 99,
		producer: ' Yunique',
		coordinates: [
			{
				lat: 1,
				long: 0
			},
			{
				lat: 2,
				long: 3
			}
		]
	},
	{
		name: 'Set de incarcator + 5 acumulatori pentru HUBSAN x4 H107C , 3.7V, 500mAh',
		type: 'drona',
		description: `Dronele sunt niste gadgeturi foarte interesante cu care ne putem distra destul de mult timp. Din pacate insa, capacitatea bateriilor cu care ele vin este de cele mai multe ori destul de mica, probabil insuficient pentru o singura utilizare.

        La fel cum pentru alte gadgeturi exista baterii de schimb pentru a nu ne limita distractia, la fel putem proceda si cu dronele. 
        
        Astfel, firma noastra va ofera un pachet cu 5 acumulatori de schimb cu o capacitate de 500 mAh fiecare, compatibil cu Drona HUBSAN x4 H107C.
        
        Aceste baterii LiPo sunt de inalta calitate si va ofera un zbor de aproximativ 7-8 minute, gratie capacitatii lor de 500mAh.
        
        Usor de schimbat
        De cele mai multe ori este destul de dificil sa scoateti bateria din drona. Astfel, am decis sa adaugam la aceste baterii un mecanism de care sa puteti trage cu usurinta, pentru a nu mai fi nevoiti sa le scoateti tragand de cablurile electrice.
        
        Spatiu de numerotare
        Pentru a tine evidenta bateriilor dvs LiPo este de ajutor sa le puteti numerota. Am lasat un loc special pe fiecare baterie unde puteti scrie numarul ei, astfel o sa fie mai usor sa stiti ce baterie este incarcata sai ce baterie trebuie sa o incarcati.
        
        Dimensiuni: 43mm x 19mm x 8mm 
        Greutate: 12.6 grame fiecare
        Durata incarcare: intre 40-50 minute
        
        De asemenea, in acest pachet veti gasi si un incarcator special ce poate incarca cei cinci acumulatori simultan.
        
        Drone compatibile: Hubsan X4 H107L, H107C, H107D, H107P, H108 si Walkera Super CP, V252, JXD385, UDI U816A, JJRC H6C, Mini CP, Genius CP, Holy Stone F180C`,
		stock: 200,
		price: 140,
		producer: ' HUBSAN',
		coordinates: [
			{
				lat: 1,
				long: 0
			},
			{
				lat: 2,
				long: 3
			}
		]
	},
	{
		name:
			'Baterii Lipo Hubsan X4 H107L H107L H107L H107 V252 JXD 385, 3.7V 380mAh, 1 set de 4 baterii si un incarcator',
		type: 'drona',
		description: `4 bucati de baterie de 380 mAh

        ideal pentru HUBSAN X4
        
        timp de zbor 7 minute
        
        1 incarcator de la 1 la 4
        
        Masuratori: 38x 20 x 8 milimetri`,
		stock: 200,
		price: 130,
		producer: ' HUBSAN',
		coordinates: [
			{
				lat: 1,
				long: 0
			},
			{
				lat: 2,
				long: 3
			}
		]
	},
	{
		name: 'Baterie HRB LiPo pentru elicoptere FPV Quadcopter Drone, 6000mAh 7.4V 60C 2S, 1 buc',
		type: 'drona',
		description: `Tip produs: baterie lipo
        Capacitate: 6000mAh, Tensiune: 7.4V, Max scurgere continua: 60C, descarcare maxima Burst: 120C
        Conector de echilibru: JST-XHR, Conector de evacuare: Conector T.
        Greutate: 308g, Dimensiuni: 138 * 46 * 26mm
        Aplicatii: 1/8 & 1/10 modele de masini RC cum ar fi Traxxas Slash, Emaxx, Bandit, versiunea Rustler, HPI Road XB 1/10 RTR Electric Buggy, Kyosho GP 4WD Racing Truck etc. Team Associated SC8, etc`,
		stock: 200,
		price: 130,
		producer: 'Yunique',
		coordinates: [
			{
				lat: 1,
				long: 0
			},
			{
				lat: 2,
				long: 3
			}
		]
	}
];

app.get('/', (req, res) => {
	res.send(products);
});

app.listen(port, () => {
	console.log(`Server listens at port ${port}`);
});
