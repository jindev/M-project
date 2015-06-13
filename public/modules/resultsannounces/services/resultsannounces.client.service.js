'use strict';

//Resultsannounces service used to communicate Resultsannounces REST endpoints
angular.module('resultsannounces').factory('Resultsannounces', ['$resource',
	function($resource) {
		return $resource('resultsannounces/:resultsannounceId', { resultsannounceId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);