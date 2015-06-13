'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Resultsannounce = mongoose.model('Resultsannounce');

/**
 * Globals
 */
var user, resultsannounce;

/**
 * Unit tests
 */
describe('Resultsannounce Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		user.save(function() { 
			resultsannounce = new Resultsannounce({
				name: 'Resultsannounce Name',
				user: user
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return resultsannounce.save(function(err) {
				should.not.exist(err);
				done();
			});
		});

		it('should be able to show an error when try to save without name', function(done) { 
			resultsannounce.name = '';

			return resultsannounce.save(function(err) {
				should.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) { 
		Resultsannounce.remove().exec();
		User.remove().exec();

		done();
	});
});