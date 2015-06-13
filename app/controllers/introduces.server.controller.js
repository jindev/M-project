'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Introduce = mongoose.model('Introduce'),
	_ = require('lodash');

/**
 * Create a Introduce
 */
exports.create = function(req, res) {
	var introduce = new Introduce(req.body);
	introduce.user = req.user;

	introduce.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(introduce);
		}
	});
};

/**
 * Show the current Introduce
 */
exports.read = function(req, res) {
	res.jsonp(req.introduce);
};

/**
 * Update a Introduce
 */
exports.update = function(req, res) {
	var introduce = req.introduce ;

	introduce = _.extend(introduce , req.body);

	introduce.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(introduce);
		}
	});
};

/**
 * Delete an Introduce
 */
exports.delete = function(req, res) {
	var introduce = req.introduce ;

	introduce.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(introduce);
		}
	});
};

/**
 * List of Introduces
 */
exports.list = function(req, res) { 
	Introduce.find().sort('-created').populate('user', 'displayName').exec(function(err, introduces) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(introduces);
		}
	});
};

/**
 * Introduce middleware
 */
exports.introduceByID = function(req, res, next, id) { 
	Introduce.findById(id).populate('user', 'displayName').exec(function(err, introduce) {
		if (err) return next(err);
		if (! introduce) return next(new Error('Failed to load Introduce ' + id));
		req.introduce = introduce ;
		next();
	});
};

/**
 * Introduce authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.introduce.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};
