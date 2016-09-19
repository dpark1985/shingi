
var h3Framework = angular.module('h3Framework')

.directive('navBar', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/main/common/navBar.html',
		controller: 'navCtrl',
		controllerAs: 'nav'
	};
});
