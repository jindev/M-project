'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var mypages = require('../../app/controllers/mypages.server.controller');

	// Mypages Routes
	app.route('/mypages')
		.get(mypages.list)
		.post(users.requiresLogin, mypages.create);

	app.route('/mypages/:mypageId')
		.get(mypages.read)
		.put(users.requiresLogin, mypages.hasAuthorization, mypages.update)
		.delete(users.requiresLogin, mypages.hasAuthorization, mypages.delete);

	// Finish by binding the Mypage middleware
	app.param('mypageId', mypages.mypageByID);
};
