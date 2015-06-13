'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var resultsannounces = require('../../app/controllers/resultsannounces.server.controller');

	// Resultsannounces Routes
	app.route('/resultsannounces')
		.get(resultsannounces.list)
		.post(users.requiresLogin, resultsannounces.create);

	app.route('/resultsannounces/:resultsannounceId')
		.get(resultsannounces.read)
		.put(users.requiresLogin, resultsannounces.hasAuthorization, resultsannounces.update)
		.delete(users.requiresLogin, resultsannounces.hasAuthorization, resultsannounces.delete);

	// Finish by binding the Resultsannounce middleware
	app.param('resultsannounceId', resultsannounces.resultsannounceByID);
};
