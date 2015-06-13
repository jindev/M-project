'use strict';

(function() {
	// Resultsannounces Controller Spec
	describe('Resultsannounces Controller Tests', function() {
		// Initialize global variables
		var ResultsannouncesController,
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

			// Initialize the Resultsannounces controller.
			ResultsannouncesController = $controller('ResultsannouncesController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one Resultsannounce object fetched from XHR', inject(function(Resultsannounces) {
			// Create sample Resultsannounce using the Resultsannounces service
			var sampleResultsannounce = new Resultsannounces({
				name: 'New Resultsannounce'
			});

			// Create a sample Resultsannounces array that includes the new Resultsannounce
			var sampleResultsannounces = [sampleResultsannounce];

			// Set GET response
			$httpBackend.expectGET('resultsannounces').respond(sampleResultsannounces);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.resultsannounces).toEqualData(sampleResultsannounces);
		}));

		it('$scope.findOne() should create an array with one Resultsannounce object fetched from XHR using a resultsannounceId URL parameter', inject(function(Resultsannounces) {
			// Define a sample Resultsannounce object
			var sampleResultsannounce = new Resultsannounces({
				name: 'New Resultsannounce'
			});

			// Set the URL parameter
			$stateParams.resultsannounceId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/resultsannounces\/([0-9a-fA-F]{24})$/).respond(sampleResultsannounce);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.resultsannounce).toEqualData(sampleResultsannounce);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(Resultsannounces) {
			// Create a sample Resultsannounce object
			var sampleResultsannouncePostData = new Resultsannounces({
				name: 'New Resultsannounce'
			});

			// Create a sample Resultsannounce response
			var sampleResultsannounceResponse = new Resultsannounces({
				_id: '525cf20451979dea2c000001',
				name: 'New Resultsannounce'
			});

			// Fixture mock form input values
			scope.name = 'New Resultsannounce';

			// Set POST response
			$httpBackend.expectPOST('resultsannounces', sampleResultsannouncePostData).respond(sampleResultsannounceResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the Resultsannounce was created
			expect($location.path()).toBe('/resultsannounces/' + sampleResultsannounceResponse._id);
		}));

		it('$scope.update() should update a valid Resultsannounce', inject(function(Resultsannounces) {
			// Define a sample Resultsannounce put data
			var sampleResultsannouncePutData = new Resultsannounces({
				_id: '525cf20451979dea2c000001',
				name: 'New Resultsannounce'
			});

			// Mock Resultsannounce in scope
			scope.resultsannounce = sampleResultsannouncePutData;

			// Set PUT response
			$httpBackend.expectPUT(/resultsannounces\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/resultsannounces/' + sampleResultsannouncePutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid resultsannounceId and remove the Resultsannounce from the scope', inject(function(Resultsannounces) {
			// Create new Resultsannounce object
			var sampleResultsannounce = new Resultsannounces({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new Resultsannounces array and include the Resultsannounce
			scope.resultsannounces = [sampleResultsannounce];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/resultsannounces\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleResultsannounce);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.resultsannounces.length).toBe(0);
		}));
	});
}());