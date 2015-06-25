'use strict';

module.exports = {
	//db: 'mongodb://localhost/m-project-dev',
	db: process.env.MONGOHQ_URL || "mongodb://heroku_0wsj0rd5:njh06qj38te4laf47vkdab3msm@ds047642.mongolab.com:47642/heroku_0wsj0rd5",
	app: {
		title: 'M-project - Development Environment'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '1419184695072279',
		clientSecret: process.env.FACEBOOK_SECRET || 'a9a329b8d20f217c469bcd72eaddf3db',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'ZyQsp99uSR12iHs6lyZFkTSkP',
		clientSecret: process.env.TWITTER_SECRET || 'QIZQ0PnJMwHUFx4K2lUEX5FzJ6Fv4Gh8K4g8aXj3EzUeuKBpwl',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || 'APP_ID',
		clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || 'APP_ID',
		clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};
