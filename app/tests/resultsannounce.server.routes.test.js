'use strict';

var should = require('should'),
	request = require('supertest'),
	app = require('../../server'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Resultsannounce = mongoose.model('Resultsannounce'),
	agent = request.agent(app);

/**
 * Globals
 */
var credentials, user, resultsannounce;

/**
 * Resultsannounce routes tests
 */
describe('Resultsannounce CRUD tests', function() {
	beforeEach(function(done) {
		// Create user credentials
		credentials = {
			username: 'username',
			password: 'password'
		};

		// Create a new user
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: credentials.username,
			password: credentials.password,
			provider: 'local'
		});

		// Save a user to the test db and create new Resultsannounce
		user.save(function() {
			resultsannounce = {
				name: 'Resultsannounce Name'
			};

			done();
		});
	});

	it('should be able to save Resultsannounce instance if logged in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Resultsannounce
				agent.post('/resultsannounces')
					.send(resultsannounce)
					.expect(200)
					.end(function(resultsannounceSaveErr, resultsannounceSaveRes) {
						// Handle Resultsannounce save error
						if (resultsannounceSaveErr) done(resultsannounceSaveErr);

						// Get a list of Resultsannounces
						agent.get('/resultsannounces')
							.end(function(resultsannouncesGetErr, resultsannouncesGetRes) {
								// Handle Resultsannounce save error
								if (resultsannouncesGetErr) done(resultsannouncesGetErr);

								// Get Resultsannounces list
								var resultsannounces = resultsannouncesGetRes.body;

								// Set assertions
								(resultsannounces[0].user._id).should.equal(userId);
								(resultsannounces[0].name).should.match('Resultsannounce Name');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to save Resultsannounce instance if not logged in', function(done) {
		agent.post('/resultsannounces')
			.send(resultsannounce)
			.expect(401)
			.end(function(resultsannounceSaveErr, resultsannounceSaveRes) {
				// Call the assertion callback
				done(resultsannounceSaveErr);
			});
	});

	it('should not be able to save Resultsannounce instance if no name is provided', function(done) {
		// Invalidate name field
		resultsannounce.name = '';

		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Resultsannounce
				agent.post('/resultsannounces')
					.send(resultsannounce)
					.expect(400)
					.end(function(resultsannounceSaveErr, resultsannounceSaveRes) {
						// Set message assertion
						(resultsannounceSaveRes.body.message).should.match('Please fill Resultsannounce name');
						
						// Handle Resultsannounce save error
						done(resultsannounceSaveErr);
					});
			});
	});

	it('should be able to update Resultsannounce instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Resultsannounce
				agent.post('/resultsannounces')
					.send(resultsannounce)
					.expect(200)
					.end(function(resultsannounceSaveErr, resultsannounceSaveRes) {
						// Handle Resultsannounce save error
						if (resultsannounceSaveErr) done(resultsannounceSaveErr);

						// Update Resultsannounce name
						resultsannounce.name = 'WHY YOU GOTTA BE SO MEAN?';

						// Update existing Resultsannounce
						agent.put('/resultsannounces/' + resultsannounceSaveRes.body._id)
							.send(resultsannounce)
							.expect(200)
							.end(function(resultsannounceUpdateErr, resultsannounceUpdateRes) {
								// Handle Resultsannounce update error
								if (resultsannounceUpdateErr) done(resultsannounceUpdateErr);

								// Set assertions
								(resultsannounceUpdateRes.body._id).should.equal(resultsannounceSaveRes.body._id);
								(resultsannounceUpdateRes.body.name).should.match('WHY YOU GOTTA BE SO MEAN?');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should be able to get a list of Resultsannounces if not signed in', function(done) {
		// Create new Resultsannounce model instance
		var resultsannounceObj = new Resultsannounce(resultsannounce);

		// Save the Resultsannounce
		resultsannounceObj.save(function() {
			// Request Resultsannounces
			request(app).get('/resultsannounces')
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Array.with.lengthOf(1);

					// Call the assertion callback
					done();
				});

		});
	});


	it('should be able to get a single Resultsannounce if not signed in', function(done) {
		// Create new Resultsannounce model instance
		var resultsannounceObj = new Resultsannounce(resultsannounce);

		// Save the Resultsannounce
		resultsannounceObj.save(function() {
			request(app).get('/resultsannounces/' + resultsannounceObj._id)
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Object.with.property('name', resultsannounce.name);

					// Call the assertion callback
					done();
				});
		});
	});

	it('should be able to delete Resultsannounce instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Resultsannounce
				agent.post('/resultsannounces')
					.send(resultsannounce)
					.expect(200)
					.end(function(resultsannounceSaveErr, resultsannounceSaveRes) {
						// Handle Resultsannounce save error
						if (resultsannounceSaveErr) done(resultsannounceSaveErr);

						// Delete existing Resultsannounce
						agent.delete('/resultsannounces/' + resultsannounceSaveRes.body._id)
							.send(resultsannounce)
							.expect(200)
							.end(function(resultsannounceDeleteErr, resultsannounceDeleteRes) {
								// Handle Resultsannounce error error
								if (resultsannounceDeleteErr) done(resultsannounceDeleteErr);

								// Set assertions
								(resultsannounceDeleteRes.body._id).should.equal(resultsannounceSaveRes.body._id);

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to delete Resultsannounce instance if not signed in', function(done) {
		// Set Resultsannounce user 
		resultsannounce.user = user;

		// Create new Resultsannounce model instance
		var resultsannounceObj = new Resultsannounce(resultsannounce);

		// Save the Resultsannounce
		resultsannounceObj.save(function() {
			// Try deleting Resultsannounce
			request(app).delete('/resultsannounces/' + resultsannounceObj._id)
			.expect(401)
			.end(function(resultsannounceDeleteErr, resultsannounceDeleteRes) {
				// Set message assertion
				(resultsannounceDeleteRes.body.message).should.match('User is not logged in');

				// Handle Resultsannounce error error
				done(resultsannounceDeleteErr);
			});

		});
	});

	afterEach(function(done) {
		User.remove().exec();
		Resultsannounce.remove().exec();
		done();
	});
});