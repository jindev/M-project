'use strict';

// Resultsannounces controller
angular.module('resultsannounces').controller('ResultsannouncesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Resultsannounces',
	function($scope, $stateParams, $location, Authentication, Resultsannounces) {
		$scope.authentication = Authentication;

		// Create new Resultsannounce
		$scope.create = function() {
			// Create new Resultsannounce object
			var resultsannounce = new Resultsannounces ({
				name: this.name
			});

			// Redirect after save
			resultsannounce.$save(function(response) {
				$location.path('resultsannounces/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Resultsannounce
		$scope.remove = function(resultsannounce) {
			if ( resultsannounce ) { 
				resultsannounce.$remove();

				for (var i in $scope.resultsannounces) {
					if ($scope.resultsannounces [i] === resultsannounce) {
						$scope.resultsannounces.splice(i, 1);
					}
				}
			} else {
				$scope.resultsannounce.$remove(function() {
					$location.path('resultsannounces');
				});
			}
		};

		// Update existing Resultsannounce
		$scope.update = function() {
			var resultsannounce = $scope.resultsannounce;

			resultsannounce.$update(function() {
				$location.path('resultsannounces/' + resultsannounce._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Resultsannounces
		$scope.find = function() {
			$scope.resultsannounces = Resultsannounces.query();
		};

		// Find existing Resultsannounce
		$scope.findOne = function() {
			$scope.resultsannounce = Resultsannounces.get({ 
				resultsannounceId: $stateParams.resultsannounceId
			});
		};
	}
]);