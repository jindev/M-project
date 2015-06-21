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
		required: '이름을 적어주세요',
		trim: true
	},
	description : {
		type: String,
		default: '',
		required: '팀 설명을 적어주세요',
		trim: true
	},
	phoneNum : {
		type: String,
		default: '',
		required: '핸드폰 번호를 적어주세요',
		trim: true
	},
	address : {
		type: String,
		default: '',
		required: '주소를 적어주세요',
		trim: true
	},
	country : {
		type: String,
		default: '',
		required: '국가를 적어주세요',
		trim: true
	},
	//teamImg : {
	//	type: String,
	//	default: '',
	//	required: 'Please fill teamImg',
	//	trim: true
	//},
	teamUrl : {
		type: String,
		default: '',
		required: '유튜브 공유 주소를 적어주세요',
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
	comments:{
		type:Array,
		default: []
	}
});

mongoose.model('Competition', CompetitionSchema);
