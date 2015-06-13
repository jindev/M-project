'use strict';

// Introduces controller
angular.module('introduces').controller('IntroducesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Introduces',
	function($scope, $stateParams, $location, Authentication, Introduces) {
		$scope.authentication = Authentication;

		// Create new Introduce
		$scope.create = function() {
			// Create new Introduce object
			var introduce = new Introduces ({
				name: this.name
			});

			// Redirect after save
			introduce.$save(function(response) {
				$location.path('introduces/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Introduce
		$scope.remove = function(introduce) {
			if ( introduce ) { 
				introduce.$remove();

				for (var i in $scope.introduces) {
					if ($scope.introduces [i] === introduce) {
						$scope.introduces.splice(i, 1);
					}
				}
			} else {
				$scope.introduce.$remove(function() {
					$location.path('introduces');
				});
			}
		};

		// Update existing Introduce
		$scope.update = function() {
			var introduce = $scope.introduce;

			introduce.$update(function() {
				$location.path('introduces/' + introduce._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Introduces
		$scope.find = function() {
			$scope.introduces = Introduces.query();
		};

		// Find existing Introduce
		$scope.findOne = function() {
			$scope.introduce = Introduces.get({ 
				introduceId: $stateParams.introduceId
			});
		};
	}
]);