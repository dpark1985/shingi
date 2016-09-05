var h3Framework = angular.module('h3Framework')

.controller('bCableCtrl', ['$http', function ($http) {
	var $bCable = this;

	// cable menu config
	$bCable.routeConfig = [
		{name: '사업소개', templateUrl: 'templates/main/business/cable/0.html', active: true},
		{name: '사업영역', templateUrl: 'templates/main/business/cable/1.html', active: false}
	];

	// initial page to load
	$bCable.currentPage = $bCable.routeConfig[0].templateUrl;


	// clear all active class
	$bCable.clearActive = function () {
		for(var i=0; i<$bCable.routeConfig.length; i++){
			$bCable.routeConfig[i].active = false;
		}
	}

	// SubMenu Click
	$bCable.toSubMenu = function (index){
		$bCable.clearActive();
		$bCable.routeConfig[index].active = true;
		$bCable.currentPage = $bCable.routeConfig[index].templateUrl;
	}

}]);
