const express = require('express');
const mongoose = require('mongoose');
const port = 4002;
const app = express();
mongoose.connect('mongodb+srv://Electrik:Electrik@electrik-zcz1p.mongodb.net/Dummy2?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const products = [
	{
		name: 'Bafang 340 E-Bike Battery 43V 340Wh Canbus/UART - Black',
		type: 'bicicleta',
		description: `Battery for your Bafang e-bike, the battery is 43v, 340WH, 7.9Ah and does not include a removal fee.
        Suitable for UART and Canbus.
        
        Specifications:
        Brand: Bafang
        Model: 340
        Nominal voltage (DCV): 43
        Nominal capacity (Ah): 7.9
        Energy content (Wh): 340
        COM protocol: UART / CANBUS
        BMS: Slim BMS
        Voltage Scope (V): 36 ~ 49.2
        Internal resistance (mO): <240
        CC-CV charging mode: (special 5P charger)
        Continuous charging current (A): 2-4
        Charging time: 6.5 hours with 3A charger
        Max. continuous drain flow (A): 23
        Dimensions (mm): 408 * 123 * 70
        Weight (kg): 4
        IP code: IP 65
        Certificates: CE/UN 38.3
        Color: Black`,
		stock: 860,
		price: 1200,
		producer: ' Bafang',
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
		name: 'Cortina Battery 300 Ecomo 36v 313 Wh CAN-bus',
		type: 'bicicleta',
		description: `Original bike battery for the Cortina Ecomo
        To replace an existing battery or be used as an extra (spare) battery.
        This Ecomo 300 battery is an original Cortian battery and has a range of about 25 to 110 km.
        
        Battery charging time:
        Type 300 400 500
        Normal charging (2 Ampère) 4:30 pm 6:00 pm 8:00 pm
        Fast-charge time (4 Ampère) 2:15 pm 3:00 pm 4:00 pm
        
        Specifications:
        Voltage: 36V
        Capacity: 8.7Ah
        Wh: 313
        Battery: Rear carrier
        Weight: +/- 3.3 kg
        Range: 25/110 km
        Engine position: Front Wheel
        Color: Black
        
        Hollandbikeshop.com has the Cortina Battery 300 Ecomo 36v 313 Wh CAN-bus you're looking for.
        Do you own a Cortina bicycle and are you looking for replacement Cortina parts?
        Want to make sure these parts fit your Cortina bicycle?
        Send a message to sales@hollandbikeshop.com including your frame number,
        photos, additional information and/or other parts you're looking for.
        The frame number is usually located either on the seat tube, near the bottom bracket or on the chain stay.
        The Cortina frame number (bar code) often starts with a 'C'.
        We'll be happy to assist you.`,
		stock: 920,
		price: 65,
		producer: ' Cortina',
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
		name: 'HLS I+II Battery 36V / 5.8Ah Rod-Battery',
		type: 'bicicleta',
		description: `HLSI+II battery
        36 V 5,8Ah, storage battery.`,
		stock: 920,
		price: 589,
		producer: ' HLS',
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
		name: 'Bafang E-Bike Battery 43V 10.4Ah 447Wh - Black',
		type: 'bicicleta',
		description: `BAFANG Battery 43V 10,4 Ah,
        suitable for Victoria E Classic
        Original number 2111020000027.`,
		stock: 810,
		price: 999,
		producer: 'Bafang',
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
		name: 'E-Motion E-300 V2.0 E-Bike Battery Silver',
		type: 'bicicleta',
		description: `This original Batavus/Sparta/Koga E-Motion E-300 Series battery can be used as a spare battery for your e-bike or as a replacement.

        A battery pack of an e-bike gradually loses its ability in the course of time.
        With a new battery, you can enjoy nice bike rides again, because your range will be optimal again.
        In addition to the E-300, there is also the E-400 battery and E-500 available battery, with a bigger radius of action.
        
        Suitable for, inter alia, the following bicycles:
        
        Sparta M7e
        Sparta M8e
        Sparta F8e
        Sparta E-Motion C3
        Sparta E-Motion C4
        Sparta E-Motion C5
        Batavus Monaco E-go
        
        Position 1 Position 2 Position 3 Position 4 Position 5
        300Wh 54-108km 47-63km 44-53km 37-44km 22-34km
        400Wh 71-143km 62-83km 58-70km 49-58km 29-45km
        500Wh 112-211km 84-130km 70-88km 58-82km 29-60km
        
        Features:
        317 Wh
        8.8 Ah
        36 Volt
        Color: Silver
        Luggage carrier battery
        Suitable for Koga/Batavus/Sparta
        
        Hollandbikeshop.com has the E-Motion E-300 V2.0 E-Bike Battery Silver you're looking for.
        Do you own a Batavus bicycle and are you looking for replacement Batavus parts?
        Want to make sure these parts fit your Batavus bicycle?
        Send a message to sales@hollandbikeshop.com including your frame number,
        photos, additional information and/or other parts you're looking for.
        The frame number is usually located either on the seat tube, near the bottom bracket or on the chain stay.
        The Batavus frame number (bar code) often starts with a 'B'.
        We'll be happy to assist you.`,
		stock: 810,
		price: 999,
		producer: 'Batavus',
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
		name: 'E-Motion Li-ion Battery 24S/10Ah - Silver',
		type: 'bicicleta',
		description: `Original bike battery for the Sparta Emotion C1 / C2 / C3 / CS2 bicycle models.
        Can be used to replace an existing battery.
        Please note that this bike battery is available in black and silver.
        This is the black version.
        The silver version has article number 345719.
        
        Features:
        - Suitable for Sparta E-Motion bicycle models C1, C2, C3 and CS2
        - Models from 2010 to 2013
        - Drive 24-Speed
        - Is suitable for Plug & Play
        - Battery can be placed on the rear carrier of your bicycle
        
        Suitable for:
        - Sparta E-Motion C1: 2011 - 2013
        - Sparta E-Motion C2: 2010 - 2013
        - Sparta E-Motion C3: 2011 - 2012
        - Sparta E-Motion CS2: 2011 - 2012
        - Batavus Torino E-Go: 2012 – 2013
        - Batavus Lucca E-Go: 2013
        - Batavus Genova E-Go: 2012 – 2013
        - Batavus Monaco E-Go: 2012 – 2013
        
        Specifications:
        - Voltage: 24-Speed
        - Capacity: 10Ah
        - Wh: 240Wh
        - Battery: Li-ION. rear bicycle carrier
        - Size: 145 x 308 x 42 (W x L x H)
        - Weight: +/- 3.3 kg
        - Range: approx. 40 km
        - Engine position: In the front wheel
        - Color: Silver
        
        Hollandbikeshop.com has the E-Motion Li-ion Battery 24S/10Ah - Silver you're looking for.
        Do you own a Batavus bicycle and are you looking for replacement Batavus parts?
        Want to make sure these parts fit your Batavus bicycle?
        Send a message to sales@hollandbikeshop.com including your frame number,
        photos, additional information and/or other parts you're looking for.
        The frame number is usually located either on the seat tube, near the bottom bracket or on the chain stay.
        The Batavus frame number (bar code) often starts with a 'B'.
        We'll be happy to assist you.`,
		stock: 810,
		price: 999,
		producer: 'Batavus',
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
