'use strict';

(function() {
	// Introduces Controller Spec
	describe('Introduces Controller Tests', function() {
		// Initialize global variables
		var IntroducesController,
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

			// Initialize the Introduces controller.
			IntroducesController = $controller('IntroducesController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one Introduce object fetched from XHR', inject(function(Introduces) {
			// Create sample Introduce using the Introduces service
			var sampleIntroduce = new Introduces({
				name: 'New Introduce'
			});

			// Create a sample Introduces array that includes the new Introduce
			var sampleIntroduces = [sampleIntroduce];

			// Set GET response
			$httpBackend.expectGET('introduces').respond(sampleIntroduces);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.introduces).toEqualData(sampleIntroduces);
		}));

		it('$scope.findOne() should create an array with one Introduce object fetched from XHR using a introduceId URL parameter', inject(function(Introduces) {
			// Define a sample Introduce object
			var sampleIntroduce = new Introduces({
				name: 'New Introduce'
			});

			// Set the URL parameter
			$stateParams.introduceId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/introduces\/([0-9a-fA-F]{24})$/).respond(sampleIntroduce);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.introduce).toEqualData(sampleIntroduce);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(Introduces) {
			// Create a sample Introduce object
			var sampleIntroducePostData = new Introduces({
				name: 'New Introduce'
			});

			// Create a sample Introduce response
			var sampleIntroduceResponse = new Introduces({
				_id: '525cf20451979dea2c000001',
				name: 'New Introduce'
			});

			// Fixture mock form input values
			scope.name = 'New Introduce';

			// Set POST response
			$httpBackend.expectPOST('introduces', sampleIntroducePostData).respond(sampleIntroduceResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the Introduce was created
			expect($location.path()).toBe('/introduces/' + sampleIntroduceResponse._id);
		}));

		it('$scope.update() should update a valid Introduce', inject(function(Introduces) {
			// Define a sample Introduce put data
			var sampleIntroducePutData = new Introduces({
				_id: '525cf20451979dea2c000001',
				name: 'New Introduce'
			});

			// Mock Introduce in scope
			scope.introduce = sampleIntroducePutData;

			// Set PUT response
			$httpBackend.expectPUT(/introduces\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/introduces/' + sampleIntroducePutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid introduceId and remove the Introduce from the scope', inject(function(Introduces) {
			// Create new Introduce object
			var sampleIntroduce = new Introduces({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new Introduces array and include the Introduce
			scope.introduces = [sampleIntroduce];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/introduces\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleIntroduce);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.introduces.length).toBe(0);
		}));
	});
}());