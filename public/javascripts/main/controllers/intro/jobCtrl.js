var h3Framework = angular.module('h3Framework')

.controller('jobCtrl', ['$http', function ($http) {
	var $job = this;

	// job menu config
	$job.routeConfig = [
		{name: '인재상', templateUrl: 'templates/main/intro/job/0.html', active: true},
		{name: '채용안내', templateUrl: 'templates/main/intro/job/1.html', active: false},
		{name: '인사제도', templateUrl: 'templates/main/intro/job/2.html', active: false},
		{name: '채용공고', templateUrl: 'templates/main/intro/job/3.html', active: false},
	];

	// initial page to load
	$job.currentPage = $job.routeConfig[0].templateUrl;


	// clear all active class
	$job.clearActive = function () {
		for(var i=0; i<$job.routeConfig.length; i++){
			$job.routeConfig[i].active = false;
		}
	}

	// SubMenu Click
	$job.toSubMenu = function (index){
		$job.clearActive();
		$job.routeConfig[index].active = true;
		$job.currentPage = $job.routeConfig[index].templateUrl;
	}

}]);
