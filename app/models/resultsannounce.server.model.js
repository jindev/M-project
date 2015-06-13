'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Resultsannounce Schema
 */
var ResultsannounceSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Resultsannounce name',
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

mongoose.model('Resultsannounce', ResultsannounceSchema);