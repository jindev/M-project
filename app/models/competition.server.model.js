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
	songTitle : {
		type: String,
		default: '',
		required: '노래 제목을 적어주세요',
		trim: true
	},
	songDesc : {
		type: String,
		default: '',
		required: '장르 및 곡의 내용을 적어주세요',
		trim: true
	},
	lyric : {
		type: String,
		default: '',
		required: '노래 가사를 적어주세요',
		trim: true
	},
	phoneNum : {
		type: String,
		default: '',
		required: '연락처를 적어주세요',
		trim: true
	},
	//address : {
	//	type: String,
	//	default: '',
	//	required: '주소를 적어주세요',
	//	trim: true
	//},
	//country : {
	//	type: String,
	//	default: '',
	//	required: '국가를 적어주세요',
	//	trim: true
	//},
	teamImgName : {
		type: String,
		default: '',
		trim: true
	},
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
	}
});

mongoose.model('Competition', CompetitionSchema);
