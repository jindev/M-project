'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Competition Schema
 */
var CompetitionSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Competition name',
		trim: true
	},
	description : {
		type: String,
		default: '',
		required: 'Please fill Competition desc',
		trim: true
	},
	teamImg : {
		type: String,
		default: '',
		required: 'Please fill Competition desc',
		trim: true
	},
	teamUrl : {
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
	}
});

mongoose.model('Competition', CompetitionSchema);
