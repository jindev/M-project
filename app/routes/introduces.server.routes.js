'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var introduces = require('../../app/controllers/introduces.server.controller');

	// Introduces Routes
	app.route('/introduces')
		.get(introduces.list)
		.post(users.requiresLogin, introduces.create);

	app.route('/introduces/:introduceId')
		.get(introduces.read)
		.put(users.requiresLogin, introduces.hasAuthorization, introduces.update)
		.delete(users.requiresLogin, introduces.hasAuthorization, introduces.delete);

	// Finish by binding the Introduce middleware
	app.param('introduceId', introduces.introduceByID);
};
