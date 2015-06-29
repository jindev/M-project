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
		required: '참가자명(팀명) 항목을 기재해 주세요.',
		trim: true
	},
	description : {
		type: String,
		default: '',
		required: '참가자 소개 항목을 기재해 주세요.',
		trim: true
	},
	songTitle : {
		type: String,
		default: '',
		required: '참가곡 제목 항목을 기재해 주세요.',
		trim: true
	},
	songDesc : {
		type: String,
		default: '',
		required: '참가곡 소개 항목을 기재해 주세요.',
		trim: true
	},
	lyric : {
		type: String,
		default: '',
		required: '참가곡 가사 항목을 기재해 주세요.',
		trim: true
	},
	phoneNum : {
		type: String,
		default: '',
		required: '연락처 항목을 기재해 주세요.',
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
		required: '유튜브 공유 주소 항목을 기재해 주세요.',
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
