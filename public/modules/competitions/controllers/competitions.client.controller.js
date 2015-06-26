'use strict';

// Competitions controller
angular.module('competitions').controller('CompetitionsController', ['$scope', '$stateParams', '$location', '$http' ,'Authentication', 'Competitions','Comments','Likes',
	function($scope, $stateParams, $location,$http, Authentication, Competitions,Comments,Likes) {
		$scope.authentication = Authentication;
		$scope.likeCount = 0;


		console.log($scope.authentication);

		$scope.userId = $scope.authentication.user.username;



		if(additionalProvidersData){
			if(additionalProvidersData.facebook){

			}
			if(additionalProvidersData.facebook){

			}
		}


		// Create new Competition
		$scope.create = function() {
			// Create new Competition object
			console.log($scope.teamImg);
			var competition = new Competitions ({
				name: this.name,
				description : this.description,
				phoneNum : this.phoneNum,
				address : this.address,
				country : this.country,
				teamUrl : this.teamUrl,
				teamImg : this.teamImg
			});

			// Redirect after save
			competition.$save(function(response) {
				$location.path('competitions/' + response._id);

				// Clear form fields
				$scope.name = '';
				$scope.description = '';
				$scope.phoneNum = '';
				$scope.address = '';
				$scope.country = '';
				$scope.teamUrl = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Competition
		$scope.remove = function(competition) {
			if ( competition ) { 
				competition.$remove();

				for (var i in $scope.competitions) {
					if ($scope.competitions [i] === competition) {
						$scope.competitions.splice(i, 1);
					}
				}
			} else {
				$scope.competition.$remove(function() {
					$location.path('competitions');
				});
			}
		};

		// Update existing Competition
		$scope.update = function() {
			var competition = $scope.competition;

			competition.$update(function() {
				$location.path('competitions/' + competition._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Competitions
		$scope.find = function() {
			$scope.competitions = Competitions.query();
		};

		// Find existing Competition
		$scope.findOne = function() {
			$scope.competition = Competitions.get({
				competitionId: $stateParams.competitionId
			});

			$scope.comments = Comments.query({
				competitionId: $stateParams.competitionId
			});

			$scope.likes = Likes.query({
				competitionId: $stateParams.competitionId
			},function(){
				$scope.likeCount = getLikeCount($scope.likes);
				console.log($scope.likeCount);
			});



		};

		$scope.backToList = function(){
			window.history.back();
		}





		$scope.addComment = function() {
			// Create new Competition object
			var comment = new Comments ({
				commentContent : $scope.commentContent,
				competitionId : $scope.competition._id
			});

			// Redirect after save
			comment.$save(function(response) {

				$scope.commentContent = '';

				$scope.comments = Comments.query({
					competitionId: $stateParams.competitionId
				});


			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.uniLike = function(){
			var like = new Likes ({
				uniLike : 1,
				competitionId : $scope.competition._id
			});
			console.log($scope.competition._id);

			// Redirect after save
			like.$update(like,function(response) {

				$scope.likes = Comments.query({
					competitionId: $stateParams.competitionId
				},function(){
					$scope.likes = Likes.query({
						competitionId: $stateParams.competitionId
					},function(){
						$scope.likeCount = getLikeCount($scope.likes);
						console.log($scope.likeCount);
						$scope.uniLikeBtnFlag = true;
					});
				});


			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		}


		$scope.fbLike = function(){
			var like = new Likes ({
				fbLike : 1,
				competitionId : $scope.competition._id
			});
			console.log($scope.competition._id);

			// Redirect after save
			like.$update(like,function(response) {

				$scope.likes = Comments.query({
					competitionId: $stateParams.competitionId
				},function(){
					$scope.likes = Likes.query({
						competitionId: $stateParams.competitionId
					},function(){
						$scope.likeCount = getLikeCount($scope.likes);
						console.log($scope.likeCount);
						$scope.fbLikeBtnFlag = true;
					});
				});
			}, function(errorResponse,result) {
				$scope.error = errorResponse.data.message;


			});
		}

		$scope.twiLike = function(){
			var like = new Likes ({
				twiLike : 1,
				competitionId : $scope.competition._id
			});
			console.log($scope.competition._id);

			// Redirect after save
			like.$update(like,function(response) {

				$scope.likes = Comments.query({
					competitionId: $stateParams.competitionId
				},function(){
					$scope.likes = Likes.query({
						competitionId: $stateParams.competitionId
					},function(){
						$scope.likeCount = getLikeCount($scope.likes);
						console.log($scope.likeCount);
						$scope.twiLikeBtnFlag = true;
					});
				});
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;

			});
		}





function getLikeCount(likes){
	var count = 0;
	for(var i =0; i < likes.length; i ++){
		 count += likes[i].fbLike;
		 count += likes[i].twiLike;
		 count += likes[i].uniLike;
	}
	return count;
}



}]);



