
var h3Framework = angular.module('h3Framework')

.controller('sideCtrl', ['$shingi', '$location', function ($shingi, $location) {

	var $side = this;		//ControllerAs

	$side.toJob = function() {
		$location.path('/intro/job');
	};

	$side.toContact = function() {
		$location.path('/cr/contact');
	};

	$side.toInquiry = function() {
		$location.path('/cr/inquiry');
	};


}]);
