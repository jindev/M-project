'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Comment Schema
 */
var CommentSchema = new Schema({

	commentContent : {
		type: String,
		default: '',
		required: 'Please fill Competition desc',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	competitionId : {
		type: Schema.ObjectId
	}
});

mongoose.model('Comment', CommentSchema);

