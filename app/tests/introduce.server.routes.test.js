'use strict';

var should = require('should'),
	request = require('supertest'),
	app = require('../../server'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Introduce = mongoose.model('Introduce'),
	agent = request.agent(app);

/**
 * Globals
 */
var credentials, user, introduce;

/**
 * Introduce routes tests
 */
describe('Introduce CRUD tests', function() {
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

		// Save a user to the test db and create new Introduce
		user.save(function() {
			introduce = {
				name: 'Introduce Name'
			};

			done();
		});
	});

	it('should be able to save Introduce instance if logged in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Introduce
				agent.post('/introduces')
					.send(introduce)
					.expect(200)
					.end(function(introduceSaveErr, introduceSaveRes) {
						// Handle Introduce save error
						if (introduceSaveErr) done(introduceSaveErr);

						// Get a list of Introduces
						agent.get('/introduces')
							.end(function(introducesGetErr, introducesGetRes) {
								// Handle Introduce save error
								if (introducesGetErr) done(introducesGetErr);

								// Get Introduces list
								var introduces = introducesGetRes.body;

								// Set assertions
								(introduces[0].user._id).should.equal(userId);
								(introduces[0].name).should.match('Introduce Name');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to save Introduce instance if not logged in', function(done) {
		agent.post('/introduces')
			.send(introduce)
			.expect(401)
			.end(function(introduceSaveErr, introduceSaveRes) {
				// Call the assertion callback
				done(introduceSaveErr);
			});
	});

	it('should not be able to save Introduce instance if no name is provided', function(done) {
		// Invalidate name field
		introduce.name = '';

		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Introduce
				agent.post('/introduces')
					.send(introduce)
					.expect(400)
					.end(function(introduceSaveErr, introduceSaveRes) {
						// Set message assertion
						(introduceSaveRes.body.message).should.match('Please fill Introduce name');
						
						// Handle Introduce save error
						done(introduceSaveErr);
					});
			});
	});

	it('should be able to update Introduce instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Introduce
				agent.post('/introduces')
					.send(introduce)
					.expect(200)
					.end(function(introduceSaveErr, introduceSaveRes) {
						// Handle Introduce save error
						if (introduceSaveErr) done(introduceSaveErr);

						// Update Introduce name
						introduce.name = 'WHY YOU GOTTA BE SO MEAN?';

						// Update existing Introduce
						agent.put('/introduces/' + introduceSaveRes.body._id)
							.send(introduce)
							.expect(200)
							.end(function(introduceUpdateErr, introduceUpdateRes) {
								// Handle Introduce update error
								if (introduceUpdateErr) done(introduceUpdateErr);

								// Set assertions
								(introduceUpdateRes.body._id).should.equal(introduceSaveRes.body._id);
								(introduceUpdateRes.body.name).should.match('WHY YOU GOTTA BE SO MEAN?');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should be able to get a list of Introduces if not signed in', function(done) {
		// Create new Introduce model instance
		var introduceObj = new Introduce(introduce);

		// Save the Introduce
		introduceObj.save(function() {
			// Request Introduces
			request(app).get('/introduces')
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Array.with.lengthOf(1);

					// Call the assertion callback
					done();
				});

		});
	});


	it('should be able to get a single Introduce if not signed in', function(done) {
		// Create new Introduce model instance
		var introduceObj = new Introduce(introduce);

		// Save the Introduce
		introduceObj.save(function() {
			request(app).get('/introduces/' + introduceObj._id)
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Object.with.property('name', introduce.name);

					// Call the assertion callback
					done();
				});
		});
	});

	it('should be able to delete Introduce instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Introduce
				agent.post('/introduces')
					.send(introduce)
					.expect(200)
					.end(function(introduceSaveErr, introduceSaveRes) {
						// Handle Introduce save error
						if (introduceSaveErr) done(introduceSaveErr);

						// Delete existing Introduce
						agent.delete('/introduces/' + introduceSaveRes.body._id)
							.send(introduce)
							.expect(200)
							.end(function(introduceDeleteErr, introduceDeleteRes) {
								// Handle Introduce error error
								if (introduceDeleteErr) done(introduceDeleteErr);

								// Set assertions
								(introduceDeleteRes.body._id).should.equal(introduceSaveRes.body._id);

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to delete Introduce instance if not signed in', function(done) {
		// Set Introduce user 
		introduce.user = user;

		// Create new Introduce model instance
		var introduceObj = new Introduce(introduce);

		// Save the Introduce
		introduceObj.save(function() {
			// Try deleting Introduce
			request(app).delete('/introduces/' + introduceObj._id)
			.expect(401)
			.end(function(introduceDeleteErr, introduceDeleteRes) {
				// Set message assertion
				(introduceDeleteRes.body.message).should.match('User is not logged in');

				// Handle Introduce error error
				done(introduceDeleteErr);
			});

		});
	});

	afterEach(function(done) {
		User.remove().exec();
		Introduce.remove().exec();
		done();
	});
});