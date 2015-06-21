'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Like Schema
 */
var LikeSchema = new Schema({
	uniLike : {
	 type:Number,
	 default: 0,
	 trim: true
	},
	fbLike : {
		type:Number,
		default: 0,
		trim: true
	},
	twiLike : {
		type:Number,
		default: 0,
		trim: true
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	competitionId : {
		type: Schema.ObjectId
	}
});

mongoose.model('Like', LikeSchema);
