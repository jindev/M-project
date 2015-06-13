'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Resultsannounce = mongoose.model('Resultsannounce'),
	_ = require('lodash');

/**
 * Create a Resultsannounce
 */
exports.create = function(req, res) {
	var resultsannounce = new Resultsannounce(req.body);
	resultsannounce.user = req.user;

	resultsannounce.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(resultsannounce);
		}
	});
};

/**
 * Show the current Resultsannounce
 */
exports.read = function(req, res) {
	res.jsonp(req.resultsannounce);
};

/**
 * Update a Resultsannounce
 */
exports.update = function(req, res) {
	var resultsannounce = req.resultsannounce ;

	resultsannounce = _.extend(resultsannounce , req.body);

	resultsannounce.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(resultsannounce);
		}
	});
};

/**
 * Delete an Resultsannounce
 */
exports.delete = function(req, res) {
	var resultsannounce = req.resultsannounce ;

	resultsannounce.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(resultsannounce);
		}
	});
};

/**
 * List of Resultsannounces
 */
exports.list = function(req, res) { 
	Resultsannounce.find().sort('-created').populate('user', 'displayName').exec(function(err, resultsannounces) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(resultsannounces);
		}
	});
};

/**
 * Resultsannounce middleware
 */
exports.resultsannounceByID = function(req, res, next, id) { 
	Resultsannounce.findById(id).populate('user', 'displayName').exec(function(err, resultsannounce) {
		if (err) return next(err);
		if (! resultsannounce) return next(new Error('Failed to load Resultsannounce ' + id));
		req.resultsannounce = resultsannounce ;
		next();
	});
};

/**
 * Resultsannounce authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.resultsannounce.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};
