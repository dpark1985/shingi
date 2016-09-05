var h3Framework = angular.module('h3Framework')

.controller('bRealestateCtrl', ['$http', function ($http) {
	var $bRealestate = this;

	// realestate menu config
	$bRealestate.routeConfig = [
		{name: '사업소개', templateUrl: 'templates/main/business/re/0.html', active: true},
		{name: '사업영역', templateUrl: 'templates/main/business/re/1.html', active: false}
	];

	// initial page to load
	$bRealestate.currentPage = $bRealestate.routeConfig[0].templateUrl;


	// clear all active class
	$bRealestate.clearActive = function () {
		for(var i=0; i<$bRealestate.routeConfig.length; i++){
			$bRealestate.routeConfig[i].active = false;
		}
	}

	// SubMenu Click
	$bRealestate.toSubMenu = function (index){
		$bRealestate.clearActive();
		$bRealestate.routeConfig[index].active = true;
		$bRealestate.currentPage = $bRealestate.routeConfig[index].templateUrl;
	}

}]);
