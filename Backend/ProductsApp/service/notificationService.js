const webpush = require('web-push');

const publicVapidKey = 'BNMAJhqomTU4oHLLS6m6re5PnLpJGARip-Crb7GGY-6gMydM61nMbT3bRHGx2kuxcwLPKV_Of-JMvXN7U-gyyI8';
const privateVapidKey = 'mIxtFYbuIVF9KPWP2wGO3-XlM-m-73HDLPjq8Rj-NdA';

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);
let subscriptions = [];
module.exports = function notification() {
	return {
		subscribe(data) {
			if (subscriptions.includes(data) == false) subscriptions.push(data);
		},
		notify(elem) {
			const payload = {
				title: 'Price change',
				name: elem.name,
				price: elem.price
			};
			subscriptions.forEach((element) => {
				webpush.sendNotification(element, JSON.stringify(payload)).catch((err) => console.error(err));
			});
		}
	};
};
