'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    errorHandler = require('./errors.server.controller'),
    Comment = mongoose.model('Comment'),
    _ = require('lodash');

/**
 * Create a Comment
 */
exports.create = function(req, res) {

    var comment = new Comment(req.body);
    comment.user = req.user;

    comment.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(Comment);
        }
    });
};

/**
 * Show the current Comment
 */
exports.read = function(req, res) {

};




/**
 * Delete an Comment
 */
exports.delete = function(req, res) {

};

/**
 * List of Comments
 */
exports.list = function(req, res) {

};



/**
 * Show the current Competition
 */
exports.read = function(req, res) {
    res.jsonp(req.competition);
};

/**
 * Update a Comment
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
    var competitionId = req.query.competitionId;
    Comment.find({"competitionId" : competitionId}).sort('-created').populate('user', 'displayName').exec(function(err, comments) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(comments);
        }
    });
};

/**
 * Competition middleware
 */
exports.competitionByID = function(req, res, next, id) {
    Competition.findById(id).populate('user', 'displayName').exec(function(err, competition) {
        if (err) return next(err);
        if (! competition) return next(new Error('Failed to load Competition ' + id));
        req.competition = competition ;
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
