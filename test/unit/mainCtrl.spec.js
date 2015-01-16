require('../../public/main');
chai.should();

describe('rootCtrl', function() {
	var scope;
	var ctrl;
	beforeEach(inject(function($rootScope, $controller, $httpBackend) {

		scope = $rootScope.$new();

		ctrl = function() {
			return $controller('mainCtrl', {$scope: scope});
		};

	}));

	it('should fetch branches and contents from github using access token from the localStorage', function() {
		ctrl();
		(new Date() - scope.date < 500).should.be(true);
	});

});