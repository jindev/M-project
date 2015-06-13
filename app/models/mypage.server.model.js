'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Mypage Schema
 */
var MypageSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Mypage name',
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

mongoose.model('Mypage', MypageSchema);