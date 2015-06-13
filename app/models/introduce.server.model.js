'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Introduce Schema
 */
var IntroduceSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Introduce name',
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

mongoose.model('Introduce', IntroduceSchema);