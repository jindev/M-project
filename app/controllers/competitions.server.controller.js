'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Competition = mongoose.model('Competition'),
	Comment = mongoose.model('Comment'),
	_ = require('lodash');
var	async = require('async');
var formidable = require('formidable');
var path = require('path');
var util = require('util');
var fs = require('fs');

/**
 * Create a Competition
 */
exports.upload = function(req,res){
	console.log("시작");


	var userId = req.user.username;

	var form = new formidable.IncomingForm();
	form.encoding = 'utf-8';
	form.uploadDir = path.join(__dirname, '../../public/modules/competitions/img/upload');
	form.keepExtensions = true;

	form.on('file', function(field, file) {
		//rename the incoming file to the file's name
		console.log(file);
		fs.rename(file.path, form.uploadDir + "/" + userId+'.png');
	})
		.on('error', function(err) {
			console.log("an error has occured with form upload");
			console.log(err);
			req.resume();
		})
		.on('aborted', function(err) {
			console.log("user aborted upload");
		})
		.on('end', function() {
			console.log('-> upload done');
		});
	form.parse(req, function(err, fields, files) {
		res.send(200);
	});

};



exports.create = function(req, res) {

	var competition = new Competition(req.body);
	competition.user = req.user;

	competition.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(competition);
		}
	});
};


/**
 * Show the current Competition
 */
exports.read = function(req, res) {
	res.jsonp(req.competition);
};

/**
 * Update a Competition
 */
exports.update = function(req, res) {
	var competition = req.competition ;

	competition = _.extend(competition , req.body);

	competition.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(competition);
		}
	});
};

/**
 * Delete an Competition
 */
exports.delete = function(req, res) {
	var competition = req.competition ;

	competition.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(competition);
		}
	});
};

/**
 * List of Competitions
 */
exports.list = function(req, res) {

	var pageNumber = req.query.pageNumber;
	var nPerPage = req.query.nPerPage;

	if(pageNumber && nPerPage){
		Competition.find().sort('-created').skip(pageNumber > 0 ? ((pageNumber-1)*nPerPage) : 0).limit(nPerPage).exec(function(err, competitions) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				res.jsonp(competitions);
			}
		});
	}else{
		Competition.find().sort('-created').exec(function(err, competitions) {
			if (err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			} else {
				res.jsonp(competitions);
			}
		});
	}
};

/**
 * Competition middleware
 */
exports.competitionByID = function(req, res, next, id) {
	Competition.findById(id).populate('user', 'displayName').exec(function (err, competition) {
		if (err) return next(err);
		if (!competition) return next(new Error('Failed to load Competition ' + id));
		req.competition = competition;
		next();
	});
};


/**
 * Competition authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.competition.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};

exports.checkAlreadyRegi = function(req, res){

	Competition.find({user: req.user._id}).exec(function (err, competition) {
		if (err){

		}
		res.send(competition);


	});
}
