'use strict';

// Mypages controller
angular.module('mypages').controller('MypagesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Mypages',
	function($scope, $stateParams, $location, Authentication, Mypages) {
		$scope.authentication = Authentication;

		// Create new Mypage
		$scope.create = function() {
			// Create new Mypage object
			var mypage = new Mypages ({
				name: this.name
			});

			// Redirect after save
			mypage.$save(function(response) {
				$location.path('mypages/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Mypage
		$scope.remove = function(mypage) {
			if ( mypage ) { 
				mypage.$remove();

				for (var i in $scope.mypages) {
					if ($scope.mypages [i] === mypage) {
						$scope.mypages.splice(i, 1);
					}
				}
			} else {
				$scope.mypage.$remove(function() {
					$location.path('mypages');
				});
			}
		};

		// Update existing Mypage
		$scope.update = function() {
			var mypage = $scope.mypage;

			mypage.$update(function() {
				$location.path('mypages/' + mypage._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Mypages
		$scope.find = function() {
			$scope.mypages = Mypages.query();
		};

		// Find existing Mypage
		$scope.findOne = function() {
			$scope.mypage = Mypages.get({ 
				mypageId: $stateParams.mypageId
			});
		};
	}
]);