const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
	token = req.header('auth');
	if (!token) return res.status(400).send('Access Denied');
	try {
		jwt.verify(token, 'secretForToken', (err, decoded) => {
			if (err) {
				res.status(400).send(err);
			} else next();
		});
	} catch (err) {
		res.status(400).send('Invalid token');
	}
};
