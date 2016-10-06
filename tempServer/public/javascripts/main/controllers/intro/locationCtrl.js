var h3Framework = angular.module('h3Framework')

.controller('locationCtrl', ['$http', function ($http) {
	var $loc = this;

	// loc menu config
	$loc.routeConfig = [
		{name: '본사', 		templateUrl: 'templates/main/intro/location/0.html', active: true},
		{name: '목동사옥', templateUrl: 'templates/main/intro/location/1.html', active: false},
		{name: '문류센터', templateUrl: 'templates/main/intro/location/2.html', active: false},
	];


	// clear all active class
	$loc.clearActive = function () {
		for(var i=0; i<$loc.routeConfig.length; i++){
			$loc.routeConfig[i].active = false;
		}
	}

	// SubMenu Click
	$loc.toSubMenu = function (index){
		$loc.clearActive();
		$loc.routeConfig[index].active = true;
		$loc.currentPageUrl = $loc.routeConfig[index].templateUrl;
	}


	// initial page to load
	$loc.currentPageUrl = $loc.routeConfig[0].templateUrl;


}]);
