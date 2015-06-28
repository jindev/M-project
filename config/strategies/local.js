'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	User = require('mongoose').model('User');

module.exports = function() {
	// Use local strategy
	passport.use(new LocalStrategy({
			usernameField: 'username',
			passwordField: 'password'
		},
		function(username, password, done) {
			User.findOne({
				username: username
			}, function(err, user) {
				if (err) {
					return done(err);
				}
				if (!user) {
					return done(null, false, {
						message: '이메일이 또는 패스워드가 틀렸습니다.'
					});
				}
				if (!user.authenticate(password)) {
					return done(null, false, {
						message: '이메일이 또는 패스워드가 틀렸습니다.'
					});
				}

				return done(null, user);
			});
		}
	));
};
