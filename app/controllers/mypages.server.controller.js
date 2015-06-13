'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Mypage = mongoose.model('Mypage'),
	_ = require('lodash');

/**
 * Create a Mypage
 */
exports.create = function(req, res) {
	var mypage = new Mypage(req.body);
	mypage.user = req.user;

	mypage.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(mypage);
		}
	});
};

/**
 * Show the current Mypage
 */
exports.read = function(req, res) {
	res.jsonp(req.mypage);
};

/**
 * Update a Mypage
 */
exports.update = function(req, res) {
	var mypage = req.mypage ;

	mypage = _.extend(mypage , req.body);

	mypage.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(mypage);
		}
	});
};

/**
 * Delete an Mypage
 */
exports.delete = function(req, res) {
	var mypage = req.mypage ;

	mypage.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(mypage);
		}
	});
};

/**
 * List of Mypages
 */
exports.list = function(req, res) { 
	Mypage.find().sort('-created').populate('user', 'displayName').exec(function(err, mypages) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(mypages);
		}
	});
};

/**
 * Mypage middleware
 */
exports.mypageByID = function(req, res, next, id) { 
	Mypage.findById(id).populate('user', 'displayName').exec(function(err, mypage) {
		if (err) return next(err);
		if (! mypage) return next(new Error('Failed to load Mypage ' + id));
		req.mypage = mypage ;
		next();
	});
};

/**
 * Mypage authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.mypage.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};
