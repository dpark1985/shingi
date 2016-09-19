
var h3Framework = angular.module('h3Framework')

.directive('sideBar', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/main/common/sideBar.html',
		controller: 'sideCtrl',
		controllerAs: 'side'
	};
});
