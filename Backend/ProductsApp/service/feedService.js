const RSS = require('rss');

const feed = new RSS({
	title: 'Electrifying feed',
	description: 'Rss feed for the Electrik site',
	feed_url: 'http://localhost:5500/rss',
	site_url: 'http://localhost:5500/index.html'
});

module.exports = function rss() {
	return {
		addUpdatedPrice(data) {
			console.log('Feed entered');
			feed.item({
				title: `Price change for ${data.name}`,
				url: `http://localhost:5500/${data._id}`,
				date: Date.now()
			});
		},
		addNewItem(data) {
			feed.item({
				title: `New item added: ${data.name}`,
				url: `http://localhost:5500/${data._id}`,
				date: Date.now()
			});
		},
		returnXml() {
			return feed.xml({ indent: true });
		}
	};
};
