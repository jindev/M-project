'use strict';

module.exports = {
	app: {
		title: 'UNI MUSIC RACE',
		description: 'UNI MUSIC RACE',
		keywords: 'UNI MUSIC RACE'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [],
			js: [
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js', 
				'public/lib/angular-cookies/angular-cookies.js', 
				'public/lib/angular-animate/angular-animate.js', 
				'public/lib/angular-touch/angular-touch.js', 
				'public/lib/angular-sanitize/angular-sanitize.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/modules/users/angular-modal/modal.js',
				'https://www.youtube.com/iframe_api',
				'public/lib/angular-youtube-mb/src/angular-youtube-embed.js',
				'public/lib/ng-file-upload/ng-file-upload.min.js',
				'public/lib/ng-file-upload-shim/ng-file-upload-shim.min.js',
			]
		},
		css: [
      'public/application.min.css',
	  'public/modules/*/css/*.css',
      'public/modules/*/less/*.css',
			'public/modules/users/angular-modal/modal.css',
    ],
    less: [
      'public/modules/*/less/*.less'
    ],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};
