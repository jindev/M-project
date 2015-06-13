'use strict';

var should = require('should'),
	request = require('supertest'),
	app = require('../../server'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Mypage = mongoose.model('Mypage'),
	agent = request.agent(app);

/**
 * Globals
 */
var credentials, user, mypage;

/**
 * Mypage routes tests
 */
describe('Mypage CRUD tests', function() {
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

		// Save a user to the test db and create new Mypage
		user.save(function() {
			mypage = {
				name: 'Mypage Name'
			};

			done();
		});
	});

	it('should be able to save Mypage instance if logged in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Mypage
				agent.post('/mypages')
					.send(mypage)
					.expect(200)
					.end(function(mypageSaveErr, mypageSaveRes) {
						// Handle Mypage save error
						if (mypageSaveErr) done(mypageSaveErr);

						// Get a list of Mypages
						agent.get('/mypages')
							.end(function(mypagesGetErr, mypagesGetRes) {
								// Handle Mypage save error
								if (mypagesGetErr) done(mypagesGetErr);

								// Get Mypages list
								var mypages = mypagesGetRes.body;

								// Set assertions
								(mypages[0].user._id).should.equal(userId);
								(mypages[0].name).should.match('Mypage Name');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to save Mypage instance if not logged in', function(done) {
		agent.post('/mypages')
			.send(mypage)
			.expect(401)
			.end(function(mypageSaveErr, mypageSaveRes) {
				// Call the assertion callback
				done(mypageSaveErr);
			});
	});

	it('should not be able to save Mypage instance if no name is provided', function(done) {
		// Invalidate name field
		mypage.name = '';

		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Mypage
				agent.post('/mypages')
					.send(mypage)
					.expect(400)
					.end(function(mypageSaveErr, mypageSaveRes) {
						// Set message assertion
						(mypageSaveRes.body.message).should.match('Please fill Mypage name');
						
						// Handle Mypage save error
						done(mypageSaveErr);
					});
			});
	});

	it('should be able to update Mypage instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Mypage
				agent.post('/mypages')
					.send(mypage)
					.expect(200)
					.end(function(mypageSaveErr, mypageSaveRes) {
						// Handle Mypage save error
						if (mypageSaveErr) done(mypageSaveErr);

						// Update Mypage name
						mypage.name = 'WHY YOU GOTTA BE SO MEAN?';

						// Update existing Mypage
						agent.put('/mypages/' + mypageSaveRes.body._id)
							.send(mypage)
							.expect(200)
							.end(function(mypageUpdateErr, mypageUpdateRes) {
								// Handle Mypage update error
								if (mypageUpdateErr) done(mypageUpdateErr);

								// Set assertions
								(mypageUpdateRes.body._id).should.equal(mypageSaveRes.body._id);
								(mypageUpdateRes.body.name).should.match('WHY YOU GOTTA BE SO MEAN?');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should be able to get a list of Mypages if not signed in', function(done) {
		// Create new Mypage model instance
		var mypageObj = new Mypage(mypage);

		// Save the Mypage
		mypageObj.save(function() {
			// Request Mypages
			request(app).get('/mypages')
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Array.with.lengthOf(1);

					// Call the assertion callback
					done();
				});

		});
	});


	it('should be able to get a single Mypage if not signed in', function(done) {
		// Create new Mypage model instance
		var mypageObj = new Mypage(mypage);

		// Save the Mypage
		mypageObj.save(function() {
			request(app).get('/mypages/' + mypageObj._id)
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Object.with.property('name', mypage.name);

					// Call the assertion callback
					done();
				});
		});
	});

	it('should be able to delete Mypage instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Mypage
				agent.post('/mypages')
					.send(mypage)
					.expect(200)
					.end(function(mypageSaveErr, mypageSaveRes) {
						// Handle Mypage save error
						if (mypageSaveErr) done(mypageSaveErr);

						// Delete existing Mypage
						agent.delete('/mypages/' + mypageSaveRes.body._id)
							.send(mypage)
							.expect(200)
							.end(function(mypageDeleteErr, mypageDeleteRes) {
								// Handle Mypage error error
								if (mypageDeleteErr) done(mypageDeleteErr);

								// Set assertions
								(mypageDeleteRes.body._id).should.equal(mypageSaveRes.body._id);

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to delete Mypage instance if not signed in', function(done) {
		// Set Mypage user 
		mypage.user = user;

		// Create new Mypage model instance
		var mypageObj = new Mypage(mypage);

		// Save the Mypage
		mypageObj.save(function() {
			// Try deleting Mypage
			request(app).delete('/mypages/' + mypageObj._id)
			.expect(401)
			.end(function(mypageDeleteErr, mypageDeleteRes) {
				// Set message assertion
				(mypageDeleteRes.body.message).should.match('User is not logged in');

				// Handle Mypage error error
				done(mypageDeleteErr);
			});

		});
	});

	afterEach(function(done) {
		User.remove().exec();
		Mypage.remove().exec();
		done();
	});
});