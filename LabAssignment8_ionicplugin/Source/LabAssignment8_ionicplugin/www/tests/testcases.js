describe('mycontroller1', function() {
	var scope;
	beforeEach(angular.mock.module('texttospeech'));
	beforeEach(angular.mock.inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		$controller('mycontroller1', {$scope: scope});
	}));

	it("Checks the speech conversion", function () {
		
	});
});