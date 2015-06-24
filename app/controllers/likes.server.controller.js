'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    errorHandler = require('./errors.server.controller'),
    Like = mongoose.model('Like'),
    _ = require('lodash');

/**
 * Create a Like
 */
exports.create = function(req, res) {
    var like = new Like(req.body);
    like.user = req.user;

    like.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(like);
        }
    });
};

/**
 * Show the current Like
 */
exports.read = function(req, res) {
    var competitionId = req.query.competitionId;
    Like.find({"competitionId" : competitionId}).sort('-created').populate('user', 'displayName').exec(function(err, like) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(like);
        }
    });
};

/**
 * Update a Like
 */
exports.update = function(req, res) {

    var likeModel = new Like({
        uniLike : (req.query.uniLike)? 1 : 0 ,
        fbLike :(req.query.fbLike)? 1 : 0 ,
        twiLike : (req.query.twiLike)? 1 : 0,
        competitionId : req.query.competitionId,
        user : Object.toString(req.user._id)
    });

    Like.update({user : "12341234"},new Like(),{upsert : true},function(err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.status(200).send();
        }
    });
};

/**
 * Delete an Like
 */
exports.delete = function(req, res) {

};

/**
 * List of Likes
 */
exports.list = function(req, res) {

    var competitionId = req.query.competitionId;
    Like.find({"competitionId" : competitionId}).sort('-created').exec(function(err, likes) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(likes);
        }
    });
};

exports.hasAuthorization = function(req, res, next) {
    if (req.user.id) {
        return res.status(403).send('User is not authorized');
    }
    next();
};


exports.competitionByID = function(req, res, next, id) {
    Competition.findById(id).populate('user', 'displayName').exec(function (err, competition) {
        if (err) return next(err);
        if (!competition) return next(new Error('Failed to load Competition ' + id));
        req.competition = competition;
        next();
    });
};
