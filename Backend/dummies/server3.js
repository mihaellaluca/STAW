const express = require('express');
const port = 4003;
const app = express();
const products = [
	{
		name: 'CALB 100 Ah CA Series Lithium Iron Phosphate Battery',
		type: 'masina',
		description: `The CALB LiFePO4 batteries are manufactured under much tighter specifications, and for this reason we have found in our own experience that these are the batteries of choice. Having very consistent internal resistance characteristics, these batteries are also well know for having a capacity that generally outperforms their specification by 10% or more. These batteries are very reliable, and come highly recommended from EV West

        Capacity: 100Ah
        Height: 216 mm (8.5 inch)
        Width: 67 mm (2.64 inch)
        Length: 140 mm (5.5 inch)
        Weight: 3.4kg (7.5 lbs)
        Bolt Size: M8
        Voltage nominal: 3.2V
        Charge voltage cut-off: 3.6V
        Discharging cut-off: 2.5V
        Life Cycle (0.3c Charging-Discharging, 80%DOD): 2000
        Maximum Discharging Current (10 sec.):10C - 1000 Amps
        Internal Impendance (1khz Ac, m-&#8486): Less Than 0.8
        Chemistry: LiFePO4
        Warranty Period: One year factory warranty on manufacturing defects.
        `,
		stock: 860,
		price: 1200,
		producer: ' CALB',
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
		name: 'CALB 180 Ah CA Series Lithium Iron Phosphate Battery',
		type: 'masina',
		description: `The CALB LiFePO4 batteries are manufactured under much tighter specifications, and for this reason we have found in our own experience that these are the batteries of choice. Having very consistent internal resistance characteristics, these batteries are also well know for having a capacity that generally outperforms their specification by 10% or more. These batteries are very reliable, and come highly recommended from EV West

        Capacity: 180Ah
        Height: 280 mm (11.02 inch)
        Width: 71 mm (2.80 inch)
        Length: 180 mm (7.08 inch)
        Weight: 5.6kg (12.35 lbs)
        Bolt Size: M8
        Voltage nominal: 3.2V
        Charge voltage cut-off: 3.6V
        Discharging cut-off: 2.5V
        Life Cycle (0.3c Charging-Discharging, 80%DOD): 2000
        Maximum Discharging Current (10 sec.):10C - 1800 Amps
        Internal Impendance (1khz Ac, m-&#8486): Less Than 0.8
        Chemistry: LiFePO4
        Warranty Period: One year factory warranty on manufacturing defects.
        `,
		stock: 860,
		price: 1200,
		producer: ' CALB',
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
		name: 'CALB 72 Ah CAM FI Series Lithium Iron Phosphate Battery',
		type: 'masina',
		description: `The CALB LiFePO4 batteries are manufactured under much tighter specifications, and for this reason we have found in our own experience that these are the batteries of choice. These brand new cells have a size that is 40% smaller and a weight that is 20% lighter than the previous CA Series cells, making the CAM Series the ideal battery for higher voltage AC systems.

        Capacity: 72Ah
        Height: 218 mm (8.5 inch)
        Width: 30 mm (1.18 inch)
        Length: 135 mm (5.5 inch)
        Weight: 1.9kg (4 lbs)
        Bolt Size: M8
        Voltage nominal: 3.2V
        Charge voltage cut-off: 3.5V
        Discharging cut-off: 2.5V
        Life Cycle (0.3c Charging-Discharging, 80%DOD): 3000
        Maximum Discharging Current (10 sec.):8C - 580 Amps
        Internal Impendance (1khz Ac, m-&#8486): Less Than 0.8
        Chemistry: LiFePO4
        Warranty Period: One year factory warranty on manufacturing defects.
        `,
		stock: 860,
		price: 1200,
		producer: ' CALB',
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
		name: 'LG CHEM Lithium Ion Battery - 60.8V, 2.6kWh',
		type: 'masina',
		description: `The LG Chem battery modules have excellent stability based on the proprietary separator technology. With the lightweight pouch design it makes it easy to change the designs according to customers' requirements. Each module is arranged in a 16s configuration providing 2.6kWh and rated at 200-400 amp continuos with 800amp max discharge. Due to the power density and high discharge rate these modules are a perfect fit for the Tesla Model S drive unit. A preferred configuration for a typical Model S drive unit is 2p6s for a total of 32kWh, However you can add modules in a 1p6s configuration for an additional 16kW per group.

        Capacity: 2.6Kw
        Height: 14.25 Inches
        Width: 8.00 Inches
        Length: 6.25 Inches
        Weight: 38.00 Pounds
        Bolt Size: M6
        Voltage nominal: 3.8V/Cell, 60.8V/Module
        Charge voltage cut-off: 4.2V/Cell, 67.2V/Module
        Discharging cut-off: 3.3V/Cell, 52.8/Module
        Maximum Discharging Current (10 sec.):800 Amps
        Warranty Period: One year
        `,
		stock: 860,
		price: 1200,
		producer: ' LG',
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
		name: 'Panasonic NCR 18650 BD Lithium Battery Cells - By The Case',
		type: 'masina',
		description: `The Panasonic BD is a popular lithium-ion cell. It is intended for use in high capacity 18650 battery packs. It can power a wide range of devices including an electric skateboard, electric bike, or powerwall project.

        Panasonic 18650 batteries are highly regarded for performance and safety. The BD is manufactured in Japan to the highest standards, and these cells are packaged raw for more flexibility in pack design, including single side current collectors. For most applications insulators and heat shrink will be required, and is sold elsewhere.
        
        Welcome visitors from Jehu Garcia's channel. This special purchase page has been set up for you with $30 flat rate shipping. Case quantity is 180 pieces, packaged in 6 boxes of 30 cells each. Cost per cell is $2 each, $360 per case, $390 including shipping (select shop pickup on Paypal checkout for free domestic delivery)
        
        Typical Capacity: 3180mAh
        Nominal Capcity: 3030mAh
        Diameter: 18mm
        Length: 65mm
        Voltage nominal: 3.6V
        Charge voltage cut-off: 4.2V
        Discharging cut-off: 2.5V
        `,
		stock: 860,
		price: 1200,
		producer: ' Panasonic',
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
		name: 'Samsung SDI ESS Energy Storage Battery 16S 60 Volt - Used 13.2 kWh Rack Mount Mega 3.3 - Four Pack',
		type: 'masina',
		description: `This product listing is for FOUR units of this product, producing 13.2kWh of energy. This Samsung SDI ESS Mega 3.3 backup battery has been decommissioned from a large ESS project with plenty of usable capacity left in them. This is a special purchase, and is limited to stock on hand. These packs are rated for 3.9kWh with a nominal rating of 3.3kWh. We have been testing them and are finding 3.2kWh on average. We will guarantee these to have 3.0kWh or more. These cells are used, and some cells do show signs of minor swelling, but still pass capacity under our own testing.

        Buy 4 and save at $430 each. Shipping is flat rate to the lower 48 states at $425 per case of 4, including crating and residential/business lift gate truck delivery. Since shipping is by freight truck, please check out with will call and we will email to quote and arrange international shipping.
        
        Because of this special offer, we are working with a partner company to fulfill these orders. You will receive an invoice through Gravity BCI, and warranty and tech support will be provided through EV West Inc. Thank you.
        
        Height: 6.5 inches
        Width: 19.25 inches
        Length: 21.5 inches
        Weight: 110 lbs
        Mounting: Rack Mount
        Nominal Capacity: 68 Ah
        Nominal Voltage: 58.4 Volts
        Voltage Range: 49.8-65.2 Volts
        Thermal Monitoring: 8 Integrated Thermistors
        Battery Monitoring: Integrated Board and Compatible Plugs
        Voltage Range: 49.8-65.2 Volts
        Connection Out: M8 Threaded Insert
        Warranty Period: Ninety Days to 3.0kWh Capacity
        `,
		stock: 860,
		price: 1200,
		producer: ' Samsung',
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
		name: 'Samsung SDI ESS Energy Storage Battery 16S 60 Volt - Used 13.2 kWh Rack Mount Mega 3.3 - Single Unit',
		type: 'masina',
		description: `This product listing is for ONE unit of this product, producing 3.3kWh of energy. This Samsung SDI ESS Mega 3.3 backup battery has been decommissioned from a large ESS project with plenty of usable capacity left in them. This is a special purchase, and is limited to stock on hand. These packs are rated for 3.9kWh with a nominal rating of 3.3kWh. We have been testing them and are finding 3.2kWh on average. We will guarantee these to have 3.0kWh or more. These cells are used, and some cells do show signs of minor swelling, but still pass capacity under our own testing.

        Shipping is flat rate to the lower 48 states at $425 per case of up to 4, including crating and residential/business lift gate truck delivery. Since shipping is by freight truck, please check out with will call and we will email to quote and arrange international shipping.
        
        Because of this special offer, we are working with a partner company to fulfill these orders. You will receive an invoice through Gravity BCI, and warranty and tech support will be provided through EV West Inc. Thank you.
        
        Height: 6.5 inches
        Width: 19.25 inches
        Length: 21.5 inches
        Weight: 110 lbs
        Mounting: Rack Mount
        Nominal Capacity: 68 Ah
        Nominal Voltage: 58.4 Volts
        Voltage Range: 49.8-65.2 Volts
        Thermal Monitoring: 8 Integrated Thermistors
        Battery Monitoring: Integrated Board and Compatible Plugs
        Voltage Range: 49.8-65.2 Volts
        Connection Out: M8 Threaded Insert
        Warranty Period: Ninety Days to 3.0kWh Capacity
        `,
		stock: 860,
		price: 1200,
		producer: ' Samsung',
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
