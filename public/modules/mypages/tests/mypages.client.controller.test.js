'use strict';

(function() {
	// Mypages Controller Spec
	describe('Mypages Controller Tests', function() {
		// Initialize global variables
		var MypagesController,
		scope,
		$httpBackend,
		$stateParams,
		$location;

		// The $resource service augments the response object with methods for updating and deleting the resource.
		// If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
		// the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
		// When the toEqualData matcher compares two objects, it takes only object properties into
		// account and ignores methods.
		beforeEach(function() {
			jasmine.addMatchers({
				toEqualData: function(util, customEqualityTesters) {
					return {
						compare: function(actual, expected) {
							return {
								pass: angular.equals(actual, expected)
							};
						}
					};
				}
			});
		});

		// Then we can start by loading the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));

		// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
		// This allows us to inject a service but then attach it to a variable
		// with the same name as the service.
		beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {
			// Set a new global scope
			scope = $rootScope.$new();

			// Point global variables to injected services
			$stateParams = _$stateParams_;
			$httpBackend = _$httpBackend_;
			$location = _$location_;

			// Initialize the Mypages controller.
			MypagesController = $controller('MypagesController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one Mypage object fetched from XHR', inject(function(Mypages) {
			// Create sample Mypage using the Mypages service
			var sampleMypage = new Mypages({
				name: 'New Mypage'
			});

			// Create a sample Mypages array that includes the new Mypage
			var sampleMypages = [sampleMypage];

			// Set GET response
			$httpBackend.expectGET('mypages').respond(sampleMypages);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.mypages).toEqualData(sampleMypages);
		}));

		it('$scope.findOne() should create an array with one Mypage object fetched from XHR using a mypageId URL parameter', inject(function(Mypages) {
			// Define a sample Mypage object
			var sampleMypage = new Mypages({
				name: 'New Mypage'
			});

			// Set the URL parameter
			$stateParams.mypageId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/mypages\/([0-9a-fA-F]{24})$/).respond(sampleMypage);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.mypage).toEqualData(sampleMypage);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(Mypages) {
			// Create a sample Mypage object
			var sampleMypagePostData = new Mypages({
				name: 'New Mypage'
			});

			// Create a sample Mypage response
			var sampleMypageResponse = new Mypages({
				_id: '525cf20451979dea2c000001',
				name: 'New Mypage'
			});

			// Fixture mock form input values
			scope.name = 'New Mypage';

			// Set POST response
			$httpBackend.expectPOST('mypages', sampleMypagePostData).respond(sampleMypageResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the Mypage was created
			expect($location.path()).toBe('/mypages/' + sampleMypageResponse._id);
		}));

		it('$scope.update() should update a valid Mypage', inject(function(Mypages) {
			// Define a sample Mypage put data
			var sampleMypagePutData = new Mypages({
				_id: '525cf20451979dea2c000001',
				name: 'New Mypage'
			});

			// Mock Mypage in scope
			scope.mypage = sampleMypagePutData;

			// Set PUT response
			$httpBackend.expectPUT(/mypages\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/mypages/' + sampleMypagePutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid mypageId and remove the Mypage from the scope', inject(function(Mypages) {
			// Create new Mypage object
			var sampleMypage = new Mypages({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new Mypages array and include the Mypage
			scope.mypages = [sampleMypage];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/mypages\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleMypage);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.mypages.length).toBe(0);
		}));
	});
}());